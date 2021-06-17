"use strict";

var KTCalendarBasic = function() {

    return {
        //main function to initiate the module
        init: function(events) {
            var todayDate = moment().startOf('day');
            var YM = todayDate.format('YYYY-MM');
            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
            var TODAY = todayDate.format('YYYY-MM-DD');
            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
            var LAST_YEAR = todayDate.clone().subtract(1, 'year').format('YYYY-MM-DD');

            var calendarEl = document.getElementById('kt_calendar');
            console.log(events);
            var calendar = new FullCalendar.Calendar(calendarEl, {
                timeZone: 'America/Caracas',
                plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list', 'timeGridPlugin' ],
                themeSystem: 'bootstrap',
                locale: 'es',
                isRTL: KTUtil.isRTL(),

                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'timelineCustom,dayGridMonth,timeGridWeek,timeGridDay'
                },

                height: 800,
                contentHeight: 780,
                aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

                nowIndicator: true,
                now: TODAY + 'T09:25:00', // just for demo

                views: {
                        timelineCustom: {
                            type: 'list',
                            buttonText: 'anual',
                            currentRangeUnit: 'month',
                            dateIncrement: { years: 1 },
                            duration: { years: 1 },
                            slotDuration: { month: 12},
                            snapDuration: { years: 1},
                            snapsPerSlot: { month: 12 },
                            slotLabelInterval: { month: 12},
                            slotLabelFormat: { month: 'long' },
                            colCnt: 12,
                            dayCount: 12,
                            allDaySlot: false,
                            slotEventOverlap: true,
                            visibleRange: {
                                start: LAST_YEAR,
                                end: TODAY
                            }
                        },
                        dayGridMonth: { buttonText: 'mensual' },
                        timeGridWeek: { buttonText: 'semanal' },
                        timeGridDay: { buttonText: 'diario' }
                },
                titleFormat: { years: 'numeric' },
                defaultView: 'dayGridMonth',
                defaultDate: TODAY,

                editable: true,
                eventLimit: true, // allow "more" link when too many events
                navLinks: true,
                events: events,

                eventRender: function(info) {
                    var element = $(info.el);

                    if (info.event.extendedProps && info.event.extendedProps.description) {
                        if (element.hasClass('fc-day-grid-event')) {
                            element.data('content', info.event.extendedProps.description);
                            element.data('placement', 'top');
                            KTApp.initPopover(element);
                        } else if (element.hasClass('fc-time-grid-event')) {
                            element.find('.fc-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
                        } else if (element.find('.fc-list-item-title').lenght !== 0) {
                            element.find('.fc-list-item-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
                        }
                    }
                }
            });

            calendar.render();
        }
    };
}();

var KTCalendarSchedule = function() {

    return {
        //main function to initiate the module
        init: function(events, type) {
            var todayDate = moment().startOf('day');
            var YM = todayDate.format('YYYY-MM');
            var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
            var TODAY = todayDate.format('YYYY-MM-DD');
            var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');
            var LAST_YEAR = todayDate.clone().subtract(1, 'year').format('YYYY-MM-DD');
            if (type === 'schedule') {
                var schedule = new FullCalendar.Calendar(document.getElementById('kt_schedule_calendar'), {
                    timeZone: 'America/Caracas',
                    plugins: [ 'bootstrap', 'interaction', 'dayGrid' ],
                    themeSystem: 'bootstrap',
                    locale: 'es',
                    isRTL: KTUtil.isRTL(),
                    header: {
                        left: 'prev,next',
                        center: 'title',
                        right: 'timeGridWeek,timeGridDay'
                    },
                    height: 800,
                    contentHeight: 780,
                    aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio
                    nowIndicator: true,
                    now: TODAY + 'T09:25:00', // just for demo
                    views: {
                        timeGridWeek: { buttonText: 'semanal' },
                        timeGridDay: { buttonText: 'diario' }
                    },
                    titleFormat: { years: 'numeric', month: 'long' },
                    defaultView: 'timeGridDay',
                    defaultDate: TODAY,
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    navLinks: true,
                    events: events,

                    eventRender: function(info) {
                        var element = $(info.el);

                        if (info.event.extendedProps && info.event.extendedProps.description) {
                            if (element.hasClass('fc-day-grid-event')) {
                                element.data('content', info.event.extendedProps.description);
                                element.data('placement', 'top');
                                KTApp.initPopover(element);
                            } else if (element.hasClass('fc-time-grid-event')) {
                                element.find('.fc-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
                            } else if (element.find('.fc-list-item-title').lenght !== 0) {
                                element.find('.fc-list-item-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
                            }
                        }
                    }
                });
                schedule.render();
            } else {
                var calendar = new FullCalendar.Calendar(document.getElementById('kt_schedule_calendar'), {
                    timeZone: 'America/Caracas',
                    plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list', 'timeGridPlugin' ],
                    themeSystem: 'bootstrap',
                    locale: 'es',
                    isRTL: KTUtil.isRTL(),

                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'timeGridWeek,timeGridDay'
                    },

                    height: 800,
                    contentHeight: 780,
                    aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

                    nowIndicator: true,
                    now: TODAY + 'T09:25:00', // just for demo

                    views: {
                        timeGridWeek: { buttonText: 'semanal' },
                        timeGridDay: { buttonText: 'diario' }
                    },
                    titleFormat: { years: 'numeric' },
                    defaultView: 'dayGridMonth',
                    defaultDate: TODAY,

                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    navLinks: true,
                    events: events,

                    eventRender: function(info) {
                        var element = $(info.el);

                        if (info.event.extendedProps && info.event.extendedProps.description) {
                            if (element.hasClass('fc-day-grid-event')) {
                                element.data('content', info.event.extendedProps.description);
                                element.data('placement', 'top');
                                KTApp.initPopover(element);
                            } else if (element.hasClass('fc-time-grid-event')) {
                                element.find('.fc-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
                            } else if (element.find('.fc-list-item-title').lenght !== 0) {
                                element.find('.fc-list-item-title').append('<div class="fc-description">' + info.event.extendedProps.description + '</div>');
                            }
                        }
                    }
                });
                calendar.render();
            }
        }
    };
}();

// Class Initialization
jQuery(document).ready(async function () {
    if (window.location.pathname === '/calendar/school') {
        var events = await fetch('/api/events')
        .then(response => response.json())
        .then(data => {
            return data;
        });
        KTCalendarBasic.init(events, 'calendar');
    }

    if (window.location.pathname.includes('/courses/schedule')) {
        var eventId = parseInt(window.location.href.split('/').pop());
        var scheduleEvents = await fetch('/api/courses/schedule/' + eventId)
        .then(response => response.json())
        .then(data => {
            return data;
        });
        KTCalendarSchedule.init(scheduleEvents, 'schedule');
    }

});
