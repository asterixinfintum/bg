(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{308:function(t,e,r){"use strict";var n=r(3),o=r(317);n({target:"String",proto:!0,forced:r(318)("sub")},{sub:function(){return o(this,"sub","","")}})},317:function(t,e,r){"use strict";var n=r(5),o=r(24),c=r(15),l=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var _=c(o(t)),f="<"+e;return""!==r&&(f+=" "+r+'="'+d(c(n),l,"&quot;")+'"'),f+">"+_+"</"+e+">"}},318:function(t,e,r){"use strict";var n=r(4);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},322:function(t,e,r){"use strict";r.r(e);r(308),r(50),r(67),r(47),r(39),r(38),r(87),r(88);var n=r(32),o=(r(41),r(9),r(40),r(65));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={data:function(){return{subStrategyData:{}}},props:["main","sub","options","subStrategies","toggleSubStrategies"],computed:l({},Object(o.d)({autotradestrategies:function(t){return t.order.autotradestrategies}})),methods:l(l({},Object(o.b)("order",["addAutoTradeStrategy"])),{},{handleInput:function(t){var main=this.main,sub=this.sub,e=(this.addAutoTradeStrategy,t.srcElement.name),r=t.target.value,n=this.subStrategyData;n.strategy=main,n.substrategy=sub,n["".concat(e)]=r,this.subStrategyData=n},handleSlideInput:function(t,e){var main=this.main,sub=this.sub,r=(this.addAutoTradeStrategy,t.target.value),n=this.subStrategyData;n.strategy=main,n.substrategy=sub,n["".concat(e)]=r,this.subStrategyData=n},initSubStrategy:function(){var main=this.main,sub=this.sub,t=this.options,e={strategy:main,substrategy:sub};t.forEach((function(option){e["".concat(option)]=0})),this.subStrategyData=e},calculateSliderWidth:function(option){return parseInt(option)/100*100}}),watch:{},mounted:function(){this.initSubStrategy()}},_=r(46),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"autotradesettings__suboptions"},[e("div",{staticClass:"autotradesettings__option sub"},[e("label",{staticClass:"autotradesettings__option--label"},[t._v(t._s(t.sub))]),t._v(" "),e("div",{staticClass:"toggle-switch off",class:{on:t.subStrategies.includes(t.sub)},on:{click:function(e){return t.toggleSubStrategies(t.sub)}}},[e("span",{staticClass:"toggle-switch-button",class:{off:!t.subStrategies.includes(t.sub),on:t.subStrategies.includes(t.sub)}})])]),t._v(" "),t.subStrategies.includes(t.sub)?e("div",t._l(t.options,(function(option){return e("div",{staticClass:"autotradesettings__optioncontainer"},[e("div",{staticClass:"autotradesettings__option sub-option"},[e("label",{staticClass:"autotradesettings__option--label"},[t._v(t._s(option))]),t._v(" "),e("div",{staticClass:"autotradesettings__option--inputarea"},[e("input",{attrs:{type:"number",name:option},domProps:{value:t.subStrategyData["".concat(option)]},on:{input:t.handleInput}})])]),t._v(" "),e("div",{staticClass:"autotradesettings__slider"},[e("div",{staticClass:"autotradesettings__sliderbody"},[e("div",{staticClass:"autotradesettings__slidercontainer"},[e("div",{staticClass:"autotradesettings__slider"},[e("div",{staticClass:"autotradesettings__slidertrack",style:{width:t.calculateSliderWidth(t.subStrategyData["".concat(option)])+"%"}}),t._v(" "),e("div",{staticClass:"autotradesettings__sliderthumb",style:{left:t.calculateSliderWidth(t.subStrategyData["".concat(option)])+"%"}})]),t._v(" "),e("input",{staticClass:"autotradesettings__sliderinput",attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.subStrategyData["".concat(option)]},on:{input:function(e){return t.handleSlideInput(e,option)}}})])])])])})),0):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);