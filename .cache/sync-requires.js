const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/src/templates/blogTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/src/pages/index.js"))),
  "component---src-pages-parking-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/src/pages/parking.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/home/deza604/deansallinen.github.io/src/pages/resume.js")))
}

