(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{4238:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return PostMatching}});var a=n(9499),i=n(7294),r=n(6310),o=n(7533),l=n(7536),c=n(1150),s=n(3281),d=n(7903),u=n(8633),h=n(528),p=n(9630),m=n(7396),x=n(3162),g=n(8381),b=n(546),j=n(2319),f=n(2361),_=n(846),S=n(9970),T=n(8031),v=n(7731),y=n(5893);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=r.Ry().shape({postTitle:r.Z_().required("제목을 입력해주세요."),matchType:r.Z_().required("경기 유형을 선택해주세요."),numOfRecruited:r.Rx().required("모집 인원수를 선택해주세요."),selectedAge:r.Z_().required("모집 연령대를 선택해주세요."),selectedNTRP:r.Z_().required("모집할 NTRP를 선택해주세요."),matchDate:r.Z_().required("경기 날짜를 선택해주세요."),matchStartTime:r.Z_().required("경기 시작 시간을 선택해주세요."),matchEndTime:r.Z_().required("경기 종료 시간을 선택해주세요."),deadlineDate:r.Z_().required("모집 마감일을 선택해주세요."),deadlineTime:r.Z_().required("모집 마감 시간을 선택해주세요."),courtAddress:r.Z_().required("경기장 주소를 입력해주세요."),isCourtBooked:r.O7().required("경기장 예약 여부를 선택해주세요."),courtFee:r.Rx().required("경기장 대여료를 입력해주세요. (무료일 경우 0을 입력해주세요.)").min(0),locationImg:r.Z_(),mainText:r.Z_().required("본문 내용을 입력해주세요.")});function PostMatching(){var e=(0,l.cI)({resolver:(0,o.X)(O)}),t=e.register,n=(e.handleSubmit,e.setValue),a=e.getValues,r=e.watch;e.formState.errors;var c=(0,T.Z)().setMessage,s=(0,i.useState)(null),u=s[0];s[1];var m=(0,i.useState)(""),b=m[0];m[1];var v=(0,i.useState)(""),Z=v[0];v[1];var q=(0,i.useState)(""),A=q[0];q[1];var k=(0,i.useState)(""),B=k[0];k[1];var W=(0,i.useState)({address:"",lat:"",lon:""}),M=W[0],L=W[1],G=(0,i.useState)(1),H=G[0],Q=G[1],X=(0,i.useState)(null),V=X[0],K=X[1],U=(0,i.useState)([{value:null,label:"경기 유형을 먼저 선택해주세요."}]),$=U[0],z=U[1],selectHandler=function(e){e.includes("SINGLE")?z([{value:1,label:"1 명"}]):z([{value:1,label:"1 명"},{value:2,label:"2 명"},{value:3,label:"3 명"}])},J=(0,i.useRef)(null),Y=(0,i.useState)(!1),ee=Y[0],et=Y[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S.Z,{isOpen:ee,toggleDrawer:function(){return et(function(e){return!e})},setCourtInfos:L,setAddress:n}),(0,y.jsx)(w,{children:(0,y.jsx)(h.B,{children:"매칭 글 등록"})}),(0,y.jsxs)(E,{onSubmit:function(e){e.preventDefault();var t={title:a("postTitle"),matchingType:a("matchType"),recruitNum:a("numOfRecruited"),ageGroup:a("selectedAge"),ntrp:a("selectedNTRP"),matchingDate:a("matchDate"),matchingStartTime:a("matchStartTime"),matchingEndTime:a("matchEndTime"),recruitDueDate:a("deadlineDate"),recruitDueTime:a("deadlineTime"),location:a("courtAddress"),lat:"".concat(M.lat),len:"".concat(M.lon),isReserved:a("isCourtBooked"),cost:a("courtFee"),locationImg:a("locationImg"),content:a("mainText")};console.log(e),console.log(t),d.Z.regMatchingData(t).then(function(){return console.log("포스트됨")}).catch(function(e){return console.log(e)})},children:[(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"postTitle",children:"제목"}),(0,y.jsx)("input",_objectSpread(_objectSpread({id:"postTitle",type:"text"},t("postTitle")),{},{onChange:function(e){return n("postTitle",e.target.value)}}))]}),(0,y.jsxs)(I,{children:[(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"matchType",children:"경기 유형"}),(0,y.jsx)(x.A,_objectSpread(_objectSpread({id:"matchType",options:[{value:"SINGLE",label:"단식"},{value:"MIXED_SINGLE",label:"혼성 단식"},{value:"DOUBLE",label:"복식"},{value:"MIXED_DOUBLE",label:"혼성 복식"}]},t("matchType")),{},{onChange:function(e){var t=e+"";n("matchType",t),Q(t.includes("SINGLE")?2:4),selectHandler(t)}}))]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"numOfRecruited",children:"모집 인원"}),(0,y.jsx)(x.A,_objectSpread(_objectSpread({id:"numOfRecruited",options:$},t("numOfRecruited")),{},{onChange:function(e){return n("numOfRecruited",e)}}))]})]}),(0,y.jsxs)(I,{children:[(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"selectedAge",children:"모집 연령대"}),(0,y.jsx)(x.A,{id:"selectedAge",options:[{value:"TEENAGER",label:"10대"},{value:"TWENTIES",label:"20대"},{value:"THIRTIES",label:"30대"},{value:"FORTIES",label:"40대"},{value:"FIFTIES",label:"50대"},{value:"SIXTIES",label:"60대"}],onChange:function(e){return n("selectedAge",e)}})]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"selectedNTRP",children:"모집 NTRP"}),(0,y.jsx)(x.A,_objectSpread(_objectSpread({id:"selectedNTRP",options:[{value:"DEVELOPMENT",label:"NewBie (1.0 ~ 2.0)"},{value:"BEGINNER",label:"Beginner (2.5 ~ 3.5)"},{value:"INTERMEDIATE",label:"Intermediate (4.0 ~ 4.5)"},{value:"ADVANCED",label:"Advanced (5.0 ~ 5.5)"},{value:"PRO",label:"Pro (6.0 ~ 7.0)"}]},t("selectedNTRP")),{},{onChange:function(e){n("selectedNTRP",e)}}))]})]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"matchDate",children:"경기일"}),(0,y.jsx)(j.Z,{name:"matchDate",setState:n}),(0,y.jsx)(F,_objectSpread(_objectSpread({type:"text",id:"matchDate",value:"".concat(u)},t("matchDate")),{},{readOnly:!0}))]}),(0,y.jsxs)(I,{children:[(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"matchStartTime",children:"시작 시간"}),(0,y.jsx)(f.Z,{name:"matchStartTime",setState:n,type:[!0,!0]}),(0,y.jsx)(F,_objectSpread(_objectSpread({type:"text",id:"matchStartTime",value:"".concat(b)},t("matchStartTime")),{},{readOnly:!0}))]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"matchEndTime",children:"종료 시간"}),(0,y.jsx)(f.Z,{name:"matchEndTime",setState:n,type:[!0,!0]}),(0,y.jsx)(F,_objectSpread(_objectSpread({type:"text",id:"matchEndTime",value:"".concat(Z)},t("matchEndTime")),{},{readOnly:!0}))]})]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"deadlineDnT",children:"모집 마감 기한"}),(0,y.jsxs)(I,{children:[(0,y.jsx)(j.Z,{name:"deadlineDate",setState:n,matchDate:"".concat(A),type:[!0,!0,!0]}),(0,y.jsx)(F,_objectSpread(_objectSpread({type:"text",id:"deadlineDate",value:"".concat(A)},t("deadlineDate")),{},{readOnly:!0,onChange:function(e){n("deadlineDate",e.target.value),console.log(a("deadlineDate"))}})),(0,y.jsx)(f.Z,{name:"deadlineTime",setState:n,type:[!0,!1]}),(0,y.jsx)(F,_objectSpread(_objectSpread({type:"text",id:"deadlineTime",value:"".concat(B)},t("deadlineTime")),{},{readOnly:!0}))]})]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"courtAddress",children:"경기장 주소"}),(0,y.jsx)("input",_objectSpread(_objectSpread({type:"text",id:"courtAddress",defaultValue:"",value:"".concat(M.address)},t("courtAddress")),{},{onClick:function(e){e.preventDefault(),et(!0)},readOnly:!0}))]}),(0,y.jsx)(I,{children:(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"isCourtBooked",children:"경기장 예약 여부"}),(0,y.jsx)(_.Z,_objectSpread({idString:"isCourtBooked",setState:n},t("isCourtBooked")))]})}),(0,y.jsxs)(N,{children:[(0,y.jsxs)(D,{children:["1인당"," ",Number.isInteger(a("courtFee")/H)?"".concat(a("courtFee")/H):"-"," ","원"]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"courtFee",children:"구장 대여비"}),(0,y.jsx)("input",_objectSpread(_objectSpread({type:"number",id:"courtFee",className:"text-align-right",pattern:"^[0-9]+$"},t("courtFee")),{},{onChange:function(e){return n("courtFee",Number(e.target.value))},onClick:function(){0===H&&c("warning","경기 유형을 먼저 선택해주세요!")}}))]})]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"courtPhoto",children:"경기장 이미지"}),(0,y.jsxs)(C,{onClick:function(){J.current&&J.current.click()},children:[(0,y.jsx)(g.F,{width:"620px",height:"380px",children:(0,y.jsx)("img",{src:V||"/images/add-image-rectangle-00.png",alt:"경기장 이미지"})}),(0,y.jsx)("input",{id:"courtPhoto",type:"file",style:{display:"none"},ref:J,onChange:function(e){var t=e.target.files;if(t&&t.length>0){var a=t[0],i=new FileReader;i.readAsDataURL(a),i.onloadend=function(){K(i.result)},console.log(i),n("locationImg","".concat(i.result))}},accept:"image/*"})]})]}),(0,y.jsxs)(p.W,{children:[(0,y.jsx)("label",{htmlFor:"mainText",children:"본문 내용"}),(0,y.jsx)(R,_objectSpread({id:"mainText",onChange:function(e){return n("mainText",e.target.value)},placeholder:"내용을 입력하세요."},t("mainText")))]}),(0,y.jsx)(P,{colorstyle:"is-black",type:"submit",disabled:!(r("postTitle")&&r("matchType")&&r("numOfRecruited")&&r("selectedAge")&&r("selectedNTRP")&&r("matchDate")&&r("matchStartTime")&&r("matchEndTime")&&r("deadlineDate")&&r("deadlineTime")&&r("courtAddress")&&r("isCourtBooked")&&r("courtFee")&&r("mainText")),children:"등록하기"})]})]})}var w=c.ZP.div.withConfig({displayName:"post-matching__PageTitleArea",componentId:"sc-1317tq1-0"})(["margin:"," auto;"],(0,s.hO)("50px")),E=c.ZP.form.withConfig({displayName:"post-matching__PostMatchingForm",componentId:"sc-1317tq1-1"})(["display:flex;flex-direction:column;.input__InputBox-sc-7b0p27-0{.text-align-right{text-align:right;}.select__CustomSelect-sc-1q63q92-0{margin-bottom:0px;}}"]),I=c.ZP.div.withConfig({displayName:"post-matching__HalfContainer",componentId:"sc-1317tq1-2"})(["display:flex;flex-direction:row;gap:",";.input__InputBox-sc-7b0p27-0{width:100%;.text-align-right{text-align:right;}.select__CustomSelect-sc-1q63q92-0{margin-bottom:0px;}}"],(0,s.hO)("20px")),N=c.ZP.div.withConfig({displayName:"post-matching__CourtFeeArea",componentId:"sc-1317tq1-3"})(["position:relative;width:100%;"]),D=c.ZP.span.withConfig({displayName:"post-matching__FeeForEachSpan",componentId:"sc-1317tq1-4"})(["position:absolute;top:",";right:",";max-width:",";white-space:nowrap;overflow:hidden;font-family:",";color:",";"],(0,s.hO)("3px"),function(e){return e.theme.isResponsive?(0,v.Q1)("5px"):(0,s.hO)("5px")},function(e){return e.theme.isResponsive?(0,v.Q1)("150px"):(0,s.hO)("150px")},u.bH,u.Ie),P=(0,c.ZP)(m.h$).withConfig({displayName:"post-matching__SubmitBtn",componentId:"sc-1317tq1-5"})(["margin:"," 0px;"],(0,s.hO)("30px")),C=c.ZP.div.withConfig({displayName:"post-matching__ImageSection",componentId:"sc-1317tq1-6"})(["display:flex;justify-content:center;cursor:pointer;width:100%;min-height:fit-content;max-width:",";max-height:",";border:none;margin-bottom:",";img{width:100%;border-radius:5px;border:1px solid ",";background:",";overflow:hidden;}"],function(e){return e.theme.isResponsive?(0,v.Q1)("620px"):(0,s.hO)("620px")},function(e){return e.theme.isResponsive?(0,v.Q1)("400px"):(0,s.hO)("400px")},(0,s.hO)("30px"),u.B_,u._2),R=(0,c.ZP)(b.K).withConfig({displayName:"post-matching__MainTextArea",componentId:"sc-1317tq1-7"})(["max-width:",";height:",";"],function(e){return e.theme.isResponsive?(0,v.Q1)("620px"):(0,s.hO)("620px")},function(e){return e.theme.isResponsive?(0,v.Q1)("400px"):(0,s.hO)("400px")}),F=c.ZP.input.withConfig({displayName:"post-matching__HiddenInput",componentId:"sc-1317tq1-8"})(["position:absolute;width:0px;height:0px;max-width:0px;max-height:0px;background-color:transparent;padding:0px;border:1px solid transparent;border-radius:0px;box-shadow:none;visibility:hidden;"])},3289:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post-matching",function(){return n(4238)}])}},function(e){e.O(0,[536,333,19,791,216,662,160,695,774,888,179],function(){return e(e.s=3289)}),_N_E=e.O()}]);