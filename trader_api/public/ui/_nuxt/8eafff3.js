(window.webpackJsonp=window.webpackJsonp||[]).push([[27,17],{298:function(t,e,r){"use strict";r(47),r(39),r(38),r(87),r(40),r(88);var n=r(32),o=(r(48),r(284),r(9),r(50),r(67),r(41),r(65));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=r(11).default.VERIFICATION_FRONT;e.a={data:function(){return{popupopen:!0}},methods:l(l({},Object(o.b)("auth",["generateKeyToken"])),{},{formatDate:function(t){return new Date(t).toLocaleString("en-US",{month:"long",day:"numeric"})},generateKeyTokenCall:function(){var t=this;this.generateKeyToken().then((function(){var e=t.key_token;t.navigateOutWithParams(d,e)})).catch((function(t){console.log(t)}))},navigateToPage:function(t,e){this.$router.push("/".concat(t))},navigateToPageWithParams:function(path,t){this.$router.push("/".concat(path,"/").concat(t))},navigateOutWithParams:function(t,e){var r="".concat(t,"/?token=").concat(e);console.log(r),window.open(r,"_blank")},navigateToTradePage:function(path,t){this.$router.push("/".concat(path,"&asset=").concat(t))},popupAction:function(t){"function"==typeof t&&t(),this.popupopen?this.popupopen=!1:this.popupopen=!0},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},openInNewTab:function(t){window.open(t,"_blank").focus()},formatNumberCommas:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof t||isNaN(t))return"Invalid number";var r={minimumFractionDigits:e,maximumFractionDigits:e};return t.toLocaleString(void 0,r)},formatNumberCommasMoreDecims:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof t||isNaN(t))return"Invalid number";var r={minimumFractionDigits:e,maximumFractionDigits:e};return t.toLocaleString(void 0,r)},formatNumber:function(t){return this.formatNumberCommas(parseInt(t,10))},returnCryptoLogo:function(symbol){var t=this.base_url,e=this.cryptoLogos.find((function(t){return t.toLowerCase().includes(symbol.toLowerCase())}));return"".concat(t,"/").concat(e)}}),computed:l({currentRoute:function(){return this.$route.name}},Object(o.d)({client_token:function(t){return t.auth.client_token},key_token:function(t){return t.auth.key_token}}))}},357:function(t,e,r){"use strict";r.r(e);r(26),r(51);var n={props:["asset","walletTradingFrom"],mixins:[],data:function(){return{fundaccount_popup:!1,tradeInputView:"create order",orderType:"market",margin:"standard"}},methods:{togggleTradeInputView:function(view){this.tradeInputView=view},toggleOrderType:function(t){this.orderType=t},fundaccount_popup_toggle:function(){if(this.fundaccount_popup)return this.fundaccount_popup=!1;this.fundaccount_popup=!0},openFundAccountPopup:function(){this.fundaccount_popup=!0},toggleAutotrade:function(){var t=this.autoTrade,e=this.$route.fullPath;e="true"===t?e.replace(/true/g,"false"):e.replace(/false/g,"true"),this.$router.push({path:e,fullPath:!0})},toggleWallet:function(t){var e=this.$route.fullPath;"spot"===t&&(e=e.replace(/margin/g,"spot")),"margin"===t&&(e=e.replace(/spot/g,"margin")),this.$router.push({path:e,fullPath:!0})},toggleMargin:function(t){this.margin=t}},computed:{walletType:function(){var t=this.walletTradingFrom;return"spot"===t?"fiat/spot":"margin"===t?"margin":void 0},autoTrade:function(){return this.$route.query.autotrader}}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"spottradearea"},["fiat/spot"===t.walletType?e("div",{staticClass:"spottradearea__wallettype spottradearea__nav no-padding"},[e("div",{staticClass:"spottradearea__wallettype spottradearea__nav current"},[e("h2",[t._v(t._s(t.walletTradingFrom))])]),t._v(" "),e("div",{staticClass:"spottradearea__wallettype spottradearea__nav notcurrent",on:{click:function(e){return t.toggleWallet("margin")}}},[e("h2",[t._v("Margin Trading")])]),t._v(" "),e("div",{staticClass:"spottradearea__autotradetoggle"},[e("label",{staticClass:"spottradearea__autotradetoggle--label"},[t._v("\n                Auto Trader\n            ")]),t._v(" "),e("div",{staticClass:"toggle-switch off",class:{on:"true"===t.autoTrade},on:{click:t.toggleAutotrade}},[e("span",{staticClass:"toggle-switch-button",class:{on:"true"===t.autoTrade,off:"false"===t.autoTrade}})])])]):t._e(),t._v(" "),"margin"===t.walletType?e("div",{staticClass:"spottradearea__wallettype spottradearea__nav no-padding"},[e("div",{staticClass:"spottradearea__wallettype spottradearea__nav notcurrent",on:{click:function(e){return t.toggleWallet("spot")}}},[e("h2",[t._v("Spot")])]),t._v(" "),e("div",{staticClass:"spottradearea__wallettype spottradearea__nav current",class:{}},[e("h2",[t._v(t._s(t.walletTradingFrom)+" Trading")])]),t._v(" "),e("div",{staticClass:"spottradearea__autotradetoggle"},[e("label",{staticClass:"spottradearea__autotradetoggle--label"},[t._v("\n                Auto Trader\n            ")]),t._v(" "),e("div",{staticClass:"toggle-switch off",class:{on:"true"===t.autoTrade},on:{click:t.toggleAutotrade}},[e("span",{staticClass:"toggle-switch-button",class:{on:"true"===t.autoTrade,off:"false"===t.autoTrade}})])])]):t._e(),t._v(" "),"margin"===t.walletType?e("div",{staticClass:"spottradearea__nav"},[e("span",{staticClass:"spottradearea__nav--btn",class:{current:"standard"===t.margin},on:{click:function(e){return t.toggleMargin("standard")}}},[t._v("Standard")]),t._v(" "),e("span",{staticClass:"spottradearea__nav--btn",class:{current:"2X"===t.margin},on:{click:function(e){return t.toggleMargin("2X")}}},[t._v("2X")]),t._v(" "),e("span",{staticClass:"spottradearea__nav--btn",class:{current:"3X"===t.margin},on:{click:function(e){return t.toggleMargin("3X")}}},[t._v("3X")]),t._v(" "),e("span",{staticClass:"spottradearea__nav--btn",class:{current:"4X"===t.margin},on:{click:function(e){return t.toggleMargin("4X")}}},[t._v("4X")]),t._v(" "),e("span",{staticClass:"spottradearea__nav--btn",class:{current:"5X"===t.margin},on:{click:function(e){return t.toggleMargin("5X")}}},[t._v("5X")])]):t._e(),t._v(" "),"spot"===t.tradeInputView?e("div",{staticClass:"spottradearea__tradetypes"},[e("span",{staticClass:"spottradearea__tradetypes--btn current"},[t._v("Limit")]),t._v(" "),e("span",{staticClass:"spottradearea__tradetypes--btn"},[t._v("Market")])]):t._e(),t._v(" "),e("div",{staticClass:"spottradearea__tradetypes"},[e("span",{staticClass:"spottradearea__tradetypes--btn",class:{current:"market"===t.orderType},on:{click:function(e){return t.toggleOrderType("market")}}},[t._v("Market")]),t._v(" "),e("span",{staticClass:"spottradearea__tradetypes--btn",class:{current:"limit"===t.orderType},on:{click:function(e){return t.toggleOrderType("limit")}}},[t._v("Limit")]),t._v(" "),e("span",{staticClass:"spottradearea__tradetypes--btn",class:{current:"stop limit"===t.orderType},on:{click:function(e){return t.toggleOrderType("stop limit")}}},[t._v("Stop Limit")])]),t._v(" "),t.fundaccount_popup?e("div",{staticClass:"spottradearea__fundaccount"},[e("div",{staticClass:"spottradearea__fundbody"},[e("div",{staticClass:"spottradearea__head"},[e("h2",{staticClass:"spottradearea__head--h2"},[t._v("Fund Your Account")]),t._v(" "),e("h3",{staticClass:"spottradearea__head--h3"},[t._v("Select your preferred method to fund your account.")]),t._v(" "),e("span",{staticClass:"spottradearea__head--close",on:{click:t.fundaccount_popup_toggle}},[e("svg",{staticClass:"css-1iztezc",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none"}},[e("path",{attrs:{d:"M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",fill:"currentColor"}})])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])]):t._e(),t._v(" "),e("div",[e("CreateOrder",{attrs:{asset:t.asset,orderType:t.orderType,wallettype:t.walletType,fundaccount_popup_toggle:t.fundaccount_popup_toggle,openFundAccountPopup:t.openFundAccountPopup,margin:t.margin}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spottradearea__fundoption"},[e("div",{staticClass:"spottradearea__fundoption--left"},[e("h3",{staticClass:"spottradearea__fundoption--h3"},[t._v("Internal Transfer")]),t._v(" "),e("span",{staticClass:"spottradearea__fundoption--description"},[t._v("Transfer from your internal wallet")])]),t._v(" "),e("div",{staticClass:"spottradearea__fundoption--right"},[e("button",{staticClass:"spottradearea__fundoption--btn btn colored-btn"},[t._v("Transfer")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"spottradearea__fundoption"},[e("div",{staticClass:"spottradearea__fundoption--left"},[e("h3",{staticClass:"spottradearea__fundoption--h3"},[t._v("Convert")]),t._v(" "),e("span",{staticClass:"spottradearea__fundoption--description"},[t._v("Convert from asset in wallet")])]),t._v(" "),e("div",{staticClass:"spottradearea__fundoption--right"},[e("button",{staticClass:"spottradearea__fundoption--btn btn colored-btn"},[t._v("Convert")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"spottradearea__fundoption"},[e("div",{staticClass:"spottradearea__fundoption--left"},[e("h3",{staticClass:"spottradearea__fundoption--h3"},[t._v("Send coin to BVXE")]),t._v(" "),e("span",{staticClass:"spottradearea__fundoption--description"},[t._v("If you already hold some crypto currency, you\n                        can choose to transfer them to BVXE via blockchain.")])]),t._v(" "),e("div",{staticClass:"spottradearea__fundoption--right"},[e("button",{staticClass:"spottradearea__fundoption--btn btn colored-btn"},[t._v("Deposit")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CreateOrder:r(346).default})}}]);