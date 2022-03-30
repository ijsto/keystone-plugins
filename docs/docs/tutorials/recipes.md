# Recipes

Recipes will help you avoid the need for reasoning about the most common decisions you may need to make when integrating Keystone 6 into your application's business logic.

TODO: ...

## Faceboook

> NOTE: THIS RECIPE IS WORK-IN-PROGRESS

Resources:

- https://developers.facebook.com/tools/explorer/?method=GET&path=...%3Ffields%3Demail&version=v12.0
- https://developers.facebook.com/docs/graph-api/reference/profile-picture-source/#example

### Custom Facebook Image Size

You can customize size of the returned Facebook image by adding params to the `userinfo` object's `fields` key.

<!-- TODO: [CRITICAL]: Link to corresponding course -->

[Watch a full walk-through video here.](https://ijs.to/explore/courses)

```javascript
FacebookProvider({
  userinfo: {
    params: { fields: "email,name,picture.width(720).height(720)" },
  },
  //...
}),
```
