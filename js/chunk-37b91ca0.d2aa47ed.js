(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b91ca0"],{"664a":function(i,t,a){"use strict";a.r(t);var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",[i._m(0),a("div",{staticClass:"sharedImgWrap"},[a("div",{staticClass:"sharedImgContent"},[a("el-image",{staticClass:"sharedImgContent-image",attrs:{fit:i.fit,src:i.imgUrl,alt:""}},[a("div",{attrs:{slot:"placeholder"},slot:"placeholder"},[a("i",{staticClass:"el-icon-loading"}),i._v("加载中 ")]),a("div",{attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1)]),i.isMobile()?i._e():a("div",{staticClass:"designDiv"},[a("a",{staticClass:"btn useDesign",on:{click:i.gotoDesign}},[i._v("复制使用此设计")]),a("a",{staticClass:"btn myDesign"},[i._v("我也要设计")])])])},s=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"vx-default-share"},[e("div",{staticClass:"vx-logoHome-headerLeft-share"},[e("img",{staticClass:"vx-logoHome-img",attrs:{src:a("a1d8")}})])])}],c=(a("ac1f"),a("466d"),a("4ec3")),n=a("a10b"),l=a("901d"),h={name:"vx-shared",data:function(){return{fit:"contain",imgUrl:"",parId:"",detial:""}},methods:{goodsDetail:function(){var i=this;this.parId=this.$route.params.id,Object(c["h"])(this.parId).then((function(t){i.imgUrl=t.data.picUrl,i.detail=t.data.detail}))},isMobile:function(){var i=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return i},gotoDesign:function(){var i=this,t={Id:"",detail:this.detail,picUrl:this.imgUrl||""};this.$axios.post(l["a"].SAVE_API,t).then((function(t){i.projectId=t.data.id;var a=i.$router.resolve({path:"/design/"+i.projectId,query:{designModel:"user"}}),e=a.href;window.open(e,"_blank")})).catch((function(i){n["c"].warning(i)}))}},created:function(){this.goodsDetail()}},r=h,o=a("2877"),d=Object(o["a"])(r,e,s,!1,null,null,null);t["default"]=d.exports},a1d8:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAnCAYAAADKOTDaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YzEyMmI4ZC0wMWI1LTQ2YWMtYmQ3Ny00YmU0YjhmMzlkYjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjczQzAxRjQwMUQxMTFFQUE1NUZBNTIxQzYzQzFGRDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjczQzAxRjMwMUQxMTFFQUE1NUZBNTIxQzYzQzFGRDAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplODE2Njg3OC1iNmNhLTQwMWQtYWQ2ZS1jOTk1MjI0MzNmZGUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NmMxMjJiOGQtMDFiNS00NmFjLWJkNzctNGJlNGI4ZjM5ZGI5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"}}]);