import UA from './ua';

const IS_ANDROID_BROWSER = (() => {
	const matches = UA.match(/Android.*AppleWebKit\/([\d.]+)/);
	return !!matches && matches[1] < 537;
})();

export default IS_ANDROID_BROWSER;
