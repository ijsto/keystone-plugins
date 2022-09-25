export const data = JSON.parse("{\"key\":\"v-763e2284\",\"path\":\"/zh/guide/foo/\",\"title\":\"Foo 功能\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Foo 功能\",\"icon\":\"config\",\"summary\":\"介绍 我们支持 foo 功能，... 详情 ray; ...;\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://willithurt.me/zh/guide/foo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"KS6 Plugins Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Foo 功能\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"children\":[]},{\"level\":2,\"title\":\"详情\",\"slug\":\"详情\",\"children\":[]}],\"readingTime\":{\"minutes\":0.07,\"words\":21},\"filePathRelative\":\"zh/guide/foo/README.md\"}")

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
