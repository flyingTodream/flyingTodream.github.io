(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e22a3"],{"7e10":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vx-myCollect"},[e.loading?n("VxLoading"):e._e(),0===e.userCenterListTotal?n("div",{staticClass:"vx-collect-nodata"},[e._v(" 暂时还没有订单哦， "),n("a",{on:{click:function(t){return e.$router.push("/mall/modelCenter")}}},[e._v("立马去商城逛逛")])]):e._e(),n("transition-group",{attrs:{"enter-active-class":"animated bounceInRight",name:"list-complete",tag:"p"},on:{"before-enter":e.beforeEnter}},e._l(e.orderList,(function(e,t){return n("VxUserBuy",{key:t,staticClass:"list-complete-item",attrs:{index:t,buyInfo:e}})})),1),e.userCenterListTotal>e.pageSize?n("div",{staticClass:"paginationFenYe"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"prev, pager, next",total:e.userCenterListTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()],1)},i=[],r=(n("d3b7"),n("2909")),s=n("4ec3"),o=n("a10b"),c=function(){return n.e("chunk-774ccc61").then(n.bind(null,"fdbc6"))},l={name:"vx-vxMyBuy",data:function(){return{dataTotalLin:"",loading:!0,orderList:[],currentPage:1,pageSize:5,userCenterListTotal:0,activeName:0}},components:{VxUserBuy:c},created:function(){this.getDate()},methods:{beforeEnter:function(e){var t=100*parseInt(e.getAttribute("index"))+"ms";e.style.animationDelay=t},getDate:function(){var e=this;this.orderList=[],this.loading=!0;var t={type:0,page:this.currentPage,limit:this.pageSize};Object(s["k"])(t).then((function(t){e.userCenterListTotal=t.data.total,e.orderList=Object(r["a"])(t.data.list),e.loading=!1})).catch((function(t){e.loading=!1,o["c"].danger(t)}))},handleSizeChange:function(e){this.pageSize=e,this.getDate()},handleCurrentChange:function(e){this.currentPage=e,this.getDate()}}},u=l,d=n("2877"),g=Object(d["a"])(u,a,i,!1,null,null,null);t["default"]=g.exports}}]);