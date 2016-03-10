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
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// main.js

	console.log('test class');

	var options = {
		// youtubeId:"vFr3K2DORc8",
		src: "assets/test.mp4",
		// audioSrc:"assets/interview.mp3",
		onEnd: onVideoEnd,
		onPlay: onVideoPlay,
		onPause: onVideoPause,
		onProgress: onVideoProgress
	};
	var videoPlayer = new _index2.default(options);

	console.log("Element :", videoPlayer.domElement);
	document.body.appendChild(videoPlayer.el);

	videoPlayer.el.style.width = '1280px';
	videoPlayer.el.style.height = '720px';
	videoPlayer.el.style.position = 'absolute';
	videoPlayer.setLoop(true);

	window.addEventListener("touchend", function () {
		videoPlayer.play();
	});

	window.addEventListener("click", function () {
		videoPlayer.play();
	});

	setTimeout(function () {
		videoPlayer.setVolume(.5);
		videoPlayer.seek(5);
	}, 1000);

	setTimeout(function () {
		console.log('Volume : ', videoPlayer.getVolume());
	}, 1000);

	loop();

	function loop() {
		// if(Math.random() > .9) console.log(videoPlayer.getCurrentTime() , videoPlayer.getDuration() );

		window.requestAnimationFrame(loop);
	}

	function onVideoEnd(e) {
		console.debug('Video Ended', e);
	}

	function onVideoPlay(e) {
		console.debug('Video Play', e);
	}

	function onVideoPause(e) {
		console.debug('Video Pause', e);
	}

	function onVideoProgress(e) {
		if (Math.random() > .9) console.debug('Video Progress', e);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _VideoPlayer = __webpack_require__(3);

	var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _VideoPlayer2.default; // index.js


	window.VideoPlayer = _VideoPlayer2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _YoutubePlayer = __webpack_require__(9);

	var _YoutubePlayer2 = _interopRequireDefault(_YoutubePlayer);

	var _BasicPlayer = __webpack_require__(71);

	var _BasicPlayer2 = _interopRequireDefault(_BasicPlayer);

	var _InlinePlayer = __webpack_require__(96);

	var _InlinePlayer2 = _interopRequireDefault(_InlinePlayer);

	var _detector = __webpack_require__(127);

	var _detector2 = _interopRequireDefault(_detector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// VideoPlayer.js

	var VideoPlayer = function () {
		function VideoPlayer() {
			var mOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			(0, _classCallCheck3.default)(this, VideoPlayer);

			this.isMobile = _detector2.default.IS_MOBILE;

			if (mOptions.domElement) {
				this._container = mOptions.domElement;
			} else {
				this._container = document.createElement('div');
			}

			if (mOptions.youtubeId) {
				this._player = new _YoutubePlayer2.default(mOptions.youtubeId, this._container, mOptions);
			} else {
				var forceNativePlayer = !!mOptions.forceNativePlayer;

				if (this.isMobile) {
					if (forceNativePlayer) {
						this._player = new _BasicPlayer2.default(mOptions.src, this._container, mOptions);
					} else {
						this._player = new _InlinePlayer2.default(mOptions.src, this._container, mOptions);
					}
				} else {
					this._player = new _BasicPlayer2.default(mOptions.src, this._container, mOptions);
				}
			}
		}

		//	PUBLIC METHODS

		(0, _createClass3.default)(VideoPlayer, [{
			key: 'play',
			value: function play() {
				if (!this._player) {
					return;
				}
				this._player.play();
			}
		}, {
			key: 'pause',
			value: function pause() {
				if (!this._player) {
					return;
				}
				this._player.pause();
			}
		}, {
			key: 'seek',
			value: function seek(time) {
				if (!this._player) {
					return;
				}
				this._player.seek(time);
			}
		}, {
			key: 'getCurrentTime',
			value: function getCurrentTime() {
				if (!this._player) {
					return null;
				}
				return this._player.getCurrentTime();
			}
		}, {
			key: 'getDuration',
			value: function getDuration() {
				if (!this._player) {
					return null;
				}
				return this._player.getDuration();
			}
		}, {
			key: 'getVolume',
			value: function getVolume() {
				if (!this._player) {
					return null;
				}
				return this._player.getVolume();
			}
		}, {
			key: 'setVolume',
			value: function setVolume(volume) {
				if (!this._player) {
					return;
				}

				this._player.setVolume(volume);
			}
		}, {
			key: 'isPlaying',
			value: function isPlaying() {}
		}, {
			key: 'setLoop',
			value: function setLoop(value) {
				if (!this._player) {
					return;
				}
				this._player.setLoop(value);
			}

			//	GET DOM ELEMENT

		}, {
			key: 'domElement',
			get: function get() {
				return this._container;
			}
		}, {
			key: 'el',
			get: function get() {
				return this._container;
			}
		}]);
		return VideoPlayer;
	}();

	exports.default = VideoPlayer;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(6);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _promise = __webpack_require__(25);

	var _promise2 = _interopRequireDefault(_promise);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _loadScript = __webpack_require__(70);

	var _loadScript2 = _interopRequireDefault(_loadScript);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SDK_URL = '//www.youtube.com/iframe_api';
	var SDK_GLOBAL = 'YT';
	var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';

	var DEFAULT_PLAYER_VARS = {
		autoplay: 0,
		controls: 0,
		playsinline: 1,
		showinfo: 0,
		rel: 0,
		iv_load_policy: 3
	};

	var YoutubePlayer = function () {
		function YoutubePlayer(mYoutubeID, mContainer) {
			(0, _classCallCheck3.default)(this, YoutubePlayer);

			this._container = mContainer;
			this._el = document.createElement('div');
			this._el.setAttribute('id', 'youtube-player');
			this._container.appendChild(this._el);
			this._isReady = false;
			this._loadingSDK = false;
			this._loadOnReady = '';
			this.load(mYoutubeID);
		}

		(0, _createClass3.default)(YoutubePlayer, [{
			key: '_getSDK',
			value: function _getSDK() {
				if (window[SDK_GLOBAL]) {
					return _promise2.default.resolve(window[SDK_GLOBAL]);
				}

				return new _promise2.default(function (resolve, reject) {
					var previousOnReady = window[SDK_GLOBAL_READY];
					window[SDK_GLOBAL_READY] = function sdkReady() {
						if (previousOnReady) {
							previousOnReady();
						}
						resolve(window[SDK_GLOBAL]);
					};
					(0, _loadScript2.default)(SDK_URL, function (err) {
						if (err) {
							reject(err);
						}
					});
				});
			}
		}, {
			key: 'load',
			value: function load(mUrl) {
				var _this = this;

				if (this.isReady) {
					return;
				}

				if (this._loadingSDK) {
					this._loadOnReady = mUrl;

					return;
				}

				this._getSDK().then(function (YT) {
					_this.player = new YT.Player('youtube-player', {
						width: '100%',
						height: '100%',
						videoId: mUrl,
						playerVars: (0, _extends3.default)({}, DEFAULT_PLAYER_VARS, {
							origin: window.location.origin
						}),
						events: {
							onReady: function onReady() {
								_this._loadingSDK = false;
								_this._onReady();
							},
							onStateChange: _this._onStateChange,
							onError: function onError(event) {
								return _this.props.onError(event.data);
							}
						}
					});
				});
			}

			//	IMPLEMENT INTERFACE

		}, {
			key: 'play',
			value: function play() {
				if (!this._isReady) {
					return;
				}
				this.player.playVideo();
			}
		}, {
			key: 'pause',
			value: function pause() {
				if (!this._isReady) {
					return;
				}
				this.player.pauseVideo();
			}
		}, {
			key: 'stop',
			value: function stop() {
				if (!this._isReady) {
					return;
				}
				this.player.stopVideo();
			}
		}, {
			key: 'seek',
			value: function seek(time) {
				if (!this._isReady || !this.player.seekTo) {
					return;
				}
				this.player.seekTo(time);
			}
		}, {
			key: 'getDuration',
			value: function getDuration() {
				if (!this._isReady || !this.player.getDuration()) {
					return null;
				}
				return this.player.getDuration();
			}
		}, {
			key: 'getCurrentTime',
			value: function getCurrentTime() {
				if (!this._isReady || !this.player.getCurrentTime()) return null;
				return this.player.getCurrentTime();
			}
		}, {
			key: 'getVolume',
			value: function getVolume() {
				if (!this._isReady || !this.player.setVolume) {
					return null;
				}
				return this.player.getVolume();
			}
		}, {
			key: 'setVolume',
			value: function setVolume(volume) {
				if (!this._isReady || !this.player.setVolume) {
					return;
				}
				this.player.setVolume(volume * 100);
			}
		}, {
			key: '_onStateChange',
			value: function _onStateChange() {
				// console.log('on State Change : ', e);
			}
		}, {
			key: '_onReady',
			value: function _onReady() {
				this._isReady = true;
				if (this._loadOnReady) {
					this.load(this._loadOnReady);
					this._loadOnReady = null;
				} else {
					this.play();
				}
			}
		}]);
		return YoutubePlayer;
	}();

	exports.default = YoutubePlayer;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(11)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	module.exports = __webpack_require__(16).Object.assign;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(14);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(19)});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , core      = __webpack_require__(16)
	  , ctx       = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(8)
	  , toObject = __webpack_require__(20)
	  , IObject  = __webpack_require__(22);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(24)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(21);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(23);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(26), __esModule: true };

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(44);
	__webpack_require__(49);
	module.exports = __webpack_require__(16).Promise;

