"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[346],{4346:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var a,r,s=t(9434),i=t(6916),o=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},d=function(e){return e.filter},u=(0,i.P1)([o,d],(function(e,n){var t=n.filter;return e.toSorted((function(e,n){return e.name.localeCompare(n.name)})).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),m=t(2791),x=t(3634),p=t(168),h=t(225),f=h.Z.form(a||(a=(0,p.Z)(["\n display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 30px;\n  min-width: 200px;\n  padding: 20px;\n  border-radius: 30px;\n  background-color: #c2e6f3;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),b=t(5218),j=t(6151),v=t(9840),Z=t(184),g=function(){var e=(0,s.v9)(o),n=(0,s.I0)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(f,{onSubmit:function(t){t.preventDefault();var a=t.target;e.find((function(e){return e.name===a.elements.name.value}))?b.Am.error("".concat(a.elements.name.value," is already in contacts")):(n((0,x.uK)({name:a.elements.name.value,number:a.elements.number.value})),a.reset())},children:[(0,Z.jsx)(v.Z,{required:!0,label:"Name",type:"text",variant:"outlined",name:"name",size:"small",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,Z.jsx)(v.Z,{required:!0,label:"Number",type:"tel",variant:"outlined",name:"number",size:"small",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,Z.jsx)(j.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})},y=t(7621),C=t(2363),z=t(9504),k=t(890),w=t(7247),A=t(7371),I=t(2716),F=t(4942),S=t(9439),N=t(4554),P=t(7004),q=t(1286),_=h.Z.form(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  padding: 30px;\n"]))),B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:250,bgcolor:"background.paper",border:"2px solid #000",borderRadius:"10px",boxShadow:24,p:2},D=function(e){var n=e.contact,t=(0,m.useState)(!1),a=(0,S.Z)(t,2),r=a[0],i=a[1],o=function(){return i(!1)},c=n.id,l=n.name,d=n.number,u=(0,m.useState)({name:l,number:d}),p=(0,S.Z)(u,2),h=p[0],f=p[1],b=(0,s.I0)(),g=function(e){var n=e.target,t=n.name,a=n.value;f((0,F.Z)({},t,a))};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(j.Z,{size:"small",startIcon:(0,Z.jsx)(q.Z,{}),onClick:function(){return i(!0)},children:"Edit"}),(0,Z.jsx)(P.Z,{open:r,onClose:o,"aria-labelledby":"modal-update-contact","aria-describedby":"modal-update-contact",children:(0,Z.jsx)(N.Z,{sx:B,children:(0,Z.jsxs)(_,{onSubmit:function(e){e.preventDefault();var n=e.target;b((0,x.Tk)({id:c,name:n.elements.name.value,number:n.elements.number.value})),o()},children:[(0,Z.jsx)(v.Z,{required:!0,label:"Name",type:"text",name:"name",value:h.name,onChange:g,size:"normal",variant:"standard",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,Z.jsx)(v.Z,{required:!0,label:"Number",type:"tel",name:"number",value:h.number,onChange:g,size:"normal",variant:"standard",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,Z.jsx)(j.Z,{type:"submit",children:"Save"}),(0,Z.jsx)(j.Z,{onClick:o,children:"Close"})]})})})]})},L=function(e){var n=e.contact,t=n.id,a=n.name,r=n.number,i=(0,s.I0)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(y.Z,{sx:{minWidth:150},children:[(0,Z.jsxs)(z.Z,{sx:{backgroundColor:"#faf8a2"},children:[(0,Z.jsxs)(k.Z,{variant:"h6",children:[(0,Z.jsx)(A.Z,{sx:{color:"blue"}})," ",a]}),(0,Z.jsxs)(k.Z,{variant:"h5",children:[(0,Z.jsx)(I.Z,{sx:{color:"blue"}})," ",r]})]}),(0,Z.jsxs)(C.Z,{children:[(0,Z.jsx)(j.Z,{size:"small",onClick:function(){return i((0,x.GK)(t))},startIcon:(0,Z.jsx)(w.Z,{}),children:"Delete"}),(0,Z.jsx)(D,{contact:n})]})]})})},M=t(1889),T=function(){var e=(0,s.v9)(u);return(0,Z.jsx)(N.Z,{sx:{flexGrow:1},children:(0,Z.jsx)(M.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:e&&e.map((function(e){return(0,Z.jsx)(M.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,Z.jsx)(L,{contact:e})},e.id)}))})})},E=t(4808),G=t(3466),J=t(5403),K=function(){var e=(0,s.v9)(d).filter,n=(0,s.I0)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(v.Z,{value:e,onChange:function(e){n((0,E.T)(e.target.value))},variant:"outlined",label:"Search contact",type:"text",placeholder:"Find contact by name",fullWidth:!0,InputProps:{startAdornment:(0,Z.jsx)(G.Z,{position:"start",children:(0,Z.jsx)(J.Z,{})})},sx:{marginBottom:"20px"}})})},R=function(){var e=(0,s.I0)(),n=(0,s.v9)(c),t=(0,s.v9)(l);return(0,m.useEffect)((function(){e((0,x.yF)())}),[e]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(k.Z,{variant:"h5",textTransform:"uppercase",margin:"15px",children:"My contacts"}),(0,Z.jsxs)(N.Z,{sx:{padding:"20px",alignItems:"start",gap:"20px"},children:[(0,Z.jsx)(g,{}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(K,{}),n&&!t&&(0,Z.jsx)("p",{children:(0,Z.jsx)("b",{children:"Request in progress..."})}),(0,Z.jsx)(T,{})]})]})]})}}}]);
//# sourceMappingURL=346.21cd0ded.chunk.js.map