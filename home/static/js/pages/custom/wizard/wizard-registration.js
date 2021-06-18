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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/pages/custom/wizard/wizard-registration.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/pages/custom/wizard/wizard-registration.js":
/*!***********************************************************!*\
  !*** ./src/js/pages/custom/wizard/wizard-registration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KTWizardRegistration = function () {
    let _wizardEl;
	let _formEl;
	let _wizardObj;
	let _validations = [];

	const _initWizard = () => {
		_wizardObj = new KTWizard(_wizardEl, {
			startStep: 1, // initial active step number
			clickableSteps: false  // allow step clicking
		});

        _wizardObj.on('change', function (wizard) {
			if (wizard.getStep() > wizard.getNewStep()) {
				return; // Skip if stepped back
			}

			// Validate form before change wizard step
			var validator = _validations[wizard.getStep() - 1]; // get validator for currnt step

			if (validator) {
				validator.validate().then(function (status) {
					if (status === 'Valid') {
						wizard.goTo(wizard.getNewStep());

						KTUtil.scrollTop();
					} else {
						Swal.fire({
							text: "Lo siento, tienes algunos campos sin completar",
							icon: "error",
							buttonsStyling: false,
							confirmButtonText: "Ok!",
							customClass: {
								confirmButton: "btn font-weight-bold btn-light"
							}
						}).then(function () {
							KTUtil.scrollTop();
						});
					}
				});
			}

			return false;  // Do not change wizard step, further action will be handled by he validator
		});
        		// Change event
		_wizardObj.on('changed', function (wizard) {
			KTUtil.scrollTop();
		});

		// Submit event
		_wizardObj.on('submit', function (wizard) {
			Swal.fire({
				text: "Todo esta bien! Por favor enviar la solicitud.",
				icon: "success",
				showCancelButton: true,
				buttonsStyling: false,
				confirmButtonText: "Si, enviarlo!",
				cancelButtonText: "No, cancelar",
				customClass: {
					confirmButton: "btn font-weight-bold btn-primary",
					cancelButton: "btn font-weight-bold btn-default"
				}
			}).then(function (result) {
				if (result.value) {
					_formEl.submit(); // Submit form
				} else if (result.dismiss === 'cancel') {
					Swal.fire({
						text: "El formulario no ha sido enviado!.",
						icon: "error",
						buttonsStyling: false,
						confirmButtonText: "Ok!",
						customClass: {
							confirmButton: "btn font-weight-bold btn-primary",
						}
					});
				}
			});
		});
    }

    const _initValidation = () => {
				// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
		// Step 1
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					username: {
						validators: {
							notEmpty: {
								message: 'Usuario es un campo requerido'
							}
						}
					},
					email: {
						validators: {
							notEmpty: {
								message: 'Email es un campo requerido'
							},
							emailAddress: {
								message: 'Ingresa un email valido'
							}
						}
					},
					first_name: {
						validators: {
							notEmpty: {
								message: 'Primer nombre es un campo requerido'
							}
						}
					},
					last_name: {
						validators: {
							notEmpty: {
								message: 'Apellido es un campo requerido'
							}
						}
					},
					password: {
						validators: {
							notEmpty: {
								message: 'Contrasena es un campo requerido'
							}
						}
					},
					password2: {
						validators: {
							notEmpty: {
								message: 'Necesita verificar la contrasena es un campo requerido'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap({
						//eleInvalidClass: '',
						eleValidClass: '',
					})
				}
			}
		));

        // Step 2
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					telephone: {
						validators: {
							notEmpty: {
								message: 'Numero de telefono es requerido'
							}
						}
					},
					country: {
						validators: {
							notEmpty: {
								message: 'Numero de telefono es requerido'
							}
						}
					},
					address: {
						validators: {
							notEmpty: {
								message: 'Direccion es un campo requerido'
							}
						}
					},
					city: {
						validators: {
							notEmpty: {
								message: 'La ciudad es un campo requerido'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap({
						//eleInvalidClass: '',
						eleValidClass: '',
					})
				}
			}
		));

        // Step 3
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					course: {
						validators: {
							notEmpty: {
								message: 'Selecciona el curso'
							}
						}
					},
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap({
						//eleInvalidClass: '',
						eleValidClass: '',
					})
				}
			}
		));

				// Step 4
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					username: {
						validators: {
							notEmpty: {
								message: 'Address is required'
							}
						}
					},
					email: {
						validators: {
							notEmpty: {
								message: 'Email is required'
							},
                            emailAddress: {
								message: 'Email should be valid'
							}
						}
					},
					first_name: {
						validators: {
							notEmpty: {
								message: 'First Name is required'
							}
						}
					},
					last_name: {
						validators: {
							notEmpty: {
								message: 'Last name is required'
							}
						}
					},
					password: {
						validators: {
							notEmpty: {
								message: 'Password is required'
							}
						}
					},
					password2: {
						validators: {
							notEmpty: {
								message: 'Verifica is required'
							}
						}
					},
					telephone: {
						validators: {
							notEmpty: {
								message: 'Telephone is required'
							}
						}
					},
					address: {
						validators: {
							notEmpty: {
								message: 'Address is required'
							}
						}
					},
					city: {
						validators: {
							notEmpty: {
								message: 'City is required'
							}
						}
					},
					country: {
						validators: {
							notEmpty: {
								message: 'Country is required'
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap({
						//eleInvalidClass: '',
						eleValidClass: '',
					})
				}
			}
		));

        return {
		// public functions
		init: function () {
			_wizardEl = KTUtil.getById('kt_registration_wizard');
			_formEl = KTUtil.getById('kt_registration_form');

			_initWizard();
			_initValidation();
		}
	};
	}
}

jQuery(document).ready(function () {
	KTWizardRegistration.init();
});

/***/ })

/******/ });
//# sourceMappingURL=wizard-registration.js.map