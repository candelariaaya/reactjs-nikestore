(this.webpackJsonptiendaapp=this.webpackJsonptiendaapp||[]).push([[0],{115:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),s=r(41),n=r.n(s),i=(r(98),r(99),r(21)),o=r(22),j=r(7),l=r(16),d=r(45),b=r(81),u=r(73),h=r(61),x=r(42),O=r(2);var p=function(e){var t=e.label,r=e.type,c=e.register;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(x.a,{sm:"20",children:Object(O.jsxs)(b.a.Group,{as:h.a,className:"mb-4",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",height:"50%"},controlId:"formBasicEmail",children:[Object(O.jsx)(b.a.Label,{column:!0,sm:"1",children:t}),Object(O.jsx)(b.a.Control,Object(j.a)({style:{height:"100%",width:"60%"},type:r||"text"},c))]})})})})})},m=r(55);r(116),r(105);m.a.initializeApp({apiKey:"AIzaSyDefQfAcol6CDz-fjBnuYBKkIMbZfR40TM",authDomain:"tiendareact2021.firebaseapp.com",projectId:"tiendareact2021",storageBucket:"tiendareact2021.appspot.com",messagingSenderId:"607959289035",appId:"1:607959289035:web:6fb6acb6fc41367cc49f4e",measurementId:"G-J3CD3STXHW"}),m.a.db=m.a.firestore(),m.a.auth=m.a.auth();var g=m.a,v=r(89);var f=function(e){var t=e.variant,r=e.text;return Object(O.jsx)(v.a,{variant:t,style:{marginTop:"10px"},children:r})},y=r(25);var w=function(){var e,t;console.log(g.db);var r=Object(d.a)(),a=r.register,s=r.handleSubmit,n=r.formState.errors,i=Object(o.f)(),b=Object(c.useState)({variant:"",text:""}),m=Object(l.a)(b,2),v=m[0],w=m[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Registro de usuario"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("form",{onSubmit:s((function(e){console.log("data",e),g.auth.createUserWithEmailAndPassword(e.email,e.password).then((function(t){console.log(t),t.user.uid&&g.db.collection("usuarios").add({nombre:e.nombre,apellido:e.apellido,email:e.email,userId:t.user.uid}).then((function(e){console.log("document",e),i.push("/")}))})).catch((function(e){console.log("Error",e.code),"auth/email-already-in-use"===e.code&&w({variant:"danger",text:"El email que intenta usar ya est\xe1 registrado"})}))})),children:Object(O.jsxs)(u.a,{children:[Object(O.jsxs)(h.a,{children:[Object(O.jsx)(x.a,{children:Object(O.jsx)(p,{label:"Nombre:",register:Object(j.a)({},a("nombre"))})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(p,{label:"Apellido:",register:Object(j.a)({},a("apellido"))})})]}),Object(O.jsxs)(h.a,{children:[Object(O.jsxs)(x.a,{children:[Object(O.jsx)(p,{label:"Email:",type:"email",register:Object(j.a)({},a("email",{required:!0}))}),n.email&&Object(O.jsx)("p",{children:"El campo es obligatorio"})]}),Object(O.jsxs)(x.a,{children:[Object(O.jsx)(p,{label:"Contrase\xf1a:",type:"password",register:Object(j.a)({},a("password",{required:!0,minLength:6}))}),"required"===(null===(e=n.password)||void 0===e?void 0:e.type)&&Object(O.jsx)("p",{children:"El campo es obligatorio"}),"minLength"===(null===(t=n.password)||void 0===t?void 0:t.type)&&Object(O.jsx)("p",{children:"Debe contener al menos 4 caracteres"})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{type:"submit",children:"Registrar"})}),Object(O.jsx)(f,{variant:v.variant,text:v.text})]})})]})},k=r(0),I=r.n(k),S=r(3),N=a.a.createContext({});var C=function(){var e,t,r=Object(d.a)(),a=r.register,s=r.handleSubmit,n=r.formState.errors,i=Object(c.useContext)(N),l=Object(o.f)(),b=function(){var e=Object(S.a)(I.a.mark((function e(t){var r,c,a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",t),e.prev=1,e.next=4,g.auth.signInWithEmailAndPassword(t.email,t.password);case 4:if(!(r=e.sent).user.uid){e.next=12;break}return e.next=8,g.db.collection("usuarios").where("userId","==",r.user.uid).get();case 8:s=e.sent,console.log("userInfo",null===(c=s.docs[0])||void 0===c?void 0:c.data()),i.loginUser(null===(a=s.docs[0])||void 0===a?void 0:a.data()),l.push("/");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("Error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{onSubmit:s(b),children:[Object(O.jsx)(p,{label:"Email:",type:"email",register:Object(j.a)({},a("email",{required:!0}))}),n.email&&Object(O.jsx)("p",{children:"El campo es obligatorio"}),Object(O.jsx)(p,{label:"Contrase\xf1a:",type:"password",register:Object(j.a)({},a("password",{required:!0,minLength:6}))}),"required"===(null===(e=n.password)||void 0===e?void 0:e.type)&&Object(O.jsx)("p",{children:"El campo es obligatorio"}),"minLength"===(null===(t=n.password)||void 0===t?void 0:t.type)&&Object(O.jsx)("p",{children:"Debe contener al menos 4 caracteres"}),Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{variant:"primary",type:"submit",children:"Ingresar"})})]})]})},E=r(78);var F=function(e){var t=e.datos;return Object(O.jsx)(N.Consumer,{children:function(e){return Object(O.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(O.jsx)(E.a,{border:!0,hover:!0,children:Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.length}),Object(O.jsx)("td",{children:t.title}),Object(O.jsxs)("td",{children:["$",t.price]}),Object(O.jsx)("td",{className:"descrip-prod",children:t.description}),Object(O.jsxs)("div",{style:{display:"flex",flexDirection:"column",float:"right"},children:[Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{as:i.b,to:"/productos/"+t.id,children:"Ver Detalle"})}),Object(O.jsx)("br",{}),e.userLogin&&Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{as:i.b,to:"/productos/modificar/"+t.id,children:"Modificar"})})]})]})})})})}})},L=r(93);var D=function(e){return e.active?Object(O.jsx)("div",{children:Object(O.jsx)(L.a,{animation:"border",variant:"primary",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(O.jsx)(O.Fragment,{children:e.children})};var A=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(!0),n=Object(l.a)(s,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(S.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.collection("productos").get();case 3:(t=e.sent).docs&&(a(t.docs),o(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsx)(D,{active:i,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Lista de productos Nike"}),Object(O.jsx)("div",{style:{width:"80%",display:"block",textAlign:"center",margin:"20px",float:"left"},children:Object(O.jsx)(E.a,{bordered:!0,hover:!0,children:Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{style:{width:"32%"},children:"Producto"}),Object(O.jsx)("th",{style:{width:"18%"},children:"Precio"}),Object(O.jsx)("th",{style:{width:"50%"},children:"Descripci\xf3n"})]})})})}),Object(O.jsx)("div",{children:r.map((function(e){return Object(O.jsx)(F,{datos:Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id})},e.id)}))})]})})};var P=function(e){var t=e.datos;return console.log(e.datos),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:t.title}),Object(O.jsxs)("h3",{children:["$ ",t.price]}),Object(O.jsx)("h3",{children:t.description})]})},q=r(63);var T=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(!0),n=Object(l.a)(s,2),j=n[0],d=n[1],b=Object(o.g)().id;return console.log(b),Object(c.useEffect)((function(){function e(){return(e=Object(S.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.doc("productos/"+b).get();case 3:(t=e.sent)&&(a(t),d(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(N.Consumer,{children:function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(q.a,{className:"text-center",children:[Object(O.jsx)(q.a.Header,{children:"\xbfTe interesa este producto?"}),Object(O.jsxs)(q.a.Body,{children:[Object(O.jsx)(q.a.Text,{children:Object(O.jsx)(D,{active:j,children:Object(O.jsx)(O.Fragment,{children:r&&Object(O.jsx)(P,{datos:r.data()})})})}),!e.userLogin&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y.a,{as:i.b,to:{pathname:"/login"},variant:"primary",children:"Ingresar"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{className:"text-muted",style:{fontSize:"20px"},children:"Debes ingresar a tu cuenta para poder realizar la compra"})]}),e.userLogin&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(i.b,{to:{pathname:"/comprar",state:{comprar:r.title}},children:Object(O.jsx)(y.a,{variant:"primary",children:"Comprar"})})})]}),Object(O.jsx)(q.a.Footer,{className:"text-muted",children:Object(O.jsx)(i.b,{to:"/listado",children:"Cancelar"})})]})})}})})};var B=function(){var e=Object(d.a)(),t=e.register,r=e.handleSubmit,a=e.setValue,s=Object(o.f)(),n=function(){var e=Object(S.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",t),e.prev=1,e.next=4,g.db.doc("productos/"+w).set(t);case 4:r=e.sent,console.log("modificar",r),s.push("/listado"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=Object(c.useState)({}),u=Object(l.a)(b,2),h=(u[0],u[1]),x=Object(c.useState)(!0),m=Object(l.a)(x,2),v=m[0],f=m[1],w=Object(o.g)().id;console.log(w),Object(c.useEffect)((function(){function e(){return(e=Object(S.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.doc("productos/"+w).get();case 3:(t=e.sent)&&(h(t),f(!1),a("title",t.data().title),a("price",t.data().price),a("description",t.data().description)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[w,a]);var k=function(){var e=Object(S.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.db.doc("productos/"+w).delete();case 3:t=e.sent,console.log(t),s.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(D,{active:v,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Modificar Producto"}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{onSubmit:r(n),children:[Object(O.jsx)(p,{label:"Nombre",register:Object(j.a)({},t("title",{required:!0}))}),Object(O.jsx)(p,{label:"Precio",register:Object(j.a)({},t("price",{required:!0}))}),Object(O.jsx)(p,{label:"Descripci\xf3n",type:"text",register:Object(j.a)({},t("description",{required:!0}))}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",marginTop:"50px"},children:[Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{type:"submit",variant:"primary",children:"Guardar"})}),Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{variant:"danger",onClick:k,children:"Eliminar"})}),Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{variant:"outline-secondary",as:i.b,to:"/listado",children:"Cancelar"})})]})]})]})})};var J=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(N.Consumer,{children:function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(q.a,{className:"text-center",children:[Object(O.jsxs)(q.a.Header,{children:["Felicidades ",e.userInfo.nombre]}),Object(O.jsxs)(q.a.Body,{children:[Object(O.jsx)(q.a.Text,{children:"Has realizado tu compra con \xe9xito!"}),Object(O.jsx)(y.a,{as:i.b,to:{pathname:"/"},variant:"primary",children:"Volver al inicio"})]}),Object(O.jsx)(q.a.Footer,{className:"text-muted",children:Object(O.jsx)(i.b,{to:"/listado",children:"Cancelar"})})]})})}})})},z=r(67),R=r(86);var G=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c4f3.png",alt:"Nike logo",className:"d-block w-25 mx-auto pt-4"}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsxs)(z.a,{variant:"dark",children:[Object(O.jsx)(z.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-50 mx-auto",src:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf0253b17/products/NI_CJ0630-600/NI_CJ0630-600-1.JPG",alt:"First slide"})}),Object(O.jsx)(z.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-50 mx-auto",src:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe378cd70/products/NI_AO0739-017/NI_AO0739-017-1.JPG",alt:"Second slide"})}),Object(O.jsx)(z.a.Item,{children:Object(O.jsx)("img",{className:"d-block w-50 mx-auto",src:"https://sporting.vteximg.com.br/arquivos/ids/202837-1500-1500/4BA5876-082-00.jpg?v=637190122600300000",alt:"Third slide"})})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)(R.a,{className:"justify-content-center",variant:"pills",children:Object(O.jsx)(R.a.Item,{children:Object(O.jsx)(y.a,{href:"/listado",children:"Listado de productos"})})})})]})};var H=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Error! Page Not Found"})})},M=r(118);var U=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(N.Consumer,{children:function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(M.a,{expand:"dark",bg:"dark",variant:"dark",children:[Object(O.jsx)(M.a.Brand,{as:i.b,to:"/",className:"",children:"Tienda Nike"}),Object(O.jsx)(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(M.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(R.a,{className:"me-auto",children:[Object(O.jsx)(R.a.Link,{as:i.b,to:"/",children:"Inicio"}),!e.userLogin&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R.a.Link,{as:i.b,to:"/registro",children:"Registro"}),Object(O.jsx)(R.a.Link,{as:i.b,to:"/login",children:"Ingresar"})]}),e.userLogin&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R.a.Link,{as:i.b,to:"/productos/alta",children:"Alta Productos"}),Object(O.jsx)(R.a.Link,{onClick:e.logoutUser,children:"Salir"})]})]})})]}),e.userInfo&&Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{className:"text-center",children:["Hola ",e.userInfo.nombre,"! Bienvenido a tu cuenta Nike.",Object(O.jsx)("br",{}),"Ya puedes empezar a comprar tus productos favoritos."]})})]})}})})};var _=function(){return Object(O.jsx)("div",{className:"footer",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Desarrollado por: Candelaria Aya"}),Object(O.jsx)("li",{children:"Copyright \xa9 2021 - All Rights Reserved"}),Object(O.jsx)("li",{children:Object(O.jsx)(y.a,{onClick:function(e){e.preventDefault(),window.location.href="http://github.com/candelariaaya"},variant:"outline-primary",size:"sm",children:"Github"})})]})})};var V=function(){var e=Object(d.a)(),t=e.register,r=e.handleSubmit,c=e.formState.errors,a=Object(o.f)(),s=function(){var e=Object(S.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",t),e.prev=1,e.next=4,g.db.collection("productos").add(t);case 4:r=e.sent,console.log(r),a.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Registro de Productos"}),Object(O.jsxs)("form",{onSubmit:r(s),children:[Object(O.jsx)(p,{label:"Nombre",register:Object(j.a)({},t("title",{required:!0}))}),c.title&&Object(O.jsx)("p",{children:"El campo es obligatorio"}),Object(O.jsx)(p,{label:"Precio",register:Object(j.a)({},t("price",{required:!0}))}),c.price&&Object(O.jsx)("p",{children:"El campo es obligatorio"}),Object(O.jsx)(p,{label:"Descripci\xf3n",type:"text",register:Object(j.a)({},t("description",{required:!0}))}),c.description&&Object(O.jsx)("p",{children:"El campo es obligatorio"}),Object(O.jsx)("div",{children:Object(O.jsx)(y.a,{type:"submit",children:"Aceptar"})})]})]})};var W=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(U,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/registro",children:Object(O.jsx)(w,{})}),Object(O.jsx)(o.a,{path:"/login",children:Object(O.jsx)(C,{})}),Object(O.jsx)(o.a,{path:"/listado",children:Object(O.jsx)(A,{})}),Object(O.jsx)(o.a,{path:"/productos/alta",children:Object(O.jsx)(V,{})}),Object(O.jsx)(o.a,{path:"/productos/modificar/:id",children:Object(O.jsx)(B,{})}),Object(O.jsx)(o.a,{path:"/productos/:id",children:Object(O.jsx)(T,{})}),Object(O.jsx)(o.a,{path:"/comprar",children:Object(O.jsx)(J,{})}),Object(O.jsx)(o.a,{path:"/",exact:!0,children:Object(O.jsx)(G,{})}),Object(O.jsx)(o.a,{path:"*",children:Object(O.jsx)(H,{})})]}),Object(O.jsx)(_,{})]})};var K=function(e){var t=Object(c.useState)(sessionStorage.getItem("login")),r=Object(l.a)(t,2),a=r[0],s=r[1],n=Object(c.useState)(JSON.parse(sessionStorage.getItem("userInfo"))),i=Object(l.a)(n,2),o=i[0],j=i[1];return Object(O.jsx)(N.Provider,{value:{userLogin:a,loginUser:function(e){sessionStorage.setItem("login",!0),sessionStorage.setItem("userInfo",JSON.stringify(e)),s(!0),j(e)},logoutUser:function(){sessionStorage.removeItem("login"),sessionStorage.removeItem("userInfo"),s(!1),j(!1)},userInfo:o},children:e.children})};var Y=function(){return Object(O.jsx)(K,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(W,{})})})},$=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,119)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;r(e),c(e),a(e),s(e),n(e)}))};r(114);n.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root")),$()},98:function(e,t,r){},99:function(e,t,r){}},[[115,1,2]]]);
//# sourceMappingURL=main.e0e16a66.chunk.js.map