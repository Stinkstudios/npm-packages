'use strict';

exports.__esModule = true;

var _YoutubePlayer = require('./players/YoutubePlayer');

var _YoutubePlayer2 = _interopRequireDefault(_YoutubePlayer);

var _BasicPlayer = require('./players/BasicPlayer');

var _BasicPlayer2 = _interopRequireDefault(_BasicPlayer);

var _InlinePlayer = require('./players/InlinePlayer');

var _InlinePlayer2 = _interopRequireDefault(_InlinePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoPlayer = function VideoPlayer() {
	var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	_classCallCheck(this, VideoPlayer);

	var _options$forceInline = options.forceInline;
	var forceInline = _options$forceInline === undefined ? false : _options$forceInline;


	if (options.youtubeId) {
		this._player = new _YoutubePlayer2.default(options);
		this._player._addToDom();
	} else if (forceInline) {
		if (options.forceNativePlayer) {
			this._player = new _BasicPlayer2.default(options);
		} else {
			this._player = new _InlinePlayer2.default(options);
		}
	} else {
		this._player = new _BasicPlayer2.default(options);
	}
	return this._player;
};

exports.default = VideoPlayer;
module.exports = exports['default'];