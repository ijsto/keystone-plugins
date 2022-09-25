import {
  EditIcon
} from "./chunk-WRGANM6G.js";
import {
  useSidebarItems
} from "./chunk-AYXLEG4L.js";
import {
  MarkdownContent_default
} from "./chunk-XYEUHBQW.js";
import {
  getAncestorLinks,
  resolveRepoType
} from "./chunk-VQ7FQDPI.js";
import {
  useDarkMode
} from "./chunk-BM37VB45.js";
import {
  useAutoLink,
  useNavigate,
  usePageInfo,
  usePure,
  useThemeLocaleData
} from "./chunk-BYQIQ7ZI.js";
import {
  Ct,
  Dt,
  Ht,
  Mt,
  gt,
  nt,
  st
} from "./chunk-UMIBI3BT.js";
import {
  AutoLink_default,
  Icon_default,
  isLinkHttp,
  isPlainObject,
  removeEndingSlash,
  removeLeadingSlash
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
  useEventListener
} from "./chunk-2TVHH35V.js";
import {
  computed,
  defineComponent,
  h,
  onMounted,
  ref,
  resolveComponent,
  unref,
  watch
} from "./chunk-XQCAFQ4P.js";
import {
  isString
} from "./chunk-P5YHOUTL.js";
import "./chunk-5E3NKPRU.js";

