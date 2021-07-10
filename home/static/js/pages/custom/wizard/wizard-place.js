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
				KTUtil.getById('form_input_listing_name').innerText = _formEl.elements.namedItem('name').value;
				KTUtil.getById('form_input_listing_description').innerText = _formEl.elements.namedItem('description').value;
				KTUtil.getById('form_input_listing_slug').innerText = _formEl.elements.namedItem('slug').value;
				KTUtil.getById('form_input_listing_genres').innerText = _formEl.elements.namedItem('genres').value;
				KTUtil.getById('form_input_listing_telephone').innerText = _formEl.elements.namedItem('telephone').value;
				KTUtil.getById('form_input_listing_longitude').innerText = _formEl.elements.namedItem('longitude').value;
				KTUtil.getById('form_input_listing_latitude').innerText = _formEl.elements.namedItem('latitude').value;
				KTUtil.getById('form_input_listing_address').innerText = _formEl.elements.namedItem('address').value;
				KTUtil.getById('form_input_listing_city').innerText = _formEl.elements.namedItem('city').value;
				KTUtil.getById('form_input_listing_country').innerText = _formEl.elements.namedItem('country').value;

				if(_formEl.elements.namedItem('monday').value === '1') {
					KTUtil.getById('form_listing_monday_opening').innerText = _formEl.elements.namedItem('monday_opening').value;
					KTUtil.getById('form_listing_monday_closing').innerText = _formEl.elements.namedItem('monday_closing').value;
				} else if (_formEl.elements.namedItem('monday').value === '2') {
					KTUtil.getById('form_listing_monday_opening').innerText = 'Open all day (24 hrs)';
					KTUtil.getById('form_listing_monday_closing').innerText = '';
				} else {
					KTUtil.getById('form_listing_monday_opening').innerText = 'Closed';
					KTUtil.getById('form_listing_monday_closing').innerText = '';
				}

				if(_formEl.elements.namedItem('tuesday').value === '1') {
					KTUtil.getById('form_listing_tuesday_opening').innerText = _formEl.elements.namedItem('tuesday_opening').value;
					KTUtil.getById('form_listing_tuesday_closing').innerText = _formEl.elements.namedItem('tuesday_closing').value;
				} else if (_formEl.elements.namedItem('tuesday').value === '2') {
					KTUtil.getById('form_listing_tuesday_opening').innerText = 'Open all day (24 hrs)';
					KTUtil.getById('form_listing_tuesday_closing').innerText = '';
				} else {
					KTUtil.getById('form_listing_tuesday_opening').innerText = 'Closed';
					KTUtil.getById('form_listing_tuesday_closing').innerText = '';
				}

				if(_formEl.elements.namedItem('wednesday').value === '1') {
					KTUtil.getById('form_listing_wednesday_opening').innerText = _formEl.elements.namedItem('wednesday_opening').value;
					KTUtil.getById('form_listing_wednesday_closing').innerText = _formEl.elements.namedItem('wednesday_closing').value;
				} else if (_formEl.elements.namedItem('wednesday').value === '2') {
					KTUtil.getById('form_listing_wednesday_opening').innerText = 'Open all day (24 hrs)';
					KTUtil.getById('form_listing_wednesday_closing').innerText = '';
				} else {
					KTUtil.getById('form_listing_wednesday_opening').innerText = 'Closed';
					KTUtil.getById('form_listing_wednesday_closing').innerText = '';
				}

				if(_formEl.elements.namedItem('thursday').value === '1') {
					KTUtil.getById('form_listing_thursday_opening').innerText = _formEl.elements.namedItem('thursday_opening').value;
					KTUtil.getById('form_listing_thursday_closing').innerText = _formEl.elements.namedItem('thursday_closing').value;
				} else if (_formEl.elements.namedItem('thursday').value === '2') {
					KTUtil.getById('form_listing_thursday_opening').innerText = 'Open all day (24 hrs)';
					KTUtil.getById('form_listing_thursday_closing').innerText = '';
				} else {
					KTUtil.getById('form_listing_thursday_opening').innerText = 'Closed';
					KTUtil.getById('form_listing_thursday_closing').innerText = '';
				}

				if(_formEl.elements.namedItem('friday').value === '1') {
					KTUtil.getById('form_listing_friday_opening').innerText = _formEl.elements.namedItem('friday_opening').value;
					KTUtil.getById('form_listing_friday_closing').innerText = _formEl.elements.namedItem('friday_closing').value;
				} else if (_formEl.elements.namedItem('friday').value === '2') {
					KTUtil.getById('form_listing_friday_opening').innerText = 'Open all day (24 hrs)';
					KTUtil.getById('form_listing_friday_closing').innerText = '';
				} else {
					KTUtil.getById('form_listing_friday_opening').innerText = 'Closed';
					KTUtil.getById('form_listing_friday_closing').innerText = '';
				}

				if(_formEl.elements.namedItem('saturday').value === '1') {
					KTUtil.getById('form_listing_saturday_opening').innerText = _formEl.elements.namedItem('saturday_opening').value;
					KTUtil.getById('form_listing_saturday_closing').innerText = _formEl.elements.namedItem('saturday_closing').value;
				} else if (_formEl.elements.namedItem('saturday').value === '2') {
					KTUtil.getById('form_listing_saturday_opening').innerText = 'Open all day (24 hrs)';
					KTUtil.getById('form_listing_saturday_closing').innerText = '';
				} else {
					KTUtil.getById('form_listing_saturday_opening').innerText = 'Closed';
					KTUtil.getById('form_listing_saturday_closing').innerText = '';
				}

				if(_formEl.elements.namedItem('sunday').value === '1') {
					KTUtil.getById('form_listing_sunday_opening').innerText = _formEl.elements.namedItem('sunday_opening').value;
					KTUtil.getById('form_listing_sunday_closing').innerText = _formEl.elements.namedItem('sunday_closing').value;
				} else if (_formEl.elements.namedItem('sunday').value === '2') {
					KTUtil.getById('form_listing_sunday_opening').innerText = 'Open all day (24 hrs)';
					KTUtil.getById('form_listing_sunday_closing').innerText = '';
				} else {
					KTUtil.getById('form_listing_sunday_opening').innerText = 'Closed';
					KTUtil.getById('form_listing_sunday_closing').innerText = '';
				}

				const imgId = _formEl.elements.namedItem('img').value;
				KTUtil.getById('form_listing_img').innerText = imgId;
				KTUtil.getById('form_listing_img_name').innerText = _formEl.elements.namedItem('image-'+ imgId +'-title').value;
				KTUtil.getById('form_listing_img_tag').innerText = _formEl.elements.namedItem('image-'+ imgId +'-tags').value;
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
								max: 65,
								message: 'Name must be more than 6 and less than 65 characters.',
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
								max: 30,
								message: 'Slug must be more than 4 and less than 30 characters.',
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
					img: {
						validators: {
							notEmpty: {
								message: 'Image cannot be empty'
							}
						}
					},
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap({
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
					monday: {
						validators: {
							notEmpty: {
								message: 'Business Type should be selected'
							}
						}
					},
					tuesday: {
						validators: {
							notEmpty: {
								message: 'Business Type should be selected'
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
