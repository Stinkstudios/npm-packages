'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BasicPlayer2 = require('./BasicPlayer');

var _BasicPlayer3 = _interopRequireDefault(_BasicPlayer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // InlinePlayer.js

var InlinePlayer = function (_BasicPlayer) {
	_inherits(InlinePlayer, _BasicPlayer);

	function InlinePlayer() {
		var mOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, InlinePlayer);

		var _this = _possibleConstructorReturn(this, _BasicPlayer.call(this, mOptions));

		_this._onAudioReady = function () {
			_this.audioReady = true;
			if (_this.autoplay) _this.play();
		};

		_this._onAudioPlay = function (e) {
			_this.playing = true;
			_this.paused = false;
			_this.autoPaused = false;
			_this._onVideoPlay(e);
			if (!_this._animateFrame) _this._render();
		};

		_this._onAudioPause = function (e) {
			_this.playing = false;
			_this.paused = true;
			_this._onVideoPause(e);
			_this._cancelAnimateFrame();
		};

		_this._onAudioEnded = function () {
			_this._onVideoEnd(null);
			_this._cancelAnimateFrame();
		};

		_this._onAudioError = function (e) {
			_this._onVideoError(e);
		};

		_this._render = function () {
			var videoFrame = 0 | _this.framerate * _this._sound.currentTime;
			if (videoFrame !== _this.currentFrame || videoFrame === 0) {
				_this.currentFrame = videoFrame;
				_this.currentTime = (videoFrame / _this.framerate).toFixed(6);
			}
			_this._animateFrame = requestAnimationFrame(_this._render);
		};

		var _this$_options = _this._options;
		var audioSrc = _this$_options.audioSrc;
		var _this$_options$loop = _this$_options.loop;
		var loop = _this$_options$loop === undefined ? false : _this$_options$loop;
		var _this$_options$volume = _this$_options.volume;
		var volume = _this$_options$volume === undefined ? 1 : _this$_options$volume;


		_this.framerate = 24;
		_this.loadHAudio(audioSrc, loop, volume);
		_this._player.load();
		return _this;
	}

	InlinePlayer.prototype.loadHAudio = function loadHAudio(src, loop, volume) {
		this._sound = document.createElement('audio');
		document.body.appendChild(this._sound);
		this._sound.src = src;
		this._sound.loop = loop;
		this._sound.volume = volume;
		this._addAudioListeners();
		this._sound.load();
	};

	InlinePlayer.prototype.play = function play() {
		if (!this._sound) return;
		if (!this._sound.paused) return;
		this._sound.play();
	};

	InlinePlayer.prototype.pause = function pause() {
		var autoPaused = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

		if (!this._sound) return;
		if (this._sound.paused) return;
		this.autoPaused = autoPaused;
		this._sound.pause();
	};

	InlinePlayer.prototype.seek = function seek(time) {
		if (!this.videoReady || !this._sound) return;
		this._sound.currentTime = time;
	};

	InlinePlayer.prototype._addAudioListeners = function _addAudioListeners() {
		this._sound.addEventListener('canplaythrough', this._onAudioReady);
		this._sound.addEventListener('play', this._onAudioPlay);
		this._sound.addEventListener('pause', this._onAudioPause);
		this._sound.addEventListener('ended', this._onAudioEnded);
		this._sound.addEventListener('error', this._onAudioError);
	};

	InlinePlayer.prototype._removeAudioListeners = function _removeAudioListeners() {
		this._sound.removeEventListener('canplaythrough', this._onAudioReady);
		this._sound.removeEventListener('play', this._onAudioPlay);
		this._sound.removeEventListener('pause', this._onAudioPause);
		this._sound.removeEventListener('ended', this._onAudioEnded);
		this._sound.removeEventListener('error', this._onAudioError);
	};

	InlinePlayer.prototype._replace = function _replace(newsrc) {
		if (!this._player) return;
		if (this.src && this.src !== newsrc) {
			this._removeListeners();
			this._player.pause();
			this._sound.pause();
		}
	};

	InlinePlayer.prototype._cancelAnimateFrame = function _cancelAnimateFrame() {
		if (this._animateFrame) {
			cancelAnimationFrame(this._animateFrame);
			this._animateFrame = null;
		}
	};

	InlinePlayer.prototype.destroy = function destroy() {
		_BasicPlayer.prototype.destroy.call(this);
		this._cancelAnimateFrame();
		if (!this._sound) return;
		this._removeAudioListeners();
		this._sound.pause();
		this._sound.src = '';
		try {
			if (this._sound.parentNode && this.isDescendant(this._sound.parentNode, this._sound)) {
				this._sound.parentNode.removeChild(this._sound);
			}
		} catch (e) {
			if (this.error) throw new Error('Error remove inline player audio elment ', e);
		}
		this._sound = null;
	};

	_createClass(InlinePlayer, [{
		key: 'audioSrc',
		set: function set(value) {
			this._sound.src = value;
		}
	}, {
		key: 'audioReady',
		set: function set(value) {
			this._audioReady = value;
		},
		get: function get() {
			return this._audioReady;
		}
	}, {
		key: 'framerate',
		set: function set(value) {
			this._framerate = value;
		},
		get: function get() {
			return this._framerate;
		}
	}, {
		key: 'currentFrame',
		set: function set(value) {
			this._currentFrame = value;
		},
		get: function get() {
			return this._currentFrame;
		}
	}]);

	return InlinePlayer;
}(_BasicPlayer3.default);

exports.default = InlinePlayer;
module.exports = exports['default'];