/***/ },
/* 27 */
/***/ function(module, exports) {

	

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(29)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(31)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30)
	  , defined   = __webpack_require__(21);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(32)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(33)
	  , hide           = __webpack_require__(34)
	  , has            = __webpack_require__(37)
	  , Iterators      = __webpack_require__(38)
	  , $iterCreate    = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(40)
	  , getProto       = __webpack_require__(8).getProto
	  , ITERATOR       = __webpack_require__(41)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(34);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(8)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(36) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 37 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(8)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(40)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(34)(IteratorPrototype, __webpack_require__(41)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).setDesc
	  , has = __webpack_require__(37)
	  , TAG = __webpack_require__(41)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(42)('wks')
	  , uid    = __webpack_require__(43)
	  , Symbol = __webpack_require__(15).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(15)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45);
	var Iterators = __webpack_require__(38);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(46)
	  , step             = __webpack_require__(47)
	  , Iterators        = __webpack_require__(38)
	  , toIObject        = __webpack_require__(48);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(31)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(22)
	  , defined = __webpack_require__(21);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(8)
	  , LIBRARY    = __webpack_require__(32)
	  , global     = __webpack_require__(15)
	  , ctx        = __webpack_require__(17)
	  , classof    = __webpack_require__(50)
	  , $export    = __webpack_require__(14)
	  , isObject   = __webpack_require__(51)
	  , anObject   = __webpack_require__(52)
	  , aFunction  = __webpack_require__(18)
	  , strictNew  = __webpack_require__(53)
	  , forOf      = __webpack_require__(54)
	  , setProto   = __webpack_require__(59).set
	  , same       = __webpack_require__(60)
	  , SPECIES    = __webpack_require__(41)('species')
	  , speciesConstructor = __webpack_require__(61)
	  , asap       = __webpack_require__(62)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;

	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(36)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(67)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(40)(P, PROMISE);
	__webpack_require__(68)(PROMISE);
	Wrapper = __webpack_require__(16)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(23)
	  , TAG = __webpack_require__(41)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(51);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(17)
	  , call        = __webpack_require__(55)
	  , isArrayIter = __webpack_require__(56)
	  , anObject    = __webpack_require__(52)
	  , toLength    = __webpack_require__(57)
	  , getIterFn   = __webpack_require__(58);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(52);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(38)
	  , ITERATOR   = __webpack_require__(41)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(30)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(50)
	  , ITERATOR  = __webpack_require__(41)('iterator')
	  , Iterators = __webpack_require__(38);
	module.exports = __webpack_require__(16).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(8).getDesc
	  , isObject = __webpack_require__(51)
	  , anObject = __webpack_require__(52);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(17)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(52)
	  , aFunction = __webpack_require__(18)
	  , SPECIES   = __webpack_require__(41)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(15)
	  , macrotask = __webpack_require__(63).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(23)(process) == 'process'
	  , head, last, notify;

	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};

	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}

	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(17)
	  , invoke             = __webpack_require__(64)
	  , html               = __webpack_require__(65)
	  , cel                = __webpack_require__(66)
	  , global             = __webpack_require__(15)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(23)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15).document && document.documentElement;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(51)
	  , document = __webpack_require__(15).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(33);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(16)
	  , $           = __webpack_require__(8)
	  , DESCRIPTORS = __webpack_require__(36)
	  , SPECIES     = __webpack_require__(41)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(41)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	
	module.exports = function load (src, opts, cb) {
	  var head = document.head || document.getElementsByTagName('head')[0]
	  var script = document.createElement('script')

	  if (typeof opts === 'function') {
	    cb = opts
	    opts = {}
	  }

	  opts = opts || {}
	  cb = cb || function() {}

	  script.type = opts.type || 'text/javascript'
	  script.charset = opts.charset || 'utf8';
	  script.async = 'async' in opts ? !!opts.async : true
	  script.src = src

	  if (opts.attrs) {
	    setAttributes(script, opts.attrs)
	  }

	  if (opts.text) {
	    script.text = '' + opts.text
	  }

	  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
	  onend(script, cb)

	  // some good legacy browsers (firefox) fail the 'in' detection above
	  // so as a fallback we always set onload
	  // old IE will ignore this and new IE will set onload
	  if (!script.onload) {
	    stdOnEnd(script, cb);
	  }

	  head.appendChild(script)
	}

	function setAttributes(script, attrs) {
	  for (var attr in attrs) {
	    script.setAttribute(attr, attrs[attr]);
	  }
	}

	function stdOnEnd (script, cb) {
	  script.onload = function () {
	    this.onerror = this.onload = null
	    cb(null, script)
	  }
	  script.onerror = function () {
	    // this.onload = null here is necessary
	    // because even IE9 works not like others
	    this.onerror = this.onload = null
	    cb(new Error('Failed to load ' + this.src), script)
	  }
	}

	function ieOnEnd (script, cb) {
	  script.onreadystatechange = function () {
	    if (this.readyState != 'complete' && this.readyState != 'loaded') return
	    this.onreadystatechange = null
	    cb(null, script) // there is no way to catch loading errors in IE8
	  }
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(72);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(76);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(85);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(89);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _AbstractPlayer2 = __webpack_require__(95);

	var _AbstractPlayer3 = _interopRequireDefault(_AbstractPlayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BasicPlayer = function (_AbstractPlayer) {
		(0, _inherits3.default)(BasicPlayer, _AbstractPlayer);

		function BasicPlayer(mSrc, mContainer) {
			var mOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
			(0, _classCallCheck3.default)(this, BasicPlayer);

			var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BasicPlayer).call(this, mOptions));

			_this._player = document.createElement('video');
			_this._player.style.width = '100%';
			_this._player.style.height = '100%';

			if (mContainer) {
				_this._container = mContainer;
				_this._container.appendChild(_this._player);
			}

			_this._player.src = mSrc;
			_this._addListeners();
			_this.play();
			return _this;
		}

		(0, _createClass3.default)(BasicPlayer, [{
			key: 'play',
			value: function play() {
				if (!this._player) {
					return;
				}
				this._player.play();
			}
		}, {
			key: 'pause',
			value: function pause() {
				if (!this._player) {
					return;
				}
				this._player.pause();
			}
		}, {
			key: 'seek',
			value: function seek(time) {
				if (!this._player) {
					return;
				}
				this._player.currentTime = time;
			}
		}, {
			key: 'getCurrentTime',
			value: function getCurrentTime() {
				if (!this._player) {
					return null;
				}
				return this._player.currentTime;
			}
		}, {
			key: 'getDuration',
			value: function getDuration() {
				if (!this._player) {
					return null;
				}
				return this._player.duration;
			}
		}, {
			key: 'getVolume',
			value: function getVolume() {
				if (!this._player) {
					return null;
				}
				return this._player.volume;
			}
		}, {
			key: 'setVolume',
			value: function setVolume(volume) {
				if (!this._player) {
					return;
				}

				this._player.volume = volume;
			}
		}, {
			key: 'setLoop',
			value: function setLoop(value) {
				if (!this._player) {
					return;
				}
				this._player.loop = value;
				(0, _get3.default)((0, _getPrototypeOf2.default)(BasicPlayer.prototype), 'setLoop', this).call(this, value);
			}
		}, {
			key: 'getPlayer',
			value: function getPlayer() {
				return this._player;
			}

			//	EVENT LISTENERS

		}, {
			key: '_addListeners',
			value: function _addListeners() {
				this._removeListeners();

				this._player.addEventListener('ended', this._endedBind);
				this._player.addEventListener('error', this._errorBind);
				this._player.addEventListener('play', this._playBind);
				this._player.addEventListener('pause', this._pauseBind);
				this._player.addEventListener('progress', this._progressBind);
			}
		}, {
			key: '_removeListeners',
			value: function _removeListeners() {
				this._player.removeEventListener('ended', this._endedBind);
				this._player.removeEventListener('error', this._errorBind);
				this._player.removeEventListener('play', this._playBind);
				this._player.removeEventListener('pause', this._pauseBind);
				this._player.removeEventListener('progress', this._progressBind);
			}

			//	Destroy

		}, {
			key: 'destroy',
			value: function destroy() {
				if (!this._player) {
					return;
				}

				(0, _get3.default)((0, _getPrototypeOf2.default)(BasicPlayer.prototype), 'destroy', this).call(this);

				this._player.pause();
				try {
					this._player.parentNode.removeChild(this._player);
				} catch (e) {
					// console.log('Error remove player element : ', this._player, this._player.parentNode);
				}
				this._player = null;
			}
		}]);
		return BasicPlayer;
	}(_AbstractPlayer3.default); // BasicPlayer.js


	exports.default = BasicPlayer;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(74);
	module.exports = __webpack_require__(16).Object.getPrototypeOf;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(20);

	__webpack_require__(75)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(16)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(77);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Symbol = __webpack_require__(78)["default"];

	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};

	exports.__esModule = true;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80);
	__webpack_require__(27);
	module.exports = __webpack_require__(16).Symbol;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(8)
	  , global         = __webpack_require__(15)
	  , has            = __webpack_require__(37)
	  , DESCRIPTORS    = __webpack_require__(36)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(33)
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(42)
	  , setToStringTag = __webpack_require__(40)
	  , uid            = __webpack_require__(43)
	  , wks            = __webpack_require__(41)
	  , keyOf          = __webpack_require__(81)
	  , $names         = __webpack_require__(82)
	  , enumKeys       = __webpack_require__(83)
	  , isArray        = __webpack_require__(84)
	  , anObject       = __webpack_require__(52)
	  , toIObject      = __webpack_require__(48)
	  , createDesc     = __webpack_require__(35)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(32)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(8)
	  , toIObject = __webpack_require__(48);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(48)
	  , getNames  = __webpack_require__(8).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(8);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(23);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(86)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	__webpack_require__(88);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(48);

	__webpack_require__(75)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(90)["default"];

	var _Object$setPrototypeOf = __webpack_require__(92)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(94);
	module.exports = __webpack_require__(16).Object.setPrototypeOf;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(59).set});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// AbstractPlayer.js

	var AbstractPlayer = function () {
		function AbstractPlayer() {
			var mOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			(0, _classCallCheck3.default)(this, AbstractPlayer);

			this._looping = false;
			this._options = mOptions;

			this._init();
		}

		(0, _createClass3.default)(AbstractPlayer, [{
			key: "_init",
			value: function _init() {
				this._endedBind = this._onVideoEnd.bind(this);
				this._errorBind = this._onVideoError.bind(this);
				this._playBind = this._onVideoPlay.bind(this);
				this._pauseBind = this._onVideoPause.bind(this);
				this._progressBind = this._onVideoProgress.bind(this);

				this._callbackEnd = this._options.onEnd;
				this._callbackError = this._options.onError;
				this._callbackPlay = this._options.onPlay;
				this._callbackPause = this._options.onPause;
				this._callbackProgress = this._options.onProgress;
			}
		}, {
			key: "_onVideoEnd",
			value: function _onVideoEnd(e) {
				if (this._callbackEnd) {
					this._callbackEnd(e);
				}
			}
		}, {
			key: "_onVideoError",
			value: function _onVideoError(e) {
				if (this._callbackError) {
					this._callbackError(e);
				}
			}
		}, {
			key: "_onVideoPlay",
			value: function _onVideoPlay(e) {
				if (this._callbackPlay) {
					this._callbackPlay(e);
				}
			}
		}, {
			key: "_onVideoPause",
			value: function _onVideoPause(e) {
				if (this._callbackPause) {
					this._callbackPause(e);
				}
			}
		}, {
			key: "_onVideoProgress",
			value: function _onVideoProgress(e) {
				if (this._callbackProgress) {
					this._callbackProgress(e);
				}
			}
		}, {
			key: "setLoop",
			value: function setLoop(value) {
				this._looping = value;
			}
		}, {
			key: "destroy",
			value: function destroy() {
				this._removeListeners();
			}
		}]);
		return AbstractPlayer;
	}();

	exports.default = AbstractPlayer;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(72);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(5);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(76);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(89);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _AbstractPlayer2 = __webpack_require__(95);

	var _AbstractPlayer3 = _interopRequireDefault(_AbstractPlayer2);

	var _BasicPlayer = __webpack_require__(71);

	var _BasicPlayer2 = _interopRequireDefault(_BasicPlayer);

	var _sono = __webpack_require__(97);

	var _sono2 = _interopRequireDefault(_sono);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InlinePlayer = function (_AbstractPlayer) {
		(0, _inherits3.default)(InlinePlayer, _AbstractPlayer);

		function InlinePlayer(mSrc, mContainer) {
			var mOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
			(0, _classCallCheck3.default)(this, InlinePlayer);

			var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InlinePlayer).call(this, mOptions));

			_this._basicPlayer = new _BasicPlayer2.default(mSrc, null, mOptions);

			_this._canvas = document.createElement('canvas');
			_this._ctx = _this._canvas.getContext('2d');
			_this._time = 0;

			_this._container = mContainer;
			_this._container.appendChild(_this._canvas);
			_this._hasSetSize = false;
			_this._loop();
			_this._isPlaying = false;

			if (mOptions.audioSrc) {
				_this._sound = _sono2.default.createSound({
					src: mOptions.audioSrc,
					loop: false,
					volume: 1
				});
			}
			return _this;
		}

		(0, _createClass3.default)(InlinePlayer, [{
			key: 'play',
			value: function play() {
				if (!this._basicPlayer) {
					return;
				}
				this._basicPlayer.getPlayer().load();
				this._isPlaying = true;
				if (this._sound) {
					this._sound.play();
				}
			}
		}, {
			key: 'pause',
			value: function pause() {
				if (!this._basicPlayer) {
					return;
				}
				this._isPlaying = false;

				if (this._sound) {
					this._sound.pause();
				}
			}
		}, {
			key: 'seek',
			value: function seek(time) {
				if (!this._basicPlayer) {
					return;
				}
				this._time = time;
			}
		}, {
			key: 'getCurrentTime',
			value: function getCurrentTime() {
				if (!this._basicPlayer) {
					return null;
				}
				return this._basicPlayer.getCurrentTime();
			}
		}, {
			key: 'getDuration',
			value: function getDuration() {
				if (!this._basicPlayer) {
					return null;
				}
				return this._basicPlayer.getDuration();
			}
		}, {
			key: 'getVolume',
			value: function getVolume() {
				if (!this._basicPlayer || !this._sound) {
					return null;
				}
				if (this._sound) {
					return this._sound.volume;
				}

				return null;
			}
		}, {
			key: 'setVolume',
			value: function setVolume(volume) {
				if (!this._basicPlayer || !this._sound) {
					return;
				}
				this._sound.volume = volume;
			}
		}, {
			key: '_loop',
			value: function _loop() {
				var _this2 = this;

				var player = this._basicPlayer.getPlayer();

				if (this._isPlaying) {
					this._time += 1 / 60;
				}

				if (this._time > this.getDuration()) {
					this._time = this.getDuration();

					this._isPlaying = false;
					this._onVideoEnd();

					if (this._looping) {
						this.play();
					}
				}

				player.currentTime = this._time;
				this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
				this._ctx.drawImage(this._basicPlayer.getPlayer(), 0, 0);

				if (!this._hasSetSize && this._basicPlayer && this._basicPlayer.getPlayer().videoWidth > 0) {
					this._setCanvasSize();
				}
				window.requestAnimationFrame(function () {
					return _this2._loop();
				});
			}
		}, {
			key: '_setCanvasSize',
			value: function _setCanvasSize() {
				this._canvas.width = this._basicPlayer.getPlayer().videoWidth;
				this._canvas.height = this._basicPlayer.getPlayer().videoHeight;
				var strPx = 'px';
				this._canvas.style.width = this._canvas.width + strPx;
				this._canvas.style.height = this._canvas.height + strPx;

				this._hasSetSize = true;
			}
		}]);
		return InlinePlayer;
	}(_AbstractPlayer3.default); // InlinePlayer.js

	exports.default = InlinePlayer;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var browser = __webpack_require__(98),
	    file = __webpack_require__(99),
	    Group = __webpack_require__(100),
	    Loader = __webpack_require__(113),
	    Sound = __webpack_require__(116),
	    SoundGroup = __webpack_require__(123),
	    utils = __webpack_require__(124);

	function Sono() {
	    var VERSION = '0.1.2',
	        context = utils.getContext(),
	        destination = (context ? context.destination : null),
	        group = new Group(context, destination),
	        api;

	    /*
	     * Create Sound
	     *
	     * Accepted values for param config:
	     * Object config e.g. { id:'foo', url:['foo.ogg', 'foo.mp3'] }
	     * Array (of files e.g. ['foo.ogg', 'foo.mp3'])
	     * ArrayBuffer
	     * HTMLMediaElement
	     * Filename string (e.g. 'foo.ogg')
	     * Oscillator type string (i.e. 'sine', 'square', 'sawtooth', 'triangle')
	     * ScriptProcessor config object (e.g. { bufferSize: 1024, channels: 1, callback: fn })
	     */

	    var createSound = function(config) {
	        // try to load if config contains URLs
	        if(file.containsURL(config)) {
	            return load(config);
	        }

	        var sound = add(config);
	        sound.data = config.data || config;

	        return sound;
	    };

	    /*
	     * Destroy
	     */

	    var destroySound = function(soundOrId) {
	        group.find(soundOrId, function(sound) {
	            sound.destroy();
	        });
	        return api;
	    };

	    var destroyAll = function() {
	        group.destroy();
	        return api;
	    };

	    /*
	     * Get Sound by id
	     */

	    var getSound = function(id) {
	        return group.find(id);
	    };

	    /*
	     * Create group
	     */

	    var createGroup = function(sounds) {
	        var soundGroup = new SoundGroup(context, group.gain);
	        if(sounds) {
	            sounds.forEach(function(sound) {
	                soundGroup.add(sound);
	            });
	        }
	        return soundGroup;
	    };

	    /*
	     * Loading
	     */

	    var load = function(config) {
	        var src = config.src || config.url || config,
	            sound, loader;

	        if(file.containsURL(src)) {
	            sound = queue(config);
	            loader = sound.loader;
	        } else if(Array.isArray(src) && file.containsURL(src[0].src || src[0].url)) {
	            sound = [];
	            loader = new Loader.Group();
	            src.forEach(function(file) {
	                sound.push(queue(file, loader));
	            });
	        } else {
	            var errorMessage = 'sono.load: No audio file URLs found in config.';
	            if (config.onError) {
	              config.onError('[ERROR] ' + errorMessage);
	            } else {
	              throw new Error(errorMessage);
	            }
	            return null;
	        }
	        if (config.onProgress) {
	            loader.on('progress', function(progress) {
	                config.onProgress(progress);
	            });
	        }
	        if (config.onComplete) {
	            loader.once('complete', function() {
	                loader.off('progress');
	                config.onComplete(sound);
	            });
	        }
	        loader.once('error', function(err) {
	            loader.off('error');
	            if (config.onError) {
	                config.onError(err);
	            } else {
	                console.error.call(console, '[ERROR] sono.load: ' + err);
	            }
	        });
	        loader.start();

	        return sound;
	    };

	    var queue = function(config, loaderGroup) {
	        var sound = add(config).load(config);

	        if(loaderGroup) {
	            loaderGroup.add(sound.loader);
	        }
	        return sound;
	    };

	    var add = function(config) {
	        var soundContext = config && config.webAudio === false ? null : context;
	        var sound = new Sound(soundContext, group.gain);
	        sound.isTouchLocked = isTouchLocked;
	        if(config) {
	            sound.id = config.id || '';
	            sound.loop = !!config.loop;
	            sound.volume = config.volume;
	        }
	        group.add(sound);
	        return sound;
	    };

	    /*
	     * Controls
	     */

	    var mute = function() {
	        group.mute();
	        return api;
	    };

	    var unMute = function() {
	        group.unMute();
	        return api;
	    };

	    var fade = function(volume, duration) {
	        group.fade(volume, duration);
	        return api;
	    };

	    var pauseAll = function() {
	        group.pause();
	        return api;
	    };

	    var resumeAll = function() {
	        group.resume();
	        return api;
	    };

	    var stopAll = function() {
	        group.stop();
	        return api;
	    };

	    var play = function(id, delay, offset) {
	        group.find(id, function(sound) {
	            sound.play(delay, offset);
	        });
	        return api;
	    };

	    var pause = function(id) {
	        group.find(id, function(sound) {
	            sound.pause();
	        });
	        return api;
	    };

	    var stop = function(id) {
	        group.find(id, function(sound) {
	            sound.stop();
	        });
	        return api;
	    };

	    /*
	     * Mobile touch lock
	     */

	    var isTouchLocked = browser.handleTouchLock(context, function() {
	        isTouchLocked = false;
	        group.sounds.forEach(function(sound) {
	            sound.isTouchLocked = false;
	        });
	    });

	    /*
	     * Page visibility events
	     */

	    (function() {
	        var pageHiddenPaused = [];

	        // pause currently playing sounds and store refs
	        function onHidden() {
	            group.sounds.forEach(function(sound) {
	                if(sound.playing) {
	                    sound.pause();
	                    pageHiddenPaused.push(sound);
	                }
	            });
	        }

	        // play sounds that got paused when page was hidden
	        function onShown() {
	            while(pageHiddenPaused.length) {
	                pageHiddenPaused.pop().play();
	            }
	        }

	        browser.handlePageVisibility(onHidden, onShown);
	    }());

	    /*
	     * Log version & device support info
	     */

	    var log = function() {
	        var title = 'sono ' + VERSION,
	            info = 'Supported:' + api.isSupported +
	                   ' WebAudioAPI:' + api.hasWebAudio +
	                   ' TouchLocked:' + isTouchLocked +
	                   ' State:' + (context && context.state) +
	                   ' Extensions:' + file.extensions;

	        if(navigator.userAgent.indexOf('Chrome') > -1) {
	            var args = [
	                    '%c ♫ ' + title +
	                    ' ♫ %c ' + info + ' ',
	                    'color: #FFFFFF; background: #379F7A',
	                    'color: #1F1C0D; background: #E0FBAC'
	                ];
	            console.log.apply(console, args);
	        }
	        else if (window.console && window.console.log.call) {
	            console.log.call(console, title + ' ' + info);
	        }
	    };

	    api = {
	        createSound: createSound,
	        destroySound: destroySound,
	        destroyAll: destroyAll,
	        getSound: getSound,
	        createGroup: createGroup,
	        load: load,
	        mute: mute,
	        unMute: unMute,
	        fade: fade,
	        pauseAll: pauseAll,
	        resumeAll: resumeAll,
	        stopAll: stopAll,
	        play: play,
	        pause: pause,
	        stop: stop,
	        log: log,

	        canPlay: file.canPlay,
	        context: context,
	        effect: group.effect,
	        extensions: file.extensions,
	        hasWebAudio: !!context,
	        isSupported: file.extensions.length > 0,
	        gain: group.gain,
	        utils: utils,
	        VERSION: VERSION
	    };

	    /*
	     * Getters & Setters
	     */

	    Object.defineProperties(api, {
	        isTouchLocked: {
	            get: function() {
	                return isTouchLocked;
	            }
	        },
	        sounds: {
	            get: function() {
	                return group.sounds.slice(0);
	            }
	        },
	        volume: {
	            get: function() {
	                return group.volume;
	            },
	            set: function(value) {
	                group.volume = value;
	            }
	        }
	    });

	    return Object.freeze(api);
	}

	module.exports = new Sono();


