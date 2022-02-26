// ? проверка валидности формы
import handleModal from '../modal/modal-handle';
import handleForm from './form-handle';

//? для маски телефона
import maskPhone from './mask-phone';

export default function contactForm() {
	// modal elements
	/* const modalNotificationEl = document.getElementById('modal-notification');

	const modalContent = document.querySelector('.main-modal__content');

	const modalTitle = modalNotificationEl.querySelector('#modal-title'); */

	//* formElements
	const contactSectionEl = document.querySelector('.contact-section');
	const formInContactSection = contactSectionEl.querySelector('form.form');

	const title =
		contactSectionEl.getAttribute('aria-label') ??
		document.getElementById(contactSectionEl.getAttribute('aria-labelledby'))
			.textContent;
	// console.log('title: ', title);

	maskPhone();
	handleForm(formInContactSection, title, '#modal');

	//=============
	//* buttons for modal-form
	const modalForm = document.querySelector('#modal-form');
	const formInModalForm = modalForm.querySelector('form.form');
	const btnsFormOpen = document.querySelectorAll('.btn-open-form-modal');

	btnsFormOpen.forEach((btn) => {
		const title = btn.dataset.info;

		btn.addEventListener('click', (e) => {
			const { openModal, closeModal } = handleModal(title, '#modal-form');
			openModal();

			handleForm(formInModalForm, title, '#modal-form');
		});
	});
}
