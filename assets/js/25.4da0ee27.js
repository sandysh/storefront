(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{188:function(e,t,i){"use strict";i.r(t);var r=i(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Vue Storefront allows you to quickly develop your own themes and use our core business logic. All e-commerce features are implemented in core, so you can easily develop fully working online shop only by writing HTML and CSS and inheriting the business logic from the core. Of course, you can easily modify and extend the core logic in your theme.")]),e._v(" "),i("p",[e._v("You can read more about Vue Storefront core components and how to make use of them "),i("router-link",{attrs:{to:"./core-components.html"}},[e._v("here")])],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("There are two ways of creating your own VS theme")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("Each theme is a separate Vue.js application with its own dependencies, which can make use of the core or even modify it.\nBelow you can find the list of files that are essential for your theme to work:")]),e._v(" "),i("ul",[e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),i("li",[i("code",[e._v("plugins")]),e._v(" - theme-specific plugins (extends "),i("code",[e._v("core/plugins")]),e._v(", see "),i("router-link",{attrs:{to:"./plugins.html"}},[e._v("Working with plugins")])],1),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),i("li",[i("code",[e._v("service-worker")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("index.js")]),e._v(" you can extend core service worker here (see "),i("router-link",{attrs:{to:"./service-workers.html"}},[e._v("Working with Service Workers")])],1)])]),e._v(" "),i("li",[i("code",[e._v("webpack.config.js")]),e._v(" - you can extend core webpack build in this file (extends "),i("code",[e._v("core/build/")]),e._v(", see "),i("router-link",{attrs:{to:"./webpack.html"}},[e._v("Working with webpack")]),e._v(")")],1)]),e._v(" "),e._m(19),e._v(" "),i("ul",[i("li",[i("code",[e._v("default")]),e._v(" - Default VS theme always with newest features. The easiest way to adopt VS in your shop is taking this one and modifying it to your needs (check "),i("a",{attrs:{href:"https://www.gogetgold.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogetgold.com"),i("OutboundLink")],1),e._v(" as an example)")]),e._v(" "),e._m(20),e._v(" "),e._m(21)]),e._v(" "),e._m(22),e._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"./core-components.html"}},[e._v("Working with components")])],1),e._v(" "),i("li",[i("a",{attrs:{href:"https://medium.com/@frakowski/developing-themes-in-vue-storefront-backend-agnostic-ecommerce-pwa-frontend-part-1-72ea3c939593",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating themes in Vue Storefront — backend-agnostic eCommerce PWA frontend (part 1  - understanding Vue Storefront core)"),i("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"themes-in-vue-storefront"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#themes-in-vue-storefront","aria-hidden":"true"}},[this._v("#")]),this._v(" Themes in Vue Storefront")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All themes are located in "),t("code",[this._v("src/themes")]),this._v(" folder and you can think about them as a separate Vue.js applications that are using Vue Storefront core for out-of-the-box features.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"switching-themes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switching-themes","aria-hidden":"true"}},[this._v("#")]),this._v(" Switching themes")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("To use any of the themes located in "),i("code",[e._v("src/themes")]),e._v(", just change the "),i("code",[e._v("theme")]),e._v(" property in your config file to "),i("code",[e._v("name")]),e._v(" property from package.json file sitting in your theme's root dir. Config files are located in "),i("code",[e._v("config")]),e._v(" folder. You shouldn't make changes in "),i("code",[e._v("config/default.json")]),e._v(". Instead just copy the "),i("code",[e._v("default.json")]),e._v(" file to the same folder, name it "),i("code",[e._v("local.json")]),e._v(" and make changes there.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-your-own-themes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-own-themes","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating your own themes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Copying and modifying the default theme which is fully-styled and ready to work out of the box (it's the one that you can find on our demo)")]),this._v(" "),t("li",[this._v("Copying and modifying theme-starter which contains only data and no styling. It requires more work to have it production-ready (you need to style it from scratch) but if your designs are much different than our default theme you'd probably want to start with this one.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("To create your own theme just copy the "),i("code",[e._v("theme-starter")]),e._v(" or "),i("code",[e._v("default")]),e._v(" folder located in "),i("code",[e._v("src/themes")]),e._v(" and change it's name to your new theme's name. Next change the name property in your theme "),i("code",[e._v("package.json")]),e._v(" file. You can use this name in your config file to change the active theme. After adding new theme you need to run "),i("code",[e._v("yarn install")]),e._v(" so lerna can detect a new theme. Now you can start development of your own theme for Vue Storefront!")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Only official themes tested and accepted by the community should be in a "),t("code",[this._v("master")]),this._v(" branch. Please develop your own themes on separate branches and keep them updated with "),t("code",[this._v("master")]),this._v(" to be sure it works with the newest core.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"important-theme-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-theme-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Important theme files")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("extensions")]),this._v(" - theme-specific extension\n"),t("ul",[t("li",[t("code",[this._v("index.js")]),this._v(" - here you can register your theme-specific extensions")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("filters")]),this._v(" - theme-specific filters (extends "),t("code",[this._v("core/filters")]),this._v(")\n"),t("ul",[t("li",[t("code",[this._v("index.js")]),this._v(" - here you can register your theme-specific filters")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("mixins")]),this._v(" - theme-specific mixins (extends "),t("code",[this._v("core/mixins")]),this._v(")\n"),t("ul",[t("li",[t("code",[this._v("index.js")]),this._v(" - here you can register your theme-specific mixins")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("pages")]),this._v(" - your shop pages")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("resource")]),this._v(" - theme-specific resources (extends "),t("code",[this._v("core/resource")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("router")]),this._v(" - theme router")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("code",[e._v("store")]),e._v(" - theme-specific stores (extends "),i("code",[e._v("core/store")]),e._v(")\n"),i("ul",[i("li",[i("code",[e._v("ui-store.js")]),e._v(" - here you can extend core "),i("code",[e._v("ui-store")])]),e._v(" "),i("li",[i("code",[e._v("index.js")]),e._v(" - here you can register theme-specific stores")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("App.vue")]),this._v(" - theme's entry component")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("index.js")]),this._v(" - theme initialization")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("package.json")]),this._v(" - theme-specific dependencies")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"official-vue-storefront-themes-included-with-the-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#official-vue-storefront-themes-included-with-the-template","aria-hidden":"true"}},[this._v("#")]),this._v(" Official Vue Storefront themes included with the template:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("theme-starter")]),this._v(" - boilerplate for developing VS themes. If you want to create new theme copy and rename this folder.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("catalog")]),this._v(" - VS catalog theme - currently in alpha")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"related"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related","aria-hidden":"true"}},[this._v("#")]),this._v(" Related")])}],!1,null,null,null);n.options.__file="themes.md";t.default=n.exports}}]);