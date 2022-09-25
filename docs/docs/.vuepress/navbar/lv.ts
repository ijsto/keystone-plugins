import { navbar } from "vuepress-theme-hope";

export const lvNavbar = navbar([
  "/lv/",
  { text: "Home", icon: "home", link: "/" },
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
