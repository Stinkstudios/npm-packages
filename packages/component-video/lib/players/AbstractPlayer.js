'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// AbstractPlayer.js

var AbstractPlayer = function () {
	function AbstractPlayer() {
		var mOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, AbstractPlayer);

		_initialiseProps.call(this);

		this._options = mOptions;

		var _options = this._options,
		    _options$autoplay = _options.autoplay,
		    autoplay = _options$autoplay === undefined ? false : _options$autoplay,
		    _options$loop = _options.loop,
		    loop = _options$loop === undefined ? false : _options$loop,
		    _options$resize = _options.resize,
		    resize = _options$resize === undefined ? false : _options$resize,
		    _options$width = _options.width,
		    width = _options$width === undefined ? '100%' : _options$width,
		    _options$height = _options.height,
		    height = _options$height === undefined ? '100%' : _options$height,
		    _options$pageVisibili = _options.pageVisibility,
		    pageVisibility = _options$pageVisibili === undefined ? false : _options$pageVisibili,
		    _options$error = _options.error,
		    error = _options$error === undefined ? true : _options$error;


		this._options.resize = this._options.youtubeId ? false : resize;
		this._options.pageVisibility = pageVisibility;
		this._options.width = width;
		this._options.height = height;

		this.autoplay = autoplay;
		this.looping = loop;
		this.playing = false;
		this.paused = true;
		this.autoPaused = false;
		this.videoReady = false;
		this.error = error;

		this._callbackMetadata = this._options.onMetadata;
		this._callbackCanPlay = this._options.onCanPlay;
		this._callbackEnd = this._options.onEnd;
		this._callbackError = this._options.onError;
		this._callbackPlay = this._options.onPlay;
		this._callbackPause = this._options.onPause;
		this._callbackProgress = this._options.onProgress;
		this._callbackTimeUpdate = this._options.onTimeUpdate;
		this._callbackVolumeChange = this._options.onVolumeChange;
	}

	AbstractPlayer.prototype.getPlayer = function getPlayer() {
		return this._player;
	};

	AbstractPlayer.prototype.play = function play() {
		if (!this._player) return;
		if (this._player.playing) return; // eslint-disable-line no-useless-return
	};

	AbstractPlayer.prototype.pause = function pause() {
		var autoPaused = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		if (!this._player) return;
		this.autoPaused = autoPaused;
		if (this._player.paused) return; // eslint-disable-line no-useless-return
	};

	AbstractPlayer.prototype.seek = function seek(time) {
		this.currentTime = time;
	};

	AbstractPlayer.prototype.setSize = function setSize(width, height) {
		this.width = width;
		this.height = height;
	};

	AbstractPlayer.prototype._addToDom = function _addToDom() {
		if (this._options.el) this._options.el.appendChild(this.el);
	};

	_createClass(AbstractPlayer, [{
		key: 'autoplay',
		set: function set(value) {
			this._autoplay = value;
		},
		get: function get() {
			return this._autoplay;
		}
	}, {
		key: 'videoReady',
		set: function set(value) {
			this._videoReady = value;
		},
		get: function get() {
			return this._videoReady;
		}
	}, {
		key: 'resize',
		set: function set(value) {
			this._resize = value;
		},
		get: function get() {
			return this._resize;
		}
	}, {
		key: 'looping',
		set: function set(value) {
			this._looping = value;
		},
		get: function get() {
			return this._looping;
		}
	}, {
		key: 'playing',
		set: function set(value) {
			this._playing = value;
		},
		get: function get() {
			return this._playing;
		}
	}, {
		key: 'paused',
		set: function set(value) {
			this._paused = value;
		},
		get: function get() {
			return this._paused;
		}
	}, {
		key: 'autoPaused',
		set: function set(value) {
			this._autoPaused = value;
		},
		get: function get() {
			return this._autoPaused;
		}
	}, {
		key: 'el',
		get: function get() {
			if (!this._player) {
				if (this.error) throw new Error('Error - no el to get');
			}
			return this._player;
		}
	}, {
		key: 'width',
		set: function set(value) {
			if (this.el) this.el.style.width = value;
		},
		get: function get() {
			return this.el ? this.el.videoWidth : null;
		}
	}, {
		key: 'height',
		set: function set(value) {
			if (this.el) this.el.style.height = value;
		},
		get: function get() {
			return this.el ? this.el.videoHeight : null;
		}
	}]);

	return AbstractPlayer;
}();

var _initialiseProps = function _initialiseProps() {
	var _this = this;

	this._onVideoMetadata = function () {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		if (!_this._options.resize) {
			_this.setSize(_this._options.width, _this._options.height);
		}
		_this._addToDom();
		if (_this._options.resize) _this._onVideoResize();
		if (_this._callbackMetadata) _this._callbackMetadata(e);
	};

	this._onVideoCanPlayThrough = function (e) {
		_this._player.removeEventListener('canplaythrough', _this._onVideoCanPlayThrough);
		_this.videoReady = true;
		if (_this.autoplay) _this.play();
		if (_this._callbackCanPlay) _this._callbackCanPlay(e);
	};

	this._onVideoEnd = function (e) {
		_this.playing = false;
		_this.paused = true;
		/* to loop a youtube video check if loop exist */
		if (!_this._player.loop && _this.looping) _this.play();
		if (_this._callbackEnd) _this._callbackEnd(e);
	};

	this._onVideoError = function (e) {
		if (_this._callbackError) _this._callbackError(e);
		if (_this.error) throw new Error('Error - component-video - ', e);
	};

	this._onVideoPlay = function (e) {
		_this.playing = true;
		_this.paused = false;
		_this.autoPaused = false;
		if (_this._callbackPlay) _this._callbackPlay(e);
	};

	this._onVideoPause = function (e) {
		_this.playing = false;
		_this.paused = true;
		if (_this._callbackPause) _this._callbackPause(e);
	};

	this._onVideoProgress = function (e) {
		if (_this._callbackProgress) _this._callbackProgress(e);
	};

	this._onVideoResize = function () {
		var el = _this.el;
		if (!el || !window) {
			if (_this.error) throw new Error('player isnt in dom. So cant resize');
		}
		var width = _this.width;
		var height = _this.height;
		var areaWidth = _this._options.el ? _this._options.el.offsetWidth : window.innerWidth;
		var areaHeight = _this._options.el ? _this._options.el.offsetHeight : window.innerHeight;
		var scale = Math.max(areaWidth / width, areaHeight / height);
		el.style.cssText = 'width:' + Math.ceil(width * scale) + 'px; height:' + Math.ceil(height * scale) + 'px; position:absolute; top:' + Math.ceil((areaHeight - height * scale) / 2) + 'px; left:' + Math.ceil((areaWidth - width * scale) / 2) + 'px;'; // eslint-disable-line max-len
	};

	this._onTimeUpdate = function (e) {
		if (_this._callbackTimeUpdate) _this._callbackTimeUpdate(e);
	};

	this._onVolumeChange = function (e) {
		if (_this._callbackVolumeChange) _this._callbackVolumeChange(e);
	};
};

exports.default = AbstractPlayer;
module.exports = exports['default'];