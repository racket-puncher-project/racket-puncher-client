(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{5314:function(e,n,i){"use strict";i.d(n,{Z:function(){return ModalBox}}),i(7294);var t=i(1150),o=i(3281),r=i(9605),s=i(8381),a=i(8633),c=i(9787),d=i(7731),l=i(5893);function ModalBox(e){var handleCancel=function(){e.toggleModal(),e.onCancel()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p,{style:{width:"580px",height:e.heightType?"90vh":"auto",overflowY:e.heightType?"scroll":"visible"},closeIcon:!1,title:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(h,{children:(0,l.jsxs)("div",{className:"align-box",children:[e.title&&(0,l.jsx)("p",{children:e.title}),(0,l.jsx)(s.F,{width:"34px",height:"34px",onClick:handleCancel,children:(0,l.jsx)("img",{src:"".concat(c.O,"/images/close-icon.png"),alt:"close"})})]})})}),open:e.isOpen,onOk:function(){e.toggleModal(),e.onOk()},onCancel:handleCancel,centered:!0,maskClosable:!1,footer:e.footerButtons||[],children:e.children})})}var p=(0,t.ZP)(r.Z).withConfig({shouldForwardProp:function(e){return"heightType"!==e}}).withConfig({displayName:"modal__CustomModal",componentId:"sc-acqo2g-0"})(["div.ant-modal-content{border-radius:20px !important;box-shadow:0 0 20px 0 rgba(0,0,0,0.15) !important;padding:"," !important;height:100%;overflow-y:scroll;div.ant-modal-header{padding:",";}div.ant-modal-body{height:100%;}}"],function(e){return e.theme.isResponsive?(0,d.Q1)("20px"):(0,o.hO)("20px")},function(e){return e.theme.isResponsive?"".concat((0,d.Q1)("20px")," 0"):"".concat((0,o.hO)("20px")," 0")}),h=t.ZP.div.withConfig({displayName:"modal__CustomHeaderBox",componentId:"sc-acqo2g-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-1o0dgyy-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],function(e){return e.theme.isResponsive?(0,d.Q1)(a.hQ):(0,o.hO)("".concat(a.hQ))},a.SK)},8191:function(e,n,i){"use strict";i.d(n,{Z:function(){return UserInfoModal}}),i(7294);var t=i(1150),o=i(3281),r=i(5314),s=i(8381),a=i(8633),c=i(7731),d=i(5893);function UserInfoModal(e){e.siteUserName;var n=e.nickname,i=e.address,t=e.zipCode,o=e.ntrp,a=e.gender,c=e.mannerScore,v=e.ageGroup,b=e.profileImg,j=e.isOpen,y=e.toggleModal,O=e.onCancel;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.Z,{isOpen:j,toggleModal:y,onCancel:O,children:(0,d.jsxs)(l,{children:[(0,d.jsx)(p,{children:(0,d.jsx)(s.F,{width:"150px",height:"190px",children:(0,d.jsx)("img",{src:b,alt:"프로필 이미지"})})}),(0,d.jsxs)(h,{children:[(0,d.jsxs)(m,{children:[(0,d.jsx)("span",{children:n})," / ",(0,d.jsx)("span",{children:a}),(0,d.jsx)(g,{children:o})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(x,{children:"지역: "}),(0,d.jsxs)(f,{children:[i," (",t,")"]})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(x,{children:"연령: "}),(0,d.jsx)(f,{children:v})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(x,{children:"매너: "}),(0,d.jsxs)(f,{children:[c," 점"]})]})]})]})})})}var l=t.ZP.div.withConfig({displayName:"userInfoModal__UserInfoContainer",componentId:"sc-1fcdm8q-0"})(["display:flex;justify-content:space-between;"]),p=t.ZP.div.withConfig({displayName:"userInfoModal__ProfilePicArea",componentId:"sc-1fcdm8q-1"})(["max-width:",";max-height:",";border-radius:20px;overflow:hidden;"],function(e){return e.theme.isResponsive?(0,c.Q1)("220px"):(0,o.hO)("220px")},function(e){return e.theme.isResponsive?(0,c.Q1)("220px"):(0,o.hO)("220px")}),h=t.ZP.ul.withConfig({displayName:"userInfoModal__UserInfoList",componentId:"sc-1fcdm8q-2"})(["display:flex;flex-direction:column;padding:",";"],function(e){return e.theme.isResponsive?"".concat((0,c.Q1)("7px")," 0"):"".concat((0,o.hO)("7px")," 0")}),u=t.ZP.li.withConfig({displayName:"userInfoModal__UserInfoItem",componentId:"sc-1fcdm8q-3"})(["margin-bottom:",";font-family:",";font-size:",";color:",";"],function(e){return e.theme.isResponsive?(0,c.Q1)("15px"):(0,o.hO)("15px")},a.RU,function(e){return e.theme.isResponsive?(0,c.Q1)(a.Pg):(0,o.hO)(a.Pg)},a.SK),x=t.ZP.span.withConfig({displayName:"userInfoModal__ItemName",componentId:"sc-1fcdm8q-4"})(["min-width:fit-content;font-family:inherit;font-size:",";color:",";"],function(e){return e.theme.isResponsive?(0,c.Q1)(a.OI):(0,o.hO)(a.OI)},a.K6),f=t.ZP.span.withConfig({displayName:"userInfoModal__ItemContent",componentId:"sc-1fcdm8q-5"})(["min-width:fit-content;font-family:inherit;font-size:",";color:",";"],function(e){return e.theme.isResponsive?(0,c.Q1)(a.OI):(0,o.hO)(a.OI)},a.SK),m=(0,t.ZP)(u).withConfig({displayName:"userInfoModal__NickNameArea",componentId:"sc-1fcdm8q-6"})(["display:flex;flex-direction:row;align-items:center;"]),g=t.ZP.div.withConfig({displayName:"userInfoModal__Badge",componentId:"sc-1fcdm8q-7"})(["display:inline-block;width:fit-content;height:",";padding:",";margin-left:",";background-color:",";border-radius:10px;text-align:center;color:",";font-size:",";line-height:",";font-family:",";"],function(e){return e.theme.isResponsive?(0,c.Q1)("20px"):(0,o.hO)("20px")},function(e){return e.theme.isResponsive?"0 ".concat((0,c.Q1)("5px")):"0 ".concat((0,o.hO)("5px"))},function(e){return e.theme.isResponsive?(0,c.Q1)("10px"):(0,o.hO)("10px")},a.K6,a.L_,function(e){return e.theme.isResponsive?(0,c.Q1)(a.Kw):(0,o.hO)(a.Kw)},function(e){return e.theme.isResponsive?(0,c.Q1)("18px"):(0,o.hO)("18px")},a.RU)},809:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return DetailMatching}});var t=i(9499),o=i(29),r=i(6835),s=i(7794),a=i.n(s),c=i(1150),d=i(7294),l=i(3281),p=i(1223),h=i(5948),u=i(8381),x=i(8633),f=i(7396),m=i(5314),g=i(7731),v=i(7903),b=i(1163),j=i(8191),y=i(5893);function ownKeys(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,t)}return i}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(i),!0).forEach(function(n){(0,t.Z)(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}var O=[{id:"0",title:"타이틀 1",index:1},{id:"1",title:"타이틀 2",index:2},{id:"2",title:"타이틀 3",index:3},{id:"3",title:"타이틀 4",index:4},{id:"4",title:"타이틀 5",index:5}];function DetailMatching(){var e,n,i,t,s,c,l,g,L,z,D,K,T,U,A=(0,b.useRouter)(),G=(0,d.useState)(!1),H=G[0],W=G[1],X=(0,d.useState)(),$=X[0],J=X[1],Y=(0,d.useState)(!1),V=Y[0],ee=Y[1],en=(0,d.useState)({beforeList:[],afterList:[]}),ei=en[0],et=en[1],eo=(e=(0,o.Z)(a().mark(function _callee(e){var n,i,t,o;return a().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.Z.getDetailMatchingList(e);case 3:J((n=r.sent).data.response),console.log("res.data.response",n.data.response),i=document.getElementById("staticMap"),t={position:new kakao.maps.LatLng(n.data.response.lat,n.data.response.lon)},o={center:new kakao.maps.LatLng(n.data.response.lat,n.data.response.lon),level:2,marker:t},new kakao.maps.StaticMap(i,o),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),console.log("e",r.t0);case 16:case"end":return r.stop()}},_callee,null,[[0,13]])})),function(n){return e.apply(this,arguments)});return(0,d.useEffect)(function(){et({beforeList:O,afterList:[]})},[]),(0,d.useEffect)(function(){A.isReady&&eo(A.query.id)},[A.query]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(w,{children:[(0,y.jsx)(_,{children:(0,y.jsxs)(I,{children:[(0,y.jsxs)(R,{children:[(0,y.jsx)(u.F,{width:"140px",height:"140px",children:(0,y.jsx)("img",{src:null==$?void 0:null===(n=$.creatorInfo)||void 0===n?void 0:n.profileImg,alt:"profile-image"})}),(0,y.jsx)("p",{children:null==$?void 0:null===(i=$.creatorInfo)||void 0===i?void 0:i.nickname})]}),(0,y.jsx)(q,{children:(0,y.jsx)(f.h$,{colorstyle:"is-green",onClick:function(){return W(!0)},children:"등록자 정보"})})]})}),(0,y.jsxs)(M,{children:[(0,y.jsxs)("p",{children:["“모집 기간이 ",(0,y.jsx)("span",{children:"2"}),"일 ",(0,y.jsx)("span",{children:"7"}),"시간 남았습니다.“"]}),(0,y.jsx)(p.Z,{strokeLinecap:"round",percent:75,showInfo:!1,strokeColor:x.K6})]}),(0,y.jsxs)(P,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchTitle",children:"제목"}),(0,y.jsx)(k,{children:null==$?void 0:$.title})]}),(0,y.jsxs)(Z,{children:[(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchAge",children:"연령대"}),(0,y.jsx)(k,{children:null===(t=[{id:"TWENTIES",label:"20대"},{id:"THIRTIES",label:"30대"},{id:"FORTIES",label:"40대"},{id:"SENIOR",label:"50대"}].find(function(e){return e.id===(null==$?void 0:$.ageGroup)}))||void 0===t?void 0:t.label})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchNTRP",children:"NTRP"}),(0,y.jsx)(k,{children:null==$?void 0:$.ntrp})]})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchItem",children:"매칭 항목"}),(0,y.jsx)(k,{children:null===(s=[{id:"SINGLE",label:"단식"},{id:"DOUBLE",label:"복식"},{id:"MIXED_DOUBLE",label:"혼성 복식"},{id:"OTHER",label:"기타"}].find(function(e){return e.id===(null==$?void 0:$.matchingType)}))||void 0===s?void 0:s.label})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchAddree",children:"주소"}),(0,y.jsx)(k,{children:null==$?void 0:$.location})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchAddree",children:"길 찾기"}),(0,y.jsx)(Q,{children:(0,y.jsx)("div",{id:"staticMap",style:{width:"100%",height:"400px"}})})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchInfo",children:"구장 이미지"}),(0,y.jsx)(k,{height:"300px",children:(0,y.jsx)("div",{className:"img-box",style:{backgroundImage:"url(".concat(null==$?void 0:$.locationImg,")")}})})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)("label",{htmlFor:"detailMatchInfo",children:"본문 내용"}),(0,y.jsx)(N,{height:"300px",children:null==$?void 0:$.content})]})]}),(0,y.jsx)(S,{children:(0,y.jsx)(f.h$,{onClick:function(){return ee(!0)},children:"모집 현황"})}),(0,y.jsx)(j.Z,{siteUserName:null==$?void 0:null===(c=$.creatorInfo)||void 0===c?void 0:c.siteUserName,nickname:null==$?void 0:null===(l=$.creatorInfo)||void 0===l?void 0:l.nickname,address:null==$?void 0:null===(g=$.creatorInfo)||void 0===g?void 0:g.address,zipCode:null==$?void 0:null===(L=$.creatorInfo)||void 0===L?void 0:L.zipCode,ntrp:null==$?void 0:null===(z=$.creatorInfo)||void 0===z?void 0:z.ntrp,gender:null==$?void 0:null===(D=$.creatorInfo)||void 0===D?void 0:D.gender,mannerScore:null==$?void 0:null===(K=$.creatorInfo)||void 0===K?void 0:K.mannerScore,ageGroup:null==$?void 0:null===(T=$.creatorInfo)||void 0===T?void 0:T.ageGroup,profileImg:null==$?void 0:null===(U=$.creatorInfo)||void 0===U?void 0:U.profileImg,isOpen:H,toggleModal:function(){W(!H)},onCancel:function(){return W(!1)}}),(0,y.jsx)(m.Z,{isOpen:V,heightType:!0,toggleModal:function(){ee(function(e){return!e})},onCancel:function(){ee(!1)},children:(0,y.jsxs)(F,{children:[(0,y.jsx)("div",{className:"modalBoxes",children:(0,y.jsx)(h.Z5,{onDragEnd:function(e){var n=e.source,i=e.destination;if(i){var t=n.droppableId,o=i.droppableId,s=JSON.parse(JSON.stringify(ei)),a=s[t].splice(n.index,1),c=(0,r.Z)(a,1)[0];s[o].splice(i.index,0,c),et(s)}},children:Object.keys(ei).map(function(e){return(0,y.jsxs)(B,{children:[(0,y.jsxs)("div",{className:"is-modal-wrap-header",children:[(0,y.jsx)("p",{children:"신청인원"}),(0,y.jsx)("p",{children:"10명"})]}),(0,y.jsx)(h.bK,{droppableId:e,children:function(n){return(0,y.jsx)("div",_objectSpread(_objectSpread({className:"is-modal-wrap-body"},n.droppableProps),{},{ref:n.innerRef,children:ei[e].map(function(e,n){return(0,y.jsx)(h._l,{draggableId:e.id,index:n,children:function(n){return(0,y.jsx)("div",_objectSpread(_objectSpread(_objectSpread({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:(0,y.jsxs)(E,{children:[(0,y.jsxs)("div",{className:"box-top",children:[(0,y.jsx)(u.F,{width:"80px",height:"80px",children:(0,y.jsx)("img",{src:"/images/main-img1.png",alt:"image"})}),(0,y.jsxs)("p",{children:["뿡뿡이 ",e.index]})]}),(0,y.jsxs)("div",{className:"box-footer",children:[(0,y.jsx)("div",{className:"is-btn black",children:"정보"}),(0,y.jsx)("div",{className:"is-btn gray",children:"신고"})]})]})}))}},e.id)})}))}},e)]},e)})})}),(0,y.jsx)(q,{children:(0,y.jsx)(f.h$,{colorstyle:"is-black",children:"모집완료"})})]})})]})})}var w=c.ZP.div.withConfig({displayName:"id__DetailMatchingContainer",componentId:"sc-11oq75o-0"})(["margin-top:",";padding-bottom:",";"],function(e){return e.theme.isResponsive?(0,g.Q1)("38px"):(0,l.hO)("38px")},function(e){return e.theme.isResponsive?(0,g.Q1)("100px"):(0,l.hO)("100px")}),_=c.ZP.div.withConfig({displayName:"id__ProfileContainer",componentId:"sc-11oq75o-1"})(["margin-bottom:",";"],function(e){return e.theme.isResponsive?(0,g.Q1)("30px"):(0,l.hO)("30px")}),I=c.ZP.div.withConfig({displayName:"id__ProfileBox",componentId:"sc-11oq75o-2"})(["height:",";padding:",";background-color:",";border-radius:20px;box-shadow:0px 0px 20px 0px rgba(0,0,0,0.15);display:flex;flex-direction:column;justify-content:space-between;"],function(e){return e.theme.isResponsive?(0,g.Q1)("347px"):(0,l.hO)("347px")},function(e){return e.theme.isResponsive?"".concat((0,g.Q1)("40px")," ").concat((0,g.Q1)("40px")):"".concat((0,l.hO)("40px")," ").concat((0,l.hO)("40px"))},x.um),R=c.ZP.div.withConfig({displayName:"id__ImageWrap",componentId:"sc-11oq75o-3"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",";p{font-family:Pretendard-Medium;font-size:",";color:",";}"],function(e){return e.theme.isResponsive?(0,g.Q1)("13px"):(0,l.hO)("13px")},function(e){return e.theme.isResponsive?(0,g.Q1)(x.Pg):(0,l.hO)(x.Pg)},x.SK);c.ZP.div.withConfig({displayName:"id__ControlBox",componentId:"sc-11oq75o-4"})(["display:flex;justify-content:space-between;margin:",";"],function(e){return e.theme.isResponsive?"".concat((0,g.Q1)("30px")," 0"):"".concat((0,l.hO)("30px")," 0")});var M=c.ZP.div.withConfig({displayName:"id__ProgressBarContainer",componentId:"sc-11oq75o-5"})(["p{font-family:Pretendard-Medium;color:",";font-size:",";text-align:center;margin-bottom:",";span{color:",";}}"],x.K_,function(e){return e.theme.isResponsive?(0,g.Q1)(x.Pg):(0,l.hO)(x.Pg)},function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")},x.K6),P=c.ZP.div.withConfig({displayName:"id__ContentContainer",componentId:"sc-11oq75o-6"})(["margin-top:",";"],function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")}),Q=c.ZP.div.withConfig({displayName:"id__MapBox",componentId:"sc-11oq75o-7"})([""]),C=c.ZP.div.withConfig({displayName:"id__DetailMatchItemBox",componentId:"sc-11oq75o-8"})(["display:flex;flex-direction:column;padding-bottom:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:",";color:",";}"],function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")},function(e){return e.theme.isResponsive?(0,g.Q1)(x.Mz):(0,l.hO)(x.Mz)},function(e){return e.theme.isResponsive?(0,g.Q1)("10px"):(0,l.hO)("10px")},x.K_),k=c.ZP.div.withConfig({displayName:"id__DetailMatchContent",componentId:"sc-11oq75o-9"})(["height:",";line-height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";overflow:hidden;div.img-box{height:100%;background-position:center;background-repeat:no-repeat;background-size:100% 100%;}&:focus{border:1px solid ",";}"],function(e){return e.theme.isResponsive?e.height?(0,g.Q1)(e.height):(0,g.Q1)("50px"):e.height?(0,l.hO)(e.height):(0,l.hO)("50px")},function(e){return e.theme.isResponsive?e.height?(0,g.Q1)(e.height):(0,g.Q1)("50px"):e.height?(0,l.hO)(e.height):(0,l.hO)("50px")},x.B_,x._2,function(e){return e.theme.isResponsive?"0 ".concat((0,g.Q1)("15px")):"0 ".concat((0,l.hO)("15px"))},x.K6),N=c.ZP.div.withConfig({displayName:"id__DetailMatchContentArea",componentId:"sc-11oq75o-10"})(["height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";padding-top:10px;&:focus{border:1px solid ",";}"],function(e){return e.theme.isResponsive?e.height?(0,g.Q1)(e.height):(0,g.Q1)("50px"):e.height?(0,l.hO)(e.height):(0,l.hO)("50px")},x.B_,x._2,function(e){return e.theme.isResponsive?"0 ".concat((0,g.Q1)("15px")):"0 ".concat((0,l.hO)("15px"))},x.K6),Z=c.ZP.div.withConfig({displayName:"id__FlexBox",componentId:"sc-11oq75o-11"})(["display:flex;justify-content:space-between;div.id__DetailMatchItemBox-sc-11oq75o-8{flex-basis:",";&:first-child{margin-right:",";}}"],function(e){return e.theme.isResponsive?(0,g.Q1)("280px"):(0,l.hO)("280px")},function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")}),q=c.ZP.div.withConfig({displayName:"id__ButtonBox",componentId:"sc-11oq75o-12"})([""]),S=c.ZP.div.withConfig({displayName:"id__FloatBox",componentId:"sc-11oq75o-13"})(["max-width:",";width:100%;padding:",";position:fixed;left:50%;transform:translateX(-50%);bottom:",";z-index:1000;"],function(e){return e.theme.isResponsive?(0,g.Q1)("640px"):(0,l.hO)("640px")},function(e){return e.theme.isResponsive?"0 ".concat((0,g.Q1)("30px")):"0 ".concat((0,l.hO)("30px"))},function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")}),B=c.ZP.div.withConfig({displayName:"id__ModalWrapBox",componentId:"sc-11oq75o-14"})(["position:relative;width:100%;height:",";border-radius:20px;background:#f9f9f9;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.25);overflow-y:scroll;margin-bottom:",";&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;div.is-modal-wrap-header{position:sticky;top:0;max-width:",";width:100%;display:flex;align-items:center;justify-content:space-between;background:#84a840;border-radius:20px 20px 0 0;padding:"," ",";padding:",";p{color:#fff;font-size:",";}}div.is-modal-wrap-body{padding:",";}"],function(e){return e.theme.isResponsive?(0,g.Q1)("410px"):(0,l.hO)("410px")},function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")},function(e){return e.theme.isResponsive?(0,g.Q1)("540px"):(0,l.hO)("540px")},(0,l.hO)("16px"),(0,l.hO)("20px"),function(e){return e.theme.isResponsive?"".concat((0,g.Q1)("16px")," ").concat((0,g.Q1)("20px")):"".concat((0,l.hO)("16px")," ").concat((0,l.hO)("20px"))},function(e){return e.theme.isResponsive?(0,g.Q1)(x.kM):(0,l.hO)(x.kM)},function(e){return e.theme.isResponsive?"".concat((0,g.Q1)("20px")," ").concat((0,g.Q1)("20px")):"".concat((0,l.hO)("20px")," ").concat((0,l.hO)("20px"))}),E=c.ZP.div.withConfig({displayName:"id__ModalWrapItem",componentId:"sc-11oq75o-15"})(["width:100%;border-radius:10px;border:1px solid #dcdcdc;background:#fff;padding:",";margin-bottom:",";cursor:pointer;div.box-top{display:flex;align-items:center;p{margin-left:",";font-family:Pretendard-Medium;font-size:",";}}div.box-footer{display:flex;align-items:center;margin-top:",";div.is-btn{width:100%;text-align:center;border-radius:5px;font-family:Pretendard-Medium;font-size:",";padding:",";&.black{background-color:black;color:#fff;margin-right:",";}&.gray{border:1px solid #dcdcdc;color:#999;}}}"],function(e){return e.theme.isResponsive?(0,g.Q1)("10px"):(0,l.hO)("10px")},function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")},function(e){return e.theme.isResponsive?(0,g.Q1)("20px"):(0,l.hO)("20px")},function(e){return e.theme.isResponsive?(0,g.Q1)(x.Pg):(0,l.hO)(x.Pg)},function(e){return e.theme.isResponsive?(0,g.Q1)("10px"):(0,l.hO)("10px")},function(e){return e.theme.isResponsive?(0,g.Q1)(x.kM):(0,l.hO)(x.kM)},function(e){return e.theme.isResponsive?"".concat((0,g.Q1)("10px")," 0"):"".concat((0,l.hO)("10px")," 0")},function(e){return e.theme.isResponsive?(0,g.Q1)("10px"):(0,l.hO)("10px")}),F=c.ZP.div.withConfig({displayName:"id__ModalAlignContainer",componentId:"sc-11oq75o-16"})(["height:100%;display:flex;justify-content:space-between;flex-direction:column;"])},7903:function(e,n,i){"use strict";var t=i(1466);n.Z={regMatchingData:function(e){return t.Z.post("/api/matches",e)},getDetailMatchingList:function(e){return t.Z.get("/api/matches/detail/".concat(e))},getMatchingList:function(e){return t.Z.post("/api/matches/list",e.body,{params:e.params})},modifyMatchingList:function(e,n){return t.Z.patch("/api/matches/".concat(e),n)},deleteMatchingList:function(e){return t.Z.delete("/api/matches/".concat(e))},getMatchingApplyState:function(e){return t.Z.get("/api/matches/".concat(e,"/apply"))},searchAddress:function(e){return t.Z.get("/api/matches/address",{params:{keyword:e.keyword}})},getMapMatchingList:function(e){return t.Z.post("/api/matches/list/map",e)}}},5572:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/detailMatch/[id]",function(){return i(809)}])}},function(e){e.O(0,[630,19,605,178,774,888,179],function(){return e(e.s=5572)}),_N_E=e.O()}]);