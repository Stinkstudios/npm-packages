const HIDDEN_PROPERTY_NAME = (() => {
	const props = {
		hidden: 'hidden',
		mozHidden: 'mozHidden',
		msHidden: 'msHidden',
		webkitHidden: 'webkitHidden',
	};
	let value;
	if (typeof document === 'undefined') return value;
	for (const p in props) { // eslint-disable-line
		if (typeof document[p] !== 'undefined') {
			value = props[p];
			break;
		}
	}
	return value;
})();

export default HIDDEN_PROPERTY_NAME;
