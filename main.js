import './style.css';
import './quiz/assets/index.2e6b1a38.css';
import './assets/scss/main.scss';

// animation
import animHeader from './assets/animation/anim-header';
import contactSubmitForm from './assets/form/contact-form';
import handleModal from './assets/modal/modal-handle';
// console.log('animHeader: ', animHeader);

animHeader();

contactSubmitForm();

/* const { openModal, closeModal } = handleModal();

const btnEstimator = document.querySelector('#estimator button.btn.left__btn');
console.log('btnEstimator: ', btnEstimator);

btnEstimator.addEventListener('click', () => {
	console.log('click');

	openModal();
}); */
