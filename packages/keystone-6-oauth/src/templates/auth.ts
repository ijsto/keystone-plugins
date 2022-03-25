import ejs from "ejs";
import { NextAuthPageProps } from "../pages/NextAuthPage";
import { AuthGqlNames } from "../types";

const template = `
import getNextAuthPage from 'keystone-6-oauth/pages/NextAuthPage';
import { query } from '.keystone/api';
import keystoneConfig from '../../../../../keystone';

export default getNextAuthPage({
        autoCreate: <%= autoCreate %>,
        identityField: '<%= identityField %>',
        listKey: '<%= listKey %>',
        pages: keystoneConfig.pages,
        providers: keystoneConfig.providers,
        query,
        resolver: keystoneConfig.resolver,
        sessionData: '<%= sessionData %>',
        sessionSecret: '<%= sessionSecret %>',
    });
  `;

type AuthTemplateOptions = NextAuthPageProps & { gqlNames: AuthGqlNames };

export const authTemplate = ({
  gqlNames,
  autoCreate,
  identityField,
  listKey,
  pages,
  resolver,
  sessionData,
  sessionSecret,
}: AuthTemplateOptions) => {
  const authOut = ejs.render(template, {
    gqlNames,
    identityField,
    sessionData,
    listKey,
    autoCreate,
    pages,
    resolver,
    sessionSecret,
  });
  return authOut;
};
