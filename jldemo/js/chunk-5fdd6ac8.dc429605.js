(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fdd6ac8"],{"067b":function(a,t,e){"use strict";var l=e("9b3f"),s=e.n(l);s.a},"3c9a":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticStyle:{background:"rgba(248,248,248)"}},[e("div",{staticClass:"vx-other"},[a._m(0),e("div",{staticClass:"vx-tab"},[e("ul",[e("li",{class:"noactive",on:{click:function(t){return a.$router.push("/main/AuthManageService/AuthManageDetail")}}},[a._v("账号类交易审核")]),e("li",{class:"active",on:{click:function(t){return a.$router.push("/main/AuthManageService/AuthManageDetail2")}}},[a._v("非账号类交易审核")])])])]),e("div",{staticClass:"bottom"},[e("div",{staticStyle:{width:"100%",margin:"0rem auto"}},[e("div",{staticClass:"elTable"},[e("el-table",{staticStyle:{width:"100%","margin-bottom":"1.25rem /* 20/16 */"},attrs:{data:a.tableData,stripe:"",fit:"",border:""}},[e("el-table-column",{attrs:{type:"selection",width:"3.4375rem /* 55/16 */"}}),e("el-table-column",{attrs:{prop:"data1",label:"交易流水号"}}),e("el-table-column",{attrs:{prop:"data2",label:"交易名称"}}),e("el-table-column",{attrs:{prop:"data6",label:"提交人"}}),e("el-table-column",{attrs:{prop:"data7",label:"审核人"}}),e("el-table-column",{attrs:{prop:"data8",label:"提交日期"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return a.handleEdit(t.$index,t.row)}}},[a._v("详情")])]}}])})],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:a.panel,expression:"panel"}],staticClass:"elTable"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData2,fit:"",border:""}},[e("el-table-column",{attrs:{prop:"data1",label:"是否归集"}}),e("el-table-column",{attrs:{prop:"data2",label:"归集类型"}}),e("el-table-column",{attrs:{prop:"data3",label:"归集时点"}})],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData3,fit:"",border:""}},[e("el-table-column",{attrs:{prop:"data1",label:"是否下拨"}}),e("el-table-column",{attrs:{prop:"data2",label:"留存维持金额"}}),e("el-table-column",{attrs:{prop:"data3",label:"备注"}})],1)],1),e("div",[e("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[e("el-form-item",{attrs:{label:"审核意见"}},[e("el-select",{staticStyle:{width:"7rem"},attrs:{placeholder:"请选择"},model:{value:a.value,callback:function(t){a.value=t},expression:"value"}},a._l(a.options,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1)],1)],1),a._m(1),e("div",{staticClass:"page"},[e("el-pagination",{attrs:{background:"","page-sizes":[10,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)])])])},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"vx-location"},[e("label",[a._v("当前位置:")]),e("div",[a._v("业务复核 > 交易审核")]),e("div",{staticClass:"caozuoyuan"},[a._v("操作员： 2010009")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"butn"},[e("div",{staticClass:"search"},[a._v("确定")])])}],r={data:function(){return{panel:!1,tableData:[{data1:"123456789",data2:"资金归集",data6:"001",data7:"999",data8:"2020-08-01"}],options:[{value:"001",label:"批准"},{value:"002",label:"退回"},{value:"003",label:"拒绝"}],value:"",tableData2:[{data1:"是",data2:"手工",data3:"12点"}],tableData3:[{data1:"否",data2:"0.00",data3:"测试"}]}},components:{},methods:{handleEdit:function(){this.panel=!0}}},i=r,n=(e("067b"),e("2877")),o=Object(n["a"])(i,l,s,!1,null,"0d45c489",null);t["default"]=o.exports},"9b3f":function(a,t,e){}}]);