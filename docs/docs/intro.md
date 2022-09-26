---
sidebar_position: 1
---

# Introduction

:::warning

Please note: we are currently in early stages of migrating this documentation. We will tweet once in Alpha, Beta and Stable. :)
Follow [@scottagirs](https://twitter.com/scottagirs), [Josh Calder](https://twitter.com/OpenSaasAU) or [@ijsto](https://twitter.com/ijstodev) on Twitter for updates.

:::

# Getting Started

Below are instructions for getting started with Keystone6 OAuth.

In the future, other plugins will be added to this repository.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.13 or above
- [Keystone6](https://keystonejs.com/) project

## Installation

To install run the following command in your Keystone6 project:

```bash
yarn add keystone-6-oauth
```

## Usage

Once installed, you will need to modify your Keystone config (by default at `./keystone.js`) file.

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
