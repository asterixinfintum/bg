(window.webpackJsonp=window.webpackJsonp||[]).push([[21,14],{286:function(t,e,n){"use strict";n(41),n(40),n(32),n(86),n(39),n(87);var r=n(33),o=(n(43),n(288),n(10),n(51),n(66),n(42),n(65));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}n(9).default.VERIFICATION_FRONT;e.a={data:function(){return{popupopen:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleString("en-US",{month:"long",day:"numeric"})},navigateToPage:function(t,e){this.$router.push("/".concat(t))},navigateToPageWithParams:function(path,t){this.$router.push("/".concat(path,"/").concat(t))},navigateOutWithParams:function(t,e){var n="".concat(t,"/?token=").concat(e);console.log(n),window.open(n,"_blank")},navigateToTradePage:function(path,t){this.$router.push("/".concat(path,"&asset=").concat(t))},popupAction:function(t){"function"==typeof t&&t(),this.popupopen?this.popupopen=!1:this.popupopen=!0},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},openInNewTab:function(t){window.open(t,"_blank").focus()},formatNumberCommas:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof t||isNaN(t))return"Invalid number";var n={minimumFractionDigits:e,maximumFractionDigits:e};return t.toLocaleString(void 0,n)},formatNumberCommasMoreDecims:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof t||isNaN(t))return"Invalid number";var n={minimumFractionDigits:e,maximumFractionDigits:e};return t.toLocaleString(void 0,n)},formatNumber:function(t){return this.formatNumberCommas(parseInt(t,10))},returnCryptoLogo:function(symbol){var t=this.base_url,e=this.cryptoLogos.find((function(t){return t.toLowerCase().includes(symbol.toLowerCase())}));return"".concat(t,"/").concat(e)}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({currentRoute:function(){return this.$route.name}},Object(o.d)({client_token:function(t){return t.auth.client_token},key_token:function(t){return t.auth.key_token}}))}},287:function(t,e,n){"use strict";n(41),n(40),n(32),n(86),n(39),n(87);var r=n(33),o=(n(10),n(65));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=n(9).default.BASE_URL;e.a={data:function(){return{depositCardOpen:!1}},computed:l({},Object(o.d)({client:function(t){return t.auth.client},client_token:function(t){return t.auth.client_token},wallettypes:function(t){return t.wallet.wallettypes}})),methods:l(l({},Object(o.c)("auth",["SET_CLIENT","SET_CLIENT_TOKEN"])),{},{getCurrentUser:function(){var t=this,e=localStorage.getItem("873__jh6bdjktoken");if(e)try{fetch("".concat(d,"/getclient"),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).then((function(data){var e=data.token,n=data.userData;t.SET_CLIENT(n),t.SET_CLIENT_TOKEN(e)})).catch((function(t){console.log("Error:",t)}))}catch(t){console.log(t)}}}),mounted:function(){this.getCurrentUser()}}},288:function(t,e,n){"use strict";var r=n(3),o=n(88).find,c=n(137),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},290:function(t,e,n){"use strict";n(41),n(40),n(32),n(10),n(86),n(39),n(87);var r=n(33),o=(n(26),n(50),n(65));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={data:function(){return{timeToRequestData:6e3}},computed:l({},Object(o.d)({assets:function(t){return t.list.assets}})),methods:l(l({},Object(o.b)("list",["getassets"])),{},{getCharactersBeforeUnderscore:function(t){return t.split("_")[0]},removeUnderscore:function(t){return t.replace(/_/g,"")}}),mounted:function(){this.getassets()}}},292:function(t,e,n){"use strict";n.r(e);n(41),n(40),n(32),n(10),n(86),n(39),n(87);var r=n(33),o=(n(42),n(65)),c=n(286),l=n(287),d=n(290);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={computed:_({},Object(o.d)({inhouseassets:function(t){return t.inhouseassets.items},inhouseasset:function(t){return t.inhouseassets.item}})),methods:_({},Object(o.b)("inhouseassets",["getinhouseassets"])),mounted:function(){this.getinhouseassets()}};function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w={name:"Landing",mixins:[c.a,l.a,d.a,v],methods:m(m({},Object(o.b)("auth",["logout"])),{},{triggerlogout:function(){var t=this;(0,this.logout)().then((function(){return t.$router.push("/")}))}}),computed:{generalLandingPageStyle:function(){return{landing:"index"===this.$route.name}}}},O=n(48),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header",class:t.generalLandingPageStyle,attrs:{id:"header"}},[e("div",{staticClass:"header__left"},[t.client?e("div",{staticClass:"header__logo",on:{click:function(e){return t.$router.push("/overview")}}},[e("figure"),t._v(" "),e("p",[t._v("BVX")])]):t._e(),t._v(" "),t.client?t._e():e("div",{staticClass:"header__logo",on:{click:function(e){return t.$router.push("/")}}},[e("figure"),t._v(" "),e("p",[t._v("BVX")])]),t._v(" "),e("div",{staticClass:"header__menu"},[e("div",{staticClass:"header__menuitem",on:{click:function(e){return t.navigateToPage("blog")}}},[e("label",[t._v("Blog")])]),t._v(" "),e("div",{staticClass:"header__menuitem",on:{click:function(e){return t.navigateToPage("register")}}},[e("label",[t._v("Markets")])]),t._v(" "),e("div",{staticClass:"header__menuitem"},[e("label",[t._v("Trade")]),t._v(" "),e("span",{staticClass:"svg"},[e("svg",{staticClass:"sc-bgqQcB halGnt mx-icon icondown",attrs:{focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 1024 1024","data-icon":"CaretDownOutlined"}},[e("path",{attrs:{d:"M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"}})])]),t._v(" "),t.client?t._e():e("div",{staticClass:"header__dropdown left"},[e("div",{staticClass:"header__dropdowncontent"},[e("div",{staticClass:"header__dropdowncontent--item",on:{click:function(e){return t.navigateToPage("register")}}},[e("figure",{staticClass:"header__dropdowncontent--logo"},[e("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[e("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"header__dropdowncontent--item",on:{click:function(e){return t.navigateToPage("register")}}},[e("figure",{staticClass:"header__dropdowncontent--logo"},[e("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[e("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),t._v(" "),t._m(1)])])]),t._v(" "),t.client?e("div",{staticClass:"header__dropdown left"},[e("div",{staticClass:"header__dropdowncontent"},[e("div",{staticClass:"header__dropdowncontent--item"},[e("figure",{staticClass:"header__dropdowncontent--logo"},[e("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[e("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"header__dropdowncontent--item"},[e("figure",{staticClass:"header__dropdowncontent--logo"},[e("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[e("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),t._v(" "),t._m(3)])])]):t._e()])])]),t._v(" "),e("div",{staticClass:"header__right"},[t.client?t._e():e("div",{staticClass:"header__btns header__menu"},[e("div",{staticClass:"header__menuitem"},[e("button",{staticClass:"btn transparent landing rounded-corner header-padding",attrs:{id:"login-btn"},on:{click:function(e){return t.navigateToPage("login")}}},[t._v("\n          Log In\n        ")])]),t._v(" "),e("div",{staticClass:"header__menuitem"},[e("button",{staticClass:"btn padded-btn colored-btn colored landing rounded-corner header-padding",on:{click:function(e){return t.navigateToPage("register")}}},[t._v("\n          open an account\n        ")])])]),t._v(" "),t.client?e("div",{staticClass:"header__btns header__menu"},[e("button",{staticClass:"btn padded-btn colored-btn",on:{click:function(e){return t.$router.push("/wallet/fiatandspot")}}},[t._v("\n        Deposit\n      ")]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"header__menuitem"},[e("span",{staticClass:"header__menuitem--svgbtn"},[e("svg",{staticClass:"r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e",attrs:{viewBox:"0 0 24 24","aria-hidden":"true"}},[e("g",[e("path",{attrs:{d:"M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"}})])])]),t._v(" "),e("div",{staticClass:"header__dropdown right"},[e("div",{staticClass:"header__dropdowncontent"},[e("div",{staticClass:"header__dropdowncontent--item"},[e("figure",{staticClass:"header__dropdowncontent--logo"},[e("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[e("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),t._v(" "),t._m(5)]),t._v(" "),e("div",{staticClass:"header__dropdowncontent--item",on:{click:t.triggerlogout}},[e("figure",{staticClass:"header__dropdowncontent--logo"},[e("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[e("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),t._v(" "),t._m(6)])])])]),t._v(" "),e("div",{staticClass:"header__menuitem notifications"},[e("span",{staticClass:"header__menuitem--svgbtn"},[e("svg",{staticClass:"r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e",attrs:{viewBox:"0 0 24 24","aria-hidden":"true"}},[e("g",[e("path",{attrs:{d:"M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"}})])])])])]):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"header__dropdowncontent--headerlabel"},[t._v("Spot")]),t._v(" "),e("span",{staticClass:"header__dropdowncontent--textlabel"},[t._v("\n                  designed for the modern trader who demands convenience, flexibility,\n                  and security. Our spot wallet is tailored to meet the needs of active\n                  traders.\n                ")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"header__dropdowncontent--headerlabel"},[t._v("Margin")]),t._v(" "),e("span",{staticClass:"header__dropdowncontent--textlabel"},[t._v("\n                  Our margin wallet is specifically designed for traders who want to use\n                  margin trading to amplify their gains.\n                ")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"header__dropdowncontent--headerlabel"},[t._v("Spot")]),t._v(" "),e("span",{staticClass:"header__dropdowncontent--textlabel"},[t._v("\n                  designed for the modern trader who demands convenience, flexibility,\n                  and security. Our spot wallet is tailored to meet the needs of active\n                  traders.\n                ")])])},function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"header__dropdowncontent--headerlabel"},[t._v("Margin")]),t._v(" "),e("span",{staticClass:"header__dropdowncontent--textlabel"},[t._v("\n                  Our margin wallet is specifically designed for traders who want to use\n                  margin trading to amplify their gains.\n                ")])])},function(){var t=this._self._c;return t("div",{staticClass:"header__menuitem"},[t("label")])},function(){var t=this,e=t._self._c;return e("div",[e("span",{staticClass:"header__dropdowncontent--headerlabel"},[t._v("Dashboard")]),t._v(" "),e("span",{staticClass:"header__dropdowncontent--textlabel"},[t._v("\n                  You received a deposit of 30,000 usdt\n                ")])])},function(){var t=this._self._c;return t("div",[t("span",{staticClass:"header__dropdowncontent--headerlabel"},[this._v("Logout")])])}],!1,null,null,null);e.default=component.exports}}]);