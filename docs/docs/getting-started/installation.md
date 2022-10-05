---
sidebar_position: 2
---

# Installation

To install run the following command in your Keystone6 project:

```bash npm2yarn2pnpm
npm install keystone-6-oauth
```

## Usage

Once installed, you will need to modify your Keystone config (by default at `./keystone.js`) file.

### Import `createAuth`

```javascript showLineNumbers title="keystone.js"
import { createAuth } from "keystone-6-oauth";
```

### Import Provider of your choice

```javascript {2} showLineNumbers title="keystone.js"
import { createAuth } from "keystone-6-oauth";
import Facebook from "keystone-6-oauth/providers/Facebook";
```

### Session Secret

<!-- TODO: Add description about session secret -->

Define `sessionSection` and handler to ensure it is present.

```javascript {5,7-15} showLineNumbers title="keystone.js"
import { createAuth } from "keystone-6-oauth";
import Facebook from "keystone-6-oauth/providers/Facebook";
// ...

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
    if (process.env.NODE_ENV === "production") {
        throw new Error(
            "The SESSION_SECRET environment variable must be set in production"
        );
    } else {
        sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
    }
}
```

### Configure Keystone

Configure Keystone auth, including providers for Provider. For documentation on Providers and their API & options see https://next-auth.js.org/providers/.

To use a given Provider, replace `next-auth/providers` with `keystone-6-oauth/providers`

```javascript {17-36} showLineNumbers title="keystone.js"
import { createAuth } from "keystone-6-oauth";
import Facebook from "keystone-6-oauth/providers/Facebook";
// ...

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
    if (process.env.NODE_ENV === "production") {
        throw new Error(
            "The SESSION_SECRET environment variable must be set in production"
        );
    } else {
        sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
    }
}

const auth = createAuth({
    listKey: 'User',
    identityField: 'subjectId',
    sessionData: `id name email`,
    autoCreate: true,
    resolver: async (props: any) => {
        const username = props.user.name as string;
        const email = props.user.email as string;

        return { email, username };
    },
    keystonePath: '/admin',
    sessionSecret,
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID || "NextAuthClientID",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "NextAuthClientSecret",
        }),
    ]
});
```

### Final step

Wrap your keystone config in `auth.withAuth()`.

```javascript {3-17} showLineNumbers title="keystone.js"
// ...everything from previous codeblocks

export default auth.withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL as string,
    },
    lists,
    session,
    ui: {
      isAccessAllowed: context => !!context.session?.data,
    },
  })
);
```

## Next Steps

Your Keystone app should now be ready. The next step is to setup your Next.js application.