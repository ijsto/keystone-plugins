/* eslint-disable no-param-reassign */
import NextAuth, {
  CookiesOptions,
  EventCallbacks,
  PagesOptions,
} from 'next-auth';
import type { KeystoneListsAPI } from '@keystone-6/core/types';
import { Provider } from 'next-auth/providers';
import { JWTOptions } from 'next-auth/jwt';
import { validateNextAuth } from '../lib/validateNextAuth';

export type NextAuthTemplateProps = {
  autoCreate: boolean;
  identityField: string;
  listKey: string;
  sessionData: string | undefined;
  sessionSecret: string;
};

export type NextAuthCallbackOptions = {
  // TODO: Review definition of this type
  // eslint-disable-next-line no-unused-vars
  onSignIn?: (args: {
    account: any;
    profile: any;
    query: any; // TODO: Can we get KS query type here?
    user: any;
  }) => Promise<void>;
  // TODO: Review definition of this type
  // eslint-disable-next-line no-unused-vars
  onSignUp?: (args: {
    account: any;
    created?: any;
    profile: any;
    query: any; // TODO: Can we get KS query type here?
    user: any;
  }) => Promise<void>;
  // TODO: Review definition of this type
  // eslint-disable-next-line no-unused-vars
  resolver?: (args: {
    account: any;
    profile: any;
    query: any; // TODO: Can we get KS query type here?
    user: any;
  }) => Promise<{
    [key: string]: boolean | string | number;
  }>;
};

export type CoreNextAuthPageProps = {
  cookies?: Partial<CookiesOptions>;
  events?: Partial<EventCallbacks>;
  jwt?: Partial<JWTOptions>;
  pages?: Partial<PagesOptions>;
  providers: Provider[];
} & NextAuthTemplateProps &
  NextAuthCallbackOptions;

export type NextAuthPageProps = CoreNextAuthPageProps & {
  query: KeystoneListsAPI<any>;
};

// eslint-disable-next-line react/function-component-definition
export default function NextAuthPage(props: NextAuthPageProps) {
  const {
    autoCreate,
    cookies,
    events,
    identityField,
    jwt,
    listKey,
    onSignIn,
    onSignUp,
    pages,
    providers,
    query,
    resolver,
    sessionData,
    sessionSecret,
  } = props;

  if (!query) {
    // eslint-disable-next-line no-console
    console.error('NextAuthPage got no query.');
    return null;
  }

  if (!providers || !providers.length) {
    // eslint-disable-next-line no-console
    console.error('You need to provide at least one provider.');
    return null;
  }

  const list = query[listKey];
  const protectIdentities = true;

  return NextAuth({
    callbacks: {
      async jwt({ token }) {
        const identity = token.sub as number | string;
        const nextAuthValidationResult = await validateNextAuth(
          identityField,
          identity,
          protectIdentities,
          list
        );

        if (!nextAuthValidationResult.success) {
          token.itemId = null;
        } else {
          token.itemId = nextAuthValidationResult.item.id;
          const data = await query[listKey].findOne({
            query: sessionData || 'id',
            where: { id: token.itemId },
          });
          token.data = data;
        }
        const returnToken = {
          ...token,
          listKey,
          subject: token.sub,
        };

        return returnToken;
      },
      async redirect({ url }) {
        return url;
      },
      async session({ session, token }) {
        let returnSession = session;
        if (!token.itemId) {
          return { expires: '0' };
        }
        returnSession = {
          ...session,
          data: token.data,
          itemId: token.itemId as string,
          listKey: token.listKey as string,
          subject: token.sub,
        };

        return returnSession;
      },
      async signIn({ user, account, profile, ...rest }) {
        let identity;
        if (typeof user.id === 'string') {
          identity = user.id;
        } else if (typeof user.id === 'number') {
          identity = user.id;
        } else {
          // TODO: Review logic
          identity = 0;
        }

        const nextAuthValidationResult = await validateNextAuth(
          identityField,
          identity,
          protectIdentities,
          list
        );

        // Resolver gets called every tme authentication is fired.
        // TODO: Review - this may not work if `autoCreate` is set to `false`, in which case there would be no user to update.
        if (resolver) {
          const userProvidedResolverResponse = resolver
            ? await resolver({ account, profile, query, user, ...rest })
            : {};

          const data: any = {
            [identityField]: identity,
            ...userProvidedResolverResponse,
          };

          const updateAuthenticatedItem = await list
            .updateOne({
              data,
              where: { id: nextAuthValidationResult.item.id },
            })
            .then(returned => ({ success: true, user: returned }))
            .catch(error => {
              // eslint-disable-next-line no-console
              console.error(error);
              throw new Error(error);
            });

          if (!updateAuthenticatedItem.success)
            throw new Error('Unable to fulfill user update from resolver');
        }

        // Authenticated Item is not found (does not exist) - so we create a new if is `autoCreate=true`.
        if (!nextAuthValidationResult.success) {
          if (!autoCreate) {
            return false;
          }

          const userProvidedSignUpFields = onSignUp
            ? await onSignUp({ account, profile, query, user, ...rest })
            : {};

          // ID
          const data: any = {
            [identityField]: identity,
            ...userProvidedSignUpFields,
          };

          const createUser = await list
            // TODO: Look into what happens if fields are required, for example, if `username` is required, we may need to provide some feedback why it fails.
            .createOne({ data })
            .then(returned => ({ success: true, user: returned }))
            .catch(error => {
              // eslint-disable-next-line no-console
              console.error(error);
              throw new Error(error);
            });

          return createUser.success;
        }

        // if nextAuthValidationResult.success is true, we have an authenticated item, and we sign in with optional `onSignIn` resolver.
        if (onSignIn) {
          await onSignIn({
            account,
            profile,
            query,
            user,
            ...rest,
          });
        }

        return true;
      },
    },
    cookies,
    events: events || {},
    jwt: jwt || {},
    pages: pages || {},
    providers,
    secret: sessionSecret,
  });
}

export const getNextAuthPage = (props: NextAuthPageProps) => () =>
  NextAuthPage({ ...props });
