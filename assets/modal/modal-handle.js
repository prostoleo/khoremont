import gsap from 'gsap';

export default function handleModal(
	title = '',
	selector = '',
	withoutFooter = true
) {
	// console.log('selector: ', selector);

	// если нет selector - выходим из функции
	if (!selector) return;

	const modalEl = document.querySelector(selector);
	// console.log('modalEl: ', modalEl);

	const modalContentEl = modalEl.querySelector('.modal__content');

	const closeBtnEl = modalContentEl.querySelector('.header-modal__close');

	//todo title modal
	const modalTitleEl = modalContentEl.querySelector('.header-modal__title');
	title ? (modalTitleEl.textContent = title) : null;

	//todo add of classes to modalContentEl
	withoutFooter && modalContentEl.classList.add('without-footer');

	//todo gsap animation of modal
	const addOpenClass = () => modalEl.classList.add('open');
	const removeOpenClass = () => modalEl.classList.remove('open');

	const tlModal = gsap.timeline({
		paused: true,
		onComplete: addOpenClass,
		onReverseComplete: removeOpenClass,
	});

	tlModal
		.fromTo(
			modalEl,
			{
				opacity: 0,
				visibility: 'hidden',
				duration: 0.15,
			},
			{
				opacity: 1,
				visibility: 'visible',
				pointerEvents: 'auto',
				duration: 0.15,
			}
		)
		.fromTo(
			modalContentEl,
			{
				yPercent: -50,
				z: 10,
				opacity: 0,
				duration: 0.35,
			},
			{
				yPercent: 0,
				z: 0,
				opacity: 1,
				duration: 0.35,
				// duration: 10,
			}
		);

	modalEl.addEventListener('click', (event) => {
		if (!event.target.closest('.modal__content')) {
			closeModal();
		}
	});

	closeBtnEl.addEventListener('click', (event) => {
		if (event.target.closest('.header-modal__close')) {
			closeModal();
		}
	});

	function openModal() {
		// console.log('open modal');
		tlModal.play();
	}

	function closeModal() {
		// console.log('close modal');
		tlModal.reverse();
		setTimeout(() => {
			modalContentEl.classList.remove('success', 'error', 'without-footer');
		}, 1000);
	}

	return {
		openModal,
		closeModal,
	};
}
