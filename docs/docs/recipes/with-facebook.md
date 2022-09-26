---
sidebar_position: 1
---

# With Facebook

This recipe will guide you through the process of adding Facebook OAuth to your Keystone project.

:::caution

Caveat:

:::

## Resolver

To learn more about resolvers see Resolvers API Reference.

Modify the `withAuth°:

```js title="By default in keystone.js"
  const auth = createAuth({
    // ...
    resolver: async (props: any) => {
      const username = props.user.name as string;
      const email = props.user.email as string;

      return { email, username };
    },
      // ...
  });
```
