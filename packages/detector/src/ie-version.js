import UA from './ua';

const IE_VERSION = (() => {
	let v = -1;
	if (/MSIE (\d+\.\d+);/.test(UA)) {
		v = parseInt(RegExp.$1, 10);
	} else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(UA)) {
		v = parseInt(RegExp.$3, 10);
	}
	return v;
})();

export default IE_VERSION;
