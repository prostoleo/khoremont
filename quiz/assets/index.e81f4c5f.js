import {
	o as c,
	c as m,
	r as U,
	d as R,
	a as i,
	F as A,
	b as j,
	e as w,
	t as x,
	f as y,
	p as z,
	g as B,
	h as C,
	i as D,
	w as I,
	v as q,
	j as b,
	k as F,
	u as n,
	l as v,
	m as E,
	n as L,
	U as Q,
	q as V,
	s as Z,
	x as J,
	y as M,
	z as K,
	T as G,
	A as X,
	B as Y,
} from './vendor.749cf4e8.js';
const tt = function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) l(r);
	new MutationObserver((r) => {
		for (const a of r)
			if (a.type === 'childList')
				for (const u of a.addedNodes)
					u.tagName === 'LINK' && u.rel === 'modulepreload' && l(u);
	}).observe(document, { childList: !0, subtree: !0 });
	function s(r) {
		const a = {};
		return (
			r.integrity && (a.integrity = r.integrity),
			r.referrerpolicy && (a.referrerPolicy = r.referrerpolicy),
			r.crossorigin === 'use-credentials'
				? (a.credentials = 'include')
				: r.crossorigin === 'anonymous'
				? (a.credentials = 'omit')
				: (a.credentials = 'same-origin'),
			a
		);
	}
	function l(r) {
		if (r.ep) return;
		r.ep = !0;
		const a = s(r);
		fetch(r.href, a);
	}
};
tt();
var S = (e, t) => {
	const s = e.__vccOpts || e;
	for (const [l, r] of t) s[l] = r;
	return s;
};
const et = {},
	st = {
		class:
			'shadow bg-blue-500 text-lg text-white font-semibold px-[1em] py-[0.5em] rounded-md',
	};
