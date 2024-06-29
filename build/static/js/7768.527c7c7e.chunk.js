"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[7768],{7768:(e,a,n)=>{n.r(a),n.d(a,{default:()=>C});var t=n(5043),i=n(9012),s=n(7254),l=n(6446),r=n(8903),c=n(2788),o=n(2143),d=n(3193),m=n(8356),h=n(2221),p=n(4050),u=n(3845),x=n(4605),g=n(4598),A=n(5865),j=n(8977),y=n(7392),b=n(6240),f=n(6839),v=n(3471),k=n(2429),z=n(7154),w=n(579);const C=()=>{const[e,a]=(0,t.useState)(!1),[n,C]=(0,t.useState)({});(0,t.useEffect)((()=>{(async()=>{try{const[e,a,n,t]=await Promise.all([z.A.get("https://demo-sigma.site/api/brand"),z.A.get("https://demo-sigma.site/api/category"),z.A.get("https://demo-sigma.site/api/collection"),z.A.get("https://demo-sigma.site/api/fragrancenote")]),i=e.data,s=a.data,l=n.data,r=t.data;C({brandData:i,categoryData:s,collectionData:l,fragranceNoteData:r})}catch(e){console.error("Error fetching data:",e)}})()}),[]);const[N,D]=(0,t.useState)({name:"",category:"",brand:"",collectionProduct:"",gender:"",scent:"",style:"",topNotes:[],middleNotes:[],baseNotes:[],description:"",year:"",origin:"",discountPercent:0,sizes:[],images:[],bestSelling:!1,new:!1,instruct:"",preserve:""}),[W,P]=(0,t.useState)([]),_=e=>{const{name:a,value:n}=e.target;D({...N,[a]:n})},S=(e,a,n)=>{const t=N.sizes.map(((t,i)=>i===e?{...t,[a]:n}:t));D({...N,sizes:t})},E={PaperProps:{style:{maxHeight:224,width:250}}};function H(e,a,n){return{fontWeight:-1===a.indexOf(e)?n.typography.fontWeightRegular:n.typography.fontWeightMedium}}const T=(0,b.A)(),[q,K]=(0,t.useState)([]),[M,R]=(0,t.useState)([]),[B,F]=(0,t.useState)([]),[I,L]=(0,t.useState)(!1),[V,G]=(0,t.useState)(""),[U,O]=(0,t.useState)(""),X=(0,t.useRef)(null),J=(0,t.useRef)(null),Q=(0,t.useRef)(null),Y=(e,a,n)=>{D((a=>({...a,[n]:e})))},Z=(e,a)=>{"clickaway"!==a&&L(!1)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.A,{open:I,autoHideDuration:2e3,onClose:Z,children:(0,w.jsx)(s.A,{onClose:Z,severity:U,sx:{width:"100%"},children:V})}),(0,w.jsx)(l.A,{sx:{p:4},children:(0,w.jsxs)(r.Ay,{container:!0,spacing:2,children:[(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"T\xean s\u1ea3n ph\u1ea9m",name:"name",value:N.name,onChange:_,required:!0})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,select:!0,label:"Danh m\u1ee5c",name:"category",value:N.category,onChange:_,children:n.categoryData&&n.categoryData.map((e=>(0,w.jsx)(o.A,{value:e._id,children:e.name},e._id)))})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,select:!0,label:"Th\u01b0\u01a1ng hi\u1ec7u",name:"brand",value:N.brand,onChange:_,children:n.brandData&&n.brandData.map((e=>(0,w.jsx)(o.A,{value:e._id,children:e.name},e._id)))})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,select:!0,label:"B\u1ed9 s\u01b0u t\u1eadp",name:"collectionProduct",value:N.collectionProduct,onChange:_,children:n.collectionData&&n.collectionData.map((e=>(0,w.jsx)(o.A,{value:e._id,children:e.name},e._id)))})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,select:!0,label:"Gi\u1edbi t\xednh",name:"gender",value:N.gender,onChange:_,children:["Nam","N\u1eef","Unisex"].map((e=>(0,w.jsx)(o.A,{value:e,children:e},e)))})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"M\xf9i h\u01b0\u01a1ng",name:"scent",value:N.scent,onChange:_})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"Phong c\xe1ch",name:"style",value:N.style,onChange:_})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"N\u0103m",name:"year",type:"number",value:N.year,onChange:_})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"Xu\u1ea5t x\u1ee9",name:"origin",value:N.origin,onChange:_})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"Ph\u1ea7n tr\u0103m gi\u1ea3m gi\xe1",name:"discountPercent",type:"number",value:N.discountPercent,onChange:_})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsxs)(d.A,{sx:{m:1,width:300},children:[(0,w.jsx)(m.A,{id:"topNotes-label",children:"H\u01b0\u01a1ng \u0111\u1ea7u"}),(0,w.jsx)(h.A,{labelId:"topNotes-label",id:"topNotes",multiple:!0,value:q,onChange:e=>{const{target:{value:a}}=e;K("string"===typeof a?a.split(","):a)},input:(0,w.jsx)(p.A,{label:"H\u01b0\u01a1ng \u0111\u1ea7u"}),renderValue:e=>(0,w.jsx)(l.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((e=>(0,w.jsx)(u.A,{label:e.name},e._id)))}),MenuProps:E,children:n.fragranceNoteData&&n.fragranceNoteData.map((e=>(0,w.jsx)(o.A,{value:e,style:H(e.name,q.map((e=>e.name)),T),children:e.name},e._id)))})]})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsxs)(d.A,{sx:{m:1,width:300},children:[(0,w.jsx)(m.A,{id:"middleNotes",children:"H\u01b0\u01a1ng gi\u1eefa"}),(0,w.jsx)(h.A,{labelId:"middleNotes",id:"middleNotes",multiple:!0,value:M,onChange:e=>{const{target:{value:a}}=e;R("string"===typeof a?a.split(","):a)},input:(0,w.jsx)(p.A,{label:"H\u01b0\u01a1ng gi\u1eefa"}),renderValue:e=>(0,w.jsx)(l.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((e=>(0,w.jsx)(u.A,{label:e.name},e._id)))}),MenuProps:E,children:n.fragranceNoteData&&n.fragranceNoteData.map((e=>(0,w.jsx)(o.A,{value:e,style:H(e.name,M.map((e=>e.name)),T),children:e.name},e._id)))})]})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsxs)(d.A,{sx:{m:1,width:300},children:[(0,w.jsx)(m.A,{id:"baseNotes",children:"H\u01b0\u01a1ng gi\u1eefa"}),(0,w.jsx)(h.A,{labelId:"baseNotes",id:"baseNotes",multiple:!0,value:B,onChange:e=>{const{target:{value:a}}=e;F("string"===typeof a?a.split(","):a)},input:(0,w.jsx)(p.A,{label:"H\u01b0\u01a1ng cu\u1ed1i"}),renderValue:e=>(0,w.jsx)(l.A,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((e=>(0,w.jsx)(u.A,{label:e.name},e._id)))}),MenuProps:E,children:n.fragranceNoteData&&n.fragranceNoteData.map((e=>(0,w.jsx)(o.A,{value:e,style:H(e.name,B.map((e=>e.name)),T),children:e.name},e._id)))})]})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(x.A,{control:(0,w.jsx)(g.A,{checked:N.bestSelling,onChange:e=>D((a=>({...a,bestSelling:e.target.checked})))}),label:"B\xe1n ch\u1ea1y nh\u1ea5t"})}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:4,children:(0,w.jsx)(x.A,{control:(0,w.jsx)(g.A,{checked:N.new,onChange:e=>D((a=>({...a,new:e.target.checked})))}),label:"S\u1ea3n ph\u1ea9m m\u1edbi"})}),(0,w.jsxs)(r.Ay,{item:!0,xs:12,sm:6,children:[(0,w.jsx)(A.A,{variant:"h6",children:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng"}),(0,w.jsx)(f.K,{onEditorChange:(e,a)=>Y(e,0,"instruct"),apiKey:"5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu",name:"instruct",ref:X,init:{plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"}})]}),(0,w.jsxs)(r.Ay,{item:!0,xs:12,sm:6,children:[(0,w.jsx)(A.A,{variant:"h6",children:"B\u1ea3o qu\u1ea3n"}),(0,w.jsx)(f.K,{onEditorChange:(e,a)=>Y(e,0,"preserve"),apiKey:"5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu",ref:J,name:"preserve",init:{plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"}})]}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:12,children:(0,w.jsx)(c.A,{fullWidth:!0,select:!0,label:"Lo\u1ea1i",name:"type",value:N.type,onChange:_,children:["Niche","Designer"].map((e=>(0,w.jsx)(o.A,{value:e,children:e},e)))})}),(0,w.jsxs)(r.Ay,{item:!0,xs:12,children:[(0,w.jsx)(j.A,{variant:"contained",onClick:()=>{D({...N,sizes:[...N.sizes,{size:"",price:0}]})},children:"Th\xeam Size"}),N.sizes.map(((e,a)=>(0,w.jsxs)(r.Ay,{container:!0,spacing:2,sx:{paddingTop:4},children:[(0,w.jsx)(r.Ay,{item:!0,xs:5,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"Size",value:e.size,onChange:e=>S(a,"size",e.target.value)})}),(0,w.jsx)(r.Ay,{item:!0,xs:5,children:(0,w.jsx)(c.A,{fullWidth:!0,label:"Gi\xe1",type:"number",value:e.price,onChange:e=>S(a,"price",e.target.value)})}),(0,w.jsx)(r.Ay,{item:!0,xs:2,children:(0,w.jsx)(y.A,{onClick:()=>(e=>{const a=N.sizes.filter(((a,n)=>n!==e));D({...N,sizes:a})})(a),children:(0,w.jsx)(v.A,{})})})]},a)))]}),(0,w.jsx)(r.Ay,{item:!0,xs:12,sm:2,children:(0,w.jsxs)("label",{htmlFor:"icon-button-file",children:["\u1ea2nh s\u1ea3n ph\u1ea9m:",(0,w.jsx)("input",{class:"input-upload-image",accept:"image/*",id:"icon-button-file",type:"file",multiple:!0,onChange:e=>{const a=Array.from(e.target.files);D({...N,images:a});const n=[];let t=!1;return P([]),a.forEach((e=>{const a=new FileReader;n.push(a),a.onload=e=>{t||P((a=>[...a,e.target.result]))},a.readAsDataURL(e)})),()=>{t=!0,n.forEach((e=>e.abort()))}}}),(0,w.jsx)(y.A,{color:"primary","aria-label":"upload picture",component:"span",children:(0,w.jsx)(k.A,{})})]})}),(0,w.jsx)(r.Ay,{sm:12,sx:{paddingTop:4},children:W.map(((e,a)=>(0,w.jsxs)(r.Ay,{container:!0,sx:{paddingBottom:4},spacing:2,children:[(0,w.jsx)(r.Ay,{item:!0,xs:10,children:(0,w.jsx)("img",{src:e,width:150,height:100,alt:""})}),(0,w.jsx)(r.Ay,{item:!0,xs:2,children:(0,w.jsx)(y.A,{onClick:()=>(e=>{P((a=>a.filter(((a,n)=>n!==e)))),D((a=>({...a,images:a.images.filter(((a,n)=>n!==e))})))})(a),children:(0,w.jsx)(v.A,{})})})]},a)))}),(0,w.jsxs)(r.Ay,{item:!0,xs:12,sm:12,children:[(0,w.jsx)(A.A,{variant:"h6",children:"M\xf4 t\u1ea3 s\u1ea3n ph\u1ea9m"}),(0,w.jsx)(f.K,{name:"description",onEditorChange:(e,a)=>Y(e,0,"description"),ref:Q,apiKey:"5uqva5k7lt0qxlfbezptki5oskz2grzrz3kbiwvsw0kr3vhu",init:{plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat"}})]}),(0,w.jsx)(r.Ay,{item:!0,xs:12,children:(0,w.jsx)(j.A,{onClick:async()=>{try{const e=new FormData;q.forEach((a=>e.append("topNotes",a._id))),M.forEach((a=>e.append("middleNotes",a._id))),B.forEach((a=>e.append("baseNotes",a._id))),N.sizes.forEach(((a,n)=>{e.append("sizes[".concat(n,"][size]"),a.size),e.append("sizes[".concat(n,"][price]"),a.price)})),e.append("name",N.name),e.append("category",N.category),e.append("brand",N.brand),e.append("collectionProduct",N.collectionProduct),e.append("gender",N.gender),e.append("type",N.type),e.append("scent",N.scent),e.append("style",N.style),e.append("description",N.description),e.append("year",N.year),e.append("origin",N.origin),e.append("discountPercent",N.discountPercent),e.append("instruct",N.instruct),e.append("preserve",N.preserve),N.images.forEach((a=>{e.append("images",a)}));200===(await z.A.post("https://demo-sigma.site/api/product/create",e,{headers:{"Content-Type":"multipart/form-data"}})).status&&(G("Th\xeam s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng!"),O("success"),L(!0),setTimeout((()=>{window.location.href="/dashboard/products"}),1e3))}catch(e){console.error("Error while creating product",e),G("Th\xeam s\u1ea3n ph\u1ea9m th\u1ea5t b\u1ea1i! "),O("error"),L(!0)}},variant:"contained",color:"primary",children:"L\u01b0u s\u1ea3n ph\u1ea9m"})})]})})]})}}}]);
//# sourceMappingURL=7768.527c7c7e.chunk.js.map