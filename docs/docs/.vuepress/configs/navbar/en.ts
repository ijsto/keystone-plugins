import type { NavbarConfig } from "@vuepress/theme-default";
// import { version } from "../meta";

export const en: NavbarConfig = [
  {
    text: "Contribute",
    link: "/guide/contribution",
  },
  {
    text: "Plugins",
    children: [
      {
        text: "Keystone 6",
        children: ["/oauth/README.md"],
      },
    ],
  },
  {
    text: "Learn",
    children: [
      {
        text: "Resources",
        children: [
          "/tutorials/README.md",
          {
            text: "Tutorials",
            link: "/oauth/tutorials/",
          },
        ],
      },
    ],
  },
  // {
  //   text: `v${version}`,
  //   children: [
  //     {
  //       text: "Changelog",
  //       link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",
  //     },
  //     {
  //       text: "v1.x",
  //       link: "https://v1.vuepress.vuejs.org",
  //     },
  //     {
  //       text: "v0.x",
  //       link: "https://v0.vuepress.vuejs.org",
  //     },
  //   ],
  // },
];
