"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[1121],{3502:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var n=t(5043),i=t(9012),s=t(7254),l=t(6446),r=t(8903),c=t(2788),o=t(2143),d=t(3193),m=t(8356),h=t(2221),p=t(4050),u=t(3845),g=t(4605),x=t(4598),A=t(5865),j=t(8977),y=t(7392),b=t(6240),f=t(6839),v=t(3216),k=t(3471),z=t(2429),N=t(7154),C=t(579);const w=()=>{const[e,a]=(0,n.useState)(!1),[t,w]=(0,n.useState)({});(0,n.useEffect)((()=>{(async()=>{try{const[e,a,t,n]=await Promise.all([N.A.get("https://demo-sigma.site/api/brand"),N.A.get("https://demo-sigma.site/api/category"),N.A.get("https://demo-sigma.site/api/collection"),N.A.get("https://demo-sigma.site/api/fragrancenote")]),i=e.data,s=a.data,l=t.data,r=n.data;w({brandData:i,categoryData:s,collectionData:l,fragranceNoteData:r})}catch(e){console.error("Error fetching data:",e)}})()}),[]);const[_,P]=(0,n.useState)({name:"",category:"",brand:"",collectionProduct:"",gender:"",scent:"",style:"",topNotes:[],middleNotes:[],baseNotes:[],description:"",year:"",origin:"",discountPercent:0,sizes:[],images:[],bestSelling:!1,new:!1,instruct:"",preserve:""}),[D,W]=(0,n.useState)([]),S=e=>{const{name:a,value:t}=e.target;P({..._,[a]:t})},E=(e,a,t)=>{const n=_.sizes.map(((n,i)=>i===e?{...n,[a]:t}:n));P({..._,sizes:n})},H={PaperProps:{style:{maxHeight:224,width:250}}};function q(e,a,t){return{fontWeight:-1===a.indexOf(e)?t.typography.fontWeightRegular:t.typography.fontWeightMedium}}const K=(0,b.A)(),[M,R]=(0,n.useState)([]),[T,V]=(0,n.useState)([]),[F,B]=(0,n.useState)([]),{id:I}=(0,v.g)();(0,n.useEffect)((()=>{(async()=>{try{const e=(await N.A.get("https://demo-sigma.site/api/product/get/".concat(I))).data;P({name:e.name,category:e.category,brand:e.brand,collectionProduct:e.collectionProduct,gender:e.gender,scent:e.scent,style:e.style,topNotes:e.topNotes.map((e=>e._id)),middleNotes:e.middleNotes.map((e=>e._id)),baseNotes:e.baseNotes.map((e=>e._id)),description:e.description,year:e.year,origin:e.origin,discountPercent:e.discountPercent,sizes:e.sizes,images:[],bestSelling:e.bestSelling,new:e.new,instruct:e.instruct,preserve:e.preserve}),W(e.images.map((e=>"https://demo-sigma.site/".concat(e)))),R(e.topNotes.map((e=>({...e,label:e.name,value:e._id})))),V(e.middleNotes.map((e=>({...e,label:e.name,value:e._id})))),B(e.baseNotes.map((e=>({...e,label:e.name,value:e._id}))))}catch(e){console.error("Error fetching data:",e)}})()}),[]);const[L,G]=(0,n.useState)(!1),[U,O]=(0,n.useState)(""),[X,J]=(0,n.useState)(""),Q=(0,n.useRef)(null),Y=(0,n.useRef)(null),Z=(0,n.useRef)(null),$=(e,a,t)=>{P((a=>({...a,[t]:e})))},ee=(e,a)=>{"clickaway"!==a&&G(!1)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i.A,{open:L,autoHideDuration:2e3,onClose:ee,children:(0,C.jsx)(s.A,{onClose:ee,severity:X,sx:{width:"100%"},children:U})}),(0,C.jsx)(l.A,{sx:{p:4},children:(0,C.jsxs)(r.Ay,{container:!0,spacing:2,children:[(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"T\xean s\u1ea3n ph\u1ea9m",name:"name",value:_.name,onChange:S,required:!0})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,select:!0,label:"Danh m\u1ee5c",name:"category",value:_.category,onChange:S,children:t.categoryData&&t.categoryData.map((e=>(0,C.jsx)(o.A,{value:e._id,children:e.name},e._id)))})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,select:!0,label:"Th\u01b0\u01a1ng hi\u1ec7u",name:"brand",value:_.brand,onChange:S,children:t.brandData&&t.brandData.map((e=>(0,C.jsx)(o.A,{value:e._id,children:e.name},e._id)))})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,select:!0,label:"B\u1ed9 s\u01b0u t\u1eadp",name:"collectionProduct",value:_.collectionProduct,onChange:S,children:t.collectionData&&t.collectionData.map((e=>(0,C.jsx)(o.A,{value:e._id,children:e.name},e._id)))})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,select:!0,label:"Gi\u1edbi t\xednh",name:"gender",value:_.gender,onChange:S,children:["Nam","N\u1eef","Unisex"].map((e=>(0,C.jsx)(o.A,{value:e,children:e},e)))})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"M\xf9i h\u01b0\u01a1ng",name:"scent",value:_.scent,onChange:S})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"Phong c\xe1ch",name:"style",value:_.style,onChange:S})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"Name",name:"year",type:"number",value:_.year,onChange:S})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"Xu\u1ea5t x\u1ee9",name:"origin",value:_.origin,onChange:S})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"Ph\u1ea7n tr\u0103m gi\u1ea3m gi\xe1",name:"discountPercent",type:"number",value:_.discountPercent,onChange:S})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsxs)(d.A,{sx:{m:1,width:300},children:[(0,C.jsx)(m.A,{id:"topNotes-label",children:"H\u01b0\u01a1ng \u0111\u1ea7u"}),(0,C.jsx)(h.A,{labelId:"topNotes-label",id:"topNotes",multiple:!0,value:M,onChange:e=>{R(e.target.value)},input:(0,C.jsx)(p.A,{label:"H\u01b0\u01a1ng \u0111\u1ea7u"}),renderValue:e=>(0,C.jsx)(l.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((e=>(0,C.jsx)(u.A,{label:e.name},e._id)))}),MenuProps:H,children:t.fragranceNoteData&&t.fragranceNoteData.map((e=>(0,C.jsx)(o.A,{value:e,style:q(e.name,M.map((e=>e.name)),K),children:e.name},e._id)))})]})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsxs)(d.A,{sx:{m:1,width:300},children:[(0,C.jsx)(m.A,{id:"middleNotes",children:"H\u01b0\u01a1ng gi\u1eefa"}),(0,C.jsx)(h.A,{labelId:"middleNotes",id:"middleNotes",multiple:!0,value:T,onChange:e=>{V(e.target.value)},input:(0,C.jsx)(p.A,{label:"H\u01b0\u01a1ng gi\u1eefa"}),renderValue:e=>(0,C.jsx)(l.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((e=>(0,C.jsx)(u.A,{label:e.name},e._id)))}),MenuProps:H,children:t.fragranceNoteData&&t.fragranceNoteData.map((e=>(0,C.jsx)(o.A,{value:e,style:q(e.name,T.map((e=>e.name)),K),children:e.name},e._id)))})]})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsxs)(d.A,{sx:{m:1,width:300},children:[(0,C.jsx)(m.A,{id:"baseNotes",children:"H\u01b0\u01a1ng gi\u1eefa"}),(0,C.jsx)(h.A,{labelId:"baseNotes",id:"baseNotes",multiple:!0,value:F,onChange:e=>{B(e.target.value)},input:(0,C.jsx)(p.A,{label:"H\u01b0\u01a1ng cu\u1ed1i"}),renderValue:e=>(0,C.jsx)(l.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((e=>(0,C.jsx)(u.A,{label:e.name},e._id)))}),MenuProps:H,children:t.fragranceNoteData&&t.fragranceNoteData.map((e=>(0,C.jsx)(o.A,{value:e,style:q(e.name,F.map((e=>e.name)),K),children:e.name},e._id)))})]})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(g.A,{control:(0,C.jsx)(x.A,{checked:_.bestSelling,onChange:e=>P((a=>({...a,bestSelling:e.target.checked})))}),label:"B\xe1n ch\u1ea1y nh\u1ea5t"})}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,C.jsx)(g.A,{control:(0,C.jsx)(x.A,{checked:_.new,onChange:e=>P((a=>({...a,new:e.target.checked})))}),label:"S\u1ea3n ph\u1ea9m m\u1edbi"})}),(0,C.jsxs)(r.Ay,{item:!0,xs:12,sm:6,children:[(0,C.jsx)(A.A,{variant:"h6",children:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng"}),(0,C.jsx)(f.K,{onEditorChange:(e,a)=>$(e,0,"instruct"),initialValue:_.instruct,apiKey:"5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu",name:"instruct",ref:Q,init:{plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"}})]}),(0,C.jsxs)(r.Ay,{item:!0,xs:12,sm:6,children:[(0,C.jsx)(A.A,{variant:"h6",children:"B\u1ea3o qu\u1ea3n"}),(0,C.jsx)(f.K,{initialValue:_.preserve,onEditorChange:(e,a)=>$(e,0,"preserve"),apiKey:"5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu",ref:Y,name:"preserve",init:{plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"}})]}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:12,children:(0,C.jsx)(c.A,{fullWidth:!0,select:!0,label:"Lo\u1ea1i",name:"type",value:_.type,onChange:S,children:["Niche","Designer"].map((e=>(0,C.jsx)(o.A,{value:e,children:e},e)))})}),(0,C.jsxs)(r.Ay,{item:!0,xs:12,children:[(0,C.jsx)(j.A,{variant:"contained",onClick:()=>{P({..._,sizes:[..._.sizes,{size:"",price:0}]})},children:"Th\xeam Size"}),_.sizes.map(((e,a)=>(0,C.jsxs)(r.Ay,{container:!0,spacing:2,sx:{paddingTop:4},children:[(0,C.jsx)(r.Ay,{item:!0,xs:5,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"Size",value:e.size,onChange:e=>E(a,"size",e.target.value)})}),(0,C.jsx)(r.Ay,{item:!0,xs:5,children:(0,C.jsx)(c.A,{fullWidth:!0,label:"Gi\xe1",type:"number",value:e.price,onChange:e=>E(a,"price",e.target.value)})}),(0,C.jsx)(r.Ay,{item:!0,xs:2,children:(0,C.jsx)(y.A,{onClick:()=>(e=>{const a=_.sizes.filter(((a,t)=>t!==e));P({..._,sizes:a})})(a),children:(0,C.jsx)(k.A,{})})})]},a)))]}),(0,C.jsx)(r.Ay,{item:!0,xs:12,sm:2,children:(0,C.jsxs)("label",{htmlFor:"icon-button-file",children:["\u1ea2nh s\u1ea3n ph\u1ea9m:",(0,C.jsx)("input",{class:"input-upload-image",accept:"image/*",id:"icon-button-file",type:"file",multiple:!0,onChange:e=>{const a=Array.from(e.target.files);P({..._,images:a});const t=[];let n=!1;return W([]),a.forEach((e=>{const a=new FileReader;t.push(a),a.onload=e=>{n||W((a=>[...a,e.target.result]))},a.readAsDataURL(e)})),()=>{n=!0,t.forEach((e=>e.abort()))}}}),(0,C.jsx)(y.A,{color:"primary","aria-label":"upload picture",component:"span",children:(0,C.jsx)(z.A,{})})]})}),(0,C.jsx)(r.Ay,{sm:12,sx:{paddingTop:4},children:D.map(((e,a)=>(0,C.jsxs)(r.Ay,{container:!0,sx:{paddingBottom:4},spacing:2,children:[(0,C.jsx)(r.Ay,{item:!0,xs:10,children:(0,C.jsx)("img",{src:e,width:150,height:100,alt:""})}),(0,C.jsx)(r.Ay,{item:!0,xs:2,children:(0,C.jsx)(y.A,{onClick:()=>(e=>{W((a=>a.filter(((a,t)=>t!==e)))),P((a=>({...a,images:a.images.filter(((a,t)=>t!==e))})))})(a),children:(0,C.jsx)(k.A,{})})})]},a)))}),(0,C.jsxs)(r.Ay,{item:!0,xs:12,sm:12,children:[(0,C.jsx)(A.A,{variant:"h6",children:"M\xf4 t\u1ea3 s\u1ea3n ph\u1ea9m"}),(0,C.jsx)(f.K,{initialValue:_.description,name:"description",onEditorChange:(e,a)=>$(e,0,"description"),ref:Z,apiKey:"5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu",init:{plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"}})]}),(0,C.jsx)(r.Ay,{item:!0,xs:12,children:(0,C.jsx)(j.A,{onClick:async()=>{try{const e=new FormData;M.forEach((a=>e.append("topNotes",a._id))),T.forEach((a=>e.append("middleNotes",a._id))),F.forEach((a=>e.append("baseNotes",a._id))),_.sizes.forEach(((a,t)=>{e.append("sizes[".concat(t,"][size]"),a.size),e.append("sizes[".concat(t,"][price]"),a.price)})),e.append("name",_.name),e.append("category",_.category),e.append("brand",_.brand),e.append("collectionProduct",_.collectionProduct),e.append("gender",_.gender),e.append("type",_.type),e.append("scent",_.scent),e.append("style",_.style),e.append("description",_.description),e.append("year",_.year),e.append("origin",_.origin),e.append("discountPercent",_.discountPercent),e.append("instruct",_.instruct),e.append("preserve",_.preserve),_.images.forEach((a=>{e.append("images",a)})),console.log("Form data:",e);200===(await N.A.patch("https://demo-sigma.site/api/product/update/".concat(I),e,{headers:{"Content-Type":"multipart/form-data"}})).status&&(O("Ch\u1ec9nh s\u1eeda s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng!"),J("success"),G(!0))}catch(e){console.error("Error while creating product",e),O("Ch\u1ec9nh s\u1eeda s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i! "),J("error"),G(!0)}},variant:"contained",color:"primary",children:"L\u01b0u s\u1ea3n ph\u1ea9m"})})]})})]})}}}]);
//# sourceMappingURL=1121.cb59f7e8.chunk.js.map