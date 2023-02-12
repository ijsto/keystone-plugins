import type {
  CookiesOptions,
  EventCallbacks,
  PagesOptions,
} from 'next-auth';
import type { Provider } from 'next-auth/providers';
import type { JWTOptions } from 'next-auth/jwt';

import { BaseListTypeInfo, KeystoneConfig, KeystoneContext, KeystoneDbAPI, KeystoneListsAPI } from '@keystone-6/core/types';

export type KeystoneOAuthOnSignIn = {
  account: any;
  profile: any;
  db: KeystoneDbAPI<Record<string, BaseListTypeInfo>>;
  query: KeystoneListsAPI<Record<string, BaseListTypeInfo>>;
  session: any; // TODO: Add dynamic session
  user: any;
};
export type KeystoneOAuthOnSignUp = {
  account: any;
  created?: any;
  profile: any;
  db: KeystoneDbAPI<Record<string, BaseListTypeInfo>>;
  query: KeystoneListsAPI<Record<string, BaseListTypeInfo>>;
  session: any;
  user: any;
};

export interface KeystoneOAuthOnSignUpResponse {
  [key: string]: any;
}

export type KeystoneOAuthCallbacks = {
  onSignIn?: (args: KeystoneOAuthOnSignIn) => Promise<boolean> | boolean;
  onSignUp?: (args: KeystoneOAuthOnSignUp) => Promise<KeystoneOAuthOnSignUpResponse>;
};

export type NextAuthTemplateProps = {
  autoCreate: boolean;
  context?: KeystoneContext;
  identityField: string;
  listKey: string;
  sessionData: string | undefined;
  sessionSecret: string;
};

export type KeystoneOAuth = {
  cookies?: Partial<CookiesOptions>;
  events?: Partial<EventCallbacks>;
  jwt?: Partial<JWTOptions>;
  pages?: Partial<PagesOptions>;
  providers: Provider[];
} & KeystoneOAuthCallbacks & NextAuthTemplateProps;

export declare type AuthSessionStrategy<StoredSessionData> = {
  start: (args: { data: any; context: KeystoneContext }) => Promise<unknown>;
  end: (args: { context: KeystoneContext }) => Promise<unknown>;
  get: (args: { context: KeystoneContext }) => Promise<StoredSessionData | undefined>;
}

export type NextAuthProviders = Provider[];

type KeystoneOAuthOptions = {
  /** KeystoneContext */
  context?: KeystoneContext;
  // Custom pages for different NextAuth events
  pages?: Partial<PagesOptions>;
  /** Providers for Next Auth */
  providers: NextAuthProviders;
};

type NextAuthOptions = {
  cookies?: Partial<CookiesOptions>;
} & KeystoneOAuthCallbacks;

export type KeystoneOAuthConfig = KeystoneConfig &
  KeystoneOAuthOptions &
  NextAuthOptions;

export type AuthConfig<GeneratedListTypes extends BaseListTypeInfo> = {
  /** Auth Create users in Keystone DB from Auth Provider */
  autoCreate: boolean;
  /** Adds ability to customize cookie options, for example, to facilitate cross-subdomain functionality */
  cookies?: Partial<CookiesOptions>;
  /** The key of the list to authenticate users with */
  listKey: GeneratedListTypes['key'];
  /** The path of the field the identity is stored in; must be text-ish */
  identityField: GeneratedListTypes['fields'];
  /** Path for Keystone interface */
  keystonePath?: string;
  /** Session data population */
  sessionData?: string;
  /** Next-Auth Session Secret */
  sessionSecret: string;
} & KeystoneOAuthCallbacks & KeystoneOAuthOptions;

export type AuthTokenRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordAuthErrorCode =
  | AuthTokenRequestErrorCode
  | 'FAILURE' // Generic
  | 'SECRET_NOT_SET'
  | 'SECRET_MISMATCH';

export type NextAuthErrorCode =
  | AuthTokenRequestErrorCode
  | 'FAILURE' // Generic
  | 'SUBJECT_NOT_FOUND';

export type AuthTokenRedemptionErrorCode =
  | AuthTokenRequestErrorCode
  | 'FAILURE' // Generic
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';
