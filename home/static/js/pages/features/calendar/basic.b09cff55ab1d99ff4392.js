!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=508)}({508:function(e,t,n){"use strict";var i={init:function(e){var t=moment().startOf("day"),n=(t.format("YYYY-MM"),t.clone().subtract(1,"day").format("YYYY-MM-DD"),t.format("YYYY-MM-DD")),i=(t.clone().add(1,"day").format("YYYY-MM-DD"),t.clone().subtract(1,"year").format("YYYY-MM-DD")),a=document.getElementById("kt_calendar");console.log(e),new FullCalendar.Calendar(a,{timeZone:"America/Caracas",plugins:["bootstrap","interaction","dayGrid","timeGrid","list","timeGridPlugin"],themeSystem:"bootstrap",locale:"es",isRTL:KTUtil.isRTL(),header:{left:"prev,next today",center:"title",right:"timelineCustom,dayGridMonth,timeGridWeek,timeGridDay"},height:800,contentHeight:780,aspectRatio:3,nowIndicator:!0,now:n+"T09:25:00",views:{timelineCustom:{type:"list",buttonText:"anual",currentRangeUnit:"month",dateIncrement:{years:1},duration:{years:1},slotDuration:{month:12},snapDuration:{years:1},snapsPerSlot:{month:12},slotLabelInterval:{month:12},slotLabelFormat:{month:"long"},colCnt:12,dayCount:12,allDaySlot:!1,slotEventOverlap:!0,visibleRange:{start:i,end:n}},dayGridMonth:{buttonText:"mensual"},timeGridWeek:{buttonText:"semanal"},timeGridDay:{buttonText:"diario"}},titleFormat:{years:"numeric"},defaultView:"dayGridMonth",defaultDate:n,editable:!0,eventLimit:!0,navLinks:!0,events:e,eventRender:function(e){var t=$(e.el);e.event.extendedProps&&e.event.extendedProps.description&&(t.hasClass("fc-day-grid-event")?(t.data("content",e.event.extendedProps.description),t.data("placement","top"),KTApp.initPopover(t)):t.hasClass("fc-time-grid-event")?t.find(".fc-title").append('<div class="fc-description">'+e.event.extendedProps.description+"</div>"):0!==t.find(".fc-list-item-title").lenght&&t.find(".fc-list-item-title").append('<div class="fc-description">'+e.event.extendedProps.description+"</div>"))}}).render()}},a={init:function(e){var t=moment().startOf("day"),n=(t.format("YYYY-MM"),t.clone().subtract(1,"day").format("YYYY-MM-DD"),t.format("YYYY-MM-DD")),i=(t.clone().add(1,"day").format("YYYY-MM-DD"),t.clone().subtract(1,"year").format("YYYY-MM-DD"),document.getElementById("kt_schedule_calendar"));new FullCalendar.Calendar(i,{timeZone:"America/Caracas",plugins:["bootstrap","interaction","dayGrid","timeGrid","list","timeGridPlugin"],themeSystem:"bootstrap",locale:"es",isRTL:KTUtil.isRTL(),header:{left:"prev,next today",center:"title",right:"timeGridWeek,timeGridDay"},height:800,contentHeight:780,aspectRatio:3,nowIndicator:!0,now:n+"T09:25:00",views:{timeGridWeek:{buttonText:"semanal"},timeGridDay:{buttonText:"diario"}},titleFormat:{years:"numeric"},defaultView:"dayGridMonth",defaultDate:n,editable:!0,eventLimit:!0,navLinks:!0,events:e,eventRender:function(e){var t=$(e.el);e.event.extendedProps&&e.event.extendedProps.description&&(t.hasClass("fc-day-grid-event")?(t.data("content",e.event.extendedProps.description),t.data("placement","top"),KTApp.initPopover(t)):t.hasClass("fc-time-grid-event")?t.find(".fc-title").append('<div class="fc-description">'+e.event.extendedProps.description+"</div>"):0!==t.find(".fc-list-item-title").lenght&&t.find(".fc-list-item-title").append('<div class="fc-description">'+e.event.extendedProps.description+"</div>"))}}).render()}};jQuery(document).ready((async function(){if("/calendar/school"===window.location.pathname){var e=await fetch("/api/events").then(e=>e.json()).then(e=>e);i.init(e)}if(window.location.pathname.includes("/courses/schedule")){var t=parseInt(window.location.href.split("/").pop());console.log(url,params,t);var n=await fetch("/api/courses/schedule/"+t).then(e=>e.json()).then(e=>(console.log(e),e));a.init(n)}}))}});