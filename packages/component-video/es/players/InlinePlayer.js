var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// InlinePlayer.js

import BasicPlayer from './BasicPlayer';

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

		_this._onAudioPlay = function () {
			_this.playing = true;
			_this.paused = false;
			_this.autoPaused = false;
			if (!_this._animateFrame) _this._render();
		};

		_this._onAudioPause = function () {
			_this.playing = false;
			_this.paused = true;
			_this._cancelAnimateFrame();
		};

		_this._onAudioEnded = function () {
			_this._cancelAnimateFrame();
		};

		_this._render = function () {
			if (_this.playing) {
				var videoFrame = _this.framerate * ((performance.now() - _this.startOffset) / 1000);

				if (_this.hasSound) {
					videoFrame = 0 | _this.framerate * _this._sound.currentTime;
				}

				if (videoFrame !== _this.currentFrame || videoFrame === 0) {
					_this.currentFrame = videoFrame;
					_this.currentTime = (videoFrame / _this.framerate).toFixed(6);
				}

				if (_this.currentTime >= _this._player.duration && !_this.hasSound) {
					_this.startOffset = performance.now();
				}
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
		_this.startOffset = 0;
		_this.hasSound = audioSrc !== undefined;
		if (_this.hasSound) {
			_this.loadHAudio(audioSrc, loop, volume);
		} else {
			_this._onAudioPlay();
			_this._onAudioReady();
		}
		_this._player.load();
		return _this;
	}

	InlinePlayer.prototype.loadHAudio = function loadHAudio(src, loop, volume) {
		this._sound = document.createElement('audio');
		document.body.appendChild(this._sound);
		window._sound = this._sound;
		this._sound.src = src;
		this._sound.loop = loop;
		this._sound.volume = volume;
		this._addAudioListeners();
		this._sound.load();
	};

	InlinePlayer.prototype.play = function play() {
		if (!this._player) return;
		if (this._player.playing) return;
	};

	InlinePlayer.prototype.pause = function pause() {
		var autoPaused = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

		if (!this._player) return;
		this.autoPaused = autoPaused;
		if (this._player.paused) return;
	};

	InlinePlayer.prototype._addAudioListeners = function _addAudioListeners() {
		this._sound.addEventListener('canplaythrough', this._onAudioReady);
		this._sound.addEventListener('play', this._onAudioPlay);
		this._sound.addEventListener('pause', this._onAudioPause);
		this._sound.addEventListener('ended', this._onAudioEnded);
	};

	InlinePlayer.prototype._removeAudioListeners = function _removeAudioListeners() {
		this._sound.removeEventListener('canplaythrough', this._onAudioReady);
		this._sound.removeEventListener('play', this._onAudioPlay);
		this._sound.removeEventListener('pause', this._onAudioPause);
		this._sound.removeEventListener('ended', this._onAudioEnded);
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
		this.sound.pause();
		try {
			this._sound.parentNode.removeChild(this._sound);
		} catch (e) {
			throw new Error('Error remove inline player audio elment ', e);
		}
		this._sound = null;
	};

	_createClass(InlinePlayer, [{
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
}(BasicPlayer);

export default InlinePlayer;