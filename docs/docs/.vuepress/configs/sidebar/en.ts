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
      text: "Keystone OAuth",
      children: [
        "/oauth/introduction.md",
        "/oauth/getting-started.md",
        "/oauth/providers.md",
        "/oauth/advanced.md",
        "/oauth/tutorials.md",
      ],
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
  "/reference/": [
    {
      text: "Keystone OAuth Reference",
      collapsible: true,
      children: [
        "/reference/cli.md",
        "/reference/config.md",
        "/reference/frontmatter.md",
        "/reference/components.md",
        "/reference/plugin-api.md",
        "/reference/theme-api.md",
        "/reference/client-api.md",
        "/reference/node-api.md",
      ],
    },
  ],
};
