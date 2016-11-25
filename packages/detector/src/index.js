var Detector = {
	version : __VERSION__,
	ANDROID_VERSION : require('./android-version'),
	DEVICE_TYPE : require('./device-type'),
	FIREFOX_VERSION : require('./firefox-version'),
	FULLSCREEN_CHANGE_EVENT_NAME : require('./fullscreen-change-event-name'),
	FULLSCREEN_ERROR_EVENT_NAME : require('./fullscreen-error-event-name'),
	HAS_CANVAS : require('./has-canvas'),
	HAS_DEVICE_ORIENTATION_EVENT : require('./has-device-orientation-event'),
	HAS_FULLSCREEN : require('./has-fullscreen'),
	HAS_GYRO : require('./has-gyro'),
	HAS_HISTORY : require('./has-history'),
	HAS_INLINE_VIDEO : require('./has-inline-video'),
	HAS_INLINE_VIDEO_FORCED : require('./has-inline-video-forced'),
	HAS_MOUSE_MOVE : require('./has-mouse-move'),
	HAS_OGG_VORBIS : require('./has-ogg-vorbis'),
	HAS_TOUCH : require('./has-touch'),
	HAS_WEBGL : require('./has-webgl'),
	HIDDEN_PROPERTY_NAME : require('./hidden-property-name'),
	IE_VERSION : require('./ie-version'),
	IOS_VERSION : require('./ios-version'),
	IS_ANDROID : require('./is-android'),
	IS_ANDROID_BROWSER : require('./is-android-browser'),
	IS_CHROME : require('./is-chrome'),
	IS_CHROME_IOS : require('./is-chrome-ios'),
	IS_DESKTOP : require('./is-desktop'),
	IS_FIREFOX : require('./is-firefox'),
	IS_IE : require('./is-ie'),
	IS_IOS : require('./is-ios'),
	IS_IPAD : require('./is-ipad'),
	IS_IPHONE : require('./is-iphone'),
	IS_IPOD : require('./is-ipod'),
	IS_LINUX : require('./is-linux'),
	IS_MOBILE : require('./is-mobile'),
	IS_OPERA : require('./is-opera'),
	IS_OSX : require('./is-osx'),
	IS_PHONE : require('./is-phone'),
	IS_RETINA : require('./is-retina'),
	IS_SAFARI : require('./is-safari'),
	IS_SAFARI_IOS : require('./is-safari-ios'),
	IS_TABLET : require('./is-tablet'),
	IS_WINDOWS : require('./is-windows'),
	IS_WINDOWS_PHONE : require('./is-windows-phone'),
	MAX_CUBE_TEXTURE_SIZE : require('./max-cube-texture-size'),
	PIXEL_RATIO : require('./pixel-ratio'),
	SAFARI_VERSION : require('./safari-version'),
	TRANSITION_END_EVENT_NAME : require('./transition-end-event-name'),
	UA : require('./ua'),
	VISIBILITY_CHANGE_EVENT_NAME : require('./visibility-change-event-name')
};

// TODO: Figure out better way to expose it to window
window.Detector = Detector;

module.exports = Detector;
