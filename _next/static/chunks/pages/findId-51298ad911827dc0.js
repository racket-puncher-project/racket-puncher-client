(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{9527:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return FindId}});var r=n(9499),i=n(7294),o=n(1150),s=n(6310),c=n(7533),a=n(7536),u=n(528),d=n(9630),p=n(7396),l=n(7731),f=n(7820),m=n(2268),h=n(5893);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x=s.Ry().shape({phoneNumber:s.Z_().required("휴대폰 번호는 필수입니다."),certifyNumber:s.Z_().required("인증번호는 필수입니다.")});function FindId(){var e,t,n=(0,i.useState)(!1),r=n[0],o=n[1],s=(0,i.useState)(!1),j=s[0],v=s[1],N=(0,i.useState)(180),I=N[0],w=N[1],O=(0,i.useState)(null),P=O[0],C=O[1],S=(0,m.Z)().movePage,Z=(0,a.cI)({resolver:(0,c.X)(x)}),k=Z.register,B=Z.handleSubmit,E=Z.watch,R=Z.setValue,F=Z.formState.errors,setCertTimer=function(){P&&clearInterval(P);var e=setInterval(function(){w(function(t){return 1===t?(clearInterval(e),o(!1),0):t-1})},1e3);C(Number(e))};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(b,{children:[(0,h.jsx)(u.B,{children:"아이디 찾기"}),(0,h.jsxs)(g,{children:[(0,h.jsxs)(y,{children:[(0,h.jsxs)(d.W,{children:[(0,h.jsx)("label",{htmlFor:"findIdPhoneNum",children:"휴대폰 번호"}),(0,h.jsx)("input",_objectSpread(_objectSpread({id:"findIdPhoneNum",type:"text",maxLength:11},k("phoneNumber")),{},{onChange:function(e){R("phoneNumber",(0,l.X1)(e.target.value))}})),(null===(e=F.phoneNumber)||void 0===e?void 0:e.message)&&(0,h.jsx)(f.x,{children:F.phoneNumber.message})]}),(0,h.jsx)(p.LE,{height:"50px",onClick:function(){try{o(!0),w(180),setCertTimer()}catch(e){console.log(e)}},disabled:!E("phoneNumber"),children:"인증번호 전송"})]}),r&&(0,h.jsxs)(y,{children:[(0,h.jsxs)(d.W,{certify:"true",children:[(0,h.jsx)("label",{htmlFor:"findIdCertifyNum",children:"인증 번호"}),(0,h.jsx)("input",_objectSpread(_objectSpread({id:"findIdCertifyNum",type:"text",maxLength:6},k("certifyNumber")),{},{onChange:function(e){R("certifyNumber",(0,l.X1)(e.target.value))}})),(0,h.jsxs)("span",{className:"limit-time",children:[String(Math.floor(I/60)).padStart(2,"0"),":",String(I%60).padStart(2,"0")]}),(null===(t=F.certifyNumber)||void 0===t?void 0:t.message)&&(0,h.jsx)(f.x,{children:F.certifyNumber.message})]}),(0,h.jsx)(p.LE,{height:"50px",disabled:!E("certifyNumber"),onClick:function(){v(!0)},children:"확인"})]})]}),(0,h.jsx)(_,{children:(0,h.jsx)(p.h$,{colorstyle:"is-green",onClick:B(function(){o(!1),S("/findId/result")}),disabled:!j,children:"다음"})})]})})}var b=o.ZP.div.withConfig({displayName:"findId__FindIdViewContainer",componentId:"sc-18eft9u-0"})(["margin-top:50px;"]),g=o.ZP.div.withConfig({displayName:"findId__InputContainer",componentId:"sc-18eft9u-1"})(["margin-top:30px;"]),y=o.ZP.div.withConfig({displayName:"findId__InputButtonBox",componentId:"sc-18eft9u-2"})(["display:flex;justify-content:space-between;align-items:flex-end;.input__InputBox-sc-7b0p27-0{flex-basis:380px;}.buttons__SquareButton-sc-1doc049-1{flex-basis:180px;margin-bottom:20px;margin-left:20px;}"]),_=o.ZP.div.withConfig({displayName:"findId__ButtonBox",componentId:"sc-18eft9u-3"})(["margin-top:30px;margin-bottom:50px;"])},9630:function(e,t,n){"use strict";n.d(t,{W:function(){return c}});var r=n(1150),i=n(3281),o=n(8633),s=n(7731),c=r.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-7b0p27-0"})(["display:flex;flex-direction:column;margin-bottom:20px;position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:10px;color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return"true"===e.certify&&"relative"},function(e){return e.theme.isResponsive?"0.5rem":o.Mz},o.K_,function(e){return e.theme.isResponsive?(0,s.Q1)("50px"):(0,i.hO)("50px")},o.B_,o._2,function(e){return e.theme.isResponsive?"0 ".concat((0,s.Q1)("15px")):"0 ".concat((0,i.hO)("15px"))},o.K6,(0,i.hO)("25px"),function(e){return e.theme.isResponsive?(0,s.Q1)("10px"):(0,i.hO)("10px")},o._W)},7820:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(1150),i=n(3281),o=n(8633),s=r.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1f9cci3-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],(0,i.hO)(o.Mz),o._W)},528:function(e,t,n){"use strict";n.d(t,{B:function(){return c}});var r=n(1150),i=n(3281),o=n(7731),s=n(8633),c=r.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-plpx1a-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],s.w9,function(e){return e.theme.isResponsive?(0,o.Q1)("28px"):(0,i.hO)("".concat(s.hQ))},s.SK)},2653:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/findId",function(){return n(9527)}])}},function(e){e.O(0,[536,333,774,888,179],function(){return e(e.s=2653)}),_N_E=e.O()}]);