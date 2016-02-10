const HAS_TOUCH = !!(
	'ontouchstart' in window ||
	'onmsgesturechange' in window ||
	(window.DocumentTouch && document instanceof window.DocumentTouch)
);

export default HAS_TOUCH;
