'use strict';

exports.__esModule = true;
var VISIBILITY_CHANGE_EVENT_NAME = function () {
	var props = {
		hidden: 'visibilitychange',
		mozHidden: 'mozvisibilitychange',
		msHidden: 'msvisibilitychange',
		webkitHidden: 'webkitvisibilitychange'
	};
	var value = void 0;
	if (typeof document === 'undefined') return value;
	for (var p in props) {
		// eslint-disable-line
		if (typeof document[p] !== 'undefined') {
			value = props[p];
			break;
		}
	}
	return value;
}();

exports.default = VISIBILITY_CHANGE_EVENT_NAME;
module.exports = exports['default'];