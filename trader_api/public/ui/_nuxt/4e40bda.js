(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{296:function(t,n,e){"use strict";e(47),e(40),e(39),e(87),e(41),e(88);var o=e(32),r=(e(48),e(284),e(9),e(50),e(67),e(38),e(65));function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){Object(o.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}n.a={data:function(){return{popupopen:!0,secondary_base_url:"http://localhost:52027"}},methods:f(f({},Object(r.b)("auth",["generateKeyToken"])),{},{formatDate:function(t){return new Date(t).toLocaleString("en-US",{month:"long",day:"numeric"})},generateKeyTokenCall:function(){var t=this;this.generateKeyToken().then((function(){var n=t.secondary_base_url,e=t.key_token;t.navigateOutWithParams(n,e)})).catch((function(t){console.log(t)}))},navigateToPage:function(t,n){this.$router.push("/".concat(t))},navigateToPageWithParams:function(path,t){this.$router.push("/".concat(path,"/").concat(t))},navigateOutWithParams:function(t,n){var e="".concat(t,"/?token=").concat(n);window.open(e,"_blank")},navigateToTradePage:function(path,t){this.$router.push("/".concat(path,"&asset=").concat(t))},popupAction:function(t){"function"==typeof t&&t(),this.popupopen?this.popupopen=!1:this.popupopen=!0},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},openInNewTab:function(t){window.open(t,"_blank").focus()},formatNumberCommas:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof t||isNaN(t))return"Invalid number";var e={minimumFractionDigits:n,maximumFractionDigits:n};return t.toLocaleString(void 0,e)},formatNumberCommasMoreDecims:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof t||isNaN(t))return"Invalid number";var e={minimumFractionDigits:n,maximumFractionDigits:n};return t.toLocaleString(void 0,e)},formatNumber:function(t){return this.formatNumberCommas(parseInt(t,10))},returnCryptoLogo:function(symbol){var t=this.base_url,n=this.cryptoLogos.find((function(t){return t.toLowerCase().includes(symbol.toLowerCase())}));return"".concat(t,"/").concat(n)}}),computed:f({currentRoute:function(){return this.$route.name}},Object(r.d)({client_token:function(t){return t.auth.client_token},key_token:function(t){return t.auth.key_token}}))}}}]);