(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={label:"MyCheckBox_label__2ahpY",checkbox:"MyCheckBox_checkbox__1w0wK",fake:"MyCheckBox_fake__1wjkr"}},function(e,t,n){e.exports={button:"MyButton_button__36Ggp",buttonRed:"MyButton_buttonRed__TQmNE"}},function(e,t,n){e.exports={inputError:"MyInput_inputError__3wsdT",input:"MyInput_input__emNMN"}},,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(11),r=n.n(l),i=(n(18),n(19),function(e){return c.a.createElement("div",null,e.name)}),o=function(e){return c.a.createElement("div",null,e.text)},u=function(e){return c.a.createElement("div",null,e.time)},s=(n(20),function(){return c.a.createElement("div",{className:"window"},c.a.createElement("img",{src:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"}),c.a.createElement("div",{className:"message"},c.a.createElement("div",{className:"name"},c.a.createElement(i,{name:"Ignat"})),c.a.createElement("div",{className:"text"},c.a.createElement(o,{text:"Hi, how are you?"})),c.a.createElement("div",{className:"time"},c.a.createElement(u,{time:"22:26"}))))}),m=n(4),d=n(1),f=n(6),E=n.n(f),p=function(e){return c.a.createElement("button",{onClick:e.onClick,className:e.styleRed?E.a.buttonRed:E.a.button},e.title)},h=n(5),v=n.n(h),k=function(e){return c.a.createElement("label",{className:v.a.label},c.a.createElement("input",{type:"checkbox",className:v.a.checkbox,checked:e.checked,onChange:function(t){return e.changeStatus(t.currentTarget.checked)}}),c.a.createElement("span",{className:v.a.fake}))};function b(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"Affairs"),c.a.createElement("ul",null,e.tasks.map((function(t){return c.a.createElement("li",{key:t.id,className:"liTodo"},c.a.createElement(k,{checked:t.p,changeStatus:function(n){var a=n;e.changeStatus(t.id,a)}}),c.a.createElement("span",null,t.title),c.a.createElement(p,{title:"x",onClick:function(){e.removeTasks(t.id)},styleRed:!0}))}))),c.a.createElement("div",null,c.a.createElement(p,{title:"all",onClick:function(){e.changeFilter("all")},styleRed:!1}),c.a.createElement(p,{title:"active",onClick:function(){e.changeFilter("active")},styleRed:!1}),c.a.createElement(p,{title:"completed",onClick:function(){e.changeFilter("completed")},styleRed:!1})))}var g=function(){var e=Object(a.useState)([{id:1,title:"\u0440\u0430\u0431\u043e\u0442\u0430",p:!0},{id:2,title:"\u0430\u043d\u0438\u043c\u0435",p:!1},{id:3,title:"\u0438\u0433\u0440\u044b",p:!1},{id:4,title:"\u0440\u0435\u0430\u043a\u0442",p:!0},{id:5,title:"\u0445\u0442\u043c\u043b",p:!0}]),t=Object(d.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)("all"),i=Object(d.a)(r,2),o=i[0],u=i[1],s=n;return"active"===o&&(s=n.filter((function(e){return!1===e.p}))),"completed"===o&&(s=n.filter((function(e){return!0===e.p}))),c.a.createElement("div",null,c.a.createElement(b,{title:"To-do list",tasks:s,removeTasks:function(e){var t=n.filter((function(t){return t.id!==e}));l(t)},changeFilter:function(e){u(e)},changeStatus:function(e,t){var a=n.find((function(t){return t.id===e}));a&&(a.p=t,l(Object(m.a)(n)))}}))},y=n(12),_=n(7),N=n.n(_),w=function(e){return c.a.createElement("div",{className:"myInput"},c.a.createElement("input",{className:e.error?N.a.inputError:N.a.input,type:"text",value:e.value,onChange:function(t){return e.onChange(t.currentTarget.value)},onKeyPress:e.KeyPress}))};function C(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),o=i[0],u=i[1],s=Object(a.useState)(!1),f=Object(d.a)(s,2),E=f[0],h=f[1];function v(){""!=n?(alert("hello ".concat(n)),l(""),function(e){var t=[{id:Object(y.v1)(),name:e}].concat(Object(m.a)(o));u(t)}(n)):(h(!0),alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"))}return c.a.createElement("div",null,c.a.createElement(w,{value:n,onChange:function(e){l(e),h(!1)},KeyPress:function(e){"Enter"===e.key&&v()},error:E}),c.a.createElement(p,{title:"hello",onClick:v,styleRed:!1}),c.a.createElement("div",null," \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",o.length," "))}var x=function(){return c.a.createElement("div",{className:"demonstration"},c.a.createElement(p,{title:"demonstration",onClick:function(){},styleRed:!1}),c.a.createElement(k,{checked:!0,changeStatus:function(){}}),c.a.createElement(w,{value:"demonstration",KeyPress:function(e){},onChange:function(){},error:!1}))};function j(){return c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(x,null))}var O=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(g,null),c.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.b3e0dbba.chunk.js.map