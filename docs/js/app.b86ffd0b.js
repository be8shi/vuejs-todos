(function(e){function t(t){for(var n,r,s=t[0],c=t[1],a=t[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return l.push.apply(l,a||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(l.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},i={app:0},l=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vuejs-todos/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var d=c;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todoapp",attrs:{id:"app"}},[o("header",{staticClass:"header"},[o("h1",[e._v("todos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTitle,expression:"newTitle"}],staticClass:"new-todo",attrs:{type:"text",autofocus:"",placeholder:"What needs to be done?"},domProps:{value:e.newTitle},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()},input:function(t){t.target.composing||(e.newTitle=t.target.value)}}})]),o("section",{directives:[{name:"show",rawName:"v-show",value:e.filterTodos.length,expression:"filterTodos.length"}],staticClass:"main"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.allDone,expression:"allDone"}],staticClass:"toggle-all",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allDone)?e._i(e.allDone,null)>-1:e.allDone},on:{change:function(t){var o=e.allDone,n=t.target,i=!!n.checked;if(Array.isArray(o)){var l=null,r=e._i(o,l);n.checked?r<0&&(e.allDone=o.concat([l])):r>-1&&(e.allDone=o.slice(0,r).concat(o.slice(r+1)))}else e.allDone=i}}}),o("label",{attrs:{for:"toggle-all"},on:{click:function(t){return e.toggleAllTodo()}}},[e._v("Mark all as complete")]),o("ul",{staticClass:"todo-list"},e._l(e.filterTodos,(function(t){return o("li",{key:t.id,staticClass:"todo",class:{completed:t.completed,editing:t===e.editTodo}},[o("div",{staticClass:"view"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{click:function(o){return e.toggleTodo(t)},change:function(o){var n=t.completed,i=o.target,l=!!i.checked;if(Array.isArray(n)){var r=null,s=e._i(n,r);i.checked?s<0&&e.$set(t,"completed",n.concat([r])):s>-1&&e.$set(t,"completed",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(t,"completed",l)}}}),o("label",{on:{dblclick:function(o){return e.selectTodo(t)}}},[e._v(e._s(t.title))]),o("button",{staticClass:"destroy",on:{click:function(o){return e.removeTodo(t)}}})]),o("input",{directives:[{name:"focus",rawName:"v-focus",value:t===e.editTodo,expression:"todo === editTodo"},{name:"model",rawName:"v-model.trim.lazy",value:t.title,expression:"todo.title",modifiers:{trim:!0,lazy:!0}}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.title},on:{blur:[function(o){return e.doneEdit(t)},function(t){return e.$forceUpdate()}],keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doneEdit(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEdit()}],change:function(o){e.$set(t,"title",o.target.value.trim())}}})])})),0)]),o("footer",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",{domProps:{textContent:e._s(e.remaining)}}),e._v(" "+e._s(e.pluralize("item",e.remaining))+" left ")]),o("ul",{staticClass:"filters"},[o("li",[o("a",{class:{selected:"all"===e.visibility},on:{click:function(t){return e.changeVisibility("all")}}},[e._v("All")])]),o("li",[o("a",{class:{selected:"active"===e.visibility},on:{click:function(t){return e.changeVisibility("active")}}},[e._v("Active")])]),o("li",[o("a",{class:{selected:"completed"===e.visibility},on:{click:function(t){return e.changeVisibility("completed")}}},[e._v("Completed")])])]),o("button",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>e.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:function(t){return e.removeCompleted()}}},[e._v("Clear completed")])])])},l=[],r=(o("4de4"),o("4160"),o("c975"),o("a434"),o("159b"),{name:"App",components:{},data:function(){return{newTitle:null,todos:[{id:1,completed:!0,title:"Foo"},{id:2,completed:!1,title:"Bar"},{id:3,completed:!0,title:"hoge"},{id:4,completed:!1,title:"fuga"}],editTodo:null,visibility:"all"}},computed:{filterTodos:function(){switch(this.visibility){case"all":return this.todos;case"active":return this.todos.filter((function(e){return!e.completed}));case"completed":return this.todos.filter((function(e){return e.completed}));default:return[]}},remaining:function(){return this.todos.filter((function(e){return!e.completed})).length},allDone:function(){return this.todos.length===this.todos.filter((function(e){return e.completed})).length}},methods:{pluralize:function(e,t){return e+(1===t?"":"s")},addTodo:function(){this.newTitle&&(this.todos.push({id:this.todos.length+1,completed:!1,title:this.newTitle}),this.newTitle=null)},removeTodo:function(e){var t=this.todos.indexOf(e);this.todos.splice(t,1)},removeCompleted:function(){this.todos=this.todos.filter((function(e){return!e.completed}))},toggleTodo:function(e){e.completed=!e.completed},toggleAllTodo:function(){var e=this.allDone;this.todos.forEach((function(t){return t.completed=!e}))},selectTodo:function(e){this.editTodo=e},doneEdit:function(e){this.editTodo&&(e.title||this.removeTodo(e),this.editTodo=null)},cancelEdit:function(){this.editTodo=null},changeVisibility:function(e){this.visibility=e}},directives:{focus:function(e,t){t&&e.focus()}}}),s=r,c=(o("ad67"),o("2877")),a=Object(c["a"])(s,i,l,!1,null,null,null),d=a.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.b86ffd0b.js.map