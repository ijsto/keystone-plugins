import url from 'url';
import {
  AdminFileToWrite,
  BaseListTypeInfo,
  KeystoneConfig,
  KeystoneContext,
  AdminUIConfig,
  BaseKeystoneTypeInfo,
  SessionStrategy,
} from '@keystone-6/core/types';
import { getSession } from 'next-auth/react';
import { getToken, JWT } from 'next-auth/jwt';
import { Provider } from 'next-auth/providers';

import * as cookie from 'cookie';

import { Session } from 'next-auth';
import { nextConfigTemplate } from './templates/next-config';
// import * as Path from 'path';

import { AuthConfig, KeystoneOAuthConfig, AuthSessionStrategy } from './types';
import { getSchemaExtension } from './schema';
import { authTemplate } from './templates/auth';

/**
 * createAuth function
 *
 * Generates config for Keystone to implement standard auth features.
 */

export type { NextAuthProviders, KeystoneOAuthConfig } from './types';
export function createAuth<GeneratedListTypes extends BaseListTypeInfo>({
  autoCreate,
  context,
  cookies,
  identityField,
  listKey,
  keystonePath,
  onSignIn,
  onSignUp,
  pages,
  providers,
  sessionData,
  sessionSecret,
}: AuthConfig<GeneratedListTypes>) {
  // The protectIdentities flag is currently under review to see whether it should be
  // part of the createAuth API (in which case its use cases need to be documented and tested)
  // or whether always being true is what we want, in which case we can refactor our code
  // to match this. -TL

  const customPath = !keystonePath || keystonePath === '/' ? '' : keystonePath;
  /**
   * pageMiddleware
   *
   * Should be added to the ui.pageMiddleware stack.
   *
   * Redirects:
   *  - from the signin or init pages to the index when a valid session is present
   *  - to the init page when initFirstItem is configured, and there are no user in the database
   *  - to the signin page when no valid session is present
   */
  // TODO: [TYPES] Check pageMiddleware
  const pageMiddleware: AdminUIConfig<BaseKeystoneTypeInfo>['pageMiddleware'] =
    async ({ context, isValidSession }) => {
      const { req, session } = context;
      const pathname = url.parse(req?.url!).pathname!;

      if (isValidSession) {
        if (
          pathname === `${customPath}/api/auth/signin` ||
          (pages?.signIn && pathname.includes(pages?.signIn))
        ) {
          return { kind: 'redirect', to: `${customPath}` };
        }
        if (customPath !== '' && pathname === '/') {
          return { kind: 'redirect', to: `${customPath}` };
        }
        return null;
      }
      if (
        pathname.includes('/_next/') ||
        pathname.includes('/api/auth/') ||
        (pages?.signIn && pathname.includes(pages?.signIn)) ||
        (pages?.error && pathname.includes(pages?.error)) ||
        (pages?.signOut && pathname.includes(pages?.signOut))
      ) {
        return null;
      }
      if (!session && !pathname.includes(`${customPath}/api/auth/`)) {
        return {
          kind: 'redirect',
          to: pages?.signIn || `${customPath}/api/auth/signin`,
        };
      }
    };

  /**
   * getAdditionalFiles
   *
   * This function adds files to be generated into the Admin UI build. Must be added to the
   * ui.getAdditionalFiles config.
   *
   * The sign-in page is always included, and the init page is included when initFirstItem is set
   */
  const getAdditionalFiles = () => {
    const filesToWrite: AdminFileToWrite[] = [
      {
        mode: 'write',
        outputPath: 'pages/api/auth/[...nextauth].js',
        src: authTemplate({
          autoCreate,
          identityField,
          listKey,
          sessionData,
          sessionSecret,
        }),
      },
      {
        mode: 'write',
        outputPath: 'next.config.js',
        src: nextConfigTemplate({ keystonePath: customPath }),
      },
    ];
    return filesToWrite;
  };

  /**
   * publicAuthPages
   *
   * Must be added to the ui.publicPages config
   */
  const publicPages = [
    `${customPath}/api/__keystone_api_build`,
    `${customPath}/api/auth/csrf`,
    `${customPath}/api/auth/signin`,
    `${customPath}/api/auth/callback`,
    `${customPath}/api/auth/session`,
    `${customPath}/api/auth/providers`,
    `${customPath}/api/auth/signout`,
    `${customPath}/api/auth/error`,
  ];
  // TODO: [TYPES] Add Provider
  // @ts-ignore
  function addPages(provider: Provider) {
    const name = provider.id;
    publicPages.push(`${customPath}/api/auth/signin/${name}`);
    publicPages.push(`${customPath}/api/auth/callback/${name}`);
  }
  providers.map(addPages);

  /**
   * extendGraphqlSchema
   *
   * Must be added to the extendGraphqlSchema config. Can be composed.
   */
  const extendGraphqlSchema = getSchemaExtension({
    identityField,
    listKey,
  });

  /**
   * validateConfig
   *
   * Validates the provided auth config; optional step when integrating auth
   */
  const validateConfig = (keystoneConfig: KeystoneConfig) => {
    const listConfig = keystoneConfig.lists[listKey];
    if (listConfig === undefined) {
      const msg = `A createAuth() invocation specifies the list "${listKey}" but no list with that key has been defined.`;
      throw new Error(msg);
    }

    // TODO: Check for String-like typing for identityField? How?
    // TODO: Validate that the identifyField is unique.
    // TODO: If this field isn't required, what happens if I try to log in as `null`?
    const identityFieldConfig = listConfig.fields[identityField];
    if (identityFieldConfig === undefined) {
      const identityFieldName = JSON.stringify(identityField);
      const msg = `A createAuth() invocation for the "${listKey}" list specifies ${identityFieldName} as its identityField but no field with that key exists on the list.`;
      throw new Error(msg);
    }
  };

  /**
   * withItemData
   *
   * Automatically injects a session.data value with the authenticated item
   */
  /* TODO:
  - [ ] We could support additional where input to validate item sessions (e.g an isEnabled boolean)
*/
  const withItemData = (
    _sessionStrategy: AuthSessionStrategy<Record<string, any>>
  ): AuthSessionStrategy<{ listKey: string; itemId: string; data: any }> => {
    const { get, end, ...sessionStrategy } = _sessionStrategy;
    return {
      ...sessionStrategy,
      end: async ({ res, req, createContext }) => {
        await end({ createContext, req, res });
        const TOKEN_NAME =
          process.env.NODE_ENV === 'production'
            ? '__Secure-next-auth.session-token'
            : 'next-auth.session-token';
        res.setHeader(
          'Set-Cookie',
          cookie.serialize(TOKEN_NAME, '', {
            // TODO: Update parse to URL
            domain: url.parse(req.url as string).hostname as string,
            expires: new Date(),
            httpOnly: true,
            maxAge: 0,
            path: '/',
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
          })
        );
      },
      get: async ({ req, createContext }) => {
        const pathname = url.parse(req?.url!).pathname!;
        // TODO 
        let nextSession: JWT | Session & {
          listKey: string;
          itemId: string;
          data: any;
        } | null = null;

        if (pathname.includes('/api/auth')) {
          return null;
        }
        const sudoContext = createContext({ sudo: true });

        if (req.headers?.authorization?.split(' ')[0] === 'Bearer') {
          nextSession = (await getToken({
            req,
            secret: sessionSecret,
          }));
        } else {
          nextSession = (await getSession({ req })) as any; // TODO: [TYPES] Review nextSession
        }

        if (
          !nextSession ||
          !nextSession.listKey ||
          nextSession.listKey !== listKey ||
          !nextSession.itemId ||
          !sudoContext.query[listKey] ||
          !nextSession.itemId
        ) {
          return null;
        }
        const reqWithUser = req as any;
        reqWithUser.user = {
          data: nextSession.data,
          itemId: nextSession.itemId,
          listKey: nextSession.listKey,
        };

        const userSession = await get({ createContext, req: reqWithUser });

        return {
          ...userSession,
          ...nextSession,
          data: nextSession.data,
          itemId: nextSession.itemId,
          listKey: nextSession.listKey,
        };
      },
    };
  };

  /**
   * withAuth
   *
   * Automatically extends config with the correct auth functionality. This is the easiest way to
   * configure auth for keystone; you should probably use it unless you want to extend or replace
   * the way auth is set up with custom functionality.
   *
   * It validates the auth config against the provided keystone config, and preserves existing
   * config by composing existing extendGraphqlSchema functions and ui config.
   */
  const withAuth = (keystoneConfig: KeystoneConfig): KeystoneOAuthConfig => {
    validateConfig(keystoneConfig);
    let { ui } = keystoneConfig;
    if (keystoneConfig.ui) {
      ui = {
        ...keystoneConfig.ui,
        getAdditionalFiles: [
          ...(keystoneConfig.ui?.getAdditionalFiles || []),
          getAdditionalFiles,
        ],
        isAccessAllowed: async (context: KeystoneContext) => {
          const { req } = context;
          const pathname = url.parse(req?.url!).pathname!;

          // Allow nextjs scripts and static files to be accessed without auth
          if (pathname.includes('/_next/')) {
            return true;
          }

          // Allow keystone to access /api/__keystone_api_build for hot reloading
          if (
            process.env.NODE_ENV !== 'production' &&
            context.req?.url !== undefined &&
            new URL(context.req.url, 'http://example.com').pathname ===
              `${customPath}/api/__keystone_api_build`
          ) {
            return true;
          }

          return keystoneConfig.ui?.isAccessAllowed
            ? keystoneConfig.ui.isAccessAllowed(context)
            : context.session !== undefined;
        },
        pageMiddleware: async args =>
          // TODO: Review - do we need to check and throw Error if pageMiddleware is undefined?
          (pageMiddleware && (await pageMiddleware(args))) ??
          keystoneConfig?.ui?.pageMiddleware?.(args),
        publicPages: [...(keystoneConfig.ui.publicPages || []), ...publicPages],
      };
    }

    if (!keystoneConfig.session)
      throw new TypeError('Missing .session configuration');
    const session = withItemData(
      keystoneConfig.session
    ) as SessionStrategy<any>;

    const existingExtendGraphQLSchema = keystoneConfig.extendGraphqlSchema;
    return {
      ...keystoneConfig,
      context,
      cookies,
      extendGraphqlSchema: existingExtendGraphQLSchema
        // TODO: [TYPES] Add schema
        ? (schema:any) => existingExtendGraphQLSchema(extendGraphqlSchema(schema))
        : extendGraphqlSchema,
      lists: {
        ...keystoneConfig.lists,
      },
      onSignIn,
      onSignUp,
      pages,
      providers,
      session,
      ui,
    };
  };

  return { withAuth };
}
