(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a32e6"],{"00a1":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vx-design-bottom-noselect"},[-1!==t.show?e("vx-panel",{attrs:{index:t.index,showPanel:t.show}}):t._e(),t.loading?e("div",{staticClass:"vx-design-bottom-noselect__loading"},[e("vx-loading",{attrs:{msg:"正在加载图片"}})],1):t._e(),e("ul",[e("li",{on:{touchend:t.changeImageHandler}},[e("vx-icon",{attrs:{name:"image"}}),e("span",[t._v("换图")])],1),e("li",{class:{active:4===t.show},attrs:{id:"buttonId"},on:{touchend:function(n){t.show=4}}},[e("vx-icon",{attrs:{name:"filter"}}),e("span",[t._v("滤镜")])],1),e("li",{attrs:{id:"buttonId"},on:{touchend:t.cutHandler}},[e("vx-icon",{attrs:{name:"cut"}}),e("span",[t._v("剪裁")])],1)])],1)},i=[],o=(e("a9e3"),e("d3b7"),e("0fb7"),e("450d"),e("f529")),s=e.n(o),d=e("4360"),r=e("ed08"),c=function(){return e.e("chunk-2d0f0860").then(e.bind(null,"9d76"))},l={name:"vx-config-image",data:function(){return{show:-1,loading:!1}},components:{VxPanel:c},props:{index:{type:Number}},computed:{data:function(){return d["a"].layout().elements[this.index]}},methods:{changeImageHandler:function(){var t=this;this.show=-1,this.$upload().then((function(n){d["b"].updateImg(t.index,n.url,Object(r["b"])("width",n.url),Object(r["b"])("height",n.url))})).catch((function(t){501===t.errno&&s()({message:"登录已超时，请重新登录",type:"warning",duration:1e3,onClose:function(t){wx.miniProgram.navigateTo({url:"/pages/login/index"})}})}))},cutHandler:function(){var t=this;this.loading=!0,this.show=-1,this.data.orginUrl||(this.data.orginUrl=this.data.url);var n=!1;new ZxImageProcess({accept:"*",auto:!1,selector:this.data.orginUrl,width:this.data.width,height:this.data.height,submitText:"确 定",submitStyle:"",cancelStyle:"color: red",rotateText:"旋转90度",maxSize:50,success:function(e){return n?void(t.loading=!1):(d["b"].updateImg(t.index,e.base64,t.data.width,t.data.height),t.loading=!1,void(n=!0))},error:function(n){t.loading=!1,r["c"].danger(n.msg)}})}}},u=l,h=e("2877"),g=Object(h["a"])(u,a,i,!1,null,null,null);n["default"]=g.exports}}]);