function ot(e, t) {
	return c(), m('button', st, [U(e.$slots, 'default')]);
}
var N = S(et, [['render', ot]]);
const O = R({
		id: 'data',
		state: () => ({
			loading: !1,
			activeIndex: 1,
			data: {
				1: {
					title:
						'\u0412 \u043A\u0430\u043A\u043E\u043C \u0442\u0438\u043F\u0435 \u0436\u0438\u043B\u044C\u044F \u043D\u0443\u0436\u0435\u043D \u0440\u0435\u043C\u043E\u043D\u0442?',
					type: 'slider-radio',
					chosenOption: [],
					options: [
						{
							id: '1-1',
							title:
								'\u041D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0430',
							imgSrc: 'novostroika-min.jpg',
						},
						{
							id: '1-2',
							title:
								'\u0412\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0435 \u0436\u0438\u043B\u044C\u0435',
							imgSrc: 'vtorichka-min.jpg',
						},
					],
				},
				2: {
					title:
						'\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043D\u0430\u0442?',
					type: 'radio',
					chosenOption: [],
					options: [
						{ id: '2-1', title: '\u0421\u0442\u0443\u0434\u0438\u044F' },
						{
							id: '2-2',
							title:
								'\u041E\u0434\u043D\u043E\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0430\u044F',
						},
						{
							id: '2-3',
							title:
								'\u0414\u0432\u0443\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0430\u044F',
						},
						{
							id: '2-4',
							title:
								'\u0422\u0440\u0435\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u0430\u044F',
						},
						{
							id: '2-5',
							title:
								'\u0427\u0435\u0442\u044B\u0440\u0435 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u043D\u0430\u0442',
						},
					],
				},
				3: {
					title:
						'\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043C\u0435\u0442\u0440\u0430\u0436 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B?',
					type: 'my',
					chosenOption: [],
					placeholder:
						'\u041C\u0435\u0442\u0440\u044B \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u044B\u0435',
				},
				4: {
					title:
						'\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043D\u0430\u0442 \u043D\u0443\u0436\u043D\u043E \u043E\u0442\u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C?',
					type: 'radio',
					chosenOption: '',
					options: [
						{ id: '4-1', title: '\u041E\u0434\u043D\u0443' },
						{ id: '4-2', title: '\u0414\u0432\u0435' },
						{ id: '4-3', title: '\u0422\u0440\u0438' },
						{
							id: '4-4',
							title:
								'\u0427\u0435\u0442\u044B\u0440\u0435 \u0438 \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u043D\u0430\u0442',
						},
						{
							id: '4-5',
							title:
								'\u0412\u0441\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443',
						},
					],
				},
				5: {
					title:
						'\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0438\u043F \u0440\u0435\u043C\u043E\u043D\u0442\u0430',
					type: 'slider-radio',
					chosenOption: '',
					options: [
						{
							id: '5-1',
							title: '\u0427\u0435\u0440\u043D\u043E\u0432\u043E\u0439',
							imgSrc: 'chernovoy-min.jpg',
						},
						{
							id: '5-2',
							title:
								'\u041A\u043E\u0441\u043C\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439',
							imgSrc: 'kosmeticheskiy-min.jpg',
						},
						{
							id: '5-3',
							title:
								'\u041A\u0430\u043F\u0438\u0442\u0430\u043B\u044C\u043D\u044B\u0439',
							imgSrc: 'kapitalny-min.jpg',
						},
						{
							id: '5-4',
							title:
								'\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439',
							imgSrc: 'dizainersky-min.jpg',
						},
					],
				},
				6: {
					title:
						'\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043E\u043D\u0443\u0441 \u0437\u0430 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u043F\u0440\u043E\u0441\u0430?',
					type: 'slider-radio',
					chosenOption: '',
					options: [
						{
							id: '6-1',
							title:
								'\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0430',
							imgSrc: 'designer-min.jpg',
						},
						{
							id: '6-2',
							title:
								'\u0420\u043E\u0431\u043E\u0442 \u043C\u043E\u0439\u0449\u0438\u043A \u043E\u043A\u043E\u043D',
							imgSrc: 'robot-min.jpg',
						},
						{
							id: '6-3',
							title:
								'\u0421\u043A\u0438\u0434\u043A\u0430 20% \u043D\u0430 \u0432\u043E\u0434\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u0435',
							imgSrc: 'vodoprovod-min.jpg',
						},
					],
				},
				7: {
					title:
						'\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0441\u0432\u044F\u0437\u0438, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442?',
					type: 'radio',
					chosenOption: '',
					options: [
						{ id: '7-1', title: 'Telegram' },
						{ id: '7-2', title: 'WhatsApp' },
						{ id: '7-3', title: 'Viber' },
						{ id: '7-4', title: 'Email' },
					],
				},
			},
		}),
		getters: {
			getLoading: (e) => e.loading,
			getData: (e) => e.data,
			getActiveIndex: (e) => e.activeIndex,
			getChosenOptionOnIndex: (e) => (t) => e.data[t].chosenOption,
			getBonusOption: (e) => {
				const t = e.getDataLength - 1;
				return e.data[t].chosenOption;
			},
			getWayToComunicate: (e) => {
				const t = e.getDataLength;
				return console.log('indexOfWay: ', t), e.data[t].chosenOption;
			},
			getDataForQuizSubmit: (e) =>
				Object.values(e.data).reduce(
					(s, l) => (
						typeof l.chosenOption == 'string'
							? (s[l.title] = l.chosenOption)
							: (s[l.title] = l.chosenOption.join(';')),
						s
					),
					{}
				),
			getDataLength: (e) => Object.keys(e.data).length,
		},
		actions: {
			handleLoading(e) {
				this.loading = e;
			},
			incActiveIndex() {
				this.activeIndex++;
			},
			setChosenOption(e) {
				const t = this.getActiveIndex;
				this.data[t].chosenOption.push(e.title);
			},
			setChosenOptionRadio(e) {
				const t = this.getActiveIndex;
				this.data[t].chosenOption = e;
			},
			setChosenOptionFromInput(e) {
				const t = this.getActiveIndex;
				this.data[t].chosenOption = e;
			},
			clearChosenOption(e = !1, t) {
				const s = this.getActiveIndex;
				e
					? (this.data[s].chosenOption = this.data[s].chosenOption.filter(
							(l) => l !== t.title
					  ))
					: (this.data[s].chosenOption = []);
			},
		},
	}),
	nt = {},
	it = {
		class:
			'uk-position-small uk-hidden-hover !text-black rounded-full w-9 h-9 p-2 inline-flex items-center justify-center shadow bg-white',
		href: '#',
		fill: 'black',
	};
