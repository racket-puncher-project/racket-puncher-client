(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{8286:function(e,n,t){"use strict";t.d(n,{d:function(){return r}});var r=(0,t(6318).cn)({key:"pwdResetTokenState",default:{resetToken:""}})},7220:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return FindPwd}});var r=t(9499),i=t(29),s=t(7794),o=t.n(s),a=t(7294),c=t(1150),u=t(6310),p=t(7536),l=t(7533),d=t(9630),f=t(7820),m=t(7396),h=t(528),x=t(7731),b=t(2268),g=t(3281),v=t(1163),y=t(880),_=t(8031),w=t(6318),j=t(8286),N=t(5893);function ownKeys(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var O=u.Ry().shape({email:u.Z_().required("이메일은 필수입니다.").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"이메일 형식이 올바르지 않습니다."),phoneNumber:u.Z_().required("휴대폰 번호는 필수입니다."),certifyNumber:u.Z_().required("인증번호는 필수입니다.")});function FindPwd(){var e,n,t,r,s,c,u=(0,b.Z)().movePage,g=(0,_.Z)().setMessage,R=(0,v.useRouter)(),k=(0,w.Zl)(j.d),Q=(0,a.useState)(""),I=Q[0],z=Q[1],E=(0,a.useState)(!1),B=E[0],M=E[1],q=(0,a.useState)(null),T=q[0],F=q[1],K=(0,a.useState)(5),W=K[0],V=K[1],X=(0,a.useState)(!1),D=X[0],L=X[1],A=(0,p.cI)({resolver:(0,l.X)(O)}),H=A.register,$=A.handleSubmit,J=A.watch,Y=A.setValue,G=A.getValues,U=A.formState.errors,setCertTimer=function(){T&&clearInterval(T);var e=setInterval(function(){V(function(n){return 1===n?(clearInterval(e),M(!1),0):n-1})},1e3);F(Number(e))},ee=(e=(0,i.Z)(o().mark(function _callee(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.Z.phoneSendCode({phoneNumber:G("phoneNumber")});case 3:g("success",e.sent.data.response.message),M(!0),V(300),setCertTimer(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),500===e.t0.response.data.code&&g("error",e.t0.response.data.message);case 14:case"end":return e.stop()}},_callee,null,[[0,10]])})),function(){return e.apply(this,arguments)}),en=(n=(0,i.Z)(o().mark(function _callee2(){var e;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={phoneNumber:G("phoneNumber"),authCode:G("certifyNumber")},n.prev=1,n.next=4,y.Z.phoneVerifyCode(e);case 4:g("success",n.sent.data.response.message),L(!0),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),400===n.t0.response.data.code&&g("error",n.t0.response.data.message);case 13:case"end":return n.stop()}},_callee2,null,[[1,9]])})),function(){return n.apply(this,arguments)}),et=(t=(0,i.Z)(o().mark(function _callee3(){var e,n;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={email:G("email"),phoneNumber:G("phoneNumber")},t.prev=1,t.next=4,y.Z.postPwdVerify(e);case 4:console.log(n=t.sent),k(n.data.response.resetToken),u("/findPwd/result"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),400===t.t0.response.data.code&&g("error",t.t0.response.data.message);case 14:case"end":return t.stop()}},_callee3,null,[[1,10]])})),function(){return t.apply(this,arguments)});return(0,a.useEffect)(function(){R.query.email&&"string"==typeof R.query.email&&(z(R.query.email),Y("email",R.query.email))},[R.query,Y]),(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(P,{children:[(0,N.jsx)(h.B,{children:"비밀번호 찾기"}),(0,N.jsxs)(Z,{children:[(0,N.jsxs)(d.W,{children:[(0,N.jsx)("label",{htmlFor:"findPwdEmail",children:"이메일"}),(0,N.jsx)("input",_objectSpread(_objectSpread({id:"findPwdEmail"},H("email")),{},{value:I,onChange:function(e){return z(e.target.value)}})),(null===(r=U.email)||void 0===r?void 0:r.message)&&(0,N.jsx)(f.x,{children:U.email.message})]}),(0,N.jsxs)(C,{children:[(0,N.jsxs)(d.W,{children:[(0,N.jsx)("label",{htmlFor:"findPwdPhoneNum",children:"휴대폰 번호"}),(0,N.jsx)("input",_objectSpread(_objectSpread({id:"findPwdPhoneNum",type:"text",maxLength:11},H("phoneNumber")),{},{onChange:function(e){Y("phoneNumber",(0,x.X1)(e.target.value))}})),(null===(s=U.phoneNumber)||void 0===s?void 0:s.message)&&(0,N.jsx)(f.x,{children:U.phoneNumber.message})]}),(0,N.jsx)(m.LE,{height:"50px",onClick:ee,disabled:!J("phoneNumber"),children:"인증번호 전송"})]}),B&&(0,N.jsxs)(C,{children:[(0,N.jsxs)(d.W,{certify:"true",children:[(0,N.jsx)("label",{htmlFor:"findPwdCertifyNum",children:"인증 번호"}),(0,N.jsx)("input",_objectSpread(_objectSpread({id:"findIdCertifyNum",type:"text",maxLength:6},H("certifyNumber")),{},{onChange:function(e){Y("certifyNumber",(0,x.X1)(e.target.value))}})),(0,N.jsxs)("span",{className:"limit-time",children:[String(Math.floor(W/60)).padStart(2,"0"),":",String(W%60).padStart(2,"0")]}),(null===(c=U.certifyNumber)||void 0===c?void 0:c.message)&&(0,N.jsx)(f.x,{children:U.certifyNumber.message})]}),(0,N.jsx)(m.LE,{height:"50px",disabled:!J("certifyNumber"),onClick:en,children:"확인"})]})]}),(0,N.jsx)(S,{children:(0,N.jsx)(m.h$,{colorstyle:"is-green",onClick:$(function(){et()}),disabled:!J("email")||!J("phoneNumber")||!J("certifyNumber")||!D,children:"다음"})})]})})}var P=c.ZP.div.withConfig({displayName:"findPwd__FindPwdViewContainer",componentId:"sc-p51smj-0"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,x.Q1)("50px"):(0,g.hO)("50px")}),Z=c.ZP.div.withConfig({displayName:"findPwd__InputContainer",componentId:"sc-p51smj-1"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,x.Q1)("30px"):(0,g.hO)("30px")}),C=c.ZP.div.withConfig({displayName:"findPwd__InputButtonBox",componentId:"sc-p51smj-2"})(["display:flex;justify-content:space-between;align-items:flex-end;.input__InputBox-sc-7b0p27-0{flex-basis:",";}.buttons__SquareButton-sc-1doc049-1{flex-basis:",";margin-bottom:",";margin-left:",";}"],function(e){return e.theme.isResponsive?(0,x.Q1)("380px"):(0,g.hO)("380px")},function(e){return e.theme.isResponsive?(0,x.Q1)("180px"):(0,g.hO)("180px")},function(e){return e.theme.isResponsive?(0,x.Q1)("20px"):(0,g.hO)("20px")},function(e){return e.theme.isResponsive?(0,x.Q1)("20px"):(0,g.hO)("20px")}),S=c.ZP.div.withConfig({displayName:"findPwd__ButtonBox",componentId:"sc-p51smj-3"})(["margin-top:",";margin-bottom:",";"],function(e){return e.theme.isResponsive?(0,x.Q1)("30px"):(0,g.hO)("30px")},function(e){return e.theme.isResponsive?(0,x.Q1)("50px"):(0,g.hO)("50px")})},9630:function(e,n,t){"use strict";t.d(n,{W:function(){return a}});var r=t(1150),i=t(3281),s=t(8633),o=t(7731),a=r.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-7b0p27-0"})(["display:flex;flex-direction:column;margin-bottom:",";position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:",";color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";font-size:",";&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return e.theme.isResponsive?(0,o.Q1)("20px"):(0,i.hO)("20px")},function(e){return"true"===e.certify&&"relative"},function(e){return e.theme.isResponsive?(0,o.Q1)(s.Mz):(0,i.hO)(s.Mz)},function(e){return e.theme.isResponsive?(0,o.Q1)("10px"):(0,i.hO)("10px")},s.K_,function(e){return e.theme.isResponsive?(0,o.Q1)("50px"):(0,i.hO)("50px")},s.B_,s._2,function(e){return e.theme.isResponsive?"0 ".concat((0,o.Q1)("15px")):"0 ".concat((0,i.hO)("15px"))},function(e){return e.theme.isResponsive?(0,o.Q1)(s.Mz):(0,i.hO)(s.Mz)},s.K6,(0,i.hO)("25px"),function(e){return e.theme.isResponsive?(0,o.Q1)("10px"):(0,i.hO)("10px")},s._W)},7820:function(e,n,t){"use strict";t.d(n,{x:function(){return a}});var r=t(1150),i=t(3281),s=t(8633),o=t(7731),a=r.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1f9cci3-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],function(e){return e.theme.isResponsive?(0,o.Q1)(s.Mz):(0,i.hO)(s.Mz)},s._W)},528:function(e,n,t){"use strict";t.d(n,{B:function(){return a}});var r=t(1150),i=t(3281),s=t(7731),o=t(8633),a=r.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-plpx1a-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],o.w9,function(e){return e.theme.isResponsive?(0,s.Q1)("28px"):(0,i.hO)("".concat(o.hQ))},o.SK)},8031:function(e,n,t){"use strict";var r=t(6318),i=t(5890);n.Z=function(){var e=(0,r.Zl)(i.O),n=(0,r.sJ)(i.O);return{setMessage:function(t,r){e({isHandle:!n.isHandle,type:t,message:r})}}}},7231:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/findPwd",function(){return t(7220)}])}},function(e){e.O(0,[536,333,774,888,179],function(){return e(e.s=7231)}),_N_E=e.O()}]);