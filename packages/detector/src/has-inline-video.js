import IS_IPOD from './is-ipod';
import IS_IPHONE from './is-iphone';

const HAS_INLINE_VIDEO = (() => {
	const videoEl = document.createElement('video');
	const hasVideo = !!videoEl.canPlayType;
	return hasVideo && !(IS_IPOD || IS_IPHONE);
})();

export default HAS_INLINE_VIDEO;
