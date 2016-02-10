import HAS_WEBGL from './has-webgl';

const MAX_CUBE_MAP_TEXTURE_SIZE = (() => {
	if (!HAS_WEBGL) {
		return undefined;
	}

	try {
		const canvas = document.createElement('canvas');
		const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
		return gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
	} catch (e) {
		return undefined;
	}
})();

export default MAX_CUBE_MAP_TEXTURE_SIZE;