/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	var browser = {};

	browser.handlePageVisibility = function(onHidden, onShown) {
	    var hidden,
	        visibilityChange;

	    if (typeof document.hidden !== 'undefined') {
	        hidden = 'hidden';
	        visibilityChange = 'visibilitychange';
	    }
	    else if (typeof document.mozHidden !== 'undefined') {
	        hidden = 'mozHidden';
	        visibilityChange = 'mozvisibilitychange';
	    }
	    else if (typeof document.msHidden !== 'undefined') {
	        hidden = 'msHidden';
	        visibilityChange = 'msvisibilitychange';
	    }
	    else if (typeof document.webkitHidden !== 'undefined') {
	        hidden = 'webkitHidden';
	        visibilityChange = 'webkitvisibilitychange';
	    }

	    function onChange() {
	        if (document[hidden]) {
	            onHidden();
	        }
	        else {
	            onShown();
	        }
	    }

	    if(visibilityChange !== undefined) {
	        document.addEventListener(visibilityChange, onChange, false);
	    }
	};

	browser.handleTouchLock = function(context, onUnlock) {
	    var ua = navigator.userAgent,
	        locked = !!ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|SymbianOS/i);

	    var unlock = function() {
	        if (context && context.state === 'suspended') {
	            context.resume().then(function() {
	                var buffer = context.createBuffer(1, 1, 22050);
	                var source = context.createBufferSource();
	                source.buffer = buffer;
	                source.connect(context.destination);
	                source.start(0);
	                source.stop(0);
	                source.disconnect();

	                document.body.removeEventListener('touchend', unlock);
	                onUnlock();
	            });
	        } else {
	            document.body.removeEventListener('touchend', unlock);
	            onUnlock();
	        }
	    };

	    if (locked) {
	        document.body.addEventListener('touchend', unlock, false);
	    }

	    return locked;
	};

	module.exports = browser;


/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	var File = {
	    extensions: [],
	    canPlay: {}
	};

	/*
	 * Initial tests
	 */

	var tests = [
	    { ext: 'ogg', type: 'audio/ogg; codecs="vorbis"' },
	    { ext: 'mp3', type: 'audio/mpeg;' },
	    { ext: 'opus', type: 'audio/ogg; codecs="opus"' },
	    { ext: 'wav', type: 'audio/wav; codecs="1"' },
	    { ext: 'm4a', type: 'audio/x-m4a;' },
	    { ext: 'm4a', type: 'audio/aac;' }
	];

	var el = document.createElement('audio');
	if(el) {
	    tests.forEach(function(test) {
	        var canPlayType = !!el.canPlayType(test.type);
	        if(canPlayType && File.extensions.indexOf(test.ext) === -1) {
	            File.extensions.push(test.ext);
	        }
	        File.canPlay[test.ext] = canPlayType;
	    });
	    el = null;
	}

	/*
	 * find a supported file
	 */

	File.getFileExtension = function(url) {
	    // from DataURL
	    if(url.slice(0, 5) === 'data:') {
	        var match = url.match(/data:audio\/(ogg|mp3|opus|wav|m4a)/i);
	        if(match && match.length > 1) {
	            return match[1].toLowerCase();
	        }
	    }
	    // from Standard URL
	    url = url.split('?')[0];
	    url = url.slice(url.lastIndexOf('/') + 1);

	    var a = url.split('.');
	    if(a.length === 1 || (a[0] === '' && a.length === 2)) {
	        return '';
	    }
	    return a.pop().toLowerCase();
	};

	File.getSupportedFile = function(fileNames) {
	    var name;

	    if(Array.isArray(fileNames)) {
	        // if array get the first one that works
	        fileNames.some(function(item) {
	            name = item;
	            var ext = this.getFileExtension(item);
	            return this.extensions.indexOf(ext) > -1;
	        }, this);
	    }
	    else if(typeof fileNames === 'object') {
	        // if not array and is object
	        Object.keys(fileNames).some(function(key) {
	            name = fileNames[key];
	            var ext = this.getFileExtension(name);
	            return this.extensions.indexOf(ext) > -1;
	        }, this);
	    }
	    // if string just return
	    return name || fileNames;
	};

	/*
	 * infer file types
	 */

	File.isAudioBuffer = function(data) {
	    return !!(data &&
	              window.AudioBuffer &&
	              data instanceof window.AudioBuffer);
	};

	File.isMediaElement = function(data) {
	    return !!(data &&
	              window.HTMLMediaElement &&
	              data instanceof window.HTMLMediaElement);
	};

	File.isMediaStream = function(data) {
	    return !!(data &&
	              typeof data.getAudioTracks === 'function' &&
	              data.getAudioTracks().length &&
	              window.MediaStreamTrack &&
	              data.getAudioTracks()[0] instanceof window.MediaStreamTrack);
	};

	File.isOscillatorType = function(data) {
	    return !!(data && typeof data === 'string' &&
	             (data === 'sine' || data === 'square' ||
	              data === 'sawtooth' || data === 'triangle'));
	};

	File.isScriptConfig = function(data) {
	    return !!(data && typeof data === 'object' &&
	              data.bufferSize && data.channels && data.callback);
	};

	File.isURL = function(data) {
	    return !!(data && typeof data === 'string' &&
	             (data.indexOf('.') > -1 || data.slice(0, 5) === 'data:'));
	};

	File.containsURL = function(config) {
	    if(!config || this.isMediaElement(config)) { return false; }
	    // string, array or object with src property that is string or array
	    var src = config.src || config.url || config;
	    return this.isURL(src) || (Array.isArray(src) && this.isURL(src[0]));
	};

	module.exports = File;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Effect = __webpack_require__(101);

	function Group(context, destination) {
	    var sounds = [],
	        effect = new Effect(context),
	        gain = effect.gain(),
	        preMuteVolume = 1,
	        group;

	    if(context) {
	        effect.setSource(gain);
	        effect.setDestination(destination || context.destination);
	    }

	    /*
	     * Add / remove
	     */

	    var add = function(sound) {
	        sound.gain.disconnect();
	        sound.gain.connect(gain);

	        sounds.push(sound);

	        sound.once('destroy', remove);

	        return group;
	    };

	    var find = function(soundOrId, callback) {
	        var found;

	        if(!soundOrId && soundOrId !== 0) {
	            return found;
	        }

	        sounds.some(function(sound) {
	            if(sound === soundOrId || sound.id === soundOrId) {
	                found = sound;
	                return true;
	            }
	        });

	        if(found && callback) {
	            callback(found);
	        }

	        return found;
	    };

	    var remove = function(soundOrId) {
	        find(soundOrId, function(sound) {
	            sounds.splice(sounds.indexOf(sound), 1);
	        });
	        return group;
	    };

	    /*
	     * Controls
	     */

	    var play = function(delay, offset) {
	        sounds.forEach(function(sound) {
	            sound.play(delay, offset);
	        });
	        return group;
	    };

	    var pause = function() {
	        sounds.forEach(function(sound) {
	            if(sound.playing) {
	                sound.pause();
	            }
	        });
	        return group;
	    };

	    var resume = function() {
	        sounds.forEach(function(sound) {
	            if(sound.paused) {
	                sound.play();
	            }
	        });
	        return group;
	    };

	    var stop = function() {
	        sounds.forEach(function(sound) {
	            sound.stop();
	        });
	        return group;
	    };

	    var seek = function(percent) {
	        sounds.forEach(function(sound) {
	            sound.seek(percent);
	        });
	        return group;
	    };

	    var mute = function() {
	        preMuteVolume = group.volume;
	        group.volume = 0;
	        return group;
	    };

	    var unMute = function() {
	        group.volume = preMuteVolume || 1;
	        return group;
	    };

	    var setVolume = function(value) {
	        group.volume = value;
	        return group;
	    };

	    var fade = function(volume, duration) {
	        if(context) {
	            var param = gain.gain;
	            var time = context.currentTime;

	            param.cancelScheduledValues(time);
	            param.setValueAtTime(param.value, time);
	            // param.setValueAtTime(volume, time + duration);
	            param.linearRampToValueAtTime(volume, time + duration);
	            // param.setTargetAtTime(volume, time, duration);
	            // param.exponentialRampToValueAtTime(Math.max(volume, 0.0001), time + duration);
	        }
	        else {
	            sounds.forEach(function(sound) {
	                sound.fade(volume, duration);
	            });
	        }

	        return group;
	    };

	    /*
	     * Destroy
	     */

	    var destroy = function() {
	        while(sounds.length) {
	            sounds.pop().destroy();
	        }
	    };

	    /*
	     * Api
	     */

	    group = {
	        add: add,
	        find: find,
	        remove: remove,
	        play: play,
	        pause: pause,
	        resume: resume,
	        stop: stop,
	        seek: seek,
	        setVolume: setVolume,
	        mute: mute,
	        unMute: unMute,
	        fade: fade,
	        destroy: destroy
	    };

	    /*
	     * Getters & Setters
	     */

	    Object.defineProperties(group, {
	        effect: {
	            value: effect
	        },
	        gain: {
	            value: gain
	        },
	        sounds: {
	            value: sounds
	        },
	        volume: {
	            get: function() {
	                return gain.gain.value;
	            },
	            set: function(value) {
	                if(isNaN(value)) { return; }

	                if(context) {
	                    gain.gain.cancelScheduledValues(context.currentTime);
	                    gain.gain.value = value;
	                    gain.gain.setValueAtTime(value, context.currentTime);
	                }
	                else {
	                    gain.gain.value = value;
	                }
	                sounds.forEach(function(sound) {
	                    if (!sound.context) {
	                        sound.groupVolume = value;
	                    }
	                });
	            }
	        }
	    });

	    return group;
	}

	module.exports = Group;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Analyser = __webpack_require__(102),
	    Distortion = __webpack_require__(103),
	    Echo = __webpack_require__(105),
	    FakeContext = __webpack_require__(106),
	    Filter = __webpack_require__(107),
	    Flanger = __webpack_require__(108),
	    Panner = __webpack_require__(109),
	    Phaser = __webpack_require__(110),
	    Recorder = __webpack_require__(111),
	    Reverb = __webpack_require__(112);

	function Effect(context) {
	    context = context || new FakeContext();

	    var api,
	        destination,
	        nodeList = [],
	        panning = new Panner(context),
	        sourceNode;

	    var has = function(node) {
	        if(!node) { return false; }
	        return nodeList.indexOf(node) > -1;
	    };

	    var add = function(node) {
	        if(!node) { return; }
	        if(has(node)) { return node; }
	        nodeList.push(node);
	        updateConnections();
	        return node;
	    };

	    var remove = function(node) {
	        if(!node) { return; }
	        if(!has(node)) { return node; }
	        var l = nodeList.length;
	        for (var i = 0; i < l; i++) {
	            if(node === nodeList[i]) {
	                nodeList.splice(i, 1);
	                break;
	            }
	        }
	        var output = node._output || node;
	        output.disconnect();
	        updateConnections();
	        return node;
	    };

	    var toggle = function(node, force) {
	      force = !!force;
	      var hasNode = has(node);
	      if(arguments.length > 1 && hasNode === force) {
	        return api;
	      }
	      if(hasNode) {
	        remove(node);
	      } else {
	        add(node);
	      }
	      return api;
	    };

	    var removeAll = function() {
	        while(nodeList.length) {
	            nodeList.pop().disconnect();
	        }
	        updateConnections();
	        return api;
	    };

	    var destroy = function() {
	        removeAll();
	        context = null;
	        destination = null;
	        nodeList = [];
	        if(sourceNode) { sourceNode.disconnect(); }
	        sourceNode = null;
	    };

	    var connect = function(a, b) {
	        //console.log('> connect', (a.name || a.constructor.name), 'to', (b.name || b.constructor.name));

	        var output = a._output || a;
	        //console.log('> disconnect output: ', (a.name || a.constructor.name));
	        output.disconnect();
	        //console.log('> connect output: ', (a.name || a.constructor.name), 'to input:', (b.name || b.constructor.name));
	        output.connect(b);
	    };

	    var connectToDestination = function(node) {
	        var l = nodeList.length,
	            lastNode = l ? nodeList[l - 1] : sourceNode;

	        if(lastNode) {
	            connect(lastNode, node);
	        }

	        destination = node;
	    };

	    var updateConnections = function() {
	        if(!sourceNode) { return; }

	        //console.log('updateConnections:', nodeList.length);

	        var node,
	            prev;

	        for (var i = 0; i < nodeList.length; i++) {
	            node = nodeList[i];
	            //console.log(i, node);
	            prev = i === 0 ? sourceNode : nodeList[i - 1];
	            connect(prev, node);
	        }

	        if(destination) {
	            connectToDestination(destination);
	        }
	    };

	    /*
	     * Effects
	     */

	    var analyser = function(config) {
	        return add(new Analyser(context, config));
	    };

	    // lowers the volume of the loudest parts of the signal and raises the volume of the softest parts
	    var compressor = function(config) {
	        config = config || {};

	        var node = context.createDynamicsCompressor();

	        node.update = function(config) {
	            // min decibels to start compressing at from -100 to 0
	            node.threshold.value = config.threshold !== undefined ? config.threshold : -24;
	            // decibel value to start curve to compressed value from 0 to 40
	            node.knee.value = config.knee !== undefined ? config.knee : 30;
	            // amount of change per decibel from 1 to 20
	            node.ratio.value = config.ratio !== undefined ? config.ratio : 12;
	            // gain reduction currently applied by compressor from -20 to 0
	            node.reduction.value = config.reduction !== undefined ? config.reduction : -10;
	            // seconds to reduce gain by 10db from 0 to 1 - how quickly signal adapted when volume increased
	            node.attack.value = config.attack !== undefined ? config.attack : 0.0003;
	            // seconds to increase gain by 10db from 0 to 1 - how quickly signal adapted when volume redcuced
	            node.release.value = config.release !== undefined ? config.release : 0.25;
	        };

	        node.update(config);

	        return add(node);
	    };

	    var convolver = function(impulseResponse) {
	        // impulseResponse is an audio file buffer
	        var node = context.createConvolver();
	        node.buffer = impulseResponse;
	        return add(node);
	    };

	    var delay = function(time) {
	        var node = context.createDelay();
	        if(time !== undefined) { node.delayTime.value = time; }
	        return add(node);
	    };

	    var echo = function(config) {
	        return add(new Echo(context, config));
	    };

	    var distortion = function(amount) {
	        // Float32Array defining curve (values are interpolated)
	        //node.curve
	        // up-sample before applying curve for better resolution result 'none', '2x' or '4x'
	        //node.oversample = '2x';
	        return add(new Distortion(context, amount));
	    };

	    var filter = function(type, frequency, q, gain) {
	        return add(new Filter(context, type, frequency, q, gain));
	    };

	    var lowpass = function(frequency, peak) {
	        return filter('lowpass', frequency, peak);
	    };

	    var highpass = function(frequency, peak) {
	        return filter('highpass', frequency, peak);
	    };

	    var bandpass = function(frequency, width) {
	        return filter('bandpass', frequency, width);
	    };

	    var lowshelf = function(frequency, gain) {
	        return filter('lowshelf', frequency, 0, gain);
	    };

	    var highshelf = function(frequency, gain) {
	        return filter('highshelf', frequency, 0, gain);
	    };

	    var peaking = function(frequency, width, gain) {
	        return filter('peaking', frequency, width, gain);
	    };

	    var notch = function(frequency, width, gain) {
	        return filter('notch', frequency, width, gain);
	    };

	    var allpass = function(frequency, sharpness) {
	        return filter('allpass', frequency, sharpness);
	    };

	    var flanger = function(config) {
	        return add(new Flanger(context, config));
	    };

	    var gain = function(value) {
	        var node = context.createGain();
	        if(value !== undefined) {
	            node.gain.value = value;
	        }
	        return node;
	    };

	    var panner = function() {
	        return add(new Panner(context));
	    };

	    var phaser = function(config) {
	        return add(new Phaser(context, config));
	    };

	    var recorder = function(passThrough) {
	        return add(new Recorder(context, passThrough));
	    };

	    var reverb = function(seconds, decay, reverse) {
	        return add(new Reverb(context, seconds, decay, reverse));
	    };

	    var script = function(config) {
	        config = config || {};
	        // bufferSize 256 - 16384 (pow 2)
	        var bufferSize = config.bufferSize || 1024;
	        var inputChannels = config.inputChannels === undefined ? 0 : inputChannels;
	        var outputChannels = config.outputChannels === undefined ? 1 : outputChannels;

	        var node = context.createScriptProcessor(bufferSize, inputChannels, outputChannels);

	        var thisArg = config.thisArg || config.context || node;
	        var callback = config.callback || function() {};

	        // available props:
	        /*
	        event.inputBuffer
	        event.outputBuffer
	        event.playbackTime
	        */
	        // Example: generate noise
	        /*
	        var output = event.outputBuffer.getChannelData(0);
	        var l = output.length;
	        for (var i = 0; i < l; i++) {
	            output[i] = Math.random();
	        }
	        */
	        node.onaudioprocess = callback.bind(thisArg);

	        return add(node);
	    };

	    var setSource = function(node) {
	        sourceNode = node;
	        updateConnections();
	        return node;
	    };

	    var setDestination = function(node) {
	        connectToDestination(node);
	        return node;
	    };

	    //

	    api = {
	        context: context,
	        nodeList: nodeList,
	        panning: panning,

	        has: has,
	        add: add,
	        remove: remove,
	        toggle: toggle,
	        removeAll: removeAll,
	        destroy: destroy,
	        setSource: setSource,
	        setDestination: setDestination,

	        analyser: analyser,
	        compressor: compressor,
	        convolver: convolver,
	        delay: delay,
	        echo: echo,
	        distortion: distortion,
	        filter: filter,
	        lowpass: lowpass,
	        highpass: highpass,
	        bandpass: bandpass,
	        lowshelf: lowshelf,
	        highshelf: highshelf,
	        peaking: peaking,
	        notch: notch,
	        allpass: allpass,
	        flanger: flanger,
	        gain: gain,
	        panner: panner,
	        phaser: phaser,
	        recorder: recorder,
	        reverb: reverb,
	        script: script
	    };

	    return Object.freeze(api);
	}

	module.exports = Effect;


