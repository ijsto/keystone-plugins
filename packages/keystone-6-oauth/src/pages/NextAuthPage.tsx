import NextAuth from 'next-auth';

import { validateNextAuth } from '../lib/validateNextAuth';
import { KeystoneOAuth } from '../types';

export default function NextAuthPage(props: KeystoneOAuth) {
  const {
    autoCreate = true,
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

  const listQueryAPI = context.query[listKey];
  const allowAccountLinks = true; // TODO: Review + implement account links

  return NextAuth({
    callbacks: {
      async jwt({ token }) {
        const identity = token.sub;
        if (!identity) return token;
        
        const nextAuthValidationResult = await validateNextAuth(
          identityField,
          identity,
          allowAccountLinks,
          listQueryAPI
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
          return session;
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
      async signIn({ user, account, profile, ...rest }) {
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
          allowAccountLinks,
          listQueryAPI
        );

        // Authenticated Item is not found (does not exist) - unless the default `autoCreate=true` is overwritten.
        if (!nextAuthValidationResult.success) {
          if (!autoCreate) {
            return false;
          }

          const userProvidedSignUpFields = onSignUp
            ? await onSignUp({
                account,
                db: context.db,
                profile, user ,
                query: context.query,
                session: context.session,
            })
            : {};

          const data: any = {
            [identityField]: identity,
            ...userProvidedSignUpFields,
          };

          const findExistingUser = await listQueryAPI
            .findOne({
              where: { email: user.email },
              query: 'id email signUpProvider',
            });

          if (findExistingUser) {
            throw new Error(`Email already in use with ${findExistingUser.signUpProvider}`);
          }

          const createUser = await listQueryAPI
            .createOne({ data })
            .then(returned => ({ success: true, user: returned }))
            .catch(error => {
              // eslint-disable-next-line no-console
              console.error(error);
              if (error.message.toLowerCase().includes('unique constraint')) {
                throw new Error(`Email already in use with ${data.signUpProvider}`);
              }
              throw new Error(error);
            });

          return createUser.success;
        }

        // if nextAuthValidationResult.success is true, we have an authenticated item, and we sign in with optional `onSignIn` resolver.
        if (onSignIn) {
          // TODO: Add docs that developer needs to return true or false from `onSignIn` resolver.
          // Could have a flag in DB (eg. `disabledUser` etc)

          return await onSignIn({
            account,
            db: context.db,
            profile,
            query: context.query,
            session: context.session,
            user,
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
