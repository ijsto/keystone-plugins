import type { ServerResponse, IncomingMessage } from 'http';

import type {
  CookiesOptions,
  EventCallbacks,
  PagesOptions,
} from 'next-auth';
import type { Provider } from 'next-auth/providers';
import type { JWTOptions } from 'next-auth/jwt';

import type { NextRequest } from 'next/server';

import type {
  BaseListTypeInfo,
  KeystoneConfig,
  CreateContext,
  KeystoneContext,
} from '@keystone-6/core/types';

type NextAuthResponse = IncomingMessage & NextRequest;

export type KeystoneOAuthOnSignIn = {
  account: any;
  profile: any;
  context: KeystoneContext;
  user: any;
};
export type KeystoneOAuthOnSignUp = {
  account: any;
  created?: any;
  profile: any;
  context: KeystoneContext;
  user: any;
};

export type KeystoneOAuthCallbacks = {
  onSignIn?: (args: KeystoneOAuthOnSignIn) => Promise<boolean>;
  onSignUp?: (args: KeystoneOAuthOnSignUp) => Promise<boolean>;
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
  start: (args: {
    res: ServerResponse;
    data: any;
    createContext: CreateContext;
  }) => Promise<string>;
  end: (args: {
    req: IncomingMessage;
    res: ServerResponse;
    createContext: CreateContext;
  }) => Promise<void>;
  get: (args: {
    req: NextAuthResponse;
    createContext: CreateContext;
  }) => Promise<StoredSessionData | undefined>;
};

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
  sessionData?: string | undefined;
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
