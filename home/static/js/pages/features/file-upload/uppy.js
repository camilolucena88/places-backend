/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/features/file-upload/uppy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pages/features/file-upload/uppy.js":
/*!***************************************************!*\
  !*** ./src/js/pages/features/file-upload/uppy.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Class definition
var KTUppy = function () {
	const ProgressBar = Uppy.ProgressBar;
	const StatusBar = Uppy.StatusBar;
	const FileInput = Uppy.FileInput;
	const Informer = Uppy.Informer;
	const XHRUpload = Uppy.XHRUpload

	// to get uppy companions working, please refer to the official documentation here: https://uppy.io/docs/companion/
	const Dashboard = Uppy.Dashboard;
	const Dropbox = Uppy.Dropbox;
	const GoogleDrive = Uppy.GoogleDrive;
	const Instagram = Uppy.Instagram;
	const Webcam = Uppy.Webcam;
	const uploadContainer = document.querySelector('#upload-list');
	const imageId = document.querySelector('#id_img')
	const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
	const csrfcookie = KTCookie.getCookie('csrftoken')

	// Private functions
	var initUppy1 = function(){
		var id = '#kt_uppy_1';

		var options = {
			proudlyDisplayPoweredByUppy: false,
			target: id,
			inline: true,
			replaceTargetContent: true,
			showProgressDetails: true,
			note: 'No filetype restrictions.',
			height: 470,
			metaFields: [
				{ id: 'name', name: 'Name', placeholder: 'file name' },
				{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
			],
			browserBackButtonClose: true
		}

		var uppyDashboard = Uppy.Core({
			autoProceed: true,
			restrictions: {
				maxFileSize: 2000000, // 1mb
				maxNumberOfFiles: 1,
				minNumberOfFiles: 1
			}
		});

		uppyDashboard.use(Dashboard, options);
		uppyDashboard.use(XHRUpload, {
			method: 'post',
			metafields: ['csrfmiddlewaretoken'],
			endpoint: '/admin/images/multiple/add/',
			formData: true,
			fieldName: 'files[]',
			headers: {
				"X-CSRFToken": KTCookie.getCookie('csrftoken'),
				"X-Requested-With": "XMLHttpRequest"
			}
		})
		uppyDashboard.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
		uppyDashboard.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
		uppyDashboard.use(Webcam, { target: Dashboard });

		uppyDashboard.on('upload-success', (file, response) => {
			// do something with file and response

			if (response.status === 200) {
				const responseJson = response.body.form;
				if (uploadContainer.className === '') {
					uploadContainer.classList = 'upload-success'
					uploadContainer.innerHTML = uploadContainer.innerHTML + responseJson
					imageId.value = response.body.image_id
				} else {
					uploadContainer.innerHTML = ''
					uploadContainer.innerHTML = uploadContainer.innerHTML + responseJson
					imageId.value = response.body.image_id
				}


				uploadContainer.querySelector('.delete').addEventListener('click', function(event) {
					event.preventDefault();
					const CSRFToken = document.querySelector('[name=csrfmiddlewaretoken]').value
					$.post(event.target.href, {csrfmiddlewaretoken: CSRFToken}, function(data) {
						if (data.success) {
							uploadContainer.remove()
						}
					});
				});
			}
		})
	}


	return {
		// public functions
		init: function() {
			initUppy1();

			setTimeout(function() {
				swal.fire({
					"title": "Notice",
					"html": "Uppy demos uses <b>https://master.tus.io/files/</b> URL for resumable upload examples and your uploaded files will be temporarely stored in <b>tus.io</b> servers.",
					"type": "info",
					"buttonsStyling": false,
					"confirmButtonClass": "btn btn-primary",
					"confirmButtonText": "Ok, I understand",
					"onClose": function(e) {
						console.log('on close event fired!');
					}
				});
			}, 2000);
		}
	};
}();

KTUtil.ready(function() {
	KTUppy.init();
});


/***/ })

/******/ });
//# sourceMappingURL=uppy.js.map