'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AbstractPlayer2 = require('./AbstractPlayer');

var _AbstractPlayer3 = _interopRequireDefault(_AbstractPlayer2);

var _BasicPlayer = require('./BasicPlayer');

var _BasicPlayer2 = _interopRequireDefault(_BasicPlayer);

var _sono = require('@stinkdigital/sono');

var _sono2 = _interopRequireDefault(_sono);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // InlinePlayer.js

var InlinePlayer = function (_AbstractPlayer) {
	_inherits(InlinePlayer, _AbstractPlayer);

	function InlinePlayer(mSrc, mContainer) {
		var mOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		_classCallCheck(this, InlinePlayer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InlinePlayer).call(this, mOptions));

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

	_createClass(InlinePlayer, [{
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
}(_AbstractPlayer3.default);

exports.default = InlinePlayer;