export const data = JSON.parse("{\"key\":\"v-5d5821d6\",\"path\":\"/guide/foo/\",\"title\":\"Foo feature\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Foo feature\",\"icon\":\"config\",\"summary\":\"Introduction We support foo feature, ... Details ray; ...;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://willithurt.me/guide/foo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"KS6 Plugins Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Foo feature\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"guide/foo/README.md\"}")

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
