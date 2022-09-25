import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "KS6 Plugins Docs",
      description: "A docs demo for vuepress-theme-hope",
    },
    // "/lv-LV/": {
    //   lang: "lv-LV",
    //   title: "Latviešu",
    //   description: "Latviešu valodas dokumentācija.",
    // },
  },

  theme,

  shouldPrefetch: false,
});
