!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=513)}({513:function(e,t,n){"use strict";var o={init:function(){var e;toastr.options.showDuration=1e3,(e=new KTCard("kt_card_1")).on("beforeCollapse",(function(e){setTimeout((function(){toastr.info("Before collapse event fired!")}),100)})),e.on("afterCollapse",(function(e){setTimeout((function(){toastr.warning("Before collapse event fired!")}),2e3)})),e.on("beforeExpand",(function(e){setTimeout((function(){toastr.info("Before expand event fired!")}),100)})),e.on("afterExpand",(function(e){setTimeout((function(){toastr.warning("After expand event fired!")}),2e3)})),e.on("beforeRemove",(function(e){return toastr.info("Before remove event fired!"),confirm("Are you sure to remove this card ?")})),e.on("afterRemove",(function(e){setTimeout((function(){toastr.warning("After remove event fired!")}),2e3)})),e.on("reload",(function(e){toastr.info("Leload event fired!"),KTApp.block(e.getSelf(),{overlayColor:"#ffffff",type:"loader",state:"primary",opacity:.3,size:"lg"}),setTimeout((function(){KTApp.unblock(e.getSelf())}),2e3)})),function(){var e=new KTCard("kt_card_2");e.on("beforeCollapse",(function(e){setTimeout((function(){toastr.info("Before collapse event fired!")}),100)})),e.on("afterCollapse",(function(e){setTimeout((function(){toastr.warning("Before collapse event fired!")}),2e3)})),e.on("beforeExpand",(function(e){setTimeout((function(){toastr.info("Before expand event fired!")}),100)})),e.on("afterExpand",(function(e){setTimeout((function(){toastr.warning("After expand event fired!")}),2e3)})),e.on("beforeRemove",(function(e){return toastr.info("Before remove event fired!"),confirm("Are you sure to remove this card ?")})),e.on("afterRemove",(function(e){setTimeout((function(){toastr.warning("After remove event fired!")}),2e3)})),e.on("reload",(function(e){toastr.info("Leload event fired!"),KTApp.block(e.getSelf(),{overlayColor:"#000000",type:"spinner",state:"primary",opacity:.05,size:"lg"}),setTimeout((function(){KTApp.unblock(e.getSelf())}),2e3)}))}(),function(){var e=new KTCard("kt_card_3");e.on("beforeCollapse",(function(e){setTimeout((function(){toastr.info("Before collapse event fired!")}),100)})),e.on("afterCollapse",(function(e){setTimeout((function(){toastr.warning("Before collapse event fired!")}),2e3)})),e.on("beforeExpand",(function(e){setTimeout((function(){toastr.info("Before expand event fired!")}),100)})),e.on("afterExpand",(function(e){setTimeout((function(){toastr.warning("After expand event fired!")}),2e3)})),e.on("beforeRemove",(function(e){return toastr.info("Before remove event fired!"),confirm("Are you sure to remove this card ?")})),e.on("afterRemove",(function(e){setTimeout((function(){toastr.warning("After remove event fired!")}),2e3)})),e.on("reload",(function(e){toastr.info("Leload event fired!"),KTApp.block(e.getSelf(),{type:"loader",state:"success",message:"Please wait..."}),setTimeout((function(){KTApp.unblock(e.getSelf())}),2e3)})),e.on("afterFullscreenOn",(function(e){toastr.warning("After fullscreen on event fired!");var t=$(e.getBody()).find("> .kt-scroll");t&&(t.data("original-height",t.css("height")),t.css("height","100%"),KTUtil.scrollUpdate(t[0]))})),e.on("afterFullscreenOff",(function(e){var t;toastr.warning("After fullscreen off event fired!"),(t=$(e.getBody()).find("> .kt-scroll"))&&((t=$(e.getBody()).find("> .kt-scroll")).css("height",t.data("original-height")),KTUtil.scrollUpdate(t[0]))}))}(),function(){var e=new KTCard("kt_card_4");e.on("beforeCollapse",(function(e){setTimeout((function(){toastr.info("Before collapse event fired!")}),100)})),e.on("afterCollapse",(function(e){setTimeout((function(){toastr.warning("Before collapse event fired!")}),2e3)})),e.on("beforeExpand",(function(e){setTimeout((function(){toastr.info("Before expand event fired!")}),100)})),e.on("afterExpand",(function(e){setTimeout((function(){toastr.warning("After expand event fired!")}),2e3)})),e.on("beforeRemove",(function(e){return toastr.info("Before remove event fired!"),confirm("Are you sure to remove this card ?")})),e.on("afterRemove",(function(e){setTimeout((function(){toastr.warning("After remove event fired!")}),2e3)})),e.on("reload",(function(e){toastr.info("Leload event fired!"),KTApp.block(e.getSelf(),{type:"loader",state:"primary",message:"Please wait..."}),setTimeout((function(){KTApp.unblock(e.getSelf())}),2e3)})),e.on("afterFullscreenOn",(function(e){toastr.warning("After fullscreen on event fired!");var t=$(e.getBody()).find("> .kt-scroll");t&&(t.data("original-height",t.css("height")),t.css("height","100%"),KTUtil.scrollUpdate(t[0]))})),e.on("afterFullscreenOff",(function(e){var t;toastr.warning("After fullscreen off event fired!"),(t=$(e.getBody()).find("> .kt-scroll"))&&((t=$(e.getBody()).find("> .kt-scroll")).css("height",t.data("original-height")),KTUtil.scrollUpdate(t[0]))}))}()}};jQuery(document).ready((function(){o.init()}))}});