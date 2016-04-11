'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _YoutubePlayer = require('./players/YoutubePlayer');

var _YoutubePlayer2 = _interopRequireDefault(_YoutubePlayer);

var _BasicPlayer = require('./players/BasicPlayer');

var _BasicPlayer2 = _interopRequireDefault(_BasicPlayer);

var _InlinePlayer = require('./players/InlinePlayer');

var _InlinePlayer2 = _interopRequireDefault(_InlinePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Detector = process.browser ? require('@stinkdigital/detector') : null;

var VideoPlayer = function () {
	function VideoPlayer() {
		var _this = this;

		var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		_classCallCheck(this, VideoPlayer);

		this._onPageVisibilityChange = function () {
			if (!document) return;
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

		var _options$forceInline = options.forceInline;
		var forceInline = _options$forceInline === undefined ? false : _options$forceInline;


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

		if (this._player._options.pageVisibility) this._handlePageVisibility();
		if (this._player._options.resize) this._handlePageResize();
		return this._player;
	}

	_createClass(VideoPlayer, [{
		key: '_handlePageVisibility',
		value: function _handlePageVisibility() {
			var remove = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

			if (!Detector) return;
			this._hidden = Detector.HIDDEN_PROPERTY_NAME;
			var _pageVisibility = Detector.VISIBILITY_CHANGE_EVENT_NAME;
			if (this._hidden === undefined && _pageVisibility === undefined) return;

			if (remove) {
				document.removeEventListener(_pageVisibility, this._onPageVisibilityChange, false);
				return;
			}
			document.addEventListener(_pageVisibility, this._onPageVisibilityChange, false);
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
			if (this._player._options.pageVisibility) this._handlePageVisibility(true);
			if (this._player._options.resize) this._handlePageResize(true);
			this._player.destroy();
		}
	}]);

	return VideoPlayer;
}();

exports.default = VideoPlayer;
module.exports = exports['default'];