/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';

	function Analyser(context, config) {
	    config = config || {};

	    var fftSize = config.fftSize || 512,
	        freqFloat = !!config.float,
	        waveFloat = !!config.float,
	        waveform,
	        frequencies,
	        node = context.createAnalyser();

	    node.fftSize = fftSize; // frequencyBinCount will be half this value
	    node.smoothingTimeConstant = config.smoothing || config.smoothingTimeConstant || node.smoothingTimeConstant;
	    node.minDecibels = config.minDecibels || node.minDecibels;
	    node.maxDecibels = config.maxDecibels || node.maxDecibels;

	    var needsUpdate = function(arr, float) {
	      if(!arr) { return true; }
	      if(node.fftSize !== fftSize) { return true; }
	      if(float && arr instanceof Uint8Array) { return true; }
	      return !float && arr instanceof Float32Array;
	    };

	    var createArray = function(float, length) {
	      return float ? new Float32Array(length) : new Uint8Array(length);
	    };

	    node.getWaveform = function(float) {
	        if(!arguments.length) { float = waveFloat; }

	        if(needsUpdate(waveform, float)) {
	            fftSize = node.fftSize;
	            waveFloat = float;
	            waveform = createArray(float, fftSize);
	        }

	        if(float) {
	            this.getFloatTimeDomainData(waveform);
	        } else {
	            this.getByteTimeDomainData(waveform);
	        }

	        return waveform;
	    };

	    node.getFrequencies = function(float) {
	        if(!arguments.length) { float = freqFloat; }

	        if(needsUpdate(frequencies, float)) {
	            fftSize = node.fftSize;
	            freqFloat = float;
	            frequencies = createArray(float, node.frequencyBinCount);
	        }

	        if(float) {
	            this.getFloatFrequencyData(frequencies);
	        } else {
	            this.getByteFrequencyData(frequencies);
	        }

	        return frequencies;
	    };

	    node.update = function() {
	      node.getWaveform();
	      node.getFrequencies();
	    };

	    Object.defineProperties(node, {
	        smoothing: {
	            get: function() { return node.smoothingTimeConstant; },
	            set: function(value) { node.smoothingTimeConstant = value; }
	        }
	    });

	    return node;
	}

	module.exports = Analyser;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validify = __webpack_require__(104).number;
	var n = 22050;

	function Distortion(context, amount) {

	    amount = validify(amount, 1);

	    var node = context.createWaveShaper();
	    var curve = new Float32Array(n);

	    // create waveShaper distortion curve from 0 to 1
	    node.update = function(value) {
	        amount = value;
	        if(amount <= 0) {
	          amount = 0;
	          this.curve = null;
	          return;
	        }
	        var k = value * 100,
	            // n = 22050,
	            // curve = new Float32Array(n),
	            deg = Math.PI / 180,
	            x;

	        for (var i = 0; i < n; i++) {
	            x = i * 2 / n - 1;
	            curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
	        }

	        this.curve = curve;
	    };

	    Object.defineProperties(node, {
	        amount: {
	            get: function() { return amount; },
	            set: function(value) { this.update(value); }
	        }
	    });

	    if(amount !== undefined) {
	        node.update(amount);
	    }

	    return node;
	}

	module.exports = Distortion;


/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';

	module.exports = Object.freeze({
	  number: function(value, defaultValue) {
	    if(arguments.length < 2) { defaultValue = 0; }
	    if(typeof value !== 'number' || isNaN(value)) { return defaultValue; }
	    return value;
	  }
	});


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validify = __webpack_require__(104).number;

	function Echo(context, config) {
	    config = config || {};

	    var input = context.createGain();
	    var delay = context.createDelay();
	    var gain = context.createGain();
	    var output = context.createGain();

	    delay.delayTime.value = validify(config.delayTime, 0.5);
	    gain.gain.value = validify(config.feedback, 0.5);

	    input.connect(delay);
	    input.connect(output);
	    delay.connect(gain);
	    gain.connect(delay);
	    gain.connect(output);

	    var node = input;
	    node.name = 'Echo';
	    node._output = output;

	    Object.defineProperties(node, {
	        delay: {
	            get: function() { return delay.delayTime.value; },
	            set: function(value) { delay.delayTime.value = value; }
	        },
	        feedback: {
	            get: function() { return gain.gain.value; },
	            set: function(value) { gain.gain.value = value; }
	        }
	    });

	    return node;
	}

	module.exports = Echo;


/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	function FakeContext() {

	    var startTime = Date.now();

	    var fn = function(){};

	    var param = function() {
	        return {
	            value: 1,
	            defaultValue: 1,
	            linearRampToValueAtTime: fn,
	            setValueAtTime: fn,
	            exponentialRampToValueAtTime: fn,
	            setTargetAtTime: fn,
	            setValueCurveAtTime: fn,
	            cancelScheduledValues: fn
	        };
	    };

	    var fakeNode = function() {
	        return {
	            connect:fn,
	            disconnect:fn,
	            // analyser
	            frequencyBinCount: 0,
	            smoothingTimeConstant: 0,
	            fftSize: 0,
	            minDecibels: 0,
	            maxDecibels: 0,
	            getByteTimeDomainData: fn,
	            getByteFrequencyData: fn,
	            getFloatTimeDomainData: fn,
	            getFloatFrequencyData: fn,
	            // gain
	            gain: param(),
	            // panner
	            panningModel: 0,
	            setPosition: fn,
	            setOrientation: fn,
	            setVelocity: fn,
	            distanceModel: 0,
	            refDistance: 0,
	            maxDistance: 0,
	            rolloffFactor: 0,
	            coneInnerAngle: 360,
	            coneOuterAngle: 360,
	            coneOuterGain: 0,
	            // filter:
	            type:0,
	            frequency: param(),
	            Q: param(),
	            detune: param(),
	            // delay
	            delayTime: param(),
	            // convolver
	            buffer: 0,
	            // compressor
	            threshold: param(),
	            knee: param(),
	            ratio: param(),
	            attack: param(),
	            release: param(),
	            reduction: param(),
	            // distortion
	            oversample: 0,
	            curve: 0,
	            // buffer
	            sampleRate: 1,
	            length: 0,
	            duration: 0,
	            numberOfChannels: 0,
	            getChannelData: function() {
	                return [];
	            },
	            copyFromChannel: fn,
	            copyToChannel: fn,
	            // listener
	            dopplerFactor: 0,
	            speedOfSound: 0,
	            // osc
	            start: fn
	        };
	    };

	    // ie9
	    if(!window.Uint8Array) {
	        window.Uint8Array = window.Float32Array = Array;
	    }

	    return {
	        createAnalyser: fakeNode,
	        createBuffer: fakeNode,
	        createBiquadFilter: fakeNode,
	        createChannelMerger: fakeNode,
	        createChannelSplitter: fakeNode,
	        createDynamicsCompressor: fakeNode,
	        createConvolver: fakeNode,
	        createDelay: fakeNode,
	        createGain: fakeNode,
	        createOscillator: fakeNode,
	        createPanner: fakeNode,
	        createScriptProcessor: fakeNode,
	        createWaveShaper: fakeNode,
	        listener: fakeNode(),
	        get currentTime() {
	            return (Date.now() - startTime) / 1000;
	        }
	    };
	}

	module.exports = FakeContext;


/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';

	// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode
	// For lowpass and highpass Q indicates how peaked the frequency is around the cutoff.
	// The greater the value is, the greater is the peak

	function Filter(context, type, frequency, q, gain) {
	    // Frequency between 40Hz and half of the sampling rate
	    var minFrequency = 40;
	    var maxFrequency = context.sampleRate / 2;

	    var node = context.createBiquadFilter();
	    node.type = type;

	    var getFrequency = function(value) {
	        // Logarithm (base 2) to compute how many octaves fall in the range.
	        var numberOfOctaves = Math.log(maxFrequency / minFrequency) / Math.LN2;
	        // Compute a multiplier from 0 to 1 based on an exponential scale.
	        var multiplier = Math.pow(2, numberOfOctaves * (value - 1.0));
	        // Get back to the frequency value between min and max.
	        return maxFrequency * multiplier;
	    };

	    node.set = function(frequency, q, gain) {
	      if (frequency !== undefined) { node.frequency.value = frequency; }
	      if (q !== undefined) { node.Q.value = q; }
	      if (gain !== undefined) { node.gain.value = gain; }
	      return node;
	    };

	    // set filter frequency based on value from 0 to 1
	    node.setByPercent = function(percent, q, gain) {
	        return node.set(getFrequency(percent), q, gain);
	    };

	    return node.set(frequency, q, gain);
	}

	module.exports = Filter;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validify = __webpack_require__(104).number;

	function MonoFlanger(context, config) {
	    var input = context.createGain();
	    var delay = context.createDelay();
	    var feedback = context.createGain();
	    var lfo = context.createOscillator();
	    var gain = context.createGain();
	    var output = context.createGain();

	    delay.delayTime.value = validify(config.delay, 0.005); // 5-25ms delay (0.005 > 0.025)
	    feedback.gain.value = validify(config.feedback, 0.5); // 0 > 1

	    lfo.type = 'sine';
	    lfo.frequency.value = validify(config.gain, 0.002); // 0.05 > 5
	    gain.gain.value = validify(config.frequency, 0.25); // 0.0005 > 0.005

	    input.connect(output);
	    input.connect(delay);
	    delay.connect(output);
	    delay.connect(feedback);
	    feedback.connect(input);

	    lfo.connect(gain);
	    gain.connect(delay.delayTime);
	    lfo.start(0);

	    var node = input;
	    node.name = 'Flanger';
	    node._output = output;

	    Object.defineProperties(node, {
	        delay: {
	            get: function() { return delay.delayTime.value; },
	            set: function(value) { delay.delayTime.value = value; }
	        },
	        lfoFrequency: {
	            get: function() { return lfo.frequency.value; },
	            set: function(value) { lfo.frequency.value = value; }
	        },
	        lfoGain: {
	            get: function() { return gain.gain.value; },
	            set: function(value) { gain.gain.value = value; }
	        },
	        feedback: {
	            get: function() { return feedback.gain.value; },
	            set: function(value) { feedback.gain.value = value; }
	        }
	    });

	    return node;
	}

	function StereoFlanger(context, config) {
	    var input = context.createGain();
	    var splitter = context.createChannelSplitter(2);
	    var merger = context.createChannelMerger(2);
	    var feedbackL = context.createGain();
	    var feedbackR = context.createGain();
	    var lfo = context.createOscillator();
	    var lfoGainL = context.createGain();
	    var lfoGainR = context.createGain();
	    var delayL = context.createDelay();
	    var delayR = context.createDelay();
	    var output = context.createGain();

	    feedbackL.gain.value = feedbackR.gain.value = validify(config.feedback, 0.5);
	    delayL.delayTime.value = delayR.delayTime.value = validify(config.delay, 0.003);

	    lfo.type = 'sine';
	    lfo.frequency.value = validify(config.frequency, 0.5);
	    lfoGainL.gain.value = validify(config.gain, 0.005);
	    lfoGainR.gain.value = 0 - lfoGainL.gain.value;

	    input.connect(splitter);

	    splitter.connect(delayL, 0);
	    splitter.connect(delayR, 1);

	    delayL.connect(feedbackL);
	    delayR.connect(feedbackR);

	    feedbackL.connect(delayR);
	    feedbackR.connect(delayL);

	    delayL.connect(merger, 0, 0);
	    delayR.connect(merger, 0, 1);

	    merger.connect(output);
	    input.connect(output);

	    lfo.connect(lfoGainL);
	    lfo.connect(lfoGainR);
	    lfoGainL.connect(delayL.delayTime);
	    lfoGainR.connect(delayR.delayTime);
	    lfo.start(0);

	    var node = input;
	    node.name = 'StereoFlanger';
	    node._output = output;

	    Object.defineProperties(node, {
	        delay: {
	            get: function() { return delayL.delayTime.value; },
	            set: function(value) { delayL.delayTime.value = delayR.delayTime.value = value; }
	        },
	        lfoFrequency: {
	            get: function() { return lfo.frequency.value; },
	            set: function(value) { lfo.frequency.value = value; }
	        },
	        lfoGain: {
	            get: function() { return lfoGainL.gain.value; },
	            set: function(value) { lfoGainL.gain.value = lfoGainR.gain.value = value; }
	        },
	        feedback: {
	            get: function() { return feedbackL.gain.value; },
	            set: function(value) { feedbackL.gain.value = feedbackR.gain.value = value; }
	        }
	    });

	    return node;
	}

	function Flanger(context, config) {
	    config = config || {};
	    return config.stereo ? new StereoFlanger(context, config) : new MonoFlanger(context, config);
	}

	module.exports = Flanger;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validify = __webpack_require__(104).number;

	function Panner(context) {
	    var node = context.createPanner();

	    // Default for stereo is 'HRTF' can also be 'equalpower'
	    node.panningModel = Panner.defaults.panningModel;

	    // Distance model and attributes
	    // Can be 'linear' 'inverse' 'exponential'
	    node.distanceModel = Panner.defaults.distanceModel;
	    node.refDistance = Panner.defaults.refDistance;
	    node.maxDistance = Panner.defaults.maxDistance;
	    node.rolloffFactor = Panner.defaults.rolloffFactor;
	    node.coneInnerAngle = Panner.defaults.coneInnerAngle;
	    node.coneOuterAngle = Panner.defaults.coneOuterAngle;
	    node.coneOuterGain = Panner.defaults.coneOuterGain;
	    // set to defaults (needed in Firefox)
	    node.setPosition(0, 0, 1);
	    node.setOrientation(0, 0, 0);

	    // simple vec3 object pool
	    var vecPool = {
	        pool: [],
	        get: function(x, y, z) {
	            var v = this.pool.length ? this.pool.pop() : { x: 0, y: 0, z: 0 };
	            // check if a vector has been passed in
	            if(x !== undefined && isNaN(x) && 'x' in x && 'y' in x && 'z' in x) {
	                v.x = validify(x.x);
	                v.y = validify(x.y);
	                v.z = validify(x.z);
	            }
	            else {
	                v.x = validify(x);
	                v.y = validify(y);
	                v.z = validify(z);
	            }
	            return v;
	        },
	        dispose: function(instance) {
	            this.pool.push(instance);
	        }
	    };

	    var globalUp = vecPool.get(0, 1, 0),
	        angle45 = Math.PI / 4,
	        angle90 = Math.PI / 2;

	    // set the orientation of the source (where the audio is coming from)
	    var setOrientation = function(node, fw) {
	        // calculate up vec ( up = (forward cross (0, 1, 0)) cross forward )
	        var up = vecPool.get(fw.x, fw.y, fw.z);
	        cross(up, globalUp);
	        cross(up, fw);
	        normalize(up);
	        normalize(fw);
	        // set the audio context's listener position to match the camera position
	        node.setOrientation(fw.x, fw.y, fw.z, up.x, up.y, up.z);
	        // return the vecs to the pool
	        vecPool.dispose(fw);
	        vecPool.dispose(up);
	    };

	    var setPosition = function(nodeOrListener, vec) {
	        nodeOrListener.setPosition(vec.x, vec.y, vec.z);
	        vecPool.dispose(vec);
	    };

	    // cross product of 2 vectors
	    var cross = function ( a, b ) {
	        var ax = a.x, ay = a.y, az = a.z;
	        var bx = b.x, by = b.y, bz = b.z;
	        a.x = ay * bz - az * by;
	        a.y = az * bx - ax * bz;
	        a.z = ax * by - ay * bx;
	    };

	    // normalise to unit vector
	    var normalize = function (vec3) {
	        if(vec3.x === 0 && vec3.y === 0 && vec3.z === 0) {
	            return vec3;
	        }
	        var length = Math.sqrt( vec3.x * vec3.x + vec3.y * vec3.y + vec3.z * vec3.z );
	        var invScalar = 1 / length;
	        vec3.x *= invScalar;
	        vec3.y *= invScalar;
	        vec3.z *= invScalar;
	        return vec3;
	    };

	    node.set = function(x, y, z) {
	        var v = vecPool.get(x, y, z);

	        if(arguments.length === 1 && v.x) {
	          // pan left to right with value from -1 to 1
	          x = v.x;

	          if(x > 1) { x = 1; }
	          if(x < -1) { x = -1; }

	          // creates a nice curve with z
	          x = x * angle45;
	          z = x + angle90;

	          if (z > angle90) {
	              z = Math.PI - z;
	          }

	          v.x = Math.sin(x);
	          v.z = Math.sin(z);
	        }
	        setPosition(node, v);
	    };

	    // set the position the audio is coming from)
	    node.setSourcePosition = function(x, y, z) {
	        setPosition(node, vecPool.get(x, y, z));
	    };

	    // set the direction the audio is coming from)
	    node.setSourceOrientation = function(x, y, z) {
	        setOrientation(node, vecPool.get(x, y, z));
	    };

	    // set the position of who or what is hearing the audio (could be camera or some character)
	    node.setListenerPosition = function(x, y, z) {
	        setPosition(context.listener, vecPool.get(x, y, z));
	    };

	    // set the position of who or what is hearing the audio (could be camera or some character)
	    node.setListenerOrientation = function(x, y, z) {
	        setOrientation(context.listener, vecPool.get(x, y, z));
	    };

	    node.getDefaults = function() {
	        return Panner.defaults;
	    };

	    node.setDefaults = function(defaults) {
	        Object.keys(defaults).forEach(function(key) {
	            Panner.defaults[key] = defaults[key];
	        });
	    };

	    return node;
	}

	Panner.defaults = {
	    panningModel: 'HRTF',
	    distanceModel: 'linear',
	    refDistance: 1,
	    maxDistance: 1000,
	    rolloffFactor: 1,
	    coneInnerAngle: 360,
	    coneOuterAngle: 0,
	    coneOuterGain: 0
	};

	module.exports = Panner;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validify = __webpack_require__(104).number;

	function Phaser(context, config) {
	    config = config || {};
	    var stages = validify(config.stages, 8),
	        filters = [],
	        filter;

	    var input = context.createGain();
	    var feedback = context.createGain();
	    var lfo = context.createOscillator();
	    var lfoGain = context.createGain();
	    var output = context.createGain();

	    feedback.gain.value = validify(config.feedback, 0.5);

	    lfo.type = 'sine';
	    lfo.frequency.value = validify(config.frequency, 0.5);
	    lfoGain.gain.value = validify(config.gain, 300);

	    for (var i = 0; i < stages; i++) {
	        filter = context.createBiquadFilter();
	        filter.type = 'allpass';
	        filter.frequency.value = 1000 * i;
	        //filter.Q.value = 10;
	        if(i > 0) {
	            filters[i-1].connect(filter);
	        }
	        lfoGain.connect(filter.frequency);

	        filters.push(filter);
	    }

	    var first = filters[0];
	    var last = filters[filters.length - 1];

	    input.connect(first);
	    input.connect(output);
	    last.connect(output);
	    last.connect(feedback);
	    feedback.connect(first);
	    lfo.connect(lfoGain);
	    lfo.start(0);

	    var node = input;
	    node.name = 'Phaser';
	    node._output = output;

	    Object.defineProperties(node, {
	        lfoFrequency: {
	            get: function() { return lfo.frequency.value; },
	            set: function(value) { lfo.frequency.value = value; }
	        },
	        lfoGain: {
	            get: function() { return lfoGain.gain.value; },
	            set: function(value) { lfoGain.gain.value = value; }
	        },
	        feedback: {
	            get: function() { return feedback.gain.value; },
	            set: function(value) { feedback.gain.value = value; }
	        }
	    });

	    return node;
	}

	module.exports = Phaser;