function rt(e, t) {
	return c(), m('a', it);
}
var W = S(nt, [['render', rt]]);
const at = (e) => (z('data-v-3dfbc7a0'), (e = e()), B(), e),
	dt = {
		class: 'uk-slider-container-offset mt-4',
		'uk-slider': 'center: true; autoplay: true; autoplay-interval: 5000;',
	},
	lt = {
		class: 'uk-position-relative uk-visible-toggle uk-dark',
		tabindex: '-1',
	},
	ct = { class: 'uk-slider-items uk-grid uk-grid-match' },
	ut = ['onClick'],
	pt = { class: 'uk-card-media-top border-b border-solid border-dark-50/40' },
	mt = ['src'],
	ht = { class: 'p-3 md:p-5' },
	_t = { class: 'uk-card-title leading-tight mb-[0.5em]' },
	ft = { key: 0 },
	gt = { class: 'uk-slider-nav uk-dotnav justify-center mt-4' },
	vt = ['uk-slider-item'],
	xt = at(() => i('a', { href: '#' }, null, -1)),
	yt = [xt],
	bt = {
		props: { dataStep: { type: Object, required: !0 } },
		setup(e) {
			const t = e,
				s = '.my-slider-card',
				l = O();
			function r(u, g) {
				const d = g.target.closest(s);
				if (!!d) {
					if (t.dataStep.type === 'slider-radio') {
						d.classList.contains('chosen')
							? (d.classList.remove('chosen'), l.clearChosenOption())
							: (a(),
							  l.clearChosenOption(),
							  d.classList.add('chosen'),
							  l.setChosenOption(u));
						return;
					}
					if (t.dataStep.type === 'slider-checkbox') {
						d.classList.contains('chosen')
							? (d.classList.remove('chosen'), l.clearChosenOption(!0, u))
							: (d.classList.add('chosen'), l.setChosenOption(u));
						return;
					}
				}
			}
			function a() {
				document
					.getElementById(`step-${l.getActiveIndex}`)
					.querySelectorAll(s)
					.forEach((d) => d.classList.remove('chosen'));
			}
			return (u, g) => (
				c(),
				m('div', dt, [
					i('div', lt, [
						i('ul', ct, [
							(c(!0),
							m(
								A,
								null,
								j(
									t.dataStep.options,
									(d) => (
										c(),
										m(
											'li',
											{
												key: d.id,
												class: 'rounded-md max-w-[250px] md:max-w-96',
											},
											[
												i(
													'div',
													{
														class:
															'my-slider-card uk-card uk-card-default grid grid-rows-[275px,1fr] rounded-md overflow-hidden shadow shadow-dark-100/20 cursor-pointer hover:shadow-lg, hover:shadow-blue-500/70',
														onClick: (h) => r(d, h),
													},
													[
														i('div', pt, [
															i(
																'img',
																{
																	class: 'object-cover w-full h-full',
																	src: `/quiz/img/${d.imgSrc}`,
																	alt: '',
																},
																null,
																8,
																mt
															),
														]),
														i('div', ht, [
															i('h3', _t, x(d.title), 1),
															d.subtitle
																? (c(), m('p', ft, x(d.subtitle), 1))
																: y('', !0),
														]),
													],
													8,
													ut
												),
											]
										)
									)
								),
								128
							)),
						]),
						w(W, {
							class: 'uk-position-center-left',
							'uk-slidenav-previous': '',
							'uk-slider-item': 'previous',
						}),
						w(W, {
							class: 'uk-position-center-right',
							'uk-slidenav-next': '',
							'uk-slider-item': 'next',
						}),
					]),
					i('ul', gt, [
						(c(!0),
						m(
							A,
							null,
							j(
								t.dataStep.options,
								(d, h) => (
									c(),
									m(
										'li',
										{ key: d.id, 'uk-slider-item': h, class: '!ml-0' },
										yt,
										8,
										vt
									)
								)
							),
							128
						)),
					]),
				])
			);
		},
	};
