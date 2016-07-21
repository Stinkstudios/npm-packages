export const VISIBILITY_CHANGE_EVENT_NAME = (() => {
	const props = {
		hidden: 'visibilitychange',
		mozHidden: 'mozvisibilitychange',
		msHidden: 'msvisibilitychange',
		webkitHidden: 'webkitvisibilitychange',
	};
	let value;
	if (!document) return value;
	for (const p in props) { // eslint-disable-line
		if (typeof document[p] !== 'undefined') {
			value = props[p];
			break;
		}
	}
	return value;
})();
