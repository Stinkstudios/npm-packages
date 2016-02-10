const HIDDEN_PROPERTY_NAME = (() => {
	let value = undefined;
	const props = {
		hidden: 'hidden',
		mozHidden: 'mozHidden',
		msHidden: 'msHidden',
		webkitHidden: 'webkitHidden',
	};
	for (const p in props) {
		if (typeof document[p] !== 'undefined') {
			value = props[p];
			break;
		}
	}
	return value;
})();

export default HIDDEN_PROPERTY_NAME;
