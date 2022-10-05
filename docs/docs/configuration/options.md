---
sidebar_position: 2
---

# Options

## ENV_VARS

### `SESSION_SECRET`

`SESSION_SECRET="S|_|P3R_S3CR3T-GPX-3O0O"`

### `FRONTEND_URL`

This is the URL of your frontend application. It is used to redirect the user after they have authenticated.

`FRONTEND_URL="http://localhost:3000"`

### `NEXTAUTH_URL`

With the recommended configuration of Keystone, NextAuth.js this should be your client's URL + the auth endpoint.

`NEXTAUTH_URL="http://localhost:3000/admin/api/auth"`

## autoCreate
- Default value: `false`
- Required: No

### Description

Coming soon.
<!-- TODO: @borisno2 -->

## pages
- Default value: {}
- Required: No

### Description
Specify URLs to be used if you want to create custom sign in, sign out and error pages.

Pages specified will override the corresponding built-in page.

For example:

```javascript title="keystone.js" showLineNumbers
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
```