import type { BaseItem, KeystoneListsAPI } from '@keystone-6/core/types';
import { NextAuthErrorCode } from '../types';
import { findMatchingIdentity } from './findMatchingIdentity';

export async function validateNextAuth(
  identityField: string,
  identity: string | number,
  protectIdentities: boolean,
  listQueryAPI: KeystoneListsAPI<any>[string]
): Promise<
  | { success: false; item?: any; code: NextAuthErrorCode }
  | { success: true; item: BaseItem }
> {
  const match = await findMatchingIdentity(identityField, identity, listQueryAPI);

  const { item } = match as {
    success: true;
    item: { id: any; [prop: string]: any };
  };

  if (item) {
    return { item, success: true };
  }

  return {
    code: protectIdentities ? 'FAILURE' : 'SUBJECT_NOT_FOUND',
    success: false,
  };
}
