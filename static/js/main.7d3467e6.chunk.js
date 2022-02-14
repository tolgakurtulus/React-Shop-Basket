(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(11),r=c.n(i),n=c(2),d=c(5),j="ADD_TO_CART",l="ADJUST_ITEM_QTY",o="REMOVE_FROM_CART",b="LOAD_CURRENT_ITEM",h=(c(26),c(1)),p=function(e){return Object(h.jsx)("button",{className:"c-button ".concat(e.color),children:e.title})},u=(c(28),function(){var e=Object(d.c)((function(e){return e.shop.products})),t=Object(d.b)();return Object(h.jsx)("div",{className:"c-card",children:Object(h.jsx)("div",{className:"c-card__row",children:e&&e.map((function(e){return Object(h.jsxs)("div",{className:"c-card__item",children:[Object(h.jsx)("div",{className:"c-card__img",children:Object(h.jsx)("img",{src:e.image,alt:e.title})}),Object(h.jsx)("div",{className:"c-card__title",children:Object(h.jsx)("p",{children:e.title})}),Object(h.jsx)("div",{className:"c-card__description",children:Object(h.jsx)("p",{children:e.description})}),Object(h.jsx)("div",{className:"c-card__price",children:Object(h.jsxs)("p",{children:["$ ",e.price]})}),Object(h.jsx)("div",{className:"c-card__button-container",children:Object(h.jsx)("button",{onClick:function(){return t((c=e.id,{type:j,payload:{id:c}}));var c},className:"c-card__button orange",children:"+ Add To Chart"})})]})}))})})}),O=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u,{})})},m=c(6),x=(c(29),function(e){var t=Object(d.c)((function(e){return e.shop.cart})),c=Object(a.useState)(),s=Object(m.a)(c,2),i=s[0],r=s[1],n=Object(d.b)(),j=function(e,t){n({type:l,payload:{id:t,qty:e}})};return Object(a.useEffect)((function(){var e=0;t.forEach((function(c,a){e=+e+t[a].qty*t[a].price})),r(e)}),[t]),Object(h.jsx)("div",{className:"c-basketpage",children:t.length?Object(h.jsxs)("div",{className:"c-basketpage__row",children:[Object(h.jsxs)("div",{className:"c-basketpage__left",children:[t.map((function(e){return Object(h.jsxs)("div",{className:"c-basketpage__item",children:[Object(h.jsx)("div",{className:"c-basketpage__img",children:Object(h.jsx)("img",{src:e.image,alt:e.title})}),Object(h.jsxs)("div",{className:"c-basketpage__container",children:[Object(h.jsxs)("div",{className:"c-basketpage__up-container",children:[Object(h.jsx)("div",{className:"c-basketpage__item-title",children:Object(h.jsx)("p",{children:e.title})}),Object(h.jsxs)("div",{className:"c-basketpage__item-title-qty",children:[Object(h.jsx)("span",{children:"Qty:"}),Object(h.jsx)("input",{min:"1",type:"number",id:"qty",name:"qty",value:e.qty,onChange:function(t){return j(t.target.value,e.id)}})]})]}),Object(h.jsx)("div",{className:"c-basketpage__middle-container",children:Object(h.jsx)("p",{children:e.description})}),Object(h.jsxs)("div",{className:"c-basketpage__down-container",children:[Object(h.jsx)("div",{className:"c-basketpage__price",children:Object(h.jsxs)("p",{children:["$ ",e.price]})}),Object(h.jsx)("div",{className:"c-basketpage__delete-button",children:Object(h.jsx)("button",{onClick:function(){return n((t=e.id,{type:o,payload:{id:t}}));var t},children:"Remove"})})]})]})]},e.id)})),";"]}),Object(h.jsx)("div",{className:"c-basketpage__right",children:Object(h.jsxs)("div",{className:"c-basketpage__total-card",children:[Object(h.jsx)("div",{className:"c-basketpage__total-card-title",children:Object(h.jsx)("p",{children:"Basket Summary"})}),Object(h.jsxs)("div",{className:"c-basketpage__total-card-text",children:[Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:"Total: "})}),Object(h.jsxs)("p",{children:["$ ",i," "]})]})]})})]}):Object(h.jsx)("div",{className:"c-basketpage__waste-title",children:Object(h.jsx)("h2",{children:"Your Basket Is Waste"})})})}),_=(c(30),c(7)),f=(c(31),function(){return Object(h.jsx)("header",{className:"c-header-title",children:Object(h.jsx)(_.b,{to:"/React-Shop-Basket",children:Object(h.jsx)("h1",{children:"Shop And Detail"})})})}),g=(c(32),function(){var e=Object(d.c)((function(e){return e.shop.cart})),t=e?e.length:0;return Object(h.jsx)(_.b,{to:"/React-Shop-Basket/Basket",children:Object(h.jsx)("div",{className:"c-basket",children:Object(h.jsxs)("div",{className:"c-basket__row",children:[Object(h.jsx)("div",{className:"c-basket__img",children:Object(h.jsx)("img",{src:"/React-Shop-Basket/img/basket.png",alt:"Basket"})}),Object(h.jsx)("div",{className:"c-basket__cart",children:Object(h.jsx)(p,{color:"orange square",title:"".concat(t)})})]})})})}),v=function(){return Object(h.jsxs)("header",{className:"c-header",children:[Object(h.jsx)(f,{}),Object(h.jsx)(g,{})]})},y=s.a.memo(v);c(33);var k=function(){return Object(h.jsxs)("div",{className:"c-app",children:[Object(h.jsx)(y,{}),Object(h.jsxs)(n.c,{children:[Object(h.jsx)(n.a,{exact:!0,path:"/React-Shop-Basket",element:Object(h.jsx)(O,{})}),Object(h.jsx)(n.a,{exact:!0,path:"/React-Shop-Basket/Basket",element:Object(h.jsx)(x,{})})]})]})},N=c(15),q=c(3),w={products:[{id:1,title:"This is the COOLEST Cube Ever",description:"This cube will keep you busy the entire day and it is very fun to play with",price:15,image:"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown.",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"}],cart:[],currentItem:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var c=e.products.find((function(e){return e.id===t.payload.id})),a=e.cart.find((function(e){return e.id===t.payload.id}));return Object(q.a)(Object(q.a)({},e),{},{cart:a?e.cart.map((function(e){return e.id===t.payload.id?Object(q.a)(Object(q.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(N.a)(e.cart),[Object(q.a)(Object(q.a)({},c),{},{qty:1})])});case o:return Object(q.a)(Object(q.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case l:return Object(q.a)(Object(q.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(q.a)(Object(q.a)({},e),{},{qty:+t.payload.qty}):e}))});case b:return Object(q.a)(Object(q.a)({},e),{},{currentItem:t.payload});default:return e}},B=c(9),E=Object(B.a)({shop:T}),C=Object(B.b)(E);c(34);r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(d.a,{store:C,children:Object(h.jsx)(_.a,{children:Object(h.jsx)(k,{})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.7d3467e6.chunk.js.map