var UA = require('./ua');
var IS_SAFARI = require('./is-safari');

var SAFARI_VERSION = (function () {
	if (!IS_SAFARI) return -1;
	return parseFloat(UA.slice(UA.indexOf('Version/') + 8, UA.indexOf(' Safari/')));
})();

module.exports = SAFARI_VERSION;
