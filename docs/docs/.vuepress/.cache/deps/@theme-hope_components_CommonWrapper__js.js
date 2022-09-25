import {
  useSidebarItems
} from "./chunk-AYXLEG4L.js";
import {
  useMobile,
  usePageAuthor,
  useThemeLocaleData
} from "./chunk-BYQIQ7ZI.js";
import {
  Mt,
  gt
} from "./chunk-UMIBI3BT.js";
import "./chunk-P4HTJVEZ.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  useRouter
} from "./chunk-RQ7A2YV3.js";
import "./chunk-P4PLXKWE.js";
import {
  useEventListener,
  useThrottleFn
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
  watch
} from "./chunk-XQCAFQ4P.js";
import "./chunk-P5YHOUTL.js";
import "./chunk-5E3NKPRU.js";

// ../../node_modules/vuepress-theme-hope/lib/client/components/PageFooter.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/styles/footer.scss";
var PageFooter_default = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer } = frontmatter.value;
      return footer !== false && Boolean(copyright2 || footer || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer } = frontmatter.value;
      return footer === false ? false : typeof footer === "string" ? footer : themeLocale.value.footer || "";
    });
    const copyright = computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright \xA9 ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? h("footer", { class: "footer-wrapper" }, [
      h("div", { class: "footer", innerHTML: content.value }),
      copyright.value ? h("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});

// ../../node_modules/vuepress-theme-hope/lib/client/components/CommonWrapper.js
import "/Users/scottagirs/workspace/contributions/keystone/ijsto/keystone-plugins/node_modules/vuepress-theme-hope/lib/client/styles/common.scss";
var CommonWrapper_default = defineComponent({
  name: "CommonWrapper",
  props: {
    navbar: {
      type: Boolean,
      default: true
    },
    sidebar: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const router = useRouter();
    const page = (0, client_exports.usePageData)();
    const frontmatter = (0, client_exports.usePageFrontmatter)();
    const themeLocale = useThemeLocaleData();
    const isMobile = useMobile();
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.navbar === false)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const sidebarItems = useSidebarItems();
    const enableSidebar = computed(() => {
      if (props.sidebar === false)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarCollapsed = ref(false);
    const toggleMobileSidebar = (value) => {
      isMobileSidebarOpen.value = typeof value === "boolean" ? value : !isMobileSidebarOpen.value;
    };
    const toggleDesktopSidebar = (value) => {
      isDesktopSidebarCollapsed.value = typeof value === "boolean" ? value : !isDesktopSidebarCollapsed.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
      }
    };
    const enableToc = computed(() => frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let unregisterRouterHook;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (lastDistance < distance && distance > 58) {
        if (!isMobileSidebarOpen.value)
          hideNavbar.value = true;
      } else
        hideNavbar.value = false;
      lastDistance = distance;
    }, 300));
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return () => h("div", {
      class: [
        "theme-container",
        {
          "no-navbar": !enableNavbar.value,
          "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
          "has-toc": enableToc.value,
          "hide-navbar": hideNavbar.value,
          "sidebar-collapsed": !isMobile.value && isDesktopSidebarCollapsed.value,
          "sidebar-open": isMobile.value && isMobileSidebarOpen.value
        },
        frontmatter.value.containerClass || ""
      ],
      onTouchStart,
      onTouchEnd
    }, h(Mt("GloablEncrypt") ? resolveComponent("GloablEncrypt") : gt, () => {
      var _a;
      return [
        enableNavbar.value ? h(resolveComponent("Navbar"), { onToggleSidebar: () => toggleMobileSidebar() }, {
          leftStart: () => {
            var _a2;
            return (_a2 = slots["navbarLeftStart"]) == null ? void 0 : _a2.call(slots);
          },
          leftEnd: () => {
            var _a2;
            return (_a2 = slots["navbarLeftEnd"]) == null ? void 0 : _a2.call(slots);
          },
          centerStart: () => {
            var _a2;
            return (_a2 = slots["navbarCenterStart"]) == null ? void 0 : _a2.call(slots);
          },
          centerEnd: () => {
            var _a2;
            return (_a2 = slots["navbarCenterEnd"]) == null ? void 0 : _a2.call(slots);
          },
          rightStart: () => {
            var _a2;
            return (_a2 = slots["navbarRightStart"]) == null ? void 0 : _a2.call(slots);
          },
          rightEnd: () => {
            var _a2;
            return (_a2 = slots["navbarRightEnd"]) == null ? void 0 : _a2.call(slots);
          },
          screenTop: () => {
            var _a2;
            return (_a2 = slots["navScreenTop"]) == null ? void 0 : _a2.call(slots);
          },
          screenBottom: () => {
            var _a2;
            return (_a2 = slots["navScreenBottom"]) == null ? void 0 : _a2.call(slots);
          }
        }) : null,
        h(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        h(Transition, { name: "fade" }, () => isMobile.value ? null : h("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "right" : "left"
          ]
        }))),
        h(resolveComponent("Sidebar"), {}, {
          ...slots["sidebar"] ? { default: () => {
            var _a2;
            return (_a2 = slots["sidebar"]) == null ? void 0 : _a2.call(slots);
          } } : {},
          top: () => {
            var _a2;
            return (_a2 = slots["sidebarTop"]) == null ? void 0 : _a2.call(slots);
          },
          bottom: () => {
            var _a2;
            return (_a2 = slots["sidebarBottom"]) == null ? void 0 : _a2.call(slots);
          }
        }),
        (_a = slots["default"]) == null ? void 0 : _a.call(slots),
        h(PageFooter_default)
      ];
    }));
  }
});

// dep:@theme-hope_components_CommonWrapper__js
var theme_hope_components_CommonWrapper_js_default = CommonWrapper_default;
export {
  theme_hope_components_CommonWrapper_js_default as default
};
//# sourceMappingURL=@theme-hope_components_CommonWrapper__js.js.map
