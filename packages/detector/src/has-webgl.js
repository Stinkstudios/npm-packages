import IS_IOS from './is-ios';
import IOS_VERSION from './ios-version';

const HAS_WEBGL = (() => {
	if (IS_IOS && IOS_VERSION < 8) {
		return false;
	}

	try {
		if (!window.WebGLRenderingContext) {
			return false;
		}
		const canvas = document.createElement('canvas');
		const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
		gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
	} catch (e) {
		return false;
	}

	return true;
})();

export default HAS_WEBGL;
