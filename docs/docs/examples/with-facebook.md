---
sidebar_position: 1
---

# With Facebook

This recipe will guide you through the process of adding Facebook OAuth to your Keystone project.

## Resolver

To learn more about resolvers see Resolvers API Reference.

Modify the `withAuth°:

```js showLineNumbers title="keystone.js"
  const auth = createAuth({
    // ...
    onSignIn: async (props: any) => {
      return true;
    },
      // ...
  });
```
