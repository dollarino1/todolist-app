(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(16),n=c.n(a),o=(c(26),c(5)),i=(c(27),c(21)),l=c(20),r=c(14),d=c(19),u=c.n(d),j=c(1),b=function(e){var t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=(c[0],c[1]),n=Object(s.useState)(e.taskText),i=Object(o.a)(n,2),l=(i[0],i[1]);Object(s.useEffect)((function(){l(e.taskText)}),[e.taskText]);var d=function(){e.setTodos(e.todos.filter((function(t){return t.id!==e.todo.id})))},b=function(){e.setTodos(e.todos.map((function(t){return t.id===e.todo.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},m=Object(s.useState)(u()("prefix-")),f=Object(o.a)(m,1)[0];return Object(j.jsx)(j.Fragment,{children:e.completed?Object(j.jsxs)("div",{id:"checklist",className:"main__task",children:[Object(j.jsx)("input",{id:f,type:"checkbox",checked:!0,onClick:b,name:"taskCheckbox"}),Object(j.jsx)("label",{for:f,children:e.taskText}),Object(j.jsx)("a",{className:"close",onClick:d})]}):Object(j.jsxs)("div",{id:"checklist",className:"main__task",children:[Object(j.jsx)("input",{id:f,type:"checkbox",onClick:b,name:"taskCheckbox"}),Object(j.jsx)("label",{onDoubleClick:function(){a(!0)},for:f,children:e.taskText}),Object(j.jsx)("a",{className:"close",onClick:d})]})})},m=function(e){var t=Object(l.a)({initialValues:{task:""},onSubmit:function(c){console.log(c),e.setTodos([].concat(Object(i.a)(e.todos),[{taskText:c.task,completed:!1,id:1e3*Math.random()}])),t.resetForm(t.initialValues)},validate:function(e){var t={};return e.task||(t.task="Required"),t}}),c=function(t){e.setStatus(t.target.value),console.log(t.target.value)},s=e.filteredTodos.map((function(t){return Object(j.jsx)(b,{taskText:t.taskText,setTodos:e.setTodos,todos:e.todos,todo:t,completed:t.completed},t.id)}));return Object(j.jsxs)("div",{className:"main__section",children:[Object(j.jsx)("form",{className:"main__form",onSubmit:t.handleSubmit,children:Object(j.jsxs)("div",{className:"Wrapper",children:[Object(j.jsx)("h1",{className:"Title",children:"To-Do List App"}),Object(j.jsxs)("div",{className:"Input",children:[Object(j.jsx)("input",{type:"text",id:"input",class:"Input-text",name:"task",onChange:t.handleChange,value:t.values.task,placeholder:"Write new task",autoComplete:"off"}),Object(j.jsx)("label",{for:"input",class:"Input-label",children:"Your task"})]})]})}),Object(j.jsxs)("div",{className:"main__filter",children:[Object(j.jsx)("button",{onClick:c,value:"completed",className:"main__filterOption",children:"Completed"}),Object(j.jsx)("button",{onClick:c,value:"all",className:"main__filterOption",children:"All"}),Object(j.jsx)("button",{onClick:c,value:"uncompleted",className:"main__filterOption",children:"Uncompleted"})]}),Object(j.jsxs)("div",{className:"main__tasklist",children:[Object(j.jsx)("h2",{children:"My tasks"}),s]})]})};var f=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)("all"),i=Object(o.a)(n,2),l=i[0],r=i[1],d=Object(s.useState)([]),u=Object(o.a)(d,2),b=u[0],f=u[1];Object(s.useEffect)((function(){k()}),[]),Object(s.useEffect)((function(){p(),O()}),[c,l]);var p=function(){switch(l){case"completed":f(c.filter((function(e){return 1==e.completed})));break;case"uncompleted":f(c.filter((function(e){return 0==e.completed})));break;default:f(c)}},O=function(){localStorage.setItem("todos",JSON.stringify(c))},k=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos"));a(e)}};return Object(j.jsx)("div",{className:"App__wrapper",children:Object(j.jsx)(m,{filteredTodos:b,setStatus:r,setTodos:a,todos:c})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),s(e),a(e),n(e),o(e)}))};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.946cc7e6.chunk.js.map