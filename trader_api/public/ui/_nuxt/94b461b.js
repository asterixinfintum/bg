(window.webpackJsonp=window.webpackJsonp||[]).push([[26,19],{284:function(t,e,r){"use strict";var n=r(3),l=r(66).find,o=r(114),c="find",_=!0;c in[]&&Array(1)[c]((function(){_=!1})),n({target:"Array",proto:!0,forced:_},{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},289:function(t,e,r){"use strict";var n=r(3),l=r(5),o=r(49),c=r(202),_=r(201),d=r(4),v=RangeError,f=String,h=Math.floor,m=l(_),y=l("".slice),C=l(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},B=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},x=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},P=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!d((function(){C({})}))},{toFixed:function(t){var e,r,n,l,_=c(this),d=o(t),data=[0,0,0,0,0,0],h="",C="0";if(d<0||d>20)throw v("Incorrect fraction digits");if(_!=_)return"NaN";if(_<=-1e21||_>=1e21)return f(_);if(_<0&&(h="-",_=-_),_>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(_*w(2,69,1))-69)<0?_*w(2,-e,1):_/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(B(data,0,r),n=d;n>=7;)B(data,1e7,0),n-=7;for(B(data,w(10,n,1),0),n=e-1;n>=23;)x(data,1<<23),n-=23;x(data,1<<n),B(data,1,1),x(data,2),C=P(data)}else B(data,0,r),B(data,1<<-e,0),C=P(data)+m("0",d);return C=d>0?h+((l=C.length)<=d?"0."+m("0",d-l)+C:y(C,0,l-d)+"."+y(C,l-d)):h+C}})},294:function(t,e,r){"use strict";r(47),r(39),r(87),r(88);var n=r(32),l=(r(38),r(9),r(40),r(284),r(289),r(41),r(65));function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a={computed:c(c({},Object(l.d)({client:function(t){return t.auth.client},client_token:function(t){return t.auth.client_token},wallets:function(t){return t.wallet.wallets},cryptoassets:function(t){return t.cryptoassets.cryptoassets},inhouseassets:function(t){return t.inhouseassets.items},inhouseasset:function(t){return t.inhouseassets.item}})),{},{balance:function(){var t=this.balances,e=this.wallettype,r=this.sumBalanceInWallet;return t&&t.length&&e?r(t.filter((function(t){return t.wallet===e}))[0].assetDetails):0},balanceInBTC:function(){var t=this.balances,e=this.wallettype,r=this.sumBalanceInWalletinBTC;return t&&t.length&&e?r(t.filter((function(t){return t.wallet===e}))[0].assetDetails):0},balances:function(){var t=this,e=this.wallets,r=[];return e&&e.length?(e.forEach((function(e){var n=t.returnCryptoAssetDetails,l=t.returnAssetBalanceInBTC,o=t.returnDollarValue,c=e.assets;if(c&&c.length){var _=[];c.forEach((function(t){var e=t.balanceinWallet,r=n(t.assetdb_id).price,c={base:t,detail:n(t.assetdb_id),balanceInDollars:o(e,r),balanceInBTC:l(r,e)};return _.push(c)}));var d={wallet:e.wallettype,assetDetails:_};r.push(d)}else{var v={wallet:e.wallettype,assetDetails:[]};r.push(v)}})),r):[]},wallet:function(){var t=this.wallettype,e=this.wallets;if(e.length&&t){var r=e.filter((function(e){return e.wallettype===t}))[0];return r}return"not a wallet"},assetsOwned:function(){var t=this.balances,e=this.wallettype,r=this.cryptoassets;if(t.length&&r.length&&e){var n=t.find((function(t){return t.wallet===e})).assetDetails,l=r.filter((function(t){return n.find((function(e){return e.base.assetdb_id===t._id}))}));return l}return[]}}),methods:{returnwallet:function(t){var e=this.wallets;return e.length&&t?e.filter((function(e){return e.wallettype===t}))[0]:null},returnBalanceSum:function(t){var e=this.balances,r=this.sumBalanceInWallet,l=this.sumBalanceInWalletinBTC,o=e.find((function(e){return e.wallet===t}));if(e.length&&o){var c=o.assetDetails;return{usdBalance:r(c),btcBalance:l(c)}}return Object(n.a)({usdBalance:0},"usdBalance",0)},sumBalanceInWallet:function(t){var e=0;return t.forEach((function(t){var r=parseFloat(t.balanceInDollars);if(!isNaN(r)){var n=r.toFixed(20);e+=parseFloat(n)}})),e.toFixed(8)},sumBalanceInWalletinBTC:function(t){var e=0;return t.forEach((function(t){var r=parseFloat(t.balanceInBTC);if(!isNaN(r)){var n=r.toFixed(20);e+=parseFloat(n)}})),e.toFixed(8)},returnCryptoAssetDetails:function(t){return this.cryptoassets.filter((function(e){return e._id===t}))[0]},returnAssetBalanceOBJ:function(t){var e=this.balances,r=this.wallettype;if(e.length){var n=e.filter((function(t){return t.wallet===r}))[0].assetDetails.find((function(e){return e.detail._id===t._id}));if(!n)return null;if(void 0===n)return null;if(void 0!==n&&n)return n}},returnAssetBalanceInBTC:function(t,e){var r=this.cryptoassets.filter((function(t){return"BTC"===t.coin&&"Bitcoin"===t.name}))[0].price,n=e*parseFloat(t)/parseFloat(r);return"".concat(parseFloat(n).toFixed(20))},returnDollarValue:function(t,e){return parseFloat(t)*parseFloat(e)},convert:function(t,e){var r=this.cryptoassets;console.log(r);var n=r.forEach((function(e){return e._id===t})),l=r.forEach((function(t){return t._id===e}));console.log(n,l,"test")}}}},332:function(t,e,r){"use strict";var n=r(294);e.a={data:function(){return{asset_price:"25757.95",asset_price_sell:"",asset_price_buy:"",buy_value:"",buy_value_total:"",sliderValue:0,sliderBuyValue:0,sliderSellValue:0}},mixins:[n.a],computed:{trackWidth:function(){return this.sliderValue/100*100},buyTrackWidth:function(){return this.sliderBuyValue/100*100},sellTrackWidth:function(){return this.sliderSellValue/100*100},buyThumbPosition:function(){return this.sliderBuyValue},sellThumbPosition:function(){return this.sliderSellValue}},mounted:function(){this.asset_price=this.asset.price,this.asset_price_sell=this.asset.price,this.asset_price_buy=this.asset.price}}},412:function(t,e,r){"use strict";r.r(e);var n={props:["asset"],mixins:[r(332).a]},l=r(46),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"spottradearea__inputsections"},[e("div",{staticClass:"spottradearea__inputsection"},[e("div",{staticClass:"spottradearea__balance"},[e("span",{staticClass:"spottradearea__balance--label"},[t._v("Avbl")]),t._v(" "),e("span",{staticClass:"spottradearea__balance--value"},[t._v("0")]),t._v(" "),e("span",{staticClass:"spottradearea__balance--symbol"},[t._v("USDT")]),t._v(" "),e("span",{staticClass:"spottradearea__balance--svg",on:{click:t.fundaccount_popup_toggle}},[e("svg",{staticClass:"css-12oo3on",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"",cursor:"pointer"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-10.25 1.25V18h2.5v-4.75H18v-2.5h-4.75V6h-2.5v4.75H6v2.5h4.75z",fill:""}})])])]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--inputarea"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.asset_price,expression:"asset_price"}],staticClass:"spottradearea__inputsection--input",attrs:{placeholder:"Price",type:"number"},domProps:{value:t.asset_price},on:{input:function(e){e.target.composing||(t.asset_price=e.target.value)}}}),t._v(" "),e("span",{staticClass:"spottradearea__inputsection--placeholder"},[t._v("Price")]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--inputarea"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_value,expression:"buy_value"}],staticClass:"spottradearea__inputsection--input",attrs:{placeholder:"Amount",type:"number"},domProps:{value:t.buy_value},on:{input:function(e){e.target.composing||(t.buy_value=e.target.value)}}}),t._v(" "),e("span",{staticClass:"spottradearea__inputsection--placeholder"},[t._v("Amount")]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--labels"},[e("span",{staticClass:"spottradearea__inputsection--symbol"},[t._v(t._s(t.asset.coin))])])]),t._v(" "),e("div",{staticClass:"spottradearea__sliderarea"},[e("div",{staticClass:"spottradearea__sliderbody"},[e("div",{staticClass:"spottradearea__slidercontainer"},[e("div",{staticClass:"spottradearea__slider"},[e("div",{staticClass:"spottradearea__slidertrack buy",style:{width:t.buyTrackWidth+"%"}}),t._v(" "),e("div",{staticClass:"spottradearea__sliderthumb",style:{left:t.buyThumbPosition+"%"}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderBuyValue,expression:"sliderBuyValue"}],staticClass:"spottradearea__sliderinput",attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.sliderBuyValue},on:{__r:function(e){t.sliderBuyValue=e.target.value}}})]),t._v(" "),e("p",{staticClass:"spottradearea__slidervalue buy"},[t._v(t._s(t.sliderBuyValue)+"%")])])]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--inputarea"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_value_total,expression:"buy_value_total"}],staticClass:"spottradearea__inputsection--input",attrs:{placeholder:"Amount",type:"number"},domProps:{value:t.buy_value_total},on:{input:function(e){e.target.composing||(t.buy_value_total=e.target.value)}}}),t._v(" "),e("span",{staticClass:"spottradearea__inputsection--placeholder"},[t._v("Total")]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"spottradearea__buybtn"},[e("button",{staticClass:"btn"},[t._v("Buy "+t._s(t.asset.coin))])])]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection"},[e("div",{staticClass:"spottradearea__balance"},[e("span",{staticClass:"spottradearea__balance--label"},[t._v("Avbl")]),t._v(" "),e("span",{staticClass:"spottradearea__balance--value"},[t._v("0")]),t._v(" "),e("span",{staticClass:"spottradearea__balance--symbol"},[t._v(t._s(t.asset.coin))]),t._v(" "),e("span",{staticClass:"spottradearea__balance--svg",on:{click:t.fundaccount_popup_toggle}},[e("svg",{staticClass:"css-12oo3on",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"",cursor:"pointer"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-10.25 1.25V18h2.5v-4.75H18v-2.5h-4.75V6h-2.5v4.75H6v2.5h4.75z",fill:""}})])])]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--inputarea"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.asset_price,expression:"asset_price"}],staticClass:"spottradearea__inputsection--input",attrs:{placeholder:"Price",type:"number"},domProps:{value:t.asset_price},on:{input:function(e){e.target.composing||(t.asset_price=e.target.value)}}}),t._v(" "),e("span",{staticClass:"spottradearea__inputsection--placeholder"},[t._v("Price")]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--inputarea"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_value,expression:"buy_value"}],staticClass:"spottradearea__inputsection--input",attrs:{placeholder:"Amount",type:"number"},domProps:{value:t.buy_value},on:{input:function(e){e.target.composing||(t.buy_value=e.target.value)}}}),t._v(" "),e("span",{staticClass:"spottradearea__inputsection--placeholder"},[t._v("Amount")]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--labels"},[e("span",{staticClass:"spottradearea__inputsection--symbol"},[t._v(t._s(t.asset.coin))])])]),t._v(" "),e("div",{staticClass:"spottradearea__sliderarea"},[e("div",{staticClass:"spottradearea__sliderbody"},[e("div",{staticClass:"spottradearea__slidercontainer"},[e("div",{staticClass:"spottradearea__slider"},[e("div",{staticClass:"spottradearea__slidertrack sell",style:{width:t.sellTrackWidth+"%"}}),t._v(" "),e("div",{staticClass:"spottradearea__sliderthumb",style:{left:t.sellThumbPosition+"%"}})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderSellValue,expression:"sliderSellValue"}],staticClass:"spottradearea__sliderinput sell",attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.sliderSellValue},on:{__r:function(e){t.sliderSellValue=e.target.value}}})]),t._v(" "),e("p",{staticClass:"spottradearea__slidervalue sell"},[t._v(t._s(t.sliderSellValue)+"%")])])]),t._v(" "),e("div",{staticClass:"spottradearea__inputsection--inputarea"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.buy_value_total,expression:"buy_value_total"}],staticClass:"spottradearea__inputsection--input",attrs:{placeholder:"Amount",type:"number"},domProps:{value:t.buy_value_total},on:{input:function(e){e.target.composing||(t.buy_value_total=e.target.value)}}}),t._v(" "),e("span",{staticClass:"spottradearea__inputsection--placeholder"},[t._v("Total")]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"spottradearea__buybtn"},[e("button",{staticClass:"btn sell"},[t._v("Sell "+t._s(t.asset.coin))])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"spottradearea__inputsection--labels"},[t("span",{staticClass:"spottradearea__inputsection--symbol"},[this._v("USDT")])])},function(){var t=this._self._c;return t("div",{staticClass:"spottradearea__inputsection--labels"},[t("span",{staticClass:"spottradearea__inputsection--symbol"},[this._v("USDT")])])},function(){var t=this._self._c;return t("div",{staticClass:"spottradearea__inputsection--labels"},[t("span",{staticClass:"spottradearea__inputsection--symbol"},[this._v("USDT")])])},function(){var t=this._self._c;return t("div",{staticClass:"spottradearea__inputsection--labels"},[t("span",{staticClass:"spottradearea__inputsection--symbol"},[this._v("USDT")])])}],!1,null,null,null);e.default=component.exports}}]);