!function(t){var e={};function a(l){if(e[l])return e[l].exports;var n=e[l]={i:l,l:!1,exports:{}};return t[l].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,l){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(l,n,function(e){return t[e]}.bind(null,n));return l},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=589)}({589:function(t,e,a){"use strict";var l={init:function(){var t,e;t={data:{type:"remote",source:{read:{url:HOST_URL+"/api/datatables/demos/default.php"}},pageSize:20,serverPaging:!0,serverFiltering:!0,serverSorting:!0},layout:{scroll:!0,height:550,footer:!1},sortable:!0,pagination:!0,search:{input:$("#kt_datatable_search_query"),key:"generalSearch"},columns:[{field:"RecordID",title:"#",sortable:!1,width:30,type:"number",selector:{class:"kt-checkbox--solid"},textAlign:"center"},{field:"ID",title:"ID",width:30,type:"number",template:function(t){return t.RecordID}},{field:"OrderID",title:"Order ID"},{field:"Country",title:"Country",template:function(t){return t.Country+" "+t.ShipCountry}},{field:"ShipDate",title:"Ship Date",type:"date",format:"MM/DD/YYYY"},{field:"CompanyName",title:"Company Name"},{field:"Status",title:"Status",template:function(t){var e={1:{title:"Pending",class:"label-light-primary"},2:{title:"Delivered",class:" label-light-danger"},3:{title:"Canceled",class:" label-light-primary"},4:{title:"Success",class:" label-light-success"},5:{title:"Info",class:" label-light-info"},6:{title:"Danger",class:" label-light-danger"},7:{title:"Warning",class:" label-light-warning"}};return'<span class="label '+e[t.Status].class+' label-inline font-weight-bold label-lg">'+e[t.Status].title+"</span>"}},{field:"Type",title:"Type",autoHide:!1,template:function(t){var e={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"success"}};return'<span class="label label-'+e[t.Type].state+' label-dot mr-2"></span><span class="font-weight-bold text-'+e[t.Type].state+'">'+e[t.Type].title+"</span>"}},{field:"Actions",title:"Actions",sortable:!1,width:125,overflow:"visible",autoHide:!1,template:function(){return'\t\t\t\t\t\t\t<div class="dropdown dropdown-inline">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\t                                <i class="la la-cog"></i>\t                            </a>\t\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="nav nav-hoverable flex-column">\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\t\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\t\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t'}}]},e=$("#kt_datatable").KTDatatable(t),$("#kt_datatable_destroy").on("click",(function(){$("#kt_datatable").KTDatatable("destroy")})),$("#kt_datatable_init").on("click",(function(){e=$("#kt_datatable").KTDatatable(t)})),$("#kt_datatable_reload").on("click",(function(){$("#kt_datatable").KTDatatable("reload")})),$("#kt_datatable_sort_asc").on("click",(function(){e.sort("Status","asc")})),$("#kt_datatable_sort_desc").on("click",(function(){e.sort("Status","desc")})),$("#kt_datatable_get").on("click",(function(){if(e.rows(".datatable-row-active"),e.nodes().length>0){var t=e.columns("CompanyName").nodes().text();console.log(t)}})),$("#kt_datatable_check").on("click",(function(){var t=$("#kt_datatable_check_input").val();e.setActive(t)})),$("#kt_datatable_check_all").on("click",(function(){$("#kt_datatable").KTDatatable("setActiveAll",!0)})),$("#kt_datatable_uncheck_all").on("click",(function(){$("#kt_datatable").KTDatatable("setActiveAll",!1)})),$("#kt_datatable_hide_column").on("click",(function(){e.columns("ShipDate").visible(!1)})),$("#kt_datatable_show_column").on("click",(function(){e.columns("ShipDate").visible(!0)})),$("#kt_datatable_remove_row").on("click",(function(){e.rows(".datatable-row-active").remove()})),$("#kt_datatable_search_status").on("change",(function(){e.search($(this).val().toLowerCase(),"Status")})),$("#kt_datatable_search_type").on("change",(function(){e.search($(this).val().toLowerCase(),"Type")})),$("#kt_datatable_search_status, #kt_datatable_search_type").selectpicker()}};jQuery(document).ready((function(){l.init()}))}});