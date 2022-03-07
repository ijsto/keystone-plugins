import ejs from 'ejs';
import { AuthGqlNames } from '../types';

const template = `
import getNextAuthPage from 'keystone-6-oauth/pages/NextAuthPage';
import { query } from '.keystone/api';
import keystoneConfig from '../../../../../keystone';

export default getNextAuthPage({
        identityField: '<%= identityField %>',
        sessionData: '<%= sessionData %>',
        listKey: '<%= listKey %>',
        autoCreate: <%= autoCreate %>,
        sessionSecret: '<%= sessionSecret %>',
        resolver: keystoneConfig.resolver,
        providers: keystoneConfig.providers,
        query,
    });
  `;

export const authTemplate = ({
  gqlNames,
  identityField,
  sessionData,
  listKey,
  autoCreate,
  resolver,
  sessionSecret,
}: {
  gqlNames: AuthGqlNames;
  identityField: string;
  sessionData: any;
  listKey: string;
  autoCreate: boolean;
  resolver: Function;
  sessionSecret: string;
}) => {
  const authOut = ejs.render(template, {
    gqlNames,
    identityField,
    sessionData,
    listKey,
    autoCreate,
    resolver,
    sessionSecret,
  });
  return authOut;
};
