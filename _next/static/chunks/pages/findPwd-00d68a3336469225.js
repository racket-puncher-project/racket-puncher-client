(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[34],{8286:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var r=(0,n(6318).cn)({key:"pwdResetTokenState",default:{resetToken:""}})},7220:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return FindPwd}});var r=n(9499),i=n(29),s=n(7794),o=n.n(s),a=n(7294),c=n(1150),u=n(6310),p=n(7536),l=n(7533),d=n(9630),m=n(7820),f=n(7396),h=n(528),x=n(7731),b=n(2268),g=n(3281),v=n(1163),y=n(880),_=n(8031),w=n(6318),j=n(8286),N=n(5893);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=u.Ry().shape({email:u.Z_().required("이메일은 필수입니다.").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"이메일 형식이 올바르지 않습니다."),phoneNumber:u.Z_().required("휴대폰 번호는 필수입니다.").matches(/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,"휴대폰 번호 형식을 확인해주세요"),certifyNumber:u.Z_().required("인증번호는 필수입니다.")});function FindPwd(){var e,t,n,r,s,c,g=(0,b.Z)().movePage,R=(0,_.Z)().setMessage,k=(0,v.useRouter)(),Q=(0,w.Zl)(j.d),I=(0,a.useState)(""),E=I[0],z=I[1],B=(0,a.useState)(!1),M=B[0],q=B[1],T=(0,a.useState)(null),F=T[0],K=T[1],W=(0,a.useState)(5),V=W[0],X=W[1],D=(0,a.useState)(!1),L=D[0],A=D[1],$=(0,p.cI)({resolver:(0,l.X)(O)}),H=$.register,J=$.handleSubmit,Y=$.watch,G=$.setValue,U=$.getValues,ee=$.formState.errors,et=$.setError,en=$.clearErrors,setCertTimer=function(){F&&clearInterval(F);var e=setInterval(function(){X(function(t){return 1===t?(clearInterval(e),q(!1),0):t-1})},1e3);K(Number(e))},er=(e=(0,i.Z)(o().mark(function _callee(){var e;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=u.ct(O,"phoneNumber"),t.next=4,e.validate(U("phoneNumber"));case 4:return en("phoneNumber"),t.prev=5,t.next=8,y.Z.phoneSendCode({phoneNumber:U("phoneNumber")});case 8:R("success",t.sent.data.response.message),q(!0),X(300),setCertTimer(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),500===t.t0.response.data.code&&R("error",t.t0.response.data.message);case 18:t.next=23;break;case 20:t.prev=20,t.t1=t.catch(0),et("phoneNumber",{type:"manual",message:t.t1.message});case 23:case"end":return t.stop()}},_callee,null,[[0,20],[5,15]])})),function(){return e.apply(this,arguments)}),ei=(t=(0,i.Z)(o().mark(function _callee2(){var e;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={phoneNumber:U("phoneNumber"),authCode:U("certifyNumber")},t.prev=1,t.next=4,y.Z.phoneVerifyCode(e);case 4:R("success",t.sent.data.response.message),A(!0),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),400===t.t0.response.data.code&&R("error",t.t0.response.data.message);case 13:case"end":return t.stop()}},_callee2,null,[[1,9]])})),function(){return t.apply(this,arguments)}),es=(n=(0,i.Z)(o().mark(function _callee3(){var e,t;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={email:U("email"),phoneNumber:U("phoneNumber")},n.prev=1,n.next=4,y.Z.postPwdVerify(e);case 4:console.log(t=n.sent),Q(t.data.response.resetToken),g("/findPwd/result"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0),400===n.t0.response.data.code&&R("error",n.t0.response.data.message);case 14:case"end":return n.stop()}},_callee3,null,[[1,10]])})),function(){return n.apply(this,arguments)});return(0,a.useEffect)(function(){k.query.email&&"string"==typeof k.query.email&&(z(k.query.email),G("email",k.query.email))},[k.query,G]),(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(P,{children:[(0,N.jsx)(h.B,{children:"비밀번호 찾기"}),(0,N.jsxs)(Z,{children:[(0,N.jsxs)(d.W,{children:[(0,N.jsx)("label",{htmlFor:"findPwdEmail",children:"이메일"}),(0,N.jsx)("input",_objectSpread(_objectSpread({id:"findPwdEmail"},H("email")),{},{value:E,onChange:function(e){return z(e.target.value)}})),(null===(r=ee.email)||void 0===r?void 0:r.message)&&(0,N.jsx)(m.x,{children:ee.email.message})]}),(0,N.jsxs)(C,{children:[(0,N.jsxs)(d.W,{children:[(0,N.jsx)("label",{htmlFor:"findPwdPhoneNum",children:"휴대폰 번호"}),(0,N.jsx)("input",_objectSpread(_objectSpread({id:"findPwdPhoneNum",type:"text",maxLength:11},H("phoneNumber")),{},{onChange:function(e){G("phoneNumber",(0,x.X1)(e.target.value))}})),(null===(s=ee.phoneNumber)||void 0===s?void 0:s.message)&&(0,N.jsx)(m.x,{children:ee.phoneNumber.message})]}),(0,N.jsx)(f.LE,{height:"50px",onClick:er,disabled:!Y("phoneNumber"),children:"인증번호 전송"})]}),M&&(0,N.jsxs)(C,{children:[(0,N.jsxs)(d.W,{certify:"true",children:[(0,N.jsx)("label",{htmlFor:"findPwdCertifyNum",children:"인증 번호"}),(0,N.jsx)("input",_objectSpread(_objectSpread({id:"findIdCertifyNum",type:"text",maxLength:6},H("certifyNumber")),{},{onChange:function(e){G("certifyNumber",(0,x.X1)(e.target.value))}})),(0,N.jsxs)("span",{className:"limit-time",children:[String(Math.floor(V/60)).padStart(2,"0"),":",String(V%60).padStart(2,"0")]}),(null===(c=ee.certifyNumber)||void 0===c?void 0:c.message)&&(0,N.jsx)(m.x,{children:ee.certifyNumber.message})]}),(0,N.jsx)(f.LE,{height:"50px",disabled:!Y("certifyNumber"),onClick:ei,children:"확인"})]})]}),(0,N.jsx)(S,{children:(0,N.jsx)(f.h$,{colorstyle:"is-green",onClick:J(function(){es()}),disabled:!Y("email")||!Y("phoneNumber")||!Y("certifyNumber")||!L,children:"다음"})})]})})}var P=c.ZP.div.withConfig({displayName:"findPwd__FindPwdViewContainer",componentId:"sc-p51smj-0"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,x.Q1)("50px"):(0,g.hO)("50px")}),Z=c.ZP.div.withConfig({displayName:"findPwd__InputContainer",componentId:"sc-p51smj-1"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,x.Q1)("30px"):(0,g.hO)("30px")}),C=c.ZP.div.withConfig({displayName:"findPwd__InputButtonBox",componentId:"sc-p51smj-2"})(["display:flex;justify-content:space-between;align-items:flex-end;.input__InputBox-sc-7b0p27-0{flex-basis:",";}.buttons__SquareButton-sc-1doc049-1{flex-basis:",";margin-bottom:",";margin-left:",";}"],function(e){return e.theme.isResponsive?(0,x.Q1)("380px"):(0,g.hO)("380px")},function(e){return e.theme.isResponsive?(0,x.Q1)("180px"):(0,g.hO)("180px")},function(e){return e.theme.isResponsive?(0,x.Q1)("20px"):(0,g.hO)("20px")},function(e){return e.theme.isResponsive?(0,x.Q1)("20px"):(0,g.hO)("20px")}),S=c.ZP.div.withConfig({displayName:"findPwd__ButtonBox",componentId:"sc-p51smj-3"})(["margin-top:",";margin-bottom:",";"],function(e){return e.theme.isResponsive?(0,x.Q1)("30px"):(0,g.hO)("30px")},function(e){return e.theme.isResponsive?(0,x.Q1)("50px"):(0,g.hO)("50px")})},9630:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(1150),i=n(3281),s=n(8633),o=n(7731),a=r.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-7b0p27-0"})(["display:flex;flex-direction:column;margin-bottom:",";position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:",";color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";font-size:",";&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return e.theme.isResponsive?(0,o.Q1)("20px"):(0,i.hO)("20px")},function(e){return"true"===e.certify&&"relative"},function(e){return e.theme.isResponsive?(0,o.Q1)(s.Mz):(0,i.hO)(s.Mz)},function(e){return e.theme.isResponsive?(0,o.Q1)("10px"):(0,i.hO)("10px")},s.K_,function(e){return e.theme.isResponsive?(0,o.Q1)("50px"):(0,i.hO)("50px")},s.B_,s._2,function(e){return e.theme.isResponsive?"0 ".concat((0,o.Q1)("15px")):"0 ".concat((0,i.hO)("15px"))},function(e){return e.theme.isResponsive?(0,o.Q1)(s.Mz):(0,i.hO)(s.Mz)},s.K6,(0,i.hO)("25px"),function(e){return e.theme.isResponsive?(0,o.Q1)("10px"):(0,i.hO)("10px")},s._W)},7820:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var r=n(1150),i=n(3281),s=n(8633),o=n(7731),a=r.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1f9cci3-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],function(e){return e.theme.isResponsive?(0,o.Q1)(s.Mz):(0,i.hO)(s.Mz)},s._W)},528:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(1150),i=n(3281),s=n(7731),o=n(8633),a=r.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-plpx1a-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],o.w9,function(e){return e.theme.isResponsive?(0,s.Q1)("28px"):(0,i.hO)("".concat(o.hQ))},o.SK)},8031:function(e,t,n){"use strict";var r=n(6318),i=n(5890);t.Z=function(){var e=(0,r.Zl)(i.O),t=(0,r.sJ)(i.O);return{setMessage:function(n,r){e({isHandle:!t.isHandle,type:n,message:r})}}}},7231:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/findPwd",function(){return n(7220)}])}},function(e){e.O(0,[536,333,774,888,179],function(){return e(e.s=7231)}),_N_E=e.O()}]);