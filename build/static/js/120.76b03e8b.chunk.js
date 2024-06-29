"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[120],{7739:(e,o,t)=>{t.d(o,{A:()=>D});var r=t(8587),n=t(8168),a=t(5043),p=t(8387),l=t(1140),i=t(2205),s=t(8606),c=t(7266),u=t(875),m=t(4535),d=t(6240),h=t(2876),g=t(6803),f=t(6328),A=t(5622),v=t(3319),b=t(5849),w=t(5879),y=t(7844),x=t(4516),T=t(7056),R=t(2400);function P(e){return(0,R.Ay)("MuiTooltip",e)}const M=(0,T.A)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var C=t(579);const L=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];const S=(0,m.Ay)(A.A,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.popper,!t.disableInteractive&&o.popperInteractive,t.arrow&&o.popperArrow,!t.open&&o.popperClose]}})((e=>{let{theme:o,ownerState:t,open:r}=e;return(0,n.A)({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{['&[data-popper-placement*="bottom"] .'.concat(M.arrow)]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},['&[data-popper-placement*="top"] .'.concat(M.arrow)]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},['&[data-popper-placement*="right"] .'.concat(M.arrow)]:(0,n.A)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),['&[data-popper-placement*="left"] .'.concat(M.arrow)]:(0,n.A)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})})),O=(0,m.Ay)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.tooltip,t.touch&&o.touch,t.arrow&&o.tooltipArrow,o["tooltipPlacement".concat((0,g.A)(t.placement.split("-")[0]))]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,n.A)({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:(0,c.X4)(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:"".concat((r=16/14,Math.round(1e5*r)/1e5),"em"),fontWeight:o.typography.fontWeightRegular},{[".".concat(M.popper,'[data-popper-placement*="left"] &')]:(0,n.A)({transformOrigin:"right center"},t.isRtl?(0,n.A)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.A)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[".".concat(M.popper,'[data-popper-placement*="right"] &')]:(0,n.A)({transformOrigin:"left center"},t.isRtl?(0,n.A)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.A)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[".".concat(M.popper,'[data-popper-placement*="top"] &')]:(0,n.A)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[".".concat(M.popper,'[data-popper-placement*="bottom"] &')]:(0,n.A)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})});var r})),k=(0,m.Ay)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})((e=>{let{theme:o}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:(0,c.X4)(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}));let E=!1;const I=new l.E;let N={x:0,y:0};function B(e,o){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];o&&o(t,...n),e(t,...n)}}const D=a.forwardRef((function(e,o){var t,c,m,T,R,M,D,F,W,X,j,z,U,H,V,_,Y,q,G;const J=(0,h.A)({props:e,name:"MuiTooltip"}),{arrow:K=!1,children:Q,components:Z={},componentsProps:$={},describeChild:ee=!1,disableFocusListener:oe=!1,disableHoverListener:te=!1,disableInteractive:re=!1,disableTouchListener:ne=!1,enterDelay:ae=100,enterNextDelay:pe=0,enterTouchDelay:le=700,followCursor:ie=!1,id:se,leaveDelay:ce=0,leaveTouchDelay:ue=1500,onClose:me,onOpen:de,open:he,placement:ge="bottom",PopperComponent:fe,PopperProps:Ae={},slotProps:ve={},slots:be={},title:we,TransitionComponent:ye=f.A,TransitionProps:xe}=J,Te=(0,r.A)(J,L),Re=a.isValidElement(Q)?Q:(0,C.jsx)("span",{children:Q}),Pe=(0,d.A)(),Me=(0,u.I)(),[Ce,Le]=a.useState(),[Se,Oe]=a.useState(null),ke=a.useRef(!1),Ee=re||ie,Ie=(0,l.A)(),Ne=(0,l.A)(),Be=(0,l.A)(),De=(0,l.A)(),[Fe,We]=(0,x.A)({controlled:he,default:!1,name:"Tooltip",state:"open"});let Xe=Fe;const je=(0,w.A)(se),ze=a.useRef(),Ue=(0,v.A)((()=>{void 0!==ze.current&&(document.body.style.WebkitUserSelect=ze.current,ze.current=void 0),De.clear()}));a.useEffect((()=>Ue),[Ue]);const He=e=>{I.clear(),E=!0,We(!0),de&&!Xe&&de(e)},Ve=(0,v.A)((e=>{I.start(800+ce,(()=>{E=!1})),We(!1),me&&Xe&&me(e),Ie.start(Pe.transitions.duration.shortest,(()=>{ke.current=!1}))})),_e=e=>{ke.current&&"touchstart"!==e.type||(Ce&&Ce.removeAttribute("title"),Ne.clear(),Be.clear(),ae||E&&pe?Ne.start(E?pe:ae,(()=>{He(e)})):He(e))},Ye=e=>{Ne.clear(),Be.start(ce,(()=>{Ve(e)}))},{isFocusVisibleRef:qe,onBlur:Ge,onFocus:Je,ref:Ke}=(0,y.A)(),[,Qe]=a.useState(!1),Ze=e=>{Ge(e),!1===qe.current&&(Qe(!1),Ye(e))},$e=e=>{Ce||Le(e.currentTarget),Je(e),!0===qe.current&&(Qe(!0),_e(e))},eo=e=>{ke.current=!0;const o=Re.props;o.onTouchStart&&o.onTouchStart(e)},oo=e=>{eo(e),Be.clear(),Ie.clear(),Ue(),ze.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",De.start(le,(()=>{document.body.style.WebkitUserSelect=ze.current,_e(e)}))},to=e=>{Re.props.onTouchEnd&&Re.props.onTouchEnd(e),Ue(),Be.start(ue,(()=>{Ve(e)}))};a.useEffect((()=>{if(Xe)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ve(e)}}),[Ve,Xe]);const ro=(0,b.A)(Re.ref,Ke,Le,o);we||0===we||(Xe=!1);const no=a.useRef(),ao={},po="string"===typeof we;ee?(ao.title=Xe||!po||te?null:we,ao["aria-describedby"]=Xe?je:null):(ao["aria-label"]=po?we:null,ao["aria-labelledby"]=Xe&&!po?je:null);const lo=(0,n.A)({},ao,Te,Re.props,{className:(0,p.A)(Te.className,Re.props.className),onTouchStart:eo,ref:ro},ie?{onMouseMove:e=>{const o=Re.props;o.onMouseMove&&o.onMouseMove(e),N={x:e.clientX,y:e.clientY},no.current&&no.current.update()}}:{});const io={};ne||(lo.onTouchStart=oo,lo.onTouchEnd=to),te||(lo.onMouseOver=B(_e,lo.onMouseOver),lo.onMouseLeave=B(Ye,lo.onMouseLeave),Ee||(io.onMouseOver=_e,io.onMouseLeave=Ye)),oe||(lo.onFocus=B($e,lo.onFocus),lo.onBlur=B(Ze,lo.onBlur),Ee||(io.onFocus=$e,io.onBlur=Ze));const so=a.useMemo((()=>{var e;let o=[{name:"arrow",enabled:Boolean(Se),options:{element:Se,padding:4}}];return null!=(e=Ae.popperOptions)&&e.modifiers&&(o=o.concat(Ae.popperOptions.modifiers)),(0,n.A)({},Ae.popperOptions,{modifiers:o})}),[Se,Ae]),co=(0,n.A)({},J,{isRtl:Me,arrow:K,disableInteractive:Ee,placement:ge,PopperComponentProp:fe,touch:ke.current}),uo=(e=>{const{classes:o,disableInteractive:t,arrow:r,touch:n,placement:a}=e,p={popper:["popper",!t&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch","tooltipPlacement".concat((0,g.A)(a.split("-")[0]))],arrow:["arrow"]};return(0,s.A)(p,P,o)})(co),mo=null!=(t=null!=(c=be.popper)?c:Z.Popper)?t:S,ho=null!=(m=null!=(T=null!=(R=be.transition)?R:Z.Transition)?T:ye)?m:f.A,go=null!=(M=null!=(D=be.tooltip)?D:Z.Tooltip)?M:O,fo=null!=(F=null!=(W=be.arrow)?W:Z.Arrow)?F:k,Ao=(0,i.X)(mo,(0,n.A)({},Ae,null!=(X=ve.popper)?X:$.popper,{className:(0,p.A)(uo.popper,null==Ae?void 0:Ae.className,null==(j=null!=(z=ve.popper)?z:$.popper)?void 0:j.className)}),co),vo=(0,i.X)(ho,(0,n.A)({},xe,null!=(U=ve.transition)?U:$.transition),co),bo=(0,i.X)(go,(0,n.A)({},null!=(H=ve.tooltip)?H:$.tooltip,{className:(0,p.A)(uo.tooltip,null==(V=null!=(_=ve.tooltip)?_:$.tooltip)?void 0:V.className)}),co),wo=(0,i.X)(fo,(0,n.A)({},null!=(Y=ve.arrow)?Y:$.arrow,{className:(0,p.A)(uo.arrow,null==(q=null!=(G=ve.arrow)?G:$.arrow)?void 0:q.className)}),co);return(0,C.jsxs)(a.Fragment,{children:[a.cloneElement(Re,lo),(0,C.jsx)(mo,(0,n.A)({as:null!=fe?fe:A.A,placement:ge,anchorEl:ie?{getBoundingClientRect:()=>({top:N.y,left:N.x,right:N.x,bottom:N.y,width:0,height:0})}:Ce,popperRef:no,open:!!Ce&&Xe,id:je,transition:!0},io,Ao,{popperOptions:so,children:e=>{let{TransitionProps:o}=e;return(0,C.jsx)(ho,(0,n.A)({timeout:Pe.transitions.duration.shorter},o,vo,{children:(0,C.jsxs)(go,(0,n.A)({},bo,{children:[we,K?(0,C.jsx)(fo,(0,n.A)({},wo,{ref:Oe})):null]}))}))}}))]})}))},5879:(e,o,t)=>{t.d(o,{A:()=>r});const r=t(992).A}}]);
//# sourceMappingURL=120.76b03e8b.chunk.js.map