var kt = S(bt, [['__scopeId', 'data-v-3dfbc7a0']]);
const wt = {
		class:
			'grid-inputs mt-5 px-2 text-left md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4 md:justify-start',
	},
	Ct = ['value'],
	$t = { class: 'ml-2 grid-inputs__text' },
	St = { key: 0, class: 'grid-inputs__item' },
	Ot = ['placeholder'],
	It = {
		props: { dataStep: { type: Object, required: !0 } },
		emits: ['blur-input'],
		setup(e, { emit: t }) {
			const s = e,
				l = O(),
				r = C(() => l.getActiveIndex),
				a = D('');
			function u(h) {
				const _ = h.target.closest('.grid-inputs__item');
				if (!_) return;
				d();
				const p = _.querySelector('input[type="radio"]');
				(p.checked = !0), _.classList.add('chosen');
			}
			function g(h) {
				const _ = h.currentTarget.closest('.grid-inputs__item');
				if (s.dataStep.type === 'radio-my' && a.value.length === 0) {
					_.classList.remove('chosen'), t('blur-input', a.value);
					return;
				}
				d(), t('blur-input', a.value), _.classList.add('chosen');
			}
			function d() {
				const h = document.getElementById(`step-${r.value}`),
					_ = h.querySelectorAll('input[type="radio"]'),
					p = h.querySelectorAll('div.grid-inputs__item');
				_.forEach((o) => {
					o.checked = !1;
				}),
					p.forEach((o) => {
						o.classList.remove('chosen');
					});
			}
			return (h, _) => {
				var p;
				return (
					c(),
					m('div', null, [
						i('div', wt, [
							(c(!0),
							m(
								A,
								null,
								j(
									s.dataStep.options,
									(o) => (
										c(),
										m(
											'div',
											{
												key: o.id,
												class:
													'grid-inputs__item p-3 border border-gray-400/40 rounded-sm cursor-pointer mt-3 md:mt-0 inline-flex items-center justify-start w-full',
												onClick: u,
											},
											[
												i(
													'input',
													{
														type: 'radio',
														name: 'karta',
														class:
															'grid-inputs__input grid-inputs__input--radio',
														value: o.title,
													},
													null,
													8,
													Ct
												),
												i('span', $t, x(o.title), 1),
											]
										)
									)
								),
								128
							)),
							s.dataStep.type.includes('my')
								? (c(),
								  m('div', St, [
										I(
											i(
												'input',
												{
													'onUpdate:modelValue':
														_[0] || (_[0] = (o) => (a.value = o)),
													type: 'text',
													class:
														'grid-inputs__input grid-inputs__input--variant mt-3 md:mt-0 block w-full p-3 border border-gray-400/40 rounded-sm',
													placeholder:
														(p = s.dataStep.placeholder) != null
															? p
															: '\u0421\u0432\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442',
													onBlur: _[1] || (_[1] = (o) => g(o)),
												},
												null,
												40,
												Ot
											),
											[[q, a.value, void 0, { trim: !0 }]]
										),
								  ]))
								: y('', !0),
						]),
					])
				);
			};
		},
	},
	Lt = ['id'],
	At = { class: 'text-left flex items-center mr-auto w-max' },
	jt = { class: 'num-bold font-bold text-blue-500 text-xl' },
	qt = { class: 'num-upper font-base' },
	Et = { class: 'text-lg ml-2' },
	Vt = { class: 'content min-h-[350px] lg:min-h-[420px]' },
	Tt = { class: 'mt-4 flex justify-center' },
	zt = L(
		' \u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 '
	),
	k = {
		setup(e) {
			const t = O(),
				s = b(() => t.getActiveIndex),
				l = b(() => t.getDataLength);
			function r(o) {
				return Intl.NumberFormat(navigator.language, {
					minimumIntegerDigits: 2,
				}).format(o);
			}
			const a = F(t.getData),
				u = D('');
			function g(o) {
				u.value = o;
			}
			function d(o) {
				(o === 'slider-radio' || o === 'slider-checkbox') && h(),
					(o === 'radio' || o === 'radio-my' || o === 'my') && _();
			}
			function h() {
				const o = t.getChosenOptionOnIndex(s.value);
				if (!o || o.length === 0) {
					p();
					return;
				}
				t.incActiveIndex();
			}
			function _() {
				if (u.value) t.setChosenOptionFromInput(u.value), (u.value = '');
				else {
					const f = document
							.getElementById(`step-${s.value}`)
							.querySelectorAll('input[type="radio"]'),
						$ = Array.from(f).find((T) => T.checked === !0);
					if (!$) {
						p(!0);
						return;
					}
					t.setChosenOptionRadio($.value);
				}
				t.incActiveIndex();
			}
			function p(o = !1) {
				Q.notification({
					message: `\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0434\u0438\u043D \u0432\u0430\u0440\u0438\u0430\u043D\u0442${
						o
							? ' \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u0432\u043E\u0439'
							: ''
					}, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C`,
					status: 'danger',
				});
			}
			return (o, f) => (
				c(),
				m(
					'div',
					{ id: `step-${n(s)}`, class: 'text-center h-full' },
					[
						i('div', At, [
							i('span', jt, x(r(n(s))), 1),
							i('sup', qt, '\xA0/ ' + x(r(n(l))), 1),
							i('h3', Et, x(n(a)[n(s)].title), 1),
						]),
						i('div', Vt, [
							n(a)[n(s)].type.includes('slider')
								? (c(),
								  v(kt, { key: 0, 'data-step': n(a)[n(s)] }, null, 8, [
										'data-step',
								  ]))
								: n(a)[n(s)].type === 'radio' ||
								  n(a)[n(s)].type === 'radio-my' ||
								  n(a)[n(s)].type === 'my'
								? (c(),
								  v(
										It,
										{ key: 1, 'data-step': n(a)[n(s)], onBlurInput: g },
										null,
										8,
										['data-step']
								  ))
								: y('', !0),
						]),
						i('div', Tt, [
							w(
								N,
								{
									class: 'preview-block__btn',
									onClick: f[0] || (f[0] = ($) => d(n(a)[n(s)].type)),
								},
								{ default: E(() => [zt]), _: 1 }
							),
						]),
					],
					8,
					Lt
				)
			);
		},
	};
