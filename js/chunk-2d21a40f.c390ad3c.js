(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a40f"],{bb70:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"design-config"},[a("div",{staticClass:"config-tips"},[a("div",{staticClass:"config-size"},[t._v("画布尺寸")]),a("div",{staticClass:"config-edit",on:{click:function(i){t.showDialog=!0}}},[t._v("编辑")])]),a("div",{staticClass:"config-view"},[a("div",{staticClass:"config-width",on:{click:function(i){t.showDialog=!0}}},[a("span",{staticClass:"config-width-value"},[t._v(t._s(t.canvasW)+t._s(t.unit))]),a("span",{staticClass:"config-width-label"},[t._v("宽")])]),a("div",{staticClass:"config-height",on:{click:function(i){t.showDialog=!0}}},[a("span",{staticClass:"config-heigth-value"},[t._v(t._s(t.canvasH)+t._s(t.unit))]),a("span",{staticClass:"config-heigth-label"},[t._v("高")])])]),a("transition",{attrs:{name:"fade"}},[t.showDialog?a("div",{staticClass:"config-dialog"},[a("div",{ref:"preview",staticClass:"config-dialog-main",attrs:{id:"preview"}},[a("div",{staticClass:"config-dialog-canvas"},[t.showDialog?a("vx-canvas-preview",{attrs:{type:"preview",w:t.width,h:t.height,width:560,height:504}}):t._e()],1),a("div",{staticClass:"config-dialog-aside"},[a("div",{staticClass:"config-title"},[a("div",{staticClass:"config-dialog-title"},[t._v("调整画布尺寸")]),a("div",{staticClass:"config-dialog-close"},[a("i",{staticClass:"el-icon-close",on:{click:function(i){t.showDialog=!1}}})])]),a("div",{staticClass:"config-dialog-select"},[a("ul",t._l(t.selectList,(function(i,e){return a("li",{key:e,class:{"config-dialog-selected":t.sel==e},on:{click:function(a){return t.changeSelHandler(e,i)}}},[a("div",{staticClass:"config-select-lable"},[t._v(t._s(i.title))]),i.width==t.originalW&&i.height==t.originalH?a("div",[t._v("原尺寸")]):t._e()])})),0)]),a("div",{staticClass:"config-dialog-action"},[a("el-input-number",{attrs:{max:9e3,min:20,controls:!1,placeholder:"输入宽度"},on:{change:t.changeWidthHandler},model:{value:t.width,callback:function(i){t.width=i},expression:"width"}}),a("vx-icon",{attrs:{name:t.lockIcon},nativeOn:{click:function(i){return t.lockHandler(i)}}}),a("el-input-number",{attrs:{controls:!1,max:12e3,min:20,placeholder:"输入高度"},on:{change:t.changeHeightHandler},model:{value:t.height,callback:function(i){t.height=i},expression:"height"}}),a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.unitChangeHandler},model:{value:t.unit,callback:function(i){t.unit=i},expression:"unit"}},t._l(t.selectOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("div",{staticClass:"config-dialog-info"},[t._v("修改尺寸后，设计场景将会对应切换")]),a("div",{staticClass:"config-dialog-checkout"}),a("div",{staticClass:"config-dialog-space"}),a("div",{staticClass:"config-dialog-btn",on:{click:t.changeSizeHandler}},[t._v("调整尺寸")]),a("el-button",{on:{click:t.printImageHandler}},[t._v("下载")])],1)])]):t._e()])],1)},n=[],s=(a("4160"),a("498a"),a("159b"),a("96cf"),a("1da1")),l=a("81ac"),c=a("a10b"),o=a("6e7c"),h={name:"vx-canvasSize",components:{VxCanvasPreview:o["b"]},data:function(){return{showDialog:!1,lockIcon:"Unlocked",sel:0,width:l["a"].layout().width,height:l["a"].layout().height,originalW:0,originalH:0,aspectRatio:null,unit:"px",zoom:0,selectOptions:[{value:"px",label:"px(像素)"},{value:"cm",label:"cm(厘米)"},{value:"mm",label:"mm(毫米)"}],selectList:[{title:"自定义尺寸",label:"",width:null,height:null},{title:"手机海报 1242px × 2208px ",label:"",width:1242,height:2208},{title:"长图海报 800px × 2000px ",label:"",width:800,height:2e3},{title:"启动页/闪屏 1248px × 2208px ",label:"",width:1248,height:2208},{title:"动态海报 1242px × 2208px ",label:"",width:1242,height:2208},{title:"方形海报 1242px × 1242px ",label:"",width:1242,height:1242},{title:"日签 1242px × 2208px ",label:"",width:1242,height:2208}]}},computed:{canvasW:function(){return l["a"].canvasW()},canvasH:function(){return l["a"].canvasH()}},created:function(){var t=this;this.originalW=l["a"].canvasW(),this.originalH=l["a"].canvasH(),this.selectList.forEach((function(i,a){t.originalW===i.width&&t.originalH===i.height&&(t.sel=a)}))},methods:{printImageHandler:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=document.querySelector("#canvas"),t.$refs.svg&&t.$refs.svg.forEach((function(t){var i=t.html.trim(),e=document.createElement("canvas");e.style.position=t.imageStyles.position,e.style.left=t.data.left+"px",e.style.top=t.data.top+"px",e.style.width=t.data.width+"px",e.style.height=t.data.height+"px",l["c"].layout.elements[t.index],e.style.zIndex=t.index,Canvg(e,i),a.appendChild(e)})),e={type:"dataURL",logging:!1,scale:1,allowTaint:!1,scrollY:0,taintTest:!0,useCORS:!0,backgroundColor:null},i.next=5,t.$html2canvas(a,e).then((function(t){return t}));case 5:return i.abrupt("return",i.sent);case 6:case"end":return i.stop()}}),i)})))()},lockHandler:function(){"Unlocked"===this.lockIcon?(this.aspectRatio=this.width/this.height,this.lockIcon="lock"):"lock"===this.lockIcon&&(this.lockIcon="Unlocked")},unitChangeHandler:function(t){"px"===t?(this.width=this.canvasW,this.height=this.canvasH,this.unit="px",l["c"].global.unit="px"):"cm"===t?(this.width=Math.round(25.4*this.canvasW/l["c"].global.dpi/10),this.height=Math.round(25.4*this.canvasH/l["c"].global.dpi/10),this.unit="cm",l["c"].global.unit="cm"):"mm"===t&&(this.width=Math.round(25.4*this.canvasW/l["c"].global.dpi),this.height=Math.round(25.4*this.canvasH/l["c"].global.dpi),this.unit="mm",l["c"].global.unit="mm")},changeSelHandler:function(t,i){this.sel=t,this.unit="px",0!==t&&(this.width=i.width,this.height=i.height)},changeSizeHandler:function(){parseInt(this.width)==this.width?parseInt(this.height)==this.height?("px"===this.unit?l["b"].setCanvasSize(this.width,this.height):"mm"===this.unit?l["b"].setCanvasSize(Math.round(this.width*l["c"].global.dpi/25.4),Math.round(this.height*l["c"].global.dpi/25.4)):"cm"===this.unit&&l["b"].setCanvasSize(Math.round(10*this.width*l["c"].global.dpi/25.4),Math.round(10*this.height*l["c"].global.dpi/25.4)),this.showDialog=!1,this.updateSizeHandler()):this.$message({message:"高度只能输入整数",type:"error",duration:5e3}):this.$message({message:"宽度只能输入整数",type:"error",duration:5e3})},changeWidthHandler:function(){this.sel=0,"lock"===this.lockIcon&&(this.height=parseInt(c["b"].floatObj.divide(this.width,this.aspectRatio,3)))},changeHeightHandler:function(){this.sel=0,"lock"===this.lockIcon&&(this.width=parseInt(c["b"].floatObj.multiply(this.height,this.aspectRatio,3)))},updateSizeHandler:function(){var t=l["c"].layout.height,i=l["c"].layout.width;this.zoom=t<i?560/i:504/t}},mounted:function(){this.updateSizeHandler()}},d=h,r=a("2877"),g=Object(r["a"])(d,e,n,!1,null,null,null);i["default"]=g.exports}}]);