export const themeData = JSON.parse("{\"blog\":{},\"encrypt\":{\"config\":{\"/docs/encrypt.html\":[\"$2a$10$0Gyx0/F/r1rh0Ui64/7eKuT2jb/mPZ7I0sh.KzWPAYdRdYiEI7.fa\"],\"/lv/docs/encrypt.html\":[\"$2a$10$pVdbt8Miy5xWCMW9mf.IPuXu6.0ff5p8OdNXfCHnDOTsBZfWMMAG.\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/\":[\"\",{\"text\":\"Docs\",\"icon\":\"note\",\"prefix\":\"guide/\",\"children\":\"structure\"}]},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page on GitHub\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"logo\":\"/images/hero.png\",\"repo\":\"ijsto/keystone-plugins\",\"docsDir\":\"docs\",\"pageInfo\":[\"Original\",\"Date\",\"Category\",\"Tag\"],\"navbar\":[\"/\",{\"text\":\"Docs\",\"icon\":\"note\",\"link\":\"/docs\"},{\"text\":\"Recipes\",\"icon\":\"creative\",\"prefix\":\"/recipes/\",\"children\":[{\"text\":\"OAuth\",\"icon\":\"creative\",\"prefix\":\"bar/\",\"children\":[\"baz\",{\"text\":\"...\",\"icon\":\"more\",\"link\":\"\"}]}]}],\"footer\":\"Default footer\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
