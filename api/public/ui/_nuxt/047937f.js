(window.webpackJsonp=window.webpackJsonp||[]).push([[37,30,36],{284:function(t,e,r){"use strict";var n=r(295).has;t.exports=function(t){return n(t),t}},288:function(t,e,r){"use strict";var n=r(3),o=r(88).find,c=r(137),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),n({target:"Array",proto:!0,forced:f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},289:function(t,e,r){"use strict";var n=r(5),o=r(322),c=r(295),l=c.Map,f=c.proto,v=n(f.forEach),h=n(f.entries),d=h(new l).next;t.exports=function(map,t,e){return e?o({iterator:h(map),next:d},(function(e){return t(e[1],e[0])})):v(map,t)}},295:function(t,e,r){"use strict";var n=r(5),o=Map.prototype;t.exports={Map:Map,set:n(o.set),get:n(o.get),has:n(o.has),remove:n(o.delete),proto:o}},300:function(t,e,r){"use strict";r(41),r(40),r(86),r(87);var n=r(1),o=r(140),c=r(33),l=(r(16),r(67),r(32),r(10),r(288),r(43),r(313),r(46),r(320),r(321),r(323),r(324),r(325),r(326),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(44),r(39),r(52),r(200),r(26),r(146),r(65)),f=r(301);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a={data:function(){return{searchInput:"",pageSize:20,currentPage:1,currentAssetcategory:"crypto"}},mixins:[f.a],mounted:function(){this.getwallets()},computed:h(h({},Object(l.d)({assets:function(t){return t.list.assets},originalList:function(t){return t.list.originalList},paginatedList:function(t){return t.list.paginatedList},inhouseassets:function(t){return t.inhouseassets.items},inhouseasset:function(t){return t.inhouseassets.item}})),{},{numberOfPages:function(){var t=this.pageSize,e=this.paginatedList;return Math.ceil(e.length/t)},listByPages:function(){for(var t=this.pageSize,e=this.paginatedList,r=[],i=0;i<e.length;i+=t)r.push(e.slice(i,i+t));return r}}),methods:h(h(h(h({},Object(l.b)("list",["search"])),Object(l.c)("list",["SET_PAGINATEDLIST","SET_ORIGINALLIST"])),Object(l.b)("wallet",["getwallets"])),{},{setCurrentPage:function(t){var e=this.scrollToTop;this.currentPage=t,e()},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},incrPage:function(){var t=this.currentPage,e=this.listByPages,r=this.scrollToTop;if(t>=1&&e.length&&t<e.length){var n=t+1;this.currentPage=n,r()}},reduPage:function(){var t=this.currentPage,e=this.listByPages,r=this.scrollToTop;if(t>1&&e.length){var n=t-1;this.currentPage=n,r()}},clearInput:function(){this.searchInput=""},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},setCurrentCategory:function(t){var e,r,n=this,c=this.assets,l=this.assetsOwned,f=(this.wallet,this.mergeUnique);this.currentAssetcategory=t;var v=[];l.length&&c.length?(e=(r=c.filter((function(t){return t.assetType.toLowerCase()===n.currentAssetcategory}))).filter((function(t){var e=l.find((function(e){return e.symbol===t.symbol}));if(e)return e})),v=f(r,e,"_id"),v=f([].concat(Object(o.a)(e),Object(o.a)(r)),"_id"),this.SET_PAGINATEDLIST(v),this.SET_ORIGINALLIST(v)):!l.length&&c.length&&(r=c.filter((function(t){return t.assetType.toLowerCase()===n.currentAssetcategory})),this.SET_PAGINATEDLIST(r),this.SET_ORIGINALLIST(r))},mergeUnique:function(t,e){var r=Object(o.a)(t),n=new Map;return r.filter((function(t){var r=t[e];return!n.has(r)&&(n.set(r,!0),!0)}))},assetblc:function(t){var e=this.assetsOwned;if(t&&e.length){var r=e.find((function(e){return e.symbol===t.symbol}));if(console.log(r),r)return r.blc.balance}return"0.00000000"},assetblcUSD:function(t){var e=this.assetblc;return 0!==parseFloat(e(t))&&0!==parseFloat(t.price)?parseFloat(e(t))*parseFloat(t.price):"0.00000000"},assetblcBTC:function(t){var e=this.assetblcUSD,r=this.assets.find((function(t){return"BTC"===t.coin})),n=parseFloat(r.price),o=parseFloat(e(t))/n;return 0!==o?o:"0.00000000"},retrnblcs:function(t){var e=this.wallets,r=this.assets,n=[];if(e.length&&r.length){var o=e.find((function(e){return e.walletType===t})).blcs,c=r.find((function(t){return"BTC"===t.coin})),l=parseFloat(c.price);return o.forEach((function(t){n.push({balance:t.blc.balance,price:t.asset.price,usdblc:function(){return this.balance*this.price},btcblc:function(){return this.usdblc()/l}})})),n}},totalBlcUSD:function(t){var e=this.wallets,r=this.assets,n=this.retrnblcs;if(e.length&&r.length){var o=n(t).map((function(t){return t.usdblc()})).reduce((function(t,e){return t+e}),0);return parseFloat(o)}return"0.00000000"},totalBlcBTC:function(t){var e=this.wallets,r=this.assets;this.retrnblcs;if(e.length&&r.length){var n=e.find((function(e){return e.walletType===t}));return"$".concat(n.balance)}return"0.00000000"}}),watch:{assets:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.setCurrentCategory("crypto");case 1:case"end":return t.stop()}}),t)})))()},assetsOwned:function(t,e){(0,this.setCurrentCategory)(this.currentAssetcategory)},paginatedList:function(){this.currentPage=1},searchInput:function(t,e){var r=t.trim().toLowerCase();this.search(r)}}}},301:function(t,e,r){"use strict";r(41),r(40),r(32),r(86),r(39),r(87);var n=r(33),o=(r(288),r(10),r(42),r(65));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a={computed:l(l({},Object(o.d)({client:function(t){return t.auth.client},client_token:function(t){return t.auth.client_token},wallets:function(t){return t.wallet.wallets},assets:function(t){return t.list.assets}})),{},{wallet:function(){var t=this.wallets,e=this.currentpath;if("margin"===e){var r=t.find((function(t){return t.walletType===e}));return r}if("fiat/spot"===e){var n=t.find((function(t){return t.walletType===e}));return n}return null},currentpath:function(){var t;return t=this.$route.query.wallet?this.$route.query.wallet:this.$route.name,"margin"===t?"margin":"fiat/spot"},assetsOwned:function(){var t=this.wallet;return t?t.blcs:[]}})}},307:function(t,e,r){"use strict";var n=r(3),o=r(5),c=r(89),l=r(17),f=r(13),v=r(20).f,h=r(69),d=r(202),y=r(316),_=r(115),m=r(318),w=!1,C=_("meta"),O=0,x=function(t){v(t,C,{value:{objectID:"O"+O++,weakData:{}}})},meta=t.exports={enable:function(){meta.enable=function(){},w=!0;var t=h.f,e=o([].splice),r={};r[C]=1,t(r).length&&(h.f=function(r){for(var n=t(r),i=0,o=n.length;i<o;i++)if(n[i]===C){e(n,i,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:d.f}))},fastKey:function(t,e){if(!l(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!f(t,C)){if(!y(t))return"F";if(!e)return"E";x(t)}return t[C].objectID},getWeakData:function(t,e){if(!f(t,C)){if(!y(t))return!0;if(!e)return!1;x(t)}return t[C].weakData},onFreeze:function(t){return m&&w&&y(t)&&!f(t,C)&&x(t),t}};c[C]=!0},309:function(t,e,r){"use strict";r(43);var n=r(9).default.BASE_URL;e.a={methods:{returnCryptoLogo:function(image){return"".concat(n,"/").concat(image)}}}},313:function(t,e,r){"use strict";r(314)},314:function(t,e,r){"use strict";r(315)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(319))},315:function(t,e,r){"use strict";var n=r(3),o=r(6),c=r(5),l=r(90),f=r(18),v=r(307),h=r(138),d=r(139),y=r(7),_=r(45),m=r(17),w=r(4),C=r(142),O=r(70),x=r(143);t.exports=function(t,e,r){var j=-1!==t.indexOf("Map"),T=-1!==t.indexOf("Weak"),k=j?"set":"add",P=o[t],S=P&&P.prototype,L=P,E={},M=function(t){var e=c(S[t]);f(S,t,"add"===t?function(t){return e(this,0===t?0:t),this}:"delete"===t?function(t){return!(T&&!m(t))&&e(this,0===t?0:t)}:"get"===t?function(t){return T&&!m(t)?void 0:e(this,0===t?0:t)}:"has"===t?function(t){return!(T&&!m(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(l(t,!y(P)||!(T||S.forEach&&!w((function(){(new P).entries().next()})))))L=r.getConstructor(e,t,j,k),v.enable();else if(l(t,!0)){var A=new L,I=A[k](T?{}:-0,1)!==A,D=w((function(){A.has(1)})),B=C((function(t){new P(t)})),z=!T&&w((function(){for(var t=new P,e=5;e--;)t[k](e,e);return!t.has(-0)}));B||((L=e((function(t,e){d(t,S);var r=x(new P,t,L);return _(e)||h(e,r[k],{that:r,AS_ENTRIES:j}),r}))).prototype=S,S.constructor=L),(D||z)&&(M("delete"),M("has"),j&&M("get")),(z||I)&&M(k),T&&S.clear&&delete S.clear}return E[t]=L,n({global:!0,constructor:!0,forced:L!==P},E),O(L,t),T||r.setStrong(L,t,j),L}},316:function(t,e,r){"use strict";var n=r(4),o=r(17),c=r(28),l=r(317),f=Object.isExtensible,v=n((function(){f(1)}));t.exports=v||l?function(t){return!!o(t)&&((!l||"ArrayBuffer"!==c(t))&&(!f||f(t)))}:f},317:function(t,e,r){"use strict";var n=r(4);t.exports=n((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},318:function(t,e,r){"use strict";var n=r(4);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},319:function(t,e,r){"use strict";var n=r(54),o=r(68),c=r(201),l=r(49),f=r(139),v=r(45),h=r(138),d=r(144),y=r(145),_=r(141),m=r(12),w=r(307).fastKey,C=r(35),O=C.set,x=C.getterFor;t.exports={getConstructor:function(t,e,r,d){var y=t((function(t,o){f(t,_),O(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),m||(t.size=0),v(o)||h(o,t[d],{that:t,AS_ENTRIES:r})})),_=y.prototype,C=x(e),j=function(t,e,r){var n,o,c=C(t),l=T(t,e);return l?l.value=r:(c.last=l={index:o=w(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),m?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},T=function(t,e){var r,n=C(t),o=w(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key===e)return r};return c(_,{clear:function(){for(var t=C(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,r=C(e),n=T(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first===n&&(r.first=o),r.last===n&&(r.last=c),m?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=C(this),n=l(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!T(this,t)}}),c(_,r?{get:function(t){var e=T(this,t);return e&&e.value},set:function(t,e){return j(this,0===t?0:t,e)}}:{add:function(t){return j(this,t=0===t?0:t,t)}}),m&&o(_,"size",{configurable:!0,get:function(){return C(this).size}}),y},setStrong:function(t,e,r){var n=e+" Iterator",o=x(e),c=x(n);d(t,e,(function(t,e){O(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?y("keys"===e?r.key:"values"===e?r.value:[r.key,r.value],!1):(t.target=void 0,y(void 0,!0))}),r?"entries":"values",!r,!0),_(e)}}},320:function(t,e,r){"use strict";var n=r(3),o=r(284),c=r(295).remove;n({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),r=!0,n=0,l=arguments.length;n<l;n++)t=c(e,arguments[n]),r=r&&t;return!!r}})},321:function(t,e,r){"use strict";var n=r(3),o=r(49),c=r(284),l=r(289);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!1!==l(map,(function(t,r){if(!e(t,r,map))return!1}),!0)}})},322:function(t,e,r){"use strict";var n=r(11);t.exports=function(t,e,r){for(var o,c,l=r?t:t.iterator,f=t.next;!(o=n(f,l)).done;)if(void 0!==(c=e(o.value)))return c}},323:function(t,e,r){"use strict";var n=r(3),o=r(49),c=r(284),l=r(295),f=r(289),v=l.Map,h=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new v;return f(map,(function(t,n){e(t,n,map)&&h(r,n,t)})),r}})},324:function(t,e,r){"use strict";var n=r(3),o=r(49),c=r(284),l=r(289);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=l(map,(function(t,r){if(e(t,r,map))return{value:t}}),!0);return r&&r.value}})},325:function(t,e,r){"use strict";var n=r(3),o=r(49),c=r(284),l=r(289);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=l(map,(function(t,r){if(e(t,r,map))return{key:r}}),!0);return r&&r.key}})},326:function(t,e,r){"use strict";var n=r(3),o=r(327),c=r(284),l=r(289);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return!0===l(c(this),(function(e){if(o(e,t))return!0}),!0)}})},327:function(t,e,r){"use strict";t.exports=function(t,e){return t===e||t!=t&&e!=e}},328:function(t,e,r){"use strict";var n=r(3),o=r(284),c=r(289);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){var e=c(o(this),(function(e,r){if(e===t)return{key:r}}),!0);return e&&e.key}})},329:function(t,e,r){"use strict";var n=r(3),o=r(49),c=r(284),l=r(295),f=r(289),v=l.Map,h=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new v;return f(map,(function(t,n){h(r,e(t,n,map),t)})),r}})},330:function(t,e,r){"use strict";var n=r(3),o=r(49),c=r(284),l=r(295),f=r(289),v=l.Map,h=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0),r=new v;return f(map,(function(t,n){h(r,n,e(t,n,map))})),r}})},331:function(t,e,r){"use strict";var n=r(3),o=r(284),c=r(138),l=r(295).set;n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(t){for(var map=o(this),e=arguments.length,i=0;i<e;)c(arguments[i++],(function(t,e){l(map,t,e)}),{AS_ENTRIES:!0});return map}})},332:function(t,e,r){"use strict";var n=r(3),o=r(34),c=r(284),l=r(289),f=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=c(this),e=arguments.length<2,r=e?void 0:arguments[1];if(o(t),l(map,(function(n,o){e?(e=!1,r=n):r=t(r,n,o,map)})),e)throw f("Reduce of empty map with no initial value");return r}})},333:function(t,e,r){"use strict";var n=r(3),o=r(49),c=r(284),l=r(289);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=c(this),e=o(t,arguments.length>1?arguments[1]:void 0);return!0===l(map,(function(t,r){if(e(t,r,map))return!0}),!0)}})},334:function(t,e,r){"use strict";var n=r(3),o=r(34),c=r(284),l=r(295),f=TypeError,v=l.get,h=l.has,d=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),r=arguments.length;o(e);var n=h(map,t);if(!n&&r<3)throw f("Updating absent value");var l=n?v(map,t):o(r>2?arguments[2]:void 0)(t,map);return d(map,t,e(l,t,map)),map}})},338:function(t,e,r){"use strict";r.r(e);r(42);var n=r(300),o=r(301),c=r(309),l=r(114),f={props:["setCurrentAsset","toWallet","toggleAssetsMenu"],mixins:[o.a,n.a,c.a],methods:{closeTransferPanel:function(){l.a.$emit("toggle-transfer-panel")}}},v=r(48),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"popup"},[e("div",{staticClass:"popup__body transactionstyle__body"},[e("div",{staticClass:"transactionstyle__subject"},[e("div",{staticClass:"transactionstyle__subject--backbtn",on:{click:t.toggleAssetsMenu}},[e("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[e("path",{attrs:{fill:"currentColor",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])]),t._v(" "),e("div",{staticClass:"transactionstyle__subject--name"},[e("h3",[e("span",[t._v("Select asset to transfer to "+t._s(t.toWallet)+" wallet")])])]),t._v(" "),e("div",{staticClass:"transactionstyle__subject--closebtn",on:{click:t.closeTransferPanel}},[e("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[e("path",{attrs:{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}})])])]),t._v(" "),e("div",{staticClass:"transactionstyle__selectassetcat"},[e("div",{staticClass:"transactionstyle__selectassetcat--area",on:{click:function(e){return t.setCurrentCategory("crypto")}}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"transactionstyle__selectassetcat--area",on:{click:function(e){return t.setCurrentCategory("stock")}}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"transactionstyle__selectassetcat--area",on:{click:function(e){return t.setCurrentCategory("commodity")}}},[t._m(4),t._v(" "),t._m(5)])]),t._v(" "),e("div",{staticClass:"transactionstyle__search"},[e("div",{staticClass:"transactionstyle__search--body"},[e("span",[e("svg",{staticClass:"sc-aXZVg ktFCMi mx-icon iconfont iconsearch",attrs:{focusable:"false",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 16 16","data-icon":"SearchOutlined"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.93186 10.8786C9.02879 11.5806 7.89393 11.9987 6.66146 11.9987C3.71594 11.9987 1.32812 9.6109 1.32812 6.66536C1.32812 3.71984 3.71594 1.33203 6.66146 1.33203C9.60699 1.33203 11.9948 3.71984 11.9948 6.66536C11.9948 7.89783 11.5767 9.0327 10.8747 9.93576L14.4662 13.5273C14.7265 13.7876 14.7265 14.2098 14.4662 14.4701C14.2059 14.7304 13.7837 14.7304 13.5234 14.4701L9.93186 10.8786ZM10.6615 6.66536C10.6615 8.8745 8.87059 10.6654 6.66146 10.6654C4.45232 10.6654 2.66146 8.8745 2.66146 6.66536C2.66146 4.45622 4.45232 2.66536 6.66146 2.66536C8.87059 2.66536 10.6615 4.45622 10.6615 6.66536Z"}})])]),t._v(" "),e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],attrs:{type:"text",placeholder:"Search for asset"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"transactionstyle__listitemsassets"},t._l(t.paginatedList,(function(r,n){return e("div",{staticClass:"transactionstyle__listitemsasset",on:{click:function(e){return t.setCurrentAsset(r)}}},[e("figure",{staticClass:"transactionstyle__listitemsasset--logo"},[e("img",{attrs:{src:t.returnCryptoLogo(r.image)}})]),t._v(" "),e("div",{staticClass:"transactionstyle__listitemsasset--labels"},[r.coin?e("label",{staticClass:"name"},[t._v(t._s(r.name))]):t._e()])])})),0)])])])}),[function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:"https://assets.coincap.io/assets/icons/256/btc.png"}})])},function(){var t=this._self._c;return t("span",{staticClass:"btn"},[t("button",{staticClass:"btn"},[this._v("Crypto")])])},function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:"https://assets.coincap.io/assets/icons/rune@2x.png"}})])},function(){var t=this._self._c;return t("span",{staticClass:"btn"},[t("button",{staticClass:"btn"},[this._v("Stock")])])},function(){var t=this._self._c;return t("figure",[t("img",{attrs:{src:"https://assets.coincap.io/assets/icons/rune@2x.png"}})])},function(){var t=this._self._c;return t("span",{staticClass:"btn"},[t("button",{staticClass:"btn"},[this._v("Commodity")])])}],!1,null,null,null);e.default=component.exports}}]);