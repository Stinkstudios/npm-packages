export var HIDDEN_PROPERTY_NAME = function () {
	var props = {
		hidden: 'hidden',
		mozHidden: 'mozHidden',
		msHidden: 'msHidden',
		webkitHidden: 'webkitHidden'
	};
	var value = void 0;
	if (!document) return value;
	for (var p in props) {
		// eslint-disable-line
		if (typeof document[p] !== 'undefined') {
			value = props[p];
			break;
		}
	}
	return value;
}();