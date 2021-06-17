"use strict";

var KTLayoutAsideOffcanvas = function() {
    // Private properties
    var _body;
    var _element;
    var _offcanvasObject;

    // Private functions
	// Initialize
	var _initOffcanvas = function() {
        // Initialize mobile aside offcanvas
		_offcanvasObject = new KTOffcanvas(_element, {
			baseClass: 'aside-offcanvas',
			overlay: true,
			closeBy: 'kt_aside_offcanvas_close',
			toggleBy: [{
				target: 'kt_aside_offcanvas_toggle',
				state: 'active'
			}, {
				target: 'kt_aside_offcanvas_toggle_mobile',
				state: 'active'
			}]
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);
            _body = KTUtil.getBody();

            if (!_element) {
                return;
            }

            // Initialize
            _initOffcanvas();
        },

        getElement: function() {
            return _element;
        },

        getOffcanvas: function() {
            return _offcanvasObject;
        }
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAsideOffcanvas;
}
