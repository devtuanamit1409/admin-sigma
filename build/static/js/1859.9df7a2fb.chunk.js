"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[1859],{1859:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(5043),i=n(1243),s=n(6446),l=n(5865),o=n(3360),r=n(7392),c=n(8977),d=n(9012),p=n(7254),h=n(9650),u=n(3336),m=n(1806),x=n(4882),g=n(8076),b=n(2420),j=n(3460),A=n(2429),y=n(7154),f=n(579);const C=()=>{const[e,t]=(0,a.useState)(!1),[n,C]=(0,a.useState)(!1),[w,v]=(0,a.useState)({name:"",description:"",_id:null}),[S,k]=(0,a.useState)([]),[R,T]=(0,a.useState)(""),[L,_]=(0,a.useState)(""),[N,U]=(0,a.useState)(""),[F,B]=(0,a.useState)(!1),[M,W]=(0,a.useState)(""),[D,O]=(0,a.useState)(""),[X,E]=(0,a.useState)(null),[H,z]=(0,a.useState)(null),[I,P]=(0,a.useState)(null),[V,q]=(0,a.useState)(null),[G,J]=(0,a.useState)(null),[K,Q]=(0,a.useState)(null),[Y,Z]=(0,a.useState)(null),$=()=>{t(!1),T("")},ee=()=>{C(!1),v({name:"",_id:null})},te=async()=>{const e=await y.A.get("https://demo-sigma.site/api/collection"),t=await e.data;k(t)};(0,a.useEffect)((()=>{te()}),[]);const ne=(e,t)=>{"clickaway"!==t&&B(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.A,{open:e,onClose:$,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,f.jsxs)(s.A,{sx:{width:400,backgroundColor:"white",margin:"auto",padding:2},children:[(0,f.jsx)(l.A,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Th\xeam b\u1ed9 s\u01b0u t\u1eadp"}),(0,f.jsx)(o.A,{fullWidth:!0,value:R,onChange:e=>T(e.target.value),placeholder:"Nh\u1eadp t\xean b\u1ed9 s\u01b0u t\u1eadp",sx:{my:2}}),(0,f.jsx)(o.A,{fullWidth:!0,value:L,onChange:e=>_(e.target.value),placeholder:"Nh\u1eadp m\xf4 t\u1ea3",multiline:!0,rows:3,sx:{my:2}}),(0,f.jsxs)(s.A,{sx:{py:2},children:[(0,f.jsxs)("label",{htmlFor:"icon-button-file",children:["\u1ea2nh b\u1ed9 s\u01b0u t\u1eadp:",(0,f.jsx)("input",{className:"input-upload-image",accept:"image/*",id:"icon-button-file",type:"file",onChange:e=>{const t=e.target.files[0];t&&(E(URL.createObjectURL(t)),z(t))},style:{display:"none"}}),(0,f.jsx)(r.A,{color:"primary","aria-label":"upload picture",component:"span",children:(0,f.jsx)(A.A,{})})]}),X&&(0,f.jsx)("img",{src:X,width:150,alt:"Selected Image"})]}),(0,f.jsxs)(s.A,{sx:{py:2},children:[(0,f.jsxs)("label",{htmlFor:"icon-button-file-banner",children:["Banner:",(0,f.jsx)("input",{className:"input-upload-image",accept:"image/*",id:"icon-button-file-banner",type:"file",onChange:e=>{const t=e.target.files[0];t&&(U(URL.createObjectURL(t)),P(t))},style:{display:"none"}}),(0,f.jsx)(r.A,{color:"primary","aria-label":"upload banner",component:"span",children:(0,f.jsx)(A.A,{})})]}),N&&(0,f.jsx)("img",{src:N,width:150,alt:"Selected Banner"})]}),(0,f.jsx)(s.A,{sx:{py:2,display:"flex",justifyContent:"center"},children:(0,f.jsx)(c.A,{color:"success",variant:"contained",onClick:async()=>{try{const e=new FormData;e.append("name",R),e.append("description",L),H&&e.append("image",H),I&&e.append("banner",I);200===(await y.A.post("https://demo-sigma.site/api/collection/create",e,{headers:{"Content-Type":"multipart/form-data"}})).status&&(te(),$(),W("Th\xeam b\u1ed9 s\u01b0u t\u1eadp th\xe0nh c\xf4ng!"),O("success"),B(!0),T(""),_(""),E(null),U(null),z(null),P(null))}catch(e){console.error("Error while creating collection",e),W("Th\xeam b\u1ed9 s\u01b0u t\u1eadp th\u1ea5t b\u1ea1i!"),O("error"),B(!0)}},children:"L\u01b0u"})})]})}),(0,f.jsx)(i.A,{open:n,onClose:ee,children:(0,f.jsxs)(s.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",p:4},children:[(0,f.jsx)(l.A,{id:"edit-modal-title",variant:"h6",children:"Ch\u1ec9nh s\u1eeda b\u1ed9 s\u01b0u t\u1eadp"}),(0,f.jsx)(o.A,{fullWidth:!0,value:w.name,onChange:e=>v({...w,name:e.target.value}),placeholder:"T\xean b\u1ed9 s\u01b0u t\u1eadp"}),(0,f.jsx)(o.A,{fullWidth:!0,value:w.description,onChange:e=>v({...w,description:e.target.value}),placeholder:"M\xf4 t\u1ea3",multiline:!0,rows:3}),(0,f.jsxs)(s.A,{sx:{py:2},children:[(0,f.jsxs)("label",{htmlFor:"icon-button-file-edit",children:["\u1ea2nh b\u1ed9 s\u01b0u t\u1eadp:",(0,f.jsx)("input",{className:"input-upload-image",accept:"image/*",id:"icon-button-file-edit",type:"file",onChange:e=>{const t=e.target.files[0];t&&(Q(URL.createObjectURL(t)),Z(t))},style:{display:"none"}}),(0,f.jsx)(r.A,{color:"primary","aria-label":"upload picture",component:"span",children:(0,f.jsx)(A.A,{})})]}),K&&(0,f.jsx)("img",{src:"https://demo-sigma.site/"+K,width:150,alt:"Current Image"})]}),(0,f.jsxs)(s.A,{sx:{py:2},children:[(0,f.jsxs)("label",{htmlFor:"icon-button-file-banner-edit",children:["Banner:",(0,f.jsx)("input",{className:"input-upload-image",accept:"image/*",id:"icon-button-file-banner-edit",type:"file",onChange:e=>{const t=e.target.files[0];t&&(q(URL.createObjectURL(t)),J(t))},style:{display:"none"}}),(0,f.jsx)(r.A,{color:"primary","aria-label":"upload banner",component:"span",children:(0,f.jsx)(A.A,{})})]}),V&&(0,f.jsx)("img",{src:"https://demo-sigma.site/"+V,width:150,alt:"Current Banner"})]}),(0,f.jsx)(c.A,{color:"primary",variant:"contained",onClick:async()=>{const e=new FormData;e.append("name",w.name),e.append("description",w.description),Y&&e.append("image",Y),G&&e.append("banner",G);200===(await y.A.patch("https://demo-sigma.site/api/collection/update/".concat(w._id),e,{headers:{"Content-Type":"multipart/form-data"}})).status?(te(),ee(),W("C\u1eadp nh\u1eadt b\u1ed9 s\u01b0u t\u1eadp th\xe0nh c\xf4ng!"),O("success"),B(!0)):(W("C\u1eadp nh\u1eadt b\u1ed9 s\u01b0u t\u1eadp th\u1ea5t b\u1ea1i!"),O("error"),B(!0))},children:"C\u1eadp nh\u1eadt"})]})}),(0,f.jsx)(d.A,{open:F,autoHideDuration:2e3,onClose:ne,children:(0,f.jsx)(p.A,{onClose:ne,severity:D,sx:{width:"100%"},children:M})}),(0,f.jsx)(l.A,{sx:{textAlign:"center",padding:"20px",fontSize:"20px",fontWeight:"600"},children:"Danh s\xe1ch b\u1ed9 s\u01b0u t\u1eadp"}),(0,f.jsx)(s.A,{sx:{display:"flex",justifyContent:"start",paddingBottom:4},children:(0,f.jsx)(c.A,{onClick:()=>t(!0),variant:"contained",children:"Th\xeam b\u1ed9 s\u01b0u t\u1eadp"})}),(0,f.jsx)(h.A,{component:u.A,children:(0,f.jsxs)(m.A,{"aria-label":"simple table",children:[(0,f.jsx)(x.A,{children:(0,f.jsxs)(g.A,{children:[(0,f.jsx)(b.A,{align:"center",children:"T\xean b\u1ed9 s\u01b0u t\u1eadp"}),(0,f.jsx)(b.A,{align:"center",children:"\u1ea2nh b\u1ed9 s\u01b0u t\u1eadp"}),(0,f.jsx)(b.A,{align:"center",children:"H\xe0nh \u0111\u1ed9ng"})]})}),(0,f.jsx)(j.A,{children:S&&S.map((e=>(0,f.jsxs)(g.A,{children:[(0,f.jsx)(b.A,{align:"center",component:"th",scope:"row",children:e.name}),(0,f.jsx)(b.A,{align:"center",component:"th",scope:"row",children:(0,f.jsx)("img",{src:"https://demo-sigma.site/"+e.image,width:100,alt:""})}),(0,f.jsxs)(b.A,{align:"center",children:[(0,f.jsx)(c.A,{variant:"contained",sx:{marginRight:4},onClick:()=>(async e=>{const t=await y.A.get("https://demo-sigma.site/api/collection/".concat(e));v({name:t.data.name,description:t.data.description,_id:t.data._id,image:t.data.image,banner:t.data.banner}),Q(t.data.image),q(t.data.banner),Z(null),J(null),C(!0)})(e._id),color:"primary",children:"S\u1eeda"}),(0,f.jsx)(c.A,{onClick:()=>(async e=>{if(window.confirm("B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a b\u1ed9 s\u01b0u t\u1eadp n\xe0y kh\xf4ng?"))try{200===(await y.A.delete("https://demo-sigma.site/api/collection/delete/".concat(e))).status&&(te(),W("X\xf3a b\u1ed9 s\u01b0u t\u1eadp th\xe0nh c\xf4ng!"),O("success"),B(!0))}catch(t){console.error("Error while deleting category",t),W("X\xf3a b\u1ed9 s\u01b0u t\u1eadp th\u1ea5t b\u1ea1i!"),O("error"),B(!0)}})(e._id),variant:"contained",color:"secondary",children:"Xo\xe1"})]})]},e._id)))})]})})]})}},2429:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(6734),i=n(579);const s=(0,a.A)([(0,i.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,i.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"PhotoCamera")},9650:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(8168),i=n(8587),s=n(5043),l=n(8387),o=n(8606),r=n(2876),c=n(4535),d=n(7056),p=n(2400);function h(e){return(0,p.Ay)("MuiTableContainer",e)}(0,d.A)("MuiTableContainer",["root"]);var u=n(579);const m=["className","component"],x=(0,c.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),g=s.forwardRef((function(e,t){const n=(0,r.A)({props:e,name:"MuiTableContainer"}),{className:s,component:c="div"}=n,d=(0,i.A)(n,m),p=(0,a.A)({},n,{component:c}),g=(e=>{const{classes:t}=e;return(0,o.A)({root:["root"]},h,t)})(p);return(0,u.jsx)(x,(0,a.A)({ref:t,as:c,className:(0,l.A)(g.root,s),ownerState:p},d))}))}}]);
//# sourceMappingURL=1859.9df7a2fb.chunk.js.map