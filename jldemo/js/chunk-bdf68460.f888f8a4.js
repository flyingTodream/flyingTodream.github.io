(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdf68460"],{"27ad":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-other"},[e._m(0),a("div",{staticClass:"form",staticStyle:{"margin-top":"1.94rem"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择账号",prop:"name"}},[a("el-select",{staticStyle:{width:"20rem"},attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"开始日期"}},[a("el-date-picker",{staticStyle:{width:"20rem"},attrs:{type:"date",placeholder:"选择开始日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"结束日期"}},[a("el-date-picker",{staticStyle:{width:"20rem"},attrs:{type:"date",placeholder:"选择结束日期"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)],1),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"交易类型"}},[a("el-select",{staticStyle:{width:"20rem"},attrs:{placeholder:"请选择"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},e._l(e.option1s,(function(e){return a("el-option",{key:e.value3,attrs:{label:e.label,value:e.value3}})})),1)],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"对方账号"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1)],1),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"起始金额"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"结束金额"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}})],1)],1)],1),a("div",{staticClass:"butn"},[a("div",{staticClass:"search",on:{click:e.beShow}},[e._v("查询")]),a("div",{staticClass:"reset",on:{click:e.reset}},[e._v("重置")])])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"detail-bottom"},[a("div",{staticClass:"table"},[a("div",{staticClass:"elTable"},[a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,"tooltip-effect":"dark","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"本方户名"}},[a("span",[e._v(e._s(t.row.myName))])]),a("el-form-item",{attrs:{label:"本方账号"}},[a("span",[e._v(e._s(t.row.myAccount))])]),a("el-form-item",{attrs:{label:"对方户名"}},[a("span",[e._v(e._s(t.row.hisName))])]),a("el-form-item",{attrs:{label:"对方账号"}},[a("span",[e._v(e._s(t.row.hisAccount))])]),a("el-form-item",{attrs:{label:"金额(币种)"}},[a("span",[e._v(e._s(t.row.money))])]),a("el-form-item",{attrs:{label:"借贷标记"}},[a("span",[e._v(e._s(t.row.loanMark))])]),a("el-form-item",{attrs:{label:"交易时间)"}},[a("span",[e._v(e._s(t.row.transDate))])]),a("el-form-item",{attrs:{label:"用途"}},[a("span",[e._v(e._s(t.row.application))])]),a("el-form-item",{attrs:{label:"摘要"}},[a("span",[e._v(e._s(t.row.summary))])]),a("el-form-item",{attrs:{label:"备注"}},[a("span",[e._v(e._s(t.row.remarks))])]),a("el-form-item",{attrs:{label:"交易凭证号"}},[a("span",[e._v(e._s(t.row.transactionVoucherNumbe))])]),a("el-form-item",{attrs:{label:"交易流水号"}},[a("span",[e._v(e._s(t.row.transactionSerialNumber))])])],1)]}}])}),a("el-table-column",{attrs:{label:"交易日期",width:"140",prop:"transDate"}}),a("el-table-column",{attrs:{label:"借方发生额",width:"120",prop:"payeeMoney"}}),a("el-table-column",{attrs:{label:"贷方发生额",width:"120",prop:"payMoney"}}),a("el-table-column",{attrs:{label:"摘要",width:"160",prop:"summary"}}),a("el-table-column",{attrs:{label:"对方户名",width:"120",prop:"hisName"}})],1)],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","page-sizes":[10,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1),e._m(1)])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right"},[a("div",{staticClass:"vx-location location-withoutTab"},[a("label",[e._v("当前位置:")]),a("div",[e._v("账户查询 > 明细查询")]),a("div",{staticClass:"caozuoyuan"},[e._v("操作员： 2010009")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"butn1"},[a("div",{staticClass:"search"},[e._v("打印")]),a("div",{staticClass:"load"},[e._v("txt下载")]),a("div",{staticClass:"load"},[e._v("excel下载")])])}],r={data:function(){return{tableData:[{transDate:"2019-9-10 20:30",payeeMoney:"100.00",payMoney:"100.00",blance:"10,000.00",summary:"账户信息(贷记)",hisAccount:"7374 2463 5279 2586",hisName:"熊二",myAccount:"7374 3474 5938 8374",myName:"张三",money:"100(人民币)",loanMark:"借",application:"",remarks:"",transactionVoucherNumbe:"",transactionSerialNumber:"03001223347.20140427"},{transDate:"2029-9-1 23:30",payeeMoney:"59.00",payMoney:"50.00",blance:"10,000.00",summary:"账户维护费",hisAccount:"7374 2463 5279 2586",hisName:"李四",myAccount:"7374 3474 5938 8374",myName:"张三",money:"50(人民币)",loanMark:"借",application:"",remarks:"",transactionVoucherNumbe:"",transactionSerialNumber:"03001223347-20140625"},{transDate:"2019-9-10 20:30",payeeMoney:"100.00",payMoney:"100.00",blance:"10,000.00",summary:"账户信息(贷记)",hisAccount:"7374 2463 5279 2586",hisName:"熊二",myAccount:"7374 3474 5938 8374",myName:"张三",money:"100(人民币)",loanMark:"借",application:"",remarks:"",transactionVoucherNumbe:"",transactionSerialNumber:"03001223347.20140409 "}],options:[{value:"选项1",label:"8888888888888888 (人民币）/测试1"},{value:"选项2",label:"6666666666666666(人民币）/测试2"},{value:"选项3",label:"1111111111111111(人民币）/测试2"},{value:"选项4",label:"3333333333333333(人民币）/测试2"},{value:"选项5",label:"2222222222222222(人民币）/测试2"}],option1s:[{value:"选项1",label:"行内转账"},{value:"选项2",label:"跨行转账"}],value:"",value1:"2020-08-01",value2:"2020-08-31",value3:"",isShow:!1,input:"",input1:"",input2:""}},methods:{beShow:function(){this.value.length>1?this.isShow=!0:alert("请选择账号!")},reset:function(){this.value="",this.value1="",this.value2="",this.value3="",this.input="",this.input1="",this.input2="",this.input3=""}}},i=r,o=(a("9378"),a("2877")),n=Object(o["a"])(i,l,s,!1,null,"042d3177",null);t["default"]=n.exports},"348a":function(e,t,a){},9378:function(e,t,a){"use strict";var l=a("348a"),s=a.n(l);s.a}}]);