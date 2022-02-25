import gsap from 'gsap';

const headerLinksEls = document.querySelectorAll('.nav-header__link');

export default function anim() {
	animNav();

	animPhone();

	animLinks();
}

function animPhone(params) {
	const tlPhone = gsap.timeline({ paused: true, ease: 'power2.in' });

	tlPhone
		.to('.nav-header__phone-shadow', {
			opacity: 1,
			duration: 0.15,
		})
		.to('.nav-header__phone', {
			translateZ: '15px',
			duration: 0.3,
		});

	const phone = document.querySelector('.nav-header__phone');

	phone.addEventListener('mouseenter', () => {
		tlPhone.play();
	});
	phone.addEventListener('mouseleave', () => {
		tlPhone.reverse();
	});
}

function animLinks() {
	headerLinksEls.forEach((linkEl) => {
		const tlLinks = gsap.timeline({
			paused: true,
			defaults: { ease: 'linear' },
		});

		tlLinks.to(linkEl.querySelector('span.decor'), {
			duration: 0.25,
			scaleX: 1,
		});

		linkEl.addEventListener('mouseenter', () => {
			tlLinks.play();
		});
		linkEl.addEventListener('mouseleave', () => {
			tlLinks.reverse();
		});
	});
}

function animNav() {
	const overlay = document.getElementById('overlay');
	const btnToggleMenu = document.getElementById('btn-toggle-menu');

	// timeline для анимации
	const tlNav = gsap.timeline({ paused: true });

	tlNav
		.set(overlay, {
			display: 'block',
		})
		.to(overlay, {
			opacity: 1,
			visibility: 'visible',
			pointerEvents: 'unset',
			duration: 0.15,
		})
		.to(
			'.header__nav',
			{
				x: 0,
				opacity: 1,
			},
			'<'
		)
		.to(headerLinksEls, {
			x: 0,
			opacity: 1,
			stagger: 0.1,
			duration: 0.3,
			ease: 'Back.easeOut.config(1.7)',
		})
		.to(
			'.nav-header__phone',
			{
				y: 0,
				opacity: 1,
				duration: 0.2,
			}
			// '<0.2'
		);

	btnToggleMenu.addEventListener('click', openNav);

	overlay.addEventListener('click', closeNav);

	Array.from(headerLinksEls).forEach((linkEl) => {
		linkEl.addEventListener('click', closeNav);
	});

	clearTimeline(tlNav);

	function openNav() {
		tlNav.play();
	}
	function closeNav() {
		tlNav.reverse();
	}
}

function clearTimeline(tlReceived) {
	function toBegin() {
		if (window.innerWidth >= 768) {
			tlReceived.progress(0);
		}
	}

	toBegin();
	window.addEventListener('resize', toBegin);
}
