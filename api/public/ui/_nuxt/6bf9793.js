(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{300:function(t,e,r){"use strict";r(41),r(39),r(86),r(87);var n=r(1),c=r(140),o=r(33),l=(r(16),r(67),r(32),r(10),r(288),r(43),r(313),r(46),r(320),r(321),r(323),r(324),r(325),r(326),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(44),r(40),r(52),r(200),r(26),r(146),r(65)),f=r(301);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a={data:function(){return{searchInput:"",pageSize:20,currentPage:1,currentAssetcategory:"crypto"}},mixins:[f.a],mounted:function(){this.getwallets()},computed:O(O({},Object(l.d)({assets:function(t){return t.list.assets},originalList:function(t){return t.list.originalList},paginatedList:function(t){return t.list.paginatedList},inhouseassets:function(t){return t.inhouseassets.items},inhouseasset:function(t){return t.inhouseassets.item}})),{},{numberOfPages:function(){var t=this.pageSize,e=this.paginatedList;return Math.ceil(e.length/t)},listByPages:function(){for(var t=this.pageSize,e=this.paginatedList,r=[],i=0;i<e.length;i+=t)r.push(e.slice(i,i+t));return r}}),methods:O(O(O(O({},Object(l.b)("list",["search"])),Object(l.c)("list",["SET_PAGINATEDLIST","SET_ORIGINALLIST"])),Object(l.b)("wallet",["getwallets"])),{},{setCurrentPage:function(t){var e=this.scrollToTop;this.currentPage=t,e()},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},incrPage:function(){var t=this.currentPage,e=this.listByPages,r=this.scrollToTop;if(t>=1&&e.length&&t<e.length){var n=t+1;this.currentPage=n,r()}},reduPage:function(){var t=this.currentPage,e=this.listByPages,r=this.scrollToTop;if(t>1&&e.length){var n=t-1;this.currentPage=n,r()}},clearInput:function(){this.searchInput=""},limitTextLength:function(text,t){return text.length<=t?text:text.substring(0,t)+"..."},setCurrentCategory:function(t){var e,r,n=this,o=this.assets,l=this.assetsOwned,f=(this.wallet,this.mergeUnique);this.currentAssetcategory=t;var h=[];l.length&&o.length?(e=(r=o.filter((function(t){return t.assetType.toLowerCase()===n.currentAssetcategory}))).filter((function(t){var e=l.find((function(e){return e.symbol===t.symbol}));if(e)return e})),h=f(r,e,"_id"),h=f([].concat(Object(c.a)(e),Object(c.a)(r)),"_id"),this.SET_PAGINATEDLIST(h),this.SET_ORIGINALLIST(h)):!l.length&&o.length&&(r=o.filter((function(t){return t.assetType.toLowerCase()===n.currentAssetcategory})),this.SET_PAGINATEDLIST(r),this.SET_ORIGINALLIST(r))},mergeUnique:function(t,e){var r=Object(c.a)(t),n=new Map;return r.filter((function(t){var r=t[e];return!n.has(r)&&(n.set(r,!0),!0)}))},assetblc:function(t){var e=this.assetsOwned;if(t&&e.length){var r=e.find((function(e){return e.symbol===t.symbol}));if(console.log(r),r)return r.blc.balance}return"0.00000000"},assetblcUSD:function(t){var e=this.assetblc;return 0!==parseFloat(e(t))&&0!==parseFloat(t.price)?parseFloat(e(t))*parseFloat(t.price):"0.00000000"},assetblcBTC:function(t){var e=this.assetblcUSD,r=this.assets.find((function(t){return"BTC"===t.coin})),n=parseFloat(r.price),c=parseFloat(e(t))/n;return 0!==c?c:"0.00000000"},retrnblcs:function(t){var e=this.wallets,r=this.assets,n=[];if(e.length&&r.length){var c=e.find((function(e){return e.walletType===t})).blcs,o=r.find((function(t){return"BTC"===t.coin})),l=parseFloat(o.price);return c.forEach((function(t){n.push({balance:t.blc.balance,price:t.asset.price,usdblc:function(){return this.balance*this.price},btcblc:function(){return this.usdblc()/l}})})),n}},totalBlcUSD:function(t){var e=this.wallets,r=this.assets,n=this.retrnblcs;if(e.length&&r.length){var c=n(t).map((function(t){return t.usdblc()})).reduce((function(t,e){return t+e}),0);return parseFloat(c)}return"0.00000000"},totalBlcBTC:function(t){var e=this.wallets,r=this.assets,n=this.retrnblcs;if(e.length&&r.length){var c=n(t).map((function(t){return t.btcblc()})).reduce((function(t,e){return t+e}),0);return parseFloat(c)}return"0.00000000"}}),watch:{assets:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.setCurrentCategory("crypto");case 1:case"end":return t.stop()}}),t)})))()},assetsOwned:function(t,e){(0,this.setCurrentCategory)(this.currentAssetcategory)},paginatedList:function(){this.currentPage=1},searchInput:function(t,e){var r=t.trim().toLowerCase();this.search(r)}}}},301:function(t,e,r){"use strict";r(41),r(39),r(32),r(86),r(40),r(87);var n=r(33),c=(r(288),r(10),r(42),r(65));function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a={computed:l(l({},Object(c.d)({client:function(t){return t.auth.client},client_token:function(t){return t.auth.client_token},wallets:function(t){return t.wallet.wallets},assets:function(t){return t.list.assets}})),{},{wallet:function(){var t=this.wallets,e=this.currentpath;if("margin"===e){var r=t.find((function(t){return t.walletType===e}));return r}if("fiat/spot"===e){var n=t.find((function(t){return t.walletType===e}));return n}return null},currentpath:function(){var t;return t=this.$route.query.wallet?this.$route.query.wallet:this.$route.name,"margin"===t?"margin":"fiat/spot"},assetsOwned:function(){var t=this.wallet;return t?t.blcs:[]}})}}}]);