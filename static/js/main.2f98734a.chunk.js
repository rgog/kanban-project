(this["webpackJsonpkanban-project"]=this["webpackJsonpkanban-project"]||[]).push([[0],{32:function(e,n,t){e.exports=t.p+"static/media/logo.5160c008.png"},38:function(e,n,t){e.exports=t.p+"static/media/img2.1448f169.jpg"},44:function(e,n,t){e.exports=t(61)},49:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),i=t.n(o),c=(t(49),t(3)),s=t(4),u=t(32),l=t.n(u);function d(){var e=Object(c.a)(["\n    background-image: url(",");\n    background-size: cover;\n    /* background-color: #1e20178f; */\n    height:4rem;\n    width:9rem;\n    margin:0px 10px 10px 10px;\n"]);return d=function(){return e},e}function p(){var e=Object(c.a)(["\n    height:4.5rem;\n    background-color: #303946;\n    padding:2px;\n"]);return p=function(){return e},e}var f=s.a.div(p()),b=s.a.div(d(),l.a),g=function(){return r.a.createElement(f,{className:"BannerClass"},r.a.createElement(b,{className:"logodiv"}))},m=t(8),v=t(9),E=t(20),x=t(18),h=t(64),O="card";function k(){var e=Object(c.a)(["\n    cursor: pointer;\n"]);return k=function(){return e},e}function j(){var e=Object(c.a)(["\n    &:hover{\n        background-color: #909090;\n        transform: scale(1.02);\n        transition: all 0.1s ease;\n    }\n    &:active{\n        transform: scale(1.02) rotate(2deg);\n    }\n    opacity: ",";\n    box-shadow:0 1px 0 rgba(9,30,66,.25);\n    position:relative;\n    border-radius:3px;\n    background-color: #ececec;\n    min-height:20px;\n    padding: 8px;\n    margin:8px;\n"]);return j=function(){return e},e}var T=s.a.div(j(),(function(e){return e.isDragging?"0.1":"1"})),y=s.a.div(k()),w=function(e){var n=e.task,t=void 0===n?[]:n,a=e.onDeleteTaskPressed,o=Object(h.a)({item:{type:O,id:t.task},collect:function(e){return{isDragging:!!e.isDragging()}}}),i=Object(m.a)(o,2),c=i[0].isDragging,s=i[1];return r.a.createElement(T,{ref:s,isDragging:c},r.a.createElement(y,{onClick:function(){a(t)}},r.a.createElement("span",{className:"close"},"x")),r.a.createElement("div",null,r.a.createElement("span",null,t.task)))},C=t(37),L=t.n(C),_=(t(31),function(e){return e.tasks.data}),D=function(e){return e.lists.data},P=L()(_,(function(e,n){return n}),(function(e,n){return e.filter((function(e){return e.status===n}))}))((function(e,n){return n})),S=function(e){return e.visibleListCreator};function A(){var e=Object(c.a)(["\n\n"]);return A=function(){return e},e}function I(){var e=Object(c.a)(["\n    display:flex;\n    justify-content:space-evenly;\n"]);return I=function(){return e},e}function N(){var e=Object(c.a)(["\n    width: 100%;\n    min-height:100px;\n    border-style:none;\n    outline:0ch;\n    overflow-y:hidden;\n"]);return N=function(){return e},e}function R(){var e=Object(c.a)(["\n    box-shadow:0 1px 0 rgba(9,30,66,.25);\n    position:relative;\n    border-radius:3px;\n    background-color: white;\n    min-height:20px;\n    padding: 8px;\n    margin:8px;\n"]);return R=function(){return e},e}var U=s.a.div(R()),K=s.a.textarea(N()),V=s.a.div(I()),F=s.a.button(A());var B=Object(v.b)((function(e){return{tasks:_(e)}}))((function(e){var n=e.status,t=e.onCreatePressed,o=e.tasks,i=void 0===o?[]:o,c=e.onCancelPressed,s=Object(a.useState)(""),u=Object(m.a)(s,2),l=u[0],d=u[1],p=Object(a.useState)("Type your new task here"),f=Object(m.a)(p,2),b=f[0],g=f[1];return r.a.createElement(U,null,r.a.createElement(K,{autoFocus:!0,onKeyDown:function(e){return function(e){e.target.style.height="inherit",e.target.style.height="".concat(e.target.scrollHeight,"px")}(e)},placeholder:b,value:l,onChange:function(e){return d(e.target.value)}}),r.a.createElement(V,null,r.a.createElement(F,{className:"btn btn-success btn-sm",onClick:function(){""!==l&&(i.some((function(e){return e.task.toLowerCase()===l.trim().toLowerCase()}))?(g("This task already exists! Enter Something else"),d("")):(t(l.trim(),n),g("Type your new task here"),d("")))}},r.a.createElement("span",null,"Confirm")),r.a.createElement(F,{className:"btn btn-danger btn-sm",onClick:function(){return c()}},r.a.createElement("span",null,"Cancel"))))})),Y=t(65);function W(){var e=Object(c.a)(["\n    cursor: pointer;\n    padding: 2px 4px;\n    /* transform: translate(0%, -50%); */\n"]);return W=function(){return e},e}function X(){var e=Object(c.a)(["\n    &:hover{\n        background-color: #9c9c9c;\n    }\n    padding:7px;\n    border:0ch;    \n    background-color:#cac6c2c9;\n    width: 100%;\n    text-align: left;\n"]);return X=function(){return e},e}function M(){var e=Object(c.a)(["\n    height: 38px;\n    display: flex;\n    align-items:center;\n"]);return M=function(){return e},e}function z(){var e=Object(c.a)(["\n    overflow-y: scroll;\n    overflow-x: hidden;\n    min-height:50px;\n    box-shadow: inset 0px 0px 6px 3px #8080808a;\n"]);return z=function(){return e},e}function G(){var e=Object(c.a)(["\n    \n    background-color:#cac6c2c9;\n    width: 230px;\n    max-height:100%;\n    border-radius: 4px;\n    box-shadow: 0px 0px 5px 1px grey;\n    /* position:relative; */\n    display:flex;\n    flex-direction:column;\n"]);return G=function(){return e},e}function J(){var e=Object(c.a)(["\n    height: 38px;\n    display: flex;\n    justify-content: space-between;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n"]);return J=function(){return e},e}function H(){var e=Object(c.a)(["\n    padding: 8px;\n"]);return H=function(){return e},e}function q(){var e=Object(c.a)(["\n    margin:0 10px;\n    padding: 8px;\n    width: 230px;\n"]);return q=function(){return e},e}var Q=s.a.div(q()),Z=s.a.b(H()),$=s.a.div(J()),ee=s.a.div(G()),ne=s.a.div(z()),te=s.a.div(M()),ae=s.a.button(X()),re=s.a.div(W()),oe=Object(v.b)((function(e,n){return{tasks:P(e,n.listName),showNewCardType:S(e)}}))((function(e){var n=e.listName,t=e.tasks,a=void 0===t?[]:t,o=e.onCreatePressed,i=e.onAddTaskPressed,c=e.onCancelPressed,s=e.showNewCardType,u=e.onDeleteListPressed,l=e.deleteTasksForList,d=e.onDeleteTaskPressed,p=e.onStatusUpdate,f=Object(Y.a)({accept:O,drop:function(e,t){return p(e.id,n)},collect:function(e){return{isOver:!!e.isOver()}}}),b=Object(m.a)(f,2),g=b[0].isOver,v=b[1];return r.a.createElement(Q,null,r.a.createElement(ee,{className:"ListContainer",draggable:"true"},r.a.createElement($,null,r.a.createElement(Z,null,n),r.a.createElement(re,{onClick:function(){u(n),l(n)}},r.a.createElement("span",{className:"close"},"x"))),r.a.createElement(ne,{ref:v,bg:g?"Green":"Yellow"},a.map((function(e){return r.a.createElement(w,{task:e,onDeleteTaskPressed:d})})),s===n?r.a.createElement(B,{status:n,onCreatePressed:o,onCancelPressed:c}):null),r.a.createElement(te,null,r.a.createElement(ae,{onClick:function(){return i(n)}},r.a.createElement(x.a,{icon:E.a}),r.a.createElement("b",null,"Add New Task")))))}));function ie(){var e=Object(c.a)(["\n    width: 100%;\n    height: 40px;\n    border-style: none;\n    border-top-right-radius:0px;\n    border-top-left-radius:0px;\n    box-shadow: 0px 0px 5px 1px grey;\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n    width: 100%;\n    min-width:200px;\n    height: 40px;\n    border-style: none;\n    border-top-right-radius:4px;\n    border-top-left-radius:4px;\n    padding:8px;\n    background-color:#cac6c2;\n    box-shadow: 0px 0px 5px 1px grey;\n"]);return ce=function(){return e},e}function se(){var e=Object(c.a)(["\n    margin:0 10px;\n    padding: 8px;\n    width: 230px;\n"]);return se=function(){return e},e}function ue(){var e=Object(c.a)(["\n    padding: 8px;\n    overflow-x:auto;\n    overflow-y:hidden;\n    display:flex;\n    position: absolute;\n    padding-bottom: 8px;\n    bottom: 0;\n    top: 4.5rem;\n    right: 0;\n    left: 0;\n"]);return ue=function(){return e},e}var le=s.a.div(ue()),de=s.a.div(se()),pe=s.a.input(ce()),fe=s.a.button(ie()),be=Object(v.b)((function(e){return{lists:D(e)}}),(function(e){return{onAddListPressed:function(n){return e({type:"CREATE_LIST",payload:{list:n}})},onDeleteListPressed:function(n){return e({type:"DELETE_LIST",payload:{list:n}})},onCreatePressed:function(n,t){return e(function(e,n){return{type:"CREATE_TASK",payload:{task:e,status:n}}}(n,t))},deleteTasksForList:function(n){return e({type:"DELETE_TASKS_FOR_LIST",payload:{list:n}})},onCancelPressed:function(){return e({type:"REMOVE_NEWCARD_VISIBILITY"})},onAddTaskPressed:function(n){return e({type:"UPDATE_NEWCARD_VISIBILITY",payload:{newCard:n}})},onDeleteTaskPressed:function(n){return e(function(e){return{type:"DELETE_TASK",payload:{task:e}}}(n))},onStatusUpdate:function(n,t){return e(function(e,n){return{type:"UPDATE_TASK",payload:{taskId:e,status:n}}}(n,t))}}}))((function(e){var n=e.lists,t=void 0===n?[]:n,o=e.onAddListPressed,i=e.onDeleteListPressed,c=e.deleteTasksForList,s=e.onAddTaskPressed,u=e.onCancelPressed,l=e.onCreatePressed,d=e.onDeleteTaskPressed,p=e.onStatusUpdate,f=Object(a.useState)(""),b=Object(m.a)(f,2),g=b[0],v=b[1],h=Object(a.useState)("Enter List Name"),O=Object(m.a)(h,2),k=O[0],j=O[1];return r.a.createElement(le,null,t.map((function(e){return r.a.createElement(oe,{listName:e,onDeleteListPressed:i,deleteTasksForList:c,onAddTaskPressed:s,onCancelPressed:u,onCreatePressed:l,onDeleteTaskPressed:d,onStatusUpdate:p})})),r.a.createElement(de,null,r.a.createElement(pe,{type:"text",placeholder:k,value:g,onChange:function(e){return v(e.target.value)}}),r.a.createElement(fe,{className:"btn btn-success",onClick:function(){""!==g&&(t.some((function(e){return e.toLowerCase()===g.trim().toLowerCase()}))?(j("This list already exists!"),v("")):(o(g.trim()),v("")))}},r.a.createElement(x.a,{className:"faIcon",icon:E.a}),r.a.createElement("b",null,"Add New List"))))})),ge=t(63),me=t(42),ve=t(38),Ee=t.n(ve);function xe(){var e=Object(c.a)(["\n  font-family: sans-serif;\n  position:absolute;\n  width:100%;\n  height:100%;\n  /* background-image: url(",");\n  background-size: cover; */\n"]);return xe=function(){return e},e}var he=s.a.div(xe(),Ee.a),Oe=function(){return r.a.createElement(he,{className:"App"},r.a.createElement(g,null),r.a.createElement(ge.a,{backend:me.a},r.a.createElement(be,null)))},ke=t(21),je=t(39),Te=t(7),ye=t(5),we={isLoading:!1,data:[]},Ce={isLoading:!1,data:["New","In Progress","Completed"]},Le=t(40),_e=t.n(Le),De=(t(58),t(59),t(41)),Pe={tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"CREATE_TASK":var r=a.task,o=a.status,i={task:r,status:o};return Object(ye.a)(Object(ye.a)({},e),{},{data:e.data.concat(i)});case"DELETE_TASK":var c=a.task;return Object(ye.a)(Object(ye.a)({},e),{},{data:e.data.filter((function(e){return e.task!==c.task}))});case"DELETE_TASKS_FOR_LIST":var s=a.list;return Object(ye.a)(Object(ye.a)({},e),{},{data:e.data.filter((function(e){return e.status!==s}))});case"UPDATE_TASK":var u=a.taskId,l=a.status;return Object(ye.a)(Object(ye.a)({},e),{},{data:e.data.map((function(e){return e.task===u?Object(ye.a)(Object(ye.a)({},e),{},{status:l}):e}))});default:return e}},lists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"CREATE_LIST":var r=a.list;return Object(ye.a)(Object(ye.a)({},e),{},{data:e.data.concat(r)});case"DELETE_LIST":var o=a.list;return Object(ye.a)(Object(ye.a)({},e),{},{data:e.data.filter((function(e){return e!==o}))});case"UPDATE_LIST":var i=a.list;return Object(ye.a)(Object(ye.a)({},e),{},{data:e.data.map((function(e){return e.id===i.id?i:e}))});default:return e}},visibleListCreator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"UPDATE_NEWCARD_VISIBILITY":var r=a.newCard;return r;case"REMOVE_NEWCARD_VISIBILITY":return"";default:return e}}},Se={key:"root",blacklist:["visibleListCreator"],storage:_e.a,stateReconciler:De.autoMergeLevel2},Ae=Object(Te.combineReducers)(Pe),Ie=Object(ke.a)(Se,Ae),Ne=(t(60),Object(Te.createStore)(Ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Re=Object(ke.b)(Ne);i.a.render(r.a.createElement(v.a,{store:Ne},r.a.createElement(je.PersistGate,{loading:r.a.createElement("div",null,"Loading.."),persistor:Re},r.a.createElement(Oe,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2f98734a.chunk.js.map