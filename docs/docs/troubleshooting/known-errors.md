# Known Errors

Below is a list of potential errors or issues you may run into (that we have discovered).

## 🚨 There was an error loading your Keystone config

### Issue

After installing, re-installing, cloning or starting your Keystone App, you are faced with the below error:

```bash
Error: Cannot find module '/home/optimbro/dev/projects/dotSentry/backend/.keystone/admin/.next/server/pages/api/__keystone_api_build'
```

### Solution

#### **Option A**

- delete the `.keystone` and `node_modules` folders
- re-install Keystone `yarn install`
- start Keystone `yarn dev`

Additionally you can visit http://localhost:3000/admin/api/auth (`http://BACKEND_URL/admin/api/auth`) and log in.
This should explicitly generate the missing `api` folder.

#### **Option B**

- delete the `.keystone` and `node_modules` folders
- clean yarn cache `yarn cache clean`
- re-install Keystone `yarn install`
- start Keystone `yarn dev`

Additionally you can visit http://localhost:3000/admin/api/auth (`http://BACKEND_URL/admin/api/auth`) and log in.
This should explicitly generate the missing `api` folder.

#### **Option C (last resort)**

- delete the `.keystone` and `node_modules` folders
- clean yarn cache `yarn cache clean`
- restart your computer
- re-install Keystone `yarn install`
- start Keystone `yarn dev`

Additionally you can visit http://localhost:3000/admin/api/auth (`http://BACKEND_URL/admin/api/auth`) and log in.
This should explicitly generate the missing `api` folder.

### Cause

It is unclear at the moment why this error occurs.
If you come across the root cause of this, please [create a PR](https://github.com/ijsto/keystone-plugins/pulls), or [submit and issue](https://github.com/ijsto/keystone-plugins/issues/new) with your findings, we will add it here so others can benefit from it.
