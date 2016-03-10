'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loadScript = require('load-script');

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
		_classCallCheck(this, YoutubePlayer);

		this._container = mContainer;
		this._el = document.createElement('div');
		this._el.setAttribute('id', 'youtube-player');
		this._container.appendChild(this._el);
		this._isReady = false;
		this._loadingSDK = false;
		this._loadOnReady = '';
		this.load(mYoutubeID);
	}

	_createClass(YoutubePlayer, [{
		key: '_getSDK',
		value: function _getSDK() {
			if (window[SDK_GLOBAL]) {
				return Promise.resolve(window[SDK_GLOBAL]);
			}

			return new Promise(function (resolve, reject) {
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
					playerVars: _extends({}, DEFAULT_PLAYER_VARS, {
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