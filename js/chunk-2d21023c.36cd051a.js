(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21023c"],{b72c:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vx-user-header"},[n("i",{staticClass:"vx-user-header-icon",class:t.flag?"el-icon-s-unfold":"el-icon-s-fold",on:{click:t.closeHandler}}),n("el-row",{staticClass:"g-btn__content userMenu"},[n("el-row",{staticClass:"block-col-2"},[n("el-col",{attrs:{span:12}},[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n            "+t._s(t.userName)+"\n            "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{staticClass:"vx-user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.jumpPage("/")}}},[n("vx-icon",{attrs:{name:"home"}}),t._v("首页\n            ")],1),n("el-dropdown-item",{nativeOn:{click:function(e){return t.exitUser(e)}}},[n("vx-icon",{attrs:{name:"logout"}}),t._v("退出登录\n            ")],1)],1)],1)],1)],1)],1)],1)},s=[],i=n("6b43"),r={data:function(){return{flag:!1}},computed:{isLogin:function(){return this.$store.getters.getLoginState()},showLogin:function(){return this.$store.getters.getShowLogin()},userName:function(){return i["a"].getItem("userName")}},methods:{jumpPage:function(t){this.$router.push({path:t})},exitUser:function(){this.$store.commit("updateShowLogin",!1),this.$store.commit("updateLoginState",!1),i["a"].clear(),this.$router.push({path:"/"})},closeHandler:function(){this.flag=!this.flag,this.$store.commit("updateisCollapse",this.flag)}}},a=r,c=n("5511"),l=Object(c["a"])(a,o,s,!1,null,null,null);e["default"]=l.exports}}]);