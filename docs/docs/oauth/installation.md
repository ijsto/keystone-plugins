# Installation

## Install package

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add keystone-6-oauth
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
npm install keystone-6-oauth
```
  </CodeGroupItem>

  <CodeGroupItem title="PNPM">

```bash
pnpm install keystone-6-oauth
```

  </CodeGroupItem>
</CodeGroup>

## Keystone 6 Setup

### Import `createAuth`

```javascript
// ./keystone.ts
import { createAuth } from "keystone-6-oauth"; // Added this
// ...
```

### Import Provider of your choice

```javascript
// ./keystone.ts
import { createAuth } from "keystone-6-oauth";
import Facebook from "keystone-6-oauth/providers/Facebook"; // Added this
```

### Session Secret

<!-- TODO: Add description about session secret -->

Define `sessionSection` and handler to ensure it is present.

```javascript
// ./keystone.ts
import { createAuth } from "keystone-6-oauth";

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

```javascript
import { createAuth } from "keystone-6-oauth";
import Facebook from "keystone-6-oauth/providers/Facebook";

// ...

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

```javascript
export default auth.withAuth(
  config({
    db: {},
    lists,
    // ...
  });
```

<!-- TODO: ... -->

## Next.js setup

<!-- TODO: -->

> NEXT.JS SETUP GUIDE IS COMING SOON.
