"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[8763],{8763:(e,n,s)=>{s.r(n),s.d(n,{default:()=>q});var i=s(4535),o=s(6446),a=s(8911),r=s(2720),t=s(4802),c=s(7392),l=s(8977),d=s(9012),h=s(5043),x=s(579);const m=(0,i.Ay)(c.A)((e=>{let{theme:n}=e;return{padding:n.spacing(.5)}})),u=()=>{const[e,n]=(0,h.useState)([]),[s,i]=(0,h.useState)(!1),[a,r]=(0,h.useState)({}),c=e=>()=>{n((n=>[...n,{message:e,key:(new Date).getTime()}])),s?i(!1):u()},u=()=>{e.length>0&&(r(e.shift()),i(!0))},j=(e,n)=>{"clickaway"!==n&&i(!1)};return(0,x.jsxs)(o.A,{children:[(0,x.jsx)(l.A,{onClick:c("Message A"),children:"Show message A"}),(0,x.jsx)(l.A,{onClick:c("Message B"),children:"Show message B"}),(0,x.jsx)(d.A,{open:s,onClose:j,autoHideDuration:6e3,onExited:()=>u(),ContentProps:{"aria-describedby":"message-id"},anchorOrigin:{vertical:"bottom",horizontal:"left"},message:(0,x.jsx)("span",{id:"message-id",children:a.message}),action:[(0,x.jsx)(l.A,{color:"secondary",size:"small",onClick:j,children:"UNDO"},"undo"),(0,x.jsx)(m,{color:"inherit","aria-label":"Close",onClick:j,children:(0,x.jsx)(t.A,{})},"close")]},a.key)]})};var j=s(7254),g=s(147),p=s(1215);const k=(0,i.Ay)("div")((e=>{let{theme:n}=e;return{"& .icon":{fontSize:20},"& .success":{backgroundColor:g.A[600]},"& .warning":{backgroundColor:p.A[700]},"& .error":{backgroundColor:n.palette.error.main},"& .info":{backgroundColor:n.palette.primary.main},"& .iconVariant":{opacity:.9,marginRight:n.spacing(1)},"& .message":{display:"flex",alignItems:"center"},"& .margin":{margin:n.spacing(1)}}}));function A(){const[e,n]=h.useState(!1);function s(e,s){"clickaway"!==s&&n(!1)}return(0,x.jsxs)(k,{children:[(0,x.jsx)(l.A,{variant:"outlined",className:"margin",onClick:function(){n(!0)},children:"Open success snackbar"}),(0,x.jsx)(d.A,{open:e,autoHideDuration:6e3,onClose:s,children:(0,x.jsx)(j.A,{onClose:s,severity:"success",sx:{width:"100%"},variant:"filled",children:"This is a success message!"})}),(0,x.jsx)(j.A,{onClose:s,sx:{m:1},severity:"error",variant:"filled",children:"This is an error message!"}),(0,x.jsx)(j.A,{onClose:s,sx:{m:1},severity:"warning",variant:"filled",children:"This is a warning message!"}),(0,x.jsx)(j.A,{onClose:s,sx:{m:1},severity:"info",variant:"filled",children:"This is an information message!"}),(0,x.jsx)(j.A,{onClose:s,sx:{m:1},severity:"success",variant:"filled",children:"This is a success message!"})]})}var v=s(4836);function C(e){return(0,x.jsx)(v.A,{...e,direction:"left"})}function b(e){return(0,x.jsx)(v.A,{...e,direction:"up"})}function f(e){return(0,x.jsx)(v.A,{...e,direction:"right"})}function y(e){return(0,x.jsx)(v.A,{...e,direction:"down"})}const T=()=>{const[e,n]=(0,h.useState)(!1),[s,i]=(0,h.useState)(void 0),a=e=>()=>{n(!0),i((()=>e))};return(0,x.jsxs)(o.A,{children:[(0,x.jsx)(l.A,{onClick:a(C),children:"Right"}),(0,x.jsx)(l.A,{onClick:a(b),children:"Up"}),(0,x.jsx)(l.A,{onClick:a(f),children:"Left"}),(0,x.jsx)(l.A,{onClick:a(y),children:"Down"}),(0,x.jsx)(d.A,{open:e,onClose:()=>n(!1),TransitionComponent:s,ContentProps:{"aria-describedby":"message-id"},message:(0,x.jsx)("span",{id:"message-id",children:"I love snacks"})})]})};var w=s(3773);const S=(0,x.jsx)(l.A,{color:"secondary",size:"small",children:"lorem ipsum dolorem"}),I=(0,i.Ay)("div")((e=>{let{theme:n}=e;return{maxWidth:600,"& .snackbar":{margin:n.spacing(1)}}}));function z(){return(0,x.jsxs)(I,{children:[(0,x.jsx)(w.A,{className:"snackbar",message:"I love snacks.",action:S}),(0,x.jsx)(w.A,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate."}),(0,x.jsx)(w.A,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.",action:S}),(0,x.jsx)(w.A,{className:"snackbar",message:"I love candy. I love cookies. I love cupcakes.           I love cheesecake. I love chocolate.",action:S})]})}function N(){const[e,n]=h.useState({open:!1,vertical:"top",horizontal:"center"}),{vertical:s,horizontal:i,open:a}=e,r=e=>()=>{n({open:!0,...e})};return(0,x.jsxs)(o.A,{children:[(0,x.jsx)(l.A,{onClick:r({vertical:"top",horizontal:"center"}),children:"Top-Center"}),(0,x.jsx)(l.A,{onClick:r({vertical:"top",horizontal:"right"}),children:"Top-Right"}),(0,x.jsx)(l.A,{onClick:r({vertical:"bottom",horizontal:"right"}),children:"Bottom-Right"}),(0,x.jsx)(l.A,{onClick:r({vertical:"bottom",horizontal:"center"}),children:"Bottom-Center"}),(0,x.jsx)(l.A,{onClick:r({vertical:"bottom",horizontal:"left"}),children:"Bottom-Left"}),(0,x.jsx)(l.A,{onClick:r({vertical:"top",horizontal:"left"}),children:"Top-Left"}),(0,x.jsx)(d.A,{open:a,onClose:function(){n({...e,open:!1})},anchorOrigin:{vertical:s,horizontal:i},ContentProps:{"aria-describedby":"message-id"},message:(0,x.jsx)("span",{id:"message-id",children:"I love snacks"})},"".concat(s,",").concat(i))]})}var B=s(6240);function D(){const e=(0,B.A)(),[n,s]=(0,h.useState)(!1);function i(e,n){"clickaway"!==n&&s(!1)}return(0,x.jsxs)(o.A,{children:[(0,x.jsx)(l.A,{onClick:function(){s(!0)},children:"Open simple snackbar"}),(0,x.jsx)(d.A,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:n,autoHideDuration:6e3,onClose:i,ContentProps:{"aria-describedby":"message-id"},message:(0,x.jsx)("span",{id:"message-id",children:"Note archived"}),action:[(0,x.jsx)(l.A,{color:"secondary",size:"small",onClick:i,children:"UNDO"},"undo"),(0,x.jsx)(c.A,{"aria-label":"Close",color:"inherit",onClick:i,sx:{padding:e.spacing(.5)},children:(0,x.jsx)(t.A,{})},"close")]})]})}var O=s(6987);function P(){const{enqueueSnackbar:e}=(0,O.dh)();return(0,x.jsxs)(h.Fragment,{children:[(0,x.jsx)(l.A,{onClick:()=>e("I love snacks."),children:"Show snackbar"}),(0,x.jsx)(l.A,{onClick:(n="warning",()=>{e("This is a warning message!",{variant:n})}),children:"Show warning snackbar"})]});var n}function R(){return(0,x.jsx)(O.n,{maxSnack:3,children:(0,x.jsx)(P,{})})}var H=s(6328),L=s(6258);function M(e){return(0,x.jsx)(v.A,{...e,direction:"up"})}function U(e){return(0,x.jsx)(H.A,{...e})}function F(){const[e,n]=h.useState({open:!1,Transition:L.A}),s=e=>()=>{n({open:!0,Transition:e})};return(0,x.jsxs)("div",{children:[(0,x.jsx)(l.A,{onClick:s(U),children:"Grow Transition"}),(0,x.jsx)(l.A,{onClick:s(L.A),children:"Fade Transition"}),(0,x.jsx)(l.A,{onClick:s(M),children:"Slide Transition"}),(0,x.jsx)(d.A,{open:e.open,onClose:function(){n({...e,open:!1})},TransitionComponent:e.Transition,ContentProps:{"aria-describedby":"message-id"},message:(0,x.jsx)("span",{id:"message-id",children:"I love snacks"})})]})}const _=(0,i.Ay)("div")((e=>{let{theme:n}=e;return{margin:"30px",[n.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[n.breakpoints.down("sm")]:{marginBottom:"16px"}}}})),q=()=>(0,x.jsxs)(_,{children:[(0,x.jsx)(o.A,{className:"breadcrumb",children:(0,x.jsx)(r.Qp,{routeSegments:[{name:"Material",path:"/material"},{name:"Snackbar"}]})}),(0,x.jsxs)(a.A,{spacing:3,children:[(0,x.jsx)(r.Tn,{title:"simple snackbar",children:(0,x.jsx)(D,{})}),(0,x.jsx)(r.Tn,{title:"customized snackbar",children:(0,x.jsx)(A,{})}),(0,x.jsx)(r.Tn,{title:"positioned snackbar",children:(0,x.jsx)(N,{})}),(0,x.jsx)(r.Tn,{title:"message length",children:(0,x.jsx)(z,{})}),(0,x.jsx)(r.Tn,{title:"transition",children:(0,x.jsx)(F,{})}),(0,x.jsx)(r.Tn,{title:"consecutive snackbar",children:(0,x.jsx)(u,{})}),(0,x.jsx)(r.Tn,{title:"Control Slide direction",children:(0,x.jsx)(T,{})}),(0,x.jsx)(r.Tn,{title:"complementary project",children:(0,x.jsx)(R,{})})]})]})}}]);
//# sourceMappingURL=8763.6cc629f3.chunk.js.map