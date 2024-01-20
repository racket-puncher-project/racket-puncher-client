(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{9527:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return FindId}});var r=t(9499),i=t(29),o=t(7794),s=t.n(o),c=t(7294),a=t(1150),u=t(6310),p=t(7533),l=t(7536),d=t(528),f=t(9630),h=t(7396),m=t(7731),x=t(7820),b=t(3281),g=t(880),v=t(8031),y=t(1163),_=t(5893);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var O=u.Ry().shape({phoneNumber:u.Z_().required("휴대폰 번호는 필수입니다.").matches(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,"휴대폰 번호 형식을 확인해주세요"),certifyNumber:u.Z_().required("인증번호는 필수입니다.")});function FindId(){var e,n,t,r,o,a=(0,v.Z)().setMessage,u=(0,y.useRouter)(),b=(0,c.useState)(!1),C=b[0],R=b[1],P=(0,c.useState)(180),S=P[0],Z=P[1],Q=(0,c.useState)(null),k=Q[0],E=Q[1],z=(0,c.useState)(!1),B=z[0],M=z[1],T=(0,l.cI)({resolver:(0,p.X)(O)}),F=T.register,K=T.handleSubmit,L=T.watch,W=T.setValue,X=T.getValues,D=T.formState.errors,setCertifyTimer=function(){k&&clearInterval(k);var e=setInterval(function(){Z(function(n){return 1===n?(clearInterval(e),R(!1),0):n-1})},1e3);E(Number(e))},V=(e=(0,i.Z)(s().mark(function _callee(){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.phoneSendCode({phoneNumber:X("phoneNumber")});case 3:a("success",e.sent.data.response.message),R(!0),Z(300),setCertifyTimer(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),500===e.t0.response.data.code&&a("error",e.t0.response.data.message);case 14:case"end":return e.stop()}},_callee,null,[[0,10]])})),function(){return e.apply(this,arguments)}),q=(n=(0,i.Z)(s().mark(function _callee2(){var e;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={phoneNumber:X("phoneNumber"),authCode:X("certifyNumber")},n.prev=1,n.next=4,g.Z.phoneVerifyCode(e);case 4:a("success",n.sent.data.response.message),M(!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),400===n.t0.response.data.code&&a("error",n.t0.response.data.message);case 13:case"end":return n.stop()}},_callee2,null,[[1,9]])})),function(){return n.apply(this,arguments)}),H=(t=(0,i.Z)(s().mark(function _callee3(){var e;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.findId({phoneNumber:X("phoneNumber")});case 3:console.log(e=n.sent),"GENERAL"===e.data.response.authType?u.push("/findId/result?email=".concat(encodeURIComponent(e.data.response.email))):(a("error","카카오로 로그인하세요"),u.push("/login")),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),400===n.t0.response.data.code&&a("error",n.t0.response.data.message);case 12:case"end":return n.stop()}},_callee3,null,[[0,8]])})),function(){return t.apply(this,arguments)});return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(N,{children:[(0,_.jsx)(d.B,{children:"아이디 찾기"}),(0,_.jsxs)(j,{children:[(0,_.jsxs)(w,{children:[(0,_.jsxs)(f.W,{children:[(0,_.jsx)("label",{htmlFor:"findIdPhoneNum",children:"휴대폰 번호"}),(0,_.jsx)("input",_objectSpread(_objectSpread({id:"findIdPhoneNum",type:"text",maxLength:11},F("phoneNumber")),{},{onChange:function(e){W("phoneNumber",(0,m.X1)(e.target.value))}})),(null===(r=D.phoneNumber)||void 0===r?void 0:r.message)&&(0,_.jsx)(x.x,{children:D.phoneNumber.message})]}),(0,_.jsx)(h.LE,{height:"50px",onClick:V,disabled:!L("phoneNumber"),children:"인증번호 전송"})]}),C&&(0,_.jsxs)(w,{children:[(0,_.jsxs)(f.W,{certify:"true",children:[(0,_.jsx)("label",{htmlFor:"findIdCertifyNum",children:"인증 번호"}),(0,_.jsx)("input",_objectSpread(_objectSpread({id:"findIdCertifyNum",type:"text",maxLength:6},F("certifyNumber")),{},{onChange:function(e){W("certifyNumber",(0,m.X1)(e.target.value))}})),(0,_.jsxs)("span",{className:"limit-time",children:[String(Math.floor(S/60)).padStart(2,"0"),":",String(S%60).padStart(2,"0")]}),(null===(o=D.certifyNumber)||void 0===o?void 0:o.message)&&(0,_.jsx)(x.x,{children:D.certifyNumber.message})]}),(0,_.jsx)(h.LE,{height:"50px",disabled:!L("certifyNumber"),onClick:q,children:"확인"})]})]}),(0,_.jsx)(I,{children:(0,_.jsx)(h.h$,{colorstyle:"is-green",onClick:K(function(){R(!1),H()}),disabled:!B,children:"다음"})})]})})}var N=a.ZP.div.withConfig({displayName:"findId__FindIdViewContainer",componentId:"sc-18eft9u-0"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,m.Q1)("50px"):(0,b.hO)("50px")}),j=a.ZP.div.withConfig({displayName:"findId__InputContainer",componentId:"sc-18eft9u-1"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,m.Q1)("30px"):(0,b.hO)("30px")}),w=a.ZP.div.withConfig({displayName:"findId__InputButtonBox",componentId:"sc-18eft9u-2"})(["display:flex;justify-content:space-between;align-items:flex-end;.input__InputBox-sc-7b0p27-0{flex-basis:",";}.buttons__SquareButton-sc-1doc049-1{flex-basis:",";margin-bottom:",";margin-left:",";}"],function(e){return e.theme.isResponsive?(0,m.Q1)("380px"):(0,b.hO)("380px")},function(e){return e.theme.isResponsive?(0,m.Q1)("180px"):(0,b.hO)("180px")},function(e){return e.theme.isResponsive?(0,m.Q1)("20px"):(0,b.hO)("20px")},function(e){return e.theme.isResponsive?(0,m.Q1)("20px"):(0,b.hO)("20px")}),I=a.ZP.div.withConfig({displayName:"findId__ButtonBox",componentId:"sc-18eft9u-3"})(["margin-top:",";margin-bottom:",";"],function(e){return e.theme.isResponsive?(0,m.Q1)("30px"):(0,b.hO)("30px")},function(e){return e.theme.isResponsive?(0,m.Q1)("50px"):(0,b.hO)("50px")})},9630:function(e,n,t){"use strict";t.d(n,{W:function(){return c}});var r=t(1150),i=t(3281),o=t(8633),s=t(7731),c=r.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-7b0p27-0"})(["display:flex;flex-direction:column;margin-bottom:",";position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:",";color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";font-size:",";&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return e.theme.isResponsive?(0,s.Q1)("20px"):(0,i.hO)("20px")},function(e){return"true"===e.certify&&"relative"},function(e){return e.theme.isResponsive?(0,s.Q1)(o.Mz):(0,i.hO)(o.Mz)},function(e){return e.theme.isResponsive?(0,s.Q1)("10px"):(0,i.hO)("10px")},o.K_,function(e){return e.theme.isResponsive?(0,s.Q1)("50px"):(0,i.hO)("50px")},o.B_,o._2,function(e){return e.theme.isResponsive?"0 ".concat((0,s.Q1)("15px")):"0 ".concat((0,i.hO)("15px"))},function(e){return e.theme.isResponsive?(0,s.Q1)(o.Mz):(0,i.hO)(o.Mz)},o.K6,(0,i.hO)("25px"),function(e){return e.theme.isResponsive?(0,s.Q1)("10px"):(0,i.hO)("10px")},o._W)},7820:function(e,n,t){"use strict";t.d(n,{x:function(){return c}});var r=t(1150),i=t(3281),o=t(8633),s=t(7731),c=r.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1f9cci3-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],function(e){return e.theme.isResponsive?(0,s.Q1)(o.Mz):(0,i.hO)(o.Mz)},o._W)},528:function(e,n,t){"use strict";t.d(n,{B:function(){return c}});var r=t(1150),i=t(3281),o=t(7731),s=t(8633),c=r.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-plpx1a-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],s.w9,function(e){return e.theme.isResponsive?(0,o.Q1)("28px"):(0,i.hO)("".concat(s.hQ))},s.SK)},8031:function(e,n,t){"use strict";var r=t(6318),i=t(5890);n.Z=function(){var e=(0,r.Zl)(i.O),n=(0,r.sJ)(i.O);return{setMessage:function(t,r){e({isHandle:!n.isHandle,type:t,message:r})}}}},2653:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/findId",function(){return t(9527)}])}},function(e){e.O(0,[536,333,774,888,179],function(){return e(e.s=2653)}),_N_E=e.O()}]);