async function Bt(e, t, s) {
	if (!t || !e || !s)
		return new Error(
			'\u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443'
		);
	console.log('data: ', e);
	const l = {
		name: t.trim(),
		contact: s.trim(),
		data: e,
		subject:
			'\u0417\u0430\u044F\u0432\u043A\u0430 \u0441 \u043A\u0432\u0438\u0437\u0430 \u0441\u0430\u0439\u0442\u0430 renovation-khoremont',
		fromWebsite: 'https://khoremont-renovation.netlify.app/',
	};
	return await fetch('https://functions.yandexcloud.net/d4em2db6rbppd85d8d2a', {
		method: 'POST',
		headers: { Accept: '/', 'Content-Type': 'text/plain' },
		body: JSON.stringify(l),
	});
}
const H = (e) => (z('data-v-1712294e'), (e = e()), B(), e),
	Dt = { class: 'px-2' },
	Ft = H(() =>
		i(
			'h3',
			{
				class:
					'text-center font-bold text-lg mx-auto max-w-[45ch] leading-tight',
			},
			' \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0440\u0430\u0441\u0447\u0435\u0442\u0430 ',
			-1
		)
	),
	Mt = ['onSubmit'],
	Nt = { class: 'form-quiz__inputs grid gap-4 justify-center' },
	Wt = { class: 'form-quiz__input-row' },
	Ht = { key: 0, class: 'text-small-error' },
	Pt = { class: 'form-quiz__input-row' },
	Ut = ['placeholder'],
	Rt = { key: 0, class: 'text-small-error' },
	Qt = { class: 'flex flex-col items-center mt-7' },
	Zt = { class: 'agree-with-terms inline-flex max-w-[60ch] mx-auto w-fit' },
	Jt = H(() =>
		i(
			'p',
			{ class: 'ml-2 -mt-[6px] flex-shrink w-full' },
			[
				L(
					' \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u044F \u0434\u0430\u044E \u0441\u0432\u043E\u0451 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043C\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445, \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 '
				),
				i(
					'a',
					{
						href: 'http://www.consultant.ru/document/cons_doc_LAW_61801/',
						target: '_blank',
					},
					'\u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u043E\u0442 27.07.2006 \u0433\u043E\u0434\u0430 \u2116152-\u0424\u0417 \xAB\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445\xBB'
				),
				L('. '),
			],
			-1
		)
	),
	Kt = L(
		' \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 '
	),
	Gt = {
		setup(e) {
			const t = F({
					name: { val: '', error: !1, touched: !1 },
					contact: { val: '', error: !1, touched: !1 },
					disableSubmit: !0,
					agreeWithTerms: !1,
				}),
				s = O(),
				l = C(() => s.getWayToComunicate),
				r = C(() => !t.name.error && t.name.touched),
				a = C(() => !t.contact.error && t.contact.touched),
				u = C(() => t.name.error && t.name.touched),
				g = C(() => t.contact.error && t.contact.touched);
			function d(p = null) {
				p &&
					p !== 'checkbox' &&
					(t[p].val ? (t[p].error = !1) : (t[p].error = !0),
					(t[p].touched = !0)),
					h();
			}
			function h() {
				r.value && a.value && t.agreeWithTerms
					? (t.disableSubmit = !1)
					: (t.disableSubmit = !0);
			}
			async function _() {
				const p = s.getDataForQuizSubmit;
				console.log('data: ', p);
				try {
					if (!p)
						throw new Error(
							'\u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0441'
						);
					const o = +new Date();
					s.handleLoading(!0);
					const f = await Bt(p, t.name.val, t.contact.val),
						$ = +new Date();
					if (Math.round(($ - o) / 1e3) >= 15)
						throw new Error(
							' \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0441'
						);
					if ((s.handleLoading(!1), !f.status))
						throw new Error(
							' \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E'
						);
					M.notification({
						status: 'success',
						message:
							'\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0431\u044B\u043B\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E - \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0412\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F',
					});
				} catch (o) {
					console.warn(`\u{1F4A3}\u{1F4A3}\u{1F4A3} ${o}`),
						M.notification({
							status: 'error',
							message: `${
								o.message ||
								'\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A'
							}`,
						});
				} finally {
					s.$reset();
				}
			}
			return (p, o) => (
				c(),
				m('div', Dt, [
					Ft,
					i(
						'form',
						{ class: 'form-quiz mt-7', onSubmit: J(_, ['prevent']) },
						[
							i('div', Nt, [
								i('div', Wt, [
									I(
										i(
											'input',
											{
												id: 'form-quiz__input--name',
												'onUpdate:modelValue':
													o[0] || (o[0] = (f) => (n(t).name.val = f)),
												type: 'text',
												class: V([
													'form-quiz__input',
													{ error: n(u), approved: n(r) },
												]),
												placeholder:
													'\u0412\u0430\u0448\u0435 \u0438\u043C\u044F',
												onBlur: o[1] || (o[1] = (f) => d('name')),
											},
											null,
											34
										),
										[[q, n(t).name.val, void 0, { trim: !0 }]]
									),
									n(u)
										? (c(),
										  m(
												'small',
												Ht,
												' \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F '
										  ))
										: y('', !0),
								]),
								i('div', Pt, [
									I(
										i(
											'input',
											{
												id: 'form-quiz__input--contact',
												'onUpdate:modelValue':
													o[2] || (o[2] = (f) => (n(t).contact.val = f)),
												type: 'text',
												class: V([
													'form-quiz__input',
													{ error: n(g), approved: n(a) },
												]),
												placeholder: `\u0412\u0430\u0448 ${n(l)}`,
												onBlur: o[3] || (o[3] = (f) => d('contact')),
											},
											null,
											42,
											Ut
										),
										[[q, n(t).contact.val, void 0, { trim: !0 }]]
									),
									n(g)
										? (c(),
										  m(
												'small',
												Rt,
												' \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F '
										  ))
										: y('', !0),
								]),
							]),
							i('div', Qt, [
								i('div', Zt, [
									I(
										i(
											'input',
											{
												type: 'checkbox',
												class: 'flex-grow flex-shrink-0',
												'onUpdate:modelValue':
													o[4] || (o[4] = (f) => (n(t).agreeWithTerms = f)),
												onChange: o[5] || (o[5] = (f) => d('checkbox')),
											},
											null,
											544
										),
										[[Z, n(t).agreeWithTerms]]
									),
									Jt,
								]),
								w(
									N,
									{
										class: V([
											'mx-auto w-max mt-5',
											{ 'form-quiz-submit-disabled': n(t).disableSubmit },
										]),
										disabled: n(t).disableSubmit,
									},
									{ default: E(() => [Kt]), _: 1 },
									8,
									['class', 'disabled']
								),
							]),
						],
						40,
						Mt
					),
				])
			);
		},
	};
