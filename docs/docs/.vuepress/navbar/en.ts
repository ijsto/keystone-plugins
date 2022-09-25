import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Docs", icon: "note", link: "/docs" },
  {
    text: "Recipes",
    icon: "creative",
    prefix: "/recipes/",
    children: [
      {
        text: "OAuth",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
    ],
  }
]);
