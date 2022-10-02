
# **Getting Started**

[NPM Package](https://www.npmjs.com/package/keystone-6-oauth) · [Documentation](https://keystone-oauth.vercel.app/)

## **Installation**

- Currently the only package manager that is tested and that we are certain will work without any issues is Yarn.
- PNPM currently may break things and if you decide to use it, run into some issues, please feel free to open a pull request (but please only do so, if you can provide a reproduction).
  - If you find a solution to any problems, a PR will be very much appreciated!

### **Step 1 - install**

```bash
  yarn add @opensaas/keystone-nextjs-auth
```

### **Next Steps**

Please visit our [docs](https://keystone-oauth.vercel.app/) for complete installation guide.


# **Troubleshooting**

If you are having issues with this package, please open a [New issue](https://github.com/ijsto/keystone-plugins/issues/new).

## Known issues

### `v0.3.3`

With this version you may run into a situation where the Keystone backend is compiling infinitely.

This will result in an error that looks something like this:

```bash
    // ...

    FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
     1: 0x104a0846c node::Abort() [/Users/scottagirs/n/bin/node]

    // ...
```

This is a known issue and will be fixed in the next release. For the time being you can fix it by adding a `"next"` resolution to your project's `package.json`:

```json
// package.json
{
    "//": ".... other values",
    "resolutions": {
        "next": "12.2.4"
    }
    "//": ".... other values",
}
```

### Credits: [Josh Calder](https://github.com/borisno2) · [@scottagirs](https://twitter.com/scottagirs) · [@OpenSaasAU](https://github.com/OpenSaasAU) · [iJS.to](https://ijs.to)