/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';

	function Recorder(context, passThrough) {
	    var bufferLength = 4096,
	        buffersL = [],
	        buffersR = [],
	        startedAt = 0,
	        stoppedAt = 0;

	    var input = context.createGain();
	    var output = context.createGain();
	    var script;

	    var node = input;
	    node.name = 'Recorder';
	    node._output = output;

	    node.isRecording = false;

	    var getBuffer = function() {
	        if(!buffersL.length) {
	            return context.createBuffer(2, bufferLength, context.sampleRate);
	        }
	        var recordingLength = buffersL.length * bufferLength;
	        var buffer = context.createBuffer(2, recordingLength, context.sampleRate);
	        buffer.getChannelData(0).set(mergeBuffers(buffersL, recordingLength));
	        buffer.getChannelData(1).set(mergeBuffers(buffersR, recordingLength));
	        return buffer;
	    };

	    var mergeBuffers = function(buffers, length) {
	        var buffer = new Float32Array(length);
	        var offset = 0;
	        for (var i = 0; i < buffers.length; i++) {
	          buffer.set(buffers[i], offset);
	          offset += buffers[i].length;
	        }
	        return buffer;
	    };

	    var createScriptProcessor = function() {
	      destroyScriptProcessor();

	      script = context.createScriptProcessor(bufferLength, 2, 2);
	      input.connect(script);
	      script.connect(context.destination);
	      script.connect(output);

	      script.onaudioprocess = function (event) {
	          var inputL = event.inputBuffer.getChannelData(0),
	              inputR = event.inputBuffer.getChannelData(1);

	          if(passThrough) {
	              var outputL = event.outputBuffer.getChannelData(0),
	                  outputR = event.outputBuffer.getChannelData(1);
	              outputL.set(inputL);
	              outputR.set(inputR);
	          }

	          if(node.isRecording) {
	              buffersL.push(new Float32Array(inputL));
	              buffersR.push(new Float32Array(inputR));
	          }
	      };
	    };

	    var destroyScriptProcessor = function() {
	      if (script) {
	        script.onaudioprocess = null;
	        input.disconnect();
	        script.disconnect();
	      }
	    };

	    node.start = function() {
	        createScriptProcessor();
	        buffersL.length = 0;
	        buffersR.length = 0;
	        startedAt = context.currentTime;
	        stoppedAt = 0;
	        this.isRecording = true;
	    };

	    node.stop = function() {
	        stoppedAt = context.currentTime;
	        this.isRecording = false;
	        destroyScriptProcessor();
	        return getBuffer();
	    };

	    node.getDuration = function() {
	        if(!this.isRecording) {
	            return stoppedAt - startedAt;
	        }
	        return context.currentTime - startedAt;
	    };

	    return node;
	}

	module.exports = Recorder;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var validify = __webpack_require__(104).number;

	function Reverb(context, config) {
	    config = config || {};

	    var time = validify(config.time, 1),
	        decay = validify(config.decay, 5),
	        reverse = !!config.reverse,
	        rate = context.sampleRate,
	        length,
	        impulseResponse;

	    var input = context.createGain();
	    var reverb = context.createConvolver();
	    var output = context.createGain();

	    input.connect(reverb);
	    input.connect(output);
	    reverb.connect(output);

	    var node = input;
	    node.name = 'Reverb';
	    node._output = output;

	    node.update = function(opt) {
	        if(opt.time !== undefined) {
	            time = opt.time;
	            length = Math.floor(rate * time);
	            impulseResponse = length ? context.createBuffer(2, length, rate) : null;
	        }
	        if(opt.decay !== undefined) {
	            decay = opt.decay;
	        }
	        if(opt.reverse !== undefined) {
	            reverse = opt.reverse;
	        }

	        if(!impulseResponse) {
	          reverb.buffer = null;
	          return;
	        }

	        var left = impulseResponse.getChannelData(0),
	            right = impulseResponse.getChannelData(1),
	            n, e;

	        for (var i = 0; i < length; i++) {
	            n = reverse ? length - i : i;
	            e = Math.pow(1 - n / length, decay);
	            left[i] = (Math.random() * 2 - 1) * e;
	            right[i] = (Math.random() * 2 - 1) * e;
	        }

	        reverb.buffer = impulseResponse;
	    };

	    node.update({
	        time: time,
	        decay: decay,
	        reverse: reverse
	    });

	    Object.defineProperties(node, {
	        time: {
	            get: function() { return time; },
	            set: function(value) {
	                console.log.call(console, '1 set time:', value);
	                if(value === time) { return; }
	                this.update({time: value});
	            }
	        },
	        decay: {
	            get: function() { return decay; },
	            set: function(value) {
	                if(value === decay) { return; }
	                this.update({decay: value});
	            }
	        },
	        reverse: {
	            get: function() { return reverse; },
	            set: function(value) {
	                if(value === reverse) { return; }
	                this.update({reverse: !!value});
	            }
	        }
	    });

	    return node;
	}

	module.exports = Reverb;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Emitter = __webpack_require__(114);

	function Loader(url) {
	    var emitter = new Emitter(),
	        progress = 0,
	        audioContext,
	        isTouchLocked,
	        request,
	        timeout,
	        data,
	        ERROR_STATE = ['', 'ABORTED', 'NETWORK', 'DECODE', 'SRC_NOT_SUPPORTED'];

	    var start = function() {
	        if(audioContext) {
	            loadArrayBuffer();
	        } else {
	            loadAudioElement();
	        }
	    };

	    var dispatchComplete = function(buffer) {
	        emitter.emit('progress', 1);
	        emitter.emit('loaded', buffer);
	        emitter.emit('complete', buffer);

	        removeListeners();
	    };

	    // audio buffer

	    var loadArrayBuffer = function() {
	        request = new XMLHttpRequest();
	        request.open('GET', url, true);
	        request.responseType = 'arraybuffer';
	        request.addEventListener('progress', progressHandler);
	        request.addEventListener('load', loadHandler);
	        request.addEventListener('error', errorHandler);
	        request.send();
	    };

	    var progressHandler = function(event) {
	        if (event.lengthComputable) {
	            progress = event.loaded / event.total;
	            emitter.emit('progress', progress);
	        }
	    };

	    var loadHandler = function() {
	        audioContext.decodeAudioData(
	            request.response,
	            function(buffer) {
	                data = buffer;
	                request = null;
	                progress = 1;
	                dispatchComplete(buffer);
	            },
	            errorHandler
	        );
	    };

	    // audio element

	    var loadAudioElement = function() {
	        if(!data || !data.tagName) {
	            data = document.createElement('audio');
	        }

	        if(!isTouchLocked) {
	            // timeout because sometimes canplaythrough doesn't fire
	            window.clearTimeout(timeout);
	            timeout = window.setTimeout(readyHandler, 2000);
	            data.addEventListener('canplaythrough', readyHandler, false);
	        }

	        data.addEventListener('error', errorHandler, false);
	        data.preload = 'auto';
	        data.src = url;
	        data.load();

	        if (isTouchLocked) {
	            dispatchComplete(data);
	        }
	    };

	    var readyHandler = function() {
	        window.clearTimeout(timeout);
	        if(!data) { return; }
	        progress = 1;
	        dispatchComplete(data);
	    };

	    // error

	    var errorHandler = function(event) {
	        window.clearTimeout(timeout);

	        var message = event;

	        if(data && data.error) {
	            message = 'Media Error: ' + ERROR_STATE[data.error.code] + ' ' + url;
	        }

	        if(request) {
	            message = 'XHR Error: ' + request.status + ' ' + request.statusText + ' ' + url;
	        }

	        emitter.emit('error', message);

	        removeListeners();
	    };

	    // clean up

	    var removeListeners = function() {
	        emitter.off('error');
	        emitter.off('progress');
	        emitter.off('complete');
	        emitter.off('loaded');

	        if(data && typeof data.removeEventListener === 'function') {
	            data.removeEventListener('canplaythrough', readyHandler);
	            data.removeEventListener('error', errorHandler);
	        }

	        if(request) {
	            request.removeEventListener('progress', progressHandler);
	            request.removeEventListener('load', loadHandler);
	            request.removeEventListener('error', errorHandler);
	        }
	    };

	    var cancel = function() {
	        removeListeners();

	        if(request && request.readyState !== 4) {
	          request.abort();
	        }
	        request = null;

	        window.clearTimeout(timeout);
	    };

	    var destroy = function() {
	        cancel();
	        request = null;
	        data = null;
	        audioContext = null;
	    };

	    // reload

	    var load = function(newUrl) {
	        url = newUrl;
	        start();
	    };

	    var api = {
	        on: emitter.on.bind(emitter),
	        once: emitter.once.bind(emitter),
	        off: emitter.off.bind(emitter),
	        load: load,
	        start: start,
	        cancel: cancel,
	        destroy: destroy
	    };

	    Object.defineProperties(api, {
	        data: {
	            get: function() {
	                return data;
	            }
	        },
	        progress: {
	            get: function() {
	                return progress;
	            }
	        },
	        audioContext: {
	            set: function(value) {
	                audioContext = value;
	            }
	        },
	        isTouchLocked: {
	            set: function(value) {
	                isTouchLocked = value;
	            }
	        }
	    });

	    return Object.freeze(api);
	}

	Loader.Group = function() {
	    var emitter = new Emitter(),
	        queue = [],
	        numLoaded = 0,
	        numTotal = 0,
	        loader;

	    var add = function(loader) {
	        queue.push(loader);
	        numTotal++;
	        return loader;
	    };

	    var start = function() {
	        numTotal = queue.length;
	        next();
	    };

	    var next = function() {
	        if(queue.length === 0) {
	            loader = null;
	            emitter.emit('complete');
	            return;
	        }

	        loader = queue.pop();
	        loader.on('progress', progressHandler);
	        loader.once('loaded', completeHandler);
	        loader.once('error', errorHandler);
	        loader.start();
	    };

	    var progressHandler = function(progress) {
	        var loaded = numLoaded + progress;
	        emitter.emit('progress', loaded / numTotal);
	    };

	    var completeHandler = function() {
	        numLoaded++;
	        removeListeners();
	        emitter.emit('progress', numLoaded / numTotal);
	        next();
	    };

	    var errorHandler = function(e) {
	        console.error.call(console, e);
	        removeListeners();
	        emitter.emit('error', e);
	        next();
	    };

	    var removeListeners = function() {
	        loader.off('progress', progressHandler);
	        loader.off('loaded', completeHandler);
	        loader.off('error', errorHandler);
	    };

	    return Object.freeze({
	        on: emitter.on.bind(emitter),
	        once: emitter.once.bind(emitter),
	        off: emitter.off.bind(emitter),
	        add: add,
	        start: start
	    });
	};

	module.exports = Loader;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(115).EventEmitter;

	function Emitter() {
	    EventEmitter.call(this);
	    this.setMaxListeners(20);
	}

	Emitter.prototype = Object.create(EventEmitter.prototype);
	Emitter.prototype.constructor = Emitter;

	Emitter.prototype.off = function(type, listener) {
	    if (listener) {
	        return this.removeListener(type, listener);
	    }
	    if (type) {
	        return this.removeAllListeners(type);
	    }
	    return this.removeAllListeners();
	};

	module.exports = Emitter;


