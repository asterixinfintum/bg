(window.webpackJsonp=window.webpackJsonp||[]).push([[13,17,19],{284:function(t,e,n){"use strict";var r=n(3),o=n(66).find,c=n(114),f="find",m=!0;f in[]&&Array(1)[f]((function(){m=!1})),r({target:"Array",proto:!0,forced:m},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(f)},298:function(t,e,n){"use strict";n(47),n(39),n(38),n(87),n(40),n(88);var r=n(32),o=(n(48),n(284),n(9),n(50),n(67),n(41),n(65));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=n(11).default.VERIFICATION_FRONT;e.a={data:function(){return{popupopen:!0}},methods:f(f({},Object(o.b)("auth",["generateKeyToken"])),{},{formatDate:function(t){return new Date(t).toLocaleString("en-US",{month:"long",day:"numeric"})},generateKeyTokenCall:function(){var t=this;this.generateKeyToken().then((function(){var e=t.key_token;t.navigateOutWithParams(m,e)})).catch((function(t){console.log(t)}))},navigateToPage:function(t,e){this.$router.push("/".concat(t))},navigateToPageWithParams:function(path,t){this.$router.push("/".concat(path,"/").concat(t))},navigateOutWithParams:function(t,e){var n="".concat(t,"/?token=").concat(e);console.log(n),window.open(n,"_blank")},navigateToTradePage:function(path,t){this.$router.push("/".concat(path,"&asset=").concat(t))},popupAction:function(t){"function"==typeof t&&t(),this.popupopen?this.popupopen=!1:this.popupopen=!0},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},openInNewTab:function(t){window.open(t,"_blank").focus()},formatNumberCommas:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof t||isNaN(t))return"Invalid number";var n={minimumFractionDigits:e,maximumFractionDigits:e};return t.toLocaleString(void 0,n)},formatNumberCommasMoreDecims:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof t||isNaN(t))return"Invalid number";var n={minimumFractionDigits:e,maximumFractionDigits:e};return t.toLocaleString(void 0,n)},formatNumber:function(t){return this.formatNumberCommas(parseInt(t,10))},returnCryptoLogo:function(symbol){var t=this.base_url,e=this.cryptoLogos.find((function(t){return t.toLowerCase().includes(symbol.toLowerCase())}));return"".concat(t,"/").concat(e)}}),computed:f({currentRoute:function(){return this.$route.name}},Object(o.d)({client_token:function(t){return t.auth.client_token},key_token:function(t){return t.auth.key_token}}))}},309:function(t,e,n){"use strict";n(47),n(39),n(38),n(9),n(87),n(40),n(88);var r=n(32),o=(n(26),n(51),n(65));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={data:function(){return{timeToRequestData:6e3}},computed:f(f({},Object(o.d)({cryptoassets:function(t){return t.cryptoassets.cryptoassets}})),{},{assets:function(){return this.cryptoassets}}),methods:f(f({},Object(o.b)("cryptoassets",["getcryptoassets"])),{},{getCharactersBeforeUnderscore:function(t){return t.split("_")[0]},removeUnderscore:function(t){return t.replace(/_/g,"")}}),mounted:function(){this.getcryptoassets()}}}}]);