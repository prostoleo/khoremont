// import uikit from ''
// import sendMail from '../sendMail/sendMail';
import handleModal from '../modal/modal-handle';
import { showLoader, hideLoader } from '../loader/handleLoader';

export default function handleForm(formEl, title, selector) {
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
			// console.log('input.value.trim().length: ', input.value.trim().length);

			//* if inputPhone valid
			/* if (input.value.trim() && input.value.trim().length === 18) {
				input.classList.remove('error');
				validData.phone.error = false;
			} else {
				//* if inputPhone invalid
				input.classList.add('error');
				validData.phone.error = true;
			} */
			const regexp = /^[0-9" "\-+()]+$/gm;
			const regExpTest = regexp.test(input.value);

			if (input.value.trim() && regExpTest) {
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
		console.log(`submit`);
		debugger;
		let modalContentElInner = null;
		try {
			event.preventDefault();

			//* если не валидны все поля - выходим из функции
			if (!validateAll()) {
				return;
			}

			//* находим текущую открытую модалка и закрываем ее
			const { openModal: openCurrentModal, closeModal: closeCurrentModal } =
				handleModal(null, '.modal-form');

			closeCurrentModal();

			modalContentEl.classList.add('without-footer');

			// данные для отправки
			/* const dataToSubmit = {
				name: inputNameEl.value.trim(),
				// email: `не указан`,
				// subjec
				phone: inputPhoneEl.value.trim(),
				title,
			}; */
			const dataToSubmit = {
				name: inputNameEl.value.trim(),
				email: `не указан`,
				phone: inputPhoneEl.value.trim(),
				subject: `Заявка с сайта renovation-khoremont`,
				fromWebsite: `https://khoremont-renovation.netlify.app/`,
				// title,
			};
			/* const dataToSubmit = new FormData();

			dataToSubmit.append('name', inputNameEl.value.trim());
			dataToSubmit.append('email', `не указан`);
			dataToSubmit.append('phone', inputPhoneEl.value.trim());
			dataToSubmit.append('subject', `Заявка с сайта renovation-khoremont`);
			dataToSubmit.append(
				'fromWebsite',
				`https://khoremont-renovation.netlify.app/`
			); */
			console.log('dataToSubmit: ', dataToSubmit);

			const start = +new Date();
			showLoader();

			//* работает, потом раскомментить
			// const response = await sendMail(dataToSubmit);

			const response = await fetch(
				`https://functions.yandexcloud.net/d4ektmdocmfsls83f9r4`,
				{
					method: 'POST',
					headers: {
						Accept: '/',
						// 'Content-type': 'application/x-www-form-urlencoded',
						// 'Content-Type': 'application/json; charset=utf-8',
						// 'Content-Type': 'application/json',
						'Content-Type': 'text/plain',
					},
					// body: dataToSubmit,
					body: JSON.stringify(dataToSubmit),
				}
			);
			/* axios({
				method: 'post',
				url: 'https://functions.yandexcloud.net/d4ektmdocmfsls83f9r4',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					name: inputNameEl.value.trim(),
					email: `не указан`,
					phone: inputPhoneEl.value.trim(),
					subject: `Заявка с сайта renovation-khoremont`,
					fromWebsite: `https://khoremont-renovation.netlify.app/`,
				},
			})
				.then((response) => {
					console.log('response: ', response);
					// console.log();
				})
				.catch((err) => {
					console.warn(err);
				}); */

			// isLoading.value = false;
			// console.log('response: ', response);
			const end = +new Date();

			const diff = Math.round((end - start) / 1000);
			// console.log('diff: ', diff);

			const {
				openModal: openModalNotification,
				closeModal: closeModalNotification,
			} = handleModal(null, '#modal');

			if (diff >= 15) {
				throw new Error(' превышено время на запрос');
			}

			if (!response.ok) {
				throw new Error(
					`статус ${response.status}, сообщение: ${response.statusText}`
				);
			}

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

			modalContentElInner = document.querySelector('#modal .modal__content');

			modalContentElInner.querySelector('.modal__body p').textContent =
				'Произошла какая-то ошибка. Попробуйте, пожалуйста, позже!';
			modalContentElInner.classList.add('error');
		} finally {
			formEl.reset();
			hideLoader();
		}
	}
}
