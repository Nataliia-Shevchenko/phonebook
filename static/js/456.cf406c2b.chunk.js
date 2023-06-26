"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[456],{7456:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a=t(9434),s=t(6916),i=function(n){return n.contacts.items},c=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},o=function(n){return n.filter},d=(0,s.P1)([i,o],(function(n,e){var t=e.filter;return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),u=t(2791),x=t(3634),m=t(168),p=t(225).Z.form(r||(r=(0,m.Z)(["\n display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  /* margin-top: 20px; */\n  padding: 30px;\n  border-radius: 30px;\n  background-color: #c2e6f3;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  /* display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 20px;\n  min-width: 300px;\n  padding: 20px;\n  border: 2px solid #02639b;\n  border-radius: 5px; */\n"]))),f=t(5218),h=t(6151),j=t(3066),v=t(184),b=function(){var n=(0,a.v9)(i),e=(0,a.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(p,{onSubmit:function(t){t.preventDefault();var r=t.target;n.find((function(n){return n.name===r.elements.name.value}))?f.Am.error("".concat(r.elements.name.value," is already in contacts")):(e((0,x.uK)({name:r.elements.name.value,number:r.elements.number.value})),r.reset())},children:[(0,v.jsx)(j.Z,{required:!0,label:"Name",type:"text",variant:"outlined",name:"name",size:"small",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,v.jsx)(j.Z,{required:!0,label:"Number",type:"tel",variant:"outlined",name:"number",size:"small",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,v.jsx)(h.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})},g=t(7621),Z=t(2363),y=t(9504),w=t(890),k=t(7247),C=t(7371),A=t(2716),z=function(n){var e=n.contact,t=e.id,r=e.name,s=e.number,i=(0,a.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(g.Z,{sx:{minWidth:150},children:[(0,v.jsxs)(y.Z,{sx:{backgroundColor:"#faf8a2"},children:[(0,v.jsx)(C.Z,{sx:{color:"blue"}}),(0,v.jsx)(w.Z,{variant:"h6",children:r}),(0,v.jsx)(A.Z,{sx:{color:"blue"}}),(0,v.jsx)(w.Z,{variant:"h5",children:s})]}),(0,v.jsx)(Z.Z,{children:(0,v.jsx)(h.Z,{size:"small",onClick:function(){return i((0,x.GK)(t))},startIcon:(0,v.jsx)(k.Z,{}),children:"Delete"})})]})})},F=t(4554),I=t(1889),P=function(){var n=(0,a.v9)(d);return(0,v.jsx)(F.Z,{sx:{flexGrow:1},children:(0,v.jsx)(I.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:n&&n.map((function(n){return(0,v.jsx)(I.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,v.jsx)(z,{contact:n})},n.id)}))})})},_=t(4808),q=t(3466),L=t(5403),N=function(){var n=(0,a.v9)(o).filter,e=(0,a.I0)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(j.Z,{value:n,onChange:function(n){e((0,_.T)(n.target.value))},variant:"outlined",label:"Search contact",type:"text",placeholder:"Find contact by name",fullWidth:!0,InputProps:{startAdornment:(0,v.jsx)(q.Z,{position:"start",children:(0,v.jsx)(L.Z,{})})},sx:{marginBottom:"20px"}})})},B=function(){var n=(0,a.I0)(),e=(0,a.v9)(c),t=(0,a.v9)(l);return(0,u.useEffect)((function(){n((0,x.yF)())}),[n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.Z,{variant:"h5",textTransform:"uppercase",margin:"15px",children:"My contacts"}),(0,v.jsxs)(F.Z,{sx:{padding:"20px",display:"flex",alignItems:"start",gap:"20px"},children:[(0,v.jsx)(b,{}),(0,v.jsxs)("div",{children:[(0,v.jsx)(N,{}),e&&!t&&(0,v.jsx)("p",{children:(0,v.jsx)("b",{children:"Request in progress..."})}),(0,v.jsx)(P,{})]})]})]})}}}]);
//# sourceMappingURL=456.cf406c2b.chunk.js.map