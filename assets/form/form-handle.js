// import uikit from ''
import sendMail from '../sendMail/sendMail';
import handleModal from '../modal/modal-handle';
import { showLoader, hideLoader } from '../loader/handleLoader';

export default function foo(formEl, title, selector) {
	const { openModal, closeModal } = handleModal(title, selector);

	const modalEl = document.querySelector(selector);
	const modalContentEl = modalEl.querySelector('.modal__content');

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
	async function submitForm(event) {
		let modalContentElInner = null;
		try {
			event.preventDefault();

			//* если не валидны все поля - выходим из функции
			if (!validateAll()) {
				return;
			}

			//* находим текущую открытую модалка и закрываем ее
			const { openModal: openCurrentModal, closeModal: closeCurrentModal } =
				handleModal(null, '.modal.open');

			closeCurrentModal();

			modalContentEl.classList.add('without-footer');

			// данные для отправки
			const dataToSubmit = {
				name: inputNameEl.value.trim(),
				phone: inputPhoneEl.value.trim(),
				title,
			};
			console.log('dataToSubmit: ', dataToSubmit);

			const start = +new Date();
			showLoader();

			//* работает, потом раскомментить
			const response = await sendMail(dataToSubmit);
			// isLoading.value = false;
			// console.log('response: ', response);
			const end = +new Date();

			const diff = Math.round((end - start) / 1000);
			// console.log('diff: ', diff);

			if (diff >= 15) {
				throw new Error(' превышено время на запрос');
			}

			const {
				openModal: openModalNotification,
				closeModal: closeModalNotification,
			} = handleModal(null, '#modal');

			modalContentElInner = document.querySelector('#modal .modal__content');

			modalContentElInner.querySelector('.header-modal__title').textContent =
				'Отправка формы';

			modalContentElInner.querySelector('.modal__body p').textContent =
				'Форма отправлена успешна, мы свяжемся с вами в ближайшее время!';
			modalContentElInner.classList.add('success');

			openModalNotification();

			// console.log('formEl: ', formEl);
		} catch (error) {
			console.warn(`💣💣💣, произошла ошибка ${error?.message ?? error}`);

			modalContentElInner.querySelector('.modal__body p').textContent =
				'Произошла какая-то ошибка. Попробуйте, пожалуйста, позже!';
			modalContentElInner.classList.add('error');
		} finally {
			formEl.reset();
			hideLoader();
		}
	}
}
