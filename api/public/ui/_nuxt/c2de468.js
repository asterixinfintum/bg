(window.webpackJsonp=window.webpackJsonp||[]).push([[25,14],{285:function(e,t,r){"use strict";r(41),r(39),r(32),r(86),r(40),r(87);var n=r(33),l=(r(43),r(288),r(10),r(51),r(66),r(42),r(65));function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}r(9).default.VERIFICATION_FRONT;t.a={data:function(){return{popupopen:!0}},methods:{formatDate:function(e){return new Date(e).toLocaleString("en-US",{month:"long",day:"numeric"})},navigateToPage:function(e,t){this.$router.push("/".concat(e))},navigateToPageWithParams:function(path,e){this.$router.push("/".concat(path,"/").concat(e))},navigateOutWithParams:function(e,t){var r="".concat(e,"/?token=").concat(t);console.log(r),window.open(r,"_blank")},navigateToTradePage:function(path,e){this.$router.push("/".concat(path,"&asset=").concat(e))},popupAction:function(e){"function"==typeof e&&e(),this.popupopen?this.popupopen=!1:this.popupopen=!0},limitTextLength:function(text,e){return text.length<=e?text:text.substring(0,e)+"..."},openInNewTab:function(e){window.open(e,"_blank").focus()},formatNumberCommas:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof e||isNaN(e))return"Invalid number";var r={minimumFractionDigits:t,maximumFractionDigits:t};return e.toLocaleString(void 0,r)},formatNumberCommasMoreDecims:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof e||isNaN(e))return"Invalid number";var r={minimumFractionDigits:t,maximumFractionDigits:t};return e.toLocaleString(void 0,r)},formatNumber:function(e){return this.formatNumberCommas(parseInt(e,10))},returnCryptoLogo:function(symbol){var e=this.base_url,t=this.cryptoLogos.find((function(e){return e.toLowerCase().includes(symbol.toLowerCase())}));return"".concat(e,"/").concat(t)}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({currentRoute:function(){return this.$route.name}},Object(l.d)({client_token:function(e){return e.auth.client_token},key_token:function(e){return e.auth.key_token}}))}},288:function(e,t,r){"use strict";var n=r(3),l=r(88).find,_=r(137),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),_(o)},426:function(e,t,r){"use strict";r.r(t);var n={props:["items"],mixins:[r(285).a]},l=r(48),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),e._l(e.items,(function(r){return t("div",{staticClass:"assetlistheader index__headerarea"},[t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(r.tradingPair))])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(e.formatDate(r.date)))])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(r.type))])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(r.side))])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(r.price))])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(r.quantity))])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(r.orderAmount))])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v(e._s(r.filled))])]),e._v(" "),e._m(1,!0)])}))],2)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"assetlistheader index__headerarea"},[t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Trading Pair")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Date")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Type")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Side")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Price")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Quantity")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Order Amount")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Filled")])]),e._v(" "),t("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[t("label",{staticClass:"assetlistheader__item--label"},[e._v("Cancel all")])])])},function(){var e=this._self._c;return e("div",{staticClass:"assetlistheader__item index__headerarea--menuitem"},[e("label",{staticClass:"assetlistheader__item--label"},[this._v("Cancel")])])}],!1,null,null,null);t.default=component.exports}}]);