/***/ },
/* 115 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BufferSource = __webpack_require__(117),
	    Effect = __webpack_require__(101),
	    Emitter = __webpack_require__(114),
	    file = __webpack_require__(99),
	    Loader = __webpack_require__(113),
	    MediaSource = __webpack_require__(118),
	    MicrophoneSource = __webpack_require__(119),
	    OscillatorSource = __webpack_require__(120),
	    ScriptSource = __webpack_require__(121),
	    waveform = __webpack_require__(122)();

	function Sound(context, destination) {
	    var id,
	        data,
	        effect = new Effect(context),
	        gain = effect.gain(),
	        isTouchLocked = false,
	        loader,
	        loop = false,
	        playbackRate = 1,
	        playWhenReady,
	        source,
	        sound;

	    if(context) {
	        effect.setDestination(gain);
	        gain.connect(destination || context.destination);
	    }

	    /*
	     * Load
	     */

	    var load = function(config) {
	        var src = file.getSupportedFile(config.src || config.url || config);

	        if(source && data && data.tagName) {
	            source.load(src);
	        }
	        else {
	            loader = loader || new Loader(src);
	            loader.audioContext = !!config.asMediaElement ? null : context;
	            loader.isTouchLocked = isTouchLocked;
	            loader.once('loaded', function(file) {
	                createSource(file);
	                sound.emit('loaded', sound);
	            });
	        }
	        return sound;
	    };

	    /*
	     * Controls
	     */

	    var play = function(delay, offset) {
	        if(!source || isTouchLocked) {
	            playWhenReady = function() {
	                if (source) {
	                    play(delay, offset);
	                }
	            };
	            return sound;
	        }
	        playWhenReady = null;
	        effect.setSource(source.sourceNode);

	        // update volume needed for no webaudio
	        if(!context) { sound.volume = gain.gain.value; }

	        source.play(delay, offset);

	        if(source.hasOwnProperty('loop')) {
	            source.loop = loop;
	        }

	        sound.emit('play', sound);

	        return sound;
	    };

	    var pause = function() {
	        source && source.pause();
	        sound.emit('pause', sound);
	        return sound;
	    };

	    var stop = function(delay) {
	        source && source.stop(delay || 0);
	        sound.emit('stop', sound);
	        return sound;
	    };

	    var seek = function(percent) {
	        if(source) {
	            source.stop();
	            play(0, source.duration * percent);
	        }
	        return sound;
	    };

	    var fade = function(volume, duration) {
	        if(!source) { return sound; }

	        var param = gain.gain;

	        if(context) {
	            var time = context.currentTime;
	            param.cancelScheduledValues(time);
	            param.setValueAtTime(param.value, time);
	            param.linearRampToValueAtTime(volume, time + duration);
	        }
	        else if(typeof source.fade === 'function') {
	            source.fade(volume, duration);
	            param.value = volume;
	        }

	        return sound;
	    };

	    /*
	     * Destroy
	     */

	    var destroy = function() {
	        source && source.destroy();
	        effect && effect.destroy();
	        gain && gain.disconnect();
	        loader && loader.destroy();
	        sound.off('loaded');
	        sound.off('ended');
	        gain = null;
	        context = null;
	        data = null;
	        playWhenReady = null;
	        source = null;
	        effect = null;
	        loader = null;
	        sound.emit('destroy', sound);
	        sound.off('destroy');
	    };

	    /*
	     * Create source
	     */

	    var createSource = function(value) {
	        data = value;

	        if(file.isAudioBuffer(data)) {
	            source = new BufferSource(data, context, function() {
	                sound.emit('ended', sound);
	            });
	        }
	        else if(file.isMediaElement(data)) {
	            source = new MediaSource(data, context, function() {
	                sound.emit('ended', sound);
	            });
	        }
	        else if(file.isMediaStream(data)) {
	            source = new MicrophoneSource(data, context);
	        }
	        else if(file.isOscillatorType((data && data.type) || data)) {
	            source = new OscillatorSource(data.type || data, context);
	        }
	        else if(file.isScriptConfig(data)) {
	            source = new ScriptSource(data, context);
	        }
	        else {
	            throw new Error('Cannot detect data type: ' + data);
	        }

	        effect.setSource(source.sourceNode);

	        sound.emit('ready', sound);

	        if(playWhenReady) {
	            playWhenReady();
	        }
	    };

	    sound = Object.create(Emitter.prototype, {
	        _events: {
	            value: {}
	        },
	        constructor: {
	            value: Sound
	        },
	        play: {
	            value: play
	        },
	        pause: {
	            value: pause
	        },
	        load: {
	            value: load
	        },
	        seek: {
	            value: seek
	        },
	        stop: {
	            value: stop
	        },
	        fade: {
	            value: fade
	        },
	        destroy: {
	            value: destroy
	        },
	        context: {
	            value: context
	        },
	        currentTime: {
	            get: function() {
	                return source ? source.currentTime : 0;
	            },
	            set: function(value) {
	                // var silent = sound.playing;
	                source && source.stop();
	                // play(0, value, silent);
	                play(0, value);
	            }
	        },
	        data: {
	            get: function() {
	                return data;
	            },
	            set : function(value) {
	                if(!value) { return; }
	                createSource(value);
	            }
	        },
	        duration: {
	            get: function() {
	                return source ? source.duration : 0;
	            }
	        },
	        effect: {
	            value: effect
	        },
	        ended: {
	            get: function() {
	                return !!source && source.ended;
	            }
	        },
	        frequency: {
	            get: function() {
	                return source ? source.frequency : 0;
	            },
	            set: function(value) {
	                if(source && source.hasOwnProperty('frequency')) {
	                    source.frequency = value;
	                }
	            }
	        },
	        gain: {
	            value: gain
	        },
	        id: {
	            get: function() {
	                return id;
	            },
	            set: function(value) {
	                id = value;
	            }
	        },
	        isTouchLocked: {
	            set: function(value) {
	                isTouchLocked = value;
	                if(loader) {
	                    loader.isTouchLocked = value;
	                }
	                if(!value && playWhenReady) {
	                    playWhenReady();
	                }
	            }
	        },
	        loader: {
	            get: function() {
	                return loader;
	            }
	        },
	        loop: {
	            get: function() {
	                return loop;
	            },
	            set: function(value) {
	                loop = !!value;

	                if(source && source.hasOwnProperty('loop') && source.loop !== loop) {
	                  source.loop = loop;
	                }
	            }
	        },
	        paused: {
	            get: function() {
	                return !!source && source.paused;
	            }
	        },
	        playing: {
	            get: function() {
	                return !!source && source.playing;
	            }
	        },
	        playbackRate: {
	            get: function() {
	                return playbackRate;
	            },
	            set: function(value) {
	                playbackRate = value;
	                if(source) {
	                  source.playbackRate = playbackRate;
	                }
	            }
	        },
	        progress: {
	            get: function() {
	                return source ? source.progress : 0;
	            }
	        },
	        volume: {
	            get: function() {
	                if(context) {
	                    return gain.gain.value;
	                }
	                if(source && source.hasOwnProperty('volume')) {
	                    return source.volume;
	                }
	                return 1;
	            },
	            set: function(value) {
	                if(isNaN(value)) { return; }

	                var param = gain.gain;

	                if(context) {
	                    var time = context.currentTime;
	                    param.cancelScheduledValues(time);
	                    param.value = value;
	                    param.setValueAtTime(value, time);
	                }
	                else {
	                    param.value = value;

	                    if(source && source.hasOwnProperty('volume')) {
	                        source.volume = value;
	                    }
	                }
	            }
	        },
	        // for media element source
	        groupVolume: {
	            get: function() {
	                return source.groupVolume;
	            },
	            set: function(value) {
	                if(source && source.hasOwnProperty('groupVolume')) {
	                    source.groupVolume = value;
	                }
	            }
	        },
	        waveform: {
	            value: function(length) {
	                if(!data) {
	                    sound.once('ready', function() {
	                        waveform(data, length);
	                    });
	                }
	                return waveform(data, length);
	            }
	        },
	        userData: {
	            value: {}
	        }
	    });

	    return Object.freeze(sound);
	}

	module.exports = Sound;


/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';

	function BufferSource(buffer, context, onEnded) {
	    var ended = false,
	        endedCallback = onEnded,
	        loop = false,
	        paused = false,
	        pausedAt = 0,
	        playbackRate = 1,
	        playing = false,
	        sourceNode = null,
	        startedAt = 0,
	        api = {};

	    var createSourceNode = function() {
	        if(!sourceNode && context) {
	            sourceNode = context.createBufferSource();
	            sourceNode.buffer = buffer;
	        }
	        return sourceNode;
	    };

	    /*
	     * Controls
	     */

	    var play = function(delay, offset) {
	        if(playing) { return; }

	        delay = delay ? context.currentTime + delay : 0;
	        offset = offset || 0;
	        if(offset) { pausedAt = 0; }
	        if(pausedAt) { offset = pausedAt; }
	        while(offset > api.duration) { offset = offset % api.duration; }

	        createSourceNode();
	        sourceNode.onended = endedHandler;
	        sourceNode.start(delay, offset);

	        sourceNode.loop = loop;
	        sourceNode.playbackRate.value = playbackRate;

	        startedAt = context.currentTime - offset;
	        ended = false;
	        paused = false;
	        pausedAt = 0;
	        playing = true;
	    };

	    var pause = function() {
	        var elapsed = context.currentTime - startedAt;
	        stop();
	        pausedAt = elapsed;
	        playing = false;
	        paused = true;
	    };

	    var stop = function() {
	        if(sourceNode) {
	            sourceNode.onended = null;
	            try {
	                sourceNode.disconnect();
	                sourceNode.stop(0);
	            } catch(e) {}
	            sourceNode = null;
	        }

	        paused = false;
	        pausedAt = 0;
	        playing = false;
	        startedAt = 0;
	    };

	    /*
	     * Ended handler
	     */

	    var endedHandler = function() {
	        stop();
	        ended = true;
	        if(typeof endedCallback === 'function') {
	            endedCallback(api);
	        }
	    };

	    /*
	     * Destroy
	     */

	    var destroy = function() {
	        stop();
	        buffer = null;
	        context = null;
	        endedCallback = null;
	        sourceNode = null;
	    };

	    /*
	     * Getters & Setters
	     */

	    Object.defineProperties(api, {
	        play: {
	            value: play
	        },
	        pause: {
	            value: pause
	        },
	        stop: {
	            value: stop
	        },
	        destroy: {
	            value: destroy
	        },
	        currentTime: {
	            get: function() {
	                if(pausedAt) {
	                    return pausedAt;
	                }
	                if(startedAt) {
	                    var time = context.currentTime - startedAt;
	                    if(time > api.duration) {
	                        time = time % api.duration;
	                    }
	                    return time;
	                }
	                return 0;
	            }
	        },
	        duration: {
	            get: function() {
	                return buffer ? buffer.duration : 0;
	            }
	        },
	        ended: {
	            get: function() {
	                return ended;
	            }
	        },
	        loop: {
	            get: function() {
	                return loop;
	            },
	            set: function(value) {
	                loop = !!value;
	                if(sourceNode) {
	                    sourceNode.loop = loop;
	                }
	            }
	        },
	        paused: {
	            get: function() {
	                return paused;
	            }
	        },
	        playbackRate: {
	            get: function() {
	                return playbackRate;
	            },
	            set: function(value) {
	                playbackRate = value;
	                if(sourceNode) {
	                    sourceNode.playbackRate.value = playbackRate;
	                }
	            }
	        },
	        playing: {
	            get: function() {
	                return playing;
	            }
	        },
	        progress: {
	            get: function() {
	                return api.duration ? api.currentTime / api.duration : 0;
	            }
	        },
	        sourceNode: {
	            get: function() {
	                return createSourceNode();
	            }
	        }
	    });

	    return Object.freeze(api);
	}

	module.exports = BufferSource;


/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';

	function MediaSource(el, context, onEnded) {
	    var ended = false,
	        endedCallback = onEnded,
	        delayTimeout,
	        fadeTimeout,
	        loop = false,
	        paused = false,
	        playbackRate = 1,
	        playing = false,
	        sourceNode = null,
	        groupVolume = 1,
	        volume = 1,
	        api = {};

	    var createSourceNode = function() {
	        if(!sourceNode && context) {
	            sourceNode = context.createMediaElementSource(el);
	        }
	        return sourceNode;
	    };

	    /*
	     * Load
	     */

	    var load = function(url) {
	        el.src = url;
	        el.load();
	        ended = false;
	        paused = false;
	        playing = false;
	    };

	    /*
	     * Controls
	     */

	    var play = function(delay, offset) {
	        clearTimeout(delayTimeout);

	        el.volume = volume * groupVolume;
	        el.playbackRate = playbackRate;

	        if(offset) {
	            el.currentTime = offset;
	        }

	        if(delay) {
	            delayTimeout = setTimeout(play, delay);
	        }
	        else {
	            // el.load();
	            el.play();
	        }

	        ended = false;
	        paused = false;
	        playing = true;

	        el.removeEventListener('ended', endedHandler);
	        el.addEventListener('ended', endedHandler, false);

	        if(el.readyState < 4) {
	            el.removeEventListener('canplaythrough', readyHandler);
	            el.addEventListener('canplaythrough', readyHandler, false);
	            el.load();
	            el.play();
	        }
	    };

	    var readyHandler = function() {
	        el.removeEventListener('canplaythrough', readyHandler);
	        if(playing) {
	            el.play();
	        }
	    };

	    var pause = function() {
	        clearTimeout(delayTimeout);

	        if(!el) { return; }

	        el.pause();
	        playing = false;
	        paused = true;
	    };

	    var stop = function() {
	        clearTimeout(delayTimeout);

	        if(!el) { return; }

	        el.pause();

	        try {
	            el.currentTime = 0;
	            // fixes bug where server doesn't support seek:
	            if(el.currentTime > 0) { el.load(); }
	        } catch(e) {}

	        playing = false;
	        paused = false;
	    };

	    /*
	     * Fade for no webaudio
	     */

	    var fade = function(toVolume, duration) {
	        if(context) { return api; }

	        function ramp(value, step) {
	            fadeTimeout = setTimeout(function() {
	                api.volume = api.volume + ( value - api.volume ) * 0.2;
	                if(Math.abs(api.volume - value) > 0.05) {
	                    return ramp(value, step);
	                }
	                api.volume = value;
	            }, step * 1000);
	        }

	        window.clearTimeout(fadeTimeout);
	        ramp(toVolume, duration / 10);

	        return api;
	    };

	    /*
	     * Ended handler
	     */

	    var endedHandler = function() {
	        ended = true;
	        paused = false;
	        playing = false;

	        if(loop) {
	            el.currentTime = 0;
	            // fixes bug where server doesn't support seek:
	            if(el.currentTime > 0) { el.load(); }
	            play();
	        } else if(typeof endedCallback === 'function') {
	            endedCallback(api);
	        }
	    };

	    /*
	     * Destroy
	     */

	    var destroy = function() {
	        el.removeEventListener('ended', endedHandler);
	        el.removeEventListener('canplaythrough', readyHandler);
	        stop();
	        el = null;
	        context = null;
	        endedCallback = null;
	        sourceNode = null;
	    };

	    /*
	     * Getters & Setters
	     */

	    Object.defineProperties(api, {
	        play: {
	            value: play
	        },
	        pause: {
	            value: pause
	        },
	        stop: {
	            value: stop
	        },
	        load: {
	            value: load
	        },
	        fade: {
	            value: fade
	        },
	        destroy: {
	            value: destroy
	        },
	        currentTime: {
	            get: function() {
	                return el ? el.currentTime : 0;
	            }
	        },
	        duration: {
	            get: function() {
	                return el ? el.duration : 0;
	            }
	        },
	        ended: {
	            get: function() {
	                return ended;
	            }
	        },
	        loop: {
	            get: function() {
	                return loop;
	            },
	            set: function(value) {
	                loop = !!value;
	            }
	        },
	        paused: {
	            get: function() {
	                return paused;
	            }
	        },
	        playbackRate: {
	            get: function() {
	                return playbackRate;
	            },
	            set: function(value) {
	                playbackRate = value;
	                if(el) {
	                    el.playbackRate = playbackRate;
	                }
	            }
	        },
	        playing: {
	            get: function() {
	                return playing;
	            }
	        },
	        progress: {
	            get: function() {
	                return el && el.duration ? el.currentTime / el.duration : 0;
	            }
	        },
	        sourceNode: {
	            get: function() {
	                return createSourceNode();
	            }
	        },
	        volume: {
	            get: function() {
	                return volume;
	            },
	            set: function(value) {
	                window.clearTimeout(fadeTimeout);
	                volume = value;
	                if(el) {
	                    el.volume = volume * groupVolume;
	                }
	            }
	        },
	        groupVolume: {
	            get: function() {
	                return groupVolume;
	            },
	            set: function(value) {
	                groupVolume = value;
	                if(el) {
	                    el.volume = volume * groupVolume;
	                }
	            }
	        }
	    });

	    return Object.freeze(api);
	}

	module.exports = MediaSource;


