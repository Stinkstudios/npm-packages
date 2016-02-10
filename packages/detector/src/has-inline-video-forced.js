import HAS_INLINE_VIDEO from './has-inline-video';
import HAS_WEBGL from './has-webgl';
import IOS_VERSION from './ios-version';

const HAS_INLINE_VIDEO_FORCED = (!HAS_INLINE_VIDEO && HAS_WEBGL && IOS_VERSION >= 8);

export default HAS_INLINE_VIDEO_FORCED;
