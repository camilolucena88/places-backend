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
				console.log(validator)
				validator.validate().then(function (status) {
					if (status == 'Valid') {
						wizard.goTo(wizard.getNewStep());

						KTUtil.scrollTop();
					} else {
						console.log(status)
						Swal.fire({
							text: "Sorry, looks like there are some errors detected, please try again.",
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
				KTUtil.getById('form_input_name').innerText = _formEl.elements.namedItem('name').value;
				KTUtil.getById('form_input_address').innerText = _formEl.elements.namedItem('address').value;
				KTUtil.getById('form_input_telephone').innerText = _formEl.elements.namedItem('telephone').value;
				KTUtil.getById('form_input_city').innerText = _formEl.elements.namedItem('city').value;
				KTUtil.getById('form_input_country').innerText = _formEl.elements.namedItem('country').value;
				KTUtil.getById('form_input_business_email').innerText = _formEl.elements.namedItem('business_email').value;
			}
		});

		// Submit event
		_wizardObj.on('submit', function (wizard) {
			Swal.fire({
				text: "All is good! Please confirm the form submission.",
				icon: "success",
				showCancelButton: true,
				buttonsStyling: false,
				confirmButtonText: "Yes, submit!",
				cancelButtonText: "No, cancel",
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
		_validations.push(FormValidation.formValidation(
			_formEl,
			{
				fields: {
					name: {
						validators: {
							notEmpty: {
								message: 'Name is required'
							},
							stringLength: {
								min: 4,
								max: 30,
								message: 'Name must be more than 6 and less than 30 characters.',
							},
						}
					},
					description: {
						validators: {
							notEmpty: {
								message: 'Description is a required field'
							},
							stringLength: {
								min: 20,
								max: 300,
								message: 'Description must be more than 20 and less than 300 characters.',
							},
						},
					},
					slug: {
						validators: {
							notEmpty: {
								message: 'Slug is required'
							},
							stringLength: {
								min: 4,
								max: 16,
								message: 'Slug must be more than 4 and less than 12 characters.',
							},
                            regexp: {
								regexp: /^[a-zA-Z0-9-]+$/,
								message: '' +
									'Slug can only consist of alphabetic, number, and underscore',
							},
                            stringCase: {
                                message: 'The Slug must be in lowercase',
                                'case': 'lower'
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
								message: 'Phone number is required field'
							}
						}
					},
					country: {
						validators: {
							notEmpty: {
								message: 'Phone number is required field'
							}
						}
					},
					address: {
						validators: {
							notEmpty: {
								message: 'Address is a required field'
							}
						}
					},
					city: {
						validators: {
							notEmpty: {
								message: 'The city is a required field'
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
					business_type: {
						validators: {
							notEmpty: {
								message: 'Business Type should be selected'
							}
						}
					},
					sector: {
						validators: {
							notEmpty: {
								message: 'The Sector should be selected'
							}
						}
					},
					account_type: {
						validators: {
							notEmpty: {
								message: 'Account Type should be selected'
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
