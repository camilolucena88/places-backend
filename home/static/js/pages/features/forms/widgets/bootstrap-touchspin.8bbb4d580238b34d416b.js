!function(t){var n={};function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)o.d(e,s,function(n){return t[n]}.bind(null,s));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=570)}({570:function(t,n,o){"use strict";var e={init:function(){$("#kt_touchspin_1, #kt_touchspin_2_1").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",min:0,max:100,step:.1,decimals:2,boostat:5,maxboostedstep:10}),$("#kt_touchspin_2, #kt_touchspin_2_2").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",min:-1e9,max:1e9,stepinterval:50,maxboostedstep:1e7,prefix:"$"}),$("#kt_touchspin_3, #kt_touchspin_2_3").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",min:-1e9,max:1e9,stepinterval:50,maxboostedstep:1e7,postfix:"$"}),$("#kt_touchspin_4, #kt_touchspin_2_4").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",verticalbuttons:!0,verticalup:'<i class="ki ki-plus"></i>',verticaldown:'<i class="ki ki-minus"></i>'}),$("#kt_touchspin_5, #kt_touchspin_2_5").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",verticalbuttons:!0,verticalup:'<i class="ki ki-arrow-up"></i>',verticaldown:'<i class="ki ki-arrow-down"></i>'}),$("#kt_touchspin_1_validate").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",min:-1e9,max:1e9,stepinterval:50,maxboostedstep:1e7,prefix:"$"}),$("#kt_touchspin_2_validate").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",min:0,max:100,step:.1,decimals:2,boostat:5,maxboostedstep:10}),$("#kt_touchspin_3_validate").TouchSpin({buttondown_class:"btn btn-secondary",buttonup_class:"btn btn-secondary",verticalbuttons:!0,verticalupclass:"ki ki-plus",verticaldownclass:"ki ki-minus"})}};jQuery(document).ready((function(){e.init()}))}});