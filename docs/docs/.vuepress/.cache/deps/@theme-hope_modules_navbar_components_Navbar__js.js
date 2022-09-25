import {
  resolveRepoType
} from "./chunk-VQ7FQDPI.js";
import {
  useDarkMode
} from "./chunk-BM37VB45.js";
import {
  useAutoLink,
  useMobile,
  usePure,
  useThemeData,
  useThemeLocaleData
} from "./chunk-BYQIQ7ZI.js";
import {
  Mt,
  nt
} from "./chunk-UMIBI3BT.js";
import {
  AutoLink_default,
  Icon_default,
  isLinkExternal,
  isLinkHttp
} from "./chunk-P4HTJVEZ.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  RouterLink,
  useRoute,
  useRouter
} from "./chunk-RQ7A2YV3.js";
import "./chunk-P4PLXKWE.js";
import {
  useFullscreen,
  useScrollLock
} from "./chunk-2TVHH35V.js";
import {
  Transition,
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  resolveComponent,
  toRef,
  watch
} from "./chunk-XQCAFQ4P.js";
import {
  isString
} from "./chunk-P5YHOUTL.js";
import "./chunk-5E3NKPRU.js";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/icons/i18nIcon.js
var I18nIcon = () => h(nt, { name: "i18n" }, () => [
  h("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/icons/outlookIcon.js
var OutlookIcon = () => h(nt, { name: "outlook" }, () => [
  h("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/icons/repoIcon.js
var GitHubIcon = () => h(nt, { name: "github" }, () => h("path", {
  d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"
}));
GitHubIcon.displayName = "GitHubIcon";
var GitlabIcon = () => h(nt, { name: "gitlab" }, () => h("path", {
  d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"
}));
GitlabIcon.displayName = "GitlabIcon";
var GiteeIcon = () => h(nt, { name: "gitee" }, () => h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"
}));
GiteeIcon.displayName = "GiteeIcon";
var BitbucketIcon = () => h(nt, { name: "bitbucket" }, () => h("path", {
  d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"
}));
BitbucketIcon.displayName = "BitbucketIcon";
var SourceIcon = () => h(nt, { name: "source" }, () => h("path", {
  d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"
}));
SourceIcon.displayName = "SourceIcon";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/DropdownLink.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/dropdown-link.scss";
var DropdownLink_default = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const route = useRoute();
    const config = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a;
      return h("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h("button", {
          class: "dropdown-title",
          type: "button",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a = slots["title"]) == null ? void 0 : _a.call(slots)) || h("span", { class: "title" }, [
            h(Icon_default, { icon: config.value.icon }),
            props.config.text
          ]),
          h("span", { class: "arrow" }),
          h("ul", { class: "nav-dropdown" }, config.value.children.map((child, index) => {
            const isLastChild = index === config.value.children.length - 1;
            return h("li", { class: "dropdown-item" }, "children" in child ? [
              h("h4", { class: "dropdown-subtitle" }, child.link ? h(AutoLink_default, {
                config: child,
                onFocusout: () => {
                  if (child.children.length === 0 && isLastChild)
                    open.value = false;
                }
              }) : h("span", child.text)),
              h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h("li", { class: "dropdown-subitem" }, h(AutoLink_default, {
                config: grandchild,
                onFocusout: () => {
                  if (grandIndex === child.children.length - 1 && isLastChild)
                    open.value = false;
                }
              }))))
            ] : h(AutoLink_default, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/composables/navbarConfig.js
var resolveNavbarItem = (item, prefix = "") => {
  if (isString(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
var useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/composables/navbarLanguageDropdown.js
var useNavbarLanguageDropdown = () => {
  const router = useRouter();
  const routeLocale = (0, client_exports.useRouteLocale)();
  const siteLocale = (0, client_exports.useSiteLocaleData)();
  const themeData = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, hash } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const targetSiteLocale = (_b = (_a = siteLocale.value.locales) == null ? void 0 : _a[targetLocalePath]) != null ? _b : {};
        const targetThemeLocale = (_d = (_c = themeData.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
        const targetLang = targetSiteLocale.lang || "";
        const text = (_f = (_e = targetThemeLocale.navbarLocales) == null ? void 0 : _e.langName) != null ? _f : targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = path;
        } else {
          const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
          link = router.getRoutes().some((item) => item.path === targetLocalePage) ? `${targetLocalePage}${hash}` : (_g = targetThemeLocale.home) != null ? _g : targetLocalePath;
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/composables/repoLink.js
var useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
  const repoLink = computed(() => repo.value && !isLinkHttp(repo.value) ? `https://github.com/${repo.value}` : repo.value);
  const repoLabel = computed(() => {
    var _a;
    return !repoLink.value ? null : (_a = themeLocale.value.repoLabel) != null ? _a : repoType.value === null ? "Source" : repoType.value;
  });
  return computed(() => {
    if (!repoLink.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink.value
    };
  });
};

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/LanguageDropdown.js
var LanguageDropdown_default = defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h("div", { class: "nav-item" }, h(DropdownLink_default, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a;
        return h(I18nIcon, {
          "aria-label": (_a = dropdown.value) == null ? void 0 : _a.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/NavbarBrand.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/navbar-brand.scss";
var NavbarBrand_default = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = (0, client_exports.useRouteLocale)();
    const siteLocale = (0, client_exports.useSiteLocaleData)();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? (0, client_exports.withBase)(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? (0, client_exports.withBase)(themeLocale.value.logoDark) : null);
    return () => h(RouterLink, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? h("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? h("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? h("span", { class: ["site-name", { "hide-in-pad": siteBrandLogo.value }] }, siteBrandTitle.value) : null
    ]);
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/NavbarLinks.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/navbar-links.scss";
var NavbarLinks_default = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config) => h("div", { class: "nav-item hide-in-mobile" }, "children" in config ? h(DropdownLink_default, { config }) : h(AutoLink_default, { config })))
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/NavScreenDropdown.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/nav-screen-dropdown.scss";
var NavScreenDropdown_default = defineComponent({
  name: "NavScreenDropdown",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const config = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config.value.ariaLabel || config.value.text);
    const open = ref(false);
    watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h("span", { class: "title" }, [
          h(Icon_default, { icon: config.value.icon }),
          props.config.text
        ]),
        h("span", { class: ["arrow", open.value ? "down" : "right"] })
      ]),
      h("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config.value.children.map((child) => h("li", { class: "dropdown-item" }, "children" in child ? [
        h("h4", { class: "dropdown-subtitle" }, child.link ? h(AutoLink_default, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h("span", child.text)),
        h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h("li", { class: "dropdown-subitem" }, h(AutoLink_default, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config.value.children))
              open.value = false;
          }
        }))))
      ] : h(AutoLink_default, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/NavScreenLinks.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/nav-screen-links.scss";
var NavScreenLinks_default = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config) => h("div", { class: "navbar-links-item" }, "children" in config ? h(NavScreenDropdown_default, { config }) : h(AutoLink_default, { config })))) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/icons/darkmodeIcon.js
var DarkIcon = () => h(nt, { name: "dark" }, () => h("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
var LightIcon = () => h(nt, { name: "light" }, () => h("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
var AutoIcon = () => h(nt, { name: "auto" }, () => h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/icons/fullscreenIcon.js
var EnterFullScreenIcon = () => h(nt, { name: "enter-fullscreen" }, () => h("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
var CancelFullScreenIcon = () => h(nt, { name: "cancel-fullscreen" }, () => h("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/icons/outlookIcon.js
var OutlookIcon2 = () => h(nt, { name: "outlook" }, () => [
  h("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon2.displayName = "OutlookIcon";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/AppearanceSwitch.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/outlook/styles/appearance-switch.scss";
var AppearanceSwitch_default = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const themeData = useThemeData();
    const { status } = useDarkMode();
    const darkmode = computed(() => themeData.value.darkmode);
    const toggleDarkMode = () => {
      if (darkmode.value === "switch") {
        status.value = { light: "dark", dark: "auto", auto: "light" }[status.value];
      } else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/AppearanceMode.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/outlook/styles/appearance-switch.scss";
var AppearanceMode_default = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeData = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    const darkmode = computed(() => themeData.value.darkmode);
    const enable = computed(() => darkmode.value === "switch" || darkmode.value === "toggle");
    return () => enable.value ? h("div", { class: "appearance-wrapper" }, [
      h("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h(AppearanceSwitch_default)
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/ThemeColorPicker.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/outlook/styles/theme-color-picker.scss";
var ThemeColorPicker_default = defineComponent({
  name: "ThemeColorPicker",
  props: {
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = Object.keys(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeclass) => themeclass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h("ul", { id: "themecolor-picker" }, [
      h("li", h("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Object.entries(props.themeColor).map(([color, value]) => h("li", h("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/ThemeColor.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/outlook/styles/theme-color-picker.scss";
var ThemeColor_default = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h("div", { class: "themecolor-wrapper" }, [
      h("label", { class: "themecolor-title", for: "theme-color-picker" }, locale.value),
      h(ThemeColorPicker_default, { themeColor: themeColor.value })
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/ToggleFullScreenButton.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/outlook/styles/toggle-full-screen-button.scss";
var ToggleFullScreenButton_default = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h("div", { class: "fullscreen-wrapper" }, [
      h("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h("button", {
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h(CancelFullScreenIcon) : h(EnterFullScreenIcon))
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/OutlookSettings.js
var OutlookSettings_default = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData = useThemeData();
    const pure = usePure();
    const enableDarkmode = computed(() => themeData.value.darkmode !== "disable" && themeData.value.darkmode !== "enable");
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData.value.fullscreen);
    return () => h(client_exports.ClientOnly, () => [
      enableThemeColor.value ? h(ThemeColor_default) : null,
      enableDarkmode.value ? h(AppearanceMode_default) : null,
      enableFullScreen.value ? h(ToggleFullScreenButton_default) : null
    ]);
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/NavScreen.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/nav-screen.scss";
var NavScreen_default = defineComponent({
  name: "NavScreen",
  props: {
    active: Boolean
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const route = useRoute();
    const isMobile = useMobile();
    const body = ref();
    const isLocked = useScrollLock(body);
    watch(isMobile, (value) => {
      if (!value && props.active)
        emit("close");
    });
    watch(() => route.path, () => {
      isLocked.value = false;
      emit("close");
    });
    onMounted(() => {
      body.value = document.body;
    });
    onBeforeUnmount(() => {
      isLocked.value = false;
    });
    return () => h(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a, _b;
      return props.active ? h("div", { id: "nav-screen" }, h("div", { class: "container" }, [
        (_a = slots["before"]) == null ? void 0 : _a.call(slots),
        h(NavScreenLinks_default),
        h("div", { class: "outlook-wrapper" }, h(OutlookSettings_default)),
        (_b = slots["after"]) == null ? void 0 : _b.call(slots)
      ])) : null;
    });
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/outlook/components/OutlookButton.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/outlook/styles/outlook-button.scss";
var OutlookButton_default = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData = useThemeData();
    const pure = usePure();
    const route = useRoute();
    const open = ref(false);
    const enableDarkmode = computed(() => themeData.value.darkmode !== "disable" && themeData.value.darkmode !== "enable");
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData.value.fullscreen && isSupported);
    watch(() => route.path, () => {
      open.value = false;
    });
    return () => enableDarkmode.value || enableFullScreen.value || enableThemeColor.value ? h(
      "div",
      { class: "nav-item hide-in-mobile" },
      enableDarkmode.value && !enableFullScreen.value && !enableThemeColor.value ? h(AppearanceSwitch_default) : enableFullScreen.value && !enableDarkmode.value && !enableThemeColor.value ? h(ToggleFullScreenButton_default) : h("button", {
        class: ["outlook-button", { open: open.value }],
        tabindex: "-1",
        ariaHidden: true
      }, [
        h(OutlookIcon2),
        h("div", { class: "outlook-dropdown" }, h(OutlookSettings_default))
      ])
    ) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/ToggleNavbarButton.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/toggle-navbar-button.scss";
var ToggleNavbarButton = ({ active = false }, { emit }) => h("button", {
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h("span", { class: "button-container" }, [
  h("span", { class: "button-top" }),
  h("span", { class: "button-middle" }),
  h("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
var ToggleNavbarButton_default = ToggleNavbarButton;

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/ToggleSidebarButton.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/toggle-sidebar-button.scss";
var ToggleSidebarButton = (_, { emit }) => h("button", {
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
var ToggleSidebarButton_default = ToggleSidebarButton;

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/RepoLink.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/repo-link.scss";
var RepoLink_default = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon, GiteeIcon, GitHubIcon, GitlabIcon, SourceIcon },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h("div", { class: "nav-item" }, h(
      "a",
      {
        class: "repo-link",
        href: repo.value.link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": repo.value.label
      },
      h(resolveComponent(`${repo.value.type}Icon`), {
        style: {
          width: "1.25rem",
          height: "1.25rem",
          verticalAlign: "middle"
        }
      })
    )) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/navbar/components/Navbar.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/navbar/styles/navbar.scss";
var Navbar_default = defineComponent({
  name: "NavBar",
  emits: ["toggle-sidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const isMobile = useMobile();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      left: ["Brand"],
      center: ["Links"],
      right: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const map = {
        Brand: h(NavbarBrand_default),
        Language: h(LanguageDropdown_default),
        Links: h(NavbarLinks_default),
        Repo: h(RepoLink_default),
        Outlook: h(OutlookButton_default),
        Search: Mt("Docsearch") ? h(resolveComponent("Docsearch")) : Mt("SearchBox") ? h(resolveComponent("SearchBox")) : null
      };
      return [
        h("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": !themeLocale.value.navbarIcon
            }
          ]
        }, [
          h("div", { class: "navbar-left" }, [
            h(ToggleSidebarButton_default, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggle-sidebar");
              }
            }),
            (_a = slots["left-start"]) == null ? void 0 : _a.call(slots),
            ...navbarLayout.value.left.map((item) => map[item]),
            (_b = slots["left-end"]) == null ? void 0 : _b.call(slots)
          ]),
          h("div", { class: "navbar-center" }, [
            (_c = slots["center-start"]) == null ? void 0 : _c.call(slots),
            ...navbarLayout.value.center.map((item) => map[item]),
            (_d = slots["center-end"]) == null ? void 0 : _d.call(slots)
          ]),
          h("div", { class: "navbar-right" }, [
            (_e = slots["right-start"]) == null ? void 0 : _e.call(slots),
            ...navbarLayout.value.right.map((item) => map[item]),
            (_f = slots["right-start"]) == null ? void 0 : _f.call(slots),
            h(ToggleNavbarButton_default, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h(NavScreen_default, {
          active: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a2;
            return (_a2 = slots["screenTop"]) == null ? void 0 : _a2.call(slots);
          },
          after: () => {
            var _a2;
            return (_a2 = slots["screenBottom"]) == null ? void 0 : _a2.call(slots);
          }
        })
      ];
    };
  }
});

// dep:@theme-hope_modules_navbar_components_Navbar__js
var theme_hope_modules_navbar_components_Navbar_js_default = Navbar_default;
export {
  theme_hope_modules_navbar_components_Navbar_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_navbar_components_Navbar__js.js.map
