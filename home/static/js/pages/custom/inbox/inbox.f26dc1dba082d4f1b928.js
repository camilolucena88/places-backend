!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=616)}({616:function(e,t,n){"use strict";var i;n.r(t);var a=new Uint8Array(16);function o(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(a)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"==typeof e&&r.test(e)},s=[],d=0;d<256;++d)s.push((d+256).toString(16).substr(1));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var u,m,f,p,y=function(e,t,n){var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=i[a];return t}return c(i)},b=(p=function(e,t){document.getElementById("submit-notification").classList.remove("spinner","spinner-white","spinner-right");var n=document.getElementById("alert-message");n.classList.add(t),n.innerHTML=e,n.style.display="",setTimeout((function(){n.style.display="none",n.classList.remove(t)}),3e3)},{init:function(e){u=KTUtil.getById("kt_inbox_reply"),m=KTUtil.getById("kt_inbox_reply_form"),f=new FormData(m),b.initReply(e)},initReply:function(e){var t,n;!function(e,t){t=new Quill("#"+t,{modules:{toolbar:{}},placeholder:"Escribir mensaje...",theme:"snow"});var n=KTUtil.find(e,".ql-toolbar");t=KTUtil.find(e,".ql-editor"),n&&KTUtil.addClass(n,"px-5 border-top-0 border-left-0 border-right-0"),t&&KTUtil.addClass(t,"px-8"),KTUtil.on(e,"kt_inbox_reply_form","submit",(function(e){}))}(u,"kt_inbox_reply_editor"),t=f,n="#"+"kt_inbox_reply_attachments",y(),new Dropzone(n,{url:"/courses/documents/upload",headers:{"X-CSRFToken":KTCookie.getCookie("csrftoken")},parallelUploads:20,uploadMultiple:!1,maxFilesize:1,clickable:n+"_select",renameFile:function(e){return y()}}).on("addedfile",(function(e){localStorage.setItem(e.name,e.upload.filename),t.append("attachment",e.upload.filename)})),function(e,t,n){var i=KTUtil.getById(t),a=KTUtil.find(i,"[name=student]"),o=e.map((function(e){return{value:e.user.first_name+" "+e.user.last_name,email:e.user.email,pic:e.user.wagtail_userprofile?e.user.wagtail_userprofile.avatar:""}})),r=(new Tagify(a,{delimiters:", ",maxTags:10,blacklist:["fuck","shit","pussy"],keepInvalidTags:!0,whitelist:o,templates:{dropdownItem:function(e){try{var t="";return t+='<div class="tagify__dropdown__item">',t+='   <div class="d-flex align-items-center">',t+='       <span class="symbol sumbol-'+(e.initialsState?e.initialsState:"")+' mr-2">',t+='           <span class="symbol-label" style="background-image: url(\''+(e.pic?e.pic:"")+"')\">"+(e.initials?e.initials:"")+"</span>",t+="       </span>",t+='       <div class="d-flex flex-column">',t+='           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">'+(e.value?e.value:"")+"</a>",t+='           <span class="text-muted font-weight-bold">'+(e.email?e.email:"")+"</span>",t+="       </div>",t+="   </div>",t+="</div>"}catch(e){}}},transformTag:function(e){e.class="tagify__tag tagify__tag--primary"},dropdown:{classname:"color-blue",enabled:1,maxItems:5}}),KTUtil.find(i,"[name=compose_cc]")),l=(new Tagify(r,{delimiters:", ",maxTags:10,blacklist:["fuck","shit","pussy"],keepInvalidTags:!0,whitelist:o,templates:{dropdownItem:function(e){try{var t="";return t+='<div class="tagify__dropdown__item">',t+='   <div class="d-flex align-items-center">',t+='       <span class="symbol sumbol-'+(e.initialsState?e.initialsState:"")+' mr-2" style="background-image: url(\''+(e.pic?e.pic:"")+"')\">",t+='           <span class="symbol-label">'+(e.initials?e.initials:"")+"</span>",t+="       </span>",t+='       <div class="d-flex flex-column">',t+='           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">'+(e.value?e.value:"")+"</a>",t+='           <span class="text-muted font-weight-bold">'+(e.email?e.email:"")+"</span>",t+="       </div>",t+="   </div>",t+="</div>"}catch(e){}}},transformTag:function(e){e.class="tagify__tag tagify__tag--primary"},dropdown:{classname:"color-blue",enabled:1,maxItems:5}}),KTUtil.find(i,"[name=compose_bcc]"));new Tagify(l,{delimiters:", ",maxTags:10,blacklist:["fuck","shit","pussy"],keepInvalidTags:!0,whitelist:[{value:"Chris Muller",email:"chris.muller@wix.com",initials:"",initialsState:"",pic:"./assets/media/users/150-11.jpg",class:"tagify__tag--primary"}],templates:{dropdownItem:function(e){try{var t="";return t+='<div class="tagify__dropdown__item">',t+='   <div class="d-flex align-items-center">',t+='       <span class="symbol sumbol-'+(e.initialsState?e.initialsState:"")+' mr-2" style="background-image: url(\''+(e.pic?e.pic:"")+"')\">",t+='           <span class="symbol-label">'+(e.initials?e.initials:"")+"</span>",t+="       </span>",t+='       <div class="d-flex flex-column">',t+='           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">'+(e.value?e.value:"")+"</a>",t+='           <span class="text-muted font-weight-bold">'+(e.email?e.email:"")+"</span>",t+="       </div>",t+="   </div>",t+="</div>"}catch(e){}}},transformTag:function(e){e.class="tagify__tag tagify__tag--primary"},dropdown:{classname:"color-blue",enabled:1,maxItems:5}}),KTUtil.on(i,'[data-inbox="cc-show"]',"click",(function(e){var t=KTUtil.find(i,".inbox-to-cc");KTUtil.removeClass(t,"d-none"),KTUtil.addClass(t,"d-flex"),KTUtil.find(i,"[name=compose_cc]").focus()})),KTUtil.on(i,'[data-inbox="cc-hide"]',"click",(function(e){var t=KTUtil.find(i,".inbox-to-cc");KTUtil.removeClass(t,"d-flex"),KTUtil.addClass(t,"d-none")})),KTUtil.on(i,'[data-inbox="bcc-show"]',"click",(function(e){var t=KTUtil.find(i,".inbox-to-bcc");KTUtil.removeClass(t,"d-none"),KTUtil.addClass(t,"d-flex"),KTUtil.find(i,"[name=compose_bcc]").focus()})),KTUtil.on(i,'[data-inbox="bcc-hide"]',"click",(function(e){var t=KTUtil.find(i,".inbox-to-bcc");KTUtil.removeClass(t,"d-flex"),KTUtil.addClass(t,"d-none")})),KTUtil.on(i,"#submit-notification","click",(function(e){e.preventDefault();var t=new XMLHttpRequest,i=new FormData(document.getElementById("kt_inbox_reply_form"));for(var a of n.entries())"attachment"===a[0]&&""===i.get("attachment")?i.set("attachment",a[1]):"attachment"===a[0]&&i.append("attachment",a[1]);var o=[];for(var a of i.entries())"student"===a[0]&&o.push(JSON.parse(a[1]).map((function(e){return e.email})));i.set("student",JSON.stringify(o[0])),i.set("description",document.getElementById("kt_inbox_reply_editor").querySelector(".ql-editor").innerHTML),t.addEventListener("loadstart",(function(e){for(var t of(document.getElementById("submit-notification").classList.add("spinner","spinner-white","spinner-right"),i.keys()))"csrfmiddlewaretoken"!==t[0]&&i.delete(t[0])})),t.addEventListener("load",(function(e){200!==t.status?p("Hubo un error en el envio, intenta de nuevo.","alert-danger"):p("Enviado exitosamente.","alert-success")})),t.addEventListener("error",(function(e){p("Hubo un error.","alert-danger")})),t.addEventListener("abort",(function(e){p("El envio fue cancelado por el usuario.","alert-warning")})),t.open("POST","/courses/notifications"),t.send(i)}))}(e,"kt_inbox_reply_form",f),FormValidation.formValidation(document.getElementById("kt_inbox_reply_form"),{fields:{compose_subject:{validators:{notEmpty:{message:"Título es un campo requerido."}}}},plugins:{defaultSubmit:new FormValidation.plugins.DefaultSubmit}})}});jQuery(document).ready((async function(){var e=await fetch("/api/students").then(e=>e.json()).then(e=>e);b.init(e)}))}});