/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _androidVersion = __webpack_require__(1);

	var _androidVersion2 = _interopRequireDefault(_androidVersion);

	var _deviceType = __webpack_require__(4);

	var _deviceType2 = _interopRequireDefault(_deviceType);

	var _firefoxVersion = __webpack_require__(8);

	var _firefoxVersion2 = _interopRequireDefault(_firefoxVersion);

	var _hasCanvas = __webpack_require__(10);

	var _hasCanvas2 = _interopRequireDefault(_hasCanvas);

	var _hasFullscreen = __webpack_require__(11);

	var _hasFullscreen2 = _interopRequireDefault(_hasFullscreen);

	var _hasGyro = __webpack_require__(12);

	var _hasGyro2 = _interopRequireDefault(_hasGyro);

	var _hasHistory = __webpack_require__(15);

	var _hasHistory2 = _interopRequireDefault(_hasHistory);

	var _hasInlineVideoForced = __webpack_require__(16);

	var _hasInlineVideoForced2 = _interopRequireDefault(_hasInlineVideoForced);

	var _hasInlineVideo = __webpack_require__(17);

	var _hasInlineVideo2 = _interopRequireDefault(_hasInlineVideo);

	var _hasMouseMove = __webpack_require__(22);

	var _hasMouseMove2 = _interopRequireDefault(_hasMouseMove);

	var _hasTouch = __webpack_require__(23);

	var _hasTouch2 = _interopRequireDefault(_hasTouch);

	var _hasWebgl = __webpack_require__(20);

	var _hasWebgl2 = _interopRequireDefault(_hasWebgl);

	var _hiddenPropertyName = __webpack_require__(24);

	var _hiddenPropertyName2 = _interopRequireDefault(_hiddenPropertyName);

	var _ieVersion = __webpack_require__(25);

	var _ieVersion2 = _interopRequireDefault(_ieVersion);

	var _iosVersion = __webpack_require__(21);

	var _iosVersion2 = _interopRequireDefault(_iosVersion);

	var _isAndroidBrowser = __webpack_require__(26);

	var _isAndroidBrowser2 = _interopRequireDefault(_isAndroidBrowser);

	var _isAndroid = __webpack_require__(3);

	var _isAndroid2 = _interopRequireDefault(_isAndroid);

	var _isChromeIos = __webpack_require__(27);

	var _isChromeIos2 = _interopRequireDefault(_isChromeIos);

	var _isChrome = __webpack_require__(28);

	var _isChrome2 = _interopRequireDefault(_isChrome);

	var _isDesktop = __webpack_require__(14);

	var _isDesktop2 = _interopRequireDefault(_isDesktop);

	var _isFirefox = __webpack_require__(9);

	var _isFirefox2 = _interopRequireDefault(_isFirefox);

	var _isIe = __webpack_require__(29);

	var _isIe2 = _interopRequireDefault(_isIe);

	var _isIos = __webpack_require__(6);

	var _isIos2 = _interopRequireDefault(_isIos);

	var _isIpad = __webpack_require__(30);

	var _isIpad2 = _interopRequireDefault(_isIpad);

	var _isIphone = __webpack_require__(19);

	var _isIphone2 = _interopRequireDefault(_isIphone);

	var _isIpod = __webpack_require__(18);

	var _isIpod2 = _interopRequireDefault(_isIpod);

	var _isLinux = __webpack_require__(31);

	var _isLinux2 = _interopRequireDefault(_isLinux);

	var _isMobile = __webpack_require__(13);

	var _isMobile2 = _interopRequireDefault(_isMobile);

	var _isOpera = __webpack_require__(32);

	var _isOpera2 = _interopRequireDefault(_isOpera);

	var _isOsx = __webpack_require__(33);

	var _isOsx2 = _interopRequireDefault(_isOsx);

	var _isPhone = __webpack_require__(5);

	var _isPhone2 = _interopRequireDefault(_isPhone);

	var _isRetina = __webpack_require__(34);

	var _isRetina2 = _interopRequireDefault(_isRetina);

	var _isSafariIos = __webpack_require__(36);

	var _isSafariIos2 = _interopRequireDefault(_isSafariIos);

	var _isSafari = __webpack_require__(37);

	var _isSafari2 = _interopRequireDefault(_isSafari);

	var _isTablet = __webpack_require__(7);

	var _isTablet2 = _interopRequireDefault(_isTablet);

	var _isWindowsPhone = __webpack_require__(38);

	var _isWindowsPhone2 = _interopRequireDefault(_isWindowsPhone);

	var _isWindows = __webpack_require__(39);

	var _isWindows2 = _interopRequireDefault(_isWindows);

	var _maxCubeTextureSize = __webpack_require__(40);

	var _maxCubeTextureSize2 = _interopRequireDefault(_maxCubeTextureSize);

	var _pixelRatio = __webpack_require__(35);

	var _pixelRatio2 = _interopRequireDefault(_pixelRatio);

	var _transitionEndEventName = __webpack_require__(41);

	var _transitionEndEventName2 = _interopRequireDefault(_transitionEndEventName);

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _visibilityChangeEventName = __webpack_require__(42);

	var _visibilityChangeEventName2 = _interopRequireDefault(_visibilityChangeEventName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Detector = {
		ANDROID_VERSION: _androidVersion2.default,
		DEVICE_TYPE: _deviceType2.default,
		FIREFOX_VERSION: _firefoxVersion2.default,
		HAS_CANVAS: _hasCanvas2.default,
		HAS_FULLSCREEN: _hasFullscreen2.default,
		HAS_GYRO: _hasGyro2.default,
		HAS_HISTORY: _hasHistory2.default,
		HAS_INLINE_VIDEO_FORCED: _hasInlineVideoForced2.default,
		HAS_INLINE_VIDEO: _hasInlineVideo2.default,
		HAS_MOUSE_MOVE: _hasMouseMove2.default,
		HAS_TOUCH: _hasTouch2.default,
		HAS_WEBGL: _hasWebgl2.default,
		HIDDEN_PROPERTY_NAME: _hiddenPropertyName2.default,
		IE_VERSION: _ieVersion2.default,
		IOS_VERSION: _iosVersion2.default,
		IS_ANDROID_BROWSER: _isAndroidBrowser2.default,
		IS_ANDROID: _isAndroid2.default,
		IS_CHROME_IOS: _isChromeIos2.default,
		IS_CHROME: _isChrome2.default,
		IS_DESKTOP: _isDesktop2.default,
		IS_FIREFOX: _isFirefox2.default,
		IS_IE: _isIe2.default,
		IS_IOS: _isIos2.default,
		IS_IPAD: _isIpad2.default,
		IS_IPHONE: _isIphone2.default,
		IS_IPOD: _isIpod2.default,
		IS_LINUX: _isLinux2.default,
		IS_MOBILE: _isMobile2.default,
		IS_OPERA: _isOpera2.default,
		IS_OSX: _isOsx2.default,
		IS_PHONE: _isPhone2.default,
		IS_RETINA: _isRetina2.default,
		IS_SAFARI_IOS: _isSafariIos2.default,
		IS_SAFARI: _isSafari2.default,
		IS_TABLET: _isTablet2.default,
		IS_WINDOWS_PHONE: _isWindowsPhone2.default,
		IS_WINDOWS: _isWindows2.default,
		MAX_CUBE_TEXTURE_SIZE: _maxCubeTextureSize2.default,
		PIXEL_RATIO: _pixelRatio2.default,
		TRANSITION_END_EVENT_NAME: _transitionEndEventName2.default,
		UA: _ua2.default,
		VISIBILITY_CHANGE_EVENT_NAME: _visibilityChangeEventName2.default
	};

	window.Detector = Detector;
	exports.default = Detector;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isAndroid = __webpack_require__(3);

	var _isAndroid2 = _interopRequireDefault(_isAndroid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ANDROID_VERSION = !_isAndroid2.default ? -1 : parseFloat(_ua2.default.slice(_ua2.default.indexOf('Android') + 8));

	exports.default = ANDROID_VERSION;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var UA = navigator.userAgent || navigator.vendor || window.opera;

	exports.default = UA;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_ANDROID = !!_ua2.default.match(/Android/i);

	exports.default = IS_ANDROID;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _isPhone = __webpack_require__(5);

	var _isPhone2 = _interopRequireDefault(_isPhone);

	var _isTablet = __webpack_require__(7);

	var _isTablet2 = _interopRequireDefault(_isTablet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEVICE_TYPE = function () {
		if (_isPhone2.default) return 'phone';
		if (_isTablet2.default) return 'tablet';
		return 'desktop';
	}();

	exports.default = DEVICE_TYPE;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isAndroid = __webpack_require__(3);

	var _isAndroid2 = _interopRequireDefault(_isAndroid);

	var _isIos = __webpack_require__(6);

	var _isIos2 = _interopRequireDefault(_isIos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_PHONE = (_isAndroid2.default || _isIos2.default) && /iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(_ua2.default.toLowerCase()); // eslint-disable-line max-len

	exports.default = IS_PHONE;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_IOS = !!_ua2.default.match(/iP[ao]d|iPhone/i);

	exports.default = IS_IOS;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isAndroid = __webpack_require__(3);

	var _isAndroid2 = _interopRequireDefault(_isAndroid);

	var _isIos = __webpack_require__(6);

	var _isIos2 = _interopRequireDefault(_isIos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_TABLET = (_isAndroid2.default || _isIos2.default) && /ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(_ua2.default.toLowerCase()); // eslint-disable-line

	exports.default = IS_TABLET;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isFirefox = __webpack_require__(9);

	var _isFirefox2 = _interopRequireDefault(_isFirefox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FIREFOX_VERSION = function () {
		if (!_isFirefox2.default) return -1;
		return parseFloat(_ua2.default.slice(_ua2.default.indexOf('Firefox') + 8));
	}();

	exports.default = FIREFOX_VERSION;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_FIREFOX = /Firefox/.test(_ua2.default);

	exports.default = IS_FIREFOX;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HAS_CANVAS = !!window.CanvasRenderingContext2D;

	exports.default = HAS_CANVAS;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var HAS_FULLSCREEN = function () {
		var element = document.body;
		return !!(element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen);
	}();

	exports.default = HAS_FULLSCREEN;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isMobile = __webpack_require__(13);

	var _isMobile2 = _interopRequireDefault(_isMobile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HAS_GYRO = _isMobile2.default;

	exports.default = HAS_GYRO;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isDesktop = __webpack_require__(14);

	var _isDesktop2 = _interopRequireDefault(_isDesktop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_MOBILE = !_isDesktop2.default;

	exports.default = IS_MOBILE;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isPhone = __webpack_require__(5);

	var _isPhone2 = _interopRequireDefault(_isPhone);

	var _isTablet = __webpack_require__(7);

	var _isTablet2 = _interopRequireDefault(_isTablet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_DESKTOP = !_isPhone2.default && !_isTablet2.default;

	exports.default = IS_DESKTOP;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HAS_HISTORY = !!(history && history.pushState);

	exports.default = HAS_HISTORY;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _hasInlineVideo = __webpack_require__(17);

	var _hasInlineVideo2 = _interopRequireDefault(_hasInlineVideo);

	var _hasWebgl = __webpack_require__(20);

	var _hasWebgl2 = _interopRequireDefault(_hasWebgl);

	var _iosVersion = __webpack_require__(21);

	var _iosVersion2 = _interopRequireDefault(_iosVersion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HAS_INLINE_VIDEO_FORCED = !_hasInlineVideo2.default && _hasWebgl2.default && _iosVersion2.default >= 8;

	exports.default = HAS_INLINE_VIDEO_FORCED;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _isIpod = __webpack_require__(18);

	var _isIpod2 = _interopRequireDefault(_isIpod);

	var _isIphone = __webpack_require__(19);

	var _isIphone2 = _interopRequireDefault(_isIphone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HAS_INLINE_VIDEO = function () {
		var videoEl = document.createElement('video');
		var hasVideo = !!videoEl.canPlayType;
		return hasVideo && !(_isIpod2.default || _isIphone2.default);
	}();

	exports.default = HAS_INLINE_VIDEO;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_IPOD = !!_ua2.default.match(/iPod/i);

	exports.default = IS_IPOD;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_IPHONE = !!_ua2.default.match(/iPhone/i);

	exports.default = IS_IPHONE;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _isIos = __webpack_require__(6);

	var _isIos2 = _interopRequireDefault(_isIos);

	var _iosVersion = __webpack_require__(21);

	var _iosVersion2 = _interopRequireDefault(_iosVersion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HAS_WEBGL = function () {
		if (_isIos2.default && _iosVersion2.default < 8) {
			return false;
		}

		try {
			if (!window.WebGLRenderingContext) {
				return false;
			}
			var canvas = document.createElement('canvas');
			var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
		} catch (e) {
			return false;
		}

		return true;
	}();

	exports.default = HAS_WEBGL;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IOS_VERSION = function () {
		if (/iP[ao]d|iPhone/i.test(_ua2.default)) {
			var matches = _ua2.default.match(/OS (\d+)_(\d+)/i);
			if (matches && matches.length > 2) {
				return parseFloat(matches[1] + '.' + matches[2]);
			}
		}
		return -1;
	}();

	exports.default = IOS_VERSION;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isDesktop = __webpack_require__(14);

	var _isDesktop2 = _interopRequireDefault(_isDesktop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HAS_MOUSE_MOVE = _isDesktop2.default;

	exports.default = HAS_MOUSE_MOVE;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var HAS_TOUCH = !!('ontouchstart' in window || 'onmsgesturechange' in window || window.DocumentTouch && document instanceof window.DocumentTouch);

	exports.default = HAS_TOUCH;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var HIDDEN_PROPERTY_NAME = function () {
		var value = undefined;
		var props = {
			hidden: 'hidden',
			mozHidden: 'mozHidden',
			msHidden: 'msHidden',
			webkitHidden: 'webkitHidden'
		};
		for (var p in props) {
			if (typeof document[p] !== 'undefined') {
				value = props[p];
				break;
			}
		}
		return value;
	}();

	exports.default = HIDDEN_PROPERTY_NAME;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IE_VERSION = function () {
		var v = -1;
		if (/MSIE (\d+\.\d+);/.test(_ua2.default)) {
			v = parseInt(RegExp.$1, 10);
		} else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(_ua2.default)) {
			v = parseInt(RegExp.$3, 10);
		}
		return v;
	}();

	exports.default = IE_VERSION;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_ANDROID_BROWSER = function () {
		var matches = _ua2.default.match(/Android.*AppleWebKit\/([\d.]+)/);
		return !!matches && matches[1] < 537;
	}();

	exports.default = IS_ANDROID_BROWSER;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isIos = __webpack_require__(6);

	var _isIos2 = _interopRequireDefault(_isIos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_CHROME_IOS = _isIos2.default && /CriOS/.test(_ua2.default);

	exports.default = IS_CHROME_IOS;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_CHROME = /Chrome/.test(_ua2.default);

	exports.default = IS_CHROME;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ieVersion = __webpack_require__(25);

	var _ieVersion2 = _interopRequireDefault(_ieVersion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_IE = _ieVersion2.default > -1;

	exports.default = IS_IE;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_IPAD = !!_ua2.default.match(/iPad/i);

	exports.default = IS_IPAD;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_LINUX = /Linux/.test(_ua2.default);

	exports.default = IS_LINUX;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_OPERA = /Opera/.test(_ua2.default);

	exports.default = IS_OPERA;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isIos = __webpack_require__(6);

	var _isIos2 = _interopRequireDefault(_isIos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_OSX = !_isIos2.default && /Mac OS/.test(_ua2.default);

	exports.default = IS_OSX;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pixelRatio = __webpack_require__(35);

	var _pixelRatio2 = _interopRequireDefault(_pixelRatio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_RETINA = _pixelRatio2.default > 1;

	exports.default = IS_RETINA;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var PIXEL_RATIO = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI || 1;

	exports.default = PIXEL_RATIO;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isIos = __webpack_require__(6);

	var _isIos2 = _interopRequireDefault(_isIos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_SAFARI_IOS = _isIos2.default && /AppleWebKit/.test(_ua2.default);

	exports.default = IS_SAFARI_IOS;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isAndroidBrowser = __webpack_require__(26);

	var _isAndroidBrowser2 = _interopRequireDefault(_isAndroidBrowser);

	var _isChrome = __webpack_require__(28);

	var _isChrome2 = _interopRequireDefault(_isChrome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_SAFARI = !_isAndroidBrowser2.default && !_isChrome2.default && /Safari/.test(_ua2.default);

	exports.default = IS_SAFARI;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_WINDOWS_PHONE = /Windows Phone/i.test(_ua2.default);

	exports.default = IS_WINDOWS_PHONE;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ua = __webpack_require__(2);

	var _ua2 = _interopRequireDefault(_ua);

	var _isWindowsPhone = __webpack_require__(38);

	var _isWindowsPhone2 = _interopRequireDefault(_isWindowsPhone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IS_WINDOWS = !_isWindowsPhone2.default && /Windows/.test(_ua2.default);

	exports.default = IS_WINDOWS;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _hasWebgl = __webpack_require__(20);

	var _hasWebgl2 = _interopRequireDefault(_hasWebgl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MAX_CUBE_MAP_TEXTURE_SIZE = function () {
		if (!_hasWebgl2.default) {
			return undefined;
		}

		try {
			var canvas = document.createElement('canvas');
			var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			return gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
		} catch (e) {
			return undefined;
		}
	}();

	exports.default = MAX_CUBE_MAP_TEXTURE_SIZE;

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var TRANSITION_END_EVENT_NAME = function () {
		var el = document.createElement('fakeelement');
		var transitions = {
			transition: 'transitionend',
			OTransition: 'oTransitionEnd',
			MozTransition: 'transitionend',
			WebkitTransition: 'webkitTransitionEnd'
		};
		var transitionend = undefined;
		for (var t in transitions) {
			if (el.style[t] !== undefined) {
				transitionend = transitions[t];
				break;
			}
		}
		return transitionend;
	}();

	exports.default = TRANSITION_END_EVENT_NAME;

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var VISIBILITY_CHANGE_EVENT_NAME = function () {
		var value = undefined;
		var props = {
			hidden: 'visibilitychange',
			mozHidden: 'mozvisibilitychange',
			msHidden: 'msvisibilitychange',
			webkitHidden: 'webkitvisibilitychange'
		};
		for (var p in props) {
			if (typeof document[p] !== 'undefined') {
				value = props[p];
				break;
			}
		}
		return value;
	}();

	exports.default = VISIBILITY_CHANGE_EVENT_NAME;

/***/ }
/******/ ]);