import NextAuth from 'next-auth';

import { validateNextAuth } from '../lib/validateNextAuth';
import { KeystoneOAuth } from '../types';

export default function NextAuthPage(props: KeystoneOAuth) {
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
    context,
    sessionData,
    sessionSecret,
  } = props;

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('NextAuthPage got no context.');
    return null;
  }

  if (!providers || !providers.length) {
    // eslint-disable-next-line no-console
    console.error('You need to provide at least one provider.');
    return null;
  }

  const list = context.query[listKey];
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
          token.itemId = undefined;
        } else {
          token.itemId = nextAuthValidationResult.item.id;

          if (!token.itemId) {
            console.error("NextAuthPage: Couldn't find itemId in token.", { nextAuthValidationResult, token});
            throw new Error('No itemId found in token');
          }
          
          const data = await context.query[listKey].findOne({
            query: sessionData || 'id',
            where: { id: token.itemId as string }, // TODO: Q: is `tokenItemId` the same as `Authenticated.id`?
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
        } as any; // TODO: [TYPES] Add typings?

        return returnSession;
      },
      // @ts-ignore
      async signIn({ user, account, profile, ...rest }) {
        // TODO: @borisno2 - pls review the identity logic
        let identity;
        if (typeof user.id === 'string') {
          identity = user.id;
        } else if (typeof user.id === 'number') {
          identity = user.id;
        } else {
          identity = 0;
        }

        const nextAuthValidationResult = await validateNextAuth(
          identityField,
          identity,
          protectIdentities,
          list
        );

        // Authenticated Item is not found (does not exist) - so we create a new if is `autoCreate=true`.
        if (!nextAuthValidationResult.success) {
          if (!autoCreate) {
            return false;
          }

          const userProvidedSignUpFields = onSignUp
            ? await onSignUp({ account, context, profile, user, ...rest })
            : {};

          const data: any = {
            [identityField]: identity,
            ...userProvidedSignUpFields,
          };

          const createUser = await list
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
          // TODO: Add docs that developer needs to return true or false from `onSignIn` resolver.
          // Could have a flag in DB (eg. `disabledUser` etc) - Josh 🚀
          return await onSignIn({
            account,
            context,
            profile,
            user,
            ...rest,
          });
        }

        return true
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

export const getNextAuthPage = (props: KeystoneOAuth) => () =>
  NextAuthPage({ ...props });
