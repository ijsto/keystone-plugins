# Contributing

Thank you for considering to contribute to Keystone-OAuth plugin.

## Setting up your dev environment

After cloning run `yarn install` and either:

- `yarn dev` to run both the frontend and backend or
- `yarn dev:backend` for just the backend

The [Demo App](./apps/ks-frontend-demo) is configured in `next.config.js` to proxy `/api/auth` to the the host setup using the environment variable `BACKEND_BASE_URL` in development set `export BACKEND_BASE_URL=http://localhost:3000` you will also need to set your `NEXTAUTH_URL` environment variable see https://next-auth.js.org/configuration/options for more information
