!function(t){var l={};function a(e){if(l[e])return l[e].exports;var n=l[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=l,a.d=function(t,l,e){a.o(t,l)||Object.defineProperty(t,l,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,l){if(1&l&&(t=a(t)),8&l)return t;if(4&l&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&l&&"string"!=typeof t)for(var n in t)a.d(e,n,function(l){return t[l]}.bind(null,n));return e},a.n=function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(l,"a",l),l},a.o=function(t,l){return Object.prototype.hasOwnProperty.call(t,l)},a.p="",a(a.s=531)}({531:function(t,l,a){"use strict";var e={init:function(){$("#kt_datatable1").DataTable({scrollY:"50vh",scrollX:!0,scrollCollapse:!0,columnDefs:[{targets:-1,title:"Actions",orderable:!1,width:"125px",render:function(t,l,a,e){return'\t                        <div class="dropdown dropdown-inline">\t                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\t                                <span class="svg-icon svg-icon-md">\t                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                            <rect x="0" y="0" width="24" height="24"/>\t                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\t                                        </g>\t                                    </svg>\t                                </span>\t                            </a>\t                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t                                <ul class="navi flex-column navi-hover py-2">\t                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\t                                        Choose an action:\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-print"></i></span>\t                                            <span class="navi-text">Print</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-copy"></i></span>\t                                            <span class="navi-text">Copy</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\t                                            <span class="navi-text">Excel</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\t                                            <span class="navi-text">CSV</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\t                                            <span class="navi-text">PDF</span>\t                                        </a>\t                                    </li>\t                                </ul>\t                            </div>\t                        </div>\t                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\t                            <span class="svg-icon svg-icon-md">\t                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        <rect x="0" y="0" width="24" height="24"/>\t                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\t                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\t                                    </g>\t                                </svg>\t                            </span>\t                        </a>\t                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\t                            <span class="svg-icon svg-icon-md">\t                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        <rect x="0" y="0" width="24" height="24"/>\t                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\t                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\t                                    </g>\t                                </svg>\t                            </span>\t                        </a>\t                    '}},{targets:8,width:"75px",render:function(t,l,a,e){var n={1:{title:"Pending",class:"label-light-primary"},2:{title:"Delivered",class:" label-light-danger"},3:{title:"Canceled",class:" label-light-primary"},4:{title:"Success",class:" label-light-success"},5:{title:"Info",class:" label-light-info"},6:{title:"Danger",class:" label-light-danger"},7:{title:"Warning",class:" label-light-warning"}};return void 0===n[t]?t:'<span class="label label-lg font-weight-bold'+n[t].class+' label-inline">'+n[t].title+"</span>"}},{targets:9,width:"75px",render:function(t,l,a,e){var n={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"success"}};return void 0===n[t]?t:'<span class="label label-'+n[t].state+' label-dot mr-2"></span><span class="font-weight-bold text-'+n[t].state+'">'+n[t].title+"</span>"}}]}),$("#kt_datatable2").DataTable({scrollY:"50vh",scrollX:!0,scrollCollapse:!0,createdRow:function(t,l,a){var e={1:{title:"Pending",class:"label-light-primary"},2:{title:"Delivered",class:" label-light-danger"},3:{title:"Canceled",class:" label-light-primary"},4:{title:"Success",class:" label-light-success"},5:{title:"Info",class:" label-light-info"},6:{title:"Danger",class:" label-light-danger"},7:{title:"Warning",class:" label-light-warning"}},n='<span class="label '+e[l[18]].class+' label-inline label-bold">'+e[l[18]].title+"</span>";t.getElementsByTagName("td")[18].innerHTML=n,n='<span class="label label-'+(e={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"success"}})[l[19]].state+' label-dot mr-2"></span><span class="font-weight-bold text-'+e[l[19]].state+'">'+e[l[19]].title+"</span>",t.getElementsByTagName("td")[19].innerHTML=n},columnDefs:[{targets:-1,title:"Actions",orderable:!1,width:"125px",render:function(t,l,a,e){return'\t                        <div class="dropdown dropdown-inline">\t                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\t                                <span class="svg-icon svg-icon-md">\t                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                            <rect x="0" y="0" width="24" height="24"/>\t                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\t                                        </g>\t                                    </svg>\t                                </span>\t                            </a>\t                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t                                <ul class="navi flex-column navi-hover py-2">\t                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\t                                        Choose an action:\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-print"></i></span>\t                                            <span class="navi-text">Print</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-copy"></i></span>\t                                            <span class="navi-text">Copy</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\t                                            <span class="navi-text">Excel</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-text-o"></i></span>\t                                            <span class="navi-text">CSV</span>\t                                        </a>\t                                    </li>\t                                    <li class="navi-item">\t                                        <a href="#" class="navi-link">\t                                            <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\t                                            <span class="navi-text">PDF</span>\t                                        </a>\t                                    </li>\t                                </ul>\t                            </div>\t                        </div>\t                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\t                            <span class="svg-icon svg-icon-md">\t                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        <rect x="0" y="0" width="24" height="24"/>\t                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\t                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\t                                    </g>\t                                </svg>\t                            </span>\t                        </a>\t                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\t                            <span class="svg-icon svg-icon-md">\t                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\t                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        <rect x="0" y="0" width="24" height="24"/>\t                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\t                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\t                                    </g>\t                                </svg>\t                            </span>\t                        </a>\t                    '}},{targets:8,width:"75px",render:function(t,l,a,e){var n={1:{title:"Pending",class:"label-light-primary"},2:{title:"Delivered",class:" label-light-danger"},3:{title:"Canceled",class:" label-light-primary"},4:{title:"Success",class:" label-light-success"},5:{title:"Info",class:" label-light-info"},6:{title:"Danger",class:" label-light-danger"},7:{title:"Warning",class:" label-light-warning"}};return void 0===n[t]?t:'<span class="label '+n[t].class+' label-inline label-bold">'+n[t].title+"</span>"}},{targets:9,width:"75px",render:function(t,l,a,e){var n={1:{title:"Online",state:"danger"},2:{title:"Retail",state:"primary"},3:{title:"Direct",state:"success"}};return void 0===n[t]?t:'<span class="label label-'+n[t].state+' label-dot mr-2"></span><span class="font-weight-bold text-'+n[t].state+'">'+n[t].title+"</span>"}}]})}};jQuery(document).ready((function(){e.init()}))}});