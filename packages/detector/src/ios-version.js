import UA from './ua';

const IOS_VERSION = (() => {
	if (/iP[ao]d|iPhone/i.test(UA)) {
		const matches = UA.match(/OS (\d+)_(\d+)/i);
		if (matches && matches.length > 2) {
			return parseFloat(`${matches[1]}.${matches[2]}`);
		}
	}
	return -1;
})();


export default IOS_VERSION;
