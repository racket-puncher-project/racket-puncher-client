(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{5314:function(e,t,n){"use strict";n.d(t,{Z:function(){return ModalBox}}),n(7294);var i=n(1150),a=n(3281),r=n(9605),o=n(8381),l=n(8633),c=n(9787),s=n(7731),d=n(5893);function ModalBox(e){var handleCancel=function(){e.toggleModal(),e.onCancel()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(p,{style:{width:"580px",height:e.heightType?"90vh":"auto",overflowY:e.heightType?"scroll":"visible"},closeIcon:!1,title:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(u,{children:(0,d.jsxs)("div",{className:"align-box",children:[e.title&&(0,d.jsx)("p",{children:e.title}),(0,d.jsx)(o.F,{width:"34px",height:"34px",onClick:handleCancel,children:(0,d.jsx)("img",{src:"".concat(c.O,"/images/close-icon.png"),alt:"close"})})]})})}),open:e.isOpen,onOk:function(){e.toggleModal(),e.onOk()},onCancel:handleCancel,centered:!0,maskClosable:!1,footer:e.footerButtons||[],children:e.children})})}var p=(0,i.ZP)(r.Z).withConfig({shouldForwardProp:function(e){return"heightType"!==e}}).withConfig({displayName:"modal__CustomModal",componentId:"sc-acqo2g-0"})(["div.ant-modal-content{border-radius:20px !important;box-shadow:0 0 20px 0 rgba(0,0,0,0.15) !important;padding:"," !important;height:100%;overflow-y:scroll;div.ant-modal-header{padding:20px 0;}div.ant-modal-body{height:100%;}}"],function(e){return e.theme.isResponsive?(0,s.Q1)("20px"):(0,a.hO)("20px")}),u=i.ZP.div.withConfig({displayName:"modal__CustomHeaderBox",componentId:"sc-acqo2g-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-1o0dgyy-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],function(e){return e.theme.isResponsive?(0,s.Q1)(l.hQ):(0,a.hO)("".concat(l.hQ))},l.SK)},4013:function(e,t,n){"use strict";n.d(t,{G_:function(){return r},IF:function(){return a},P3:function(){return i},Xf:function(){return o}});var i=[{value:"MALE",label:"남자"},{value:"FEMALE",label:"여자"}],a=[{value:"TWENTIES",label:"20대"},{value:"THIRTIES",label:"30대"},{value:"FORTIES",label:"40대"},{value:"SENIOR",label:"50대이상"}],r=[{value:"DEVELOPMENT",label:"Development"},{value:"BEGINNER",label:"Beginner"},{value:"INTERMEDIATE",label:"Intermediate"},{value:"ADVANCE",label:"Advance"},{value:"PRO",label:"Pro"}],o=[{value:"SINGLE",label:"단식"},{value:"DOUBLE",label:"복식"},{value:"MIXED_DOUBLE",label:"혼성 복식"},{value:"OTHER",label:"기타"}]},1466:function(e,t,n){"use strict";var i=n(5121).Z.create({baseURL:"http://3.38.50.101:8080",timeout:1e4,headers:{"Content-Type":"application/json"},withCredentials:!0}),getCookie=function(e){var t=document.cookie.match(RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\()\[\]\\`\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0};i.interceptors.request.use(function(e){return void 0!==getCookie("accessToken")&&(e.headers.Authorization="Bearer "+getCookie("accessToken")),e}),i.interceptors.response.use(function(e){return e}),t.Z=i},6797:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MainPage}});var i=n(9499),a=n(7294),r=n(1150),o=n(6066),l=n(3281),c=n(8381),s=n(7812),d=n(29),p=n(7794),u=n.n(p),h=n(5837),g=n.n(h),f=n(7632),m=n(7396),x=n(8633),v=n(5265),b=n(9787),j=n(7731),O=n(5893);function HalfDrawerBox(e){return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(y,{title:(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(w,{children:(0,O.jsxs)("div",{className:"align-box",children:[e.title&&(0,O.jsx)("p",{children:e.title}),(0,O.jsx)(c.F,{width:"34px",height:"34px",onClick:function(){e.toggleDrawer()},children:(0,O.jsx)("img",{src:"".concat(b.O,"/images/close-icon.png"),alt:"close"})})]})})}),maskClosable:!1,placement:e.placement,open:e.isOpen,width:e.width,height:e.height,closable:!1,children:e.children},e.placement)})}var y=(0,r.ZP)(v.Z).withConfig({displayName:"halfDrawer__CustomHalfDrawer",componentId:"sc-12b2qlj-0"})(["max-width:",";position:absolute;left:50%;transform:translateX(-50%);width:90% !important;margin:0 auto;border-radius:20px 20px 0 0;&.ant-drawer-content-wrapper{}div.ant-drawer-header{flex:none;height:",";padding:",";border-bottom:0;}div.ant-drawer-content-wrapper{border-radius:30px;}div.ant-drawer-body{padding:",";}"],function(e){return e.theme.isResponsive?(0,j.Q1)("640px"):(0,l.hO)("640px")},function(e){return e.theme.isResponsive?(0,j.Q1)("80px"):(0,l.hO)("80px")},function(e){return e.theme.isResponsive?"0 ".concat((0,j.Q1)("30px")):"0 ".concat((0,l.hO)("30px"))},function(e){return e.theme.isResponsive?"0 ".concat((0,j.Q1)("30px")):"0 ".concat((0,l.hO)("30px"))}),w=r.ZP.div.withConfig({displayName:"halfDrawer__CustomHeaderBox",componentId:"sc-12b2qlj-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-1o0dgyy-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],x.hQ,x.SK),k=n(7153),N=n(9216),P=n(7536),_=n(4527),C=n.n(_);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var M={headerFormat:"YYYY년 MM월 DD일",dateFormat:["YYYY","M","D"],locale:"ko",confirmText:"확인",cancelText:"취소"};function CustomDatePicker(e){var t=(0,a.useState)(!1),n=t[0],r=t[1];return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(S,{onClick:function(){return r(!0)},children:[(0,O.jsx)("p",{children:e.dateState}),(0,O.jsx)(c.F,{width:"24px",height:"24px",children:(0,O.jsx)("img",{src:"".concat(b.O,"/images/calendar.png"),alt:"calendar"})})]}),(0,O.jsx)(C(),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({isOpen:n,onSelect:function(t){e.setDateState((0,j.vh)(t)),r(!1)},onCancel:function(){e.setDateState(""),r(!1)},date:new Date},M))]})}var S=r.ZP.div.withConfig({displayName:"datePicker__CustomDatePickerBox",componentId:"sc-1gqe8q-0"})(["width:100%;padding:17px ",";border-radius:10px;border:1px solid #dcdcdc;background:#f9f9f9;display:flex;justify-content:space-between;align-items:center;cursor:pointer;p{font-size:",";font-family:Pretendard-Regular;}"],(0,l.hO)("14px"),(0,l.hO)("".concat(x.Mz))),E=n(5314),Z=[{label:"서울",value:"SEOUL"},{label:"경기",value:"GYEONGGI"}],G=[{label:"서울시 강남구",value:"GANGNAM"},{label:"서울시 강동구",value:"GANDONG"},{label:"서울시 강북구",value:"GANGBUK"},{label:"서울시 강서구",value:"GANGSEO"},{label:"서울시 관악구",value:"GWANAK"},{label:"서울시 광진구",value:"GWANGJIN"},{label:"서울시 구로구",value:"GURO"},{label:"서울시 금천구",value:"GEUMCHEON"},{label:"서울시 노원구",value:"NOWON"},{label:"서울시 도봉구",value:"DOBONG"},{label:"서울시 동대문구",value:"DONGDAEMUN"},{label:"서울시 동작구",value:"DONGJAK"},{label:"서울시 마포구",value:"MAPO"},{label:"서울시 서대문구",value:"SEODAEMUN"},{label:"서울시 서초구",value:"SEOCHO"},{label:"서울시 성동구",value:"SEONGDONG"},{label:"서울시 성북구",value:"SEONGBUK"},{label:"서울시 송파구",value:"SONGPA"},{label:"서울시 양천구",value:"YANGCHEON"},{label:"서울시 영등포구",value:"YEONGDEUNGPO"},{label:"서울시 용산구",value:"YONGSAN"},{label:"서울시 은평구",value:"EUNPYEONG"},{label:"서울시 종로구",value:"JONGRO"},{label:"서울시 중구",value:"JUNG"},{label:"서울시 중랑구",value:"JUNGNANG"}],I=[{label:"경기도 수원시",value:"SUWON"},{label:"경기도 용인시",value:"YONGIN"},{label:"경기도 성남시",value:"SEONGNAM"},{label:"경기도 부천시",value:"BUCHEON"},{label:"경기도 화성시",value:"HWASEONG"},{label:"경기도 안산시",value:"ANSAN"},{label:"경기도 안양시",value:"ANYANG"},{label:"경기도 평택시",value:"PYEONGTAEK"},{label:"경기도 시흥시",value:"SIHEUNG"},{label:"경기도 김포시",value:"GIMPO"},{label:"경기도 광주시",value:"GWANGJU"},{label:"경기도 광명시",value:"GWANGMYEONG"},{label:"경기도 군포시",value:"GUNPO"},{label:"경기도 하남시",value:"HANAM"},{label:"경기도 오산시",value:"OSAN"},{label:"경기도 이천시",value:"ICHEON"},{label:"경기도 안성시",value:"ANSEONG"},{label:"경기도 의왕시",value:"UIWANG"},{label:"경기도 양평군",value:"YANGPYEONG"},{label:"경기도 여주시",value:"YEOJU"},{label:"경기도 과천시",value:"GWACHEON"},{label:"경기도 고양시",value:"GOYANG"},{label:"경기도 남양주시",value:"NAMYANGJU"},{label:"경기도 파주시",value:"PAJU"},{label:"경기도 의정부시",value:"UIJEONGBU"},{label:"경기도 양주시",value:"YANGJU"},{label:"경기도 구리시",value:"GURI"},{label:"경기도 포천시",value:"POCHEON"},{label:"경기도 동두천시",value:"DONGDUCHEON"},{label:"경기도 가평군",value:"GAPYEONG"},{label:"경기도 연천군",value:"YEONCHEON"}],R=n(4013);function filteringModal_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function filteringModal_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?filteringModal_ownKeys(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):filteringModal_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}for(var D=[],A=10;A<36;A++)D.push({value:A.toString(36)+A,label:A.toString(36)+A});function FilteringModal(e){var t=(0,a.useState)(""),n=t[0],i=t[1],r=(0,a.useState)(""),o=r[0],l=r[1],c=(0,a.useState)(null),s=c[0],d=c[1],p=(0,a.useState)(""),u=p[0],h=p[1],g=(0,a.useState)([]),f=g[0],x=g[1],v=(0,a.useState)([]),b=v[0],j=v[1],y=(0,a.useState)([]),w=y[0],_=y[1],C=(0,a.useState)([]),M=C[0],S=C[1],D=(0,a.useState)(!1),A=D[0],U=D[1],Y=(0,a.useState)([]),H=Y[0],W=Y[1],V=(0,a.useState)([]),q=V[0],J=V[1],X=G.concat(I),$=(0,P.cI)(),ee=$.control,et=($.register,$.handleSubmit,$.getValues,$.setValue),en=$.watch;$.reset;var ei=(0,P.cI)(),ea=ei.control,er=(ei.register,ei.handleSubmit,ei.getValues,ei.setValue),eo=ei.watch;ei.reset;var el={sort:s,date:u,grandParent:f,matchType:b,matchAge:w,matchNTRP:M},handleRegionParentElemet=function(e){if(er("parent",e),0===eo("parent").length&&er("child",[]),1===eo("parent").length&&eo("parent").includes("SEOUL")){var t=I.map(function(e){return e.value});er("child",eo("child").filter(function(e){return!t.includes(e)}))}if(1===eo("parent").length&&eo("parent").includes("GYEONGI")){var n=G.map(function(e){return e.value});er("child",eo("child").filter(function(e){return!n.includes(e)}))}},clickCloseBtn=function(){Object.keys(el).forEach(function(e){et(e,el[e])}),i(el.date),l(el.sort)};return(0,a.useEffect)(function(){e.clickFilter||clickCloseBtn()},[e.clickFilter]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(L,{children:[(0,O.jsxs)("div",{className:"content-box",children:[(0,O.jsxs)(k.ZP.Group,{size:"large",value:o,onChange:function(e){l(e.target.value)},children:[(0,O.jsx)(k.ZP.Button,{value:"register",children:"등록순"}),(0,O.jsx)(k.ZP.Button,{value:"distance",children:"거리순"}),(0,O.jsx)(k.ZP.Button,{value:"due-date",children:"모집임박순"})]}),(0,O.jsxs)(B,{children:[(0,O.jsxs)(T,{children:[(0,O.jsx)(Q,{children:(0,O.jsx)(z,{children:"날짜"})}),(0,O.jsx)(CustomDatePicker,{dateState:n,setDateState:i})]}),(0,O.jsxs)(T,{children:[(0,O.jsxs)(F,{children:[(0,O.jsx)(z,{children:"지역"}),(0,O.jsx)(K,{onClick:function(){return U(!0)},children:"지역 선택"})]}),(0,O.jsx)(P.Qr,{name:"grandParent",control:ee,defaultValue:[],render:function(e){var t=e.field;return(0,O.jsx)(N.Z,filteringModal_objectSpread(filteringModal_objectSpread({},t),{},{disabled:!0,mode:"multiple",options:X,style:{width:"100%"}}))}})]}),(0,O.jsxs)(T,{children:[(0,O.jsx)(Q,{children:(0,O.jsx)(z,{children:"경기 유형"})}),(0,O.jsx)(P.Qr,{name:"matchType",control:ee,defaultValue:[],render:function(e){var t=e.field;return(0,O.jsx)(N.Z,filteringModal_objectSpread(filteringModal_objectSpread({},t),{},{mode:"multiple",placeholder:"경기 유형을 선택해주세요.",options:R.Xf,style:{width:"100%"}}))}})]}),(0,O.jsxs)(T,{children:[(0,O.jsx)(Q,{children:(0,O.jsx)(z,{children:"모집 연령대"})}),(0,O.jsx)(P.Qr,{name:"matchAge",control:ee,defaultValue:[],render:function(e){var t=e.field;return(0,O.jsx)(N.Z,filteringModal_objectSpread(filteringModal_objectSpread({},t),{},{mode:"multiple",placeholder:"연령대를 선택해주세요.",options:R.IF,style:{width:"100%"}}))}})]}),(0,O.jsxs)(T,{children:[(0,O.jsx)(Q,{children:(0,O.jsx)(z,{children:"모집 수준"})}),(0,O.jsx)(P.Qr,{name:"matchNTRP",control:ee,defaultValue:[],render:function(e){var t=e.field;return(0,O.jsx)(N.Z,filteringModal_objectSpread(filteringModal_objectSpread({},t),{},{mode:"multiple",placeholder:"모집 수준을 선택해주세요.",options:R.G_,style:{width:"100%"}}))}})]})]})]}),(0,O.jsx)("div",{className:"btn-box",children:(0,O.jsx)(m.h$,{onClick:function(){d(o),h(n),x(en("grandParent")),j(en("matchType")),_(en("matchAge")),S(en("matchNTRP")),e.setFilterParams(function(e){return filteringModal_objectSpread(filteringModal_objectSpread({},e),{},{sort:o,startDate:n,regions:en("grandParent"),matchingTypes:en("matchType"),ageGroups:en("matchAge"),ntrps:en("matchNTRP")})}),e.setParams(function(e){return filteringModal_objectSpread(filteringModal_objectSpread({},e),{},{page:1})}),e.setMatchingList([]),e.toggleModal()},children:"적용하기"})})]}),(0,O.jsxs)(E.Z,{isOpen:A,toggleModal:function(){U(function(e){return!e})},onCancel:function(){U(!1),er("parent",H),er("child",q)},children:[(0,O.jsxs)(T,{children:[(0,O.jsx)(Q,{children:(0,O.jsx)(z,{children:"지역 (시/도)"})}),(0,O.jsx)(P.Qr,{name:"parent",control:ea,defaultValue:[],render:function(e){var t=e.field;return(0,O.jsx)(N.Z,filteringModal_objectSpread(filteringModal_objectSpread({},t),{},{mode:"multiple",placeholder:"시/도를 선택해주세요.",style:{width:"100%"},options:Z,onChange:function(e){handleRegionParentElemet(e)}}))}})]}),(0,O.jsxs)(T,{children:[(0,O.jsx)(Q,{children:(0,O.jsx)(z,{children:"지역 (구/동)"})}),(0,O.jsx)(P.Qr,{name:"child",control:ea,defaultValue:[],render:function(e){var t=e.field;return(0,O.jsx)(N.Z,filteringModal_objectSpread(filteringModal_objectSpread({},t),{},{mode:"multiple",placeholder:"구/동을 선택해주세요.",style:{width:"100%"},options:eo("parent").find(function(e){return"SEOUL"===e})&&1===eo("parent").length?G:eo("parent").find(function(e){return"GYEONGGI"===e})&&1===eo("parent").length?I:2===eo("parent").length?X:void 0,disabled:eo("parent").length<=0,onChange:function(e){er("child",e)}}))}})]}),(0,O.jsx)(m.h$,{colorstyle:"is-green",onClick:function(){U(!1),W(eo("parent")),J(eo("child")),et("grandParent",eo("child"))},children:"적용하기"})]})]})}var L=r.ZP.div.withConfig({displayName:"filteringModal__FilteringModalContainer",componentId:"sc-1o26jft-0"})(["height:100%;display:flex;flex-direction:column;justify-content:space-between;padding-bottom:20px;div.ant-radio-group{width:100% !important;display:flex !important;label{display:block;width:100%;text-align:center;padding-inline:initial;font-size:",";font-family:Pretendard-Regular;line-height:1;height:inherit;padding:",";color:",";-webkit-tap-highlight-color:transparent !important;&.ant-radio-button-wrapper-checked{border-color:",";color:",";&::before{background-color:",";}}}}"],function(e){return e.theme.isResponsive?(0,j.Q1)(x.Mz):(0,l.hO)(x.Mz)},function(e){return e.theme.isResponsive?"".concat((0,j.Q1)("10px")," ").concat((0,j.Q1)("10px")):"".concat((0,l.hO)("10px")," ").concat((0,l.hO)("10px"))},x.Ie,x.K6,x.K6,x.K6),B=r.ZP.div.withConfig({displayName:"filteringModal__FilteringOptionContainer",componentId:"sc-1o26jft-1"})(["margin:20px 0;"]),T=r.ZP.div.withConfig({displayName:"filteringModal__OptionWrap",componentId:"sc-1o26jft-2"})(["margin-bottom:20px;div.datePicker__CustomDatePickerBox-sc-1gqe8q-0{height:",";padding:",";}div.ant-select-selector{padding:",";border-radius:10px;border:1px solid #dcdcdc !important;background-color:#f9f9f9 !important;span.ant-select-selection-item{border-radius:10px;background:#84a840;height:",";display:flex;justify-content:center;align-items:center;span.ant-select-selection-item-content{color:#fff;font-size:",";font-family:Pretendard-Regular;margin-right:",";}span.ant-select-selection-item-remove{font-size:",";color:#fff;}}}"],function(e){return e.theme.isResponsive?(0,j.Q1)("50px"):(0,l.hO)("50px")},function(e){return e.theme.isResponsive?"0 ".concat((0,j.Q1)("14px")):"0 ".concat((0,l.hO)("14px"))},function(e){return e.theme.isResponsive?"".concat((0,j.Q1)("10px")," ").concat((0,j.Q1)("14px")):"".concat((0,l.hO)("10px")," ").concat((0,l.hO)("14px"))},function(e){return e.theme.isResponsive?(0,j.Q1)("30px"):(0,l.hO)("30px")},function(e){return e.theme.isResponsive?(0,j.Q1)(x.Kw):(0,l.hO)(x.Kw)},function(e){return e.theme.isResponsive?(0,j.Q1)("5px"):(0,l.hO)("5px")},function(e){return e.theme.isResponsive?(0,j.Q1)(x.Kw):(0,l.hO)(x.Kw)}),z=r.ZP.p.withConfig({displayName:"filteringModal__SelectTitle",componentId:"sc-1o26jft-3"})(["color:",";font-family:Pretendard-Regular;font-size:",";"],x.SK,function(e){return e.theme.isResponsive?(0,j.Q1)(x.Mz):(0,l.hO)(x.Mz)}),Q=r.ZP.div.withConfig({displayName:"filteringModal__LabelBox",componentId:"sc-1o26jft-4"})(["display:flex;align-items:center;margin-bottom:10px;"]),F=r.ZP.div.withConfig({displayName:"filteringModal__RegionBtnBox",componentId:"sc-1o26jft-5"})(["display:flex;align-items:center;margin-bottom:10px;"]),K=r.ZP.button.withConfig({displayName:"filteringModal__SelectRegionBtn",componentId:"sc-1o26jft-6"})(["font-size:",";font-family:Pretendard-Regular;border:1px solid ",";background-color:",";padding:",";border-radius:10px;color:",";margin-left:",";cursor:pointer;"],function(e){return e.theme.isResponsive?(0,j.Q1)(x.Kw):(0,l.hO)(x.Kw)},x.R4,x.L_,function(e){return e.theme.isResponsive?"".concat((0,j.Q1)("8px")," ").concat((0,j.Q1)("15px")):"".concat((0,l.hO)("8px")," ").concat((0,l.hO)("15px"))},x.R4,function(e){return e.theme.isResponsive?(0,j.Q1)("10px"):(0,l.hO)("10px")}),U=n(2268),Y=n(2386);function MatchingCard(e){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(H,{onClick:e.onClick,children:(0,O.jsxs)(W,{children:[(0,O.jsx)(V,{children:(0,O.jsx)(c.F,{width:"128.205px",height:"125px",children:(0,O.jsx)("img",{src:"".concat(b.O,"/images/main-img1.png"),alt:"main-image1"})})}),(0,O.jsxs)(q,{children:[(0,O.jsxs)(J,{children:[(0,O.jsx)(Y.c,{color:e.reserved?x.aI:x.Ie,fontsize:x.Kw,children:e.reserved?"예약완료":"예약X"}),(0,O.jsx)(Y.c,{color:"#4682A9",fontsize:x.Kw,children:"남자 단식"}),(0,O.jsx)(Y.c,{color:x.K6,fontsize:x.Kw,children:e.ntrp})]}),(0,O.jsx)(X,{children:(0,O.jsx)("p",{children:(0,j.o0)(e.matchingStartDateTime)})}),(0,O.jsx)($,{children:(0,O.jsx)("p",{children:e.title})})]})]})}),(0,O.jsx)(c.W,{})]})}var H=r.ZP.div.withConfig({displayName:"card__CardContainer",componentId:"sc-1kh1izf-0"})(["padding:20px 0;"]),W=r.ZP.div.withConfig({displayName:"card__ContentBox",componentId:"sc-1kh1izf-1"})(["display:flex;align-items:center;"]),V=r.ZP.div.withConfig({displayName:"card__LeftBox",componentId:"sc-1kh1izf-2"})(["flex-basis:128.205px;margin-right:",";"],(0,l.hO)("20px")),q=r.ZP.div.withConfig({displayName:"card__RightBox",componentId:"sc-1kh1izf-3"})([""]),J=r.ZP.div.withConfig({displayName:"card__BadgeBox",componentId:"sc-1kh1izf-4"})(["display:flex;gap:10px;flex-wrap:wrap;margin-bottom:10px;"]),X=r.ZP.div.withConfig({displayName:"card__MatchingTimeBox",componentId:"sc-1kh1izf-5"})(["margin-bottom:10px;p{font-family:Pretendard-Regular;font-size:",";color:",";}"],x.Kw,x.K_),$=r.ZP.div.withConfig({displayName:"card__MatchingTitleBox",componentId:"sc-1kh1izf-6"})(["p{font-family:Pretendard-Regular;font-size:",";color:",";}"],x.Pg,x.K_),ee=n(1687);function SkeletonUI(){return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(ee.Z,{avatar:!0,paragraph:{rows:3}})})}var et=n(7903);function NoResultBox(){return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(en,{children:[(0,O.jsx)(c.F,{width:"100px",height:"100px",children:(0,O.jsx)("img",{src:"/images/no-result.png",alt:"검색결과없음"})}),(0,O.jsx)("p",{children:"조회 결과가 없습니다"})]})})}var en=r.ZP.div.withConfig({displayName:"noResult__NoResultContainer",componentId:"sc-1c3ihgi-0"})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:80px 0;p{margin-top:25px;font-size:",";color:",";}"],x.Pg,x.SK),ei=n(3233),ea=n(8031),er=n(1163);function matchingList_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function matchingList_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?matchingList_ownKeys(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):matchingList_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var eo=r.ZP.div.withConfig({displayName:"matchingList__MatchingContainer",componentId:"sc-he5fs4-0"})([""]),el=r.ZP.div.withConfig({displayName:"matchingList__ControlBox",componentId:"sc-he5fs4-1"})(["display:flex;justify-content:space-between;align-items:center;margin:25px 0;.buttons__RoundButton-sc-1doc049-0{display:flex;justify-content:center;align-items:center;padding:",";border-radius:10px;p{font-family:Pretendard-Medium;font-size:",";margin-left:",";}}"],function(e){return e.theme.isResponsive?"10px ".concat((0,j.Q1)("30px")):"10px ".concat((0,l.hO)("30px"))},function(e){return e.theme.isResponsive?(0,j.Q1)(x.kM):(0,l.hO)(x.kM)},function(e){return e.theme.isResponsive?(0,j.Q1)("6px"):(0,l.hO)("6px")}),ec=[{content:"<div>카카오</div>",title:"카카오",lat:33.450705,lng:126.570677},{content:"<div>생태연못</div>",title:"생태연못",lat:33.450936,lng:126.569477},{content:"<div>텃밭</div>",title:"텃밭",lat:33.450879,lng:126.56994},{content:"<div>근린공원</div>",title:"근린공원",lat:33.451393,lng:126.570738}],es=r.ZP.div.withConfig({displayName:"myAroundMatching__MyAroundMatchingContainer",componentId:"sc-12lbcvq-0"})([".custom-infowindow{padding:10px;border:1px solid #ccc;background-color:white;border-radius:5px;font-size:14px;}"]),ed=r.ZP.div.withConfig({displayName:"myAroundMatching__MapBox",componentId:"sc-12lbcvq-1"})(["margin:20px 0;"]),ep=n(481);function main_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function main_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?main_ownKeys(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):main_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var eu={arrows:!1,dots:!1,infinite:!0,speed:500,autoplay:!0,slidesToShow:1,slidesToScroll:1},eh=[{key:"matchingList",label:"매칭리스트",children:(0,O.jsx)(function(){var e,t=(0,U.Z)().movePage,n=(0,ei.Z)().checkLogin,i=(0,ea.Z)().setMessage,r=(0,er.useRouter)(),o=(0,a.useState)(!1),l=o[0],p=o[1],h=(0,a.useState)([]),x=h[0],v=h[1],j=(0,a.useState)(!0),y=j[0],w=j[1],k=(0,a.useState)({page:1,size:10}),N=k[0],P=k[1],_=(0,a.useState)({sort:"",lat:0,lon:0,startDate:"",endDate:"",startTime:"",endTime:"",regions:[],matchingTypes:[],ageGroups:[],ntrps:[]}),C=_[0],M=_[1],S=(e=(0,d.Z)(u().mark(function _callee(){var e,t;return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={params:{page:N.page,size:N.size,sort:C.sort},body:{location:{lat:"distance"===C.sort?C.lat:0,lon:"distance"===C.sort?C.lon:0},filters:{date:C.startDate,regions:C.regions,matchingTypes:C.matchingTypes,ageGroups:C.ageGroups,ntrps:C.ntrps}}},n.prev=1,n.next=4,et.Z.getMatchingList(e);case 4:(t=n.sent).data.response.content.length>0?(w(!0),P(function(e){return matchingList_objectSpread(matchingList_objectSpread({},e),{},{page:e.page+1})}),v(function(e){return[].concat((0,s.Z)(e),(0,s.Z)(t.data.response.content))})):w(!1),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),w(!1),console.log(n.t0);case 12:case"end":return n.stop()}},_callee,null,[[1,8]])})),function(){return e.apply(this,arguments)}),moveDetailMatching=function(e){t("/main/detailMatch/".concat(e))},clickFilterClose=function(){p(function(e){return!e})};return(0,a.useEffect)(function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(e){var t=e.coords.latitude,n=e.coords.longitude;M(function(e){return matchingList_objectSpread(matchingList_objectSpread({},e),{},{lat:t,lon:n})})}):console.log("Geolocation을 지원하지 않는 브라우저입니다.")},[]),(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(eo,{children:[(0,O.jsxs)(el,{children:[(0,O.jsxs)(m.h$,{colorstyle:"is-black",width:"150px",height:"40px",onClick:function(){n()?t("/post-matching"):(i("error","로그인이 필요한 서비스입니다."),r.replace("/login"))},children:[(0,O.jsx)(c.F,{width:"20px",height:"20px",children:(0,O.jsx)("img",{src:"".concat(b.O,"/images/pencil.png"),alt:"pencil"})}),(0,O.jsx)("p",{children:"매칭등록"})]}),(0,O.jsx)(c.F,{onClick:clickFilterClose,children:(0,O.jsx)("img",{src:"".concat(b.O,"/images/filtering-menu.png"),alt:"filtering-menu"})})]}),(0,O.jsx)(c.W,{}),(0,O.jsx)(g(),{pageStart:0,loadMore:S,hasMore:y,loader:(0,O.jsx)("div",{className:"loader",children:(0,O.jsx)(SkeletonUI,{})},(0,f.Z)()),children:x.map(function(e){return(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(MatchingCard,{matchingStartDateTime:e.matchingStartDateTime,matchingType:e.matchingType,ntrp:e.ntrp,reserved:e.reserved,title:e.title,onClick:function(){return moveDetailMatching(e)}},(0,f.Z)())})})}),0===x.length&&(0,O.jsx)(NoResultBox,{}),(0,O.jsx)(HalfDrawerBox,{isOpen:l,placement:"bottom",width:"50%",height:"90%",toggleDrawer:clickFilterClose,children:(0,O.jsx)(FilteringModal,{clickFilter:l,toggleModal:clickFilterClose,setParams:P,setMatchingList:v,setFilterParams:M})})]})})},{})},{key:"myAroundMatching",label:"내 주변 매칭",children:(0,O.jsx)(function(){var e=(0,a.useState)(null),t=e[0],n=e[1],i=(0,a.useState)([]),r=i[0],o=i[1],l=(0,a.useState)(null),c=l[0],d=l[1];(0,a.useEffect)(function(){var e=document.getElementById("kakao-map"),t="".concat(b.O,"/images/map-pin.png"),i=new kakao.maps.Size(28,40),a={offset:new kakao.maps.Point(27,69)},l=new kakao.maps.MarkerImage(t,i,a);if(navigator.geolocation)navigator.geolocation.getCurrentPosition(function(t){var i=t.coords.latitude,a=t.coords.longitude,c={center:new kakao.maps.LatLng(i,a),level:3},p=new kakao.maps.Map(e,c);n(p),p.setCenter(new kakao.maps.LatLng(i,a));var u=new kakao.maps.Marker({map:p,position:new kakao.maps.LatLng(i,a),image:l}),h=new kakao.maps.InfoWindow({content:'<div class="custom-infowindow"">내 위치</div>'});h.open(p,u),r.push(h);var g=ec.map(function(e){var t=new kakao.maps.Marker({map:p,position:new kakao.maps.LatLng(e.lat,e.lng),image:l}),n=new kakao.maps.InfoWindow({content:'\n								<div class="custom-infowindow">\n									<h4>'.concat(e.title,"</h4>\n									<p>").concat(e.content,"</p>\n								</div>\n							"),removable:!0});return kakao.maps.event.addListener(t,"click",function(){r.forEach(function(e){return e.close()}),n.open(p,t),d(t),p.setCenter(t.getPosition())}),n});o([].concat((0,s.Z)(r),(0,s.Z)(g)))},function(e){console.error("error: "+e.message)});else{console.log("이 브라우저에서는 지원되지 않음");var c={center:new kakao.maps.LatLng(33.450705,126.570677),level:3};n(new kakao.maps.Map(e,c))}},[]);var handleButtonClick=function(e,n){if(t){var i=new kakao.maps.LatLng(e.lat,e.lng);t.setCenter(i),r.forEach(function(e,i){n===i?e.open(t,c):e.close()})}};return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(es,{children:[(0,O.jsx)(ed,{children:(0,O.jsx)("div",{id:"kakao-map",style:{width:"100%",height:"400px"}})}),ec.map(function(e,t){return(0,O.jsx)("div",{children:(0,O.jsx)(MatchingCard,{onClick:function(){return handleButtonClick(e,t)}})},(0,f.Z)())})]})})},{})}];function MainPage(){return(0,U.Z)().movePage,(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(eg,{children:[(0,O.jsx)(ef,{children:(0,O.jsxs)(o.Z,main_objectSpread(main_objectSpread({},eu),{},{children:[(0,O.jsx)(c.F,{heightInit:!0,children:(0,O.jsx)("img",{src:"".concat(b.O,"/images/main-slider-image.png"),alt:"main-slider-img"})}),(0,O.jsx)(c.F,{heightInit:!0,children:(0,O.jsx)("img",{src:"".concat(b.O,"/images/main-slider-image.png"),alt:"main-slider-img"})})]}))}),(0,O.jsx)(em,{children:(0,O.jsx)(ep.o,{defaultActiveKey:"1",items:eh})})]})})}var eg=r.ZP.div.withConfig({displayName:"main__MainViewContainer",componentId:"sc-1e8o9f0-0"})([""]),ef=r.ZP.div.withConfig({displayName:"main__SliderContainer",componentId:"sc-1e8o9f0-1"})(["div.slick-slide{width:",";}"],function(e){return e.theme.isResponsive?(0,j.Q1)("640px"):(0,l.hO)("640px")}),em=r.ZP.div.withConfig({displayName:"main__MainContainer",componentId:"sc-1e8o9f0-2"})(["margin-top:30px;padding:",";"],function(e){return e.theme.isResponsive?"0 ".concat((0,j.Q1)("30px")):"0 ".concat((0,l.hO)("30px"))})},7903:function(e,t,n){"use strict";var i=n(1466);t.Z={regMatchingData:function(e){return i.Z.post("/api/matches",e)},getDetailMatchingList:function(e){return i.Z.get("/api/matches/".concat(e))},getMatchingList:function(e){return i.Z.post("/api/matches/list",e.body,{params:e.params})},modifyMatchingList:function(e,t){return i.Z.patch("/api/matches/".concat(e),t)},deleteMatchingList:function(e){return i.Z.delete("/api/matches/".concat(e))},getMatchingApplyState:function(e){return i.Z.get("/api/matches/".concat(e,"/apply"))},searchAddress:function(e){return i.Z.get("/api/matches/address",{params:{keyword:e.keyword}})}}},2386:function(e,t,n){"use strict";n.d(t,{c:function(){return l}});var i=n(1150),a=n(3281),r=n(8633),o=n(7731),l=i.ZP.span.withConfig({shouldForwardProp:function(e){return"fontsize"!==e}}).withConfig({displayName:"badge__CustomBadge",componentId:"sc-18yfvez-0"})(["display:block;padding:",";height:",";flex-shrink:0;background-color:",";border-radius:5px;color:",";font-family:Pretendard-Regular;font-size:",";display:flex;justify-content:center;align-items:center;"],function(e){return e.theme.isResponsive?"0 ".concat((0,o.Q1)("12px")):"0 ".concat((0,a.hO)("12px"))},function(e){return e.theme.isResponsive?(0,o.Q1)("30px"):(0,a.hO)("30px")},function(e){return e.color||r.Ie},r.L_,function(e){return e.theme.isResponsive?(0,o.Q1)(e.fontsize||r.Mz):(0,a.hO)(e.fontsize||r.Mz)})},481:function(e,t,n){"use strict";n.d(t,{o:function(){return c}});var i=n(1150),a=n(3281),r=n(7135),o=n(7731),l=n(8633),c=(0,i.ZP)(r.Z).withConfig({displayName:"tab__CustomTab",componentId:"sc-1b7inq8-0"})(["width:100% !important;font-size:inherit !important;line-height:1 !important;color:inherit !important;div.ant-tabs-nav{margin:0 !important;background-color:"," !important;padding:"," !important;border-radius:50px !important;&::before{display:none !important;}div.ant-tabs-nav-wrap{display:block !important;&::before{display:none !important;}&::after{display:none !important;}div.ant-tabs-nav-list{display:flex !important;div.ant-tabs-tab{width:"," !important;display:block !important;padding:11px 0 !important;font-size:inherit !important;margin:0 !important;text-align:center !important;font-size:"," !important;font-family:Pretendard-Regular;color:",";&.ant-tabs-tab-active{width:",";text-align:center;background:",";padding:11px 0;border-radius:50px;border:1px solid ",";color:"," !important;.ant-tabs-tab-btn{color:",";}}}div.ant-tabs-ink-bar{display:none !important;}}}div.ant-tabs-nav-operations{display:none !important;}}"],l.um,function(e){return e.theme.isResponsive?"".concat((0,o.Q1)("10px")," ").concat((0,o.Q1)("20px")):"".concat((0,a.hO)("10px")," ").concat((0,a.hO)("20px"))},function(e){return e.theme.isResponsive?(0,o.Q1)("260px"):(0,a.hO)("260px")},function(e){return e.theme.isResponsive?(0,o.Q1)(l.OI):(0,a.hO)(l.OI)},l.Ie,function(e){return e.theme.isResponsive?(0,o.Q1)("260px"):(0,a.hO)("260px")},l.L_,l.K6,l.K6,l.K6)},8031:function(e,t,n){"use strict";var i=n(6318),a=n(5890);t.Z=function(){var e=(0,i.Zl)(a.O),t=(0,i.sJ)(a.O);return{setMessage:function(n,i){e({isHandle:!t.isHandle,type:n,message:i})}}}},6059:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return n(6797)}])}},function(e){e.O(0,[536,19,791,216,662,605,160,135,149,774,888,179],function(){return e(e.s=6059)}),_N_E=e.O()}]);