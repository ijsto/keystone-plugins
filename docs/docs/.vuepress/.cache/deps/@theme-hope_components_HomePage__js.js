import {
  DropTransition_default
} from "./chunk-XNITGCH5.js";
import {
  MarkdownContent_default
} from "./chunk-XYEUHBQW.js";
import {
  AutoLink_default,
  Icon_default,
  isLinkExternal
} from "./chunk-P4HTJVEZ.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  RouterLink
} from "./chunk-RQ7A2YV3.js";
import "./chunk-P4PLXKWE.js";
import {
  computed,
  defineComponent,
  h
} from "./chunk-XQCAFQ4P.js";
import {
  isArray
} from "./chunk-P5YHOUTL.js";
import "./chunk-5E3NKPRU.js";

// ../../node_modules/vuepress-theme-hope/lib/client/components/HomeFeatures.js
var HomeFeatures_default = defineComponent({
  name: "HomeFeatures",
  setup() {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const features = computed(() => {
      if (isArray(frontmatter.value.features))
        return frontmatter.value.features;
      return [];
    });
    return () => {
      var _a;
      return features.value.length ? h("div", { class: "features" }, (_a = frontmatter.value.features) == null ? void 0 : _a.map((feature) => {
        const children = [
          h(Icon_default, { icon: feature.icon }),
          h("h2", { innerHTML: feature.title }),
          h("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h("a", {
          class: "feature link",
          href: feature.link,
          role: "navigation",
          target: "_blank"
        }, children) : h(RouterLink, {
          class: "feature link",
          to: feature.link,
          role: "navigation"
        }, () => children) : h("div", { class: "feature" }, children);
      })) : null;
    };
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/components/HomeHero.js
var HomeHero_default = defineComponent({
  name: "HomeHero",
  setup(_props, { slots }) {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const siteLocale = (0, client_exports.useSiteLocaleData)();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return (0, client_exports.withBase)(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return (0, client_exports.withBase)(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => isArray(frontmatter.value.actions) ? frontmatter.value.actions : []);
    return () => {
      var _a, _b;
      return h("header", { class: "hero" }, [
        ((_a = slots["heroImage"]) == null ? void 0 : _a.call(slots)) || h(DropTransition_default, { appear: true, type: "group" }, () => [
          heroImage.value ? h("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b = slots["heroInfo"]) == null ? void 0 : _b.call(slots)) || h("div", { class: "hero-info" }, [
          heroText.value ? h(DropTransition_default, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h(DropTransition_default, { appear: true, delay: 0.08 }, () => h("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h(DropTransition_default, { appear: true, delay: 0.12 }, () => h("p", { class: "actions" }, actions.value.map((action) => h(AutoLink_default, {
            class: ["action-button", action.type || "default"],
            config: action,
            externalLinkIcon: false
          })))) : null
        ])
      ]);
    };
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/components/HomePage.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/styles/home-page.scss";
var HomePage_default = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    return () => {
      var _a, _b, _c;
      return h("main", {
        class: "home project",
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a = slots["top"]) == null ? void 0 : _a.call(slots),
        h(HomeHero_default),
        h(DropTransition_default, { appear: true, delay: 0.16 }, () => h(HomeFeatures_default)),
        (_b = slots["center"]) == null ? void 0 : _b.call(slots),
        h(DropTransition_default, { appear: true, delay: 0.24 }, () => h(MarkdownContent_default, { custom: true })),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});

// dep:@theme-hope_components_HomePage__js
var theme_hope_components_HomePage_js_default = HomePage_default;
export {
  theme_hope_components_HomePage_js_default as default
};
//# sourceMappingURL=@theme-hope_components_HomePage__js.js.map
