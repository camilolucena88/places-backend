!function(t){var a={};function e(l){if(a[l])return a[l].exports;var n=a[l]={i:l,l:!1,exports:{}};return t[l].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=a,e.d=function(t,a,l){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:l})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)e.d(l,n,function(a){return t[a]}.bind(null,n));return l},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=545)}({545:function(t,a,e){"use strict";var l=function(){$.fn.dataTable.Api.register("column().title()",(function(){return $(this.header()).text().trim()}));return{init:function(){var t;t=$("#kt_datatable").DataTable({responsive:!0,dom:"<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",lengthMenu:[5,10,25,50],pageLength:10,language:{lengthMenu:"Display _MENU_"},searchDelay:500,processing:!0,serverSide:!0,ajax:{url:HOST_URL+"/api/datatables/demos/server.php",type:"POST",data:{columnsDef:["RecordID","OrderID","Country","ShipCity","CompanyAgent","ShipDate","Status","Type","Actions"]}},columns:[{data:"RecordID"},{data:"OrderID"},{data:"Country"},{data:"ShipCity"},{data:"CompanyAgent"},{data:"ShipDate"},{data:"Status"},{data:"Type"},{data:"Actions",responsivePriority:-1}],initComplete:function(){this.api().columns().every((function(){switch(this.title()){case"Country":this.data().unique().sort().each((function(t,a){$('.datatable-input[data-col-index="2"]').append('<option value="'+t+'">'+t+"</option>")}));break;case"Status":var t={1:{title:"Pending",class:"label-light-primary"},2:{title:"Delivered",class:" label-light-danger"},3:{title:"Canceled",class:" label-light-primary"},4:{title:"Success",class:" label-light-success"},5:{title:"Info",class:" label-light-info"},6:{title:"Danger",class:" label-light-danger"},7:{title:"Warning",class:" label-light-warning"}};this.data().unique().sort().each((function(a,e){$('.datatable-input[data-col-index="6"]').append('<option value="'+a+'">'+t[a].title+"</option>")}));break;case"Type":t={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"success"}},this.data().unique().sort().each((function(a,e){$('.datatable-input[data-col-index="7"]').append('<option value="'+a+'">'+t[a].title+"</option>")}))}}))},columnDefs:[{targets:-1,title:"Actions",orderable:!1,render:function(t,a,e,l){return'\t\t\t\t\t\t\t<div class="dropdown dropdown-inline">\t\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\t                                <i class="la la-cog"></i>\t                            </a>\t\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t\t\t\t\t\t\t\t\t<ul class="nav nav-hoverable flex-column">\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\t\t\t\t\t\t\t    \t\t<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\t\t\t\t\t\t\t\t\t</ul>\t\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\t\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\t\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t\t</a>\t\t\t\t\t\t'}},{targets:6,render:function(t,a,e,l){var n={1:{title:"Pending",class:"label-light-primary"},2:{title:"Delivered",class:" label-light-danger"},3:{title:"Canceled",class:" label-light-primary"},4:{title:"Success",class:" label-light-success"},5:{title:"Info",class:" label-light-info"},6:{title:"Danger",class:" label-light-danger"},7:{title:"Warning",class:" label-light-warning"}};return void 0===n[t]?t:'<span class="label label-lg font-weight-bold'+n[t].class+' label-inline">'+n[t].title+"</span>"}},{targets:7,render:function(t,a,e,l){var n={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"success"}};return void 0===n[t]?t:'<span class="label label-'+n[t].state+' label-dot mr-2"></span><span class="font-weight-bold text-'+n[t].state+'">'+n[t].title+"</span>"}}]}),$("#kt_search").on("click",(function(a){a.preventDefault();var e={};$(".datatable-input").each((function(){var t=$(this).data("col-index");e[t]?e[t]+="|"+$(this).val():e[t]=$(this).val()})),$.each(e,(function(a,e){t.column(a).search(e||"",!1,!1)})),t.table().draw()})),$("#kt_reset").on("click",(function(a){a.preventDefault(),$(".datatable-input").each((function(){$(this).val(""),t.column($(this).data("col-index")).search("",!1,!1)})),t.table().draw()})),$("#kt_datepicker").datepicker({todayHighlight:!0,templates:{leftArrow:'<i class="la la-angle-left"></i>',rightArrow:'<i class="la la-angle-right"></i>'}})}}}();jQuery(document).ready((function(){l.init()}))}});