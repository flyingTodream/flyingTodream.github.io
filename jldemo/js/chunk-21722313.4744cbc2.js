(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21722313"],{"1dde":function(e,t,a){var n=a("d039"),l=a("b622"),r=a("2d00"),i=l("species");e.exports=function(e){return r>=51||!n((function(){var t=[],a=t.constructor={};return a[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2589:function(e,t,a){},3256:function(e,t,a){"use strict";var n=a("2589"),l=a.n(n);l.a},"65f0":function(e,t,a){var n=a("861d"),l=a("e8b5"),r=a("b622"),i=r("species");e.exports=function(e,t){var a;return l(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!l(a.prototype)?n(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},8418:function(e,t,a){"use strict";var n=a("c04e"),l=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var i=n(t);i in e?l.f(e,i,r(0,a)):e[i]=a}},a12c3:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-other"},[e._m(0),a("div",{staticClass:"detail"},[a("div",{staticClass:"vx-tab"},[a("ul",[a("li",{staticClass:"active",on:{click:function(t){"/main/payService/PayeeInfo"!=e.$router.path&&e.$router.push("/main/payService/PayeeInfo")}}},[e._v("收款人名册")]),a("li",{on:{click:function(t){"/main/payService/PayeeRecent"!=e.$router.path&&e.$router.push("/main/payService/PayeeRecent")}}},[e._v("近期转账")]),a("li",{on:{click:function(t){"/main/payService/PreMakeManage"!=e.$router.path&&e.$router.push("/main/payService/PreMakeManage")}}},[e._v("预支单管理")])])]),a("div",{staticClass:"table"},[a("div",{staticClass:"form",staticStyle:{"margin-top":"1.94rem"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"收款人账户"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"收款人名称"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1)],1)],1),a("div",{staticClass:"butn"},[a("div",{staticClass:"search",on:{click:e.beShow}},[e._v("查询")]),a("div",{staticClass:"reset",on:{click:e.reset}},[e._v("重置")])])],1)],1),a("div",{staticClass:"table-middle"},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.tableData,border:"",fit:""}},[a("el-table-column",{attrs:{width:"160px",prop:"account",align:"center",label:"收款人账号"}}),a("el-table-column",{attrs:{width:"130px",prop:"name",align:"center",label:"收款人名称"}}),a("el-table-column",{attrs:{width:"100px",prop:"inOrOut",align:"center",label:"行内/行外"}}),a("el-table-column",{attrs:{width:"110px",prop:"transWay",align:"center",label:"转账渠道"}}),a("el-table-column",{attrs:{prop:"accountBank",width:"150px",align:"center",label:"收款人开户行"}}),a("el-table-column",{attrs:{prop:"transNumber",width:"170px",align:"center",label:"同城交换号或联行号"}})],1)],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","page-sizes":[10,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400}})],1)]),a("div",{staticClass:"butn1"},[a("div",{staticClass:"search",on:{click:e.addNewPeople}},[e._v("增加收款人")]),a("div",{staticClass:"load"},[e._v("下载")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow1,expression:"isShow1"}],staticClass:"form",staticStyle:{"margin-top":"1.94rem"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"收款人账户"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.newPeople.account,callback:function(t){e.$set(e.newPeople,"account",t)},expression:"newPeople.account"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"收款人名称"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.newPeople.name,callback:function(t){e.$set(e.newPeople,"name",t)},expression:"newPeople.name"}})],1)],1)],1),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"行内/行外"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.newPeople.inOrOut,callback:function(t){e.$set(e.newPeople,"inOrOut",t)},expression:"newPeople.inOrOut"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"转账渠道"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.newPeople.transWay,callback:function(t){e.$set(e.newPeople,"transWay",t)},expression:"newPeople.transWay"}})],1)],1)],1),a("el-row",{attrs:{type:"flex"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"收款人开户行"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.newPeople.accountBank,callback:function(t){e.$set(e.newPeople,"accountBank",t)},expression:"newPeople.accountBank"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"同城交换号"}},[a("el-input",{staticStyle:{width:"20rem"},attrs:{placeholder:"请输入内容"},model:{value:e.newPeople.transNumber,callback:function(t){e.$set(e.newPeople,"transNumber",t)},expression:"newPeople.transNumber"}})],1)],1)],1),a("div",{staticClass:"butn"},[a("div",{staticClass:"search",on:{click:e.add}},[e._v("增加")]),a("div",{staticClass:"reset",on:{click:e.cancle}},[e._v("取消")])])],1)],1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right"},[a("div",{staticClass:"vx-location"},[a("label",[e._v("当前位置:")]),a("div",[e._v("转账汇款 > 转账管理 >收款人名册")]),a("div",{staticClass:"caozuoyuan"},[e._v("操作员： 2010009")])])])}],r=(a("a434"),{data:function(){return{input:"",input1:"",tableData:[{account:"8888888888888",name:"测试01",inOrOut:"行外",transWay:"大/小额",accountBank:"中国建设银行山西省临猗县支行",transNumber:"001",otherName:"增加别名"},{account:"8888888888888",name:"测试02",inOrOut:"行内",transWay:"行内",accountBank:"吉林银行",transNumber:"001",otherName:"增加别名"},{account:"8888888888888",name:"测试03",inOrOut:"行外",transWay:"同城",accountBank:"吉林银行长春红旗街支行",transNumber:"001",otherName:"增加别名"}],isShow1:!1,newPeople:{account:"",name:"",inOrOut:"",transWay:"",accountBank:"",transNumber:"",otherName:""}}},methods:{beShow:function(){this.tableData.splice(1,2)},reset:function(){this.input="",this.input1=""},add:function(){this.tableData.push(this.newPeople),this.isShow1=!1},cancle:function(){this.isShow1=!1},addNewPeople:function(){this.isShow1=!0}}}),i=r,s=(a("3256"),a("2877")),o=Object(s["a"])(i,n,l,!1,null,"94bd68ea",null);t["default"]=o.exports},a434:function(e,t,a){"use strict";var n=a("23e7"),l=a("23cb"),r=a("a691"),i=a("50c4"),s=a("7b0b"),o=a("65f0"),c=a("8418"),u=a("1dde"),p=a("ae40"),d=u("splice"),m=p("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,v=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!m},{splice:function(e,t){var a,n,u,p,d,m,w=s(this),y=i(w.length),x=l(e,y),S=arguments.length;if(0===S?a=n=0:1===S?(a=0,n=y-x):(a=S-2,n=h(f(r(t),0),y-x)),y+a-n>v)throw TypeError(b);for(u=o(w,n),p=0;p<n;p++)d=x+p,d in w&&c(u,p,w[d]);if(u.length=n,a<n){for(p=x;p<y-n;p++)d=p+n,m=p+a,d in w?w[m]=w[d]:delete w[m];for(p=y;p>y-n+a;p--)delete w[p-1]}else if(a>n)for(p=y-n;p>x;p--)d=p+n-1,m=p+a-1,d in w?w[m]=w[d]:delete w[m];for(p=0;p<a;p++)w[p+x]=arguments[p+2];return w.length=y-n+a,u}})},ae40:function(e,t,a){var n=a("83ab"),l=a("d039"),r=a("5135"),i=Object.defineProperty,s={},o=function(e){throw e};e.exports=function(e,t){if(r(s,e))return s[e];t||(t={});var a=[][e],c=!!r(t,"ACCESSORS")&&t.ACCESSORS,u=r(t,0)?t[0]:o,p=r(t,1)?t[1]:void 0;return s[e]=!!a&&!l((function(){if(c&&!n)return!0;var e={length:-1};c?i(e,1,{enumerable:!0,get:o}):e[1]=1,a.call(e,u,p)}))}},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);