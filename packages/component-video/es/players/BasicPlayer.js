var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// BasicPlayer
import AbstractPlayer from './AbstractPlayer';
import VISIBILITY_CHANGE_EVENT_NAME from '../utils/visibility-change-event';
import HIDDEN_PROPERTY_NAME from '../utils/hidden-property-name';
import { clamp } from '../utils/math';

var BasicPlayer = function (_AbstractPlayer) {
	_inherits(BasicPlayer, _AbstractPlayer);

	function BasicPlayer() {
		var mOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, BasicPlayer);

		var _this = _possibleConstructorReturn(this, _AbstractPlayer.call(this, mOptions));

		_this._onPageVisibilityChange = function () {
			if (typeof document === 'undefined') return;
			if (document[_this._hidden]) {
				/*
    	to catch if the user has already paused video via any controls
    	passing through the paused state to set autoPaused
     */
				if (!_this.paused) _this.pause(!_this.paused);
			} else if (_this.autoPaused) {
				/*
    	if video auto paused by visibilitychange then auto play video
     */
				_this.play();
			}
		};

		if (!document || !window) {
			throw new Error('BasicPlayer no document or window to createElement video');
		}
		_this._player = document.createElement('video');

		_this._player.setAttribute('playsinline', 'playsinline');

		var _this$_options = _this._options,
		    src = _this$_options.src,
		    poster = _this$_options.poster,
		    _this$_options$loop = _this$_options.loop,
		    loop = _this$_options$loop === undefined ? false : _this$_options$loop,
		    _this$_options$contro = _this$_options.controls,
		    controls = _this$_options$contro === undefined ? true : _this$_options$contro,
		    _this$_options$volume = _this$_options.volume,
		    volume = _this$_options$volume === undefined ? 1 : _this$_options$volume,
		    _this$_options$preloa = _this$_options.preload,
		    preload = _this$_options$preloa === undefined ? 'auto' : _this$_options$preloa,
		    _this$_options$crossO = _this$_options.crossOrigin,
		    crossOrigin = _this$_options$crossO === undefined ? null : _this$_options$crossO,
		    _this$_options$muted = _this$_options.muted,
		    muted = _this$_options$muted === undefined ? false : _this$_options$muted,
		    _this$_options$playsi = _this$_options.playsinline,
		    playsinline = _this$_options$playsi === undefined ? true : _this$_options$playsi;


		_this.muted = muted;
		_this.playsinline = playsinline;
		_this.loop = loop;
		_this.controls = controls;
		_this.volume = volume;
		_this.preload = preload;
		if (crossOrigin) _this.crossOrigin = crossOrigin;
		_this._player.autoplay = _this.autoplay;
		if (poster !== 'undefined' && typeof poster === 'string' && poster.length > 0) _this.poster = poster;
		_this.src = src;
		return _this;
	}

	BasicPlayer.prototype.play = function play() {
		_AbstractPlayer.prototype.play.call(this);
		this._player.play();
	};

	BasicPlayer.prototype.pause = function pause(autoPaused) {
		_AbstractPlayer.prototype.pause.call(this, autoPaused);
		this._player.pause();
	};

	BasicPlayer.prototype.seek = function seek(time) {
		if (!this.videoReady) return;
		this.currentTime = time;
	};

	BasicPlayer.prototype.fade = function fade(volume, duration, fn) {
		var _this2 = this;

		var t0 = 0;
		var v0 = this.volume;

		var ramp = function ramp(t) {
			// Duration is in seconds, t in milliseconds
			var d = duration * 1000;
			// Init time reference
			if (t0 === 0) t0 = t;
			// End of fading
			if (t - t0 > d) {
				// Make sure the correct volume is set
				_this2.volume = clamp(volume, 0, 1);
				cancelAnimationFrame(_this2.fadeAnimId);
				if (fn) fn();
				return;
			}
			// Fading param
			var x = (t - t0) / d;
			// Volume lerp
			var v = (1 - x) * v0 + x * volume;
			_this2.volume = clamp(v, 0, 1);
			_this2.fadeAnimId = requestAnimationFrame(ramp);
		};

		if (this.fadeAnimId) cancelAnimationFrame(this.fadeAnimId);
		this.fadeAnimId = requestAnimationFrame(ramp);
	};

	BasicPlayer.prototype._addListeners = function _addListeners() {
		this._removeListeners();
		if (this._options.pageVisibility) this._handlePageVisibility();
		if (this._options.resize) this._handlePageResize();
		this._player.addEventListener('loadedmetadata', this._onVideoMetadata);
		this._player.addEventListener('canplaythrough', this._onVideoCanPlayThrough);
		this._player.addEventListener('ended', this._onVideoEnd);
		this._player.addEventListener('error', this._onVideoError);
		this._player.addEventListener('play', this._onVideoPlay);
		this._player.addEventListener('pause', this._onVideoPause);
		this._player.addEventListener('progress', this._onVideoProgress);
		this._player.addEventListener('timeupdate', this._onTimeUpdate);
	};

	BasicPlayer.prototype._removeListeners = function _removeListeners() {
		if (this._options.pageVisibility) this._handlePageVisibility(true);
		if (this._options.resize) this._handlePageResize(true);
		this._player.removeEventListener('loadedmetadata', this._onVideoMetadata);
		this._player.removeEventListener('canplaythrough', this._onVideoCanPlayThrough);
		this._player.removeEventListener('ended', this._onVideoEnd);
		this._player.removeEventListener('error', this._onVideoError);
		this._player.removeEventListener('play', this._onVideoPlay);
		this._player.removeEventListener('pause', this._onVideoPause);
		this._player.removeEventListener('progress', this._onVideoProgress);
		this._player.removeEventListener('timeupdate', this._onTimeUpdate);
	};

	BasicPlayer.prototype._replace = function _replace(newsrc) {
		if (!this._player) return;
		if (this.src && this.src !== newsrc) {
			this._removeListeners();
			this._player.pause();
		}
	};

	BasicPlayer.prototype._handlePageVisibility = function _handlePageVisibility() {
		var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		if (typeof document === 'undefined') return;
		this._hidden = HIDDEN_PROPERTY_NAME;
		var _pageVisibility = VISIBILITY_CHANGE_EVENT_NAME;
		if (this._hidden === undefined && _pageVisibility === undefined) return;

		if (remove) {
			document.removeEventListener(_pageVisibility, this._onPageVisibilityChange, false);
			return;
		}
		document.addEventListener(_pageVisibility, this._onPageVisibilityChange, false);
	};

	BasicPlayer.prototype._handlePageResize = function _handlePageResize() {
		var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		if (typeof window === 'undefined') return;
		if (remove) {
			window.removeEventListener('resize', this._onVideoResize);
			return;
		}
		window.addEventListener('resize', this._onVideoResize);
	};

	//	Destroy

	BasicPlayer.prototype.destroy = function destroy() {
		if (!this._player) {
			return;
		}
		this._removeListeners();

		this._player.pause();
		this._player.src = '';
		try {
			if (this._player.parentNode && this.isDescendant(this._player.parentNode, this._player)) {
				this._player.parentNode.removeChild(this._player);
			}
		} catch (e) {
			if (this.error) throw new Error('Error remove player element : ', e);
		}
		this._player = null;
	};

	BasicPlayer.prototype.isDescendant = function isDescendant(parent, child) {
		// eslint-disable-line class-methods-use-this
		var node = child.parentNode;
		while (node !== null) {
			if (node === parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	};

	_createClass(BasicPlayer, [{
		key: 'src',
		set: function set(value) {
			this._replace(value);
			this._player.src = value;
			if (!value) return;
			this._addListeners();
		},
		get: function get() {
			return this._player.src;
		}
	}, {
		key: 'playsinline',
		set: function set(value) {
			if (value) {
				this._player.setAttribute('playsinline', '');
			}
		}
	}, {
		key: 'volume',
		set: function set(value) {
			this._player.volume = value;
		},
		get: function get() {
			return this._player.volume;
		}
	}, {
		key: 'poster',
		set: function set(value) {
			this._player.poster = value;
		}
	}, {
		key: 'loop',
		set: function set(value) {
			this.looping = value;
			this._player.loop = value;
		}
	}, {
		key: 'controls',
		set: function set(value) {
			this._player.controls = value;
		}
	}, {
		key: 'preload',
		set: function set(value) {
			this._player.preload = value;
		}
	}, {
		key: 'crossOrigin',
		set: function set(value) {
			this._player.crossOrigin = value;
		}
	}, {
		key: 'currentTime',
		set: function set(time) {
			/* TODO add check for time format */
			this._player.currentTime = time;
		},
		get: function get() {
			return this._player.currentTime;
		}
	}, {
		key: 'muted',
		set: function set(muted) {
			if (muted) {
				this._player.setAttribute('muted', '');
			} else {
				this._player.removeAttribute('muted', '');
			}
		}
	}, {
		key: 'duration',
		get: function get() {
			return this._player.duration;
		}
	}]);

	return BasicPlayer;
}(AbstractPlayer);

export default BasicPlayer;