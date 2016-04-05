'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _AbstractPlayer2 = require('./AbstractPlayer');

var _AbstractPlayer3 = _interopRequireDefault(_AbstractPlayer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicPlayer = function (_AbstractPlayer) {
	_inherits(BasicPlayer, _AbstractPlayer);

	function BasicPlayer() {
		var mOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, BasicPlayer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BasicPlayer).call(this, mOptions));

		if (!document || !window) {
			throw new Error('BasicPlayer no document or window to createElement video');
		}
		_this._player = document.createElement('video');

		var _this$_options = _this._options;
		var src = _this$_options.src;
		var _this$_options$loop = _this$_options.loop;
		var loop = _this$_options$loop === undefined ? false : _this$_options$loop;
		var _this$_options$contro = _this$_options.controls;
		var controls = _this$_options$contro === undefined ? true : _this$_options$contro;
		var _this$_options$volume = _this$_options.volume;
		var volume = _this$_options$volume === undefined ? 1 : _this$_options$volume;
		var _this$_options$preloa = _this$_options.preload;
		var preload = _this$_options$preloa === undefined ? 'auto' : _this$_options$preloa;
		var _this$_options$crossO = _this$_options.crossOrigin;
		var crossOrigin = _this$_options$crossO === undefined ? null : _this$_options$crossO;


		_this.loop = loop;
		_this.controls = controls;
		_this.volume = volume;
		_this.preload = preload;
		if (crossOrigin) _this.crossOrigin = crossOrigin;
		_this._player.autoplay = _this.autoplay;
		_this.src = src;
		return _this;
	}

	_createClass(BasicPlayer, [{
		key: 'play',
		value: function play() {
			_get(Object.getPrototypeOf(BasicPlayer.prototype), 'play', this).call(this);
			this._player.play();
		}
	}, {
		key: 'pause',
		value: function pause(autoPaused) {
			_get(Object.getPrototypeOf(BasicPlayer.prototype), 'pause', this).call(this, autoPaused);
			this._player.pause();
		}
	}, {
		key: 'seek',
		value: function seek(time) {
			if (!this.videoReady) return;
			this.currentTime = time;
		}
	}, {
		key: '_addListeners',
		value: function _addListeners() {
			this._removeListeners();

			this._player.addEventListener('loadedmetadata', this._onVideoMetadata);
			this._player.addEventListener('canplaythrough', this._onVideoCanPlayThrough);
			this._player.addEventListener('ended', this._onVideoEnd);
			this._player.addEventListener('error', this._onVideoError);
			this._player.addEventListener('play', this._onVideoPlay);
			this._player.addEventListener('pause', this._onVideoPause);
			this._player.addEventListener('progress', this._onVideoProgress);
			this._player.addEventListener('timeupdate', this._onTimeUpdate);
		}
	}, {
		key: '_removeListeners',
		value: function _removeListeners() {
			this._player.removeEventListener('loadedmetadata', this._onVideoMetadata);
			this._player.removeEventListener('canplaythrough', this._onVideoCanPlayThrough);
			this._player.removeEventListener('ended', this._onVideoEnd);
			this._player.removeEventListener('error', this._onVideoError);
			this._player.removeEventListener('play', this._onVideoPlay);
			this._player.removeEventListener('pause', this._onVideoPause);
			this._player.removeEventListener('progress', this._onVideoProgress);
			this._player.removeEventListener('timeupdate', this._onTimeUpdate);
		}
	}, {
		key: '_replace',
		value: function _replace(newsrc) {
			if (!this._player) return;
			if (this.src && this.src !== newsrc) {
				this._removeListeners();
				this._player.pause();
			}
		}
		//	Destroy

	}, {
		key: 'destroy',
		value: function destroy() {
			if (!this._player) {
				return;
			}
			this._removeListeners();

			this._player.pause();
			try {
				this._player.parentNode.removeChild(this._player);
			} catch (e) {
				throw new Error('Error remove player element : ', e);
			}
			this._player = null;
		}
	}, {
		key: 'src',
		set: function set(value) {
			this._replace(value);
			this._player.src = value;
			this._addListeners();
		},
		get: function get() {
			return this._player.src;
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
		key: 'duration',
		get: function get() {
			return this._player.duration;
		}
	}]);

	return BasicPlayer;
}(_AbstractPlayer3.default);

exports.default = BasicPlayer;
module.exports = exports['default'];