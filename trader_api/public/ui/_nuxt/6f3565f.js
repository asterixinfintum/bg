(window.webpackJsonp=window.webpackJsonp||[]).push([[30,19,29],{284:function(t,e,n){"use strict";var r=n(3),c=n(66).find,o=n(114),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},287:function(t,e,n){"use strict";var r=n(3),c=n(5),o=n(49),l=n(202),f=n(201),h=n(4),v=RangeError,d=String,_=Math.floor,y=c(f),m=c("".slice),C=c(1..toFixed),T=function(t,e,n){return 0===e?n:e%2==1?T(t,e-1,n*t):T(t*t,e/2,n)},w=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=_(r/1e7)},I=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=_(n/t),n=n%t*1e7},O=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=d(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:h((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!h((function(){C({})}))},{toFixed:function(t){var e,n,r,c,f=l(this),h=o(t),data=[0,0,0,0,0,0],_="",C="0";if(h<0||h>20)throw v("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return d(f);if(f<0&&(_="-",f=-f),f>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(f*T(2,69,1))-69)<0?f*T(2,-e,1):f/T(2,e,1),n*=4503599627370496,(e=52-e)>0){for(w(data,0,n),r=h;r>=7;)w(data,1e7,0),r-=7;for(w(data,T(10,r,1),0),r=e-1;r>=23;)I(data,1<<23),r-=23;I(data,1<<r),w(data,1,1),I(data,2),C=O(data)}else w(data,0,n),w(data,1<<-e,0),C=O(data)+y("0",h);return C=h>0?_+((c=C.length)<=h?"0."+y("0",h-c)+C:m(C,0,c-h)+"."+m(C,c-h)):_+C}})},293:function(t,e,n){"use strict";n(47),n(40),n(87),n(88);var r=n(32),c=(n(39),n(9),n(41),n(284),n(287),n(38),n(65));function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={computed:l(l({},Object(c.d)({client:function(t){return t.auth.client},client_token:function(t){return t.auth.client_token},wallets:function(t){return t.wallet.wallets},cryptoassets:function(t){return t.cryptoassets.cryptoassets},inhouseassets:function(t){return t.inhouseassets.items},inhouseasset:function(t){return t.inhouseassets.item}})),{},{balance:function(){var t=this.balances,e=this.wallettype,n=this.sumBalanceInWallet;return t&&t.length&&e?n(t.filter((function(t){return t.wallet===e}))[0].assetDetails):0},balanceInBTC:function(){var t=this.balances,e=this.wallettype,n=this.sumBalanceInWalletinBTC;return t&&t.length&&e?n(t.filter((function(t){return t.wallet===e}))[0].assetDetails):0},balances:function(){var t=this,e=this.wallets,n=[];return e&&e.length?(e.forEach((function(e){var r=t.returnCryptoAssetDetails,c=t.returnAssetBalanceInBTC,o=t.returnDollarValue,l=e.assets;if(l&&l.length){var f=[];l.forEach((function(t){var e=t.balanceinWallet,n=r(t.assetdb_id).price,l={base:t,detail:r(t.assetdb_id),balanceInDollars:o(e,n),balanceInBTC:c(n,e)};return f.push(l)}));var h={wallet:e.wallettype,assetDetails:f};n.push(h)}else{var v={wallet:e.wallettype,assetDetails:[]};n.push(v)}})),n):[]},wallet:function(){var t=this.wallettype,e=this.wallets;if(e.length&&t){var n=e.filter((function(e){return e.wallettype===t}))[0];return n}return"not a wallet"},assetsOwned:function(){var t=this.balances,e=this.wallettype,n=this.cryptoassets;if(t.length&&n.length&&e){var r=t.find((function(t){return t.wallet===e})).assetDetails,c=n.filter((function(t){return r.find((function(e){return e.base.assetdb_id===t._id}))}));return c}return[]}}),methods:{returnwallet:function(t){var e=this.wallets;return e.length&&t?e.filter((function(e){return e.wallettype===t}))[0]:null},returnBalanceSum:function(t){var e=this.balances,n=this.sumBalanceInWallet,c=this.sumBalanceInWalletinBTC,o=e.find((function(e){return e.wallet===t}));if(e.length&&o){var l=o.assetDetails;return{usdBalance:n(l),btcBalance:c(l)}}return Object(r.a)({usdBalance:0},"usdBalance",0)},sumBalanceInWallet:function(t){var e=0;return t.forEach((function(t){var n=parseFloat(t.balanceInDollars);if(!isNaN(n)){var r=n.toFixed(20);e+=parseFloat(r)}})),e.toFixed(8)},sumBalanceInWalletinBTC:function(t){var e=0;return t.forEach((function(t){var n=parseFloat(t.balanceInBTC);if(!isNaN(n)){var r=n.toFixed(20);e+=parseFloat(r)}})),e.toFixed(8)},returnCryptoAssetDetails:function(t){return this.cryptoassets.filter((function(e){return e._id===t}))[0]},returnAssetBalanceOBJ:function(t){var e=this.balances,n=this.wallettype;if(e.length){var r=e.filter((function(t){return t.wallet===n}))[0].assetDetails.find((function(e){return e.detail._id===t._id}));if(!r)return null;if(void 0===r)return null;if(void 0!==r&&r)return r}},returnAssetBalanceInBTC:function(t,e){var n=this.cryptoassets.filter((function(t){return"BTC"===t.coin&&"Bitcoin"===t.name}))[0].price,r=e*parseFloat(t)/parseFloat(n);return"".concat(parseFloat(r).toFixed(20))},returnDollarValue:function(t,e){return parseFloat(t)*parseFloat(e)},convert:function(t,e){var n=this.cryptoassets;console.log(n);var r=n.forEach((function(e){return e._id===t})),c=n.forEach((function(t){return t._id===e}));console.log(r,c,"test")}}}},295:function(t,e,n){"use strict";n(47),n(40),n(87),n(88);var r=n(138),c=n(32),o=(n(68),n(39),n(9),n(41),n(284),n(48),n(203),n(26),n(139),n(65)),l=n(293);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a={data:function(){return{searchInput:"",pageSize:20,currentPage:1,currentAssetcategory:"crypto"}},mixins:[l.a],computed:h(h({},Object(o.d)({cryptoassets:function(t){return t.cryptoassets.cryptoassets},originalList:function(t){return t.list.originalList},paginatedList:function(t){return t.list.paginatedList},inhouseassets:function(t){return t.inhouseassets.items},inhouseasset:function(t){return t.inhouseassets.item}})),{},{numberOfPages:function(){var t=this.pageSize,e=this.paginatedList;return Math.ceil(e.length/t)},listByPages:function(){for(var t=this.pageSize,e=this.paginatedList,n=[],i=0;i<e.length;i+=t)n.push(e.slice(i,i+t));return n}}),methods:h(h(h(h({},Object(o.b)("list",["search"])),Object(o.b)("inhouseassets",["getinhouseassets"])),Object(o.c)("list",["SET_PAGINATEDLIST","SET_ORIGINALLIST"])),{},{setCurrentPage:function(t){var e=this.scrollToTop;this.currentPage=t,e()},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},incrPage:function(){var t=this.currentPage,e=this.listByPages,n=this.scrollToTop;if(t>=1&&e.length&&t<e.length){var r=t+1;this.currentPage=r,n()}},reduPage:function(){var t=this.currentPage,e=this.listByPages,n=this.scrollToTop;if(t>1&&e.length){var r=t-1;this.currentPage=r,n()}},clearInput:function(){this.searchInput=""},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},setCurrentCategory:function(t){this.currentAssetcategory=t}}),watch:{cryptoassets:function(t,e){this.SET_PAGINATEDLIST(t),this.SET_ORIGINALLIST(t)},currentAssetcategory:function(t,e){if("crypto"===t&&(this.SET_PAGINATEDLIST(this.cryptoassets),this.SET_ORIGINALLIST(this.cryptoassets)),"inhousetokenizedstocks"===t){var n=this.inhouseassets.filter((function(t){return"tokenized stock"===t.assetType}));this.SET_PAGINATEDLIST(n),this.SET_ORIGINALLIST(n)}if("inhousefiat"===t){var r=this.inhouseassets.filter((function(t){return"fiat"===t.assetType}));this.SET_PAGINATEDLIST(r),this.SET_ORIGINALLIST(r)}if("inhousestocks"===t){var c=this.inhouseassets.filter((function(t){return"stock"===t.assetType}));this.SET_PAGINATEDLIST(c),this.SET_ORIGINALLIST(c)}},assetsOwned:function(t,e){var n=this.originalList,c=t,o=[];if(c.length&&n.length){n.forEach((function(t){c.find((function(e){return e._id===t._id}))||o.push(t)}));var l=[].concat(Object(r.a)(c),o);this.SET_PAGINATEDLIST(l),this.SET_ORIGINALLIST(l)}},paginatedList:function(){this.currentPage=1},searchInput:function(t,e){var n=t.trim().toLowerCase();this.search(n)}}}},308:function(t,e,n){t.exports=n.p+"img/dollar-symbol.68d6c5d.png"},319:function(t,e,n){"use strict";n.r(e);n(38);var r=[function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:"https://assets.coincap.io/assets/icons/256/btc.png"}})])},function(){var t=this._self._c;return t("span",{staticClass:"btn"},[t("button",{staticClass:"btn"},[this._v("Crypto")])])},function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:n(308)}})])},function(){var t=this._self._c;return t("span",{staticClass:"btn"},[t("button",{staticClass:"btn"},[this._v("Fiat")])])},function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:"https://assets.coincap.io/assets/icons/rune@2x.png"}})])},function(){var t=this._self._c;return t("span",{staticClass:"btn"},[t("button",{staticClass:"btn"},[this._v("Tokenized Stocks")])])},function(){var t=this._self._c;return t("figure",{staticClass:"transactionstyle__listitemsasset--logo"},[t("img",{attrs:{src:"https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84/logo.png"}}),this._v(" "),t("figure",[t("img",{attrs:{src:"https://assets.coincap.io/assets/icons/256/eth.png"}})])])}],c=n(295),o=n(293),l=n(115),f={props:["setCurrentAsset","toWallet","toggleAssetsMenu"],mixins:[o.a,c.a],methods:{closeTransferPanel:function(){l.a.$emit("toggle-transfer-panel")}}},h=n(46),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"popup"},[e("div",{staticClass:"popup__body transactionstyle__body"},[e("div",{staticClass:"transactionstyle__subject"},[e("div",{staticClass:"transactionstyle__subject--backbtn",on:{click:t.toggleAssetsMenu}},[e("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[e("path",{attrs:{fill:"currentColor",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])]),t._v(" "),e("div",{staticClass:"transactionstyle__subject--name"},[e("h3",[e("span",[t._v("Select asset to transfer to "+t._s(t.toWallet)+" wallet")])])]),t._v(" "),e("div",{staticClass:"transactionstyle__subject--closebtn",on:{click:t.closeTransferPanel}},[e("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[e("path",{attrs:{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}})])])]),t._v(" "),e("div",{staticClass:"transactionstyle__selectassetcat"},[e("div",{staticClass:"transactionstyle__selectassetcat--area",on:{click:function(e){return t.setAssetCategory("crypto")}}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"transactionstyle__selectassetcat--area",on:{click:function(e){return t.setAssetCategory("fiat")}}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"transactionstyle__selectassetcat--area",on:{click:function(e){return t.setAssetCategory("stock")}}},[t._m(4),t._v(" "),t._m(5)])]),t._v(" "),e("div",{staticClass:"transactionstyle__search"},[e("div",{staticClass:"transactionstyle__search--body"},[e("span",[e("svg",{staticClass:"sc-aXZVg ktFCMi mx-icon iconfont iconsearch",attrs:{focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 16 16","data-icon":"SearchOutlined"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.93186 10.8786C9.02879 11.5806 7.89393 11.9987 6.66146 11.9987C3.71594 11.9987 1.32812 9.6109 1.32812 6.66536C1.32812 3.71984 3.71594 1.33203 6.66146 1.33203C9.60699 1.33203 11.9948 3.71984 11.9948 6.66536C11.9948 7.89783 11.5767 9.0327 10.8747 9.93576L14.4662 13.5273C14.7265 13.7876 14.7265 14.2098 14.4662 14.4701C14.2059 14.7304 13.7837 14.7304 13.5234 14.4701L9.93186 10.8786ZM10.6615 6.66536C10.6615 8.8745 8.87059 10.6654 6.66146 10.6654C4.45232 10.6654 2.66146 8.8745 2.66146 6.66536C2.66146 4.45622 4.45232 2.66536 6.66146 2.66536C8.87059 2.66536 10.6615 4.45622 10.6615 6.66536Z"}})])]),t._v(" "),e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],attrs:{type:"text",placeholder:"Search for asset"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"transactionstyle__listitemsassets"},t._l(t.paginatedList,(function(n,r){return e("div",{staticClass:"transactionstyle__listitemsasset",on:{click:function(e){return t.setCurrentAsset(n)}}},[t._m(6,!0),t._v(" "),e("div",{staticClass:"transactionstyle__listitemsasset--labels"},[n.coin?e("label",{staticClass:"name"},[t._v(t._s(n.name))]):t._e(),t._v(" "),n.networkList[0]?e("label",{staticClass:"chain"},[t._v(t._s(n.coin))]):t._e()])])})),0)])])])}),r,!1,null,null,null);e.default=component.exports}}]);