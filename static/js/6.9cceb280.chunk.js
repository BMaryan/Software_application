(this.webpackJsonpsoftware_application=this.webpackJsonpsoftware_application||[]).push([[6],{302:function(e,s,t){"use strict";t.d(s,"a",(function(){return n}));var r=t(15);function n(e,s){if(null==e)return{};var t,n,o=Object(r.a)(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},307:function(e,s,t){e.exports={users:"Users_users__1bdVm",users_buttons:"Users_users_buttons__1E7L5",users_wrapper:"Users_users_wrapper__2lyRv",user:"Users_user__1uH-w",wrapper_user:"Users_wrapper_user__3we2o",user_cover:"Users_user_cover__2zZNA",user_line_location:"Users_user_line_location__1nd-K",user_location:"Users_user_location__2Pou3",user_info:"Users_user_info__1zPcC",user_info_avatarka:"Users_user_info_avatarka__3MiNK",user_info_fullname:"Users_user_info_fullname__2DRaD",user_status:"Users_user_status__24qr5",user_button:"Users_user_button__36l_a"}},317:function(e,s,t){e.exports={users_buttons:"Paginator_users_buttons__1c-33",unselectedPage:"Paginator_unselectedPage__2PNDk",selectedPage:"Paginator_selectedPage__2R74B",wrapper_over_buttons:"Paginator_wrapper_over_buttons__3H4A7",button_next:"Paginator_button_next__F87oE",button_prev:"Paginator_button_prev__q66GE"}},321:function(e,s,t){"use strict";t.r(s);var r=t(57),n=t(58),o=t(60),a=t(59),u=t(0),i=t.n(u),c=t(25),l=t(134),_=t(302),g=t(307),p=t.n(g),f=t(91),b=t(317),d=t.n(b),j=t(1),h=function(e){for(var s=Math.ceil(e.totalItemsCount/e.portionSize),t=[],r=1;r<=s;r++)t.push(r);var n=Math.ceil(s/e.portionSize),o=Object(u.useState)(1),a=Object(f.a)(o,2),i=a[0],c=a[1],l=(i-1)*e.portionSize+1,_=i*e.portionSize;return console.log(_),Object(j.jsxs)("div",{className:d.a.users_buttons,children:[i>1&&Object(j.jsx)("div",{className:d.a.wrapper_over_buttons,children:Object(j.jsx)("button",{className:d.a.button_prev,onClick:function(){c(i-1)},children:"\u276e"})}),t.filter((function(e){return e>=l&&e<=_})).map((function(s){return Object(j.jsx)("div",{onClick:function(t){e.onPageChanged(s)},className:e.currentPage===s?d.a.selectedPage:d.a.unselectedPage,children:s},s)})),n>i&&Object(j.jsx)("div",{className:d.a.wrapper_over_buttons,children:Object(j.jsx)("button",{className:d.a.button_next,onClick:function(){c(i+1)},children:"\u276f"})})]})},P=t(97),v=t(26),O=function(e,s,t,r){return Object(j.jsx)("button",{disabled:e.some((function(e){return e===s.id})),className:p.a.user_button,onClick:function(){t(s.id)},children:r})},w=function(e){var s=e.user,t=e.followingInProgress,r=e.unfollow,n=e.follow;return Object(j.jsx)("div",{className:p.a.user,children:Object(j.jsxs)("div",{className:p.a.wrapper_user,children:[Object(j.jsx)("img",{className:p.a.user_cover,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5vLBH3Npz2mxJ8aaPSOiMU2AiPLsnnv8nxCObjgoiMfrqyKThENMVnsTqYj0ov4xulI&usqp=CAU",alt:""}),Object(j.jsxs)("div",{className:p.a.user_line_location,children:[Object(j.jsx)("div",{className:p.a.user_info,children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:p.a.user_info_avatarka,src:null!=s.photos.small?s.photos.small:P.a,alt:""})})}),Object(j.jsxs)("div",{className:p.a.user_location,children:[Object(j.jsx)("div",{children:"Ukraine"}),Object(j.jsx)("div",{children:"Lviv"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:p.a.user_info_fullname,children:Object(j.jsx)(v.b,{to:"/profile/"+s.id,children:s.name})}),Object(j.jsx)("div",{className:p.a.user_status,children:s.status}),s.followed?O(t,s,r,"Unfollow"):O(t,s,n,"Follow")]})]})},s.id)},m=function(e){var s=e.currentPage,t=e.totalUsersCount,r=e.getCountUsers,n=e.onPageChanged,o=Object(_.a)(e,["currentPage","totalUsersCount","getCountUsers","onPageChanged"]);return Object(j.jsxs)("div",{className:p.a.users,children:[Object(j.jsx)(h,{users:o.users,currentPage:s,totalItemsCount:t,portionSize:r,onPageChanged:n}),Object(j.jsx)("div",{className:p.a.users_wrapper,children:o.users.map((function(e){return Object(j.jsx)(w,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow},e.id)}))})]})},x=t(41),C=t(142),U=Object(C.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),N=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.getCountUsers},y=function(e){return e.usersPage.getCountPages},I=function(e){return e.usersPage.currentPage},S=function(e){return e.usersPage.isFetching},z=function(e){return e.usersPage.followingInProgress},F=function(e){Object(o.a)(t,e);var s=Object(a.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=s.call.apply(s,[this].concat(o))).onPageChanged=function(s){var t=e.props.getCountPages;e.props.onPageChanged(s,t)},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,s=e.currentPage,t=e.getCountPages;this.props.getUsers(s,t)}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[this.props.isFetching?Object(j.jsx)(x.a,{}):null,Object(j.jsx)(m,{totalUsersCount:this.props.totalUsersCount,getCountUsers:this.props.getCountUsers,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),t}(i.a.PureComponent);s.default=Object(c.b)((function(e){return{users:U(e),totalUsersCount:N(e),getCountUsers:k(e),getCountPages:y(e),currentPage:I(e),isFetching:S(e),followingInProgress:z(e)}}),{follow:l.b,unfollow:l.f,toggleFollowingInProgress:l.e,getUsers:l.c,onPageChanged:l.d})(F)}}]);
//# sourceMappingURL=6.9cceb280.chunk.js.map