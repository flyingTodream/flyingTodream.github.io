(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a74b"],{bc1e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-panel-filter"},[a("ul",[a("li",[a("div",{staticClass:"vx-panel-filter__text"},[e._v("原图")]),a("img",{attrs:{src:e.url},on:{click:e.serFilterHandler}})]),e._l(e.effectList,(function(t,r){return a("li",{key:r},[a("img",{attrs:{id:"imageEffect","data-name":t.name},on:{click:e.serFilterHandler}})])}))],2)])},n=[],i=(a("4160"),a("b0c0"),a("a9e3"),a("159b"),a("4360"));a("d3b7");function s(e,t){return new Promise((function(a){var r=document.createElement("img");r.setAttribute("crossOrigin","Anonymous"),r.src=e,r.onload=function(){var e=document.createElement("canvas"),n=e.getContext("2d");e.width=r.width,e.height=r.height,n.drawImage(r,0,0);var i=n.getImageData(0,0,e.width,e.height),s={};switch(t){case"Mosaic":s=ImageFilters.Mosaic(i,20);break;case"Desaturate":s=ImageFilters.Desaturate(i,10);break;case"Emboss":s=ImageFilters.Emboss(i,10);break;case"Edge":s=ImageFilters.Edge(i,10);break;case"Invert":s=ImageFilters.Invert(i,10);break;case"Rescale":s=ImageFilters.Rescale(i,10);break;case"Sepia":s=ImageFilters.Sepia(i,10);break;case"Solarize":s=ImageFilters.Solarize(i,10);break;case"StackBlur":s=ImageFilters.StackBlur(i,20);break}n.putImageData(s,0,0,0,0,e.width,e.height),a(e.toDataURL("image/png"))}}))}var c={name:"vx-filter",props:{index:{type:Number}},data:function(){return{effectList:[{name:"Mosaic",url:""},{name:"Desaturate",url:""},{name:"Emboss",url:""},{name:"Edge",url:""},{name:"Invert",url:""},{name:"Rescale",url:""},{name:"Sepia",url:""},{name:"Solarize",url:""},{name:"StackBlur",url:""}]}},computed:{url:function(){return i["a"].layout().elements[this.index].orginUrl||i["a"].layout().elements[this.index].url}},mounted:function(){this.addObserver()},methods:{addObserver:function(){var e=this,t=new IntersectionObserver((function(t){t.forEach((function(t){t.intersectionRatio>0&&t.intersectionRatio<=1&&(t.target.src||s(e.url,t.target.dataset.name).then((function(e){t.target.src=e})))}))})),a=document.querySelectorAll("#imageEffect");a.forEach((function(e){t.observe(e)}))},serFilterHandler:function(e){i["b"].changeImgUrl(this.index,e.target.src)}}},l=c,u=a("2877"),o=Object(u["a"])(l,r,n,!1,null,null,null);t["default"]=o.exports}}]);