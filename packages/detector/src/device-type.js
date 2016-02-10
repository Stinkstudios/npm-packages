import IS_PHONE from './is-phone';
import IS_TABLET from './is-tablet';

const DEVICE_TYPE = (() => {
	if (IS_PHONE) return 'phone';
	if (IS_TABLET) return 'tablet';
	return 'desktop';
})();

export default DEVICE_TYPE;
