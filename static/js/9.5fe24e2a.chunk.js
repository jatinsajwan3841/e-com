(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{215:function(e,a,s){},216:function(e,a,s){},217:function(e,a,s){"use strict";var t=s(93);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=t(s(94)),l=s(2),n=(0,c.default)((0,l.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"}),"ShoppingBag");a.default=n},218:function(e,a,s){"use strict";var t=s(93);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=t(s(94)),l=s(2),n=(0,c.default)((0,l.jsx)("path",{d:"M3 17h18c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zm-.5-4.43c.36.21.82.08 1.03-.28l.47-.82.48.83c.21.36.67.48 1.03.28.36-.21.48-.66.28-1.02l-.49-.84h.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5.3l.47-.82c.21-.36.09-.82-.27-1.03-.36-.2-.82-.08-1.03.28L4 8.47l-.47-.82c-.21-.36-.67-.48-1.03-.28-.36.21-.48.67-.27 1.03l.47.82h-.95c-.41 0-.75.34-.75.75s.34.75.75.75h.95l-.48.83c-.2.36-.08.82.28 1.02zm8 0c.36.21.82.08 1.03-.28l.47-.82.48.83c.21.36.67.48 1.03.28.36-.21.48-.66.28-1.02l-.48-.83h.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.96l.47-.82c.21-.36.08-.82-.27-1.03-.36-.21-.82-.08-1.02.27l-.48.82-.47-.82c-.21-.36-.67-.48-1.02-.27-.36.21-.48.67-.27 1.03l.47.82h-.96c-.41-.01-.75.33-.75.74s.34.75.75.75h.95l-.48.83c-.2.36-.08.82.28 1.02zM23 9.97c0-.41-.34-.75-.75-.75h-.95l.47-.82c.21-.36.08-.82-.27-1.03-.36-.21-.82-.08-1.02.27l-.48.83-.47-.82c-.21-.36-.67-.48-1.02-.27-.36.21-.48.67-.27 1.03l.47.82h-.95c-.42-.01-.76.33-.76.74s.34.75.75.75h.95l-.48.83c-.21.36-.08.82.28 1.02.36.21.82.08 1.03-.28l.47-.82.48.83c.21.36.67.48 1.03.28.36-.21.48-.66.28-1.02l-.48-.83h.95c.4-.01.74-.35.74-.76z"}),"PasswordRounded");a.default=n},219:function(e,a,s){"use strict";var t=s(93);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=t(s(94)),l=s(2),n=(0,c.default)((0,l.jsx)("path",{d:"M10.79 16.29c.39.39 1.02.39 1.41 0l3.59-3.59c.39-.39.39-1.02 0-1.41L12.2 7.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L12.67 11H4c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41zM19 3H5c-1.11 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToAppRounded");a.default=n},317:function(e,a,s){"use strict";s.r(a);var t=s(6),c=s.n(t),l=s(14),n=s(10),r=s(0),d=s.n(r),i=s(8),o=s(4),j=s(17),u=s(55),b=s(217),m=s.n(b),h=s(218),p=s.n(h),O=s(219),f=s.n(O),x=s(34),v=(s(215),s(2)),N=[{label:"Please enter your old password",placeholder:"old password",name:"oldPassword"},{label:"Please enter your new password",placeholder:"new password",name:"newPassword"},{label:"Please re-enter your password",placeholder:"confirm password",name:"confirmPassword"}],w=function(e){var a=e.setChangePass,s=e.dispatch;return Object(v.jsx)("div",{className:"updatePass-holder",onClick:function(e){return a(!1)},children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=e.target;if(a.newPassword.value===a.confirmPassword.value){var t={oldPassword:a.oldPassword.value,newPassword:a.newPassword.value,confirmPassword:a.confirmPassword.value};s(Object(x.g)(t))}else alert("New Password and Repeat Password does not match")},encType:"multipart/form-data",className:"pass-container",onClick:function(e){e.stopPropagation()},children:[Object(v.jsx)("h1",{children:"Please enter all fields as mentioned "}),N.map((function(e,a){return Object(v.jsxs)("div",{className:"inp-content",children:[Object(v.jsx)("label",{htmlFor:"password",className:"label",children:e.label}),Object(v.jsx)("input",{type:"password",name:e.name,placeholder:" ",minLength:"6",required:!0}),Object(v.jsx)("hr",{className:"border-bottom"}),Object(v.jsx)("span",{className:"placeholder",children:e.placeholder})]},a)})),Object(v.jsx)("input",{type:"submit",value:"update",className:"btn"})]})})};s(216),a.default=function(){var e=d.a.useState(!1),a=Object(n.a)(e,2),s=a[0],t=a[1],r=d.a.useState(),b=Object(n.a)(r,2),h=b[0],O=b[1],N=d.a.useState(!1),P=Object(n.a)(N,2),g=P[0],y=P[1],z=Object(i.c)((function(e){return e.user})).user,k=Object(i.c)((function(e){return e.profile})).isUpdated,M=Object(i.b)(),C=Object(o.f)(),E=function(){var e=Object(l.a)(c.a.mark((function e(a){var s,t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(s=a.target.files[0])&&s.size<2e6?((t=new FileReader).onload=function(e){O(e.target.result)},t.readAsDataURL(s)):alert("please choose file of size less than 2MB!");case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return d.a.useEffect((function(){k&&(M(Object(x.b)()),C("/profile"),M({type:"UPDATE_PROFILE_RESET"}))}),[k,M,C]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.a,{title:"".concat(z.name,"'s Profile")}),g&&Object(v.jsx)(w,{setChangePass:y,dispatch:M}),Object(v.jsxs)("div",{className:"profile-container",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsxs)("div",{className:"dp-holder",children:[Object(v.jsx)("img",{src:h||z.avatar.url,alt:z.name,className:"user-dp"}),s&&Object(v.jsx)("label",{children:Object(v.jsx)("span",{className:"upload",children:Object(v.jsx)("input",{type:"file",name:"dp",accept:".jpeg,.jpg,.png",onChange:E})})}),Object(v.jsxs)("div",{className:"dp-name",children:[Object(v.jsx)("span",{className:"hello",children:"Hello"}),Object(v.jsx)("span",{className:"user-name",children:z.name})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)(j.b,{to:"/orders",className:"sub-links",children:[Object(v.jsx)(m.a,{}),Object(v.jsx)("span",{className:"text",children:"My Orders"})]}),Object(v.jsxs)("div",{className:"sub-links",onClick:function(){return y(!0)},children:[Object(v.jsx)(p.a,{}),Object(v.jsx)("span",{className:"text",children:"Change Password"})]}),Object(v.jsxs)("div",{className:"sub-links",onClick:function(){return M(Object(x.d)())},children:[Object(v.jsx)(f.a,{}),Object(v.jsx)("span",{className:"text",children:"Log out"})]})]})]}),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=e.target.name.value,s=e.target.email.value,t=new FormData;a&&t.set("name",a),s&&t.set("email",s),h&&t.set("dp",h),M(Object(x.h)(t))},encType:"multipart/form-data",className:"details-holder",children:[Object(v.jsx)("center",{className:"details-header",children:"Hey! Here's what you shared with us!"}),Object(v.jsxs)("div",{className:"inp-content",children:[Object(v.jsx)("label",{htmlFor:"name",className:"label",children:"Your name"}),Object(v.jsx)("input",{type:"text",name:"name",placeholder:" ",minLength:"3",defaultValue:z.name,required:!0,disabled:!s}),Object(v.jsx)("hr",{className:"border-bottom"}),Object(v.jsx)("span",{className:"placeholder",children:"Name"})]}),Object(v.jsxs)("div",{className:"inp-content",children:[Object(v.jsx)("label",{htmlFor:"email",className:"label",children:"Your Email"}),Object(v.jsx)("input",{type:"email",name:"email",placeholder:" ",defaultValue:z.email,required:!0,disabled:!s}),Object(v.jsx)("hr",{className:"border-bottom"}),Object(v.jsx)("span",{className:"placeholder",children:"Email"})]}),Object(v.jsxs)("div",{className:"inp-content",children:[Object(v.jsx)("label",{htmlFor:"email",className:"label",children:"Date Joined On"}),Object(v.jsx)("input",{type:"date",name:"email",placeholder:" ",defaultValue:String(z.createdAt).substr(0,10),disabled:!0}),Object(v.jsx)("hr",{className:"border-bottom"}),Object(v.jsx)("span",{className:"placeholder",children:"Joined On"})]}),Object(v.jsxs)("div",{className:"btn-div",children:[Object(v.jsx)("button",{type:"button",className:"btn edit",onClick:function(){return t((function(e){return!e}))},children:"Edit"}),s&&Object(v.jsx)("input",{type:"submit",className:"btn update",value:"Update"})]})]})]})]})}}}]);
//# sourceMappingURL=9.5fe24e2a.chunk.js.map