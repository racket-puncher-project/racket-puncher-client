(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{5314:function(e,i,n){"use strict";n.d(i,{Z:function(){return ModalBox}}),n(7294);var t=n(1150),o=n(9605),a=n(8381),r=n(8633),s=n(9787),l=n(5893);function ModalBox(e){var handleCancel=function(){e.toggleModal(),e.onCancel()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d,{style:{width:"580px",height:e.heightType?"90vh":"auto",overflowY:e.heightType?"scroll":"visible"},closeIcon:!1,title:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,{children:(0,l.jsxs)("div",{className:"align-box",children:[e.title&&(0,l.jsx)("p",{children:e.title}),(0,l.jsx)(a.F,{width:"34px",height:"34px",onClick:handleCancel,children:(0,l.jsx)("img",{src:"".concat(s.O,"/images/close-icon.png"),alt:"close"})})]})})}),open:e.isOpen,onOk:function(){e.toggleModal(),e.onOk()},onCancel:handleCancel,centered:!0,maskClosable:!1,footer:e.footerButtons||[],children:e.children})})}var d=(0,t.ZP)(o.Z).withConfig({shouldForwardProp:function(e){return"heightType"!==e}}).withConfig({displayName:"modal__CustomModal",componentId:"sc-1cbo6ns-0"})(["div.ant-modal-content{border-radius:20px !important;box-shadow:0 0 20px 0 rgba(0,0,0,0.15) !important;padding:20px !important;height:100%;overflow-y:scroll;div.ant-modal-header{padding:20px 0;}div.ant-modal-body{height:100%;}}"]),c=t.ZP.div.withConfig({displayName:"modal__CustomHeaderBox",componentId:"sc-1cbo6ns-1"})(["div.align-box{position:relative;p{font-size:",";font-family:Pretendard-Medium;color:",";text-align:center;}div.box__ImageBox-sc-e7xchd-0{position:absolute;top:50%;transform:translateY(-50%);right:0;cursor:pointer;-webkit-tap-highlight-color:transparent !important;}}"],r.hQ,r.SK)},9892:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return my}});var t=n(7294),o=n(1150),a=n(1163),r=n(481),s=n(7396),l=n(3281),d=n(8381),c=n(8633),p=n(5893);function MyProfile(e){var i=e.userInfos,n=i.userNickName,t=i.age,o=i.gender,a=i.ntrp,r=i.userAddress,s=i.winningRate,l=i.mannerPoint,d=i.realName,c=i.email,j=i.imageURL;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(m,{children:[(0,p.jsx)(h,{width:"280px",height:"280px",children:(0,p.jsx)("img",{src:j||"",alt:"프로필 사진"})}),(0,p.jsxs)(x,{children:[(0,p.jsxs)(u,{id:"Info01",children:[(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"닉네임 : "}),(0,p.jsx)(y,{children:n||"-"}),(0,p.jsxs)(_,{children:[" ",a||"-"," "]})]}),(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"연령/성별 :"}),(0,p.jsxs)(y,{children:["만 ",t||"-","세 / ",o||"-"]})]}),(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"주소 : "}),(0,p.jsx)(y,{children:r||"-"})]})]}),(0,p.jsxs)(u,{id:"Info02",children:[(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"NTRP : "}),(0,p.jsx)(y,{children:a||"-"})]}),(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"승률 : "}),(0,p.jsxs)(y,{children:[s[0]||"-","승 ",s[1]||"-","패"]})]}),(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"매너점수 : "}),(0,p.jsxs)(y,{children:[l||"-"," 점"]})]})]}),(0,p.jsxs)(u,{id:"Info03",children:[(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"실명 : "}),(0,p.jsx)(y,{children:d||"-"})]}),(0,p.jsxs)(f,{children:[(0,p.jsx)(g,{children:"이메일 : "}),(0,p.jsx)(y,{children:c||"-"})]})]})]})]})})}var m=o.ZP.div.withConfig({displayName:"myProfile__MyProfileContainer",componentId:"sc-9v0q50-0"})(["display:flex;flex-direction:column;align-items:center;gap:",";width:100%;margin:"," 0px;"],(0,l.hO)("20px"),(0,l.hO)("30px")),h=(0,o.ZP)(d.F).withConfig({displayName:"myProfile__ProfileImage",componentId:"sc-9v0q50-1"})(["border-radius:",";background-color:lightblue;max-width:",";max-height:",";"],(0,l.hO)("20px"),(0,l.hO)("150px"),(0,l.hO)("150px")),x=o.ZP.div.withConfig({displayName:"myProfile__ProfileInfoArea",componentId:"sc-9v0q50-2"})(["display:grid;grid-template-columns:3fr 2fr;grid-template-rows:auto auto;grid-template-areas:'info01 info02' 'info03 info03';min-width:90%;"]),u=o.ZP.ul.withConfig({displayName:"myProfile__ProfileInfoList",componentId:"sc-9v0q50-3"})(["display:flex;flex-direction:column;justify-content:left top;max-width:calc(100vw - ",");& #info01{margin-right:",";}s"],(0,l.hO)("60px"),(0,l.hO)("20px")),f=o.ZP.li.withConfig({displayName:"myProfile__ProfileInfoItem",componentId:"sc-9v0q50-4"})(["display:flex;flex-direction:row;align-items:center;gap:",";width:fit-content;margin-top:",";"],(0,l.hO)("4px"),(0,l.hO)("15px")),g=o.ZP.span.withConfig({displayName:"myProfile__ItemName",componentId:"sc-9v0q50-5"})(["min-width:fit-content;font-family:",";font-size:",";color:",";"],c.RU,(0,l.hO)("".concat(c.Mz)),c.K6),y=o.ZP.span.withConfig({displayName:"myProfile__ItemContent",componentId:"sc-9v0q50-6"})(["min-width:fit-content;font-family:",";font-size:",";color:",";"],c.bH,(0,l.hO)("".concat(c.Mz)),c.SK),_=o.ZP.div.withConfig({displayName:"myProfile__Badge",componentId:"sc-9v0q50-7"})(["display:inline-block;width:",";height:",";background-color:",";border-radius:",";text-align:center;color:",";font-size:",";line-height:",";font-familiy ",";"],(0,l.hO)("41px"),(0,l.hO)("20px"),c.K6,(0,l.hO)("10px"),c.L_,(0,l.hO)("".concat(c.Kw)),(0,l.hO)("18px"),c.RU),j=n(5028),b=n(1154),N=n(5314),w={userAddress:"서울 마포구",gender:"여",NTRP:"Beginner",winningRate:[5,4,1],mannerPoint:"90"};function UserInfoModal(e){var i=e.userNickName,n=(e.userEmail,e.profilePicURL),t=e.isOpen,o=e.toggleModal,a=e.onCancel,r=w.userAddress,s=w.gender,l=w.NTRP,c=w.winningRate,m=w.mannerPoint;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(N.Z,{isOpen:t,toggleModal:o,onCancel:a,children:(0,p.jsxs)(P,{children:[(0,p.jsx)(v,{children:(0,p.jsx)(d.F,{width:"220px",height:"220px",children:(0,p.jsx)("img",{src:n||"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1697976551262_750.jpeg",alt:"프로필 이미지"})})}),(0,p.jsxs)(I,{children:[(0,p.jsxs)(L,{children:[(0,p.jsx)("span",{children:"".concat(i)})," / ",(0,p.jsx)("span",{children:"".concat(s)}),(0,p.jsx)(M,{children:"".concat(l)})]}),(0,p.jsxs)(C,{children:[(0,p.jsx)(O,{children:"지역: "}),(0,p.jsx)(k,{children:"".concat(r)})]}),(0,p.jsxs)(C,{children:[(0,p.jsx)(O,{children:"승률: "}),(0,p.jsxs)(k,{children:["".concat(c[0]),"승 ","".concat(c[1]),"패 ","".concat(c[2]),"무"]})]}),(0,p.jsxs)(C,{children:[(0,p.jsx)(O,{children:"매너: "}),(0,p.jsxs)(k,{children:["".concat(m)," 점"]})]})]})]})})})}var P=o.ZP.div.withConfig({displayName:"userInfoModal__UserInfoContainer",componentId:"sc-rxj7io-0"})(["display:flex;flex-direction:row;gap:",";"],(0,l.hO)("40px")),v=o.ZP.div.withConfig({displayName:"userInfoModal__ProfilePicArea",componentId:"sc-rxj7io-1"})(["max-width:",";max-height:",";border-radius:",";overflow:hidden;"],(0,l.hO)("220px"),(0,l.hO)("220px"),(0,l.hO)("20px")),I=o.ZP.ul.withConfig({displayName:"userInfoModal__UserInfoList",componentId:"sc-rxj7io-2"})(["display:flex;flex-direction:column;padding:"," 0px;"],(0,l.hO)("7px")),C=o.ZP.li.withConfig({displayName:"userInfoModal__UserInfoItem",componentId:"sc-rxj7io-3"})(["margin-bottom:",";font-family:",";font-size:",";color:",";"],(0,l.hO)("15px"),c.RU,(0,l.hO)("".concat(c.Pg)),c.SK),O=o.ZP.span.withConfig({displayName:"userInfoModal__ItemName",componentId:"sc-rxj7io-4"})(["min-width:fit-content;font-family:inherit;font-size:",";color:",";"],(0,l.hO)("".concat(c.OI)),c.K6),k=o.ZP.span.withConfig({displayName:"userInfoModal__ItemContent",componentId:"sc-rxj7io-5"})(["min-width:fit-content;font-family:inherit;font-size:",";color:",";"],(0,l.hO)("".concat(c.OI)),c.SK),L=(0,o.ZP)(C).withConfig({displayName:"userInfoModal__NickNameArea",componentId:"sc-rxj7io-6"})(["display:flex;flex-direction:row;align-items:center;"]),M=o.ZP.div.withConfig({displayName:"userInfoModal__Badge",componentId:"sc-rxj7io-7"})(["display:inline-block;width:fit-content;height:",";padding:0px 5px;margin-left:10px;background-color:",";border-radius:",";text-align:center;color:",";font-size:",";line-height:",";font-family ",";"],(0,l.hO)("20px"),c.K6,(0,l.hO)("10px"),c.L_,(0,l.hO)("".concat(c.Kw)),(0,l.hO)("18px"),c.RU),Z=n(9630),R=n(546);function ReportUserModal(e){e.userNickName,e.userEmail,e.profilePicURL;var i=e.isOpen,n=e.toggleModal,o=e.onCancel,a=e.onOk,r=(0,t.useState)(""),s=r[0],l=r[1];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(N.Z,{isOpen:i,toggleModal:n,onCancel:o,onOk:a,children:(0,p.jsxs)(U,{children:[(0,p.jsxs)(Z.W,{children:[(0,p.jsx)("label",{children:" 사용자 신고하기"}),(0,p.jsx)(T,{placeholder:"신고 사유를 입력하세요.",value:s,onChange:function(e){return l(e.currentTarget.value)}})]}),(0,p.jsx)(F,{children:"신고하기"})]})})})}var U=o.ZP.form.withConfig({displayName:"reportUserModal__UserReportForm",componentId:"sc-1lsffzm-0"})(["display:flex;flex-direction:column;justify-content:center;"]),T=(0,o.ZP)(R.K).withConfig({displayName:"reportUserModal__ReportTextArea",componentId:"sc-1lsffzm-1"})(["height:",";"],(0,l.hO)("140px")),F=(0,o.ZP)(s.LE).withConfig({displayName:"reportUserModal__SubmitReportBtn",componentId:"sc-1lsffzm-2"})(["width:",";height:;margin:0px auto;"],(0,l.hO)("180px"));function PlayerCard(e){var i=(0,t.useState)(!1),n=i[0],o=i[1],a=(0,t.useState)(!1),r=a[0],l=a[1],c=e.userNickName,m=e.profilePicURL,h=e.userEmail;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(E,{children:[(0,p.jsx)(z,{children:(0,p.jsx)(d.F,{width:"80px",height:"80px",children:(0,p.jsx)("img",{src:m||"-",alt:"프로필 이미지"})})}),(0,p.jsx)(K,{children:c||"라켓왕자"}),(0,p.jsxs)(A,{children:[(0,p.jsx)(s.LE,{width:"80px",height:"40px",colorstyle:"is-black",onClick:function(){return o(!0)},children:"정보"}),(0,p.jsx)(s.LE,{width:"80px",height:"40px",colorstyle:"is-white",bordercolor:"is-lightGray",onClick:function(){return l(!0)},children:"신고"})]})]}),(0,p.jsx)(UserInfoModal,{userNickName:c,userEmail:h,profilePicURL:m,isOpen:n,toggleModal:function(){return o(!n)},onCancel:function(){return o(!1)}}),(0,p.jsx)(ReportUserModal,{userNickName:c,userEmail:h,profilePicURL:m,isOpen:r,toggleModal:function(){return l(!r)},onCancel:function(){return l(!1)},onOk:function(){return l(!1)}})]})}var E=o.ZP.div.withConfig({displayName:"playerCard__PlayerCardContainer",componentId:"sc-1hoigf7-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:",";padding:",";background-color:",";border:solid 1px ",";border-radius:",";"],(0,l.hO)("100px"),(0,l.hO)("10px"),c.L_,c.yi,(0,l.hO)("10px")),z=o.ZP.div.withConfig({displayName:"playerCard__PlayerPicture",componentId:"sc-1hoigf7-1"})(["display:inline-block;border-radius:",";overflow:hidden;"],(0,l.hO)("10px")),K=o.ZP.span.withConfig({displayName:"playerCard__PlayerName",componentId:"sc-1hoigf7-2"})(["flex:1;margin:0px ",";font-family:",";font-size:",";color:",";"],(0,l.hO)("20px"),c.RU,c.Pg,c.SK),A=o.ZP.div.withConfig({displayName:"playerCard__ButtonArea",componentId:"sc-1hoigf7-3"})(["display:flex;flex-direction:row;align-items:center;gap:",";"],(0,l.hO)("10px"));function MyListItem(e){var i=e.postInfo,n=i.postNum,t=i.date,o=i.day,a=i.postTitle,r=i.userAddress,s=i.matchType,l=i.playerList,d=[{key:n+"",label:(0,p.jsxs)(S,{children:[(0,p.jsxs)(q,{id:"dataNDay",children:[t||"-","/",o||"-"]}),(0,p.jsxs)(H,{id:"title",children:[a||"-"," / ",r||"-"," / ",s||"-"]}),(0,p.jsx)(D,{id:"collapseIcon",width:"24px",height:"24px",children:(0,p.jsx)("img",{src:"/svg/arrow.svg"})})]}),children:(0,p.jsx)(W,{children:l.map(function(i,n){var t=e.postInfo.playerList[n],o=t.userNickName,a=t.profilePicURL,r=t.userEmail;return(0,p.jsx)(PlayerCard,{userNickName:o,profilePicURL:a,userEmail:r},n)})}),showArrow:!1}];return(0,p.jsx)(j.ZP,{theme:{components:{Collapse:{borderRadiusLG:20,headerBg:"".concat(c.K6),headerPadding:"10px 20px",colorTextHeading:"".concat(c.L_),fontFamily:"".concat(c.fL)}}},children:(0,p.jsx)(B,{"aria-role":"listitem",items:d,defaultActiveKey:["1"],bordered:!1})})}var B=(0,o.ZP)(b.Z).withConfig({displayName:"collapse__MyListItemContainer",componentId:"sc-3bhx6x-0"})(["width:100%;margin-bottom:",";.ant-collapse-content-box{background-color:",";border-radius:0px 0px "," ",";}"],(0,l.hO)("30px"),c.um,(0,l.hO)("20px"),(0,l.hO)("20px")),S=o.ZP.div.withConfig({displayName:"collapse__Header",componentId:"sc-3bhx6x-1"})(["display:grid;grid-template-columns:"," auto ",";grid-template-areas:'dateNDay title collapseIcon';gap:",";height:",";font-size:",";"],(0,l.hO)("75px"),(0,l.hO)("25px"),(0,l.hO)("15px"),(0,l.hO)("30px"),(0,l.hO)("".concat(c.kM))),q=o.ZP.span.withConfig({displayName:"collapse__DateNDay",componentId:"sc-3bhx6x-2"})(["grid-area:'dateNDay';text-align:left;"]),H=o.ZP.a.withConfig({displayName:"collapse__TitleLink",componentId:"sc-3bhx6x-3"})(["grid-area:'title';text-align:left;color:",";white-space:nowrap;overflow:hidden;&:hover,&:visited{color:",";}"],c.L_,c.L_),D=(0,o.ZP)(d.F).withConfig({displayName:"collapse__IconImageBox",componentId:"sc-3bhx6x-4"})(["grid-area:'collapseIcon';"]),W=o.ZP.div.withConfig({displayName:"collapse__PlayerCardContainer",componentId:"sc-3bhx6x-5"})(["padding:16px 4px 4px 4px;display:flex;flex-direction:column;gap:10px;"]);function MyMatchingList(e){var i=e.listType,n=[{postNum:1,date:"12/09",day:"일",postTitle:"매너 게임 하실 여성 분들 모여주세요:)",userAddress:"서울 강동구",matchType:"복식",playerList:[{userNickName:"뿡뿡이",userEmail:"bboongbboong2@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg"},{userNickName:"텐텐2",userEmail:"tenistenis@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1691813820762_750.jpeg"}]},{postNum:2,date:"11/25",day:"토",postTitle:"실력 같이 키우실 분!!",userAddress:"경기 하남시",matchType:"단식",playerList:[{userNickName:"김밥처돌이",userEmail:"lovekimbap@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1693052032553_750.jpeg"},{userNickName:"SeaZero95",userEmail:"haeyoung95@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1695367802898_750.jpeg"}]},{postNum:3,date:"11/07",day:"화",postTitle:"테니스 내가 짱임",userAddress:"서울 강동구",matchType:"단식",playerList:[{userNickName:"테니스의공주",userEmail:"princess77@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1668760095596_750.jpeg"},{userNickName:"내가짱",userEmail:"lordofsword@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1669467945861_750.jpeg"}]}],t=[{postNum:4,date:"11/07",day:"화",postTitle:"테니스 내가 짱임",userAddress:"서울 강동구",matchType:"단식",playerList:[{userNickName:"테니스의공주",userEmail:"princess77@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1668760095596_750.jpeg"},{userNickName:"내가짱",userEmail:"lordofsword@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1669467945861_750.jpeg"}]},{postNum:5,date:"12/09",day:"일",postTitle:"매너 게임 하실 여성 분들 모여주세요:)",userAddress:"서울 강동구",matchType:"복식",playerList:[{userNickName:"뿡뿡이",userEmail:"bboongbboong2@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1694838481851_1000.jpeg"},{userNickName:"텐텐2",userEmail:"tenistenis@naver.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1691813820762_750.jpeg"}]},{postNum:6,date:"11/25",day:"토",postTitle:"실력 같이 키우실 분!!",userAddress:"경기 하남시",matchType:"단식",playerList:[{userNickName:"김밥처돌이",userEmail:"lovekimbap@gmail.com",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1693052032553_750.jpeg"},{userNickName:"SeaZero95",userEmail:"haeyoung95@daum.net",profilePicURL:"https://contents.sixshop.com/thumbnails/uploadedFiles/56465/post/image_1695367802898_750.jpeg"}]}];return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(Y,{children:"submitted"===i?n.map(function(e,i){return(0,p.jsx)(MyListItem,{postInfo:n[i]},i+1)}):t.map(function(e,i){return(0,p.jsx)(MyListItem,{postInfo:t[i]},i+2)})})})}var Y=o.ZP.ul.withConfig({displayName:"myMatchingList__MyListContainer",componentId:"sc-m3fhzs-0"})(["min-width:100%;margin-top:",";"],(0,l.hO)("20px")),G=n(3233),X=n(8031),my=function(){var e=(0,G.Z)().checkLogin,i=(0,X.Z)().setMessage,n=(0,a.useRouter)(),o=[{key:"submittedMatchingList",label:"등록한 매칭",children:(0,p.jsx)(MyMatchingList,{listType:"submitted"})},{key:"appliedMatchingList",label:"신청한 매칭",children:(0,p.jsx)(MyMatchingList,{listType:"applied"})}];return(0,t.useEffect)(function(){e()||(i("error","로그인이 필요한 서비스입니다."),n.replace("/login"))},[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(MyProfile,{userInfos:{userNickName:"왕자",age:30,gender:"남",userAddress:"서울시 성동구",ntrp:"Pro",winningRate:[1,3],mannerPoint:85,realName:"김개발",email:"princeofracket@gmail.com",imageURL:""}}),(0,p.jsx)(s.h$,{colorstyle:"is-black","aria-label":"프로필 수정페이지로 이동",children:"프로필 수정"}),(0,p.jsx)(J,{children:(0,p.jsx)(r.o,{defaultActiveKey:"1",items:o})})]})},J=o.ZP.div.withConfig({displayName:"my__ListArea",componentId:"sc-1t8lp3t-0"})(["margin-top:30px;"])},9630:function(e,i,n){"use strict";n.d(i,{W:function(){return r}});var t=n(1150),o=n(3281),a=n(8633),r=t.ZP.div.withConfig({displayName:"input__InputBox",componentId:"sc-14crfe-0"})(["display:flex;flex-direction:column;margin-bottom:20px;position:",";label{display:block;font-family:Pretendard-Regular;font-size:",";margin-bottom:10px;color:",";}input{height:",";border:1px solid ",";background:",";border-radius:5px;padding:0 15px;&:focus{border:1px solid ",";outline:none;}}p{margin-top:5px;}span.limit-time{position:absolute;bottom:",";transform:translateY(50%);right:",";color:",";}"],function(e){return"true"===e.certify&&"relative"},function(e){return e.theme.isResponsive?"0.5rem":a.Mz},a.K_,(0,o.hO)("50px"),a.B_,a._2,a.K6,(0,o.hO)("25px"),(0,o.hO)("10px"),a._W)},481:function(e,i,n){"use strict";n.d(i,{o:function(){return s}});var t=n(1150),o=n(3281),a=n(7135),r=n(8633),s=(0,t.ZP)(a.Z).withConfig({displayName:"tab__CustomTab",componentId:"sc-1ttnouf-0"})(["width:100% !important;font-size:inherit !important;line-height:1 !important;color:inherit !important;div.ant-tabs-nav{margin:0 !important;background-color:"," !important;padding:"," "," !important;border-radius:50px !important;&::before{display:none !important;}div.ant-tabs-nav-wrap{display:block !important;&::before{display:none !important;}&::after{display:none !important;}div.ant-tabs-nav-list{display:flex !important;div.ant-tabs-tab{width:260px;!important;display:block !important;padding:11px 0 !important;font-size:inherit !important;margin:0 !important;text-align:center !important;font-size:"," !important;font-family:Pretendard-Regular;color:",";&.ant-tabs-tab-active{width:260px;text-align:center;background:",";padding:11px 0;border-radius:50px;border:1px solid ",";color:"," !important;.ant-tabs-tab-btn{color:",";}}}div.ant-tabs-ink-bar{display:none !important;}}}div.ant-tabs-nav-operations{display:none !important;}}"],r.um,(0,o.hO)("10px"),(0,o.hO)("20px"),(0,o.hO)(r.OI),r.Ie,r.L_,r.K6,r.K6,r.K6)},546:function(e,i,n){"use strict";n.d(i,{K:function(){return r}});var t=n(1150),o=n(3281),a=n(8633),r=t.ZP.textarea.withConfig({displayName:"textarea__TextArea",componentId:"sc-pnbdeq-0"})(["resize:none !important;min-width:100%;min-height:",";border:1px solid ",";background:",";border-radius:5px;padding:10px;font-family:",";font-size:",";&:focus{border:1px solid ",";outline:none;}"],(0,o.hO)("140px"),a.B_,a._2,a.bH,a.Mz,a.K6)},8031:function(e,i,n){"use strict";var t=n(6318),o=n(5890);i.Z=function(){var e=(0,t.Zl)(o.O),i=(0,t.sJ)(o.O);return{setMessage:function(n,t){e({isHandle:!i.isHandle,type:n,message:t})}}}},9245:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my",function(){return n(9892)}])}},function(e){e.O(0,[19,791,605,135,154,774,888,179],function(){return e(e.s=9245)}),_N_E=e.O()}]);