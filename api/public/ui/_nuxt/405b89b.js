(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{337:function(t,e,n){"use strict";n.r(e);n(41),n(39),n(32),n(10),n(86),n(40),n(87);var r=n(33),o=n(65);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={data:function(){return{loading:!1}},props:["contentObj","toggleconfirmTrade"],methods:l(l(l({},Object(o.b)("convert",["executeConversion"])),Object(o.b)("transfer",["executeTransfer"])),{},{triggerTransfer:function(){var t=this,e=this.executeTransfer,n=this.transfer;this.loading=!0,e(n).then((function(data){t.loading=!1,t.$router.go()})).catch((function(e){t.loading=!1,console.log(e)}))},triggerConversion:function(){var t=this,e=this.executeConversion,n=this.conversion;this.loading=!0,e(n).then((function(data){t.loading=!1,t.$router.go()})).catch((function(e){t.loading=!1,console.log(e)}))}}),computed:{conversion:function(){var t=this.contentObj,e=(t.ownerId,t.currentAssetFrom),n=t.toInput,r=t.fromInput,o=t.wallet,c=(t.assetCategoryTo,t.transactionType,t.transactionFee,t.currentAssetTo),l=(t.walletCategory,t.transactionTotal),_={toquant:parseFloat(n),fromquant:parseFloat(r),assetfrom:e,assetto:c,wallet:o,total:l};return _},transfer:function(){var t=this.contentObj,e={ownerId:t.ownerId,assetId:t.assetId,balanceAmount:t.balanceAmount,transactionType:t.transactionType,transactionDescription:t.transactionDescription,currentWallet:t.currentWallet,formerWallet:t.formerWallet,assetType:t.assetType};return e}}},v=n(48),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup"},[e("div",{staticClass:"popup__body transactionstyle__body"},[e("div",{staticClass:"transactionstyle__subject"},[t._m(0),t._v(" "),e("div",{staticClass:"transactionstyle__subject--closebtn",on:{click:t.toggleconfirmTrade}},[e("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[e("path",{attrs:{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}})])])]),t._v(" "),t.contentObj&&"conversion"===t.contentObj.transactionType?e("div",{staticClass:"transactionstyle__container"},[e("div",{staticClass:"previewtrade__content"},[e("div",{staticClass:"previewtrade__contentarea"},[e("div",{staticClass:"previewtrade__contentitem"},[e("div",{staticClass:"previewtrade__contentitemleft"},[t._v("Convert From")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright"},[e("div",{staticClass:"previewtrade__contentitemright--top"},[t._v("\n                                "+t._s(t.contentObj.fromInput)+" "+t._s(t.contentObj.fromCoin)+"\n                            ")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright--bottom"},[t._v("\n                                ≈ $"+t._s(t.contentObj.youPayUSD)+"\n                            ")])])]),t._v(" "),e("div",{staticClass:"previewtrade__contentitem"},[e("div",{staticClass:"previewtrade__contentitemleft"},[t._v("Convert To")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright"},[e("div",{staticClass:"previewtrade__contentitemright--top"},[t._v("\n                                "+t._s(t.contentObj.toInput)+" "+t._s(t.contentObj.toCoin)+"\n                            ")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright--bottom"},[t._v("\n                                ≈ $"+t._s(t.contentObj.youGetUSD)+"\n                            ")])])]),t._v(" "),e("div",{staticClass:"previewtrade__contentitem"},[e("div",{staticClass:"previewtrade__contentitemleft"},[t._v("Fee")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright"},[e("div",{staticClass:"previewtrade__contentitemright--top"},[t._v("\n                                $"+t._s(t.contentObj.transactionFee)+"\n                            ")])])]),t._v(" "),e("div",{staticClass:"previewtrade__contentitem"},[e("div",{staticClass:"previewtrade__contentitemleft"},[t._v("Total")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright"},[e("div",{staticClass:"previewtrade__contentitemright--top"},[t._v("\n                                $"+t._s(t.contentObj.transactionTotal)+"\n                            ")])])]),t._v(" "),e("div",{staticClass:"previewtrade__contentitem"},[e("div",{staticClass:"previewtrade__contentitemleft"},[t._v("Wallet")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright"},[e("div",{staticClass:"previewtrade__contentitemright--top"}),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright--bottom wallet-type"},[t._v(t._s(t.contentObj.walletCategory))])])])])]),t._v(" "),e("div",{staticClass:"transactionstyle__btn"},[t.loading?t._e():e("button",{staticClass:"btn colored-btn padded-btn",on:{click:t.triggerConversion}},[t._v("Confirm and\n                    Trade")]),t._v(" "),t.loading?e("button",{staticClass:"btn colored-btn padded-btn dim"},[e("span",{staticClass:"loader-button"})]):t._e()])]):t._e(),t._v(" "),t.contentObj&&"transfer"===t.contentObj.transactionType.type?e("div",{staticClass:"transactionstyle__container"},[e("div",{staticClass:"previewtrade__content"},[e("div",{staticClass:"previewtrade__contentarea"},[e("div",{staticClass:"previewtrade__contentitem"},[e("div",{staticClass:"previewtrade__contentitemleft"},[t._v("Transfer "+t._s(t.contentObj.assetName)+" From "+t._s(t.contentObj.formerWallet)+" to "+t._s(t.contentObj.currentWallet))]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright"},[e("div",{staticClass:"previewtrade__contentitemright--top"},[t._v("\n                                "+t._s(t.contentObj.balanceAmount)+" "+t._s(t.contentObj.assetName)+"\n                            ")]),t._v(" "),e("div",{staticClass:"previewtrade__contentitemright--bottom"},[t._v("\n                                ≈ $"+t._s(t.contentObj.youPayUSD)+"\n                            ")])])])])]),t._v(" "),e("div",{staticClass:"transactionstyle__btn"},[t.loading?t._e():e("button",{staticClass:"btn colored-btn padded-btn",on:{click:t.triggerTransfer}},[t._v("Confirm and\n                    Trade")]),t._v(" "),t.loading?e("button",{staticClass:"btn colored-btn padded-btn dim"},[e("span",{staticClass:"loader-button"})]):t._e()])]):t._e()])])}),[function(){var t=this._self._c;return t("div",{staticClass:"transactionstyle__subject--name"},[t("h3",[this._v("Confirm Transaction Details")])])}],!1,null,null,null);e.default=component.exports}}]);