import UA from './ua';
import IS_FIREFOX from './is-firefox';

const FIREFOX_VERSION = (() => {
	if (!IS_FIREFOX) return -1;
	return parseFloat(UA.slice(UA.indexOf('Firefox') + 8));
})();

export default FIREFOX_VERSION;
