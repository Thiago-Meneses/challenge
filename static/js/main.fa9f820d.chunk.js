(this.webpackJsonprevising=this.webpackJsonprevising||[]).push([[0],{40:function(e,t,s){},59:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(0),d=s(1),i=s(32),n=s.n(i),r=s(14),c=s(15),l=s(18),o=s(17),u=s(2),j=s(8),m=(s(40),s(12)),h=s.n(m),b=s(16),p=s(10),O=s(11),v=s.n(O),x=(s(59),function(e){var t=e.users;return e.loading?Object(a.jsx)("h2",{children:"Loading..."}):Object(a.jsxs)("div",{id:"container-list",children:[Object(a.jsxs)("div",{id:"list-header",children:[Object(a.jsx)("p",{className:"list-id",children:"Id"}),Object(a.jsx)("p",{className:"list-name",children:"Nome"}),Object(a.jsx)("p",{className:"list-email",children:"Email"}),Object(a.jsx)("p",{className:"list-detail-header",children:"Ver detalhes"})]}),t.map((function(e){return Object(a.jsxs)("div",{id:"list-content",children:[Object(a.jsx)("div",{className:"list-id",children:e.id}),Object(a.jsxs)("div",{className:"list-name",children:[e.firstName," ",e.lastName]}),Object(a.jsx)("div",{className:"list-email",children:e.email}),Object(a.jsx)(j.b,{className:"see-details",to:{pathname:"/details",userSelected:{id:e.id}},children:"Clique aqui"})]},e.id)})),Object(a.jsx)(j.b,{to:"/signup",id:"link-signup",children:"CADASTRE-SE"})]})}),g=function(){var e=Object(d.useState)([]),t=Object(p.a)(e,2),s=t[0],i=t[1],n=Object(d.useState)(!1),r=Object(p.a)(n,2),c=r[0],l=r[1],o=Object(d.useState)(1),u=Object(p.a)(o,2),j=u[0],m=(u[1],Object(d.useState)(10)),O=Object(p.a)(m,1)[0];Object(d.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,v.a.get("http://localhost:3000/users");case 3:t=e.sent,i(t.data),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=j*O,N=g-O,y=s.slice(N,g);return Object(a.jsx)("div",{children:Object(a.jsx)(x,{users:y,loading:c})})},N=s(34),y=(s(65),function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).eventHandler=function(e){"normal"==e.target.className&&a.setState(Object(N.a)({},e.target.name,e.target.value)),"country"==e.target.name&&a.setState({address:{zipCode:a.state.address.zipCode,city:a.state.address.city,streetAddress:a.state.address.streetAddress,country:e.target.value,state:a.state.address.state,geo:{latitude:a.state.address.geo.latitude,longitude:a.state.address.geo.longitude}}}),"state"==e.target.name&&a.setState({address:{zipCode:a.state.address.zipCode,city:a.state.address.city,streetAddress:a.state.address.streetAddress,country:a.state.address.country,state:e.target.value,geo:{latitude:a.state.address.geo.latitude,longitude:a.state.address.geo.longitude}}}),"city"==e.target.name&&a.setState({address:{zipCode:a.state.address.zipCode,city:e.target.value,streetAddress:a.state.address.streetAddress,country:a.state.address.country,state:a.state.address.state,geo:{latitude:a.state.address.geo.latitude,longitude:a.state.address.geo.longitude}}}),"streetAddress"==e.target.name&&a.setState({address:{zipCode:a.state.address.zipCode,city:a.state.address.city,streetAddress:e.target.value,country:a.state.address.country,state:a.state.address.state,geo:{latitude:a.state.address.geo.latitude,longitude:a.state.address.geo.longitude}}}),"zipCode"==e.target.name&&a.setState({address:{zipCode:e.target.value,city:a.state.address.city,streetAddress:a.state.address.streetAddress,country:a.state.address.country,state:a.state.address.state,geo:{latitude:a.state.address.geo.latitude,longitude:a.state.address.geo.longitude}}}),"latitude"==e.target.name&&a.setState({address:{zipCode:a.state.address.zipCode,city:a.state.address.city,streetAddress:a.state.address.streetAddress,country:a.state.address.country,state:a.state.address.state,geo:{latitude:e.target.value,longitude:a.state.address.geo.longitude}}}),"longitude"==e.target.name&&a.setState({address:{zipCode:a.state.address.zipCode,city:a.state.address.city,streetAddress:a.state.address.streetAddress,country:a.state.address.country,state:a.state.address.state,geo:{latitude:a.state.address.geo.latitude,longitude:e.target.value}}})},a.submitHandler=function(e){e.preventDefault(),console.log(a.state),v.a.post("http://localhost:3000/users",a.state).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.state={firstName:"",lastName:"",email:"",phone:"",address:{zipCode:"",city:"",streetAddress:"",country:"",state:"",geo:{latitude:"",longitude:""}}},a}return Object(c.a)(s,[{key:"render",value:function(){var e=this.state,t=e.firstName,s=e.lastName,d=e.email,i=e.phone,n=e.address,r=n.zipCode,c=n.city,l=n.streetAddress,o=n.country,u=n.state,m=n.geo,h=m.latitude,b=m.longitude;return Object(a.jsxs)("div",{id:"container-form",children:[Object(a.jsxs)("form",{onSubmit:this.submitHandler,id:"form",children:[Object(a.jsx)("h1",{children:"Informa\xe7\xf5es Pessoais"}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"name-input",children:"Nome"}),Object(a.jsx)("input",{type:"text",id:"fName-input",className:"normal",name:"firstName",value:t,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"lName-input",children:"Sobrenome"}),Object(a.jsx)("input",{type:"lastName",id:"lName-input",className:"normal",name:"lastName",value:s,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"email-input",children:"E-mail"}),Object(a.jsx)("input",{type:"text",id:"email-input",className:"normal",name:"email",value:d,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"phone-input",children:"Telefone"}),Object(a.jsx)("input",{type:"text",id:"phone-input",className:"normal",name:"phone",value:i,onChange:this.eventHandler})]}),Object(a.jsx)("h1",{id:"h1-2",children:"Endere\xe7o"}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"country-input",children:"Pa\xeds"}),Object(a.jsx)("input",{type:"text",id:"country-input",className:"address",name:"country",value:o,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"state-input",children:"Estado"}),Object(a.jsx)("input",{type:"text",id:"state-input",className:"address",name:"state",value:u,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"city-input",children:"Cidade"}),Object(a.jsx)("input",{type:"text",id:"city-input",name:"city",value:c,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"sAddress-input",children:"Endere\xe7o"}),Object(a.jsx)("input",{type:"text",id:"sAddress-input",name:"streetAddress",value:l,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"zipCode-input",children:"CEP"}),Object(a.jsx)("input",{type:"text",id:"zipCode-input",name:"zipCode",value:r,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"latitude-input",children:"Latitude"}),Object(a.jsx)("input",{type:"text",id:"latitude-input",className:"geo",name:"latitude",value:h,onChange:this.eventHandler})]}),Object(a.jsxs)("div",{className:"div-input",children:[Object(a.jsx)("label",{htmlFor:"longitude-input",children:"Longitude"}),Object(a.jsx)("input",{type:"text",id:"longitude-input",className:"geo",name:"longitude",value:b,onChange:this.eventHandler})]}),Object(a.jsx)("button",{type:"submit",id:"btn-submit",children:"EFETUAR CADASTRO"})]}),Object(a.jsx)(j.b,{to:"/",id:"link-return-signup",children:"Voltar"})]})}}]),s}(d.Component)),f=(s(66),function(e){var t=Object(d.useState)([]),s=Object(p.a)(t,2),i=s[0],n=s[1];Object(d.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:3000/users");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=e.location.userSelected.id,c=r-1;return Object(a.jsxs)("div",{id:"container-details",children:[i.slice(c,r).map((function(e){return Object(a.jsxs)("div",{id:"data-container",children:[Object(a.jsx)("div",{className:"elementName",children:"Id:"}),Object(a.jsx)("div",{className:"userData",children:e.id}),Object(a.jsx)("div",{className:"elementName",children:"Nome:"}),Object(a.jsxs)("div",{className:"userData",children:[e.firstName," ",e.lastName]}),Object(a.jsx)("div",{className:"elementName",children:"E-mail:"}),Object(a.jsx)("div",{className:"userData",children:e.email}),Object(a.jsx)("div",{className:"elementName",children:"Telefone:"}),Object(a.jsx)("div",{className:"userData",children:e.phone}),Object(a.jsx)("div",{className:"elementName",children:"Pa\xeds:"}),Object(a.jsx)("div",{className:"userData",id:"elementCountry",children:e.address.country}),Object(a.jsx)("div",{className:"elementName",children:"Estado:"}),Object(a.jsx)("div",{className:"userData",id:"elementState",children:e.address.state}),Object(a.jsx)("div",{className:"elementName",children:"Cidade:"}),Object(a.jsx)("div",{className:"userData",children:e.address.city}),Object(a.jsx)("div",{className:"elementName",children:"Endere\xe7o:"}),Object(a.jsx)("div",{className:"userData",children:e.address.streetAddress}),Object(a.jsx)("div",{className:"elementName",children:"CEP:"}),Object(a.jsx)("div",{className:"userData",children:e.address.zipCode}),Object(a.jsx)("div",{className:"elementName",children:"Latitude:"}),Object(a.jsxs)("div",{className:"userData",children:[e.address.geo.latitude,"\xba"]}),Object(a.jsx)("div",{className:"elementName",children:"Longitude:"}),Object(a.jsxs)("div",{className:"userData",children:[e.address.geo.longitude,"\xba"]})]},e.id)})),Object(a.jsx)(j.b,{to:"/",id:"link-return",children:"Voltar"})]})}),C=function(e){Object(l.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{id:"global",children:[Object(a.jsx)("img",{src:"https://i.imgur.com/9xnibRx.png",alt:"buyco-logo",id:"logo"}),Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{path:"/",component:g,exact:!0}),Object(a.jsx)(u.a,{path:"/",component:x}),Object(a.jsx)(u.a,{path:"/signup",component:y}),Object(a.jsx)(u.a,{path:"/details",component:f})]})]})})}}]),s}(d.Component);n.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fa9f820d.chunk.js.map