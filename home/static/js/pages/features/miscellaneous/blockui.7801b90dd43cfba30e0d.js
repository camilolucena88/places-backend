!function(o){var t={};function c(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=o,c.c=t,c.d=function(o,t,e){c.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},c.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,t){if(1&t&&(o=c(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var n in o)c.d(e,n,function(t){return o[t]}.bind(null,n));return e},c.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(t,"a",t),t},c.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},c.p="",c(c.s=603)}({603:function(o,t,c){"use strict";var e={init:function(){$("#kt_blockui_default").click((function(){KTApp.block("#kt_blockui_content",{}),setTimeout((function(){KTApp.unblock("#kt_blockui_content")}),2e3)})),$("#kt_blockui_overlay_color").click((function(){KTApp.block("#kt_blockui_content",{overlayColor:"red",opacity:.1,state:"primary"}),setTimeout((function(){KTApp.unblock("#kt_blockui_content")}),2e3)})),$("#kt_blockui_custom_spinner").click((function(){KTApp.block("#kt_blockui_content",{overlayColor:"#000000",state:"warning",size:"lg"}),setTimeout((function(){KTApp.unblock("#kt_blockui_content")}),2e3)})),$("#kt_blockui_custom_text_1").click((function(){KTApp.block("#kt_blockui_content",{overlayColor:"#000000",state:"danger",message:"Please wait..."}),setTimeout((function(){KTApp.unblock("#kt_blockui_content")}),2e3)})),$("#kt_blockui_custom_text_2").click((function(){KTApp.block("#kt_blockui_content",{overlayColor:"#000000",state:"primary",message:"Processing..."}),setTimeout((function(){KTApp.unblock("#kt_blockui_content")}),2e3)})),$("#kt_blockui_modal_default_btn").click((function(){KTApp.block("#kt_blockui_modal_default .modal-dialog",{}),setTimeout((function(){KTApp.unblock("#kt_blockui_modal_default .modal-content")}),2e3)})),$("#kt_blockui_modal_overlay_color_btn").click((function(){KTApp.block("#kt_blockui_modal_overlay_color .modal-content",{overlayColor:"red",opacity:.1,state:"primary"}),setTimeout((function(){KTApp.unblock("#kt_blockui_modal_overlay_color .modal-content")}),2e3)})),$("#kt_blockui_modal_custom_spinner_btn").click((function(){KTApp.block("#kt_blockui_modal_custom_spinner .modal-content",{overlayColor:"#000000",state:"warning",size:"lg"}),setTimeout((function(){KTApp.unblock("#kt_blockui_modal_custom_spinner .modal-content")}),2e3)})),$("#kt_blockui_modal_custom_text_1_btn").click((function(){KTApp.block("#kt_blockui_modal_custom_text_1 .modal-content",{overlayColor:"#000000",state:"danger",message:"Please wait..."}),setTimeout((function(){KTApp.unblock("#kt_blockui_modal_custom_text_1 .modal-content")}),2e3)})),$("#kt_blockui_modal_custom_text_2_btn").click((function(){KTApp.block("#kt_blockui_modal_custom_text_2 .modal-content",{overlayColor:"#000000",state:"primary",message:"Processing..."}),setTimeout((function(){KTApp.unblock("#kt_blockui_modal_custom_text_2 .modal-content")}),2e3)})),$("#kt_blockui_card_default").click((function(){KTApp.block("#kt_blockui_card"),setTimeout((function(){KTApp.unblock("#kt_blockui_card")}),2e3)})),$("#kt_blockui_card_overlay_color").click((function(){KTApp.block("#kt_blockui_card",{overlayColor:"red",opacity:.1,state:"primary"}),setTimeout((function(){KTApp.unblock("#kt_blockui_card")}),2e3)})),$("#kt_blockui_card_custom_spinner").click((function(){KTApp.block("#kt_blockui_card",{overlayColor:"#000000",state:"warning",size:"lg"}),setTimeout((function(){KTApp.unblock("#kt_blockui_card")}),2e3)})),$("#kt_blockui_card_custom_text_1").click((function(){KTApp.block("#kt_blockui_card",{overlayColor:"#000000",state:"danger",message:"Please wait..."}),setTimeout((function(){KTApp.unblock("#kt_blockui_card")}),2e3)})),$("#kt_blockui_card_custom_text_2").click((function(){KTApp.block("#kt_blockui_card",{overlayColor:"#000000",state:"primary",message:"Processing..."}),setTimeout((function(){KTApp.unblock("#kt_blockui_card")}),2e3)})),$("#kt_blockui_page_default").click((function(){KTApp.blockPage(),setTimeout((function(){KTApp.unblockPage()}),2e3)})),$("#kt_blockui_page_overlay_color").click((function(){KTApp.blockPage({overlayColor:"red",opacity:.1,state:"primary"}),setTimeout((function(){KTApp.unblockPage()}),2e3)})),$("#kt_blockui_page_custom_spinner").click((function(){KTApp.blockPage({overlayColor:"#000000",state:"warning",size:"lg"}),setTimeout((function(){KTApp.unblockPage()}),2e3)})),$("#kt_blockui_page_custom_text_1").click((function(){KTApp.blockPage({overlayColor:"#000000",state:"danger",message:"Please wait..."}),setTimeout((function(){KTApp.unblockPage()}),2e3)})),$("#kt_blockui_page_custom_text_2").click((function(){KTApp.blockPage({overlayColor:"#000000",state:"primary",message:"Processing..."}),setTimeout((function(){KTApp.unblockPage()}),2e3)}))}};jQuery(document).ready((function(){e.init()}))}});