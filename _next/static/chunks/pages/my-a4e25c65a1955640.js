(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{5314:function(e,i,n){"use strict";n.d(i,{Z:function(){return ModalBox}}),n(7294);var t=n(1150),o=n(3281),s=n(9605),r=n(8381),a=n(8633),c=n(9787),l=n(7731),d=n(5893);function ModalBox(e){var handleCancel=function(){e.toggleModal(),e.onCancel()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(p,{style:{width:"580px",height:e.heightType?"90vh":"auto",overflowY:e.heightType?"scroll":"visible"},closeIcon:!1,title:(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(m,{children:(0,d.jsxs)("div",{className:"align-box",children:[e.title&&(0,d.jsx)("p",{children:e.title}),(0,d.jsx)(r.F,{width:"34px",height:"34px",onClick:handleCancel,children:(0,d.jsx)("img",{src:"".concat(c.O,"/images/close-icon.png"),alt:"close"})})]})})}),open:e.isOpen,onOk:function(){e.toggleModal(),e.onOk()},onCancel:handleCancel,centered:!0,maskClosable:!1,footer:e.footerButtons||[],children:e.children})})}var p=(0,t.ZP)(s.Z).withConfig({shouldForwardProp:function(e){return"heightType"!==e}}).withConfig({displayName:"modal__CustomModal",componentId:"sc-acqo2g-0"})(["div.ant-modal-content{border-radius:20px !important;box-shadow:0 0 20px 0 rgba(0,0,0,0.15) !important;padding:"," !important;height:100%;overflow-y:scroll;div.ant-modal-header{padding:20px 0;}div.ant-modal-body{height:100%;}}"],function(e){return e.theme.isResponsive?(0,l.Q1)("20px"):(0,o.hO)("20px")}),m=t.ZP.div.withConfig({displayName:"modal__CustomHeaderBox",componentId:"sc-acqo2g-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-yvkicy-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],function(e){return e.theme.isResponsive?(0,l.Q1)(a.hQ):(0,o.hO)("".concat(a.hQ))},a.SK)},9892:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return my}});var t=n(7294),o=n(1150),s=n(1163),r=n(3281),a=n(481),c=n(7396),l=n(8381),d=n(8633),p=n(7731),m=n(5893);function MyProfile(e){var i=e.userInfos,n=i.userNickName,t=i.age,o=i.gender,s=i.ntrp,r=i.userAddress,a=i.winningRate,c=i.mannerPoint,l=i.realName,d=i.email,p=i.imageURL;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(h,{children:[(0,m.jsx)(u,{width:"280px",height:"280px",children:(0,m.jsx)("img",{src:p||"",alt:"프로필 사진"})}),(0,m.jsxs)(x,{children:[(0,m.jsxs)(f,{id:"Info01",children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"닉네임 : "}),(0,m.jsx)(_,{children:n||"-"}),(0,m.jsxs)(j,{children:[" ",s||"-"," "]})]}),(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"연령/성별 :"}),(0,m.jsxs)(_,{children:["만 ",t||"-","세 / ",o||"-"]})]}),(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"주소 : "}),(0,m.jsx)(_,{children:r||"-"})]})]}),(0,m.jsxs)(f,{id:"Info02",children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"NTRP : "}),(0,m.jsx)(_,{children:s||"-"})]}),(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"승률 : "}),(0,m.jsxs)(_,{children:[a[0]||"-","승 ",a[1]||"-","패"]})]}),(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"매너점수 : "}),(0,m.jsxs)(_,{children:[c||"-"," 점"]})]})]}),(0,m.jsxs)(f,{id:"Info03",children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"실명 : "}),(0,m.jsx)(_,{children:l||"-"})]}),(0,m.jsxs)(g,{children:[(0,m.jsx)(y,{children:"이메일 : "}),(0,m.jsx)(_,{children:d||"-"})]})]})]})]})})}var h=o.ZP.div.withConfig({displayName:"myProfile__MyProfileContainer",componentId:"sc-1jchsdk-0"})(["display:flex;flex-direction:column;align-items:center;gap:",";width:100%;margin:"," 0px;"],(0,r.hO)("20px"),(0,r.hO)("30px")),u=(0,o.ZP)(l.F).withConfig({displayName:"myProfile__ProfileImage",componentId:"sc-1jchsdk-1"})(["border-radius:",";background-color:lightblue;max-width:",";max-height:",";"],(0,r.hO)("20px"),function(e){return e.theme.isResponsive?(0,p.Q1)("150px"):(0,r.hO)("150px")},function(e){return e.theme.isResponsive?(0,p.Q1)("150px"):(0,r.hO)("150px")}),x=o.ZP.div.withConfig({displayName:"myProfile__ProfileInfoArea",componentId:"sc-1jchsdk-2"})(["display:grid;grid-template-columns:3fr 2fr;grid-template-rows:auto auto;grid-template-areas:'info01 info02' 'info03 info03';min-width:90%;"]),f=o.ZP.ul.withConfig({displayName:"myProfile__ProfileInfoList",componentId:"sc-1jchsdk-3"})(["display:flex;flex-direction:column;justify-content:left;max-width:",";& #info01{margin-right:",";}"],function(e){return e.theme.isResponsive?"calc(100vw - ".concat((0,p.Q1)("60px"),")"):"calc(100vw - ".concat((0,r.hO)("60px"),")")},(0,r.hO)("20px")),g=o.ZP.li.withConfig({displayName:"myProfile__ProfileInfoItem",componentId:"sc-1jchsdk-4"})(["display:flex;flex-direction:row;align-items:center;gap:",";width:fit-content;margin-top:",";"],(0,r.hO)("4px"),(0,r.hO)("15px")),y=o.ZP.span.withConfig({displayName:"myProfile__ItemName",componentId:"sc-1jchsdk-5"})(["min-width:fit-content;font-family:",";font-size:",";color:",";"],d.RU,function(e){return e.theme.isResponsive?(0,p.Q1)(d.Mz):(0,r.hO)(d.Mz)},d.K6),_=o.ZP.span.withConfig({displayName:"myProfile__ItemContent",componentId:"sc-1jchsdk-6"})(["min-width:fit-content;font-family:",";font-size:",";color:",";"],d.bH,function(e){return e.theme.isResponsive?(0,p.Q1)(d.Mz):(0,r.hO)(d.Mz)},d.SK),j=o.ZP.div.withConfig({displayName:"myProfile__Badge",componentId:"sc-1jchsdk-7"})(["display:inline-block;width:",";height:",";background-color:",";border-radius:",";text-align:center;color:",";font-size:",";line-height:",";font-family:",";"],function(e){return e.theme.isResponsive?(0,p.Q1)("41px"):(0,r.hO)("41px")},function(e){return e.theme.isResponsive?(0,p.Q1)("20px"):(0,r.hO)("20px")},d.K6,(0,r.hO)("10px"),d.L_,function(e){return e.theme.isResponsive?(0,p.Q1)(d.Kw):(0,r.hO)(d.Kw)},function(e){return e.theme.isResponsive?(0,p.Q1)("18px"):(0,r.hO)("18px")},d.RU),b=n(5028),v=n(1154),w=n(5314),N={userAddress:"서울 마포구",gender:"여",NTRP:"Beginner",winningRate:[5,4,1],mannerPoint:"90"};function UserInfoModal(e){var i=e.userNickName,n=(e.userEmail,e.profilePicURL),t=e.isOpen,o=e.toggleModal,s=e.onCancel,r=N.userAddress,a=N.gender,c=N.NTRP,d=N.winningRate,p=N.mannerPoint;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(w.Z,{isOpen:t,toggleModal:o,onCancel:s,children:(0,m.jsxs)(P,{children:[(0,m.jsx)(I,{children:(0,m.jsx)(l.F,{width:"220px",height:"220px",children:(0,m.jsx)("img",{src:n||"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1697976551262_750.jpeg",alt:"프로필 이미지"})})}),(0,m.jsxs)(O,{children:[(0,m.jsxs)(M,{children:[(0,m.jsx)("span",{children:"".concat(i)})," / ",(0,m.jsx)("span",{children:"".concat(a)}),(0,m.jsx)(L,{children:"".concat(c)})]}),(0,m.jsxs)(C,{children:[(0,m.jsx)(k,{children:"지역: "}),(0,m.jsx)(R,{children:"".concat(r)})]}),(0,m.jsxs)(C,{children:[(0,m.jsx)(k,{children:"승률: "}),(0,m.jsxs)(R,{children:["".concat(d[0]),"승 ","".concat(d[1]),"패 ","".concat(d[2]),"무"]})]}),(0,m.jsxs)(C,{children:[(0,m.jsx)(k,{children:"매너: "}),(0,m.jsxs)(R,{children:["".concat(p)," 점"]})]})]})]})})})}var P=o.ZP.div.withConfig({displayName:"userInfoModal__UserInfoContainer",componentId:"sc-1fcdm8q-0"})(["display:flex;flex-direction:row;gap:",";"],(0,r.hO)("40px")),I=o.ZP.div.withConfig({displayName:"userInfoModal__ProfilePicArea",componentId:"sc-1fcdm8q-1"})(["max-width:",";max-height:",";border-radius:",";overflow:hidden;"],(0,r.hO)("220px"),(0,r.hO)("220px"),(0,r.hO)("20px")),O=o.ZP.ul.withConfig({displayName:"userInfoModal__UserInfoList",componentId:"sc-1fcdm8q-2"})(["display:flex;flex-direction:column;padding:"," 0px;"],(0,r.hO)("7px")),C=o.ZP.li.withConfig({displayName:"userInfoModal__UserInfoItem",componentId:"sc-1fcdm8q-3"})(["margin-bottom:",";font-family:",";font-size:",";color:",";"],(0,r.hO)("15px"),d.RU,(0,r.hO)("".concat(d.Pg)),d.SK),k=o.ZP.span.withConfig({displayName:"userInfoModal__ItemName",componentId:"sc-1fcdm8q-4"})(["min-width:fit-content;font-family:inherit;font-size:",";color:",";"],(0,r.hO)("".concat(d.OI)),d.K6),R=o.ZP.span.withConfig({displayName:"userInfoModal__ItemContent",componentId:"sc-1fcdm8q-5"})(["min-width:fit-content;font-family:inherit;font-size:",";color:",";"],(0,r.hO)("".concat(d.OI)),d.SK),M=(0,o.ZP)(C).withConfig({displayName:"userInfoModal__NickNameArea",componentId:"sc-1fcdm8q-6"})(["display:flex;flex-direction:row;align-items:center;"]),L=o.ZP.div.withConfig({displayName:"userInfoModal__Badge",componentId:"sc-1fcdm8q-7"})(["display:inline-block;width:fit-content;height:",";padding:0px 5px;margin-left:10px;background-color:",";border-radius:",";text-align:center;color:",";font-size:",";line-height:",";font-family ",";"],(0,r.hO)("20px"),d.K6,(0,r.hO)("10px"),d.L_,(0,r.hO)("".concat(d.Kw)),(0,r.hO)("18px"),d.RU),Z=n(9630),Q=n(546);function ReportUserModal(e){e.userNickName,e.userEmail,e.profilePicURL;var i=e.isOpen,n=e.toggleModal,o=e.onCancel,s=e.onOk,r=(0,t.useState)(""),a=r[0],c=r[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(w.Z,{isOpen:i,toggleModal:n,onCancel:o,onOk:s,children:(0,m.jsxs)(U,{children:[(0,m.jsxs)(Z.W,{children:[(0,m.jsx)("label",{children:" 사용자 신고하기"}),(0,m.jsx)(z,{placeholder:"신고 사유를 입력하세요.",value:a,onChange:function(e){return c(e.currentTarget.value)}})]}),(0,m.jsx)(T,{children:"신고하기"})]})})})}var U=o.ZP.form.withConfig({displayName:"reportUserModal__UserReportForm",componentId:"sc-1b1bes8-0"})(["display:flex;flex-direction:column;justify-content:center;"]),z=(0,o.ZP)(Q.K).withConfig({displayName:"reportUserModal__ReportTextArea",componentId:"sc-1b1bes8-1"})(["height:",";"],(0,r.hO)("140px")),T=(0,o.ZP)(c.LE).withConfig({displayName:"reportUserModal__SubmitReportBtn",componentId:"sc-1b1bes8-2"})(["width:",";height:;margin:0px auto;"],(0,r.hO)("180px"));function PlayerCard(e){var i=(0,t.useState)(!1),n=i[0],o=i[1],s=(0,t.useState)(!1),r=s[0],a=s[1],d=e.userNickName,p=e.profilePicURL,h=e.userEmail;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(F,{children:[(0,m.jsx)(E,{children:(0,m.jsx)(l.F,{width:"80px",height:"80px",children:(0,m.jsx)("img",{src:p||"-",alt:"프로필 이미지"})})}),(0,m.jsx)(K,{children:d||"라켓왕자"}),(0,m.jsxs)(A,{children:[(0,m.jsx)(c.LE,{width:"80px",height:"40px",colorstyle:"is-black",onClick:function(){return o(!0)},children:"정보"}),(0,m.jsx)(c.LE,{width:"80px",height:"40px",colorstyle:"is-white",bordercolor:"is-lightGray",onClick:function(){return a(!0)},children:"신고"})]})]}),(0,m.jsx)(UserInfoModal,{userNickName:d,userEmail:h,profilePicURL:p,isOpen:n,toggleModal:function(){return o(!n)},onCancel:function(){return o(!1)}}),(0,m.jsx)(ReportUserModal,{userNickName:d,userEmail:h,profilePicURL:p,isOpen:r,toggleModal:function(){return a(!r)},onCancel:function(){return a(!1)},onOk:function(){return a(!1)}})]})}var F=o.ZP.div.withConfig({displayName:"playerCard__PlayerCardContainer",componentId:"sc-17c5wxd-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:",";padding:",";background-color:",";border:solid 1px ",";border-radius:10px;"],function(e){return e.theme.isResponsive?(0,p.Q1)("100px"):(0,r.hO)("100px")},function(e){return e.theme.isResponsive?(0,p.Q1)("10px"):(0,r.hO)("10px")},d.L_,d.yi),E=o.ZP.div.withConfig({displayName:"playerCard__PlayerPicture",componentId:"sc-17c5wxd-1"})(["display:inline-block;border-radius:10px;overflow:hidden;"]),K=o.ZP.span.withConfig({displayName:"playerCard__PlayerName",componentId:"sc-17c5wxd-2"})(["flex:1;margin:",";font-family:",";font-size:",";color:",";"],function(e){return e.theme.isResponsive?"0 ".concat((0,p.Q1)("20px")):"0 ".concat((0,r.hO)("20px"))},d.RU,function(e){return e.theme.isResponsive?(0,p.Q1)(d.Pg):(0,r.hO)(d.Pg)},d.SK),A=o.ZP.div.withConfig({displayName:"playerCard__ButtonArea",componentId:"sc-17c5wxd-3"})(["display:flex;flex-direction:row;align-items:center;gap:",";"],function(e){return e.theme.isResponsive?(0,p.Q1)("10px"):(0,r.hO)("10px")});function MyListItem(e){var i=e.postInfo,n=i.postNum,t=i.date,o=i.day,s=i.postTitle,r=i.userAddress,a=i.matchType,c=i.playerList,l=[{key:n+"",label:(0,m.jsxs)(q,{children:[(0,m.jsxs)(S,{id:"dataNDay",children:[t||"-","/",o||"-"]}),(0,m.jsxs)(H,{id:"title",children:[s||"-"," / ",r||"-"," / ",a||"-"]}),(0,m.jsx)(D,{id:"collapseIcon",width:"24px",height:"24px",children:(0,m.jsx)("img",{src:"/svg/arrow.svg"})})]}),children:(0,m.jsx)(W,{children:c.map(function(i,n){var t=e.postInfo.playerList[n],o=t.userNickName,s=t.profilePicURL,r=t.userEmail;return(0,m.jsx)(PlayerCard,{userNickName:o,profilePicURL:s,userEmail:r},n)})}),showArrow:!1}];return(0,m.jsx)(b.ZP,{theme:{components:{Collapse:{borderRadiusLG:20,headerBg:"".concat(d.K6),headerPadding:"10px 20px",colorTextHeading:"".concat(d.L_),fontFamily:"".concat(d.fL)}}},children:(0,m.jsx)(B,{"aria-role":"listitem",items:l,defaultActiveKey:["1"],bordered:!1})})}var B=(0,o.ZP)(v.Z).withConfig({displayName:"collapse__MyListItemContainer",componentId:"sc-12zna0s-0"})(["width:100%;margin-bottom:",";.ant-collapse-content-box{background-color:",";border-radius:0px 0px "," ",";}"],(0,r.hO)("30px"),d.um,(0,r.hO)("10px"),(0,r.hO)("10px")),q=o.ZP.div.withConfig({displayName:"collapse__Header",componentId:"sc-12zna0s-1"})(["display:grid;grid-template-columns:",";grid-template-areas:'dateNDay title collapseIcon';gap:",";height:",";font-size:",";"],function(e){return e.theme.isResponsive?"".concat((0,p.Q1)("75px")," auto ").concat((0,p.Q1)("25px")):"".concat((0,r.hO)("75px")," auto ").concat((0,r.hO)("25px"))},function(e){return e.theme.isResponsive?(0,p.Q1)("15px"):(0,r.hO)("15px")},function(e){return e.theme.isResponsive?(0,p.Q1)("30px"):(0,r.hO)("30px")},function(e){return e.theme.isResponsive?(0,p.Q1)(d.kM):(0,r.hO)(d.kM)}),S=o.ZP.span.withConfig({displayName:"collapse__DateNDay",componentId:"sc-12zna0s-2"})(["grid-area:'dateNDay';text-align:left;"]),H=o.ZP.a.withConfig({displayName:"collapse__TitleLink",componentId:"sc-12zna0s-3"})(["grid-area:'title';text-align:left;color:",";white-space:nowrap;overflow:hidden;&:hover,&:visited{color:",";}"],d.L_,d.L_),D=(0,o.ZP)(l.F).withConfig({displayName:"collapse__IconImageBox",componentId:"sc-12zna0s-4"})(["grid-area:'collapseIcon';"]),W=o.ZP.div.withConfig({displayName:"collapse__PlayerCardContainer",componentId:"sc-12zna0s-5"})(["padding:",";display:flex;flex-direction:column;gap:",";"],function(e){return e.theme.isResponsive?"16px ".concat((0,p.Q1)("4px")," 4px ").concat((0,p.Q1)("4px")):"16px ".concat((0,r.hO)("4px")," 4px ").concat((0,r.hO)("4px"))},function(e){return e.theme.isResponsive?(0,p.Q1)("10px"):(0,r.hO)("10px")});function MyMatchingList(e){var i=e.listType,n=[{postNum:1,date:"12/09",day:"일",postTitle:"매너 게임 하실 여성 분들 모여주세요:)",userAddress:"서울 강동구",matchType:"복식",playerList:[{userNickName:"뿡뿡이",userEmail:"bboongbboong2@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg"},{userNickName:"텐텐2",userEmail:"tenistenis@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1691813820762_750.jpeg"}]},{postNum:2,date:"11/25",day:"토",postTitle:"실력 같이 키우실 분!!",userAddress:"경기 하남시",matchType:"단식",playerList:[{userNickName:"김밥처돌이",userEmail:"lovekimbap@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1693052032553_750.jpeg"},{userNickName:"SeaZero95",userEmail:"haeyoung95@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1695367802898_750.jpeg"}]},{postNum:3,date:"11/07",day:"화",postTitle:"테니스 내가 짱임",userAddress:"서울 강동구",matchType:"단식",playerList:[{userNickName:"테니스의공주",userEmail:"princess77@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1668760095596_750.jpeg"},{userNickName:"내가짱",userEmail:"lordofsword@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1669467945861_750.jpeg"}]}],t=[{postNum:4,date:"11/07",day:"화",postTitle:"테니스 내가 짱임",userAddress:"서울 강동구",matchType:"단식",playerList:[{userNickName:"테니스의공주",userEmail:"princess77@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1668760095596_750.jpeg"},{userNickName:"내가짱",userEmail:"lordofsword@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1669467945861_750.jpeg"}]},{postNum:5,date:"12/09",day:"일",postTitle:"매너 게임 하실 여성 분들 모여주세요:)",userAddress:"서울 강동구",matchType:"복식",playerList:[{userNickName:"뿡뿡이",userEmail:"bboongbboong2@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg"},{userNickName:"텐텐2",userEmail:"tenistenis@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1691813820762_750.jpeg"}]},{postNum:6,date:"11/25",day:"토",postTitle:"실력 같이 키우실 분!!",userAddress:"경기 하남시",matchType:"단식",playerList:[{userNickName:"김밥처돌이",userEmail:"lovekimbap@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1693052032553_750.jpeg"},{userNickName:"SeaZero95",userEmail:"haeyoung95@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1695367802898_750.jpeg"}]}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(Y,{children:"submitted"===i?n.map(function(e,i){return(0,m.jsx)(MyListItem,{postInfo:n[i]},i+1)}):t.map(function(e,i){return(0,m.jsx)(MyListItem,{postInfo:t[i]},i+2)})})})}var Y=o.ZP.ul.withConfig({displayName:"myMatchingList__MyListContainer",componentId:"sc-7gv9mh-0"})(["min-width:100%;margin-top:",";"],(0,r.hO)("20px")),G=n(3233),X=n(8031),my=function(){var e=(0,G.Z)().checkLogin,i=(0,X.Z)().setMessage,n=(0,s.useRouter)(),o=[{key:"submittedMatchingList",label:"등록한 매칭",children:(0,m.jsx)(MyMatchingList,{listType:"submitted"})},{key:"appliedMatchingList",label:"신청한 매칭",children:(0,m.jsx)(MyMatchingList,{listType:"applied"})}];return(0,t.useEffect)(function(){e()||(i("error","로그인이 필요한 서비스입니다."),n.replace("/login"))},[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(J,{children:[(0,m.jsx)(MyProfile,{userInfos:{userNickName:"왕자",age:30,gender:"남",userAddress:"서울시 성동구",ntrp:"Pro",winningRate:[1,3],mannerPoint:85,realName:"김개발",email:"princeofracket@gmail.com",imageURL:""}}),(0,m.jsx)(c.h$,{colorstyle:"is-black","aria-label":"프로필 수정페이지로 이동",children:"프로필 수정"}),(0,m.jsx)($,{children:(0,m.jsx)(a.o,{defaultActiveKey:"1",items:o})})]})})},J=o.ZP.div.withConfig({displayName:"my__MyPageAlign",componentId:"sc-666c1q-0"})(["padding:",";"],function(e){return e.theme.isResponsive?"0 ".concat((0,p.Q1)("30px")):"0 ".concat((0,r.hO)("30px"))}),$=o.ZP.div.withConfig({displayName:"my__ListArea",componentId:"sc-666c1q-1"})(["margin-top:30px;"])},9630:function(e,i,n){"use strict";n.d(i,{W:function(){return a}});var t=n(1150),o=n(3281),s=n(8633),r=n(7731),a=t.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-7b0p27-0"})(["display:flex;flex-direction:column;margin-bottom:20px;position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:10px;color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:",";font-size:",";&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return"true"===e.certify&&"relative"},function(e){return e.theme.isResponsive?(0,r.Q1)(s.Mz):(0,o.hO)(s.Mz)},s.K_,function(e){return e.theme.isResponsive?(0,r.Q1)("50px"):(0,o.hO)("50px")},s.B_,s._2,function(e){return e.theme.isResponsive?"0 ".concat((0,r.Q1)("15px")):"0 ".concat((0,o.hO)("15px"))},function(e){return e.theme.isResponsive?(0,r.Q1)(s.Mz):(0,o.hO)(s.Mz)},s.K6,(0,o.hO)("25px"),function(e){return e.theme.isResponsive?(0,r.Q1)("10px"):(0,o.hO)("10px")},s._W)},481:function(e,i,n){"use strict";n.d(i,{o:function(){return c}});var t=n(1150),o=n(3281),s=n(7135),r=n(7731),a=n(8633),c=(0,t.ZP)(s.Z).withConfig({displayName:"tab__CustomTab",componentId:"sc-1b7inq8-0"})(["width:100% !important;font-size:inherit !important;line-height:1 !important;color:inherit !important;div.ant-tabs-nav{margin:0 !important;background-color:"," !important;padding:"," !important;border-radius:50px !important;&::before{display:none !important;}div.ant-tabs-nav-wrap{display:block !important;&::before{display:none !important;}&::after{display:none !important;}div.ant-tabs-nav-list{display:flex !important;div.ant-tabs-tab{width:"," !important;display:block !important;padding:11px 0 !important;font-size:inherit !important;margin:0 !important;text-align:center !important;font-size:"," !important;font-family:Pretendard-Regular;color:",";&.ant-tabs-tab-active{width:",";text-align:center;background:",";padding:11px 0;border-radius:50px;border:1px solid ",";color:"," !important;.ant-tabs-tab-btn{color:",";}}}div.ant-tabs-ink-bar{display:none !important;}}}div.ant-tabs-nav-operations{display:none !important;}}"],a.um,function(e){return e.theme.isResponsive?"".concat((0,r.Q1)("10px")," ").concat((0,r.Q1)("20px")):"".concat((0,o.hO)("10px")," ").concat((0,o.hO)("20px"))},function(e){return e.theme.isResponsive?(0,r.Q1)("260px"):(0,o.hO)("260px")},function(e){return e.theme.isResponsive?(0,r.Q1)(a.OI):(0,o.hO)(a.OI)},a.Ie,function(e){return e.theme.isResponsive?(0,r.Q1)("260px"):(0,o.hO)("260px")},a.L_,a.K6,a.K6,a.K6)},546:function(e,i,n){"use strict";n.d(i,{K:function(){return r}});var t=n(1150),o=n(3281),s=n(8633),r=t.ZP.textarea.withConfig({displayName:"textarea__TextArea",componentId:"sc-1rkukdi-0"})(["resize:none !important;min-width:100%;min-height:",";border:1px solid ",";background:",";border-radius:5px;padding:10px;font-family:",";font-size:",";&:focus{border:1px solid ",";outline:none;}"],(0,o.hO)("140px"),s.B_,s._2,s.bH,s.Mz,s.K6)},8031:function(e,i,n){"use strict";var t=n(6318),o=n(5890);i.Z=function(){var e=(0,t.Zl)(o.O),i=(0,t.sJ)(o.O);return{setMessage:function(n,t){e({isHandle:!i.isHandle,type:n,message:t})}}}},9245:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my",function(){return n(9892)}])}},function(e){e.O(0,[19,791,605,135,154,774,888,179],function(){return e(e.s=9245)}),_N_E=e.O()}]);