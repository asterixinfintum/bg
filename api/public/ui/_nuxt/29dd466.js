(window.webpackJsonp=window.webpackJsonp||[]).push([[62,14,21,22],{285:function(e,t,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(113).default)("87d983a8",content,!0,{sourceMap:!1})},286:function(e,t,r){"use strict";r(41),r(40),r(32),r(86),r(39),r(87);var n=r(33),o=(r(43),r(288),r(10),r(51),r(66),r(42),r(65));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}r(9).default.VERIFICATION_FRONT;t.a={data:function(){return{popupopen:!0}},methods:{formatDate:function(e){return new Date(e).toLocaleString("en-US",{month:"long",day:"numeric"})},navigateToPage:function(e,t){this.$router.push("/".concat(e))},navigateToPageWithParams:function(path,e){this.$router.push("/".concat(path,"/").concat(e))},navigateOutWithParams:function(e,t){var r="".concat(e,"/?token=").concat(t);console.log(r),window.open(r,"_blank")},navigateToTradePage:function(path,e){this.$router.push("/".concat(path,"&asset=").concat(e))},popupAction:function(e){"function"==typeof e&&e(),this.popupopen?this.popupopen=!1:this.popupopen=!0},limitTextLength:function(text,e){return text.length<=e?text:text.substring(0,e)+"..."},openInNewTab:function(e){window.open(e,"_blank").focus()},formatNumberCommas:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof e||isNaN(e))return"Invalid number";var r={minimumFractionDigits:t,maximumFractionDigits:t};return e.toLocaleString(void 0,r)},formatNumberCommasMoreDecims:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;if("number"!=typeof e||isNaN(e))return"Invalid number";var r={minimumFractionDigits:t,maximumFractionDigits:t};return e.toLocaleString(void 0,r)},formatNumber:function(e){return this.formatNumberCommas(parseInt(e,10))},returnCryptoLogo:function(symbol){var e=this.base_url,t=this.cryptoLogos.find((function(e){return e.toLowerCase().includes(symbol.toLowerCase())}));return"".concat(e,"/").concat(t)}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({currentRoute:function(){return this.$route.name}},Object(o.d)({client_token:function(e){return e.auth.client_token},key_token:function(e){return e.auth.key_token}}))}},287:function(e,t,r){"use strict";r(41),r(40),r(32),r(86),r(39),r(87);var n=r(33),o=(r(10),r(65));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=r(9).default.BASE_URL;t.a={data:function(){return{depositCardOpen:!1}},computed:l({},Object(o.d)({client:function(e){return e.auth.client},client_token:function(e){return e.auth.client_token},wallettypes:function(e){return e.wallet.wallettypes}})),methods:l(l({},Object(o.c)("auth",["SET_CLIENT","SET_CLIENT_TOKEN"])),{},{getCurrentUser:function(){var e=this,t=localStorage.getItem("873__jh6bdjktoken");if(t)try{fetch("".concat(d,"/getclient"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(data){var t=data.token,r=data.userData;e.SET_CLIENT(r),e.SET_CLIENT_TOKEN(t)})).catch((function(e){console.log("Error:",e)}))}catch(e){console.log(e)}}}),mounted:function(){this.getCurrentUser()}}},288:function(e,t,r){"use strict";var n=r(3),o=r(88).find,c=r(137),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(l)},290:function(e,t,r){"use strict";r(41),r(40),r(32),r(10),r(86),r(39),r(87);var n=r(33),o=(r(26),r(50),r(65));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a={data:function(){return{timeToRequestData:6e3}},computed:l({},Object(o.d)({assets:function(e){return e.list.assets}})),methods:l(l({},Object(o.b)("list",["getassets"])),{},{getCharactersBeforeUnderscore:function(e){return e.split("_")[0]},removeUnderscore:function(e){return e.replace(/_/g,"")}}),mounted:function(){this.getassets()}}},292:function(e,t,r){"use strict";r.r(t);r(41),r(40),r(32),r(10),r(86),r(39),r(87);var n=r(33),o=(r(42),r(65)),c=r(286),l=r(287),d=r(290);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={computed:f({},Object(o.d)({inhouseassets:function(e){return e.inhouseassets.items},inhouseasset:function(e){return e.inhouseassets.item}})),methods:f({},Object(o.b)("inhouseassets",["getinhouseassets"])),mounted:function(){this.getinhouseassets()}};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"Landing",mixins:[c.a,l.a,d.a,v],methods:y(y({},Object(o.b)("auth",["logout"])),{},{triggerlogout:function(){var e=this;(0,this.logout)().then((function(){return e.$router.push("/")}))}}),computed:{generalLandingPageStyle:function(){return{landing:"index"===this.$route.name}}}},w=r(48),component=Object(w.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"header",class:e.generalLandingPageStyle,attrs:{id:"header"}},[t("div",{staticClass:"header__left"},[e.client?t("div",{staticClass:"header__logo",on:{click:function(t){return e.$router.push("/overview")}}},[t("figure"),e._v(" "),t("p",[e._v("BVX")])]):e._e(),e._v(" "),e.client?e._e():t("div",{staticClass:"header__logo",on:{click:function(t){return e.$router.push("/")}}},[t("figure"),e._v(" "),t("p",[e._v("BVX")])]),e._v(" "),t("div",{staticClass:"header__menu"},[t("div",{staticClass:"header__menuitem",on:{click:function(t){return e.navigateToPage("blog")}}},[t("label",[e._v("Blog")])]),e._v(" "),t("div",{staticClass:"header__menuitem",on:{click:function(t){return e.navigateToPage("register")}}},[t("label",[e._v("Markets")])]),e._v(" "),t("div",{staticClass:"header__menuitem"},[t("label",[e._v("Trade")]),e._v(" "),t("span",{staticClass:"svg"},[t("svg",{staticClass:"sc-bgqQcB halGnt mx-icon icondown",attrs:{focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 1024 1024","data-icon":"CaretDownOutlined"}},[t("path",{attrs:{d:"M929.1776 203.1616a61.44 61.44 0 0 1 46.8992 100.9664L559.104 799.0272a61.44 61.44 0 0 1-94.0032 0L47.9232 304.128a61.44 61.44 0 0 1 46.8992-100.9664h834.3552z"}})])]),e._v(" "),e.client?e._e():t("div",{staticClass:"header__dropdown left"},[t("div",{staticClass:"header__dropdowncontent"},[t("div",{staticClass:"header__dropdowncontent--item",on:{click:function(t){return e.navigateToPage("register")}}},[t("figure",{staticClass:"header__dropdowncontent--logo"},[t("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[t("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"header__dropdowncontent--item",on:{click:function(t){return e.navigateToPage("register")}}},[t("figure",{staticClass:"header__dropdowncontent--logo"},[t("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[t("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),e._v(" "),e._m(1)])])]),e._v(" "),e.client?t("div",{staticClass:"header__dropdown left"},[t("div",{staticClass:"header__dropdowncontent"},[t("div",{staticClass:"header__dropdowncontent--item"},[t("figure",{staticClass:"header__dropdowncontent--logo"},[t("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[t("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),e._v(" "),e._m(2)]),e._v(" "),t("div",{staticClass:"header__dropdowncontent--item"},[t("figure",{staticClass:"header__dropdowncontent--logo"},[t("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[t("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),e._v(" "),e._m(3)])])]):e._e()])])]),e._v(" "),t("div",{staticClass:"header__right"},[e.client?e._e():t("div",{staticClass:"header__btns header__menu"},[t("div",{staticClass:"header__menuitem"},[t("button",{staticClass:"btn transparent landing rounded-corner header-padding",attrs:{id:"login-btn"},on:{click:function(t){return e.navigateToPage("login")}}},[e._v("\n          Log In\n        ")])]),e._v(" "),t("div",{staticClass:"header__menuitem"},[t("button",{staticClass:"btn padded-btn colored-btn colored landing rounded-corner header-padding",on:{click:function(t){return e.navigateToPage("register")}}},[e._v("\n          open an account\n        ")])])]),e._v(" "),e.client?t("div",{staticClass:"header__btns header__menu"},[t("button",{staticClass:"btn padded-btn colored-btn",on:{click:function(t){return e.$router.push("/wallet/fiatandspot")}}},[e._v("\n        Deposit\n      ")]),e._v(" "),e._m(4),e._v(" "),t("div",{staticClass:"header__menuitem"},[t("span",{staticClass:"header__menuitem--svgbtn"},[t("svg",{staticClass:"r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e",attrs:{viewBox:"0 0 24 24","aria-hidden":"true"}},[t("g",[t("path",{attrs:{d:"M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"}})])])]),e._v(" "),t("div",{staticClass:"header__dropdown right"},[t("div",{staticClass:"header__dropdowncontent"},[t("div",{staticClass:"header__dropdowncontent--item"},[t("figure",{staticClass:"header__dropdowncontent--logo"},[t("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[t("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),e._v(" "),e._m(5)]),e._v(" "),t("div",{staticClass:"header__dropdowncontent--item",on:{click:e.triggerlogout}},[t("figure",{staticClass:"header__dropdowncontent--logo"},[t("svg",{staticClass:"css-1s4hjvp",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:""}},[t("use",{attrs:{"xlink:href":"#market-overview-g"}})])]),e._v(" "),e._m(6)])])])]),e._v(" "),t("div",{staticClass:"header__menuitem notifications"},[t("span",{staticClass:"header__menuitem--svgbtn"},[t("svg",{staticClass:"r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e",attrs:{viewBox:"0 0 24 24","aria-hidden":"true"}},[t("g",[t("path",{attrs:{d:"M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"}})])])])])]):e._e()])])}),[function(){var e=this,t=e._self._c;return t("div",[t("span",{staticClass:"header__dropdowncontent--headerlabel"},[e._v("Spot")]),e._v(" "),t("span",{staticClass:"header__dropdowncontent--textlabel"},[e._v("\n                  designed for the modern trader who demands convenience, flexibility,\n                  and security. Our spot wallet is tailored to meet the needs of active\n                  traders.\n                ")])])},function(){var e=this,t=e._self._c;return t("div",[t("span",{staticClass:"header__dropdowncontent--headerlabel"},[e._v("Margin")]),e._v(" "),t("span",{staticClass:"header__dropdowncontent--textlabel"},[e._v("\n                  Our margin wallet is specifically designed for traders who want to use\n                  margin trading to amplify their gains.\n                ")])])},function(){var e=this,t=e._self._c;return t("div",[t("span",{staticClass:"header__dropdowncontent--headerlabel"},[e._v("Spot")]),e._v(" "),t("span",{staticClass:"header__dropdowncontent--textlabel"},[e._v("\n                  designed for the modern trader who demands convenience, flexibility,\n                  and security. Our spot wallet is tailored to meet the needs of active\n                  traders.\n                ")])])},function(){var e=this,t=e._self._c;return t("div",[t("span",{staticClass:"header__dropdowncontent--headerlabel"},[e._v("Margin")]),e._v(" "),t("span",{staticClass:"header__dropdowncontent--textlabel"},[e._v("\n                  Our margin wallet is specifically designed for traders who want to use\n                  margin trading to amplify their gains.\n                ")])])},function(){var e=this._self._c;return e("div",{staticClass:"header__menuitem"},[e("label")])},function(){var e=this,t=e._self._c;return t("div",[t("span",{staticClass:"header__dropdowncontent--headerlabel"},[e._v("Dashboard")]),e._v(" "),t("span",{staticClass:"header__dropdowncontent--textlabel"},[e._v("\n                  You received a deposit of 30,000 usdt\n                ")])])},function(){var e=this._self._c;return e("div",[e("span",{staticClass:"header__dropdowncontent--headerlabel"},[this._v("Logout")])])}],!1,null,null,null);t.default=component.exports},293:function(e,t,r){"use strict";r(285)},294:function(e,t,r){var n=r(112)((function(i){return i[1]}));n.push([e.i,".headerbox[data-v-2192a807]{position:relative;z-index:11}",""]),n.locals={},e.exports=n},296:function(e,t,r){"use strict";r.r(t);var n={},o=(r(293),r(48)),component=Object(o.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"headerbox"},[e("CurrencyEscalator"),this._v(" "),e("Header")],1)}),[],!1,null,"2192a807",null);t.default=component.exports;installComponents(component,{CurrencyEscalator:r(303).default,Header:r(292).default})},357:function(e,t,r){"use strict";r(10),r(39);t.a={mounted:function(){this.formatParagraphs()},methods:{formatParagraphs:function(){var e=this.$refs.textcontent;this.textarray.forEach((function(text){var template='\n              <p class="info__display--p">'.concat(text,"</p>\n            ");e.insertAdjacentHTML("beforeend",template)}))}}}},502:function(e,t,r){"use strict";r.r(t);var n={mixins:[r(357).a],data:function(){return{textarray:["Welcome to our website. By accessing or using our service, you agree to be bound by the terms and conditions set forth below. If you do not wish to be bound by these terms and conditions, you may not access or use the service. We may modify this agreement at any time, and such modifications shall be effective immediately upon posting of the modified agreement on the site. You agree to review the agreement periodically to be aware of such modifications and your continued access or use of the service shall be deemed your conclusive acceptance of the modified agreement.","Your use of the service is at your sole risk. The service is provided on an 'as is' and 'as available' basis. We expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.","We make no warranty that (i) the service will meet your requirements, (ii) the service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations, and (v) any errors in the software will be corrected.","Any material downloaded or otherwise obtained through the use of the service is done at your own discretion and risk and you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such material.","No advice or information, whether oral or written, obtained by you from us or through or from the service shall create any warranty not expressly stated in the terms of service.","You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if we have been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the service; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the service; (iii) unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the service; or (v) any other matter relating to the service.","You agree to indemnify and hold us, and our subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of content you submit, post, transmit or make available through the service, your use of the service, your connection to the service, your violation of the terms of service, or your violation of any rights of another.","The section titles in the terms of service are for convenience only and have no legal or contractual effect.","You acknowledge and agree that all content and information on the site is protected by proprietary rights and laws. You agree not to copy, distribute, reproduce, or create derivative works from any part of the service or the site without the express authorization of the company.","The service may include links to other websites not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible for any loss or damage caused by the use of any such content available on or through any such sites or services.","We may terminate your access to the site, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. All provisions of this agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.","The service is controlled and operated from its facilities in its country of origin. We make no representations that the service is appropriate or available for use in other locations. Those who access or use the service from other jurisdictions do so at their own volition and are responsible for compliance with local law.","You agree to defend, indemnify, and hold harmless the company and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the service, by you or any person using your account and password; b) a breach of these terms, or c) content posted on the service.","In no event shall the company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service; (iii) any content obtained from the service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.","Your use of the service is at your sole risk. The service is provided on an 'AS IS' and 'AS AVAILABLE' basis. The service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.","These Terms shall be governed and construed in accordance with the laws of the jurisdiction of the company's registration, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our service, and supersede and replace any prior agreements we might have had between us regarding the service.","We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.","By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the service."]}}},o=r(48),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"landing"},[t("div",{staticClass:"landing__header"},[t("HeaderBox")],1),e._v(" "),t("div",{staticClass:"info"},[t("div",{staticClass:"info__box info__content"},[t("h2",[e._v("Expressed below are the terms of use for BVX Trade")]),e._v(" "),t("div",{ref:"textcontent",staticClass:"info__display--content preview"})])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderBox:r(296).default})}}]);