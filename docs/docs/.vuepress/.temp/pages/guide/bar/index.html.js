export const data = JSON.parse("{\"key\":\"v-5d5c2d30\",\"path\":\"/guide/bar/\",\"title\":\"Bar feature\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Bar feature\",\"icon\":\"creative\",\"summary\":\"Introduction We support bar feature, ... Details baz; ...;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://willithurt.me/guide/bar/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"KS6 Plugins Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Bar feature\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"guide/bar/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
