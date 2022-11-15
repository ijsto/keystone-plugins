---
sidebar_position: 2
---

# Configuration

## ENV_VARS

### `SESSION_SECRET`

`SESSION_SECRET="S0_S3CR3T-GPX-3O0O"`

### `FRONTEND_URL`

This is the URL of your frontend application. It is used to redirect the user after they have authenticated.

`FRONTEND_URL="http://localhost:3000"`

### `NEXTAUTH_URL`

With the recommended configuration of Keystone, NextAuth.js this should be your client's URL + the auth endpoint.

`NEXTAUTH_URL="http://localhost:3000/admin/api/auth"`

# Configuration Options

Please refer to the [Core API](/docs/api-reference/core) for a full list of configuration options.