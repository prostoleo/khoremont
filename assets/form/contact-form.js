import formValid from './form-validation';

//? для маски телефона
import maskPhone from './mask-phone';

export default function foo() {
	// modal elements
	const modalNotificationEl = document.getElementById('modal-notification');

	const modalContent = document.querySelector('.main-modal__content');

	const modalTitle = modalNotificationEl.querySelector('#modal-title');

	// formElements
	const contactSectionEl = document.querySelector('.contact-section');
	const formInContactSection = contactSectionEl.querySelector('form.form');

	maskPhone();
	formValid(formInContactSection);
}
