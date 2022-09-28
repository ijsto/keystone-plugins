README: TODO:

# Initial Credits

- Josh Calder [@borisno2](https://github.com/borisno2)
- Scott Agirs [@scottagirs](https://twitter.com/scottagirs)
- OpenSaasAU [@OpenSaasAU](https://github.com/OpenSaasAU)

# Troubleshooting

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
