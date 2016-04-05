'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detector = require('@stinkdigital/detector');

var _YoutubePlayer = require('./players/YoutubePlayer');

var _YoutubePlayer2 = _interopRequireDefault(_YoutubePlayer);

var _BasicPlayer = require('./players/BasicPlayer');

var _BasicPlayer2 = _interopRequireDefault(_BasicPlayer);

var _InlinePlayer = require('./players/InlinePlayer');

var _InlinePlayer2 = _interopRequireDefault(_InlinePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoPlayer = function () {
	function VideoPlayer() {
		var _this = this;

		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, VideoPlayer);

		this._onPageVisiblityChange = function () {
			if (document[_this._hidden]) {
				/*
    	to catch if the user has already paused video via any controls
    	passing through the paused state to set autoPaused
     */
				if (!_this._player.paused) _this._player.pause(!_this._player.paused);
			} else {
				/*
    	if video auto paused by visibilitychange then auto play video
     */
				if (_this._player.autoPaused) _this._player.play();
			}
		};

		var forceInline = _detector.IS_IOS && _detector.IOS_VERSION >= 8;

		if (options.youtubeId) {
			this._player = new _YoutubePlayer2.default(options);
			this._player._addToDom();
		} else {
			if (forceInline) {
				if (options.forceNativePlayer) {
					this._player = new _BasicPlayer2.default(options);
				} else {
					this._player = new _InlinePlayer2.default(options);
				}
			} else {
				this._player = new _BasicPlayer2.default(options);
			}
		}

		this._handlePageVisiblity();
		if (this.resize) this._handlePageResize();
		return this._player;
	}

	_createClass(VideoPlayer, [{
		key: '_handlePageVisiblity',
		value: function _handlePageVisiblity() {
			var remove = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			this._hidden = _detector.HIDDEN_PROPERTY_NAME;
			this._pageVisiblity = _detector.VISIBILITY_CHANGE_EVENT_NAME;
			if (this._hidden === undefined && this._pageVisiblity === undefined) return;

			if (remove) {
				document.removeEventListener(this._pageVisiblity, this._onPageVisiblityChange, false);
				return;
			}
			document.addEventListener(this._pageVisiblity, this._onPageVisiblityChange, false);
		}
	}, {
		key: '_handlePageResize',
		value: function _handlePageResize() {
			var remove = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			if (!window) return;
			if (remove) {
				window.removeEventListener('resize', this._player._onVideoResize);
				return;
			}
			window.addEventListener('resize', this._player._onVideoResize);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this._handlePageVisiblity(true);
			if (this._options.resize) this._handlePageResize(true);
			this._player.destroy();
		}
	}]);

	return VideoPlayer;
}();

exports.default = VideoPlayer;
module.exports = exports['default'];