var FULLSCREEN_ERROR_EVENT_NAME = (function () {
	var el = document.createElement('fakeelement');
	var fullscreenerrors = {
		fullscreenerror: 'fullscreenerror',
		MozFullscreenerror: 'mozfullscreenerror',
		WebkitFullscreenerror: 'webkitfullscreenerror',
	};
	var fullscreenerror;
	for (var t in fullscreenerrors) {
		if (el.style[t] !== undefined) {
			fullscreenerror = fullscreenerrors[t];
			break;
		}
	}
	return fullscreenerror;
})();

module.exports = FULLSCREEN_ERROR_EVENT_NAME;
