(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba8ab"],{"383c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"design-config"},[a("div",{staticClass:"image-changeimg",class:{"image-disable":e.locked}},[a("div",{staticClass:"image-upload",on:{click:e.upload}},[e._v("\n      替换图片\n      ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isGroup,expression:"!isGroup"}],staticClass:"image-panel",class:{"image-disable":e.locked}},[a("div",{staticClass:"image-panel-hover",on:{click:e.showPopHandler}},[a("div",{staticClass:"image-preview",style:{"background-image":"url("+this.previewBackground+")"}},[e._v(e._s(e.styleLable))]),a("span",{staticClass:"image-panel-icon"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.popupShow,expression:"popupShow"}],staticClass:"image-popup"},[a("ul",[a("li",{class:{"image-popup-selected":null==e.sel},on:{click:function(t){return e.changeStyleHandler(null,null)}}},[e._v("无样式")]),e._l(e.effectList,(function(t,n){return a("li",{key:n,class:{"image-popup-selected":e.sel==n},style:{"background-image":"url("+t.typefacePath+")"},on:{click:function(a){return e.changeStyleHandler(t.id,n)}}},[e._v(e._s(t.name))])}))],2)])]),a("div",{staticClass:"image-group",class:{"image-disable":e.locked}},[a("div",{staticClass:"image-row-2"},[a("div",{on:{click:e.setCutableHandler}},[a("vx-icon",{attrs:{name:"cut"}}),e._v("剪裁图片\n      ")],1)]),a("div",{staticClass:"image-row-3"},[a("span",{staticClass:"image-row-3-span",on:{click:e.rotateYHandler}},[e._v("水平翻转")]),a("span",{on:{click:e.rotateXHandler}},[e._v("垂直翻转")])])]),a("div",{staticClass:"image-range-picker",class:{"image-disable":e.locked}},[a("div",{staticClass:"image-range-input"},[a("div",{staticClass:"image-range-lable"},[e._v("不透明")]),a("div",{staticClass:"image-range"},[a("el-slider",{attrs:{min:0,max:10},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})],1),a("div",{staticClass:"image-range-value"},[e._v(e._s(e.range))])])])])},s=[],i=(a("6d57"),a("fd4b")),l=(a("163d"),a("a10b")),o=a("81ac");function r(e,t,a,n,s){var i=document.createElement("canvas"),l=i.getContext("2d");i.width=a,i.height=n;var o=new Image;o.src=e+"?v="+c();var r=new Image;r.src=t+"?v="+c(),o.setAttribute("crossOrigin","Anonymous"),r.setAttribute("crossOrigin","Anonymous"),r.complete?l.drawImage(r,0,0,a,n):r.onload=function(){l.drawImage(r,0,0,a,n),l.globalCompositeOperation="source-in",o.complete?(l.drawImage(o,0,0,a,n),s(i.toDataURL())):o.onload=function(){l.drawImage(o,0,0,a,n),s(i.toDataURL("image/png"))}}}function c(){for(var e=[],t=0;t<32;t++){var a=Math.ceil(25*Math.random());e.push(String.fromCharCode(65+a))}return e.join("")}var m={name:"vx-imagePanel",components:{},data:function(){return{popupShow:!1,sel:null,styleLable:"无样式",effectList:[],previewBackground:""}},props:{index:{type:Number},elementIndex:{type:Number},isGroup:{type:Boolean}},computed:{locked:function(){return o["c"].layout.elements[this.index].lock},range:{get:function(){return this.isGroup?10*o["c"].layout.elements[this.index].elements[this.elementIndex].opacity:10*o["c"].layout.elements[this.index].opacity},set:function(e){this.isGroup?o["c"].layout.elements[this.index].elements[this.elementIndex].opacity=e/10:o["c"].layout.elements[this.index].opacity=e/10}}},created:function(){this.getImageStyleHandler()},methods:{showPopHandler:function(){this.popupShow=!this.popupShow,this.sel=null},getImageStyleHandler:function(){var e=this,t={page:1,limit:100,type:"img_masking"};this.$axios(l["a"].EFFECTS_API,{params:t}).then((function(t){e.effectList=Object(i["a"])(t.data.list)}))},changeStyleHandler:function(e,t){var a=this;if(this.sel!=t)if(this.sel=t,null!=e){var n={id:e};this.$axios(l["a"].EFFECT_DETAIL_API,{params:n}).then((function(e){a.styleLable="",a.previewBackground=e.data.info.typefacePath;var t=JSON.parse(e.data.info.detail);t.model.imageEffects.forEach((function(e){r(o["c"].layout.elements[a.index].imageUrl,e.mask.image,o["c"].layout.elements[a.index].width,o["c"].layout.elements[a.index].height,(function(e){o["b"].changeImgUrl(e,a.index)})),a.popupShow=!1}))}))}else this.previewBackground="",this.styleLable="无样式",o["b"].changeImgUrl(o["c"].layout.elements[this.index].imageUrl,this.index),this.popupShow=!1},rotateYHandler:function(){this.isGroup?(o["c"].layout.elements[this.index].elements[this.elementIndex].transform.a=-o["c"].layout.elements[this.index].elements[this.elementIndex].transform.a,o["c"].layout.elements[this.index].elements[this.elementIndex].transform.b=-o["c"].layout.elements[this.index].elements[this.elementIndex].transform.b):(o["c"].layout.elements[this.index].transform.a=-o["c"].layout.elements[this.index].transform.a,o["c"].layout.elements[this.index].transform.b=-o["c"].layout.elements[this.index].transform.b)},rotateXHandler:function(){this.isGroup?(o["c"].layout.elements[this.index].elements[this.elementIndex].transform.c=-o["c"].layout.elements[this.index].elements[this.elementIndex].transform.c,o["c"].layout.elements[this.index].elements[this.elementIndex].transform.d=-o["c"].layout.elements[this.index].elements[this.elementIndex].transform.d):(o["c"].layout.elements[this.index].transform.c=-o["c"].layout.elements[this.index].transform.c,o["c"].layout.elements[this.index].transform.d=-o["c"].layout.elements[this.index].transform.d)},upload:function(){var e=this,t=-1;this.isGroup&&(t=this.index),this.$upload().then((function(a){o["b"].updateImg(t,e.elementIndex,a.url)})).catch((function(e){l["c"].danger(e)}))},setCutableHandler:function(){o["b"].setCutable(!0)}}},d=m,u=a("5511"),h=Object(u["a"])(d,n,s,!1,null,null,null);t["default"]=h.exports}}]);