// ../../node_modules/vuepress-theme-hope/lib/client/components/BreadCrumb.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/styles/breadcrumb.scss";
var BreadCrumb_default = defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const routeLocale = (0, client_exports.useRouteLocale)();
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const themeLocale = useThemeLocaleData();
    const config = ref([]);
    const enable = computed(() => {
      return (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config.value.length > 1;
    });
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(route, routeLocale.value).map((link) => {
        const route2 = routes.find((route3) => route3.path === link);
        if (route2) {
          const { meta, path } = st(router, route2.path);
          if (meta.shortTitle || meta.title)
            return {
              title: meta.shortTitle || meta.title,
              icon: meta.icon,
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config.value = breadcrumbConfig;
    };
    onMounted(() => {
      void getBreadCrumbConfig();
      watch(() => route.path, getBreadCrumbConfig);
    });
    return () => h("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? h("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config.value.map((item, index) => h("li", {
      class: { "is-active": config.value.length - 1 === index },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h(RouterLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        iconEnable.value ? h(Icon_default, { icon: item.icon }) : null,
        h("span", { property: "name" }, item.title || "Unknown")
      ]),
      h("meta", { property: "position", content: index + 1 })
    ]))) : []);
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/components/PageNav.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/styles/page-nav.scss";
var resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (isString(conf))
    return useAutoLink(conf, true);
  if (isPlainObject(conf))
    return conf;
  return null;
};
var resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
var PageNav_default = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h("nav", { class: "page-nav" }, [
      prevNavLink.value ? h(AutoLink_default, { class: "prev", config: prevNavLink.value }, () => {
        var _a, _b;
        return [
          h("div", { class: "hint" }, [
            h("span", { class: "arrow left" }),
            themeLocale.value.metaLocales.prev
          ]),
          h("div", { class: "link" }, [
            h(Icon_default, {
              icon: (_a = prevNavLink.value) == null ? void 0 : _a.icon
            }),
            (_b = prevNavLink.value) == null ? void 0 : _b.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h(AutoLink_default, { class: "next", config: nextNavLink.value }, () => {
        var _a, _b;
        return [
          h("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h("span", { class: "arrow right" })
          ]),
          h("div", { class: "link" }, [
            (_a = nextNavLink.value) == null ? void 0 : _a.text,
            h(Icon_default, {
              icon: (_b = nextNavLink.value) == null ? void 0 : _b.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/icons.js
var AuthorIcon = () => h(nt, { name: "author" }, () => h("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
var CalendarIcon = () => h(nt, { name: "calendar" }, () => h("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
var CategoryIcon = () => h(nt, { name: "category" }, () => h("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
var EyeIcon = () => h(nt, { name: "eye" }, () => h("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
var FireIcon = () => h(nt, { name: "fire" }, () => h("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
var TagIcon = () => h(nt, { name: "tag" }, () => h("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
var TimerIcon = () => h(nt, { name: "timer" }, () => h("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
var WordIcon = () => h(nt, { name: "word" }, () => [
  h("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
var BacktoTopIcon = () => h(nt, { name: "back-to-top" }, () => [
  h("path", {
    d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"
  }),
  h("path", {
    d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"
  })
]);
BacktoTopIcon.displayName = "BacktoTopIcon";

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/composables/locale.js
var useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/utils/define.js
var readingTimeLocales = READING_TIME_LOCALES;

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/utils/editlink.js
var editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
var resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = resolveRepoType(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/composables/meta.js
var useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page = (0, client_exports.usePageData)();
  const frontmatter = (0, client_exports.usePageFrontmatter)();
  return computed(() => {
    var _a, _b;
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : editLink) != null ? _b : true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
var useUpdateTime = () => {
  const siteLocale = (0, client_exports.useSiteLocaleData)();
  const themeLocale = useThemeLocaleData();
  const page = (0, client_exports.usePageData)();
  const frontmatter = (0, client_exports.usePageFrontmatter)();
  return computed(() => {
    var _a, _b, _c, _d;
    const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale.value.lastUpdated) != null ? _b : true;
    if (!showLastUpdated)
      return null;
    if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
      return null;
    const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
var useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page = (0, client_exports.usePageData)();
  const frontmatter = (0, client_exports.usePageFrontmatter)();
  return computed(() => {
    var _a, _b, _c, _d;
    const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale.value.contributors) != null ? _b : true;
    if (!showContributors)
      return null;
    return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
  });
};

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/AuthorInfo.js
var AuthorInfo_default = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    author: {
      type: Array,
      required: true
    },
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h("span", {
      class: "author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "\u{1F58A}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(AuthorIcon),
      h("span", props.author.map((item) => item.url ? h("a", {
        class: "author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h("span", { class: "author-item" }, item.name))),
      h("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/CategoryInfo.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/info/styles/category.scss";
var CategoryInfo_default = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    category: {
      type: Array,
      required: true
    },
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const navigate = (path = "") => {
      if (path && route.path !== path)
        void router.push(path);
    };
    return () => props.category.length ? h("span", {
      class: "category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "\u{1F308}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(CategoryIcon),
      h("ul", { class: "categories-wrapper" }, [
        ...props.category.map(({ name, path }) => h("li", {
          class: [
            "category",
            {
              [`category${Ct(name, 9)}`]: !props.pure,
              clickable: path
            }
          ],
          role: path ? "navigation" : "",
          onClick: () => navigate(path)
        }, name)),
        h("meta", {
          property: "articleSection",
          content: props.category.map(({ name }) => name).join(",")
        })
      ])
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/DateInfo.js
var DateInfo_default = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    date: {
      type: Object,
      default: null
    },
    localizedDate: {
      type: String,
      default: ""
    },
    pure: Boolean
  },
  setup(props) {
    const lang = (0, client_exports.usePageLang)();
    const metaLocale = useMetaLocale();
    return () => {
      var _a, _b, _c;
      return props.date ? h("span", {
        class: "date-info",
        "aria-label": `${metaLocale.value.date}${props.pure ? "" : "\u{1F4C5}"}`,
        ...props.pure ? {} : { "data-balloon-pos": "down" }
      }, [
        h(CalendarIcon),
        h("span", props.localizedDate || ((_a = props.date.value) == null ? void 0 : _a.toLocaleDateString(lang.value))),
        h("meta", {
          property: "datePublished",
          content: ((_c = (_b = props.date) == null ? void 0 : _b.value) == null ? void 0 : _c.toISOString()) || ""
        })
      ]) : null;
    };
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/PageViewInfo.js
var PageViewInfo_default = defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    pageview: {
      type: [Boolean, String],
      default: false
    },
    pure: Boolean
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const pageViews = ref(0);
    const getCount = () => {
      const countElement = document.querySelector(".waline-pageview-count");
      if (countElement) {
        const count = countElement.textContent;
        if (count && !isNaN(Number(count)))
          pageViews.value = Number(count);
        else
          setTimeout(getCount, 500);
      }
    };
    onMounted(() => {
      setTimeout(getCount, 1500);
    });
    watch(() => route.path, (newValue, oldValue) => {
      if (newValue !== oldValue)
        setTimeout(getCount, 500);
    });
    return () => props.pageview ? h("span", {
      class: "visitor-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "\u{1F522}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h("span", {
        class: "waline-pageview-count",
        "data-path": typeof props.pageview === "string" ? props.pageview : (0, client_exports.withBase)(route.path)
      }, "...")
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/ReadingTimeInfo.js
var ReadingTimeInfo_default = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    readingTime: {
      type: Object,
      default: () => null
    },
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = Dt(readingTimeLocales);
    const readingTime = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? h("span", {
      class: "reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "\u231B"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(TimerIcon),
      h("span", readingTime.value.text),
      h("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/TagInfo.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/info/styles/tag.scss";
var TagInfo_default = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    tag: {
      type: Array,
      default: () => []
    },
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const navigate = (path = "") => {
      if (path && route.path !== path)
        void router.push(path);
    };
    return () => props.tag.length ? h("span", {
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "\u{1F3F7}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(TagIcon),
      h("ul", { class: "tags-wrapper" }, props.tag.map(({ name, path }) => h("li", {
        class: [
          "tag",
          {
            [`tag${Ct(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: () => navigate(path)
      }, name))),
      h("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/OriginalMark.js
var OriginalMark_default = defineComponent({
  name: "OriginalMark",
  inheritAttrs: false,
  props: {
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h("span", { class: "origin" }, metaLocale.value.origin) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/WordInfo.js
var WordInfo_default = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    readingTime: {
      type: Object,
      default: () => null
    },
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = Dt(readingTimeLocales);
    const words = computed(() => {
      var _a;
      return (_a = props.readingTime) == null ? void 0 : _a.words.toString();
    });
    const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? h("span", {
      class: "words-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "\u{1F520}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h(WordIcon),
      h("span", wordText.value),
      h("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/PageInfo.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/balloon-css/balloon.css";
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/info/styles/page-info.scss";
var PageInfo_default = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo: AuthorInfo_default,
    CategoryInfo: CategoryInfo_default,
    DateInfo: DateInfo_default,
    OriginalInfo: OriginalMark_default,
    PageViewInfo: PageViewInfo_default,
    ReadingTimeInfo: ReadingTimeInfo_default,
    TagInfo: TagInfo_default,
    WordInfo: WordInfo_default
  },
  props: {
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ]
    },
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h("div", { class: "page-info" }, props.items.map((item) => h(resolveComponent(`${item}Info`), {
      ...props.config,
      pure: pure.value
    }))) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/components/PageTitle.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/styles/page-title.scss";
var PageTitle_default = defineComponent({
  name: "PageTitle",
  setup() {
    const page = (0, client_exports.usePageData)();
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const themeLocale = useThemeLocaleData();
    const { config, items } = usePageInfo();
    return () => h("div", { class: "page-title" }, [
      h("h1", [
        themeLocale.value.titleIcon !== false ? h(Icon_default, { icon: frontmatter.value.icon }) : null,
        page.value.title
      ]),
      h(PageInfo_default, {
        config: unref(config),
        ...items.value === null ? {} : { items: items.value }
      }),
      h("hr")
    ]);
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/PageMeta.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/info/styles/page-meta.scss";
var PageMeta_default = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h("footer", { class: "page-meta" }, [
        editLink.value ? h("div", { class: "meta-item edit-link" }, h(AutoLink_default, { class: "label", config: editLink.value }, { before: () => h(EditIcon) })) : null,
        updateTime.value ? h("div", { class: "meta-item update-time" }, [
          h("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
          h(client_exports.ClientOnly, () => h("span", { class: "info" }, updateTime.value))
        ]) : null,
        contributors.value && contributors.value.length ? h("div", { class: "meta-item contributors" }, [
          h("span", { class: "label" }, `${metaLocales.contributors}: `),
          contributors.value.map(({ email, name }, index) => [
            h("span", { class: "contributor", title: `email: ${email}` }, name),
            index !== contributors.value.length - 1 ? "," : ""
          ])
        ]) : null
      ]);
    };
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/modules/info/components/TOC.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/modules/info/styles/toc.scss";
var renderHeader = ({ title, level, slug }) => h(RouterLink, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
var renderChildren = (headers, headerDepth) => {
  const route = useRoute();
  return headers.length && headerDepth > 0 ? h("ul", { class: "toc-list" }, headers.map((header) => [
    h("li", {
      class: [
        "toc-item",
        { active: Ht(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
var TOC_default = defineComponent({
  name: "TOC",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const route = useRoute();
    const page = (0, client_exports.usePageData)();
    const metaLocale = useMetaLocale();
    const toc = ref(null);
    const scrollTo = (top) => {
      var _a;
      (_a = toc.value) == null ? void 0 : _a.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page.value.headers ? renderChildren(page.value.headers, props.headerDepth) : null;
      return tocHeaders ? h("div", { class: "toc-place-holder" }, [
        h("aside", { id: "toc" }, [
          h("div", { class: "toc-header" }, metaLocale.value.toc),
          h("div", { class: "toc-wrapper", ref: toc }, [tocHeaders])
        ])
      ]) : null;
    };
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/components/NormalPage.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/styles/page.scss";
var NormalPage_default = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const { isDarkMode } = useDarkMode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h("main", { class: "page", id: "main-content" }, h(Mt("LocalEncrypt") ? resolveComponent("LocalEncrypt") : gt, () => {
      var _a, _b, _c, _d, _e, _f;
      return [
        (_a = slots["top"]) == null ? void 0 : _a.call(slots),
        h(BreadCrumb_default),
        h(PageTitle_default),
        tocEnable.value ? h(TOC_default, {
          headerDepth: (_c = (_b = frontmatter.value.headerDepth) != null ? _b : themeLocale.value.headerDepth) != null ? _c : 2
        }) : null,
        (_d = slots["contentBefore"]) == null ? void 0 : _d.call(slots),
        h(MarkdownContent_default),
        (_e = slots["contentAfter"]) == null ? void 0 : _e.call(slots),
        h(PageMeta_default),
        h(PageNav_default),
        Mt("CommentService") ? h(resolveComponent("CommentService"), {
          darkmode: isDarkMode.value
        }) : null,
        (_f = slots["bottom"]) == null ? void 0 : _f.call(slots)
      ];
    }));
  }
});

// dep:@theme-hope_components_NormalPage__js
var theme_hope_components_NormalPage_js_default = NormalPage_default;
export {
  theme_hope_components_NormalPage_js_default as default
};
//# sourceMappingURL=@theme-hope_components_NormalPage__js.js.map