/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';

	function MicrophoneSource(stream, context) {
	    var ended = false,
	        paused = false,
	        pausedAt = 0,
	        playing = false,
	        sourceNode = null, // MicrophoneSourceNode
	        startedAt = 0;

	    var createSourceNode = function() {
	        if(!sourceNode && context) {
	            sourceNode = context.createMediaStreamSource(stream);
	            // HACK: stops moz garbage collection killing the stream
	            // see https://support.mozilla.org/en-US/questions/984179
	            if(navigator.mozGetUserMedia) {
	                window.mozHack = sourceNode;
	            }
	        }
	        return sourceNode;
	    };

	    /*
	     * Controls
	     */

	    var play = function(delay) {
	        delay = delay ? context.currentTime + delay : 0;

	        createSourceNode();
	        sourceNode.start(delay);

	        startedAt = context.currentTime - pausedAt;
	        ended = false;
	        playing = true;
	        paused = false;
	        pausedAt = 0;
	    };

	    var pause = function() {
	        var elapsed = context.currentTime - startedAt;
	        stop();
	        pausedAt = elapsed;
	        playing = false;
	        paused = true;
	    };

	    var stop = function() {
	        if(sourceNode) {
	            try {
	                sourceNode.stop(0);
	            } catch(e) {}
	            sourceNode = null;
	        }
	        ended = true;
	        paused = false;
	        pausedAt = 0;
	        playing = false;
	        startedAt = 0;
	    };

	    /*
	     * Destroy
	     */

	    var destroy = function() {
	        stop();
	        context = null;
	        sourceNode = null;
	        stream = null;
	        window.mozHack = null;
	    };

	    /*
	     * Api
	     */

	    var api = {
	        play: play,
	        pause: pause,
	        stop: stop,
	        destroy: destroy,

	        duration: 0,
	        progress: 0
	    };

	    /*
	     * Getters & Setters
	     */

	    Object.defineProperties(api, {
	        currentTime: {
	            get: function() {
	                if(pausedAt) {
	                    return pausedAt;
	                }
	                if(startedAt) {
	                    return context.currentTime - startedAt;
	                }
	                return 0;
	            }
	        },
	        ended: {
	            get: function() {
	                return ended;
	            }
	        },
	        paused: {
	            get: function() {
	                return paused;
	            }
	        },
	        playing: {
	            get: function() {
	                return playing;
	            }
	        },
	        sourceNode: {
	            get: function() {
	                return createSourceNode();
	            }
	        }
	    });

	    return Object.freeze(api);
	}

	module.exports = MicrophoneSource;


/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	function OscillatorSource(type, context) {
	    var ended = false,
	        paused = false,
	        pausedAt = 0,
	        playing = false,
	        sourceNode = null, // OscillatorSourceNode
	        startedAt = 0,
	        frequency = 200,
	        api;

	    var createSourceNode = function() {
	        if(!sourceNode && context) {
	            sourceNode = context.createOscillator();
	            sourceNode.type = type;
	            sourceNode.frequency.value = frequency;
	        }
	        return sourceNode;
	    };

	    /*
	     * Controls
	     */

	    var play = function(delay) {
	        delay = delay || 0;
	        if(delay) { delay = context.currentTime + delay; }

	        createSourceNode();
	        sourceNode.start(delay);

	        if(pausedAt) {
	            startedAt = context.currentTime - pausedAt;
	        }
	        else {
	            startedAt = context.currentTime;
	        }

	        ended = false;
	        playing = true;
	        paused = false;
	        pausedAt = 0;
	    };

	    var pause = function() {
	        var elapsed = context.currentTime - startedAt;
	        this.stop();
	        pausedAt = elapsed;
	        playing = false;
	        paused = true;
	    };

	    var stop = function() {
	        if(sourceNode) {
	            try {
	                sourceNode.stop(0);
	            } catch(e) {}
	            sourceNode = null;
	        }
	        ended = true;
	        paused = false;
	        pausedAt = 0;
	        playing = false;
	        startedAt = 0;
	    };

	    /*
	     * Destroy
	     */

	    var destroy = function() {
	        this.stop();
	        context = null;
	        sourceNode = null;
	    };

	    /*
	     * Api
	     */

	    api = {
	        play: play,
	        pause: pause,
	        stop: stop,
	        destroy: destroy
	    };

	    /*
	     * Getters & Setters
	     */

	    Object.defineProperties(api, {
	        currentTime: {
	            get: function() {
	                if(pausedAt) {
	                    return pausedAt;
	                }
	                if(startedAt) {
	                    return context.currentTime - startedAt;
	                }
	                return 0;
	            }
	        },
	        duration: {
	            value: 0
	        },
	        ended: {
	            get: function() {
	                return ended;
	            }
	        },
	        frequency: {
	            get: function() {
	                return frequency;
	            },
	            set: function(value) {
	                frequency = value;
	                if(sourceNode) {
	                    sourceNode.frequency.value = value;
	                }
	            }
	        },
	        paused: {
	            get: function() {
	                return paused;
	            }
	        },
	        playing: {
	            get: function() {
	                return playing;
	            }
	        },
	        progress: {
	            value: 0
	        },
	        sourceNode: {
	            get: function() {
	                return createSourceNode();
	            }
	        }
	    });

	    return Object.freeze(api);
	}

	module.exports = OscillatorSource;


/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';

	function ScriptSource(data, context) {
	    var bufferSize = data.bufferSize || 1024,
	        channels = data.channels || 1,
	        ended = false,
	        onProcess = data.callback.bind(data.thisArg || this),
	        paused = false,
	        pausedAt = 0,
	        playing = false,
	        sourceNode = null, // ScriptSourceNode
	        startedAt = 0,
	        api;

	    var createSourceNode = function() {
	        if(!sourceNode && context) {
	            sourceNode = context.createScriptProcessor(bufferSize, 0, channels);
	        }
	        return sourceNode;
	    };

	    /*
	     * Controls
	     */

	    var play = function(delay) {
	        delay = delay ? context.currentTime + delay : 0;

	        createSourceNode();
	        sourceNode.onaudioprocess = onProcess;

	        startedAt = context.currentTime - pausedAt;
	        ended = false;
	        paused = false;
	        pausedAt = 0;
	        playing = true;
	    };

	    var pause = function() {
	        var elapsed = context.currentTime - startedAt;
	        this.stop();
	        pausedAt = elapsed;
	        playing = false;
	        paused = true;
	    };

	    var stop = function() {
	        if(sourceNode) {
	            sourceNode.onaudioprocess = onPaused;
	        }
	        ended = true;
	        paused = false;
	        pausedAt = 0;
	        playing = false;
	        startedAt = 0;
	    };

	    var onPaused = function(event) {
	        var buffer = event.outputBuffer;
	        for (var i = 0; i < buffer.numberOfChannels; i++) {
	            var channel = buffer.getChannelData(i);
	            for (var j = 0; j < channel.length; j++) {
	                channel[j] = 0;
	            }
	        }
	    };

	    /*
	     * Destroy
	     */

	    var destroy = function() {
	        this.stop();
	        context = null;
	        onProcess = null;
	        sourceNode = null;
	    };

	    /*
	     * Api
	     */

	    api = {
	        play: play,
	        pause: pause,
	        stop: stop,
	        destroy: destroy,

	        duration: 0,
	        progress: 0
	    };

	    /*
	     * Getters & Setters
	     */

	    Object.defineProperties(api, {
	        currentTime: {
	            get: function() {
	                if(pausedAt) {
	                    return pausedAt;
	                }
	                if(startedAt) {
	                    return context.currentTime - startedAt;
	                }
	                return 0;
	            }
	        },
	        ended: {
	            get: function() {
	                return ended;
	            }
	        },
	        paused: {
	            get: function() {
	                return paused;
	            }
	        },
	        playing: {
	            get: function() {
	                return playing;
	            }
	        },
	        sourceNode: {
	            get: function() {
	                return createSourceNode();
	            }
	        }
	    });

	    return Object.freeze(api);
	}

	module.exports = ScriptSource;


/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	function waveform() {

	    var buffer,
	        wave;

	    return function(audioBuffer, length) {
	        if(!window.Float32Array || !window.AudioBuffer) { return []; }

	        var sameBuffer = buffer === audioBuffer;
	        var sameLength = wave && wave.length === length;
	        if(sameBuffer && sameLength) { return wave; }

	        //console.time('waveData');
	        if(!wave || wave.length !== length) {
	            wave = new Float32Array(length);
	        }

	        if(!audioBuffer) { return wave; }

	        // cache for repeated calls
	        buffer = audioBuffer;

	        var chunk = Math.floor(buffer.length / length),
	            resolution = 5, // 10
	            incr = Math.max(Math.floor(chunk / resolution), 1),
	            greatest = 0;

	        for(var i = 0; i < buffer.numberOfChannels; i++) {
	            // check each channel
	            var channel = buffer.getChannelData(i);
	            for(var j = 0; j < length; j++) {
	                // get highest value within the chunk
	                for(var k = j * chunk, l = k + chunk; k < l; k += incr) {
	                    // select highest value from channels
	                    var a = channel[k];
	                    if(a < 0) { a = -a; }
	                    if(a > wave[j]) {
	                        wave[j] = a;
	                    }
	                    // update highest overall for scaling
	                    if(a > greatest) {
	                        greatest = a;
	                    }
	                }
	            }
	        }
	        // scale up
	        var scale = 1 / greatest;
	        for(i = 0; i < wave.length; i++) {
	            wave[i] *= scale;
	        }
	        //console.timeEnd('waveData');

	        return wave;
	    };
	}

	module.exports = waveform;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Group = __webpack_require__(100);

	function SoundGroup(context, destination) {
	    var group = new Group(context, destination),
	        sounds = group.sounds,
	        playbackRate = 1,
	        loop = false,
	        src;

	    var getSource = function() {
	        if(!sounds.length) { return; }

	        src = sounds.slice(0).sort(function(a, b) {
	            return b.duration - a.duration;
	        })[0];
	    };

	    var add = group.add;
	    group.add = function(sound) {
	        add(sound);
	        getSource();
	        return group;
	    };

	    var remove = group.rmeove;
	    group.remove = function(soundOrId) {
	        remove(soundOrId);
	        getSource();
	        return group;
	    };

	    Object.defineProperties(group, {
	        currentTime: {
	            get: function() {
	                return src ? src.currentTime : 0;
	            },
	            set: function(value) {
	                this.stop();
	                this.play(0, value);
	            }
	        },
	        duration: {
	            get: function() {
	                return src ? src.duration : 0;
	            }
	        },
	        // ended: {
	        //     get: function() {
	        //         return src ? src.ended : false;
	        //     }
	        // },
	        loop: {
	            get: function() {
	                return loop;
	            },
	            set: function(value) {
	                loop = !!value;
	                sounds.forEach(function(sound) {
	                    sound.loop = loop;
	                });
	            }
	        },
	        paused: {
	            get: function() {
	                // return src ? src.paused : false;
	                return !!src && src.paused;
	            }
	        },
	        progress: {
	            get: function() {
	                return src ? src.progress : 0;
	            }
	        },
	        playbackRate: {
	            get: function() {
	                return playbackRate;
	            },
	            set: function(value) {
	                playbackRate = value;
	                sounds.forEach(function(sound) {
	                    sound.playbackRate = playbackRate;
	                });
	            }
	        },
	        playing: {
	            get: function() {
	                // return src ? src.playing : false;
	                return !!src && src.playing;
	            }
	        }
	    });

	    return group;

	}

	module.exports = SoundGroup;


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Microphone = __webpack_require__(125);
	var waveformer = __webpack_require__(126);

	/*
	 * audio ctx
	 */
	var ctx;

	var getContext = function() {
	    if (ctx) { return ctx; }

	    var Ctx = window.AudioContext || window.webkitAudioContext;

	    ctx = (Ctx ? new Ctx() : null);

	    // Handles bug in Safari 9 OSX where AudioContext instance starts in 'suspended' state

	    var isSuspended = ctx && ctx.state === 'suspended';

	    if (isSuspended && typeof ctx.resume === 'function') {
	        window.setTimeout(function() {
	            ctx.resume();
	        }, 1000);
	    }

	    return ctx;
	};

	/*
	 * clone audio buffer
	 */

	var cloneBuffer = function(buffer) {
	    if (!ctx) { return buffer; }

	    var numChannels = buffer.numberOfChannels,
	        cloned = ctx.createBuffer(numChannels, buffer.length, buffer.sampleRate);
	    for (var i = 0; i < numChannels; i++) {
	        cloned.getChannelData(i).set(buffer.getChannelData(i));
	    }
	    return cloned;
	};

	/*
	 * reverse audio buffer
	 */

	var reverseBuffer = function(buffer) {
	    var numChannels = buffer.numberOfChannels;
	    for (var i = 0; i < numChannels; i++) {
	        Array.prototype.reverse.call(buffer.getChannelData(i));
	    }
	    return buffer;
	};

	/*
	 * ramp audio param
	 */

	var ramp = function(param, fromValue, toValue, duration, linear) {
	    if (!ctx) { return; }

	    param.setValueAtTime(fromValue, ctx.currentTime);

	    if (linear) {
	        param.linearRampToValueAtTime(toValue, ctx.currentTime + duration);
	    } else {
	        param.exponentialRampToValueAtTime(toValue, ctx.currentTime + duration);
	    }
	};

	/*
	 * get frequency from min to max by passing 0 to 1
	 */

	var getFrequency = function(value) {
	    if (!ctx) { return 0; }
	    // get frequency by passing number from 0 to 1
	    // Clamp the frequency between the minimum value (40 Hz) and half of the
	    // sampling rate.
	    var minValue = 40;
	    var maxValue = ctx.sampleRate / 2;
	    // Logarithm (base 2) to compute how many octaves fall in the range.
	    var numberOfOctaves = Math.log(maxValue / minValue) / Math.LN2;
	    // Compute a multiplier from 0 to 1 based on an exponential scale.
	    var multiplier = Math.pow(2, numberOfOctaves * (value - 1.0));
	    // Get back to the frequency value between min and max.
	    return maxValue * multiplier;
	};

	/*
	 * microphone util
	 */

	var microphone = function(connected, denied, error) {
	    return new Microphone(connected, denied, error);
	};

	/*
	 * Format seconds as timecode string
	 */

	var timeCode = function(seconds, delim) {
	    if (delim === undefined) { delim = ':'; }
	    var h = Math.floor(seconds / 3600);
	    var m = Math.floor((seconds % 3600) / 60);
	    var s = Math.floor((seconds % 3600) % 60);
	    var hr = (h === 0 ? '' : (h < 10 ? '0' + h + delim : h + delim));
	    var mn = (m < 10 ? '0' + m : m) + delim;
	    var sc = (s < 10 ? '0' + s : s);
	    return hr + mn + sc;
	};

	module.exports = Object.freeze({
	    getContext: getContext,
	    cloneBuffer: cloneBuffer,
	    reverseBuffer: reverseBuffer,
	    ramp: ramp,
	    getFrequency: getFrequency,
	    microphone: microphone,
	    timeCode: timeCode,
	    waveformer: waveformer
	});


/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';

	function Microphone(connected, denied, error) {
	    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	    error = error || function() {};

	    var isSupported = !!navigator.getUserMedia,
	        stream = null,
	        api = {};

	    var connect = function() {
	        if(!isSupported) { return; }

	        navigator.getUserMedia({audio:true}, function(micStream) {
	            stream = micStream;
	            connected(stream);
	        }, function(e) {
	            if(denied && e.name === 'PermissionDeniedError' || e === 'PERMISSION_DENIED') {
	                // console.log('Permission denied. Reset by clicking the camera icon with the red cross in the address bar');
	                denied();
	            }
	            else {
	                error(e.message || e);
	            }
	        });
	        return api;
	    };

	    var disconnect = function() {
	        if(stream) {
	            stream.stop();
	            stream = null;
	        }
	        return api;
	    };

	    Object.defineProperties(api, {
	        connect: {
	            value: connect
	        },
	        disconnect: {
	            value: disconnect
	        },
	        isSupported: {
	            value: isSupported
	        },
	        stream: {
	            get: function() {
	                return stream;
	            }
	        }
	    });

	    return Object.freeze(api);
	}


	module.exports = Microphone;


