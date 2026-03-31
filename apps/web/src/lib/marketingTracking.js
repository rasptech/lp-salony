const LP_CONFIG =
	typeof window !== 'undefined' &&
	window.__SALONY_LP_CONFIG__ &&
	typeof window.__SALONY_LP_CONFIG__ === 'object'
		? window.__SALONY_LP_CONFIG__
		: {};

const META_PIXEL_ID = LP_CONFIG.META_PIXEL_ID || '1366999801195011';
const CAPI_PROXY_URL = LP_CONFIG.CAPI_PROXY_URL || 'https://app.salony.com.br/salon/meta/capi';
const ENABLE_BROWSER_PIXEL = LP_CONFIG.ENABLE_BROWSER_PIXEL === true;

const META_COOKIE_MAX_AGE_SECONDS = 90 * 24 * 60 * 60;
const EXTERNAL_ID_STORAGE_KEY = 'salony_external_id';
const EXTERNAL_ID_COOKIE_KEY = '_slxid';
const EXTERNAL_ID_MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

const FBP_REGEX = /^fb\.1\.\d{10,16}\.\d+$/;
const FBC_REGEX = /^fb\.1\.\d{10,16}\.[A-Za-z0-9_-]+$/;
const EXTERNAL_ID_REGEX = /^[A-Za-z0-9_-]{12,128}$/;

const metaPixelState = {
	initialized: false,
	loaded: false,
	failed: false,
	fallbackSent: new Set()
};

const readCookie = (name) => {
	const escaped = String(name).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
	return match ? decodeURIComponent(match[1]) : '';
};

const writeCookie = (name, value, maxAgeSeconds) => {
	if (!name || !value) return;
	const secure = window.location.protocol === 'https:' ? '; Secure' : '';
	const maxAge = Number.isFinite(maxAgeSeconds)
		? `; Max-Age=${Math.max(0, Math.floor(maxAgeSeconds))}`
		: '';
	document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${maxAge}; Path=/; SameSite=Lax${secure}`;
};

const safeReadStorage = (key) => {
	try {
		return window.localStorage.getItem(key) || '';
	} catch (_) {
		return '';
	}
};

const safeWriteStorage = (key, value) => {
	try {
		window.localStorage.setItem(key, value);
	} catch (_) {}
};

const randomToken = () => {
	if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
		const arr = new Uint32Array(2);
		window.crypto.getRandomValues(arr);
		return `${arr[0].toString(36)}${arr[1].toString(36)}`;
	}
	return `${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
};

const getOrCreateExternalId = () => {
	const cookieValue = readCookie(EXTERNAL_ID_COOKIE_KEY);
	if (EXTERNAL_ID_REGEX.test(cookieValue)) {
		safeWriteStorage(EXTERNAL_ID_STORAGE_KEY, cookieValue);
		return cookieValue;
	}

	const storageValue = safeReadStorage(EXTERNAL_ID_STORAGE_KEY);
	if (EXTERNAL_ID_REGEX.test(storageValue)) {
		writeCookie(EXTERNAL_ID_COOKIE_KEY, storageValue, EXTERNAL_ID_MAX_AGE_SECONDS);
		return storageValue;
	}

	const generated = `sl_${Date.now().toString(36)}_${randomToken().slice(0, 24)}`;
	writeCookie(EXTERNAL_ID_COOKIE_KEY, generated, EXTERNAL_ID_MAX_AGE_SECONDS);
	safeWriteStorage(EXTERNAL_ID_STORAGE_KEY, generated);
	return generated;
};

const getOrCreateFbp = () => {
	const current = readCookie('_fbp');
	if (FBP_REGEX.test(current)) return current;

	const generated = `fb.1.${Date.now()}.${Math.floor(Math.random() * 1e10)}`;
	writeCookie('_fbp', generated, META_COOKIE_MAX_AGE_SECONDS);
	return generated;
};

const getFbc = () => {
	const current = readCookie('_fbc');
	if (FBC_REGEX.test(current)) return current;

	const fbclid = new URLSearchParams(window.location.search).get('fbclid');
	if (!fbclid) return '';

	const generated = `fb.1.${Date.now()}.${fbclid}`;
	writeCookie('_fbc', generated, META_COOKIE_MAX_AGE_SECONDS);
	return generated;
};

const trackMetaPixelFallback = (eventName) => {
	if (!META_PIXEL_ID || !eventName || metaPixelState.fallbackSent.has(eventName)) return;
	metaPixelState.fallbackSent.add(eventName);
	const img = new Image(1, 1);
	img.style.display = 'none';
	img.src = `https://www.facebook.com/tr?id=${encodeURIComponent(META_PIXEL_ID)}&ev=${encodeURIComponent(eventName)}&noscript=1&cb=${Date.now()}`;
};

const initMetaPixel = () => {
	if (!ENABLE_BROWSER_PIXEL || !META_PIXEL_ID || metaPixelState.initialized) return;
	metaPixelState.initialized = true;

	if (typeof window.fbq === 'function' && window.fbq.callMethod) {
		metaPixelState.loaded = true;
		window.fbq('init', META_PIXEL_ID);
		return;
	}

	(function (f, b, e, v, n, t, s) {
		if (f.fbq) return;
		n = f.fbq = function () {
			n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
		};
		if (!f._fbq) f._fbq = n;
		n.push = n;
		n.loaded = true;
		n.version = '2.0';
		n.queue = [];
		t = b.createElement(e);
		t.async = true;
		t.src = v;
		t.onload = function () {
			metaPixelState.loaded = true;
		};
		t.onerror = function () {
			metaPixelState.failed = true;
		};
		s = b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t, s);
	})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

	window.fbq('init', META_PIXEL_ID);
};

