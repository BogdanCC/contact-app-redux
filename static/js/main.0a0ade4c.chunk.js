(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/orb.ed236853.gif"},40:function(e,t,a){e.exports=a(73)},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),s=a(7),l=a(8),i=a(10),m=a(9),u=a(11),p=a(75),d=a(77),h=a(76),f=a(74),b=a(12),E=a(4),v=a.n(E),y=a(14),N=a(16),g=a.n(N),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(e){a.props.deleteContact(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,s=this.state.showContactInfo;return r.a.createElement("div",{className:"card border-primary mb-3"},r.a.createElement("h4",{className:"card-header pb-3 pt-3"}," ",n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.onDeleteClick.bind(this,a)}),r.a.createElement(f.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fa fa-edit text-warning",style:{cursor:"pointer",float:"right",marginRight:"1rem"}}))),s?r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title pb-2 pt-2"},"Email: ",c),r.a.createElement("p",{className:"card-text lead pb-2 pt-2"},"Phone: ",o)):null)}}]),t}(n.Component),O=Object(b.b)(null,{deleteContact:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:return t.prev=8,a({type:"DELETE_CONTACT",payload:e}),t.finish(8);case 11:case"end":return t.stop()}},t,null,[[0,5,8,11]])}));return function(e){return t.apply(this,arguments)}}()}})(C),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-5 mt-5"},r.a.createElement("span",{className:"text-primary"},"Contact")," List"),e.map(function(e){return r.a.createElement(O,{key:e.id,contact:e})}))}}]),t}(n.Component),w=Object(b.b)(function(e){return{contacts:e.contact.contacts}},{getContacts:function(){return function(){var e=Object(y.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,t({type:"GET_CONTACTS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(j),k=a(15),T=a(35),x=a.n(T),S=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,s=e.onChange,l=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:x()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:n,onChange:s}),l&&r.a.createElement("div",{className:"invalid-feedback"},l))};S.defaultProps={type:"text"};var A=S,_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(y.a)(v.a.mark(function e(t){var n,r,c,o,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.name,c=n.email,o=n.phone,!a.hasErrors(r,c,o)){e.next=4;break}return e.abrupt("return");case 4:s={name:r,email:c,phone:o},a.props.addContact(s),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"hasErrors",value:function(e,t,a){return""===e.trim()?(this.setState({errors:{name:"Name is required"}}),!0):""===t.trim()?(this.setState({errors:{email:"Email is required"}}),!0):""===a.trim()&&(this.setState({errors:{phone:"Phone is required"}}),!0)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(A,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(A,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:a,onChange:this.onChange,error:c.email}),r.a.createElement(A,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block btn-outline-primary"}))))}}]),t}(n.Component),D=Object(b.b)(null,{addContact:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.post("https://jsonplaceholder.typicode.com/users",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(_),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.email,c=t.phone;if(""!==n)if(""!==r)if(""!==c){var o={name:n,email:r,phone:c},s=a.props.match.params.id;a.props.updateContact(o,s),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/")}else a.setState({errors:{phone:"Phone is required"}});else a.setState({errors:{email:"Email is required"}});else a.setState({errors:{name:"Name is required"}})},a.onChange=function(e){return a.setState(Object(k.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e,t){var a=e.contact,n=a.name,r=a.email,c=a.phone;this.setState({name:n,email:r,phone:c})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(A,{label:"Name",name:"name",placeholder:"Enter name...",value:t,onChange:this.onChange,error:c.name}),r.a.createElement(A,{label:"Email",name:"email",type:"email",placeholder:"Enter email...",value:a,onChange:this.onChange,error:c.email}),r.a.createElement(A,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:n,onChange:this.onChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}}]),t}(n.Component),q=Object(b.b)(function(e){return{contact:e.contact.contact}},{getContact:function(e){return function(){var t=Object(y.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:n=t.sent,a({type:"GET_CONTACT",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateContact:function(e,t){return function(){var a=Object(y.a)(v.a.mark(function a(n){var r;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(t),e);case 2:r=a.sent,console.log(r.data),n({type:"UPDATE_CONTACT",payload:r.data});case 5:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(P),I=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.a,{to:"/test",className:"nav-link"},r.a.createElement("i",{className:"fas fa-wrench"})," Test"))))))};I.defaultProps={branding:"My App"};var M=I,U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},F=a(36),G=a.n(F),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,posts:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount()"),fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.json()}).then(function(t){return e.setState({loading:!1,posts:t})})}},{key:"render",value:function(){return console.log("component render()"),r.a.createElement("div",null,r.a.createElement("h2",{className:"mb-4 pt-4 pb-4"},"Just a testing component ",r.a.createElement("i",{className:"fas fa-wrench"})),this.state.loading?r.a.createElement("div",{id:"loading-div",style:{marginTop:"".concat(window.innerHeight/2-300,"px")}},r.a.createElement("img",{src:G.a,className:"img-fluid",alt:"loading"})):this.state.posts.map(function(e){return r.a.createElement("div",{key:e.id,className:"card mb-4"},r.a.createElement("div",{className:"card-header"},"Quote"),r.a.createElement("div",{className:"card-body"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",null,e.body),r.a.createElement("footer",{className:"blockquote-footer"},e.email))))}))}}]),t}(n.Component),X=a(13),J=a(37),V=a(39),W=a(17),B={contacts:[],contact:{}},H=Object(X.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_CONTACTS":return Object(W.a)({},e,{contacts:n});case"GET_CONTACT":return Object(W.a)({},e,{contact:n});case"UPDATE_CONTACT":return Object(W.a)({},e,{contacts:e.contacts.map(function(e){return n.id===e.id?e=n:e})});case"ADD_CONTACT":return Object(W.a)({},e,{contacts:[n].concat(Object(V.a)(e.contacts))});case"DELETE_CONTACT":return Object(W.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==n})});default:return e}}}),Q=[J.a],$=Object(X.e)(H,{},Object(X.d)(X.a.apply(void 0,Q),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),z=(a(70),a(71),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{store:$},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(M,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:w}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:D}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(h.a,{exact:!0,path:"/about",component:U}),r.a.createElement(h.a,{exact:!0,path:"/test",component:R}),r.a.createElement(h.a,{component:L}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.0a0ade4c.chunk.js.map