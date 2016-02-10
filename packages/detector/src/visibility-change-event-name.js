const VISIBILITY_CHANGE_EVENT_NAME = (() => {
	let value = undefined;
	const props = {
		hidden: 'visibilitychange',
		mozHidden: 'mozvisibilitychange',
		msHidden: 'msvisibilitychange',
		webkitHidden: 'webkitvisibilitychange',
	};
	for (const p in props) {
		if (typeof document[p] !== 'undefined') {
			value = props[p];
			break;
		}
	}
	return value;
})();

export default VISIBILITY_CHANGE_EVENT_NAME;
