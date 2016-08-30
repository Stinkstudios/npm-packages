var HAS_TOUCH = !!(
	'ontouchstart' in window ||
	navigator.msMaxTouchPoints ||
	(window.DocumentTouch && document instanceof window.DocumentTouch)
);

module.exports = HAS_TOUCH;
