import gsap from 'gsap';

const tlLoader = gsap.timeline({ paused: true });

const overlay = document.getElementById('overlay');

tlLoader
	.set(overlay, {
		display: 'flex',
	})
	.set(overlay.querySelector('.loader'), {
		display: 'block',
	})
	.to(overlay, {
		opacity: 1,
		visibility: 'visible',
	});

export const showLoader = () => tlLoader.play();
export const hideLoader = () => tlLoader.reverse();
