
var FULLSCREEN_CHANGE_EVENT_NAME = (function () {
	var el = document.createElement('fakeelement');
	var fullscreenchanges = {
		fullscreenchange: 'fullscreenchange',
		MozFullscreenchange: 'mozfullscreenchange',
		WebkitFullscreenchange: 'webkitfullscreenchange',
	};
	var fullscreenchange;
	for (var t in fullscreenchanges) {
		if (el.style[t] !== undefined) {
			fullscreenchange = fullscreenchanges[t];
			break;
		}
	}
	return fullscreenchange;
})();

module.exports = FULLSCREEN_CHANGE_EVENT_NAME;