/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';

	var halfPI = Math.PI / 2;
	var twoPI = Math.PI * 2;

	module.exports = function waveformer(config) {

	    var style = config.style || 'fill', // 'fill' or 'line'
	        shape = config.shape || 'linear', // 'circular' or 'linear'
	        color = config.color || 0,
	        bgColor = config.bgColor,
	        lineWidth = config.lineWidth || 1,
	        percent = config.percent || 1,
	        originX = config.x || 0,
	        originY = config.y || 0,
	        transform = config.transform,
	        canvas = config.canvas,
	        width = config.width || (canvas && canvas.width),
	        height = config.height || (canvas && canvas.height),
	        ctx, currentColor, waveform, length, i, value, x, y,
	        radius, innerRadius, centerX, centerY;

	    if(!canvas && !config.context) {
	      canvas = document.createElement('canvas');
	      width = width || canvas.width;
	      height = height || canvas.height;
	      canvas.width = height;
	      canvas.height = height;
	    }

	    if(shape === 'circular') {
	      radius = config.radius || Math.min(height / 2, width / 2),
	      innerRadius = config.innerRadius || radius / 2;
	      centerX = originX + width / 2;
	      centerY = originY + height / 2;
	    }

	    ctx = config.context || canvas.getContext('2d');

	    var clear = function() {
	      if(bgColor) {
	          ctx.fillStyle = bgColor;
	          ctx.fillRect(originX, originY, width, height);
	      } else {
	          ctx.clearRect(originX, originY, width, height);
	      }

	      ctx.lineWidth = lineWidth;

	      currentColor = null;

	      if(typeof color !== 'function') {
	        ctx.strokeStyle = color;
	        ctx.beginPath();
	      }
	    };

	    var updateColor = function(position, length, value) {
	      if(typeof color === 'function') {
	        var newColor = color(position, length, value);
	        if(newColor !== currentColor) {
	          currentColor = newColor;
	          ctx.stroke();
	          ctx.strokeStyle = currentColor;
	          ctx.beginPath();
	        }
	      }
	    };

	    var getValue = function(value, position, length) {
	      if(typeof transform === 'function') {
	        return transform(value, position, length);
	      }
	      return value;
	    };

	    var getWaveform = function(value, length) {
	      if(value && typeof value.waveform === 'function') {
	        return value.waveform(length);
	      }
	      if(value) {
	        return value;
	      }
	      if(config.waveform) {
	        return config.waveform;
	      }
	      if(config.sound) {
	        return config.sound.waveform(length);
	      }
	      return null;
	    };

	    var update = function(wave) {

	      clear();

	      if(shape === 'circular') {

	        waveform = getWaveform(wave, 360);
	        length = Math.floor(waveform.length * percent);

	        var step = twoPI / length,
	            angle, magnitude, sine, cosine;

	        for (i = 0; i < length; i++) {
	          value = getValue(waveform[i], i, length);
	          updateColor(i, length, value);

	          angle = i * step - halfPI;
	          cosine = Math.cos(angle);
	          sine = Math.sin(angle);

	          if(style === 'fill') {
	            x = centerX + innerRadius * cosine;
	            y = centerY + innerRadius * sine;
	            ctx.moveTo(x, y);
	          }

	          magnitude = innerRadius + (radius - innerRadius) * value;
	          x = centerX + magnitude * cosine;
	          y = centerY + magnitude * sine;

	          if(style === 'line' && i === 0) {
	            ctx.moveTo(x, y);
	          }

	          ctx.lineTo(x, y);
	        }

	        if(style === 'line') {
	          ctx.closePath();
	        }
	      }
	      else {

	        waveform = getWaveform(wave, width);
	        length = Math.min(waveform.length, width - lineWidth / 2);
	        length = Math.floor(length * percent);

	        for(i = 0; i < length; i++) {
	          value = getValue(waveform[i], i, length);
	          updateColor(i, length, value);

	          if(style === 'line' && i > 0) {
	            ctx.lineTo(x, y);
	          }

	          x = originX + i;
	          y = originY + height - Math.round(height * value);
	          y = Math.floor(Math.min(y, originY + height - lineWidth / 2));

	          if(style === 'fill') {
	            ctx.moveTo(x, y);
	            ctx.lineTo(x, originY + height);
	          } else {
	            ctx.lineTo(x, y);
	          }
	        }
	      }
	      ctx.stroke();
	    };

	    update.canvas = canvas;

	    if(config.waveform || config.sound) {
	      update();
	    }

	    return update;
	};


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var Detector = {
		ANDROID_VERSION : __webpack_require__(128),
		DEVICE_TYPE : __webpack_require__(132),
		FIREFOX_VERSION : __webpack_require__(136),
		HAS_CANVAS : __webpack_require__(138),
		HAS_FULLSCREEN : __webpack_require__(139),
		HAS_GYRO : __webpack_require__(140),
		HAS_HISTORY : __webpack_require__(143),
		HAS_INLINE_VIDEO_FORCED : __webpack_require__(144),
		HAS_INLINE_VIDEO : __webpack_require__(145),
		HAS_MOUSE_MOVE : __webpack_require__(150),
		HAS_TOUCH : __webpack_require__(151),
		HAS_WEBGL : __webpack_require__(148),
		HIDDEN_PROPERTY_NAME : __webpack_require__(152),
		IE_VERSION : __webpack_require__(153),
		IOS_VERSION : __webpack_require__(149),
		IS_ANDROID_BROWSER : __webpack_require__(154),
		IS_ANDROID : __webpack_require__(130),
		IS_CHROME_IOS : __webpack_require__(155),
		IS_CHROME : __webpack_require__(156),
		IS_DESKTOP : __webpack_require__(142),
		IS_FIREFOX : __webpack_require__(137),
		IS_IE : __webpack_require__(157),
		IS_IOS : __webpack_require__(134),
		IS_IPAD : __webpack_require__(158),
		IS_IPHONE : __webpack_require__(147),
		IS_IPOD : __webpack_require__(146),
		IS_LINUX : __webpack_require__(159),
		IS_MOBILE : __webpack_require__(141),
		IS_OPERA : __webpack_require__(160),
		IS_OSX : __webpack_require__(161),
		IS_PHONE : __webpack_require__(133),
		IS_RETINA : __webpack_require__(162),
		IS_SAFARI_IOS : __webpack_require__(164),
		IS_SAFARI : __webpack_require__(165),
		IS_TABLET : __webpack_require__(135),
		IS_WINDOWS_PHONE : __webpack_require__(131),
		IS_WINDOWS : __webpack_require__(166),
		MAX_CUBE_TEXTURE_SIZE : __webpack_require__(167),
		PIXEL_RATIO : __webpack_require__(163),
		TRANSITION_END_EVENT_NAME : __webpack_require__(168),
		UA : __webpack_require__(129),
		VISIBILITY_CHANGE_EVENT_NAME : __webpack_require__(169)
	};

	// TODO: Figure out better way to expose it to window
	window.Detector = Detector;

	module.exports = Detector;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_ANDROID = __webpack_require__(130);

	var ANDROID_VERSION = !IS_ANDROID ? -1 : parseFloat(UA.slice(UA.indexOf('Android') + 8));

	module.exports = ANDROID_VERSION;


/***/ },
/* 129 */
/***/ function(module, exports) {

	var UA = (navigator.userAgent || navigator.vendor || window.opera);

	module.exports = UA;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_WINDOWS_PHONE = __webpack_require__(131);

	var IS_ANDROID = (!!UA.match(/Android/i) && !IS_WINDOWS_PHONE);

	module.exports = IS_ANDROID;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_WINDOWS_PHONE = /Windows Phone/i.test(UA);

	module.exports = IS_WINDOWS_PHONE;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var IS_PHONE = __webpack_require__(133);
	var IS_TABLET = __webpack_require__(135);

	var DEVICE_TYPE = (function () {
		if (IS_PHONE) return 'phone';
		if (IS_TABLET) return 'tablet';
		return 'desktop';
	})();

	module.exports = DEVICE_TYPE;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_ANDROID = __webpack_require__(130);
	var IS_IOS = __webpack_require__(134);
	var IS_WINDOWS_PHONE = __webpack_require__(131);

	var IS_PHONE = (IS_ANDROID || IS_IOS || IS_WINDOWS_PHONE) && (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(UA.toLowerCase())); // eslint-disable-line max-len

	module.exports = IS_PHONE;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_WINDOWS_PHONE = __webpack_require__(131);

	var IS_IOS = (!!UA.match(/iP[ao]d|iPhone/i) && !IS_WINDOWS_PHONE);

	module.exports = IS_IOS;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_ANDROID = __webpack_require__(130);
	var IS_IOS = __webpack_require__(134);
	var IS_WINDOWS_PHONE = __webpack_require__(131);

	var IS_TABLET = (IS_ANDROID || IS_IOS || IS_WINDOWS_PHONE) && (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(UA.toLowerCase())); // eslint-disable-line

	module.exports = IS_TABLET;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_FIREFOX = __webpack_require__(137);

	var FIREFOX_VERSION = (function () {
		if (!IS_FIREFOX) return -1;
		return parseFloat(UA.slice(UA.indexOf('Firefox') + 8));
	})();

	module.exports = FIREFOX_VERSION;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_FIREFOX = /Firefox/.test(UA);

	module.exports = IS_FIREFOX;


/***/ },
/* 138 */
/***/ function(module, exports) {

	var HAS_CANVAS = !!window.CanvasRenderingContext2D;

	module.exports = HAS_CANVAS;


/***/ },
/* 139 */
/***/ function(module, exports) {

	var HAS_FULLSCREEN = (function () {
		var element = document.body;
		return !!(
			element.requestFullScreen ||
			element.webkitRequestFullScreen ||
			element.mozRequestFullScreen ||
			element.msRequestFullscreen
		);
	})();

	module.exports = HAS_FULLSCREEN;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var IS_MOBILE = __webpack_require__(141);

	var HAS_GYRO = IS_MOBILE;

	module.exports = HAS_GYRO;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var IS_DESKTOP = __webpack_require__(142);

	var IS_MOBILE = !IS_DESKTOP;

	module.exports = IS_MOBILE;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var IS_PHONE = __webpack_require__(133);
	var IS_TABLET = __webpack_require__(135);

	var IS_DESKTOP = (!IS_PHONE && !IS_TABLET);

	module.exports = IS_DESKTOP;


/***/ },
/* 143 */
/***/ function(module, exports) {

	var HAS_HISTORY = !!(history && history.pushState);

	module.exports = HAS_HISTORY;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var HAS_INLINE_VIDEO = __webpack_require__(145);
	var HAS_WEBGL = __webpack_require__(148);
	var IOS_VERSION = __webpack_require__(149);

	var HAS_INLINE_VIDEO_FORCED = (!HAS_INLINE_VIDEO && HAS_WEBGL && IOS_VERSION >= 8);

	module.exports = HAS_INLINE_VIDEO_FORCED;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var IS_IPOD = __webpack_require__(146);
	var IS_IPHONE = __webpack_require__(147);

	var HAS_INLINE_VIDEO = (function () {
		var videoEl = document.createElement('video');
		var hasVideo = !!videoEl.canPlayType;
		return hasVideo && !(IS_IPOD || IS_IPHONE);
	})();

	module.exports = HAS_INLINE_VIDEO;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_IPOD = !!UA.match(/iPod/i);

	module.exports = IS_IPOD;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_IPHONE = !!UA.match(/iPhone/i);

	module.exports = IS_IPHONE;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var IS_IOS = __webpack_require__(134);
	var IOS_VERSION = __webpack_require__(149);

	var HAS_WEBGL = (function () {
		if (IS_IOS && IOS_VERSION < 8) {
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
	})();

	module.exports = HAS_WEBGL;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IOS_VERSION = (function () {
		if (/iP[ao]d|iPhone/i.test(UA)) {
			var matches = UA.match(/OS (\d+)_(\d+)/i);
			if (matches && matches.length > 2) {
				return parseFloat(matches[1] + '.' + matches[2]);
			}
		}
		return -1;
	})();


	module.exports = IOS_VERSION;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var IS_DESKTOP = __webpack_require__(142);

	var HAS_MOUSE_MOVE = IS_DESKTOP;

	module.exports = HAS_MOUSE_MOVE;


/***/ },
/* 151 */
/***/ function(module, exports) {

	var HAS_TOUCH = !!(
		'ontouchstart' in window ||
		'onmsgesturechange' in window ||
		(window.DocumentTouch && document instanceof window.DocumentTouch)
	);

	module.exports = HAS_TOUCH;


/***/ },
/* 152 */
/***/ function(module, exports) {

	var HIDDEN_PROPERTY_NAME = (function () {
		var value = undefined;
		var props = {
			hidden: 'hidden',
			mozHidden: 'mozHidden',
			msHidden: 'msHidden',
			webkitHidden: 'webkitHidden',
		};
		for (var p in props) {
			if (typeof document[p] !== 'undefined') {
				value = props[p];
				break;
			}
		}
		return value;
	})();

	module.exports = HIDDEN_PROPERTY_NAME;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IE_VERSION = (function () {
		var v = -1;
		if (/MSIE (\d+\.\d+);/.test(UA)) {
			v = parseInt(RegExp.$1, 10);
		} else if (/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(UA)) {
			v = parseInt(RegExp.$3, 10);
		}
		return v;
	})();

	module.exports = IE_VERSION;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_ANDROID_BROWSER = (function () {
		var matches = UA.match(/Android.*AppleWebKit\/([\d.]+)/);
		return !!matches && matches[1] < 537;
	})();

	module.exports = IS_ANDROID_BROWSER;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_IOS = __webpack_require__(134);

	var IS_CHROME_IOS = IS_IOS && /CriOS/.test(UA);

	module.exports = IS_CHROME_IOS;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_CHROME = /Chrome/.test(UA);

	module.exports = IS_CHROME;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var IE_VERSION = __webpack_require__(153);

	var IS_IE = IE_VERSION > -1;

	module.exports = IS_IE;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_IPAD = !!UA.match(/iPad/i);

	module.exports = IS_IPAD;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_LINUX = /Linux/.test(UA);

	module.exports = IS_LINUX;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);

	var IS_OPERA = /Opera/.test(UA);

	module.exports = IS_OPERA;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_IOS = __webpack_require__(134);

	var IS_OSX = !IS_IOS && /Mac OS/.test(UA);

	module.exports = IS_OSX;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var PIXEL_RATIO = __webpack_require__(163);

	var IS_RETINA = (PIXEL_RATIO > 1);

	module.exports = IS_RETINA;


/***/ },
/* 163 */
/***/ function(module, exports) {

	var PIXEL_RATIO = (window.devicePixelRatio ||
		(window.screen.deviceXDPI / window.screen.logicalXDPI) ||
		1);

	module.exports = PIXEL_RATIO;


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_IOS = __webpack_require__(134);

	var IS_SAFARI_IOS = IS_IOS && /AppleWebKit/.test(UA);

	module.exports = IS_SAFARI_IOS;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_ANDROID_BROWSER = __webpack_require__(154);
	var IS_CHROME = __webpack_require__(156);

	var IS_SAFARI = !IS_ANDROID_BROWSER && !IS_CHROME && /Safari/.test(UA);

	module.exports = IS_SAFARI;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var UA = __webpack_require__(129);
	var IS_WINDOWS_PHONE = __webpack_require__(131);

	var IS_WINDOWS = !IS_WINDOWS_PHONE && /Windows/.test(UA);

	module.exports = IS_WINDOWS;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var HAS_WEBGL = __webpack_require__(148);

	var MAX_CUBE_MAP_TEXTURE_SIZE = (function () {
		if (!HAS_WEBGL) {
			return undefined;
		}

		try {
			var canvas = document.createElement('canvas');
			var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			return gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
		} catch (e) {
			return undefined;
		}
	})();

	module.exports = MAX_CUBE_MAP_TEXTURE_SIZE;


/***/ },
/* 168 */
/***/ function(module, exports) {

	var TRANSITION_END_EVENT_NAME = (function () {
		var el = document.createElement('fakeelement');
		var transitions = {
			transition: 'transitionend',
			OTransition: 'oTransitionEnd',
			MozTransition: 'transitionend',
			WebkitTransition: 'webkitTransitionEnd',
		};
		var transitionend;
		for (var t in transitions) {
			if (el.style[t] !== undefined) {
				transitionend = transitions[t];
				break;
			}
		}
		return transitionend;
	})();

	module.exports = TRANSITION_END_EVENT_NAME;


/***/ },
/* 169 */
/***/ function(module, exports) {

	var VISIBILITY_CHANGE_EVENT_NAME = (function () {
		var value = undefined;
		var props = {
			hidden: 'visibilitychange',
			mozHidden: 'mozvisibilitychange',
			msHidden: 'msvisibilitychange',
			webkitHidden: 'webkitvisibilitychange',
		};
		for (var p in props) {
			if (typeof document[p] !== 'undefined') {
				value = props[p];
				break;
			}
		}
		return value;
	})();

	module.exports = VISIBILITY_CHANGE_EVENT_NAME;


/***/ }
/******/ ]);