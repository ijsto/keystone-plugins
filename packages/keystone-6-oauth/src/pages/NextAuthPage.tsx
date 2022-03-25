import NextAuth, { EventCallbacks, PagesOptions } from 'next-auth';
import type { KeystoneListsAPI } from '@keystone-6/core/types';
import { Provider } from 'next-auth/providers';
import { validateNextAuth } from '../lib/validateNextAuth';
import { JWTOptions } from 'next-auth/jwt';

// Need to bring in correct props
type NextAuthPageProps = {
  identityField: string;
  jwt?: Partial<JWTOptions>;
  mutationName: string;
  providers: Provider[];
  query: KeystoneListsAPI<any>;
  sessionData: string;
  listKey: string;
  autoCreate: boolean;
  events?: Partial<EventCallbacks>;
  pages?: Partial<PagesOptions>;
  resolver: Function;
  sessionSecret: string;
};

export default function NextAuthPage(props: NextAuthPageProps) {
  const {
    events,
    providers,
    query,
    identityField,
    jwt,
    sessionData,
    listKey,
    autoCreate,
    pages,
    resolver,
    sessionSecret,
  } = props;
  // TODO: (v1.1.0). https://github.com/ijsto/keystone-6-oauth/projects/1#card-78602004
  // Tr

  const list = query[listKey];
  const queryAPI = query[listKey];
  const protectIdentities = true;

  return NextAuth({
    events,
    jwt,
    pages,
    providers,
    secret: sessionSecret,
    callbacks: {
      async signIn({ user, account, profile, ...rest }) {
        let identity;
        if (typeof user.id === 'string') {
          identity = user.id;
        } else if (typeof user.id === 'number') {
          identity = user.id;
        } else {
          identity = 0;
        }
        const userInput = await resolver({ user, account, profile, ...rest });

        const result = await validateNextAuth(
          identityField,
          identity,
          protectIdentities,
          queryAPI
        );
        // ID
        const data: any = {
          // TODO: - https://github.com/ijsto/keystone-6-oauth/projects/1#card-78601954
          [identityField]: identity,
          ...userInput,
        };

        if (!result.success) {
          if (!autoCreate) {
            console.log(
              '`autoCreate` if set to `false`, skipping user auto-creation'
            );
            return false;
          }
          console.log(
            '`autoCreate` if set to `true`, auto-creating a new user'
          );

          const createUser = await list
            .createOne({ data })
            .then((returned) => {
              console.log('User Created', JSON.stringify(returned));
              return true;
            })
            .catch((error) => {
              console.log(error);
              throw new Error(error);
            });
          console.log('Created User', createUser);
          return createUser;
        }
        // await list.updateOne({where: {id: result.item.id}, data});
        return result.success;
      },
      async redirect({ url }) {
        return url;
      },
      async session({ session, token }) {
        const returnSession = {
          ...session,
          data: token.data,
          subject: token.sub,
          listKey: token.listKey,
          itemId: token.itemId,
        };
        return returnSession;
      },
      async jwt({ token }) {
        const identity = token.sub as number | string;
        if (!token.itemId) {
          const result = await validateNextAuth(
            identityField,
            identity,
            protectIdentities,
            queryAPI
          );

          if (!result.success) {
            return token;
          }
          token.itemId = result.item.id;
        }
        const data = await query[listKey].findOne({
          where: { id: token.itemId },
          query: sessionData || 'id',
        });
        const returnToken = {
          ...token,
          data,
          subject: token.sub,
          listKey,
        };

        return returnToken;
      },
    },
  });
}

export const getNextAuthPage = (props: NextAuthPageProps) => () =>
  NextAuthPage({ ...props });