const trackMetaPixelWithEventId = (eventName, eventId, eventData) => {
	if (!ENABLE_BROWSER_PIXEL || !eventName) return;
	const payload = eventData && typeof eventData === 'object' ? eventData : {};
	if (typeof window.fbq === 'function') {
		if (eventId) window.fbq('track', eventName, payload, { eventID: eventId });
		else window.fbq('track', eventName);
		return;
	}
	if (metaPixelState.failed) {
		trackMetaPixelFallback(eventName);
	}
};

const sendCapiEvent = async (eventName, eventId, customData = {}) => {
	if (!CAPI_PROXY_URL || !eventName || !eventId) return;
	const payload = {
		event_name: eventName,
		event_id: eventId,
		event_source_url: window.location.href,
		fbp: getOrCreateFbp(),
		fbc: getFbc(),
		external_id: getOrCreateExternalId(),
		user_agent: navigator.userAgent,
		custom_data: customData
	};

	try {
		await fetch(CAPI_PROXY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
			keepalive: true
		});
	} catch (_) {}
};

export const initMarketingTracking = () => {
	if (typeof window === 'undefined' || typeof document === 'undefined') return;
	initMetaPixel();
};

export const trackPageView = () => {
	if (typeof window === 'undefined' || typeof document === 'undefined') return;
	const eventId = `PageView_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
	trackMetaPixelWithEventId('PageView', eventId, {});
	sendCapiEvent('PageView', eventId, {});
};

const pushGoogleEvent = (eventName, payload) => {
	if (Array.isArray(window.dataLayer)) {
		window.dataLayer.push({ event: eventName, ...payload });
	}
	if (typeof window.gtag === 'function') {
		window.gtag('event', eventName, payload);
	}
};

const sanitizeLabel = (value) => String(value || '').replace(/\s+/g, ' ').trim().slice(0, 120);

export const trackCtaClick = ({ ctaName, ctaText, href } = {}) => {
	if (typeof window === 'undefined' || typeof document === 'undefined') return;
	const eventId = `Lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
	const payload = {
		cta_name: sanitizeLabel(ctaName || ctaText || 'cta_click'),
		cta_text: sanitizeLabel(ctaText || ctaName || ''),
		destination_url: sanitizeLabel(href || ''),
		page_path: window.location.pathname
	};

	pushGoogleEvent('cta_click', payload);
	trackMetaPixelWithEventId('Lead', eventId, payload);
	sendCapiEvent('Lead', eventId, payload);
};

let ctaListenerAttached = false;

export const initCtaTracking = () => {
	if (typeof window === 'undefined' || typeof document === 'undefined' || ctaListenerAttached) return;
	ctaListenerAttached = true;

	document.addEventListener(
		'click',
		(event) => {
			const target = event.target instanceof Element ? event.target : null;
			if (!target) return;
			const clickable = target.closest('[data-cta]');
			if (!clickable) return;

			trackCtaClick({
				ctaName: clickable.getAttribute('data-cta') || '',
				ctaText: clickable.textContent || '',
				href: clickable.getAttribute('href') || ''
			});
		},
		true
	);
};
