export const siteData = {
  "base": "/arithmetic-practice/",
  "lang": "en-US",
  "title": "Arithmetic",
  "description": " ",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
