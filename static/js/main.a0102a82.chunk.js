(this.webpackJsonptipedia=this.webpackJsonptipedia||[]).push([[0],{113:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(10),o=n.n(i),s=(n(113),n(16)),l=n(20),j=n(36),d=n(4),u=n(169),b=n(184),h=n(191),p=n(168),O=n(183),x=n(185),g=n(98),f=n.n(g),m=n(163),v=n(128),w=n(166),k=n(167),y=n(189),S=n(85),C=n.n(S),N=n(86),B=n.n(N),I=n(87),W=n.n(I),T=n(88),D=n.n(T),M=n(91),R=n.n(M),z=n(89),F=n.n(z),H=n(90),L=n.n(H),P=n(47),E=n.n(P),_=n(58),K=n(17),Y=n(102),G={keys:[{name:"name",weight:.45},{name:"aliases",weight:.4},{name:"content_for_search",weight:.15}]},J=function e(t){Object(K.a)(this,e),this.items=t,this.fuse=void 0,this.fuse=new Y.a(t,G)},V=new Map;function A(e){return U.apply(this,arguments)}function U(){return(U=Object(_.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V.has(t)){e.next=10;break}return e.next=3,fetch("/tipedia"+"/data/".concat(t,"/index.json"));case 3:return n=e.sent,e.t0=J,e.next=7,n.json();case 7:e.t1=e.sent,a=new e.t0(e.t1),V.set(t,a);case 10:return e.abrupt("return",V.get(t));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=n(162),q=n(8);function Q(){var e=Object(q.f)(),t=Object(y.a)(),n=t.t,r=t.i18n,i=Object(c.useState)([]),o=Object(s.a)(i,2),l=o[0],j=o[1];return Object(X.a)((function(){A(r.language).then((function(e){j(e.items)}))})),Object(a.jsxs)(m.a,{children:[Object(a.jsxs)(v.a,{button:!0,component:"a",onClick:function(){e.replace("/")},children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,{})}),Object(a.jsx)(k.a,{primary:n("Home")})]}),Object(a.jsxs)(v.a,{button:!0,component:"a",onClick:function(){var t=l[Math.floor(Math.random()*l.length)];e.replace("/prerendered/".concat(null===t||void 0===t?void 0:t.path))},children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(k.a,{primary:n("Random")})]}),Object(a.jsx)(p.a,{}),Object(a.jsxs)(v.a,{button:!0,children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(W.a,{})}),Object(a.jsx)(k.a,{primary:n("How")})]}),Object(a.jsxs)(v.a,{button:!0,children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(k.a,{primary:n("Why")})]}),Object(a.jsxs)(v.a,{button:!0,children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(F.a,{})}),Object(a.jsx)(k.a,{primary:n("Where")})]}),Object(a.jsxs)(v.a,{button:!0,children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(k.a,{primary:n("WhatIf")})]}),Object(a.jsx)(p.a,{}),Object(a.jsxs)(v.a,{button:!0,component:"a",onClick:function(){e.replace("/prerendered/about%2Findex.htmlpart")},children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(R.a,{})}),Object(a.jsx)(k.a,{primary:n("Info")})]})]})}var Z=n(97),$=n(66);function ee(){var e=Object(y.a)(),t=e.t,n=e.i18n,r=Object(c.useState)([]),i=Object(s.a)(r,2),o=i[0],l=i[1];return Object(X.a)((function(){A(n.language).then((function(e){return l(e.items)}))})),Object(a.jsxs)("div",{children:[Object(a.jsx)($.a,{variant:"h3",component:"h4",gutterBottom:!0,children:"Welcome to Tipedia"}),Object(a.jsx)($.a,{variant:"h6",gutterBottom:!0,children:"the free encyclopedia for TiDB and related works"}),Object(a.jsxs)($.a,{gutterBottom:!0,children:[t("All")," ",o.length," ",t("items")]})]})}var te=n(170),ne=n(172),ae=n(171),ce=n(173),re=Object(u.a)({root:{maxWidth:600,marginBottom:40},title:{fontSize:14}});function ie(e){var t=e.variant,n=e.promote,r=Object(y.a)(),i=r.t,o=r.i18n,l=Object(q.f)(),j=Object(c.useState)(null),d=Object(s.a)(j,2),u=d[0],b=d[1];Object(X.a)((function(){A(o.language).then((function(e){var n=(null===e||void 0===e?void 0:e.items.filter((function(e){return e.path.startsWith(t)})))||[];b(n[Math.floor(Math.random()*n.length)]),setInterval((function(){b(n[Math.floor(Math.random()*n.length)])}),3e3)}))}));var h=re();return Object(a.jsxs)(te.a,{className:h.root,children:[Object(a.jsxs)(ae.a,{children:[Object(a.jsx)($.a,{className:h.title,color:"textSecondary",gutterBottom:!0,children:i("DoYouKnow")}),Object(a.jsx)($.a,{children:i(n)}),Object(a.jsx)($.a,{variant:"h5",component:"h2",children:null===u||void 0===u?void 0:u.name})]}),Object(a.jsx)(ne.a,{children:Object(a.jsx)(ce.a,{size:"small",variant:"contained",onClick:function(){l.replace("/prerendered/".concat(null===u||void 0===u?void 0:u.path))},disableElevation:!0,children:i("FindOutHere")})})]})}var oe=n(174),se=n(104),le=n(175),je=n(176),de=n(177),ue=n(178),be=n(179),he=new Map([["TiDB","#37cad9"],["TiKV","#f83700"],["PD","#37cad9"],["txn","#f8a945"],["sig/txn","#f8a945"],["\u641e\u7b11","#ffff00"]]),pe=Object(u.a)({table:{maxWidth:650},row:{cursor:"pointer","&:hover":{background:"#f1f1f1"}},tag:{display:"inline-block",color:"white",padding:4,borderRadius:4,marginRight:4,fontWeight:"bold",height:26,lineHeight:"20px"}});function Oe(e){var t=e.variant,n=pe(),r=Object(y.a)(),i=r.t,o=r.i18n,l=Object(q.f)(),j=Object(c.useState)([]),d=Object(s.a)(j,2),u=d[0],b=d[1];return Object(X.a)((function(){A(o.language).then((function(e){var n=(null===e||void 0===e?void 0:e.items.filter((function(e){return e.path.startsWith(t)})))||[];b(n)}))})),Object(a.jsx)(oe.a,{component:se.a,children:Object(a.jsxs)(le.a,{className:n.table,"aria-label":"table",children:[Object(a.jsx)(je.a,{children:Object(a.jsxs)(de.a,{children:[Object(a.jsx)(ue.a,{children:i("Name")}),Object(a.jsx)(ue.a,{children:i("Category")}),Object(a.jsx)(ue.a,{children:i("Tags")})]})}),Object(a.jsx)(be.a,{children:u.map((function(e){return Object(a.jsxs)(de.a,{className:n.row,onClick:function(){l.replace("/prerendered/".concat(e.path))},children:[Object(a.jsx)(ue.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(ue.a,{children:i(e.category)}),Object(a.jsx)(ue.a,{children:e.tags.map((function(e){return Object(a.jsx)("span",{className:n.tag,style:{background:he.get(e)||"gray"},children:e},e)}))})]},e.name)}))})]})})}function xe(){return Object(a.jsxs)(c.Suspense,{fallback:"loading",children:[Object(a.jsx)(ee,{}),Object(a.jsx)(ie,{variant:"what",promote:"DoYouKnowWhatIs"}),Object(a.jsx)(ie,{variant:"how",promote:"DoYouKnowHowTo"}),Object(a.jsx)(ie,{variant:"why",promote:"DoYouKnowWhy"}),Object(a.jsx)(Oe,{variant:"what"})]})}function ge(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(y.a)().i18n,l=decodeURIComponent(e.path);return Object(_.a)(E.a.mark((function e(){var t,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tipedia"+"/data/".concat(o.language,"/").concat(l));case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})))(),Object(a.jsx)("div",{className:"page",dangerouslySetInnerHTML:{__html:r}})}function fe(){var e=Object(q.g)().path;return Object(a.jsx)(c.Suspense,{fallback:"loading",children:Object(a.jsx)(ge,{path:e})})}var me=n(182),ve=n(94),we=n.n(ve),ke=n(11),ye=n(181),Se=n(187),Ce=n(95),Ne=n.n(Ce),Be=n(96),Ie=n.n(Be),We=n(188),Te=n(180),De=n(92),Me=n.n(De),Re=n(93),ze=n.n(Re),Fe=Object(u.a)((function(e){return{languageName:Object(l.a)({},e.breakpoints.down("xs"),{display:"none"})}}));function He(){var e=Fe(),t=Object(c.useState)(null),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(y.a)().i18n,l=function(){i(null)},j=function(e){null!==e&&o.changeLanguage(e).then((function(){return window.location.reload()})),l()};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(ce.a,{color:"inherit","aria-controls":"language-menu","aria-haspopup":"true",onClick:function(e){return i(e.currentTarget)},children:[Object(a.jsx)(Me.a,{}),Object(a.jsx)("span",{className:e.languageName,children:function(e){switch(e){case"zh":case"zh-CN":return"\u4e2d\u6587";case"en":return"English";default:console.error(e)}}(o.language)}),Object(a.jsx)(ze.a,{})]}),Object(a.jsxs)(We.a,{id:"language-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:l,children:[Object(a.jsx)(Te.a,{onClick:function(){return j("zh")},children:"\u4e2d\u6587"},"zh"),Object(a.jsx)(Te.a,{onClick:function(){return j("en")},children:"English"},"en")]})]})}var Le=Object(u.a)((function(e){return{toolbar:Object(l.a)({paddingRight:24},e.breakpoints.down("sm"),{paddingRight:0}),title:{flexGrow:1},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:Object(l.a)({},e.breakpoints.up("sm"),{marginRight:36}),menuButtonHidden:{display:"none"},search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ke.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ke.b)(e.palette.common.white,.25)},marginLeft:0,width:"auto"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1)}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function Pe(e){var t=e.handleDrawerOpen,n=e.open,r=e.onSearch,i=Le();return Object(a.jsx)(ye.a,{position:"absolute",className:Object(d.a)(i.appBar,n&&i.appBarShift),children:Object(a.jsxs)(me.a,{className:i.toolbar,children:[Object(a.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:t,className:Object(d.a)(i.menuButton,n&&i.menuButtonHidden),children:Object(a.jsx)(we.a,{})}),Object(a.jsx)($.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:i.title,children:"Tipedia"}),Object(a.jsx)(c.Suspense,{fallback:"loading",children:Object(a.jsx)(He,{})}),Object(a.jsxs)("div",{className:i.search,children:[Object(a.jsx)("div",{className:i.searchIcon,children:Object(a.jsx)(Ne.a,{})}),Object(a.jsx)(Se.a,{placeholder:"Search\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return r(e.target.value)}})]}),Object(a.jsx)(O.a,{href:"https://github.com/longfangsong/tipedia",color:"inherit",children:Object(a.jsx)(Ie.a,{})})]})})}var Ee=n(190),_e=Object(u.a)((function(e){return Object(Ee.a)({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,color:e.palette.text.primary},notFound:{color:"#818181"}})}));function Ke(e){var t=e.to_search,n=Object(q.f)(),r=Object(y.a)().i18n,i=Object(c.useState)(null),o=Object(s.a)(i,2),l=o[0],j=o[1],d=_e();Object(X.a)((function(){A(r.language).then((function(e){j(e||null)}))}));return Object(a.jsx)(m.a,{className:d.root,children:function(){var e=null===l||void 0===l?void 0:l.fuse.search(t);return 0===(null===e||void 0===e?void 0:e.length)?Object(a.jsx)(v.a,{className:d.notFound,children:"\u65e0\u7ed3\u679c"}):Object(a.jsx)(a.Fragment,{children:null===e||void 0===e?void 0:e.map((function(e){return Object(a.jsx)(v.a,{button:!0,component:"a",onClick:function(){n.replace("/prerendered/".concat(e.item.path))},children:Object(a.jsx)(k.a,{primary:e.item.name})},e.item.name)}))})}()})}var Ye=n(192),Ge=Object(u.a)((function(e){return{root:{display:"flex"},toolbarIcon:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(l.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},backdrop:{zIndex:e.zIndex.drawer-1,color:"white"}}}));var Je=function(){var e=Ge(),t=Object(c.useState)(window.innerWidth>420),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(""),l=Object(s.a)(o,2),j=l[0],u=l[1];return Object(a.jsx)(Z.a,{children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(b.a,{}),Object(a.jsx)(Pe,{handleDrawerOpen:function(){return i(!0)},open:r,onSearch:u}),Object(a.jsxs)(h.a,{variant:"permanent",classes:{paper:Object(d.a)(e.drawerPaper,!r&&e.drawerPaperClose)},open:r,children:[Object(a.jsx)("div",{className:e.toolbarIcon,children:Object(a.jsx)(O.a,{onClick:function(){return i(!1)},children:Object(a.jsx)(f.a,{})})}),Object(a.jsx)(p.a,{}),Object(a.jsx)(c.Suspense,{fallback:"loading",children:Object(a.jsx)(Q,{})})]}),Object(a.jsxs)("main",{className:e.content,children:[Object(a.jsx)(Ye.a,{className:e.backdrop,open:""!==j,onClick:function(){return u("")},children:Object(a.jsx)(c.Suspense,{fallback:"loading",children:Object(a.jsx)(Ke,{to_search:j})})}),Object(a.jsx)("div",{className:e.appBarSpacer}),Object(a.jsx)(x.a,{maxWidth:"lg",className:e.container,children:Object(a.jsxs)(q.c,{children:[Object(a.jsx)(q.a,{exact:!0,path:"/",children:Object(a.jsx)(xe,{})}),Object(a.jsx)(q.a,{path:"/prerendered/:path",children:Object(a.jsx)(fe,{})})]})})]})]})})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Ae=n(72),Ue=n(51),Xe=n(99),qe=n(101);Ae.a.use(Xe.a).use(qe.a).use(Ue.e).init({fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},backend:{loadPath:"/tipedia/locales/{{lng}}/{{ns}}.json"}});Ae.a;o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Je,{})}),document.getElementById("root")),Ve()}},[[126,1,2]]]);
//# sourceMappingURL=main.a0102a82.chunk.js.map