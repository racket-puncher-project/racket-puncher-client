(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{5628:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return AlarmPage}});var i=n(29),r=n(7794),a=n.n(r),s=n(1150),o=n(3281),c=n(528),l=n(8381),u=n(9787),f=n(8633),p=n(7731),d=n(5272),m=n(7294),g=n(5893);function AlarmPage(){var e,t=(0,m.useState)([]),n=t[0],r=t[1],s=(e=(0,i.Z)(a().mark(function _callee(){var e;return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.Z.getNotificationData();case 2:console.log((e=t.sent).data.response),r(e.data.response);case 5:case"end":return t.stop()}},_callee)})),function(){return e.apply(this,arguments)});return(0,m.useEffect)(function(){s()},[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{children:(0,g.jsx)(c.B,{children:"알림"})}),(0,g.jsx)(x,{children:null==n?void 0:n.map(function(e,t){return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(_,{children:[(0,g.jsxs)("div",{className:"left-box",children:[(0,g.jsx)("p",{className:"title",children:e.title}),(0,g.jsx)("p",{className:"contents",children:e.content})]}),(0,g.jsx)(l.F,{width:"40px",height:"40px",children:(0,g.jsx)("img",{src:"".concat(u.O,"/svg/bell-icon.svg"),alt:"알림"})})]},"alarmItem"+t)})})})]})}var h=s.ZP.div.withConfig({displayName:"alarm__PageTitleArea",componentId:"sc-1qky6o5-0"})(["margin:50px auto;"]),x=s.ZP.ul.withConfig({displayName:"alarm__AlarmList",componentId:"sc-1qky6o5-1"})(["width:100%;"]),_=s.ZP.li.withConfig({displayName:"alarm__AlarmListItem",componentId:"sc-1qky6o5-2"})(["display:flex;align-items:center;justify-content:space-between;padding:",";border-radius:20px;border:1px solid #dcdcdc;background:#f9f9f9;margin-bottom:20px;div.left-box{p{&.title{font-family:Pretendard-Bold;color:",";font-size:",";margin-bottom:5px;}&.contents{font-family:Pretendard-Regular;color:",";font-size:",";}}}"],function(e){return e.theme.isResponsive?(0,p.Q1)("20px"):(0,o.hO)("20px")},f.SK,function(e){return e.theme.isResponsive?(0,p.Q1)(f.Pg):(0,o.hO)(f.Pg)},f.SK,function(e){return e.theme.isResponsive?(0,p.Q1)(f.Mz):(0,o.hO)(f.Mz)})},5272:function(e,t,n){"use strict";var i=n(1466);t.Z={getUserInfo:function(){return i.Z.get("/api/users/my-page")},getUserHostedData:function(){return i.Z.get("/api/users/my-page/hosted")},getUserAppliedData:function(){return i.Z.get("/api/users/my-page/applied")},getNotificationData:function(){return i.Z.get("/api/users/notifications")}}},528:function(e,t,n){"use strict";n.d(t,{B:function(){return o}});var i=n(1150),r=n(3281),a=n(7731),s=n(8633),o=i.ZP.h1.withConfig({displayName:"titles__PageMainTitle",componentId:"sc-plpx1a-0"})(["text-align:center;font-family:",";font-size:",";color:",";"],s.w9,function(e){return e.theme.isResponsive?(0,a.Q1)("28px"):(0,r.hO)("".concat(s.hQ))},s.SK)},7454:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alarm",function(){return n(5628)}])}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7454)}),_N_E=e.O()}]);