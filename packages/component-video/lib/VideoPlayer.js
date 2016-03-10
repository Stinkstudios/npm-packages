'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // VideoPlayer.js

var _YoutubePlayer = require('./players/YoutubePlayer');

var _YoutubePlayer2 = _interopRequireDefault(_YoutubePlayer);

var _BasicPlayer = require('./players/BasicPlayer');

var _BasicPlayer2 = _interopRequireDefault(_BasicPlayer);

var _InlinePlayer = require('./players/InlinePlayer');

var _InlinePlayer2 = _interopRequireDefault(_InlinePlayer);

var _detector = require('@stinkdigital/detector');

var _detector2 = _interopRequireDefault(_detector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoPlayer = function () {
	function VideoPlayer() {
		var mOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, VideoPlayer);

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

	_createClass(VideoPlayer, [{
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