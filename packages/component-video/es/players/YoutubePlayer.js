var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import loadScript from 'load-script';
import AbstractPlayer from './AbstractPlayer';

var SDK_URL = '//www.youtube.com/iframe_api';
var SDK_GLOBAL = 'YT';
var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';

var DEFAULT_PLAYER_VARS = {
	playsinline: 1,
	showinfo: 0,
	rel: 0,
	iv_load_policy: 3,
	modestbranding: 1
};

var YoutubePlayer = function (_AbstractPlayer) {
	_inherits(YoutubePlayer, _AbstractPlayer);

	function YoutubePlayer() {
		var mOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, YoutubePlayer);

		var _this = _possibleConstructorReturn(this, _AbstractPlayer.call(this, mOptions));

		_this._onStateChange = function (e) {
			switch (e.data) {
				case -1:
					/* unstarted */
					break;
				case 0:
					/* ended */
					_this._onVideoEnd(e.target);
					break;
				case 1:
					_this._onVideoPlay(e.target);
					break;
				case 2:
					_this._onVideoPause(e.target);
					break;
				case 3:
					/* buffering */
					break;
				case 5:
					/* video cued */
					break;
			}
		};

		if (!document || !window) {
			throw new Error('YoutubePlayer no document or window to createElement video');
		}
		_this._el = document.createElement('div');
		_this._el.setAttribute('id', 'youtube-player');
		_this._loadPlayer();
		return _this;
	}

	YoutubePlayer.prototype.setSize = function setSize(width, height) {
		this._player.setSize(width, height);
	};

	YoutubePlayer.prototype.play = function play() {
		_AbstractPlayer.prototype.play.call(this);
		this._player.playVideo();
	};

	YoutubePlayer.prototype.pause = function pause(autoPaused) {
		_AbstractPlayer.prototype.pause.call(this, autoPaused);
		this._player.pauseVideo();
	};

	YoutubePlayer.prototype.seek = function seek(time) {
		if (!this.videoReady || !this._player.seekTo) return;
		this._player.seekTo(time);
	};

	YoutubePlayer.prototype._getSDK = function _getSDK() {
		if (window[SDK_GLOBAL]) {
			return Promise.resolve(window[SDK_GLOBAL]);
		}

		return new Promise(function (resolve, reject) {
			var previous = window[SDK_GLOBAL_READY];
			window[SDK_GLOBAL_READY] = function () {
				if (previous) previous();
				resolve(window[SDK_GLOBAL]);
			};
			loadScript(SDK_URL, function (err) {
				if (err) {
					reject(err);
				}
			});
		});
	};

	YoutubePlayer.prototype._loadPlayer = function _loadPlayer() {
		var _this2 = this;

		var _options = this._options;
		var _options$controls = _options.controls;
		var controls = _options$controls === undefined ? true : _options$controls;
		var _options$volume = _options.volume;
		var volume = _options$volume === undefined ? 1 : _options$volume;

		this._getSDK().then(function (YT) {
			_this2._player = new YT.Player(_this2._el, {
				width: _this2._options.width,
				height: _this2._options.height,
				videoId: _this2._options.youtubeId,
				playerVars: _extends({}, DEFAULT_PLAYER_VARS, {
					controls: controls,
					origin: window ? window.location.origin : '',
					autoplay: _this2.autoplay
				}),
				events: {
					onReady: function onReady(e) {
						_this2.videoReady = true;
						_this2.volume = volume;
						if (_this2._callbackCanPlay) _this2._callbackCanPlay(e);
					},
					onStateChange: _this2._onStateChange,
					onError: _this2._onVideoError
				}
			});
		}).catch(function (e) {
			throw new Error('Error - YouTubePlayer - loadPlayer ', e);
		});
	};

	YoutubePlayer.prototype.destroy = function destroy() {
		if (!this._player) {
			return;
		}
		this.pause();
		this._player.destroy();
		this._player = null;
	};

	_createClass(YoutubePlayer, [{
		key: 'width',
		get: function get() {
			return this.el.getBoundingClientRect().width;
		}
	}, {
		key: 'height',
		get: function get() {
			return this.el.getBoundingClientRect().height;
		}
	}, {
		key: 'el',
		get: function get() {
			if (this._player && this._player.getIframe) return this._player.getIframe();
			return this._el;
		}
	}, {
		key: 'volume',
		set: function set(value) {
			this._player.setVolume(value * 100);
		},
		get: function get() {
			return this._player.getVolume() / 100;
		}
	}, {
		key: 'currentTime',
		set: function set(time) {
			this.seek(time);
		},
		get: function get() {
			return this._player.getCurrentTime();
		}
	}, {
		key: 'duration',
		get: function get() {
			return this._player.getDuration();
		}
	}]);

	return YoutubePlayer;
}(AbstractPlayer);

export default YoutubePlayer;