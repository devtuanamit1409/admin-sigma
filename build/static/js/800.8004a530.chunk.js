"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[800],{800:(t,e,n)=>{n.r(e),n.d(e,{default:()=>b});var a=n(5043),i=n(1243),s=n(6446),r=n(5865),o=n(3360),c=n(8977),l=n(9012),h=n(7254),d=n(9650),u=n(3336),p=n(1806),g=n(4882),m=n(8076),x=n(2420),A=n(3460),j=n(7154),y=n(579);const b=()=>{const t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",p:4},[e,n]=(0,a.useState)(!1),[b,f]=(0,a.useState)(!1),[C,w]=(0,a.useState)({name:"",_id:null}),[v,k]=(0,a.useState)([]),[S,T]=(0,a.useState)(""),[_,B]=(0,a.useState)(!1),[E,M]=(0,a.useState)(""),[N,R]=(0,a.useState)(""),X=()=>{n(!1),T("")},W=()=>{f(!1),w({name:"",_id:null})},D=async()=>{const t=await j.A.get("https://demo-sigma.site/api/brand"),e=await t.data;k(e)};(0,a.useEffect)((()=>{D()}),[]);const H=(t,e)=>{"clickaway"!==e&&B(!1)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.A,{open:e,onClose:X,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,y.jsxs)(s.A,{sx:t,children:[(0,y.jsx)(r.A,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{paddingTop:2,paddingBottom:2},children:"Th\xeam th\u01b0\u01a1ng hi\u1ec7u"}),(0,y.jsx)(o.A,{fullWidth:!0,value:S,onChange:t=>T(t.target.value),placeholder:"Nh\u1eadp t\xean th\u01b0\u01a1ng hi\u1ec7u"}),(0,y.jsx)(s.A,{sx:{display:"flex",justifyContent:"center",padding:"20px 0"},children:(0,y.jsx)(c.A,{color:"success",variant:"contained",onClick:async()=>{try{200===(await j.A.post("https://demo-sigma.site/api/brand/create",{name:S})).status&&(D(),T(""),X(),M("Th\xeam th\u01b0\u01a1ng hi\u1ec7u th\xe0nh c\xf4ng!"),R("success"),B(!0))}catch(t){console.error("Error while creating category",t),M("Th\xeam th\u01b0\u01a1ng hi\u1ec7u th\u1ea5t b\u1ea1i! th\u01b0\u01a1ng hi\u1ec7u n\xe0y \u0111\xe3 t\u1ed3n t\u1ea1i!"),R("error"),B(!0)}},children:"L\u01b0u"})})]})}),(0,y.jsx)(i.A,{open:b,onClose:W,"aria-labelledby":"edit-modal-title","aria-describedby":"edit-modal-description",children:(0,y.jsxs)(s.A,{sx:t,children:[(0,y.jsx)(r.A,{id:"edit-modal-title",variant:"h6",component:"h2",sx:{paddingTop:2,paddingBottom:2},children:"Ch\u1ec9nh s\u1eeda th\u01b0\u01a1ng hi\u1ec7u"}),(0,y.jsx)(o.A,{fullWidth:!0,value:C.name,onChange:t=>{w({...C,name:t.target.value})},placeholder:"S\u1eeda t\xean th\u01b0\u01a1ng hi\u1ec7u"}),(0,y.jsx)(s.A,{sx:{display:"flex",justifyContent:"center",padding:"20px 0"},children:(0,y.jsx)(c.A,{color:"primary",variant:"contained",onClick:async()=>{try{200===(await j.A.patch("https://demo-sigma.site/api/brand/update/".concat(C._id),{name:C.name})).status&&(D(),W(),M("C\u1eadp nh\u1eadt th\u01b0\u01a1ng hi\u1ec7u th\xe0nh c\xf4ng!"),R("success"),B(!0))}catch(t){console.error("Error while updating category",t),M("C\u1eadp nh\u1eadt th\u01b0\u01a1ng hi\u1ec7u th\u1ea5t b\u1ea1i! T\xean th\u01b0\u01a1ng hi\u1ec7u \u0111\xe3 t\u1ed3n t\u1ea1i!"),R("error"),B(!0)}},children:"C\u1eadp nh\u1eadt"})})]})}),(0,y.jsx)(l.A,{open:_,autoHideDuration:6e3,onClose:H,children:(0,y.jsx)(h.A,{onClose:H,severity:N,sx:{width:"100%"},children:E})}),(0,y.jsx)(r.A,{sx:{textAlign:"center",padding:"20px",fontSize:"20px",fontWeight:"600"},children:"Danh s\xe1ch th\u01b0\u01a1ng hi\u1ec7u"}),(0,y.jsx)(s.A,{sx:{display:"flex",justifyContent:"start",paddingBottom:4},children:(0,y.jsx)(c.A,{onClick:()=>n(!0),variant:"contained",children:"Th\xeam th\u01b0\u01a1ng hi\u1ec7u"})}),(0,y.jsx)(d.A,{component:u.A,children:(0,y.jsxs)(p.A,{"aria-label":"simple table",children:[(0,y.jsx)(g.A,{children:(0,y.jsxs)(m.A,{children:[(0,y.jsx)(x.A,{align:"center",children:"T\xean th\u01b0\u01a1ng hi\u1ec7u"}),(0,y.jsx)(x.A,{align:"center",children:"H\xe0nh \u0111\u1ed9ng"})]})}),(0,y.jsx)(A.A,{children:v&&v.map((t=>(0,y.jsxs)(m.A,{children:[(0,y.jsx)(x.A,{align:"center",component:"th",scope:"row",children:t.name}),(0,y.jsxs)(x.A,{align:"center",children:[(0,y.jsx)(c.A,{variant:"contained",sx:{marginRight:4},onClick:()=>(async t=>{const e=await j.A.get("https://demo-sigma.site/api/brand/".concat(t));w(e.data),f(!0)})(t._id),color:"primary",children:"S\u1eeda"}),(0,y.jsx)(c.A,{onClick:()=>(async t=>{if(window.confirm("B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a th\u01b0\u01a1ng hi\u1ec7u n\xe0y kh\xf4ng?"))try{200===(await j.A.delete("https://demo-sigma.site/api/brand/delete/".concat(t))).status&&(D(),M("X\xf3a th\u01b0\u01a1ng hi\u1ec7u th\xe0nh c\xf4ng!"),R("success"),B(!0))}catch(e){console.error("Error while deleting category",e),M("X\xf3a th\u01b0\u01a1ng hi\u1ec7u th\u1ea5t b\u1ea1i!"),R("error"),B(!0)}})(t._id),variant:"contained",color:"secondary",children:"Xo\xe1"})]})]},t._id)))})]})})]})}},9650:(t,e,n)=>{n.d(e,{A:()=>x});var a=n(8168),i=n(8587),s=n(5043),r=n(8387),o=n(8606),c=n(2876),l=n(4535),h=n(7056),d=n(2400);function u(t){return(0,d.Ay)("MuiTableContainer",t)}(0,h.A)("MuiTableContainer",["root"]);var p=n(579);const g=["className","component"],m=(0,l.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,e)=>e.root})({width:"100%",overflowX:"auto"}),x=s.forwardRef((function(t,e){const n=(0,c.A)({props:t,name:"MuiTableContainer"}),{className:s,component:l="div"}=n,h=(0,i.A)(n,g),d=(0,a.A)({},n,{component:l}),x=(t=>{const{classes:e}=t;return(0,o.A)({root:["root"]},u,e)})(d);return(0,p.jsx)(m,(0,a.A)({ref:e,as:l,className:(0,r.A)(x.root,s),ownerState:d},h))}))}}]);
//# sourceMappingURL=800.8004a530.chunk.js.map