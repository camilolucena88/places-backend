"use strict";
import {v4 as uuidv4} from 'uuid';

// Class definition
var KTAppInbox = function () {
    // Private properties
    var _asideEl;
    var _listEl;
    var _viewEl;
    var _replyEl;
    var _asideOffcanvas;
    var _formEl;
    var _mainForm;

    // Private methods
    var _initEditor = function (form, editor) {
        // init editor
        var options = {
            modules: {
                toolbar: {}
            },
            placeholder: 'Escribir mensaje...',
            theme: 'snow'
        };

        // Init editor
        var editor = new Quill('#' + editor, options);

        // Customize editor
        var toolbar = KTUtil.find(form, '.ql-toolbar');
        var editor = KTUtil.find(form, '.ql-editor');

        if (toolbar) {
            KTUtil.addClass(toolbar, 'px-5 border-top-0 border-left-0 border-right-0');
        }

        if (editor) {
            KTUtil.addClass(editor, 'px-8');
        }

        KTUtil.on(form, 'kt_inbox_reply_form', "submit", function (e) {
            //
        })
    }

    var _initForm = function (users, formEl, inboxForm) {
        var formInt = KTUtil.getById(formEl);

        // Init autocompletes
        var toEl = KTUtil.find(formInt, '[name=student]');


        var users_formatted = users.map(function (student) {
            return {
                value: student.user.first_name + ' ' + student.user.last_name,
                email: student.user.email,
                pic: student.user.wagtail_userprofile ? student.user.wagtail_userprofile.avatar : '',
            };
        });
        var tagifyTo = new Tagify(toEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            maxTags: 10,
            blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            whitelist: users_formatted,
            templates: {
                dropdownItem: function (tagData) {
                    try {
                        var html = '';

                        html += '<div class="tagify__dropdown__item">';
                        html += '   <div class="d-flex align-items-center">';
                        html += '       <span class="symbol sumbol-' + (tagData.initialsState ? tagData.initialsState : '') + ' mr-2">';
                        html += '           <span class="symbol-label" style="background-image: url(\'' + (tagData.pic ? tagData.pic : '') + '\')">' + (tagData.initials ? tagData.initials : '') + '</span>';
                        html += '       </span>';
                        html += '       <div class="d-flex flex-column">';
                        html += '           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">' + (tagData.value ? tagData.value : '') + '</a>';
                        html += '           <span class="text-muted font-weight-bold">' + (tagData.email ? tagData.email : '') + '</span>';
                        html += '       </div>';
                        html += '   </div>';
                        html += '</div>';

                        return html;
                    } catch (err) {
                    }
                }
            },
            transformTag: function (tagData) {
                tagData.class = 'tagify__tag tagify__tag--primary';
            },
            dropdown: {
                classname: "color-blue",
                enabled: 1,
                maxItems: 5
            }
        });
        var ccEl = KTUtil.find(formInt, '[name=compose_cc]');
        var tagifyCc = new Tagify(ccEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            maxTags: 10,
            blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            whitelist: users_formatted,
            templates: {
                dropdownItem: function (tagData) {
                    try {
                        var html = '';

                        html += '<div class="tagify__dropdown__item">';
                        html += '   <div class="d-flex align-items-center">';
                        html += '       <span class="symbol sumbol-' + (tagData.initialsState ? tagData.initialsState : '') + ' mr-2" style="background-image: url(\'' + (tagData.pic ? tagData.pic : '') + '\')">';
                        html += '           <span class="symbol-label">' + (tagData.initials ? tagData.initials : '') + '</span>';
                        html += '       </span>';
                        html += '       <div class="d-flex flex-column">';
                        html += '           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">' + (tagData.value ? tagData.value : '') + '</a>';
                        html += '           <span class="text-muted font-weight-bold">' + (tagData.email ? tagData.email : '') + '</span>';
                        html += '       </div>';
                        html += '   </div>';
                        html += '</div>';

                        return html;
                    } catch (err) {
                    }
                }
            },
            transformTag: function (tagData) {
                tagData.class = 'tagify__tag tagify__tag--primary';
            },
            dropdown: {
                classname: "color-blue",
                enabled: 1,
                maxItems: 5
            }
        });
        var bccEl = KTUtil.find(formInt, '[name=compose_bcc]');
        var tagifyBcc = new Tagify(bccEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            maxTags: 10,
            blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            whitelist: [{
                value: 'Chris Muller',
                email: 'chris.muller@wix.com',
                initials: '',
                initialsState: '',
                pic: './assets/media/users/150-11.jpg',
                class: 'tagify__tag--primary'
            }],
            templates: {
                dropdownItem: function (tagData) {
                    try {
                        var html = '';

                        html += '<div class="tagify__dropdown__item">';
                        html += '   <div class="d-flex align-items-center">';
                        html += '       <span class="symbol sumbol-' + (tagData.initialsState ? tagData.initialsState : '') + ' mr-2" style="background-image: url(\'' + (tagData.pic ? tagData.pic : '') + '\')">';
                        html += '           <span class="symbol-label">' + (tagData.initials ? tagData.initials : '') + '</span>';
                        html += '       </span>';
                        html += '       <div class="d-flex flex-column">';
                        html += '           <a href="#" class="text-dark-75 text-hover-primary font-weight-bold">' + (tagData.value ? tagData.value : '') + '</a>';
                        html += '           <span class="text-muted font-weight-bold">' + (tagData.email ? tagData.email : '') + '</span>';
                        html += '       </div>';
                        html += '   </div>';
                        html += '</div>';

                        return html;
                    } catch (err) {
                    }
                }
            },
            transformTag: function (tagData) {
                tagData.class = 'tagify__tag tagify__tag--primary';
            },
            dropdown: {
                classname: "color-blue",
                enabled: 1,
                maxItems: 5
            }
        });

        // // EVENTS
        // // CC input show
        KTUtil.on(formInt, '[data-inbox="cc-show"]', 'click', function (e) {
            var inputEl = KTUtil.find(formInt, '.inbox-to-cc');
            KTUtil.removeClass(inputEl, 'd-none');
            KTUtil.addClass(inputEl, 'd-flex');
            KTUtil.find(formInt, "[name=compose_cc]").focus();
        });

        // CC input hide
        KTUtil.on(formInt, '[data-inbox="cc-hide"]', 'click', function (e) {
            var inputEl = KTUtil.find(formInt, '.inbox-to-cc');
            KTUtil.removeClass(inputEl, 'd-flex');
            KTUtil.addClass(inputEl, 'd-none');
        });

        // BCC input show
        KTUtil.on(formInt, '[data-inbox="bcc-show"]', 'click', function (e) {
            var inputEl = KTUtil.find(formInt, '.inbox-to-bcc');
            KTUtil.removeClass(inputEl, 'd-none');
            KTUtil.addClass(inputEl, 'd-flex');
            KTUtil.find(formInt, "[name=compose_bcc]").focus();
        });
        //
        // // BCC input hide
        KTUtil.on(formInt, '[data-inbox="bcc-hide"]', 'click', function (e) {
            var inputEl = KTUtil.find(formInt, '.inbox-to-bcc');
            KTUtil.removeClass(inputEl, 'd-flex');
            KTUtil.addClass(inputEl, 'd-none');
        });

        // Submitting
        KTUtil.on(formInt, '#submit-notification', 'click', function (e) {
            e.preventDefault();
            var XHR = new XMLHttpRequest();

            var newForm = new FormData(document.getElementById('kt_inbox_reply_form'));

            for (var key of inboxForm.entries()) {
                if (key[0] === 'attachment' && newForm.get('attachment') === '') {
                    newForm.set('attachment', key[1]);
                } else if(key[0] === 'attachment') {
                    newForm.append('attachment', key[1]);
                }
            }
            var studentsArray = [];
            for (var key of newForm.entries()) {

                if (key[0] === 'student') {
                    studentsArray.push(JSON.parse(key[1]).map( function (student) {
                        return student.email;
                    }));
                }
            }

            newForm.set('student',JSON.stringify(studentsArray[0]));

            // Bind the FormData object and the form element
            newForm.set('description',
                document.getElementById('kt_inbox_reply_editor').querySelector('.ql-editor').innerHTML
            );

            // Define what happens on successful data submission
            XHR.addEventListener("loadstart", function (event) {
                document.getElementById('submit-notification').classList.add("spinner", "spinner-white", "spinner-right");
                for (var key of newForm.keys()) {
                    if (key[0] !== 'csrfmiddlewaretoken') {
                        newForm.delete(key[0]);
                    }
                }
            });

            // Define what happens on successful data submission
            XHR.addEventListener("load", function (event) {
                if (XHR.status !== 200) {
                    alertMessage('Hubo un error en el envio, intenta de nuevo.', "alert-danger");
                } else {
                    alertMessage('Enviado exitosamente.', "alert-success");
                    setTimeout(window.location.replace('/communications/notifications/sent'),3000);
                }
            });

            // Define what happens in case of error
            XHR.addEventListener("error", function (event) {
                alertMessage('Hubo un error.', "alert-danger");
            });

            // Define what happens in case of error
            XHR.addEventListener("abort", function (event) {
                alertMessage('El envio fue cancelado por el usuario.', "alert-warning");
            });

            // Set up our request
            XHR.open("POST", "/courses/notifications");
            // The data sent is what the user provided in the form
            XHR.send(newForm);
        });

        KTUtil.on(formInt, '#deleteBtn', 'click', function (e) {
            clearNotification();
        });
    };

    var alertMessage = function (message, className) {
        document.getElementById('submit-notification').classList.remove("spinner", "spinner-white", "spinner-right");
        var alertNotification = document.getElementById('alert-message');
        alertNotification.classList.add(className);
        alertNotification.innerHTML = message;
        alertNotification.style.display = '';
        setTimeout(function () {
            alertNotification.style.display = 'none';
            alertNotification.classList.remove(className);
        }, 3000);
    };

    var clearNotification = function () {
        document.getElementsByTagName('tag')[0].remove();
        document.getElementById('notification_title').value = '';
        document.getElementById('notification_description').value = '';

    };

    var _initAttachments = function (elemId, form) {
        var id = "#" + elemId;

        var newFileName = uuidv4();

        var myDropzone = new Dropzone(id, { // Make the whole body a dropzone
            url: "/courses/documents/upload", // Set the url for your upload script location
            headers: {"X-CSRFToken": KTCookie.getCookie('csrftoken')},
            parallelUploads: 20,
            timeout: 60000,
            uploadMultiple: false,
            maxFilesize: 1, // Max filesize in MB
            clickable: id + "_select", // Define the element that should be used as click trigger to select files.
            renameFile: function (file) {
                return uuidv4();
            }
        });

        myDropzone.on("addedfile", function (file) {
            // Hookup the start button
            localStorage.setItem(file.name, file.upload.filename);
            form.append('attachment', file.upload.filename);
        });
    };

    var _handleForgotForm = function (form) {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validation = FormValidation.formValidation(
            document.getElementById('kt_inbox_reply_form'),
            {
                fields: {
                    compose_subject: {
                        validators: {
                            notEmpty: {
                                message: 'Título es un campo requerido.'
                            }
                        }
                    }
                },
                plugins: {
                    defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                }
            }
        );
    };
    // Public methods
    return {
        // Public functions
        init: function (users) {
            // Init variables
            _replyEl = KTUtil.getById('kt_inbox_reply');
            _formEl = KTUtil.getById('kt_inbox_reply_form');
            _mainForm = new FormData(_formEl);
            // Init handlers
            KTAppInbox.initReply(users);
        },

        initReply: function (users) {
            _initEditor(_replyEl, 'kt_inbox_reply_editor');
            _initAttachments('kt_inbox_reply_attachments', _mainForm);
            _initForm(users, 'kt_inbox_reply_form', _mainForm);
            _handleForgotForm();
        },
    };
}();

// Class Initialization
jQuery(document).ready(async function () {
    var users = await fetch('/api/v1/students')
        .then(response => response.json())
        .then(data => {
            return data;
        })

    KTAppInbox.init(users);
});
