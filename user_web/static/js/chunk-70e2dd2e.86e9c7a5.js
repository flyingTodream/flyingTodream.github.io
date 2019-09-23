(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70e2dd2e"],{"2e80":function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return c})),r.d(t,"g",(function(){return p})),r.d(t,"h",(function(){return v}));var a=r("b775"),n=r("4328"),o=r.n(n);function s(e){return Object(a["a"])({url:"/stock/getWarehouseList",method:"post",data:o.a.stringify(e)})}function i(e){return Object(a["a"])({url:"/stock/getInventoryType",method:"post",data:o.a.stringify(e)})}function l(e){return Object(a["a"])({url:"/stock/getInventoryCount",method:"post",data:o.a.stringify(e)})}function d(e){return Object(a["a"])({url:"/stock/getInventoryManage",method:"post",data:o.a.stringify(e)})}function u(e){return Object(a["a"])({url:"/stock/insertWarehousesCount",method:"post",data:o.a.stringify(e)})}function c(e){return Object(a["a"])({url:"/stock/insertWarehousesList",method:"post",data:o.a.stringify(e)})}function p(e){return Object(a["a"])({url:"/stock/insertWarehousing",method:"post",data:o.a.stringify(e)})}function v(e){return Object(a["a"])({url:"/stock/updatePlacing",method:"post",data:o.a.stringify(e)})}},"335e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"inventory-header-div"},[r("div",{staticClass:"title"},[e._v("库存信息")]),e._v(" "),r("el-select",{staticClass:"el-option-title",attrs:{placeholder:"请选择"},on:{change:e.changReserve},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return r("el-option",{key:e.id,attrs:{label:e.display_name,value:e.id}})})),1)],1),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"inventory-header-div"},[r("el-input",{staticClass:"el-option-title",attrs:{placeholder:"请输入要搜索的产品名称"},model:{value:e.sensor_txt,callback:function(t){e.sensor_txt=t},expression:"sensor_txt"}}),e._v(" "),r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("新增入库")])],1),e._v(" "),r("el-dialog",{attrs:{title:"新增入库",visible:e.dialogVisible,width:"40%","before-close":e.showAddinReserve},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"addInReserveForm",attrs:{model:e.addInReserveForm,rules:e.addInreserveRules,"label-width":"80px","label-position":"right"}},[r("el-form-item",{attrs:{label:"仓库",prop:"warehouse"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.addInReserveForm.warehouse,callback:function(t){e.$set(e.addInReserveForm,"warehouse",t)},expression:"addInReserveForm.warehouse"}},e._l(e.options,(function(e){return r("el-option",{key:e.id,attrs:{label:e.display_name,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.addInReserveForm.operator,callback:function(t){e.$set(e.addInReserveForm,"operator",t)},expression:"addInReserveForm.operator"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"产品种类",prop:"productIndex"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:e.changType},model:{value:e.addInReserveForm.productIndex,callback:function(t){e.$set(e.addInReserveForm,"productIndex",t)},expression:"addInReserveForm.productIndex"}},e._l(e.InverntoryTypes,(function(e,t){return r("el-option",{key:e.id,attrs:{label:e.name,value:t}})})),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"入库量",prop:"region"}},[r("el-input",{attrs:{type:"number",step:"10",placeholder:"默认单位为千克","validate-event":""},model:{value:e.addInReserveForm.region,callback:function(t){e.$set(e.addInReserveForm,"region",t)},expression:"addInReserveForm.region"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"合格率",prop:"percentPass"}},[r("el-input",{attrs:{placeholder:"请直接输入数值"},model:{value:e.addInReserveForm.percentPass,callback:function(t){e.$set(e.addInReserveForm,"percentPass",t)},expression:"addInReserveForm.percentPass"}},[r("template",{slot:"append"},[e._v("%")])],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"入库时间",prop:"inReserveDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期"},model:{value:e.addInReserveForm.inReserveDate,callback:function(t){e.$set(e.addInReserveForm,"inReserveDate",t)},expression:"addInReserveForm.inReserveDate"}})],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e._insertWarehousing("addInReserveForm")}}},[e._v("确 定")])],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"新增出库",visible:e.outResverDialog,width:"40%","before-close":e.showAddoutReserve},on:{"update:visible":function(t){e.outResverDialog=t}}},[r("el-form",{ref:"addOutReserveForm",attrs:{model:e.addOutReserveForm,rules:e.addOutReserveRules,"label-width":"80px","label-position":"right"}},[r("el-form-item",{attrs:{label:"仓库"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.addOutReserveForm.warehouse,callback:function(t){e.$set(e.addOutReserveForm,"warehouse",t)},expression:"addOutReserveForm.warehouse"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"操作员"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.addOutReserveForm.operator,callback:function(t){e.$set(e.addOutReserveForm,"operator",t)},expression:"addOutReserveForm.operator"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"产品种类"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.addOutReserveForm.productIndex,callback:function(t){e.$set(e.addOutReserveForm,"productIndex",t)},expression:"addOutReserveForm.productIndex"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"出库量",prop:"region"}},[r("el-input",{attrs:{type:"number",step:"10",placeholder:"默认单位为千克"},model:{value:e.addOutReserveForm.region,callback:function(t){e.$set(e.addOutReserveForm,"region",t)},expression:"addOutReserveForm.region"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"合格率",prop:"percentPass"}},[r("el-input",{attrs:{placeholder:"请直接输入数值"},model:{value:e.addOutReserveForm.percentPass,callback:function(t){e.$set(e.addOutReserveForm,"percentPass",t)},expression:"addOutReserveForm.percentPass"}},[r("template",{staticStyle:{background:"#fff"},slot:"append"},[e._v("%")])],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"出库时间",prop:"inReserveDate"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:"选择日期"},model:{value:e.addOutReserveForm.inReserveDate,callback:function(t){e.$set(e.addOutReserveForm,"inReserveDate",t)},expression:"addOutReserveForm.inReserveDate"}})],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:function(t){e.outResverDialog=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e._updatePlacing("addOutReserveForm")}}},[e._v("确 定")])],1)],1)],1),e._v(" "),r("div",{staticStyle:{margin:"0px 20px"}},[r("el-table",{staticStyle:{width:"100%",border:"1px solid #ddd"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{type:"index",label:"编号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"displayName",label:"仓库名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"type",label:"产品种类"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:"产品名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"size",label:"入库量"}}),e._v(" "),r("el-table-column",{attrs:{prop:"qualified",label:"合格率"}}),e._v(" "),r("el-table-column",{attrs:{prop:"operator",label:"操作员"}}),e._v(" "),r("el-table-column",{attrs:{prop:"create_time",label:"入库时间"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{color:"blue"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("查看")]),e._v(" "),r("span",{staticStyle:{color:"blue"},on:{click:function(r){return e.handleOutReserve(t.row)}}},[e._v("出库")])]}}])})],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.total>5,expression:"total > 5"}],staticClass:"page"},[r("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[5,10,15,20],"page-size":this.pageSize,layout:"total, prev, pager, next, jumper",total:this.total},on:{"current-change":e.handleCurrentChange}})],1)],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{margin:"0px 20px"}},[a("img",{attrs:{src:r("f1fc"),height:"2px;"}})])}],o=r("db72"),s=(r("7364"),r("2e80")),i=r("6b43"),l=r("2f62"),d=(r("4360"),{data:function(){return{tableData:[],options:[],value:"",dialogVisible:!1,outResverDialog:!1,addInReserveForm:{warehouse:"",operator:"",productIndex:"",region:"",percentPass:"",inReserveDate:""},addInreserveRules:{warehouse:[{required:!0,message:"请选择仓库",trigger:"blur"}],productIndex:[{required:!0,message:"请选择产品种类",trigger:"blur"}],region:[{required:!0,message:"请输入入库量",trigger:"blur"}],percentPass:[{required:!0,message:"请输入合格率",trigger:"blur"}],inReserveDate:[{required:!0,message:"请输入入库时间",trigger:"blur"}]},addOutReserveForm:{warehouse:"",operator:"",productIndex:"",region:"",percentPass:"",inReserveDate:""},addOutReserveRules:{region:[{required:!0,message:"请输入入库时间",trigger:"blur"}],percentPass:[{required:!0,message:"请输入入库时间",trigger:"blur"}],inReserveDate:[{required:!0,message:"请输入入库时间",trigger:"blur"}]},InReserveFormRules:[],InverntoryTypes:[],sensor_txt:"",currentPage:1,pageSize:5,total:0}},mounted:function(){this._getWarehouseList(),this._getInventoryType(),this._getInventoryManage(),this._getInventoryCount()},methods:{handleOutReserve:function(e){this.addOutReserveForm.warehouse=e.displayName,this.addOutReserveForm.operator=e.operator,this.addOutReserveForm.productIndex=e.type,this.addOutReserveForm.region="",this.addOutReserveForm.percentPass="",this.addOutReserveForm.inReserveDate="",this.outResverDialog=!0},_updatePlacing:function(e){var t=this;this.$refs[e].validate((function(r){if(!r)return console.log("error submit!!"),!1;t.outResverDialog=!1;var a={companyId:t.companyId,warehouseId:t.addOutReserveForm.warehouse,name:t.addOutReserveForm.operator,type:t.addOutReserveForm.productIndex,size:t.addOutReserveForm.region,qualified:t.addOutReserveForm.percentPass,io_time:t.addOutReserveForm.inReserveDate,operator:t.companyId,io_type:2};Object(s["h"])(a).then((function(r){1===r.statusCode?(t.$message({message:r.message,type:"success"}),t.$refs[e].resetFields()):t.$message({message:r.message,type:"warning"})}))}))},changType:function(){this.addInReserveForm.operator=this.InverntoryTypes[this.addInReserveForm.productIndex].operator},search:function(){this.currentPage=1,this._getInventoryManage(),this._getInventoryCount()},changReserve:function(){this.sensor_txt="",this.addInReserveForm.warehouse=this.value,this._getInventoryManage(),this._getInventoryCount()},_insertWarehousing:function(e){var t=this;this.$refs[e].validate((function(r){if(!r)return console.log("error submit!!"),!1;t.dialogVisible=!1;var a={companyId:t.companyId,warehouseId:t.addInReserveForm.warehouse,name:t.InverntoryTypes[t.addInReserveForm.productIndex].name,type:t.InverntoryTypes[t.addInReserveForm.productIndex].type,size:t.addInReserveForm.region,qualified:t.addInReserveForm.percentPass,io_time:t.addInReserveForm.inReserveDate,operator:t.companyId,io_type:1};Object(s["g"])(a).then((function(r){1===r.statusCode?(t.$message({message:r.message,type:"success"}),t.$refs[e].resetFields()):t.$message({message:r.message,type:"warning"})}))}))},handleEdit:function(e,t){console.log(e,t)},showAddinReserve:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},showAddoutReserve:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},_getWarehouseList:function(){var e=this,t={companyId:this.companyId};Object(s["d"])(t).then((function(t){e.options=t.result,console.log(e.options)}))},_getInventoryType:function(){var e=this,t={companyId:this.companyId};Object(s["c"])(t).then((function(t){e.InverntoryTypes=t.result}))},_getInventoryManage:function(){var e=this,t={companyId:this.companyId,warehouseId:this.value,displayName:this.sensor_txt,page:this.currentPage,pageSize:this.pageSize};Object(s["b"])(t).then((function(t){console.log(t.result),e.tableData=t.result}))},handleCurrentChange:function(e){this.currentPage=e,this._getInventoryManage(),this._getInventoryCount()},_getInventoryCount:function(){var e=this,t={companyId:this.companyId,warehouseId:this.value};Object(s["a"])(t).then((function(t){e.total=t.result}))}},computed:Object(o["a"])({},Object(l["b"])(["busiid","businame","controlinfo"]),{companyId:function(){return i["a"].getItem("companyId")},companyName:function(){return i["a"].getItem("companyName")},warehouseName:function(){}})}),u=d,c=(r("86c0"),r("2877")),p=Object(c["a"])(u,a,n,!1,null,null,null);t["default"]=p.exports},"86c0":function(e,t,r){"use strict";var a=r("c17a"),n=r.n(a);n.a},c17a:function(e,t,r){},f1fc:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABgIAAAACCAYAAACaA8dnAAAAAXNSR0IArs4c6QAAAFpJREFUaAXt0EERADAMw7CVR/gjC4/tOQ49mYE1be8RAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsE4gyaybMkSAAAECBAgQIECAAAECBAgQIECAAAECBAh8gQevmAQCcZMf2QAAAABJRU5ErkJggg=="}}]);