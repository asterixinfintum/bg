(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{303:function(t,n,e){"use strict";e(26),e(51);n.a={props:["subject","backFunction","closeFunction"],data:function(){return{opacity:!0,numberInput:"",confirmTrade:!1}},methods:{validateNumberInput:function(){var t=this.numberInput.replace(/[^0-9]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");this.numberInput=t},toggleconfirmTrade:function(){this.confirmTrade?this.confirmTrade=!1:this.confirmTrade=!0}}}},392:function(t,n,e){"use strict";e.r(n);var c={props:["toggleOfferCard","togglewithdrawer"],mixins:[e(303).a]},r=e(48),component=Object(r.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"popup"},[n("div",{staticClass:"transactionstyle"},[n("div",{staticClass:"popup__body transactionstyle__body"},[n("div",{staticClass:"transactionstyle__subject"},[n("div",{staticClass:"transactionstyle__subject--backbtn",on:{click:t.toggleOfferCard}},[n("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[n("path",{attrs:{fill:"currentColor",d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"transactionstyle__subject--closebtn",on:{click:t.togglewithdrawer}},[n("svg",{staticClass:"chakra-icon css-onkibi",attrs:{viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true"}},[n("path",{attrs:{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}})])])]),t._v(" "),n("div",{staticClass:"transactionstyle__container"},[t._m(1),t._v(" "),n("h3",{staticClass:"transactionstyle__amounttodep"},[t._v("\n                    Amount to Withdraw\n                ")]),t._v(" "),n("div",{staticClass:"transactionstyle__inputbox"},[n("div",{staticClass:"transactionstyle__inputboxarea"},[t._m(2),t._v(" "),n("div",{staticClass:"transactionstyle__inputboxarea--section flex-direction-column flex-end-column"},[n("div",{staticClass:"transactionstyle__inputboxarea--inputsection"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.numberInput,expression:"numberInput"}],attrs:{placeholder:"Enter Amount"},domProps:{value:t.numberInput},on:{input:[function(n){n.target.composing||(t.numberInput=n.target.value)},t.validateNumberInput]}}),t._v(" "),n("span")]),t._v(" "),n("span",{staticClass:"amounttobuyinusd"},[t._v("≈ $0.00")])])]),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"transactionstyle__btn"},[n("button",{staticClass:"btn colored-btn padded-btn",class:{opacity:t.opacity}},[t._v("Withdraw")])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"transactionstyle__subject--name"},[t("h3",[this._v("Withdraw from Margins")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"transactionstyle__info"},[n("div",{staticClass:"transactionstyle__info--header"},[n("span",[t._v("Withdraw Info")])]),t._v(" "),n("div",{staticClass:"transactionstyle__info--text"},[n("p",[t._v("Enter the amount of USDC you would like to widthdraw.")])])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"transactionstyle__inputboxarea--section center-align reserveasset-label-area"},[n("figure",{staticClass:"reserveassetlogo"},[n("img",{attrs:{src:"https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"}})]),t._v(" "),n("span",{staticClass:"reserveassetlabel"},[t._v("USDT")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"transactionstyle__inputboxarea center-align"},[n("div",{staticClass:"transactionstyle__inputboxarea--section flex-direction-column"},[n("span",{staticClass:"balance"},[t._v("Balance USDT")]),t._v(" "),n("span",{staticClass:"balance-figure"},[t._v("$0")])]),t._v(" "),n("div",{staticClass:"transactionstyle__inputboxarea--section"},[n("span",{staticClass:"percentpill"},[t._v("25%")]),t._v(" "),n("span",{staticClass:"percentpill"},[t._v("50%")]),t._v(" "),n("span",{staticClass:"percentpill"},[t._v("75%")]),t._v(" "),n("span",{staticClass:"percentpill"},[t._v("Max")])])])}],!1,null,null,null);n.default=component.exports}}]);