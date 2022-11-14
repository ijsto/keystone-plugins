import type { ServerResponse, IncomingMessage } from 'http';
// TODO: Review this type - why "Cannot find module 'next/server'"?
// @ts-ignore
import type { NextRequest } from 'next/server';
import { Provider } from 'next-auth/providers';
import { CookiesOptions, PagesOptions } from 'next-auth';
import {
  BaseListTypeInfo,
  KeystoneConfig,
  CreateContext,
} from '@keystone-6/core/types';
import { NextAuthCallbackOptions } from './pages/NextAuthPage';

type NextAuthResponse = IncomingMessage & NextRequest;

export declare type AuthSessionStrategy<StoredSessionData> = {
  // TODO: Review definition
  // eslint-disable-next-line no-unused-vars
  start: (args: {
    res: ServerResponse;
    data: any;
    createContext: CreateContext;
  }) => Promise<string>;
  // TODO: Review definition
  // eslint-disable-next-line no-unused-vars
  end: (args: {
    req: IncomingMessage;
    res: ServerResponse;
    createContext: CreateContext;
  }) => Promise<void>;
  // TODO: Review definition
  // eslint-disable-next-line no-unused-vars
  get: (args: {
    req: NextAuthResponse;
    createContext: CreateContext;
  }) => Promise<StoredSessionData | undefined>;
};

export type NextAuthProviders = Provider[];

type KeystoneOAuthOptions = {
  providers: NextAuthProviders;
  pages?: Partial<PagesOptions>;
};
type NextAuthOptions = {
  cookies?: Partial<CookiesOptions>;
} & NextAuthCallbackOptions;

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
  // Custom pages for different NextAuth events
  pages?: Partial<PagesOptions>;
  /** Providers for Next Auth */
  providers: NextAuthProviders;
  /** Session data population */
  sessionData?: string | undefined;
  /** Next-Auth Session Secret */
  sessionSecret: string;
} & NextAuthCallbackOptions;

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
