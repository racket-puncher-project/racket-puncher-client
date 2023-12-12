(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{5314:function(e,i,n){"use strict";n.d(i,{Z:function(){return ModalBox}}),n(7294);var t=n(1150),o=n(3281),r=n(9605),s=n(8381),a=n(8633),d=n(9787),c=n(7731),l=n(5893);function ModalBox(e){var handleCancel=function(){e.toggleModal(),e.onCancel()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p,{style:{width:"580px",height:e.heightType?"90vh":"auto",overflowY:e.heightType?"scroll":"visible"},closeIcon:!1,title:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(h,{children:(0,l.jsxs)("div",{className:"align-box",children:[e.title&&(0,l.jsx)("p",{children:e.title}),(0,l.jsx)(s.F,{width:"34px",height:"34px",onClick:handleCancel,children:(0,l.jsx)("img",{src:"".concat(d.O,"/images/close-icon.png"),alt:"close"})})]})})}),open:e.isOpen,onOk:function(){e.toggleModal(),e.onOk()},onCancel:handleCancel,centered:!0,maskClosable:!1,footer:e.footerButtons||[],children:e.children})})}var p=(0,t.ZP)(r.Z).withConfig({shouldForwardProp:function(e){return"heightType"!==e}}).withConfig({displayName:"modal__CustomModal",componentId:"sc-acqo2g-0"})(["div.ant-modal-content{border-radius:20px !important;box-shadow:0 0 20px 0 rgba(0,0,0,0.15) !important;padding:"," !important;height:100%;overflow-y:scroll;div.ant-modal-header{padding:20px 0;}div.ant-modal-body{height:100%;}}"],function(e){return e.theme.isResponsive?(0,c.Q1)("20px"):(0,o.hO)("20px")}),h=t.ZP.div.withConfig({displayName:"modal__CustomHeaderBox",componentId:"sc-acqo2g-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-1o0dgyy-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],function(e){return e.theme.isResponsive?(0,c.Q1)(a.hQ):(0,o.hO)("".concat(a.hQ))},a.SK)},809:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return DetailMatching}});var t=n(9499),o=n(6835),r=n(1150),s=n(7294),a=n(3281),d=n(1223),c=n(5948),l=n(8381),p=n(8633),h=n(7396),x=n(5314),m=n(9787),f=n(7731),g=n(5893);function ownKeys(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function _objectSpread(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(n),!0).forEach(function(i){(0,t.Z)(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}var u=[{id:"0",title:"타이틀 1",index:1},{id:"1",title:"타이틀 2",index:2},{id:"2",title:"타이틀 3",index:3},{id:"3",title:"타이틀 4",index:4},{id:"4",title:"타이틀 5",index:5}];function DetailMatching(){var e=(0,s.useState)(!1),i=e[0],n=e[1],t=(0,s.useState)({beforeList:[],afterList:[]}),r=t[0],a=t[1];return(0,s.useEffect)(function(){a({beforeList:u,afterList:[]})},[]),(0,s.useEffect)(function(){var e=document.getElementById("staticMap"),i=new kakao.maps.LatLng(33.450701,126.570667),n={center:new kakao.maps.LatLng(33.450705,126.570677),level:2,marker:{position:i}};new kakao.maps.StaticMap(e,n)},[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(b,{children:[(0,g.jsx)(j,{children:(0,g.jsxs)(v,{children:[(0,g.jsxs)(y,{children:[(0,g.jsx)(l.F,{width:"140px",height:"140px",children:(0,g.jsx)("img",{src:"".concat(m.O,"/images/profile-img.png"),alt:"profile-image"})}),(0,g.jsx)("p",{children:"고숭이"})]}),(0,g.jsx)(k,{children:(0,g.jsx)(h.h$,{colorstyle:"is-green",children:"등록자 정보"})})]})}),(0,g.jsxs)(w,{children:[(0,g.jsxs)("p",{children:["“모집 기간이 ",(0,g.jsx)("span",{children:"2"}),"일 ",(0,g.jsx)("span",{children:"7"}),"시간 남았습니다.“"]}),(0,g.jsx)(d.Z,{strokeLinecap:"round",percent:75,showInfo:!1,strokeColor:p.K6})]}),(0,g.jsxs)(_,{children:[(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchTitle",children:"제목"}),(0,g.jsx)(C,{})]}),(0,g.jsxs)(M,{children:[(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchAge",children:"연령대"}),(0,g.jsx)(C,{})]}),(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchNTRP",children:"NTRP"}),(0,g.jsx)(C,{})]})]}),(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchItem",children:"매칭 항목"}),(0,g.jsx)(C,{})]}),(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchAddree",children:"주소"}),(0,g.jsx)(C,{})]}),(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchAddree",children:"길 찾기"}),(0,g.jsx)(O,{children:(0,g.jsx)("div",{id:"staticMap",style:{width:"100%",height:"400px"}})})]}),(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchInfo",children:"구장 이미지"}),(0,g.jsx)(C,{height:"300px"})]}),(0,g.jsxs)(P,{children:[(0,g.jsx)("label",{htmlFor:"detailMatchInfo",children:"본문 내용"}),(0,g.jsx)(C,{height:"300px"})]})]}),(0,g.jsx)(N,{children:(0,g.jsx)(h.h$,{onClick:function(){return n(!0)},children:"모집 현황"})}),(0,g.jsx)(x.Z,{isOpen:i,heightType:!0,toggleModal:function(){n(function(e){return!e})},onCancel:function(){n(!1)},children:(0,g.jsxs)(R,{children:[(0,g.jsx)("div",{className:"modalBoxes",children:(0,g.jsx)(c.Z5,{onDragEnd:function(e){var i=e.source,n=e.destination;if(n){var t=i.droppableId,s=n.droppableId,d=JSON.parse(JSON.stringify(r)),c=d[t].splice(i.index,1),l=(0,o.Z)(c,1)[0];d[s].splice(n.index,0,l),a(d)}},children:Object.keys(r).map(function(e){return(0,g.jsxs)(I,{children:[(0,g.jsxs)("div",{className:"is-modal-wrap-header",children:[(0,g.jsx)("p",{children:"신청인원"}),(0,g.jsx)("p",{children:"10명"})]}),(0,g.jsx)(c.bK,{droppableId:e,children:function(i){return(0,g.jsx)("div",_objectSpread(_objectSpread({className:"is-modal-wrap-body"},i.droppableProps),{},{ref:i.innerRef,children:r[e].map(function(e,i){return(0,g.jsx)(c._l,{draggableId:e.id,index:i,children:function(i){return(0,g.jsx)("div",_objectSpread(_objectSpread(_objectSpread({ref:i.innerRef},i.draggableProps),i.dragHandleProps),{},{children:(0,g.jsxs)(Q,{children:[(0,g.jsxs)("div",{className:"box-top",children:[(0,g.jsx)(l.F,{width:"80px",height:"80px",children:(0,g.jsx)("img",{src:"/images/main-img1.png",alt:"image"})}),(0,g.jsxs)("p",{children:["뿡뿡이 ",e.index]})]}),(0,g.jsxs)("div",{className:"box-footer",children:[(0,g.jsx)("div",{className:"is-btn black",children:"정보"}),(0,g.jsx)("div",{className:"is-btn gray",children:"신고"})]})]})}))}},e.id)})}))}},e)]},e)})})}),(0,g.jsx)(k,{children:(0,g.jsx)(h.h$,{colorstyle:"is-black",children:"모집완료"})})]})})]})})}var b=r.ZP.div.withConfig({displayName:"id__DetailMatchingContainer",componentId:"sc-11oq75o-0"})(["margin-top:38px;padding-bottom:100px;"]),j=r.ZP.div.withConfig({displayName:"id__ProfileContainer",componentId:"sc-11oq75o-1"})(["margin-bottom:30px;"]),v=r.ZP.div.withConfig({displayName:"id__ProfileBox",componentId:"sc-11oq75o-2"})(["height:",";padding:",";background-color:",";border-radius:20px;box-shadow:0px 0px 20px 0px rgba(0,0,0,0.15);display:flex;flex-direction:column;justify-content:space-between;"],function(e){return e.theme.isResponsive?(0,f.Q1)("347px"):(0,a.hO)("347px")},function(e){return e.theme.isResponsive?"".concat((0,f.Q1)("40px")," ").concat((0,f.Q1)("40px")):"".concat((0,a.hO)("40px")," ").concat((0,a.hO)("40px"))},p.um),y=r.ZP.div.withConfig({displayName:"id__ImageWrap",componentId:"sc-11oq75o-3"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:13px;p{font-family:Pretendard-Medium;font-size:",";color:",";}"],function(e){return e.theme.isResponsive?(0,f.Q1)(p.Pg):(0,a.hO)(p.Pg)},p.SK);r.ZP.div.withConfig({displayName:"id__ControlBox",componentId:"sc-11oq75o-4"})(["display:flex;justify-content:space-between;margin:30px 0;"]);var w=r.ZP.div.withConfig({displayName:"id__ProgressBarContainer",componentId:"sc-11oq75o-5"})(["p{font-family:Pretendard-Medium;color:",";font-size:",";text-align:center;margin-bottom:20px;span{color:",";}}"],p.K_,function(e){return e.theme.isResponsive?(0,f.Q1)(p.Pg):(0,a.hO)(p.Pg)},p.K6),_=r.ZP.div.withConfig({displayName:"id__ContentContainer",componentId:"sc-11oq75o-6"})(["margin-top:20px;"]),O=r.ZP.div.withConfig({displayName:"id__MapBox",componentId:"sc-11oq75o-7"})([""]),P=r.ZP.div.withConfig({displayName:"id__DetailMatchItemBox",componentId:"sc-11oq75o-8"})(["display:flex;flex-direction:column;padding-bottom:20px;label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:10px;color:",";}"],function(e){return e.theme.isResponsive?(0,f.Q1)(p.Mz):(0,a.hO)(p.Mz)},p.K_),C=r.ZP.div.withConfig({displayName:"id__DetailMatchContent",componentId:"sc-11oq75o-9"})(["height:",";border:1px solid ",";background:",";border-radius:5px;padding:0 15px;&:focus{border:1px solid ",";}"],function(e){return e.theme.isResponsive?e.height?(0,f.Q1)(e.height):(0,f.Q1)("50px"):e.height?(0,a.hO)(e.height):(0,a.hO)("50px")},p.B_,p._2,p.K6),M=r.ZP.div.withConfig({displayName:"id__FlexBox",componentId:"sc-11oq75o-10"})(["display:flex;justify-content:space-between;div.id__DetailMatchItemBox-sc-11oq75o-8{flex-basis:280px;&:first-child{margin-right:",";}}"],function(e){return e.theme.isResponsive?(0,f.Q1)("20px"):(0,a.hO)("20px")}),k=r.ZP.div.withConfig({displayName:"id__ButtonBox",componentId:"sc-11oq75o-11"})([""]),N=r.ZP.div.withConfig({displayName:"id__FloatBox",componentId:"sc-11oq75o-12"})(["max-width:",";width:100%;padding:0 30px;position:fixed;left:50%;transform:translateX(-50%);bottom:20px;z-index:1000;"],function(e){return e.theme.isResponsive?(0,f.Q1)("640px"):(0,a.hO)("640px")}),I=r.ZP.div.withConfig({displayName:"id__ModalWrapBox",componentId:"sc-11oq75o-13"})(["position:relative;width:100%;height:",";border-radius:20px;background:#f9f9f9;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.25);overflow-y:scroll;margin-bottom:20px;&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;div.is-modal-wrap-header{position:sticky;top:0px;max-width:",";width:100%;display:flex;align-items:center;justify-content:space-between;background:#84a840;border-radius:20px 20px 0 0;padding:"," ",";padding:",";p{color:#fff;font-size:",";}}div.is-modal-wrap-body{padding:",";}"],function(e){return e.theme.isResponsive?(0,f.Q1)("410px"):(0,a.hO)("410px")},function(e){return e.theme.isResponsive?(0,f.Q1)("540px"):(0,a.hO)("540px")},(0,a.hO)("16px"),(0,a.hO)("20px"),function(e){return e.theme.isResponsive?"".concat((0,f.Q1)("16px")," ").concat((0,f.Q1)("20px")):"".concat((0,a.hO)("16px")," ").concat((0,a.hO)("20px"))},function(e){return e.theme.isResponsive?(0,f.Q1)(p.kM):(0,a.hO)(p.kM)},function(e){return e.theme.isResponsive?"".concat((0,f.Q1)("20px")," ").concat((0,f.Q1)("20px")):"".concat((0,a.hO)("20px")," ").concat((0,a.hO)("20px"))}),Q=r.ZP.div.withConfig({displayName:"id__ModalWrapItem",componentId:"sc-11oq75o-14"})(["width:100%;border-radius:10px;border:1px solid #dcdcdc;background:#fff;padding:",";margin-bottom:20px;cursor:pointer;div.box-top{display:flex;align-items:center;p{margin-left:",";font-family:Pretendard-Medium;font-size:",";}}div.box-footer{display:flex;align-items:center;margin-top:10px;div.is-btn{width:100%;text-align:center;border-radius:5px;font-family:Pretendard-Medium;font-size:",";padding:",";&.black{background-color:black;color:#fff;margin-right:",";}&.gray{border:1px solid #dcdcdc;color:#999;}}}"],function(e){return e.theme.isResponsive?(0,f.Q1)("10px"):(0,a.hO)("10px")},function(e){return e.theme.isResponsive?(0,f.Q1)("20px"):(0,a.hO)("20px")},function(e){return e.theme.isResponsive?(0,f.Q1)(p.Pg):(0,a.hO)(p.Pg)},function(e){return e.theme.isResponsive?(0,f.Q1)(p.kM):(0,a.hO)(p.kM)},function(e){return e.theme.isResponsive?"".concat((0,f.Q1)("10px")," 0"):"".concat((0,a.hO)("10px")," 0")},function(e){return e.theme.isResponsive?(0,f.Q1)("10px"):(0,a.hO)("10px")}),R=r.ZP.div.withConfig({displayName:"id__ModalAlignContainer",componentId:"sc-11oq75o-15"})(["height:100%;display:flex;justify-content:space-between;flex-direction:column;"])},5572:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/detailMatch/[id]",function(){return n(809)}])}},function(e){e.O(0,[630,19,605,178,774,888,179],function(){return e(e.s=5572)}),_N_E=e.O()}]);