(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{1466:function(e,n,t){"use strict";var o=t(5121).Z.create({baseURL:"http://43.203.25.186:8081",timeout:1e4,headers:{"Content-Type":"application/json"},withCredentials:!0}),getCookie=function(e){var n=document.cookie.match(RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\()\[\]\\`\/\+^])/g,"\\$1")+"=([^;]*)"));return n?decodeURIComponent(n[1]):void 0};o.interceptors.request.use(function(e){return void 0!==getCookie("accessToken")&&(e.headers.Authorization="Bearer "+getCookie("accessToken")),e}),o.interceptors.response.use(function(e){return e}),n.Z=o},5336:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return KakaoLoginPage}});var o=t(29),r=t(7794),a=t.n(r),i=t(7294),u=t(880),c=t(3233),s=t(1163),p=t(5893);function KakaoLoginPage(){var e,n=(0,c.Z)().setCookie,t=(0,s.useRouter)(),r=(e=(0,o.Z)(a().mark(function _callee(e){var o;return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.kakaoLogin({code:e});case 3:console.log(o=r.sent),o.data.response.registerd?(n("accessToken",o.data.response.accessToken,{expires:7}),t.replace("/main")):t.replace("/snsRegister"),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}},_callee,null,[[0,8]])})),function(n){return e.apply(this,arguments)});return(0,i.useEffect)(function(){var e=new URLSearchParams(location.search).get("code");console.log("queryCode",e),null!==e&&r(e)},[]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{children:"여긴 카카오로그인시 리다이렉트로 올 수 있는곳입니다."})})}},880:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var o=t(1466),r=t(5121).Z.create({baseURL:"http://43.203.25.186:8081",timeout:1e4,headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}),getCookie=function(e){var n=document.cookie.match(RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\()\[\]\\`\/\+^])/g,"\\$1")+"=([^;]*)"));return n?decodeURIComponent(n[1]):void 0};r.interceptors.request.use(function(e){return void 0!==getCookie("accessToken")&&(e.headers.Authorization="Bearer "+getCookie("accessToken")),e}),r.interceptors.response.use(function(e){return e});var a={signup:function(e){return o.Z.post("/api/auth/sign-up",e)},login:function(e){return o.Z.post("/api/auth/sign-in",e)},uploadImgSignup:function(e){return console.log(e),r.post("/api/aws/upload-image",e)},kakaoSignup:function(e){return o.Z.post("/api/auth/kakao/sign-up",e)},kakaoLogin:function(e){return o.Z.post("/api/auth/kakao",e)},logout:function(e){return o.Z.post("/api/auth/sign-out",e)},checkNickname:function(e){return o.Z.post("/api/auth/check-nickname",e)},checkEmail:function(e){return o.Z.post("/api/auth/check-email",e)},phoneSendCode:function(e){return o.Z.post("/api/auth/phone/send-code",e)},phoneVerifyCode:function(e){return o.Z.post("/api/auth/phone/verify-code",e)},findId:function(e){return o.Z.post("/api/auth/id-find",e)},findPwd:function(e){return console.log("test"),o.Z.post("/api/auth/password-reset",e)}}},6098:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kakaoLogin",function(){return t(5336)}])},29:function(e,n,t){"use strict";function asyncGeneratorStep(e,n,t,o,r,a,i){try{var u=e[a](i),c=u.value}catch(e){t(e);return}u.done?n(c):Promise.resolve(c).then(o,r)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise(function(o,r){var a=e.apply(n,t);function _next(e){asyncGeneratorStep(a,o,r,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,o,r,_next,_throw,"throw",e)}_next(void 0)})}}t.d(n,{Z:function(){return _asyncToGenerator}})}},function(e){e.O(0,[121,774,888,179],function(){return e(e.s=6098)}),_N_E=e.O()}]);