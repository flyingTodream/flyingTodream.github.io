(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c90d246"],{"96ae":function(e,t,n){"use strict";var a=n("b407"),r=n.n(a);r.a},b407:function(e,t,n){},becd:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-manage"},[n("draggable",{attrs:{options:{animation:200}},on:{update:e.datadragEnd},model:{value:e.codeList,callback:function(t){e.codeList=t},expression:"codeList"}},e._l(e.codeList,(function(t,a){return n("div",{key:a,staticClass:"drag-item"},[n("div",[e._v(e._s(t.val))])])})),0)],1)},r=[],c=(n("63ff"),n("cec5")),i=n("25d5"),s=n.n(i),o={components:{draggable:s.a},data:function(){return{codeList:[{val:1},{val:2},{val:3},{val:4},{val:5},{val:6},{val:7}]}},methods:{datadragEnd:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.codeList,e.next=4,n.map((function(e,t){return{sort_order:t,val:e.val}}));case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},u=o,d=(n("96ae"),n("6691")),l=Object(d["a"])(u,a,r,!1,null,"749ff76d",null);t["default"]=l.exports}}]);