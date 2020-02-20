const HIDDEN_PROPERTY_NAME = (() => {
	const props = {
		hidden: 'hidden',
		mozHidden: 'mozHidden',
		msHidden: 'msHidden',
		webkitHidden: 'webkitHidden',
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

export default HIDDEN_PROPERTY_NAME;
