// import gsap from 'gsap';
// import uikit from ''

export default function foo(formEl, options) {
	const inputNameEl = formEl.querySelector('.form__row-input--name');
	const inputPhoneEl = formEl.querySelector('.form__row-input--phone');
	const inputCheckboxEl = formEl.querySelector('.form__row-checkbox');
	const btnSubmitEl = formEl.querySelector('button.form__submit');

	const validData = {
		name: {
			touched: false,
			error: false,
		},
		phone: {
			touched: false,
			error: false,
		},
		checkbox: {
			touched: true,
			error: false,
		},
	};

	Array.from([inputNameEl, inputPhoneEl, inputCheckboxEl]).forEach(
		(input) =>
			input &&
			['change', 'blur'].forEach((event) =>
				input.addEventListener(event, validateInput)
			)
	);

	formEl.addEventListener('submit', submitForm);

	//* валидация input
	function validateInput(event) {
		const input = event.currentTarget;
		// console.log('input: ', input);

		if (!input) return;

		const inputId = input.id;

		if (inputId.includes('name')) {
			validateName(input);
		}

		if (inputId.includes('phone')) {
			validatePhone(input);
		}

		if (inputId.includes('checkbox')) {
			validateCheckbox(input);
		}

		function validateName(input) {
			validData.name.touched = true;

			//* if inputName valid
			if (input.value.trim() && input.value.trim().length > 0) {
				// tl.play();
				input.classList.remove('error');

				validData.name.error = false;
			} else {
				//* if inputPhone valid

				input.classList.add('error');
				validData.name.error = true;
			}

			validateAll();
		}

		function validatePhone(input) {
			/* const formRow = input.closest('.form__row');
			const errorMsgEl = formRow.querySelector('small.form__row-error'); */
			validData.phone.touched = true;
			console.log('input.value.trim().length: ', input.value.trim().length);

			//* if inputPhone valid
			if (input.value.trim() && input.value.trim().length === 18) {
				input.classList.remove('error');
				validData.phone.error = false;
			} else {
				//* if inputPhone invalid
				input.classList.add('error');
				validData.phone.error = true;
			}

			validateAll();
		}
	}

	function validateCheckbox(input) {
		validData.checkbox.touched = true;

		input.checked
			? (validData.checkbox.error = false)
			: (validData.checkbox.error = true);

		validateAll();
	}

	function validateAll() {
		const isAllValid = Object.values(validData).every(
			(input) => input.touched && !input.error
		);

		btnSubmitEl.disabled = !isAllValid;

		return isAllValid;
	}

	// submissionForm
	function submitForm(event) {
		event.preventDefault();

		if (!validateAll()) {
			return;
		}

		const dataToSubmit = {
			name: inputNameEl.value.trim(),
			phone: inputPhoneEl.value.trim(),
		};
		console.log('dataToSubmit: ', dataToSubmit);
		formEl.reset();
		// console.log('formEl: ', formEl);
	}
}
