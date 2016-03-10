"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// AbstractPlayer.js

var AbstractPlayer = function () {
	function AbstractPlayer() {
		var mOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, AbstractPlayer);

		this._looping = false;
		this._options = mOptions;

		this._init();
	}

	_createClass(AbstractPlayer, [{
		key: "_init",
		value: function _init() {
			this._endedBind = this._onVideoEnd.bind(this);
			this._errorBind = this._onVideoError.bind(this);
			this._playBind = this._onVideoPlay.bind(this);
			this._pauseBind = this._onVideoPause.bind(this);
			this._progressBind = this._onVideoProgress.bind(this);

			this._callbackEnd = this._options.onEnd;
			this._callbackError = this._options.onError;
			this._callbackPlay = this._options.onPlay;
			this._callbackPause = this._options.onPause;
			this._callbackProgress = this._options.onProgress;
		}
	}, {
		key: "_onVideoEnd",
		value: function _onVideoEnd(e) {
			if (this._callbackEnd) {
				this._callbackEnd(e);
			}
		}
	}, {
		key: "_onVideoError",
		value: function _onVideoError(e) {
			if (this._callbackError) {
				this._callbackError(e);
			}
		}
	}, {
		key: "_onVideoPlay",
		value: function _onVideoPlay(e) {
			if (this._callbackPlay) {
				this._callbackPlay(e);
			}
		}
	}, {
		key: "_onVideoPause",
		value: function _onVideoPause(e) {
			if (this._callbackPause) {
				this._callbackPause(e);
			}
		}
	}, {
		key: "_onVideoProgress",
		value: function _onVideoProgress(e) {
			if (this._callbackProgress) {
				this._callbackProgress(e);
			}
		}
	}, {
		key: "setLoop",
		value: function setLoop(value) {
			this._looping = value;
		}
	}, {
		key: "destroy",
		value: function destroy() {
			this._removeListeners();
		}
	}]);

	return AbstractPlayer;
}();

exports.default = AbstractPlayer;