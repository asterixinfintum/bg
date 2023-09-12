(window.webpackJsonp=window.webpackJsonp||[]).push([[29,17,19],{284:function(t,n,e){"use strict";var r=e(3),o=e(66).find,c=e(114),l="find",v=!0;l in[]&&Array(1)[l]((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},298:function(t,n,e){"use strict";e(47),e(39),e(38),e(87),e(40),e(88);var r=e(32),o=(e(48),e(284),e(9),e(50),e(67),e(41),e(65));function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v=e(11).default.VERIFICATION_FRONT;n.a={data:function(){return{popupopen:!0}},methods:l(l({},Object(o.b)("auth",["generateKeyToken"])),{},{formatDate:function(t){return new Date(t).toLocaleString("en-US",{month:"long",day:"numeric"})},generateKeyTokenCall:function(){var t=this;this.generateKeyToken().then((function(){var n=t.key_token;t.navigateOutWithParams(v,n)})).catch((function(t){console.log(t)}))},navigateToPage:function(t,n){this.$router.push("/".concat(t))},navigateToPageWithParams:function(path,t){this.$router.push("/".concat(path,"/").concat(t))},navigateOutWithParams:function(t,n){var e="".concat(t,"/?token=").concat(n);console.log(e),window.open(e,"_blank")},navigateToTradePage:function(path,t){this.$router.push("/".concat(path,"&asset=").concat(t))},popupAction:function(t){"function"==typeof t&&t(),this.popupopen?this.popupopen=!1:this.popupopen=!0},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},openInNewTab:function(t){window.open(t,"_blank").focus()},formatNumberCommas:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof t||isNaN(t))return"Invalid number";var e={minimumFractionDigits:n,maximumFractionDigits:n};return t.toLocaleString(void 0,e)},formatNumberCommasMoreDecims:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof t||isNaN(t))return"Invalid number";var e={minimumFractionDigits:n,maximumFractionDigits:n};return t.toLocaleString(void 0,e)},formatNumber:function(t){return this.formatNumberCommas(parseInt(t,10))},returnCryptoLogo:function(symbol){var t=this.base_url,n=this.cryptoLogos.find((function(t){return t.toLowerCase().includes(symbol.toLowerCase())}));return"".concat(t,"/").concat(n)}}),computed:l({currentRoute:function(){return this.$route.name}},Object(o.d)({client_token:function(t){return t.auth.client_token},key_token:function(t){return t.auth.key_token}}))}},352:function(t,n,e){"use strict";e.r(n);var r={mixins:[e(298).a],props:["text","action"],data:function(){return{currentPane:1}},methods:{nextpane:function(){var t=this.currentPane;if(t<3){var n=t;n+=1,this.currentPane=n}},previouspane:function(){var t=this.currentPane;if(t>1){var n=t;n-=1,this.currentPane=n}}}},o=e(46),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return t.popupopen?n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__body"},[n("span",{staticClass:"popup__close",on:{click:t.popupAction}},[n("svg",{staticClass:"css-3kwgah",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"}},[n("path",{attrs:{d:"M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",fill:"currentColor"}})])]),t._v(" "),n("div",{staticClass:"popup__warningsvg"},[n("span",{staticClass:"popup__warningsvg--svg"},[n("svg",{staticClass:"css-19ss7aa",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9 4h6v2h-2v1h7v4.5h2v4h-2V20H4v-4.5H2v-4h2V7h7V6H9V4zm1 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 3.703h6L13.704 16.5h-3.4L9 15.203zM15.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",fill:"currentColor"}})])])]),t._v(" "),n("div",{staticClass:"popup__text"},[n("h3",{staticClass:"popup__text--h3"},[t._v("Ever felt lost in the maze of market strategies?")]),t._v(" "),n("p",{staticClass:"popup__text--p",class:{current:1===t.currentPane,previous:t.currentPane>1}},[t._v("Navigating the financial markets can be daunting, especially if you're a beginner or at an\n                intermediate level. It's easy to feel overwhelmed by the plethora of strategies and configurations\n                available")]),t._v(" "),n("p",{staticClass:"popup__text--p",class:{current:2===t.currentPane,previous:t.currentPane>2}},[t._v("Imagine having a system that AUTOMATICALLY selects and tailors the best strategies for you,\n                ensuring you're always positioned for success.")]),t._v(" "),n("p",{staticClass:"popup__text--p",class:{current:3===t.currentPane}},[t._v("Dive into the future of investing, where maximizing profits and minimizing losses becomes\n                effortless. Perfect for newbies and intermediate market enthusiasts alike. Your journey to smarter\n                investing starts here. Dive in now!")])]),t._v(" "),n("div",{staticClass:"popup__action"},[n("div",{staticClass:"popup__panenav"},[n("span",{staticClass:"arrow",on:{click:t.previouspane}},[t._v(" "+t._s("<-")+" ")]),t._v(" "),n("span",{staticClass:"space"}),t._v(" "),n("span",{staticClass:"arrow",on:{click:t.nextpane}},[t._v(" "+t._s("->")+" ")])]),t._v(" "),n("button",{staticClass:"popup__action--btn btn colored-btn padded-btn",on:{click:function(n){return t.popupAction(t.action)}}},[t._v("Create Trading\n                Bot")])])])]):t._e()}),[],!1,null,null,null);n.default=component.exports}}]);