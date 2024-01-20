(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{9527:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return FindId}});var r=t(9499),s=t(29),i=t(7794),o=t.n(i),a=t(7294),c=t(1150),u=t(6310),p=t(7533),l=t(7536),d=t(528),f=t(9630),h=t(7396),m=t(7731),x=t(7820),b=t(3281),g=t(880),v=t(8031),y=t(1163),_=t(5893);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var N=u.Ry().shape({phoneNumber:u.Z_().required("휴대폰 번호는 필수입니다.").matches(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,"휴대폰 번호 형식을 확인해주세요"),certifyNumber:u.Z_().required("인증번호는 필수입니다.")});function FindId(){var e,n,t,r,i,c=(0,v.Z)().setMessage,b=(0,y.useRouter)(),C=(0,a.useState)(!1),R=C[0],P=C[1],S=(0,a.useState)(180),Z=S[0],Q=S[1],k=(0,a.useState)(null),E=k[0],z=k[1],B=(0,a.useState)(!1),M=B[0],T=B[1],F=(0,l.cI)({resolver:(0,p.X)(N)}),K=F.register,L=F.handleSubmit,W=F.watch,X=F.setValue,D=F.getValues,V=F.formState.errors,q=F.setError,H=F.clearErrors,setCertifyTimer=function(){E&&clearInterval(E);var e=setInterval(function(){Q(function(n){return 1===n?(clearInterval(e),P(!1),0):n-1})},1e3);z(Number(e))},$=(e=(0,s.Z)(o().mark(function _callee(){var e;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=u.ct(N,"phoneNumber"),n.next=4,e.validate(D("phoneNumber"));case 4:return H("phoneNumber"),n.prev=5,n.next=8,g.Z.phoneSendCode({phoneNumber:D("phoneNumber")});case 8:c("success",n.sent.data.response.message),P(!0),Q(300),setCertifyTimer(),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),500===n.t0.response.data.code&&c("error",n.t0.response.data.message);case 18:n.next=23;break;case 20:n.prev=20,n.t1=n.catch(0),q("phoneNumber",{type:"manual",message:n.t1.message});case 23:case"end":return n.stop()}},_callee,null,[[0,20],[5,15]])})),function(){return e.apply(this,arguments)}),A=(n=(0,s.Z)(o().mark(function _callee2(){var e;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={phoneNumber:D("phoneNumber"),authCode:D("certifyNumber")},n.prev=1,n.next=4,g.Z.phoneVerifyCode(e);case 4:c("success",n.sent.data.response.message),T(!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),400===n.t0.response.data.code&&c("error",n.t0.response.data.message);case 13:case"end":return n.stop()}},_callee2,null,[[1,9]])})),function(){return n.apply(this,arguments)}),G=(t=(0,s.Z)(o().mark(function _callee3(){var e;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.findId({phoneNumber:D("phoneNumber")});case 3:console.log(e=n.sent),"GENERAL"===e.data.response.authType?b.push("/findId/result?email=".concat(encodeURIComponent(e.data.response.email))):(c("error","카카오로 로그인하세요"),b.push("/login")),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),400===n.t0.response.data.code&&c("error",n.t0.response.data.message);case 12:case"end":return n.stop()}},_callee3,null,[[0,8]])})),function(){return t.apply(this,arguments)});return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(O,{children:[(0,_.jsx)(d.B,{children:"아이디 찾기"}),(0,_.jsxs)(j,{children:[(0,_.jsxs)(w,{children:[(0,_.jsxs)(f.W,{children:[(0,_.jsx)("label",{htmlFor:"findIdPhoneNum",children:"휴대폰 번호"}),(0,_.jsx)("input",_objectSpread(_objectSpread({id:"findIdPhoneNum",type:"text",maxLength:11},K("phoneNumber")),{},{onChange:function(e){X("phoneNumber",(0,m.X1)(e.target.value))}})),(null===(r=V.phoneNumber)||void 0===r?void 0:r.message)&&(0,_.jsx)(x.x,{children:V.phoneNumber.message})]}),(0,_.jsx)(h.LE,{height:"50px",onClick:$,disabled:!W("phoneNumber"),children:"인증번호 전송"})]}),R&&(0,_.jsxs)(w,{children:[(0,_.jsxs)(f.W,{certify:"true",children:[(0,_.jsx)("label",{htmlFor:"findIdCertifyNum",children:"인증 번호"}),(0,_.jsx)("input",_objectSpread(_objectSpread({id:"findIdCertifyNum",type:"text",maxLength:6},K("certifyNumber")),{},{onChange:function(e){X("certifyNumber",(0,m.X1)(e.target.value))}})),(0,_.jsxs)("span",{className:"limit-time",children:[String(Math.floor(Z/60)).padStart(2,"0"),":",String(Z%60).padStart(2,"0")]}),(null===(i=V.certifyNumber)||void 0===i?void 0:i.message)&&(0,_.jsx)(x.x,{children:V.certifyNumber.message})]}),(0,_.jsx)(h.LE,{height:"50px",disabled:!W("certifyNumber"),onClick:A,children:"확인"})]})]}),(0,_.jsx)(I,{children:(0,_.jsx)(h.h$,{colorstyle:"is-green",onClick:L(function(){P(!1),G()}),disabled:!M,children:"다음"})})]})})}var O=c.ZP.div.withConfig({displayName:"findId__FindIdViewContainer",componentId:"sc-18eft9u-0"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,m.Q1)("50px"):(0,b.hO)("50px")}),j=c.ZP.div.withConfig({displayName:"findId__InputContainer",componentId:"sc-18eft9u-1"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,m.Q1)("30px"):(0,b.hO)("30px")}),w=c.ZP.div.withConfig({displayName:"findId__InputButtonBox",componentId:"sc-18eft9u-2"})(["display:flex;justify-content:space-between;align-items:flex-end;.input__InputBox-sc-7b0p27-0{flex-basis:",";}.buttons__SquareButton-sc-1doc049-1{flex-basis:",";margin-bottom:",";margin-left:",";}"],function(e){return e.theme.isResponsive?(0,m.Q1)("380px"):(0,b.hO)("380px")},function(e){return e.theme.isResponsive?(0,m.Q1)("180px"):(0,b.hO)("180px")},function(e){return e.theme.isResponsive?(0,m.Q1)("20px"):(0,b.hO)("20px")},function(e){return e.theme.isResponsive?(0,m.Q1)("20px"):(0,b.hO)("20px")}),I=c.ZP.div.withConfig({displayName:"findId__ButtonBox",componentId:"sc-18eft9u-3"})(["margin-top:",";margin-bottom:",";"],function(e){return e.theme.isResponsive?(0,m.Q1)("30px"):(0,b.hO)("30px")},function(e){return e.theme.isResponsive?(0,m.Q1)("50px"):(0,b.hO)("50px")})},9630:function(e,n,t){"use strict";t.d(n,{W:function(){return a}});var r=t(1150),s=t(3281),i=t(8633),o=t(7731),a=r.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-7b0p27-0"})(["display:flex;flex-direction:column;margin-bottom:",";position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:",";color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";font-size:",";&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return e.theme.isResponsive?(0,o.Q1)("20px"):(0,s.hO)("20px")},function(e){return"true"===e.certify&&"relative"},function(e){return e.theme.isResponsive?(0,o.Q1)(i.Mz):(0,s.hO)(i.Mz)},function(e){return e.theme.isResponsive?(0,o.Q1)("10px"):(0,s.hO)("10px")},i.K_,function(e){return e.theme.isResponsive?(0,o.Q1)("50px"):(0,s.hO)("50px")},i.B_,i._2,function(e){return e.theme.isResponsive?"0 ".concat((0,o.Q1)("15px")):"0 ".concat((0,s.hO)("15px"))},function(e){return e.theme.isResponsive?(0,o.Q1)(i.Mz):(0,s.hO)(i.Mz)},i.K6,(0,s.hO)("25px"),function(e){return e.theme.isResponsive?(0,o.Q1)("10px"):(0,s.hO)("10px")},i._W)},7820:function(e,n,t){"use strict";t.d(n,{x:function(){return a}});var r=t(1150),s=t(3281),i=t(8633),o=t(7731),a=r.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1f9cci3-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],function(e){return e.theme.isResponsive?(0,o.Q1)(i.Mz):(0,s.hO)(i.Mz)},i._W)},528:function(e,n,t){"use strict";t.d(n,{B:function(){return a}});var r=t(1150),s=t(3281),i=t(7731),o=t(8633),a=r.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-plpx1a-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],o.w9,function(e){return e.theme.isResponsive?(0,i.Q1)("28px"):(0,s.hO)("".concat(o.hQ))},o.SK)},8031:function(e,n,t){"use strict";var r=t(6318),s=t(5890);n.Z=function(){var e=(0,r.Zl)(s.O),n=(0,r.sJ)(s.O);return{setMessage:function(t,r){e({isHandle:!n.isHandle,type:t,message:r})}}}},2653:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/findId",function(){return t(9527)}])}},function(e){e.O(0,[536,333,774,888,179],function(){return e(e.s=2653)}),_N_E=e.O()}]);