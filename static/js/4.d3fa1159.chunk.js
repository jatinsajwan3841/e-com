(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{119:function(e,t,n){"use strict";var a=n(123),r=n(2);t.a=function(e){var t=e.title;return Object(r.jsx)(a.a,{children:Object(r.jsx)("title",{children:t})})}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(0),o=l(r),c=l(n(36)),i=l(n(121)),s=l(n(122));function l(e){return e&&e.__esModule?e:{default:e}}var u={overflow:"hidden",position:"relative"};function f(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function d(e){var t=(0,r.useState)(""),n=a(t,2),c=n[0],l=n[1],d=(0,r.useState)(0),v=a(d,2),p=v[0],h=v[1],y=(0,r.useState)([]),b=a(y,2),m=b[0],g=b[1],j=(0,r.useState)(!1),O=a(j,2),S=O[0],x=O[1],I=(0,i.default)(e),w=a(I,2),C=w[0],_=w[1],M=(0,r.useState)(0),A=a(M,2),E=A[0],H=A[1],N=(0,r.useState)(!1),T=a(N,2),k=T[0],L=T[1],D=(0,r.useState)(""),P=a(D,2),U=P[0],R=P[1];function z(e){"undefined"===typeof e&&(e=C.isHalf?Math.floor(p):Math.round(p));for(var t=[],n=0;n<C.count;n++)t.push({active:n<=e-1});return t}function F(e){if(C.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(C.isHalf){var n=q(e);L(n),n&&(t+=1),H(t)}else t+=1;!function(e){var t=m.filter((function(e){return e.active}));e!==t.length&&g(z(e))}(t)}}function q(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;return(n=Math.round(Math.abs(n)))>t.width/2}function J(){C.edit&&(Q(p),g(z()))}function Q(e){C.isHalf&&(L(function(e){return e%1===0}(e)),H(Math.floor(e)))}function B(e){if(C.edit){var t=Number(e.currentTarget.getAttribute("data-index")),n=void 0;if(C.isHalf){var a=q(e);L(a),a&&(t+=1),n=a?t:t+.5,H(t)}else n=t+=1;K(n)}}function K(t){t!==p&&(g(z(t)),h(t),e.onChange(t))}return(0,r.useEffect)((function(){var t,n;!function(){var t="react-stars";R(e.classNames+" "+t)}(),t=e.value,n=e.count,h(t<0||t>n?0:t),g(z(e.value)),_(e),l((Math.random()+"").replace(".","")),x(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),H(Math.floor(e.value)),L(e.isHalf&&e.value%1<.5)}),[]),o.default.createElement("div",{className:"react-stars-wrapper-"+c,style:{display:"flex"}},o.default.createElement("div",{tabIndex:C.a11y&&C.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(C.a11y||C.edit){var t=e.key,n=p,a=Number(t);a?Number.isInteger(a)&&a>0&&a<=C.count&&(n=a):("ArrowUp"===t||"ArrowRight"===t)&&n<C.count?(e.preventDefault(),n+=C.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&n>.5&&(e.preventDefault(),n-=C.isHalf?.5:1),Q(n),K(n)}},className:U,style:u},C.isHalf&&function(){return o.default.createElement("style",{dangerouslySetInnerHTML:{__html:S?(e=C.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):f(C.activeColor,c)}});var e}(),m.map((function(e,t){return o.default.createElement(s.default,{key:t,index:t,active:e.active,config:C,onMouseOver:F,onMouseLeave:J,onClick:B,halfStarHidden:k,halfStarAt:E,isUsingIcons:S,uniqueness:c})})),o.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},p)))}d.propTypes={classNames:c.default.string,edit:c.default.bool,half:c.default.bool,value:c.default.number,count:c.default.number,char:c.default.string,size:c.default.number,color:c.default.string,activeColor:c.default.string,emptyIcon:c.default.element,halfIcon:c.default.element,filledIcon:c.default.element,a11y:c.default.bool},d.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=d},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(s){r=!0,o=s}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,r.useState)(e.count),n=a(t,2),o=n[0],c=n[1],i=(0,r.useState)(e.size),s=a(i,2),l=s[0],u=s[1],f=(0,r.useState)(e.char),d=a(f,2),v=d[0],p=d[1],h=(0,r.useState)(e.color),y=a(h,2),b=y[0],m=y[1],g=(0,r.useState)(e.activeColor),j=a(g,2),O=j[0],S=j[1],x=(0,r.useState)(e.isHalf),I=a(x,2),w=I[0],C=I[1],_=(0,r.useState)(e.edit),M=a(_,2),A=M[0],E=M[1],H=(0,r.useState)(e.emptyIcon),N=a(H,2),T=N[0],k=N[1],L=(0,r.useState)(e.halfIcon),D=a(L,2),P=D[0],U=D[1],R=(0,r.useState)(e.filledIcon),z=a(R,2),F=z[0],q=z[1],J=(0,r.useState)(e.a11y),Q=a(J,2),B=Q[0],K=Q[1];return[{count:o,size:l,char:v,color:b,activeColor:O,isHalf:w,edit:A,emptyIcon:T,halfIcon:P,filledIcon:F,a11y:B},function(e){c(e.count),u(e.size),p(e.char),m(e.color),S(e.activeColor),C(e.isHalf),E(e.edit),k(e.emptyIcon),U(e.halfIcon),q(e.filledIcon),K(e.a11y)}]};var r=n(0)},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e){var t=e.index,n=e.active,r=e.config,o=e.onMouseOver,s=e.onMouseLeave,l=e.onClick,u=e.halfStarHidden,f=e.halfStarAt,d=e.isUsingIcons,v=e.uniqueness,p=r.color,h=r.activeColor,y=r.size,b=r.char,m=r.isHalf,g=r.edit,j=r.halfIcon,O=r.emptyIcon,S=r.filledIcon,x="",I=!1;m&&!u&&f===t&&(x=d?"react-stars-half":"react-stars-"+v,I=!0);var w=a({},i,{color:n?h:p,cursor:g?"pointer":"default",fontSize:y+"px"});return c.default.createElement("span",{className:x,style:w,key:t,"data-index":t,"data-forhalf":S?t:b,onMouseOver:o,onMouseMove:o,onMouseLeave:s,onClick:l},d?n?S:!n&&I?j:O:b)};var r,o=n(0),c=(r=o)&&r.__esModule?r:{default:r};var i={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(5),r=n.n(a),o=n(12),c=n(18),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,25e3],a=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return function(){var s=Object(o.a)(r.a.mark((function o(s){var l,u,f;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s({type:"ALL_PRODUCT_REQUEST"}),l="/api/v1/products?keyword=".concat(e,"&page=").concat(t,"&price[gte]=").concat(n[0],"&price[lte]=").concat(n[1],"&ratings[gte]=").concat(i),a&&(l="/api/v1/products?keyword=".concat(e,"&page=").concat(t,"&price[gte]=").concat(n[0],"&price[lte]=").concat(n[1],"&category=").concat(a,"&ratings[gte]=").concat(i)),r.next=6,c.a.get(l);case 6:u=r.sent,f=u.data,s({type:"ALL_PRODUCT_SUCCESS",payload:f}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),s({type:"ALL_PRODUCT_FAIL",payload:r.t0.response.data.message});case 14:case"end":return r.stop()}}),o,null,[[0,11]])})));return function(e){return s.apply(this,arguments)}}()},s=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"PRODUCT_DETAILS_REQUEST"}),t.next=4,c.a.get("/api/v1/product/".concat(e));case 4:a=t.sent,o=a.data,n({type:"PRODUCT_DETAILS_SUCCESS",payload:o.product}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:"PRODUCT_DETAILS_FAIL",payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}},126:function(e,t,n){"use strict";var a=n(16),r=n(120),o=n.n(r),c=(n(127),n(2));t.a=function(e){var t=e.props;return Object(c.jsxs)(a.b,{to:"/product/".concat(t._id),className:"card-container",children:[Object(c.jsx)("img",{src:t.images[0].url,alt:t.name}),Object(c.jsx)("p",{children:t.name}),Object(c.jsxs)("div",{className:"star-rev",children:[Object(c.jsx)(o.a,{activeColor:"tomato",isHalf:!0,edit:!1,size:20,value:t.ratings})," ",Object(c.jsxs)("span",{children:["(",t.numOfReviews," reviews)"]})]}),Object(c.jsxs)("span",{className:"price",children:["\u20b9",t.price]})]})}},127:function(e,t,n){},134:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(126),c=n(119),i=n(124),s=n(7),l=(n(134),n(2));t.default=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.products})).products;return r.a.useEffect((function(){e(Object(i.a)())}),[e]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.a,{title:"Flip Outlet"}),Object(l.jsxs)("div",{className:"home",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("div",{className:"divide first",children:"Meet the Products that define you!"}),Object(l.jsx)("div",{className:"divide",children:Object(l.jsx)("img",{src:"https://cdn.dribbble.com/users/2151922/screenshots/6969955/untitled-2.gif",alt:"shopping"})})]}),Object(l.jsx)("div",{className:"prod-text",children:"Top Products"}),Object(l.jsx)("div",{className:"home-products",children:t&&t.map((function(e,t){return Object(l.jsx)(o.a,{props:e},t)}))})]})]})}}}]);
//# sourceMappingURL=4.d3fa1159.chunk.js.map