(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b0be5c"],{"21e6":function(t,e,a){},"3aaa":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vx-other"},[t._m(0),a("div",{staticClass:"detail"},[t._m(1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"detail-bottom"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",size:"mini",data:t.dataList,border:"true"}},[a("el-table-column",{attrs:{align:"center",label:"贷款号",prop:"creditNumber"}}),a("el-table-column",{attrs:{align:"center",label:"借据编号",prop:"iousNumber"}}),a("el-table-column",{attrs:{align:"center",label:"贷款金额",prop:"principal"}}),a("el-table-column",{attrs:{align:"center",label:"贷款余额",prop:"oddCorpus"}}),a("el-table-column",{attrs:{align:"center",label:"状态",prop:"type"}}),a("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("还款")])]}}])})],1),a("div",{staticClass:"tail"},[a("el-pagination",{attrs:{background:"","page-sizes":[10,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)],1)]),a("Step5",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],on:{back:function(e){t.isShow=!1}}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("div",{staticClass:"vx-location location-withoutTab"},[a("label",[t._v("当前位置:")]),a("div",[t._v("融资业务 > 还款/逾期还款")]),a("div",{staticClass:"caozuoyuan"},[t._v("操作员： 2010009")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("span",{staticClass:"left-font"},[t._v("还款/逾期还款")]),a("span",{staticClass:"right-font"},[t._v("操作员: 001")])])}],l=a("4ea1"),c={components:{Step5:l["a"]},data:function(){return{dataList:[{creditNumber:2211123123,iousNumber:"DJE2123132",principal:"50,000.00",oddCorpus:"50,000.00",type:"正常"},{creditNumber:3132123123,iousNumber:"FFD123132",principal:"50,000.00",oddCorpus:"50,000.00",type:"逾期"},{creditNumber:11112123123,iousNumber:"EES2123132",principal:"50,000.00",oddCorpus:"50,000.00",type:"正常"},{creditNumber:2112123123,iousNumber:"GGG2123132",principal:"50,000.00",oddCorpus:"50,000.00",type:"逾期"}],value1:"2020-08-01",value2:"2020-08-31",isShow:!1}},created:function(){},methods:{beShow:function(){this.isShow=!0},viewDetails:function(){},handleEdit:function(t,e){console.log(t,e),this.isShow=!0}}},n=c,r=(a("81bf"),a("2877")),v=Object(r["a"])(n,s,i,!1,null,"62548cb0",null);e["default"]=v.exports},"3d00":function(t,e,a){},"4ea1":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step5"},[a("div",{staticClass:"other-content"},[a("el-steps",{attrs:{active:t.active,"align-center":"","finish-status":"success"}},[a("el-step",{attrs:{title:"还款信息录入"}}),a("el-step",{attrs:{title:"还款信息确认"}}),a("el-step",{attrs:{title:"还款信息结果"}})],1)],1),a("Step6",{directives:[{name:"show",rawName:"v-show",value:1==t.active,expression:"active == 1"}],on:{confim:function(e){t.active++},back:function(e){t.active--}}}),a("Step7",{directives:[{name:"show",rawName:"v-show",value:2==t.active,expression:"active == 2"}],on:{back:function(e){t.active--}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.active,expression:"active == 0"}],staticClass:"content1"},[a("div",{staticClass:"right"},[a("div",{staticClass:"accountMsg"},[t._v("还款申请信息")]),a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"授信协议编号"}},[t._v(" 123456789 ")]),a("el-form-item",{attrs:{label:"借贷合同编号"}},[t._v(" 0030012142 ")]),a("el-form-item",{attrs:{label:"本金还款账号"}},[a("el-input",{attrs:{placeholder:"请输入本金还款账号"},model:{value:t.principalRepayment,callback:function(e){t.principalRepayment=e},expression:"principalRepayment"}})],1),a("el-form-item",{attrs:{label:"利息还款账号"}},[a("el-input",{attrs:{placeholder:"请输入利息还款账号"},model:{value:t.interestPayments,callback:function(e){t.interestPayments=e},expression:"interestPayments"}})],1),a("el-form-item",{attrs:{label:"账户余额"}},[t._v(" 4561323 ")]),a("el-form-item",{attrs:{label:"还款金额"}},[a("el-input",{attrs:{placeholder:"请输入还款金额"},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1)],1),a("div",{staticClass:"btn"},[a("div",{staticClass:"next",on:{click:function(e){t.active++}}},[t._v("下一步")]),a("div",{staticClass:"back",on:{click:function(e){return t.$emit("back")}}},[t._v("返回")])])],1)])],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step2"},[a("div",{staticClass:"tips"},[t._v("请仔细核对您的还款信息！")]),a("div",{staticClass:"step2-bottom"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"msg"},[t._v("还款申请信息")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),a("div",{staticClass:"msg"},[t._v("金额信息")]),t._m(10),a("div",{staticClass:"step2-btn"},[a("div",{staticClass:"confim",on:{click:function(e){return t.$emit("confim")}}},[t._v("确认信息")]),a("div",{staticClass:"back",on:{click:function(e){return t.$emit("back")}}},[t._v("返回")])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("div",{staticClass:"msg"},[t._v("借款人信息")]),a("div",{staticClass:"cont"},[a("label",[t._v("借款人名称：")]),a("div",[t._v("吉林长白山AAA测试股份有限公司")])]),a("div",{staticClass:"cont"},[a("label",[t._v("借款人账号：")]),a("div",[t._v("6347 5847 5947 3598")])]),a("div",{staticClass:"cont"},[a("label",[t._v("借款人开户行：")]),a("div",[t._v("中国银行")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("借款合同编号：")]),a("div",[t._v("1234567890")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("借据号：")]),a("div",[t._v("0030012142")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("借款日期：")]),a("div",[t._v("2099-08-08")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("借款到期日：")]),a("div",[t._v("2099-08-08")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("借款总金额：")]),a("div",[t._v("9,999,999")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("已还款金额金额：")]),a("div",[t._v("0.00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("借款利率：")]),a("div",[t._v("4%")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("本金还款账号：")]),a("div",[t._v("88888888888888888888888")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("利息还款账号：")]),a("div",[t._v("88888888888888888888888")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cont"},[a("label",[t._v("提前还款金额：")]),a("div",[t._v("5000.00元")])])}],n=(a("e329"),a("2877")),r={},v=Object(n["a"])(r,l,c,!1,null,"3a053193",null),o=v.exports,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step3"},[t._m(0),a("div",{staticClass:"msg"},[t._v("该交易已进入复核队列，交易流水号为：1241312312312")]),t._m(1),a("div",{staticClass:"step3-btn"},[a("div",{staticClass:"save"},[t._v("提款信息查询")]),a("div",{staticClass:"back"},[t._v("打印")]),a("div",{staticClass:"back",on:{click:function(e){return t.$emit("back")}}},[t._v("返回")])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"el-icon-check"})]),a("div",{staticClass:"text"},[t._v("交易已提交")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{attrs:{border:"1",cellpadding:"2",cellspacing:"0"}},[a("tr",[a("td",{staticClass:"table-title",attrs:{rowspan:"3"}},[t._v("借款人信息")]),a("td",[t._v("借款人名称")]),a("td",[t._v("吉林长白山AAA测试股份有限公司")])]),a("tr",[a("td",[t._v("借款人账号")]),a("td",[t._v("6347 5847 5947 3598")])]),a("tr",[a("td",[t._v("借款人开户行")]),a("td",[t._v("中国银行")])]),a("tr",{staticClass:"table-back"},[a("td",{staticClass:"table-title",attrs:{rowspan:"6"}},[t._v("借款申请信息")]),a("td",[t._v("授信协议编号")]),a("td",[t._v("1234567890")])]),a("tr",{staticClass:"table-back"},[a("td",[t._v("借贷合同编号")]),a("td",[t._v("0030012142")])]),a("tr",{staticClass:"table-back"},[a("td",[t._v("额度到期日")]),a("td",[t._v("2099-08-08")])]),a("tr",{staticClass:"table-back"},[a("td",[t._v("可用额度")]),a("td",[t._v("9,999,999,999")])]),a("tr",{staticClass:"table-back"},[a("td",[t._v("借款利率")]),a("td",[t._v("4%")])]),a("tr",{staticClass:"table-back"},[a("td",[t._v("借款期限")]),a("td",[t._v("9个月")])]),a("tr",[a("td",{staticClass:"table-title",attrs:{rowspan:"3"}},[t._v("金额信息")])]),a("tr",[a("td",[t._v("借款金额")]),a("td",[t._v("5000.00元")])]),a("tr",[a("td",[t._v("手续费")]),a("td",[t._v("1.00元")])])])}],_=(a("b48a"),{}),m=Object(n["a"])(_,u,d,!1,null,"9e373bdc",null),p=m.exports,b={data:function(){return{active:0,index:0,name:"天津华兴商贸集团",accountNo:"7374 3474 5938 8374",accountProps:"公司账户",value1:"",money:"",accountNumber:"",principalRepayment:"",interestPayments:""}},components:{Step6:o,Step7:p}},f=b,C=(a("f606"),Object(n["a"])(f,s,i,!1,null,"54dc301a",null));e["a"]=C.exports},"7d0b":function(t,e,a){},"81bf":function(t,e,a){"use strict";var s=a("21e6"),i=a.n(s);i.a},9145:function(t,e,a){},b48a:function(t,e,a){"use strict";var s=a("3d00"),i=a.n(s);i.a},e329:function(t,e,a){"use strict";var s=a("7d0b"),i=a.n(s);i.a},f606:function(t,e,a){"use strict";var s=a("9145"),i=a.n(s);i.a}}]);