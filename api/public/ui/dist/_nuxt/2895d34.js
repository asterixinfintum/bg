(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{308:function(t,e,n){"use strict";var r=n(3),o=n(321);r({target:"String",proto:!0,forced:n(322)("sub")},{sub:function(){return o(this,"sub","","")}})},321:function(t,e,n){"use strict";var r=n(5),o=n(24),c=n(15),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var v=c(o(t)),_="<"+e;return""!==n&&(_+=" "+n+'="'+d(c(r),l,"&quot;")+'"'),_+">"+v+"</"+e+">"}},322:function(t,e,n){"use strict";var r=n(4);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},326:function(t,e,n){"use strict";n.r(e);n(308),n(50),n(66),n(42),n(40),n(32),n(86),n(87);var r=n(33),o=(n(39),n(9),n(41),n(65));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={data:function(){return{subStrategyData:{}}},props:["main","sub","options","subStrategies","toggleSubStrategies","strategies"],methods:l(l({},Object(o.b)("order",["addAutoTradeStrategy"])),{},{handleInput:function(t){var main=this.main,sub=this.sub,e=this.addAutoTradeStrategy,n=t.srcElement.name,r=t.target.value,o=l({},this.subStrategyData);o.strategy=main,o.substrategy=sub,o["".concat(n)]=r,this.subStrategyData=o,e(o)},handleSlideInput:function(t,e){var main=this.main,sub=this.sub,n=this.addAutoTradeStrategy,r=t.target.value,o=l({},this.subStrategyData);o.strategy=main,o.substrategy=sub,o["".concat(e)]=r,this.subStrategyData=o,n(o)},initSubStrategy:function(){var main=this.main,sub=this.sub,t=this.options,e={strategy:main,substrategy:sub};t.forEach((function(option){e["".concat(option)]=0})),this.subStrategyData=e},calculateSliderWidth:function(option){return parseInt(option)/100*100}}),watch:{strategies:function(t,e){var main=this.main;t.includes(main)||this.initSubStrategy()}},mounted:function(){this.initSubStrategy()}},v=n(48),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"autotradesettings__suboptions"},[e("div",{staticClass:"autotradesettings__option sub"},[e("label",{staticClass:"autotradesettings__option--label"},[t._v(t._s(t.sub))]),t._v(" "),e("div",{staticClass:"toggle-switch off",class:{on:t.subStrategies.includes(t.sub)},on:{click:function(e){return t.toggleSubStrategies(t.sub)}}},[e("span",{staticClass:"toggle-switch-button",class:{off:!t.subStrategies.includes(t.sub),on:t.subStrategies.includes(t.sub)}})])]),t._v(" "),t.subStrategies.includes(t.sub)?e("div",t._l(t.options,(function(option){return e("div",{staticClass:"autotradesettings__optioncontainer"},[e("div",{staticClass:"autotradesettings__option sub-option"},[e("label",{staticClass:"autotradesettings__option--label"},[t._v(t._s(option))]),t._v(" "),e("div",{staticClass:"autotradesettings__option--inputarea"},[e("input",{attrs:{type:"number",name:option},domProps:{value:t.subStrategyData["".concat(option)]},on:{input:t.handleInput}})])]),t._v(" "),e("div",{staticClass:"autotradesettings__slider"},[e("div",{staticClass:"autotradesettings__sliderbody"},[e("div",{staticClass:"autotradesettings__slidercontainer"},[e("div",{staticClass:"autotradesettings__slider"},[e("div",{staticClass:"autotradesettings__slidertrack",style:{width:t.calculateSliderWidth(t.subStrategyData["".concat(option)])+"%"}}),t._v(" "),e("div",{staticClass:"autotradesettings__sliderthumb",style:{left:t.calculateSliderWidth(t.subStrategyData["".concat(option)])+"%"}})]),t._v(" "),e("input",{staticClass:"autotradesettings__sliderinput",attrs:{type:"range",min:"0",max:"100"},domProps:{value:t.subStrategyData["".concat(option)]},on:{input:function(e){return t.handleSlideInput(e,option)}}})])])])])})),0):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);