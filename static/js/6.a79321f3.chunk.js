(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var a=n(7),r=n.n(a),c=n(14),s=function(e,t){return function(n,a){var r;n({type:"ADD_TO_CART",payload:{_id:e._id,name:e.name,price:e.price,image:e.image||(null===e||void 0===e||null===(r=e.images[0])||void 0===r?void 0:r.url),stock:e.stock,quantity:t}}),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems))}},i=function(e){return function(t,n){t({type:"REMOVE_CART_ITEM",payload:e}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems))}},o=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SAVE_SHIPPING_INFO",payload:e}),localStorage.setItem("shippingInfo",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n(7),r=n.n(a),c=n(1),s=n(14),i=n(19),o=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a,s,o,u,l,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"CREATE_ORDER_REQUEST"}),a={headers:{"Content-Type":"application/json"}},s=JSON.parse(sessionStorage.getItem("orderInfo")),(o=JSON.parse(localStorage.getItem("cartItems"))).forEach((function(e){e.product=e._id,delete e._id})),u=Object(c.a)({shippingInfo:JSON.parse(localStorage.getItem("shippingInfo")),orderItems:o,paymentInfo:e},s),t.next=9,i.a.post("/api/v1/order/new",u,a);case 9:l=t.sent,d=l.data,n({type:"CREATE_ORDER_SUCCESS",payload:d}),localStorage.removeItem("cartItems"),sessionStorage.removeItem("orderInfo"),n({type:"CLEAR_CART"}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),n({type:"CREATE_ORDER_FAIL",payload:t.t0.response.data.message});case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"MY_ORDERS_REQUEST"}),e.next=4,i.a.get("/api/v1/orders/me");case 4:n=e.sent,a=n.data,t({type:"MY_ORDERS_SUCCESS",payload:a.orders}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"MY_ORDERS_FAIL",payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var c,s,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:"ORDER_DETAILS_REQUEST"}),c="admin"===t?"/api/v1/admin/order/".concat(e):"/api/v1/order/".concat(e),n.next=5,i.a.get(c);case 5:s=n.sent,o=s.data,a({type:"ORDER_DETAILS_SUCCESS",payload:o.order}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a({type:"ORDER_DETAILS_FAIL",payload:n.t0.response.data.message});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}},223:function(e,t,n){},224:function(e,t,n){},232:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),c=n(14),s=n(10),i=n(0),o=n.n(i),u=n(55),l=n(5),d=n(4),p=n(17),m=n(19),j=(n(223),n(164)),h=n(66),b=n(2),f=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(l.c)((function(e){return e.cart})),f=i.shippingInfo,O=i.cartItems,x=Object(l.c)((function(e){return e.user})).user,y=Object(d.f)(),v=Object(l.b)(),g=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2)},S=o.a.useRef(g()),N=O.reduce((function(e,t){return e+t.quantity*t.price}),0),E=N>1e3?0:50,C=.18*N,I=N+C+E,w="".concat(f.address,", ").concat(f.city,", ").concat(f.state,", ").concat(f.pinCode,", ").concat(f.country),R=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/v1/init-txn",{uid:S.current,totalPrice:I},{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,n=t.data,e.next=6,JSON.parse(n.response);case 6:n.response=e.sent,P(n.response);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t={root:"",flow:"DEFAULT",data:{orderId:S.current,token:e.body.txnToken,tokenType:"TXN_TOKEN",amount:I},merchant:{redirect:!1},handler:{notifyMerchant:function(e,t){"APP_CLOSED"===e&&a(!1),"PAYMENT_ERROR"===e&&(a(!1),window.Paytm.CheckoutJS.close()),console.log("notifyMerchant handler function called"),console.log("eventName => ",e),console.log("data => ",t)},transactionStatus:function(e){if(console.log("paymentStatus => ",e),"01"===e.RESPCODE){alert("Payment Successfull");var t={txn_id:e.TXNID,txnStatus:e.STATUS,txnDate:e.TXNDATE,gatewayName:e.GATEWAYNAME,txnMode:e.PAYMENTMODE};v(Object(j.a)(t)),window.Paytm.CheckoutJS.close(),a(!1),y("/orders")}else"400"===e.RESPCODE?(alert("Payment Pending"),window.Paytm.CheckoutJS.close(),a(!1)):(alert(e.RESPMSG),window.Paytm.CheckoutJS.close(),a(!1),S.current=g())}}};window.Paytm&&window.Paytm.CheckoutJS&&window.Paytm.CheckoutJS.init(t).then((function(){window.Paytm.CheckoutJS.invoke()})).catch((function(e){alert("oops something went wrong, try again!"),a(!1),S.current=g(),console.log("error => ",e)}))};return Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(h.a,{}),Object(b.jsxs)("div",{className:"confirm-container",children:[Object(b.jsx)(u.a,{title:"Confirm Order"}),Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)("span",{className:"title",children:"Shipping Info"}),Object(b.jsxs)("div",{className:"shipping-info-box",children:[Object(b.jsx)("div",{className:"shipping-info-item",children:Object(b.jsxs)("p",{children:["Name: "," ",Object(b.jsx)("span",{children:x.name})]})}),Object(b.jsx)("div",{className:"shipping-info-item",children:Object(b.jsxs)("p",{children:["Phone: "," ",Object(b.jsx)("span",{children:f.phoneNumber})]})}),Object(b.jsx)("div",{className:"shipping-info-item",children:Object(b.jsxs)("p",{children:["Address: "," ",Object(b.jsx)("span",{children:w})]})})]}),Object(b.jsxs)("div",{className:"cart-items-container",children:[Object(b.jsx)("div",{className:"title",children:"Your Cart Items:"}),O&&O.map((function(e,t){return Object(b.jsx)(p.b,{to:"/product/".concat(e._id),children:Object(b.jsxs)("div",{className:"cart-items",children:[Object(b.jsx)("img",{src:e.image,alt:"Product"}),e.name,Object(b.jsxs)("span",{children:[e.quantity," X \u20b9",e.price," ="," ",Object(b.jsxs)("b",{children:["\u20b9",e.price*e.quantity]})]})]})},t)}))]})]}),Object(b.jsxs)("div",{className:"right",children:[Object(b.jsx)("div",{className:"title",children:" Order Summary"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"order-summary",children:[Object(b.jsx)("p",{children:"Subtotal:"}),Object(b.jsxs)("span",{children:["\u20b9",N]})]}),Object(b.jsxs)("div",{className:"order-summary",children:[Object(b.jsx)("p",{children:"Shipping Charges:"}),Object(b.jsxs)("span",{children:["\u20b9",E]})]}),Object(b.jsxs)("div",{className:"order-summary",children:[Object(b.jsx)("p",{children:"GST:"}),Object(b.jsxs)("span",{children:["\u20b9",C]})]})]}),Object(b.jsxs)("div",{className:"order-summary total",children:[Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Total:"})}),Object(b.jsxs)("span",{children:["\u20b9",I]})]}),Object(b.jsx)("button",{type:"button",className:"proceed",onClick:function(){a(!0);var e={subtotal:N,shippingCharges:E,tax:C,totalPrice:I};sessionStorage.setItem("orderInfo",JSON.stringify(e)),R()},disabled:n,children:"Proceed to payment"})]})]})]})},O=[{label:"Please Enter Your Address",type:"text",name:"address",placeholder:"Address"},{label:"Please Enter Your City",type:"text",name:"city",placeholder:"City"},{label:"Please Enter Your Pin Code",type:"tel",name:"pinCode",placeholder:"Pin Code",minLength:"6",maxLength:"6",pattern:"[0-9]{6}"},{label:"Please Enter Your Phone Number",type:"tel",name:"phoneNumber",placeholder:"Phone Number",minLength:"10",maxLength:"10",pattern:"[0-9]{10}"}],x=(n(224),n(163)),y=n(225),v=function(e){var t=e.setStep,n=Object(l.c)((function(e){return e.cart})),a=n.shippingInfo,r=o.a.useState(a.state),c=Object(s.a)(r,2),i=c[0],u=c[1],d=o.a.useState(a.country),p=Object(s.a)(d,2),m=p[0],j=p[1],h=o.a.useRef(),f=Object(l.b)();return o.a.useEffect((function(){a.address&&O.forEach((function(e,t){h.current[t].value=a[e.name]}))}),[a]),Object(b.jsxs)("form",{className:"shipping-container",onSubmit:function(e){e.preventDefault();var n={};O.forEach((function(t){var a=t.name,r=e.target[a].value;n[a]=r})),n.country=m,n.state=i,f(Object(x.c)(n)),t(1)},ref:h,children:[Object(b.jsx)("div",{className:"head",children:"Shipping Details"}),O.map((function(e,t){return Object(b.jsxs)("div",{className:"inp-content",children:[Object(b.jsx)("label",{htmlFor:e.name,className:"label",children:e.label}),Object(b.jsx)("input",{type:e.type,name:e.name,placeholder:" ",minLength:e.minLength||"3",maxLength:e.maxLength||"100",pattern:e.pattern,required:!0}),Object(b.jsx)("hr",{className:"border-bottom"}),Object(b.jsx)("span",{className:"placeholder",children:e.placeholder})]},t)})),Object(b.jsxs)("div",{className:"inp-content",children:[Object(b.jsx)("span",{className:"placeholder",children:"Please select your country"}),Object(b.jsxs)("select",{name:"country",className:"select",required:!0,value:m,onChange:function(e){return j(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"Country"}),y.Country&&y.Country.getAllCountries().map((function(e){return Object(b.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)}))]})]}),m&&Object(b.jsxs)("div",{className:"inp-content",children:[Object(b.jsx)("span",{className:"placeholder",children:"Please select your state"}),Object(b.jsxs)("select",{className:"inp-content select",required:!0,value:i,onChange:function(e){return u(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"State"}),y.State&&y.State.getStatesOfCountry(m).map((function(e){return Object(b.jsx)("option",{value:e.isoCode,children:e.name},e.isoCode)}))]})]}),Object(b.jsx)("div",{className:"cont-btns",children:Object(b.jsx)("input",{type:"submit",className:"continue",value:"Continue"})})]})};n(232),t.default=function(){var e=o.a.useState(0),t=Object(s.a)(e,2),n=t[0],a=t[1];return o.a.useEffect((function(){var e=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/v1/paytm-MID");case 2:t=e.sent,n=t.data,a="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/".concat(n.MID,".js"),(c=document.createElement("script")).src=a,c.async=!0,c.type="application/javascript",document.body.appendChild(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)("div",{className:"check-out",children:[0===n&&Object(b.jsx)(v,{setStep:a}),1===n&&Object(b.jsx)(f,{}),Object(b.jsx)("div",{className:"cont-btns",children:0!==n&&Object(b.jsx)("button",{className:"continue",type:"button",onClick:function(){return a((function(e){return e-1}))},children:"Previous"})})]})}}}]);
//# sourceMappingURL=6.a79321f3.chunk.js.map