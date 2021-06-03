(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),o=n.n(s),c=n(7),l=n(1),u=n(2),i=n(4),d=n(3),m=(n(13),n(14),n(15),function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onSelectedUser;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"TodoList__item TodoList__item--unchecked"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return n(e.userId)}},"User\xa0#",e.userId))})))))}}]),n}(r.a.PureComponent)),p="https://mate-api.herokuapp.com",h=(n(16),function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e,t=this;(e=this.props.userId,fetch("".concat(p,"/users/").concat(e)).then((function(e){return e.json()}))).then((function(e){return t.setState({user:e.data})}))}},{key:"render",value:function(){var e=this,t=this.state.user;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",this.props.userId)),r.a.createElement("h3",{className:"CurrentUser__name"},t.name),r.a.createElement("p",{className:"CurrentUser__email"},t.email),r.a.createElement("p",{className:"CurrentUser__phone"},t.phone),r.a.createElement("button",{type:"button",onClick:function(){return e.props.onSelectedUser(0)},className:"CurrentUser__button"},"Clear"))}}]),n}(r.a.Component)),f=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,query:"",status:"all"},e.selectUser=function(t){e.setState({selectedUserId:t})},e.hendlerChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.getVisibleTodos=function(t){var n=e.state.query.toLowerCase();return t.filter((function(e){if(null!==e.title)return e.title.toLowerCase().includes(n)}))},e.getComplitedTodos=function(t){return t.filter((function(t){switch(e.state.status){case"active":return!t.completed;case"completed":return t.completed;default:return!0}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(p,"/todos")).then((function(e){return e.json()})).then((function(t){e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.query,a=e.todos,s=this.getComplitedTodos(this.getVisibleTodos(a));return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement("div",{className:"App__filter"},r.a.createElement("p",null,"Search"),r.a.createElement("input",{type:"text",name:"query",value:n,onChange:this.hendlerChange}),r.a.createElement("select",{name:"status",onChange:this.hendlerChange},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed "))),r.a.createElement(m,{todos:s,onSelectedUser:this.selectUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},t?r.a.createElement(h,{userId:t,onSelectedUser:this.selectUser}):"No user selected")))}}]),n}(r.a.Component);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.1dda85c8.chunk.js.map