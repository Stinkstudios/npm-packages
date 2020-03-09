const VISIBILITY_CHANGE_EVENT_NAME = (() => {
	const props = {
		hidden: 'visibilitychange',
		mozHidden: 'mozvisibilitychange',
		msHidden: 'msvisibilitychange',
		webkitHidden: 'webkitvisibilitychange',
	};
	let value;
	if (typeof document === 'undefined') return value;
	// eslint-disable-next-line no-restricted-syntax
	for (const p in props) {
		if (typeof document[p] !== 'undefined') {
			value = props[p];
			break;
		}
	}
	return value;
})();

export default VISIBILITY_CHANGE_EVENT_NAME;
