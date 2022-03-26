import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/guide/": [
    {
      text: "Guide",
      children: ["/guide/contribution"],
    },
  ],
  "/oauth/": [
    {
      text: "Getting Started",
      collapsible: false,
      children: [
        "/oauth/introduction.md",
        "/oauth/installation.md",
        "/oauth/providers.md",
      ],
    },
    {
      text: "Tutorials",
      collapsible: false,
      children: [
        "/tutorials/recipes.md",
        "/tutorials/videos.md",
        "/tutorials/posts.md",
      ],
    },
    {
      text: "Troubleshooting",
      collapsible: true,
      children: [
        "/troubleshooting/known-errors.md",
        "/troubleshooting/limitations.md",
      ],
    },
    {
      text: "Migration Guides",
      collapsible: true,
      children: ["/migrations/v20-v1.md"],
    },
  ],
  "/tutorials/": [
    {
      text: "Tutorials",
      collapsible: false,
      children: [
        "/tutorials/introduction.md",
        "/tutorials/recipes.md",
        "/tutorials/videos.md",
        "/tutorials/posts.md",
      ],
    },
    {
      text: "Migration Guides",
      collapsible: false,
      children: ["/migrations/v20-v1.md"],
    },
  ],
  "/troubleshooting/": [
    {
      text: "Getting Started",
      collapsible: true,
      children: [
        "/oauth/introduction.md",
        "/oauth/installation.md",
        "/oauth/providers.md",
        "/oauth/tutorials.md",
      ],
    },
    {
      text: "Tutorials",
      collapsible: true,
      children: [
        "/tutorials/introduction.md",
        "/tutorials/recipes.md",
        "/tutorials/videos.md",
        "/tutorials/posts.md",
      ],
    },
    {
      text: "Troubleshooting",
      collapsible: false,
      children: [
        "/troubleshooting/known-errors.md",
        "/troubleshooting/limitations.md",
      ],
    },
    {
      text: "Migration Guides",
      collapsible: true,
      children: ["/migrations/v20-v1.md"],
    },
  ],
  "/advanced/": [
    {
      text: "Advanced",
      children: ["/advanced/sessions.md"],
    },
    {
      text: "Cookbook",
      children: ["/advanced/recipes/README.md"],
    },
  ],
  "/migration-guides/": [
    {
      text: "Migration Guides",
      collapsible: true,
      children: ["/migrations/v20-v1.md"],
    },
  ],
};
