(window.webpackJsonp=window.webpackJsonp||[]).push([[45,19],{284:function(e,t,r){"use strict";var o=r(3),n=r(66).find,c=r(114),d="find",l=!0;d in[]&&Array(1)[d]((function(){l=!1})),o({target:"Array",proto:!0,forced:l},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),c(d)},320:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iODAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGQ9Im0wIDBoMjR2MjRoLTI0eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMCAwaDI0djI0aC0yNHoiIGZpbGw9IiNmZmYiLz48ZyBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjIiLz48cGF0aCBkPSJtMTIgNy41Yy00LjMwNDgzIDAtNy41MjM4MyAzLjU4MzMtOC42MDUyNyA0Ljk2NTMtLjI0ODc4LjMxNzktLjI0ODc4Ljc1MTUgMCAxLjA2OTQgMS4wODE0NCAxLjM4MiA0LjMwMDQ0IDQuOTY1MyA4LjYwNTI3IDQuOTY1MyA0LjMwNDggMCA3LjUyMzgtMy41ODMzIDguNjA1My00Ljk2NTMuMjQ4OC0uMzE3OS4yNDg4LS43NTE1IDAtMS4wNjk0LTEuMDgxNS0xLjM4Mi00LjMwMDUtNC45NjUzLTguNjA1My00Ljk2NTN6IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg=="},323:function(e,t,r){"use strict";r(47),r(39),r(38),r(9),r(87),r(40),r(88);var o=r(32),n=(r(26),r(65));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a={data:function(){return{email:null,phonenumber:null,password:null,confirmpassword:null,termscheckbox:!1,passwordInputTypeToText:!1,confirmpasswordInputTypeToText:!1,termscontenterror:!1,autherror:!1}},computed:d(d({},Object(n.d)({cryptoassets:function(e){return e.cryptoassets.cryptoassets},authError:function(e){return e.auth.authError}})),{},{assets:function(){return this.cryptoassets}}),methods:d(d(d({},Object(n.b)("cryptoassets",["getcryptoassets"])),Object(n.c)("auth",["SET_AUTH_ERROR"])),{},{closeAuthError:function(){var e=this.SET_AUTH_ERROR;this.autherror=!1,e(!1)},routeToAuthPage:function(e){this.$router.push("/".concat(e))},validateEmail:function(e){return/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(e)},toggleInputType:function(input){"password"===input&&(this.passwordInputTypeToText?this.passwordInputTypeToText=!1:this.passwordInputTypeToText=!0),"confirmpassword"===input&&(this.confirmpasswordInputTypeToText?this.confirmpasswordInputTypeToText=!1:this.confirmpasswordInputTypeToText=!0)}}),mounted:function(){this.getcryptoassets()}}},403:function(e,t,r){"use strict";r.r(t);r(48),r(68),r(47),r(39),r(38),r(87),r(40),r(88);var o=r(1),n=r(32),c=(r(16),r(284),r(9),r(323)),d=r(65);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={data:function(){return{view:"emailPhoneView"}},mixins:[c.a],computed:h(h({},Object(d.d)({cryptoassets:function(e){return e.cryptoassets.cryptoassets}})),{},{bitcoinAssetId:function(){var e=this.cryptoassets;return e.length?e.find((function(e){return"BTC"===e.coin}))._id:null},authErrorText:function(){return"looks like a user with your email or phonenumber already exists"}}),methods:h(h(h({},Object(d.b)("auth",["checkDuplicate","signup"])),Object(d.b)("bitcoinapi",["newBtcwallet"])),{},{toggleView:function(){var e=this;if("emailPhoneView"===this.view){if(!this.email||!this.phonenumber||!this.termscheckbox)return this.email||this.$refs.email.classList.add("error"),this.phonenumber||this.$refs.phonenumber.classList.add("error"),this.validateEmail(this.email)||this.$refs.email.classList.add("error"),void(this.termscheckbox||(this.termscontenterror="Please make sure to check the 'Agree to Terms of Service' and 'Privacy' box before proceeding"));if(!this.validateEmail(this.email))return void this.$refs.email.classList.add("error");var t=this.email,r=this.phonenumber;(0,this.checkDuplicate)({email:t,phonenumber:r}).then((function(){e.autherror=!1,e.view="passwordView"})).catch((function(){e.autherror=!0,e.$refs.phonenumber.classList.add("error"),e.$refs.email.classList.add("error")}))}else this.view="emailPhoneView"},checkpasswords:function(){var e=this;if(!this.password||!this.confirmpassword)return this.password||this.$refs.password.classList.add("error"),void(this.confirmpassword||this.$refs.confirmpassword.classList.add("error"));if(this.password!==this.confirmpassword)return this.$refs.password.classList.add("error"),void this.$refs.confirmpassword.classList.add("error");if(!this.termscheckbox)return this.termscontenterror="Please make sure to check the 'Agree to Terms of Service' box before proceeding";var t={email:this.email,phonenumber:this.phonenumber,password:this.password};this.signup(t).then(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(data){var r,o,n,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=data.userData._id,o=e.newBtcwallet,n=e.bitcoinAssetId,t.next=4,o({ownerId:r,walletType:"margin",assetIdInTraderDB:n});case 4:return c=t.sent,t.next=7,o({ownerId:r,walletType:"fiat/spot",assetIdInTraderDB:n});case 7:d=t.sent,c.address&&d.address?e.$router.push("/overview"):console.log("error");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}),watch:{email:function(e,t){this.validateEmail(e)?this.$refs.email.classList.remove("error"):this.$refs.email.classList.add("error")},phonenumber:function(e,t){e&&this.$refs.phonenumber.classList.remove("error")},password:function(e,t){e!==this.confirmpassword?(this.$refs.password.classList.add("error"),this.$refs.confirmpassword.classList.add("error")):e===this.confirmpassword&&(this.$refs.password.classList.remove("error"),this.$refs.confirmpassword.classList.remove("error"))},confirmpassword:function(e,t){e!==this.password?(this.$refs.password.classList.add("error"),this.$refs.confirmpassword.classList.add("error")):e===this.password&&(this.$refs.password.classList.remove("error"),this.$refs.confirmpassword.classList.remove("error"))},termscheckbox:function(e,t){!0===e&&(this.termscontenterror=null)}}},w=m,f=r(46),component=Object(f.a)(w,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"header auth",attrs:{id:"header"}},[t("div",{staticClass:"header__left"},[t("div",{staticClass:"header__logo",on:{click:function(t){return e.$router.push("/")}}},[t("figure"),e._v(" "),t("p",[e._v("BERC")])])])]),e._v(" "),e.authError&&e.autherror?t("div",[t("ErrorPopup",{attrs:{error:e.authErrorText,close:e.closeAuthError}})],1):e._e(),e._v(" "),t("div",{staticClass:"auth"},[t("div",{staticClass:"content"},[t("div",{staticClass:"content__body"},[e.bitcoinAssetId?t("div",{staticClass:"container auth__container"},[t("h1",{staticClass:"auth__h1"},[e._v("Create Account")]),e._v(" "),"emailPhoneView"===e.view?t("div",[t("div",{staticClass:"auth__inputarea"},[e._m(0),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"email",domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"auth__inputarea"},[e._m(1),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.phonenumber,expression:"phonenumber"}],ref:"phonenumber",domProps:{value:e.phonenumber},on:{input:function(t){t.target.composing||(e.phonenumber=t.target.value)}}})])])]):e._e(),e._v(" "),"passwordView"===e.view?t("div",[t("div",{staticClass:"auth__inputarea"},[e._m(2),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("img",{attrs:{src:r(320)},on:{click:function(t){return e.toggleInputType("password")}}}),e._v(" "),"checkbox"==(e.passwordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var r=e.password,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&(e.password=r.concat([null])):c>-1&&(e.password=r.slice(0,c).concat(r.slice(c+1)))}else e.password=n}}}):"radio"==(e.passwordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",attrs:{type:e.passwordInputTypeToText?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"auth__inputarea"},[e._m(3),e._v(" "),t("span",{staticClass:"auth__inputarea--input"},[t("img",{attrs:{src:r(320)},on:{click:function(t){return e.toggleInputType("confirmpassword")}}}),e._v(" "),"checkbox"==(e.confirmpasswordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],ref:"confirmpassword",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.confirmpassword)?e._i(e.confirmpassword,null)>-1:e.confirmpassword},on:{change:function(t){var r=e.confirmpassword,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&(e.confirmpassword=r.concat([null])):c>-1&&(e.confirmpassword=r.slice(0,c).concat(r.slice(c+1)))}else e.confirmpassword=n}}}):"radio"==(e.confirmpasswordInputTypeToText?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],ref:"confirmpassword",attrs:{type:"radio"},domProps:{checked:e._q(e.confirmpassword,null)},on:{change:function(t){e.confirmpassword=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],ref:"confirmpassword",attrs:{type:e.confirmpasswordInputTypeToText?"text":"password"},domProps:{value:e.confirmpassword},on:{input:function(t){t.target.composing||(e.confirmpassword=t.target.value)}}})])])]):e._e(),e._v(" "),t("div",{staticClass:"auth__terms"},[t("div",{staticClass:"auth__termsarea"},[t("div",{staticClass:"auth__checkboxarea"},[t("div",{staticClass:"auth__checkboxarea--checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.termscheckbox,expression:"termscheckbox"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.termscheckbox)?e._i(e.termscheckbox,null)>-1:e.termscheckbox},on:{change:function(t){var r=e.termscheckbox,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&(e.termscheckbox=r.concat([null])):c>-1&&(e.termscheckbox=r.slice(0,c).concat(r.slice(c+1)))}else e.termscheckbox=n}}})])]),e._v(" "),e._m(4)]),e._v(" "),e.termscontenterror?t("div",{staticClass:"auth__termsdescription--error"},[t("p",[e._v(e._s(e.termscontenterror))])]):e._e()]),e._v(" "),t("div",{staticClass:"auth__inputarea"},[t("button",{staticClass:"btn colored-btn padded-btn auth__btn",class:{"greyed-btn":"passwordView"===e.view},on:{click:e.toggleView}},[e._v(e._s("emailPhoneView"===this.view?"Next":"Previous"))])]),e._v(" "),"passwordView"===e.view?t("div",{staticClass:"auth__inputarea",on:{click:e.checkpasswords}},[t("button",{staticClass:"btn colored-btn padded-btn auth__btn"},[e._v("Sign Up")])]):e._e(),e._v(" "),t("div",{staticClass:"auth__termsdescription"},[t("p",{staticClass:"auth__termsdescription--p"},[e._v("\n                            Already have an account? "),t("span",{staticClass:"highlight",on:{click:function(t){return e.routeToAuthPage("login")}}},[e._v("Login")])])])]):e._e()])])])])}),[function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Email")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Phone Number")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Password")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("label",{staticClass:"auth__inputarea--label"},[t("p",[e._v("Confirm Password")]),e._v(" "),t("p",[e._v("*")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"auth__termsdescription"},[t("p",{staticClass:"auth__termsdescription--p"},[e._v("\n                                    By creating an account, I agree to Binance's "),t("span",{staticClass:"highlight"},[e._v("Terms of\n                                        Service")]),e._v(" and "),t("span",{staticClass:"highlight"},[e._v("Privacy Policy")]),e._v(".\n                                ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{ErrorPopup:r(351).default})}}]);