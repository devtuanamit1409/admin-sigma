"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[145],{145:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(5043),s=n(9252),r=n(6446),o=n(5865),c=n(9650),i=n(3336),l=n(1806),h=n(4882),d=n(8076),A=n(2420),m=n(3460),x=n(2110),j=n(6591),u=n(4059),g=n(7154),p=n(579);const f=()=>{const[e,t]=(0,a.useState)([]),[n,f]=(0,a.useState)(0),[v,w]=(0,a.useState)(10),[C,N]=(0,a.useState)(0);(0,a.useEffect)((()=>{(async()=>{try{const e=(await g.A.get("https://demo-sigma.site/api/contact?page=".concat(n+1,"&limit=").concat(v))).data;t(e.contacts),N(e.totalContacts)}catch(e){console.error(e)}})()}),[n,v]);return(0,p.jsx)(s.A,{maxWidth:"lg",children:(0,p.jsxs)(r.A,{sx:{my:4},children:[(0,p.jsx)(o.A,{variant:"h4",component:"h1",gutterBottom:!0,children:"Contact List"}),(0,p.jsxs)(c.A,{component:i.A,children:[(0,p.jsxs)(l.A,{children:[(0,p.jsx)(h.A,{children:(0,p.jsxs)(d.A,{children:[(0,p.jsx)(A.A,{children:"Image"}),(0,p.jsx)(A.A,{children:"First Name"}),(0,p.jsx)(A.A,{children:"Last Name"}),(0,p.jsx)(A.A,{children:"Phone"}),(0,p.jsx)(A.A,{children:"Birth Date"}),(0,p.jsx)(A.A,{children:"Email"}),(0,p.jsx)(A.A,{children:"Title"}),(0,p.jsx)(A.A,{children:"Content"})]})}),(0,p.jsx)(m.A,{children:e.map((e=>(0,p.jsxs)(d.A,{children:[(0,p.jsx)(A.A,{children:e.image&&(0,p.jsx)(x.A,{children:(0,p.jsx)(j.A,{component:"img",height:"140",image:"https://demo-sigma.site/".concat(e.image.replace(/\\/g,"/")),alt:e.firstName})})}),(0,p.jsx)(A.A,{children:e.firstName}),(0,p.jsx)(A.A,{children:e.lastName}),(0,p.jsx)(A.A,{children:e.phone}),(0,p.jsx)(A.A,{children:new Date(e.birthDate).toLocaleDateString()}),(0,p.jsx)(A.A,{children:e.email}),(0,p.jsx)(A.A,{children:e.title}),(0,p.jsx)(A.A,{children:e.content})]},e._id)))})]}),(0,p.jsx)(u.A,{rowsPerPageOptions:[5,10,25],component:"div",count:C,rowsPerPage:v,page:n,onPageChange:(e,t)=>{f(t)},onRowsPerPageChange:e=>{w(parseInt(e.target.value,10)),f(0)}})]})]})})}},9650:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8168),s=n(8587),r=n(5043),o=n(8387),c=n(8606),i=n(2876),l=n(4535),h=n(7056),d=n(2400);function A(e){return(0,d.Ay)("MuiTableContainer",e)}(0,h.A)("MuiTableContainer",["root"]);var m=n(579);const x=["className","component"],j=(0,l.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),u=r.forwardRef((function(e,t){const n=(0,i.A)({props:e,name:"MuiTableContainer"}),{className:r,component:l="div"}=n,h=(0,s.A)(n,x),d=(0,a.A)({},n,{component:l}),u=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},A,t)})(d);return(0,m.jsx)(j,(0,a.A)({ref:t,as:l,className:(0,o.A)(u.root,r),ownerState:d},h))}))}}]);
//# sourceMappingURL=145.be0d260a.chunk.js.map