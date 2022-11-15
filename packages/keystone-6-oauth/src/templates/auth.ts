import ejs from 'ejs';
import { NextAuthTemplateProps } from '../pages/NextAuthPage';

const template = `
import { getContext } from '@keystone-6/core/context';
import getNextAuthPage from 'keystone-6-oauth/pages/NextAuthPage';
import keystoneConfig from '../../../../../keystone';
import * as PrismaModule from '.prisma/client';

const keystoneContext = global.keystoneContext || getContext(keystoneConfig, PrismaModule);

if (process.env.NODE_ENV !== 'production') globalThis.keystoneContext = keystoneContext

export default getNextAuthPage({
        autoCreate: <%= autoCreate %>,
        context: keystoneContext,
        identityField: '<%= identityField %>',
        listKey: '<%= listKey %>',
        onSignIn: keystoneConfig.onSignIn,
        onSignUp: keystoneConfig.onSignUp,
        pages: keystoneConfig.pages,
        providers: keystoneConfig.providers,
        sessionData: '<%= sessionData %>',
        sessionSecret: '<%= sessionSecret %>',
    });
  `;

export const authTemplate = ({
  autoCreate,
  identityField,
  listKey,
  sessionData,
  sessionSecret,
}: NextAuthTemplateProps) => {
  const authOut = ejs.render(template, {
    autoCreate,
    identityField,
    listKey,
    sessionData,
    sessionSecret,
  });
  return authOut;
};
