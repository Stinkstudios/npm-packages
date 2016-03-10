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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // BasicPlayer.js


var BasicPlayer = function (_AbstractPlayer) {
	_inherits(BasicPlayer, _AbstractPlayer);

	function BasicPlayer(mSrc, mContainer) {
		var mOptions = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

		_classCallCheck(this, BasicPlayer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BasicPlayer).call(this, mOptions));

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

	_createClass(BasicPlayer, [{
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
			_get(Object.getPrototypeOf(BasicPlayer.prototype), 'setLoop', this).call(this, value);
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

			_get(Object.getPrototypeOf(BasicPlayer.prototype), 'destroy', this).call(this);

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
}(_AbstractPlayer3.default);

exports.default = BasicPlayer;