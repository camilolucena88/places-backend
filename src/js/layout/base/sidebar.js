"use strict";

var KTLayoutSidebar = function() {
    // Private properties
    var _element;
    var _offcanvasObject;
    var _toggleObject;

    // Private functions
    var _initContent = function() {
        var header = KTUtil.find(_element, '.sidebar-header');
        var wrapper = KTUtil.find(_element, '.sidebar-wrapper');
        var content = KTUtil.find(_element, '.sidebar-content');

        KTUtil.scrollInit(wrapper, {
            disableForMobile: true,
            resetHeightOnDestroy: true,
            handleWindowResize: true,
            height: function() {
                var height = parseInt(KTUtil.getViewPort().height);

                if (header) {
                    height = height - parseInt(KTUtil.actualHeight(header));
                    height = height - parseInt(KTUtil.css(header, 'marginTop'));
                    height = height - parseInt(KTUtil.css(header, 'marginBottom'));
                }

                if (content) {
                    height = height - parseInt(KTUtil.css(content, 'marginTop'));
                    height = height - parseInt(KTUtil.css(content, 'marginBottom'));
                    height = height - parseInt(KTUtil.css(content, 'paddingTop'));
                    height = height - parseInt(KTUtil.css(content, 'paddingBottom'));
                }

                height = height - parseInt(KTUtil.css(_element, 'paddingTop'));
                height = height - parseInt(KTUtil.css(_element, 'paddingBottom'));

                height = height - 2;

                return height;
            }
        });
    }

    var _initOffcanvas = function() {
        _offcanvasObject = new KTOffcanvas(_element, {
            overlay: true,
            baseClass: 'sidebar',
            placement: 'right',
            closeBy: 'kt_sidebar_close',
            toggleBy: {
				target: 'kt_sidebar_toggle_mobile',
				state: 'active'
			}
        });
    }

    var _initToggle = function() {
        _toggleObject = new KTToggle(KTUtil.getById('kt_sidebar_toggle'), KTUtil.getBody(), {
            targetToggleMode: 'attribute',
			targetState: 'sidebar',
			toggleState: 'active'
		});
    }

    // Public methods
    return {
        init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize
            _initContent();
            _initOffcanvas();
            _initToggle();
        },

        getElement: function() {
            return _element;
        }
    };
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutSidebar;
}
