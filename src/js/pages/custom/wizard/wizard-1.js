"use strict";

// Class definition
var KTWizard1 = function () {
	// Base elements
	var _wizardEl;
	var _formEl;
	var _wizardObj;
	var _validations = [];

	// Private functions
	var _initWizard = function () {
		// Initialize form wizard
		_wizardObj = new KTWizard(_wizardEl, {
			startStep: 1, // initial active step number
			clickableSteps: true  // allow step clicking
		});

		// Validation before going to next page
		_wizardObj.on('change', function (wizard) {
			if (wizard.getStep() > wizard.getNewStep()) {
				return; // Skip if stepped back
			}

			// Validate form before change wizard step
			var validator = _validations[wizard.getStep() - 1]; // get validator for currnt step

			if (validator) {
				validator.validate().then(function (status) {
					if (status == 'Valid') {
						wizard.goTo(wizard.getNewStep());

						KTUtil.scrollTop();
					} else {
						Swal.fire({
							text: "Lo siento, parece que se han detectado algunos errores, inténtelo de nuevo.",
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
			if (_wizardObj.isLastStep()) {
				KTUtil.getById('form_input_username').innerText = _formEl.elements.namedItem('username').value;
				KTUtil.getById('form_input_first_name').innerText = _formEl.elements.namedItem('first_name').value;
				KTUtil.getById('form_input_last_name').innerText = _formEl.elements.namedItem('last_name').value;
				KTUtil.getById('form_input_email').innerText = _formEl.elements.namedItem('email').value;
				KTUtil.getById('form_input_address').innerText = _formEl.elements.namedItem('address').value;
				KTUtil.getById('form_input_telephone').innerText = _formEl.elements.namedItem('telephone').value;
				KTUtil.getById('form_input_city').innerText = _formEl.elements.namedItem('city').value;
				KTUtil.getById('form_input_country').innerText = _formEl.elements.namedItem('country').value;
				KTUtil.getById('form_input_course').innerText = _formEl.elements.namedItem('current_course').value;
			}
		});

		// Submit event
		_wizardObj.on('submit', function (wizard) {
			Swal.fire({
				text: "¡Todo esta correcto! Confirme el envío del formulario.",
				icon: "success",
				showCancelButton: true,
				buttonsStyling: false,
				confirmButtonText: "Si, enviar!",
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
						text: "Your form has not been submitted!.",
						icon: "error",
						buttonsStyling: false,
						confirmButtonText: "Ok, got it!",
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
		const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
		const csrfcookie = KTCookie.getCookie('csrftoken')
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					username: {
						validators: {
							notEmpty: {
								message: 'Usuario es un campo requerido'
							},
							remote: {
								data: {
									'csrfmiddlewaretoken': csrftoken
								},
								message: 'Este usuario ya esta tomado, prueba con otro.',
								method: 'POST',
								url: '/api/verify/username',
							},
							stringLength: {
								min: 6,
								max: 30,
								message: 'El nombre de usuario debe tener más de 6 y menos de 30 caracteres.',
							},
							regexp: {
								regexp: /^[a-zA-Z0-9_]+$/,
								message: '' +
									'El nombre de usuario solo puede constar de alfabético, número y guión bajo',
							},
						}
					},
					email: {
						validators: {
							notEmpty: {
								message: 'Email es un campo requerido'
							},
							emailAddress: {
								message: 'Ingresa un email valido'
							},
							remote: {
								header: {
									'Content-Type': 'application/json',
									"Access-Control-Allow-Origin": "*"
								},
								data: {
									'csrfmiddlewaretoken': csrftoken
								},
								message: 'Ya existe un usuario con este email',
								method: 'POST',
								url: '/api/verify/email',
							},
						},
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
					password1: {
						validators: {
							notEmpty: {
								message: 'Contrasena es un campo requerido'
							}
						}
					},
					password2: {
						validators: {
							identical: {
								compare: function() {
									return _formEl.elements.namedItem('password1').value;
								},
								message: 'La contraseñas no son iguales, verifica que sean iguales'
                        	}
						}
					},
				},
				plugins: {
						trigger: new FormValidation.plugins.Trigger(),
						bootstrap: new FormValidation.plugins.Bootstrap({
							//eleInvalidClass: '',
							eleValidClass: '',
						}),
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
							},
							phone: {
								country: 'VE',
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
					student_address: {
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


	return {
		// public functions
		init: function () {
			_wizardEl = KTUtil.getById('kt_wizard');
			_formEl = KTUtil.getById('kt_form');

			_initWizard();
			_initValidation();
		}
	};
}();

jQuery(document).ready(function () {
	KTWizard1.init();
});
