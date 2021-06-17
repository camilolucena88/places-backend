"use strict";

var KTLayoutAsideOffcanvasMenu = function() {
    // Private properties
    var _element;
    var _menuObject;

	// Initialize
	var _init = function() {
		_menuObject = new KTMenu(_element, {
			// Vertical scroll
			scroll: {
    			rememberPosition: true, // remember position on page reload
    			height: function() { // calculate available scrollable area height
                    if (KTUtil.isBreakpointDown('lg')) {
                        return;
                    }
                    
    				var height = parseInt(KTUtil.getViewPort().height);

    				height = height - (parseInt(KTUtil.css(_element, 'marginBottom')) + parseInt(KTUtil.css(_element, 'marginTop')));

    				return height;
    			}
    		},

			// Submenu setup
			submenu: {
				desktop: 'accordion', // menu set to accordion in tablet mode
				tablet: 'accordion', // menu set to accordion in tablet mode
				mobile: 'accordion' // menu set to accordion in mobile mode
			},

			// Accordion setup
			accordion: {
				expandAll: false // allow having multiple expanded accordions in the menu
			}
		});
	}

    // Public methods
	return {
		init: function(id) {
            _element = KTUtil.getById(id);

            if (!_element) {
                return;
            }

            // Initialize menu
            _init();
		},

		getElement: function() {
			return _element;
		},

        getMenu: function() {
			return _menuObject;
		},

		closeMobileOffcanvas: function() {
			if (_menuObject && KTUtil.isMobileDevice()) {
				_menuObject.hide();
			}
		}
	};
}();

// Webpack support
if (typeof module !== 'undefined') {
	module.exports = KTLayoutAsideOffcanvasMenu;
}