var Xt = S(Gt, [['__scopeId', 'data-v-1712294e']]);
const Yt = {
		class:
			'custom-progress rounded-lg bg-gray-100 w-full overflow-hidden relative h-[18px]',
	},
	te = { class: 'text font-semibold w-max' },
	ee = {
		props: { progress: { type: String, required: !0 } },
		setup(e) {
			const t = e;
			return (s, l) => (
				c(),
				m('div', Yt, [
					i(
						'span',
						{
							class:
								'fill bg-blue-500 absolute left-0 top-0 bottom-0 text-white text-[12px] block w-full h-full p-[0.25em] inline-flex justify-center items-center transition-all duration-600 ease-in',
							style: K(`width: ${parseFloat(t.progress)}%`),
						},
						[i('span', te, x(t.progress), 1)],
						4
					),
				])
			);
		},
	};
var se = S(ee, [['__scopeId', 'data-v-0f83254a']]);
const oe = {
		key: 0,
		class:
			'loader-wrapper flex items-center justify-center my-10 mx-2 min-h-[450px] w-full rounded-md shadow shadow-dark-100/20 shadow-lg',
	},
	ne = i('div', { class: 'loader' }, null, -1),
	ie = [ne],
	re = {
		key: 1,
		id: 'quiz-container',
		class:
			'container mx-auto p-5 my-10 mx-2 rounded-md shadow shadow-dark-100/20 shadow-lg text-black md:min-h-[680px] overflow-hidden',
	},
	ae = { id: 'quiz', class: 'lg:flex lg:justify-between' },
	de = {
		class:
			'bg-amber-600 w-full flex items-center justify-center rounded-md text-light-50 p-5 lg:w-3/12',
	},
	le = { class: 'text-center' },
	ce = i(
		'svg',
		{ width: '100', height: '100', viewBox: '0 0 100 100', fill: 'white' },
		[
			i('path', {
				d: 'M18.75 15.625C18.75 11.481 20.3962 7.50671 23.3265 4.57646C26.2567 1.6462 30.231 0 34.375 0C38.519 0 42.4933 1.6462 45.4235 4.57646C48.3538 7.50671 50 11.481 50 15.625C50 11.481 51.6462 7.50671 54.5765 4.57646C57.5067 1.6462 61.481 0 65.625 0C69.769 0 73.7433 1.6462 76.6735 4.57646C79.6038 7.50671 81.25 11.481 81.25 15.625V15.6625C81.25 16.1 81.25 17.35 81.0125 18.75H93.75C95.4076 18.75 96.9973 19.4085 98.1694 20.5806C99.3415 21.7527 100 23.3424 100 25V31.25C100 32.9076 99.3415 34.4973 98.1694 35.6694C96.9973 36.8415 95.4076 37.5 93.75 37.5H6.25C4.5924 37.5 3.00269 36.8415 1.83058 35.6694C0.65848 34.4973 0 32.9076 0 31.25V25C0 23.3424 0.65848 21.7527 1.83058 20.5806C3.00269 19.4085 4.5924 18.75 6.25 18.75H18.9875C18.8224 17.7293 18.743 16.6965 18.75 15.6625V15.625ZM25.425 18.75H43.75V15.625C43.75 14.3939 43.5075 13.1748 43.0364 12.0373C42.5652 10.8999 41.8747 9.86642 41.0041 8.99587C40.1336 8.12532 39.1001 7.43477 37.9627 6.96363C36.8252 6.49249 35.6061 6.25 34.375 6.25C33.1439 6.25 31.9248 6.49249 30.7873 6.96363C29.6499 7.43477 28.6164 8.12532 27.7459 8.99587C26.8753 9.86642 26.1848 10.8999 25.7136 12.0373C25.2425 13.1748 25 14.3939 25 15.625C25 16.1563 25.0125 17.3375 25.2813 18.3125C25.3188 18.4615 25.3668 18.6077 25.425 18.75V18.75ZM56.25 18.75H74.575C74.6325 18.6075 74.6805 18.4613 74.7187 18.3125C74.9875 17.3375 75 16.1563 75 15.625C75 13.1386 74.0123 10.754 72.2541 8.99587C70.496 7.23772 68.1114 6.25 65.625 6.25C63.1386 6.25 60.754 7.23772 58.9959 8.99587C57.2377 10.754 56.25 13.1386 56.25 15.625V18.75ZM93.75 43.75V90.625C93.75 93.1114 92.7623 95.496 91.0041 97.2541C89.246 99.0123 86.8614 100 84.375 100H56.25V43.75H93.75ZM15.625 100C13.1386 100 10.754 99.0123 8.99587 97.2541C7.23772 95.496 6.25 93.1114 6.25 90.625V43.75H43.75V100H15.625Z',
				fill: '',
				class: '',
			}),
		],
		-1
	),
	ue = i(
		'p',
		{ class: 'kupon-title font-bold text-2xl mt-[1em] lg:text-3xl uppercase' },
		' \u0431\u043E\u043D\u0443\u0441 ',
		-1
	),
	pe = { class: 'kupon-price text-lg' },
	me = { class: 'mt-5 w-full overflow-hidden lg:w-8/12 lg:mt-0' },
	he = { class: 'overflow-hidden' },
	_e = { class: 'pro mb-4' },
	fe = {
		setup(e) {
			const t = O();
			t.handleLoading(!0);
			const s = b(() => t.getLoading);
			window.addEventListener('load', () => {
				t.handleLoading(!1);
			});
			const l = b(() =>
					t.getBonusOption
						? '\u0412\u044B\u0431\u0440\u0430\u043D !'
						: '\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D!'
				),
				r = b(() => t.getActiveIndex),
				a = b(() => t.getDataLength),
				u = b(() => {
					const d = r.value / a.value;
					return g(d);
				});
			function g(d) {
				const h = d < 1 ? d : 1;
				return new Intl.NumberFormat(navigator.language, {
					style: 'percent',
					minimumFractionDigits: 0,
					maximumFractionDigits: 1,
				}).format(h);
			}
			return (d, h) => (
				c(),
				m('div', null, [
					n(s)
						? (c(), m('div', oe, ie))
						: n(s)
						? y('', !0)
						: (c(),
						  m('div', re, [
								i('div', ae, [
									i('div', de, [
										i('div', le, [ce, ue, i('p', pe, x(n(l)), 1)]),
									]),
									i('div', me, [
										i('div', he, [
											i('div', _e, [
												w(se, { progress: n(u) }, null, 8, ['progress']),
											]),
											w(
												G,
												{
													name: 'question',
													mode: 'out-in',
													class: 'overflow-hidden',
												},
												{
													default: E(() => [
														n(r) == 1
															? (c(), v(k, { key: 0 }))
															: n(r) == 2
															? (c(), v(k, { key: 1 }))
															: n(r) == 3
															? (c(), v(k, { key: 2 }))
															: n(r) == 4
															? (c(), v(k, { key: 3 }))
															: n(r) == 5
															? (c(), v(k, { key: 4 }))
															: n(r) == 6
															? (c(), v(k, { key: 5 }))
															: n(r) == 7
															? (c(), v(k, { key: 6 }))
															: n(r) == 8
															? (c(), v(Xt, { key: 7 }))
															: y('', !0),
													]),
													_: 1,
												}
											),
										]),
									]),
								]),
						  ])),
				])
			);
		},
	};
const P = X(fe);
P.use(Y());
P.mount('#quiz-wrapper');
