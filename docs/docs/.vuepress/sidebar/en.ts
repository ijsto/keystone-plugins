import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    // "slides", // TODO: - explore this - looks awesome!
  ],
});
