# Pages

`keystone-6-oauth` automatically creates simple, unbranded authentication pages for handling Sign in, Sign out, Email Verification and displaying error messages. This is the same behavior as [NextAuth.js](https://next-auth.js.org/configuration/pages).

The options displayed on the sign-up page are automatically generated based on the providers specified in the options passed to NextAuth.js.

To customize you can change the following pages options:

```javascript title="keystone.js" showLineNumbers
import { createAuth } from "keystone-6-oauth";
// ...

const auth = createAuth({
  // ...
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
  // ...
});
```