"use strict";
var KTDualListbox = {
    init: function() {
        var optionRequest = function (payload) {
            var header = new Headers();
            header.append('Content-type', 'application/json');
            header.append('X-CSRFToken', KTCookie.getCookie('csrftoken'));
            let url = '/api/activities/question/options/correct';
            let request = new Request(url, {
                headers: header,
                body: JSON.stringify(payload),
                method: 'POST'
            });

            fetch(request)
            .then((res) => console.log(
                res.json()
                )
            )
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        var t;
        t = document.getElementById("kt_dual_listbox_1"),
        new DualListbox(t,{
            addEvent: function(t) {
                optionRequest({
                    'option': t,
                    'is_correct': true
                })
            },
            removeEvent: function(t) {
                optionRequest({
                    'option': t,
                    'is_correct': false
                })
            },
            availableTitle: "Opciones",
            selectedTitle: "Respuesta Correctas",
            addButtonText: "Agregar",
            removeButtonText: "Eliminar",
            addAllButtonText: "Agregar todas",
            removeAllButtonText: "Eliminar todas"
        }),
        function() {
            var t = document.getElementById("kt_dual_listbox_2");
            new DualListbox(t,{
                addEvent: function(t) {
                    console.log(t)
                },
                removeEvent: function(t) {
                    console.log(t)
                },
                availableTitle: "Source Options",
                selectedTitle: "Destination Options",
                addButtonText: "<i class='flaticon2-next'></i>",
                removeButtonText: "<i class='flaticon2-back'></i>",
                addAllButtonText: "<i class='flaticon2-fast-next'></i>",
                removeAllButtonText: "<i class='flaticon2-fast-back'></i>"
            })
        }(),
        function() {
            var t = document.getElementById("kt_dual_listbox_3");
            new DualListbox(t,{
                addEvent: function(t) {
                    optionRequest({
                        'value': t,
                        'correct_option': true
                    })
                },
                removeEvent: function(t) {
                    optionRequest({
                        'value': t,
                        'correct_option': false
                    })
                },
                availableTitle: "Opciones",
                selectedTitle: "Respuesta Correctas",
                addButtonText: "Agregar",
                removeButtonText: "Eliminar",
                addAllButtonText: "Agregar todas",
                removeAllButtonText: "Eliminar todas"
            })
        }(),
        function() {
            var t = document.getElementById("kt_dual_listbox_4");
            new DualListbox(t,{
                addEvent: function(t) {
                    console.log(t)
                },
                removeEvent: function(t) {
                    console.log(t)
                },
                availableTitle: "Available options",
                selectedTitle: "Selected options",
                addButtonText: "Add",
                removeButtonText: "Remove",
                addAllButtonText: "Add All",
                removeAllButtonText: "Remove All"
            }).search.classList.add("dual-listbox__search--hidden")
        }()
    }
};
window.addEventListener("load", (function() {
    KTDualListbox.init()
}
));
