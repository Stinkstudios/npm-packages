var IS_IPOD = require('./is-ipod');
var IS_IPHONE = require('./is-iphone');

var HAS_INLINE_VIDEO = (function () {
	var videoEl = document.createElement('video');
	var hasVideo = !!videoEl.canPlayType;
	return hasVideo && !(IS_IPOD || IS_IPHONE);
})();

module.exports = HAS_INLINE_VIDEO;
