"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[2625],{2625:(n,r,e)=>{e.r(r),e.d(r,{default:()=>x});var t=e(5043),i=e(9650),a=e(3336),o=e(1806),c=e(4882),s=e(8076),h=e(2420),l=e(3460),d=e(8977),g=e(5475),A=e(579);const x=()=>{const[n,r]=(0,t.useState)([]),e=async()=>{const n=await fetch("https://demo-sigma.site/api/order"),e=await n.json();r(e.orders)};(0,t.useEffect)((()=>{e()}),[]);return(0,A.jsx)(i.A,{component:a.A,children:(0,A.jsxs)(o.A,{"aria-label":"simple table",children:[(0,A.jsx)(c.A,{children:(0,A.jsxs)(s.A,{children:[(0,A.jsx)(h.A,{children:"M\xe3 \u0111\u01a1n h\xe0ng"}),(0,A.jsx)(h.A,{align:"right",children:"T\xean kh\xe1ch h\xe0ng"}),(0,A.jsx)(h.A,{align:"right",children:"T\u1ed5ng ti\u1ec1n"}),(0,A.jsx)(h.A,{align:"right",children:"Tr\u1ea1ng th\xe1i"}),(0,A.jsx)(h.A,{align:"right",children:"H\xe0nh \u0111\u1ed9ng"})]})}),(0,A.jsx)(l.A,{children:n.map((n=>(0,A.jsxs)(s.A,{children:[(0,A.jsx)(h.A,{component:"th",scope:"row",children:n.code}),(0,A.jsx)(h.A,{align:"right",children:n.fullName}),(0,A.jsxs)(h.A,{align:"right",children:[n.total.toLocaleString()," VND"]}),(0,A.jsx)(h.A,{align:"right",children:n.status}),(0,A.jsxs)(h.A,{align:"right",children:[(0,A.jsx)(g.N_,{to:"/dashboard/order/".concat(n._id),children:(0,A.jsx)(d.A,{variant:"contained",color:"primary",style:{marginRight:"10px"},children:"Xem chi ti\u1ebft"})}),(0,A.jsx)(d.A,{variant:"contained",color:"secondary",onClick:()=>(async n=>{if(window.confirm("B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a \u0111\u01a1n h\xe0ng n\xe0y kh\xf4ng?"))try{if(!(await fetch("https://demo-sigma.site/api/order/".concat(n),{method:"DELETE"})).ok)throw new Error("Something went wrong");alert("\u0110\u01a1n h\xe0ng \u0111\xe3 \u0111\u01b0\u1ee3c x\xf3a th\xe0nh c\xf4ng!"),e()}catch(r){console.error("Error:",r),alert("C\xf3 l\u1ed7i x\u1ea3y ra khi x\xf3a \u0111\u01a1n h\xe0ng.")}})(n._id),children:"X\xf3a"})]})]},n._id)))})]})})}},9650:(n,r,e)=>{e.d(r,{A:()=>j});var t=e(8168),i=e(8587),a=e(5043),o=e(8387),c=e(8606),s=e(2876),h=e(4535),l=e(7056),d=e(2400);function g(n){return(0,d.Ay)("MuiTableContainer",n)}(0,l.A)("MuiTableContainer",["root"]);var A=e(579);const x=["className","component"],m=(0,h.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(n,r)=>r.root})({width:"100%",overflowX:"auto"}),j=a.forwardRef((function(n,r){const e=(0,s.A)({props:n,name:"MuiTableContainer"}),{className:a,component:h="div"}=e,l=(0,i.A)(e,x),d=(0,t.A)({},e,{component:h}),j=(n=>{const{classes:r}=n;return(0,c.A)({root:["root"]},g,r)})(d);return(0,A.jsx)(m,(0,t.A)({ref:r,as:h,className:(0,o.A)(j.root,a),ownerState:d},l))}))}}]);
//# sourceMappingURL=2625.cda1fce8.chunk.js.map