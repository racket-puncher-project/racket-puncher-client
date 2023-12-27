(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{8745:function(t,o,i){"use strict";i.d(o,{Z:function(){return genPurePanel},i:function(){return withPureRenderTheme}});var r=i(1770),s=i(7294),l=i(5028),p=i(3124);function withPureRenderTheme(t){return function(o){return s.createElement(l.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},s.createElement(t,Object.assign({},o)))}}function genPurePanel(t,o,i,l){return withPureRenderTheme(function(d){let{prefixCls:f,style:h}=d,g=s.useRef(null),[m,v]=s.useState(0),[x,b]=s.useState(0),[y,w]=(0,r.Z)(!1,{value:d.open}),{getPrefixCls:k}=s.useContext(p.E_),j=k(o||"select",f);s.useEffect(()=>{if(w(!0),"undefined"!=typeof ResizeObserver){let t=new ResizeObserver(t=>{let o=t[0].target;v(o.offsetHeight+8),b(o.offsetWidth)}),o=setInterval(()=>{var r;let s=i?`.${i(j)}`:`.${j}-dropdown`,l=null===(r=g.current)||void 0===r?void 0:r.querySelector(s);l&&(clearInterval(o),t.observe(l))},10);return()=>{clearInterval(o),t.disconnect()}}},[]);let _=Object.assign(Object.assign({},d),{style:Object.assign(Object.assign({},h),{margin:0}),open:y,visible:y,getPopupContainer:()=>g.current});return l&&(_=l(_)),s.createElement("div",{ref:g,style:{paddingBottom:m,position:"relative",minWidth:x}},s.createElement(t,Object.assign({},_)))})}},8675:function(t,o,i){"use strict";var r=i(7294),s=i(7647);o.Z=t=>{let o=r.useContext(s.Z),i=r.useMemo(()=>t?"string"==typeof t?null!=t?t:o:t instanceof Function?t(o):o:o,[t,o]);return i}},1461:function(t,o,i){"use strict";var r=i(7294),s=i(6745),l=i(1570);o.Z=(t,o)=>{let i=r.useContext(s.Z),p=r.useMemo(()=>{var r;let s=o||l.Z[t],p=null!==(r=null==i?void 0:i[t])&&void 0!==r?r:{};return Object.assign(Object.assign({},"function"==typeof s?s():s),p||{})},[t,o,i]),d=r.useMemo(()=>{let t=null==i?void 0:i.locale;return(null==i?void 0:i.exist)&&!t?l.Z.locale:t},[i]);return[p,d]}},110:function(t,o,i){"use strict";function genCompactItemStyle(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{focus:!0},{componentCls:i}=t,r=`${i}-compact`;return{[r]:Object.assign(Object.assign({},function(t,o,i){let{focusElCls:r,focus:s,borderElCls:l}=i,p=l?"> *":"",d=["hover",s?"focus":null,"active"].filter(Boolean).map(t=>`&:${t} ${p}`).join(",");return{[`&-item:not(${o}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":Object.assign(Object.assign({[d]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${p}`]:{zIndex:0}})}}(t,r,o)),function(t,o,i){let{borderElCls:r}=i,s=r?`> ${r}`:"";return{[`&-item:not(${o}-first-item):not(${o}-last-item) ${s}`]:{borderRadius:0},[`&-item:not(${o}-last-item)${o}-first-item`]:{[`& ${s}, &${t}-sm ${s}, &${t}-lg ${s}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${o}-first-item)${o}-last-item`]:{[`& ${s}, &${t}-sm ${s}, &${t}-lg ${s}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}(i,r,o))}}i.d(o,{c:function(){return genCompactItemStyle}})},3590:function(t,o,i){"use strict";i.d(o,{R:function(){return initMotion}});let initMotionCommon=t=>({animationDuration:t,animationFillMode:"both"}),initMotionCommonLeave=t=>({animationDuration:t,animationFillMode:"both"}),initMotion=function(t,o,i,r){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=s?"&":"";return{[`
      ${l}${t}-enter,
      ${l}${t}-appear
    `]:Object.assign(Object.assign({},initMotionCommon(r)),{animationPlayState:"paused"}),[`${l}${t}-leave`]:Object.assign(Object.assign({},initMotionCommonLeave(r)),{animationPlayState:"paused"}),[`
      ${l}${t}-enter${t}-enter-active,
      ${l}${t}-appear${t}-appear-active
    `]:{animationName:o,animationPlayState:"running"},[`${l}${t}-leave${t}-leave-active`]:{animationName:i,animationPlayState:"running",pointerEvents:"none"}}}},5314:function(t,o,i){"use strict";i.d(o,{Z:function(){return ModalBox}}),i(7294);var r=i(1150),s=i(3281),l=i(9605),p=i(8381),d=i(8633),f=i(9787),h=i(7731),g=i(5893);function ModalBox(t){var handleCancel=function(){t.toggleModal(),t.onCancel()};return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(m,{style:{width:"580px",height:t.heightType?"90vh":"auto",overflowY:t.heightType?"scroll":"visible"},closeIcon:!1,title:(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(v,{children:(0,g.jsxs)("div",{className:"align-box",children:[t.title&&(0,g.jsx)("p",{children:t.title}),(0,g.jsx)(p.F,{width:"34px",height:"34px",onClick:handleCancel,children:(0,g.jsx)("img",{src:"".concat(f.O,"/images/close-icon.png"),alt:"close"})})]})})}),open:t.isOpen,onOk:function(){t.toggleModal(),t.onOk()},onCancel:handleCancel,centered:!0,maskClosable:!1,footer:t.footerButtons||[],children:t.children})})}var m=(0,r.ZP)(l.Z).withConfig({shouldForwardProp:function(t){return"heightType"!==t}}).withConfig({displayName:"modal__CustomModal",componentId:"sc-acqo2g-0"})(["div.ant-modal-content{border-radius:20px !important;box-shadow:0 0 20px 0 rgba(0,0,0,0.15) !important;padding:"," !important;height:100%;overflow-y:scroll;div.ant-modal-header{padding:",";}div.ant-modal-body{height:100%;}}"],function(t){return t.theme.isResponsive?(0,h.Q1)("20px"):(0,s.hO)("20px")},function(t){return t.theme.isResponsive?"".concat((0,h.Q1)("20px")," 0"):"".concat((0,s.hO)("20px")," 0")}),v=r.ZP.div.withConfig({displayName:"modal__CustomHeaderBox",componentId:"sc-acqo2g-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-1o0dgyy-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],function(t){return t.theme.isResponsive?(0,h.Q1)(d.hQ):(0,s.hO)("".concat(d.hQ))},d.SK)},1466:function(t,o,i){"use strict";var r=i(5121).Z.create({baseURL:"http://3.38.50.101:8080",timeout:1e4,headers:{"Content-Type":"application/json"},withCredentials:!0}),getCookie=function(t){var o=document.cookie.match(RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\()\[\]\\`\/\+^])/g,"\\$1")+"=([^;]*)"));return o?decodeURIComponent(o[1]):void 0};r.interceptors.request.use(function(t){return void 0!==getCookie("accessToken")&&(t.headers.Authorization="Bearer "+getCookie("accessToken")),t}),r.interceptors.response.use(function(t){return t}),o.Z=r},9234:function(t,o,i){"use strict";i.r(o),i.d(o,{default:function(){return Login}});var r=i(9499),s=i(29),l=i(7794),p=i.n(l),d=i(7294),f=i(1150),h=i(7632),g=i(7536),m=i(6310),v=i(7533),n=function(t,o){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)o.hasOwnProperty(i)&&(t[i]=o[i])})(t,o)},x={display:"inline-block",padding:"0px",width:"222px",height:"49px",lineHeight:"49px",color:"rgb(60, 30, 30)",backgroundColor:"rgb(255, 235, 0)",border:"1px solid transparent",borderRadius:"3px",fontSize:"16px",textAlign:"center"},b=function(t){function a(){var o=null!==t&&t.apply(this,arguments)||this;return o.state={isLoggedIn:!1},o.onButtonClick=function(){var t,i=o.props,r=i.throughTalk,s=i.persistAccessToken,l=i.needProfile,p=void 0===l||l,d=i.useLoginForm,f=i.onSuccess,h=i.onFail;(null===(t=window.Kakao)||void 0===t?void 0:t.Auth)[void 0!==d&&d?"loginForm":"login"]({throughTalk:void 0===r||r,persistAccessToken:void 0===s||s,success:function(t){var i;o.setState({isLoggedIn:!0}),p?null===(i=window.Kakao)||void 0===i||i.API.request({url:"/v2/user/me",success:function(o){f({response:t,profile:o})},fail:h}):f({response:t})},fail:h})},o.onLogout=function(){var t;null===(t=window.Kakao)||void 0===t||t.Auth.logout(function(){var t,i,r;null===(i=(t=o.props).onLogout)||void 0===i||i.call(t,null===(r=window.Kakao)||void 0===r?void 0:r.Auth.getAccessToken()),o.setState({isLoggedIn:!1})})},o}return function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}(a,t),a.prototype.componentDidMount=function(){var t,o,i,r;return t=this,o=void 0,i=void 0,r=function(){return function(t,o){var i,r,s,l,p={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(d){return function(l){if(i)throw TypeError("Generator is already executing.");for(;p;)try{if(i=1,r&&(s=2&l[0]?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[2&l[0],s.value]),l[0]){case 0:case 1:s=l;break;case 4:return p.label++,{value:l[1],done:!1};case 5:p.label++,r=l[1],l=[0];continue;case 7:l=p.ops.pop(),p.trys.pop();continue;default:if(!(s=(s=p.trys).length>0&&s[s.length-1])&&(6===l[0]||2===l[0])){p=0;continue}if(3===l[0]&&(!s||l[1]>s[0]&&l[1]<s[3])){p.label=l[1];break}if(6===l[0]&&p.label<s[1]){p.label=s[1],s=l;break}if(s&&p.label<s[2]){p.label=s[2],p.ops.push(l);break}s[2]&&p.ops.pop(),p.trys.pop();continue}l=o.call(t,p)}catch(t){l=[6,t],r=0}finally{i=s=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,d])}}}(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t,o){var i=document.createElement("script");i.id="kakao-sdk",i.src="//developers.kakao.com/sdk/js/kakao.min.js",i.onload=t,document.body.append(i)})];case 1:return t.sent(),window.Kakao.init(this.props.token),[2]}})},new(i||(i=Promise))(function(s,l){function a(t){try{c(r.next(t))}catch(t){l(t)}}function u(t){try{c(r.throw(t))}catch(t){l(t)}}function c(t){var o;t.done?s(t.value):((o=t.value)instanceof i?o:new i(function(t){t(o)})).then(a,u)}c((r=r.apply(t,o||[])).next())})},a.prototype.render=function(){var t=this.state.isLoggedIn?this.onLogout:this.onButtonClick,o=this.props,i=o.render,r=o.className,s=o.style,l=void 0===s?x:s,p=o.children,f=void 0===p?"카카오로 로그인하기":p;return"function"==typeof i?i({onClick:t}):d.createElement("button",{type:"button",className:void 0===r?"":r,onClick:t,style:l},f)},a.DEFAULT_STYLE=x,a}(d.PureComponent),y=i(7396),w=i(8381),k=i(8633),j=i(2268),_=i(528),O=i(5314),C=i(9630),Z=i(7820),P=i(9787),$=i(880),R=i(3233),I=i(8031),S=i(7731),E=i(3281),M=i(5893);function ownKeys(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);o&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function _objectSpread(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?ownKeys(Object(i),!0).forEach(function(o){(0,r.Z)(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}var B=m.Ry().shape({email:m.Z_().required("이메일은 필수입니다.").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"이메일 형식이 올바르지 않습니다."),password:m.Z_().required("비밀번호는 필수입니다.")});function Login(){var t,o,i,r=(0,j.Z)().movePage,l=(0,R.Z)().setCookie,f=(0,I.Z)().setMessage,m=(0,g.cI)({resolver:(0,v.X)(B)}),x=m.register,k=m.handleSubmit,S=m.formState.errors,E=(0,d.useState)(!1),A=E[0],K=E[1],toggleModal=function(){K(function(t){return!t})},D=(t=(0,s.Z)(p().mark(function _callee(t){return p().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,$.Z.login(t);case 3:l("accessToken",o.sent.data,{expires:7}),r("/main"),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(0),console.log(o.t0),f("error",o.t0.response.data.message);case 12:case"end":return o.stop()}},_callee,null,[[0,8]])})),function(o){return t.apply(this,arguments)});return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(T,{children:[(0,M.jsx)(_.B,{children:"로그인"}),(0,M.jsxs)(N,{children:[(0,M.jsxs)(C.W,{children:[(0,M.jsx)("label",{htmlFor:"loginEmail",children:"이메일"}),(0,M.jsx)("input",_objectSpread({id:"loginEmail"},x("email"))),(0,M.jsx)(Z.x,{children:null===(o=S.email)||void 0===o?void 0:o.message})]}),(0,M.jsxs)(C.W,{children:[(0,M.jsx)("label",{htmlFor:"loginPwd",children:"비밀번호"}),(0,M.jsx)("input",_objectSpread({id:"loginPwd",type:"password"},x("password"))),(0,M.jsx)(Z.x,{children:null===(i=S.password)||void 0===i?void 0:i.message})]})]}),(0,M.jsxs)(Q,{children:[(0,M.jsx)(q,{onClick:function(){return r("/findId")},children:"아이디찾기"}),(0,M.jsx)(q,{onClick:function(){return r("/findPwd")},children:"비밀번호 찾기"})]}),(0,M.jsxs)(z,{children:[(0,M.jsx)(L,{children:(0,M.jsx)(y.h$,{colorstyle:"is-black",onClick:k(D),children:"로그인"})}),(0,M.jsx)(L,{children:(0,M.jsx)(b,{token:"20bd45f114aff9ec8fee730fe2453f5c",onSuccess:function(t){console.log(t),t.response.accessToken,r("/main")},onFail:console.error,onLogout:console.info,render:function(t){var o=t.onClick;return(0,M.jsx)(y.h$,{colorstyle:"is-yellow",onClick:function(t){t.preventDefault(),o()},children:(0,M.jsxs)("div",{className:"align-box",children:[(0,M.jsx)(w.F,{width:"15px",height:"14px",children:(0,M.jsx)("img",{src:"".concat(P.O,"/images/kakao-icon.png"),alt:"kakao-icon"})}),(0,M.jsx)("p",{children:"카카오 로그인"})]})})}})})]}),(0,M.jsxs)(F,{children:[(0,M.jsx)("p",{children:"아이디가 없으신가요?"}),(0,M.jsx)(q,{onClick:function(){return r("/register")},children:"회원가입하기"})]}),(0,M.jsx)(O.Z,{title:"test",isOpen:A,toggleModal:toggleModal,onOk:function(){console.log("확인")},onCancel:function(){console.log("취소")},footerButtons:[(0,M.jsx)("button",{onClick:toggleModal,children:"확인"},(0,h.Z)())],children:(0,M.jsx)("p",{children:"모달 테스트"})})]})})}var T=f.ZP.div.withConfig({displayName:"login__LoginViewContainer",componentId:"sc-1q5ava8-0"})(["margin-top:",";"],function(t){return t.theme.isResponsive?(0,S.Q1)("50px"):(0,E.hO)("50px")}),N=f.ZP.div.withConfig({displayName:"login__InputContainer",componentId:"sc-1q5ava8-1"})(["margin-top:",";"],function(t){return t.theme.isResponsive?(0,S.Q1)("50px"):(0,E.hO)("50px")}),z=f.ZP.div.withConfig({displayName:"login__ButtonContainer",componentId:"sc-1q5ava8-2"})(["margin-top:",";"],function(t){return t.theme.isResponsive?(0,S.Q1)("40px"):(0,E.hO)("40px")}),L=f.ZP.div.withConfig({displayName:"login__ButtonBox",componentId:"sc-1q5ava8-3"})(["margin-bottom:",";"],function(t){return t.theme.isResponsive?(0,S.Q1)("20px"):(0,E.hO)("20px")}),Q=f.ZP.div.withConfig({displayName:"login__UnderLineBox",componentId:"sc-1q5ava8-4"})(["display:flex;gap:",";justify-content:flex-end;"],function(t){return t.theme.isResponsive?(0,S.Q1)("15px"):(0,E.hO)("15px")}),q=f.ZP.p.withConfig({displayName:"login__UnderLineTexts",componentId:"sc-1q5ava8-5"})(["text-decoration:underline;color:",";cursor:pointer;"],k.K6),F=f.ZP.div.withConfig({displayName:"login__BottomUnderLineBox",componentId:"sc-1q5ava8-6"})(["display:flex;gap:",";justify-content:center;"],function(t){return t.theme.isResponsive?(0,S.Q1)("10px"):(0,E.hO)("10px")})},880:function(t,o,i){"use strict";i.d(o,{Z:function(){return l}});var r=i(1466),s=i(5121).Z.create({baseURL:"http://3.38.50.101:8080",timeout:1e4,headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}),getCookie=function(t){var o=document.cookie.match(RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\()\[\]\\`\/\+^])/g,"\\$1")+"=([^;]*)"));return o?decodeURIComponent(o[1]):void 0};s.interceptors.request.use(function(t){return void 0!==getCookie("accessToken")&&(t.headers.Authorization="Bearer "+getCookie("accessToken")),t}),s.interceptors.response.use(function(t){return t});var l={signup:function(t){return r.Z.post("/api/auth/signup",t)},login:function(t){return r.Z.post("/api/auth/signin",t)},uploadImgSignup:function(t){return console.log(t),s.post("/api/auth/upload-image",t)},kakaoSignup:function(t){return r.Z.post("/api/auth/kakao/sign-up",t)},kakaoLogin:function(t){return r.Z.post("/api/auth/kakao/callback",t)},logout:function(t){return r.Z.post("/api/auth/sign-out",t)},checkNickname:function(t){return r.Z.post("/api/auth/check-email",t)},phoneVerify:function(t){return r.Z.post("/api/auth/phone-verify",t)},emailVerify:function(t){return r.Z.post("/api/auth/email-verify",t)},findId:function(t){return r.Z.post("/api/auth/id-find",t)},findPwd:function(t){return console.log("test"),r.Z.post("/api/auth/password-reset",t)}}},9630:function(t,o,i){"use strict";i.d(o,{W:function(){return d}});var r=i(1150),s=i(3281),l=i(8633),p=i(7731),d=r.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-7b0p27-0"})(["display:flex;flex-direction:column;margin-bottom:",";position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:",";color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";font-size:",";&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(t){return t.theme.isResponsive?(0,p.Q1)("20px"):(0,s.hO)("20px")},function(t){return"true"===t.certify&&"relative"},function(t){return t.theme.isResponsive?(0,p.Q1)(l.Mz):(0,s.hO)(l.Mz)},function(t){return t.theme.isResponsive?(0,p.Q1)("10px"):(0,s.hO)("10px")},l.K_,function(t){return t.theme.isResponsive?(0,p.Q1)("50px"):(0,s.hO)("50px")},l.B_,l._2,function(t){return t.theme.isResponsive?"0 ".concat((0,p.Q1)("15px")):"0 ".concat((0,s.hO)("15px"))},function(t){return t.theme.isResponsive?(0,p.Q1)(l.Mz):(0,s.hO)(l.Mz)},l.K6,(0,s.hO)("25px"),function(t){return t.theme.isResponsive?(0,p.Q1)("10px"):(0,s.hO)("10px")},l._W)},7820:function(t,o,i){"use strict";i.d(o,{x:function(){return d}});var r=i(1150),s=i(3281),l=i(8633),p=i(7731),d=r.ZP.p.withConfig({displayName:"text__InputErrorText",componentId:"sc-1f9cci3-0"})(["font-size:",";color:",";font-family:Pretendard-Regular;"],function(t){return t.theme.isResponsive?(0,p.Q1)(l.Mz):(0,s.hO)(l.Mz)},l._W)},528:function(t,o,i){"use strict";i.d(o,{B:function(){return d}});var r=i(1150),s=i(3281),l=i(7731),p=i(8633),d=r.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-plpx1a-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],p.w9,function(t){return t.theme.isResponsive?(0,l.Q1)("28px"):(0,s.hO)("".concat(p.hQ))},p.SK)},8031:function(t,o,i){"use strict";var r=i(6318),s=i(5890);o.Z=function(){var t=(0,r.Zl)(s.O),o=(0,r.sJ)(s.O);return{setMessage:function(i,r){t({isHandle:!o.isHandle,type:i,message:r})}}}},3700:function(t,o,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return i(9234)}])},5110:function(t,o){"use strict";o.Z=function(t){if(!t)return!1;if(t instanceof Element){if(t.offsetParent)return!0;if(t.getBBox){var o=t.getBBox(),i=o.width,r=o.height;if(i||r)return!0}if(t.getBoundingClientRect){var s=t.getBoundingClientRect(),l=s.width,p=s.height;if(l||p)return!0}}return!1}},7028:function(t,o,i){"use strict";var r,s=i(7685),l=i(1413),p=i(7294),d=0,f=(0,l.Z)({},r||(r=i.t(p,2))).useId;o.Z=f?function(t){var o=f();return t||o}:function(t){var o=p.useState("ssr-id"),i=(0,s.Z)(o,2),r=i[0],l=i[1];return(p.useEffect(function(){var t=d;d+=1,l("rc_unique_".concat(t))},[]),t)?t:r}},29:function(t,o,i){"use strict";function asyncGeneratorStep(t,o,i,r,s,l,p){try{var d=t[l](p),f=d.value}catch(t){i(t);return}d.done?o(f):Promise.resolve(f).then(r,s)}function _asyncToGenerator(t){return function(){var o=this,i=arguments;return new Promise(function(r,s){var l=t.apply(o,i);function _next(t){asyncGeneratorStep(l,r,s,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,r,s,_next,_throw,"throw",t)}_next(void 0)})}}i.d(o,{Z:function(){return _asyncToGenerator}})}},function(t){t.O(0,[536,333,662,605,774,888,179],function(){return t(t.s=3700)}),_N_E=t.O()}]);