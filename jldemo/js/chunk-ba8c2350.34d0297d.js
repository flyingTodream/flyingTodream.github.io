(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba8c2350"],{"20ce":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vx-other"},[t._m(0),a("div",{staticClass:"detail"},[t._m(1),a("div",{staticClass:"bottom-contain"},[a("div",{staticClass:"form",staticStyle:{"margin-top":"1.94rem"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"开始日期"}},[a("el-date-picker",{staticStyle:{width:"20rem"},attrs:{type:"date",placeholder:"选择开始日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"结束日期"}},[a("el-date-picker",{staticStyle:{width:"20rem"},attrs:{type:"date",placeholder:"选择结束日期"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)],1)],1),a("div",{staticClass:"butn"},[a("div",{staticClass:"search",on:{click:t.beShow}},[t._v("查询")]),a("div",{staticClass:"reset",on:{click:t.reset}},[t._v("重置")])])],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"detail-bottom"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",size:"mini",data:t.dataList,border:"true"}},[a("el-table-column",{attrs:{align:"center",label:"贷款号",prop:"creditNumber"}}),a("el-table-column",{attrs:{align:"center",label:"本金",prop:"principal"}}),a("el-table-column",{attrs:{align:"center",label:"剩余本金",prop:"oddCorpus"}}),a("el-table-column",{attrs:{align:"center",label:"货代执行利率",prop:"loanExecutiveRate"}}),a("el-table-column",{attrs:{align:"center",label:"放款账号",prop:"loanAccount"}}),a("el-table-column",{attrs:{align:"center",label:"放款日",prop:"startDate"}}),a("el-table-column",{attrs:{align:"center",label:"到期日",prop:"endDate"}}),a("el-table-column",{attrs:{align:"center",label:"还款账号",prop:"repaymentAccount"}})],1),a("div",{staticClass:"tail"},[a("el-pagination",{attrs:{background:"","page-sizes":[10,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)],1)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("div",{staticClass:"vx-location location-withoutTab"},[a("label",[t._v("当前位置:")]),a("div",[t._v("融资业务 > 融资信息查询")]),a("div",{staticClass:"caozuoyuan"},[t._v("操作员： 2010009")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("span",{staticClass:"left-font"},[t._v("融资信息")]),a("span",{staticClass:"right-font"},[t._v("操作员: 001")])])}],i={data:function(){return{dataList:[{creditNumber:3132123123,principal:"50,000.00",oddCorpus:"50,000.00",loanExecutiveRate:"15.2",loanAccount:"88888888888888888888",startDate:"2020-09-09",endDate:"2020-10-10",repaymentAccount:"20002222255651321131"},{creditNumber:3132123123,principal:"50,000.00",oddCorpus:"50,000.00",loanExecutiveRate:"15.2",loanAccount:"88888888888888888888",startDate:"2020-09-09",endDate:"2020-10-10",repaymentAccount:"20002222255651321131"}],value1:"2020-08-01",value2:"2020-08-31",isShow:!1}},created:function(){},methods:{beShow:function(){this.value1&&this.value2?this.isShow=!0:alert("请选择日期")},reset:function(){this.value1="",this.value2="",this.isShow=!1}}},r=i,n=(a("32e9"),a("2877")),c=Object(n["a"])(r,l,s,!1,null,"6dddae47",null);e["default"]=c.exports},"32e9":function(t,e,a){"use strict";var l=a("9803"),s=a.n(l);s.a},9803:function(t,e,a){}}]);