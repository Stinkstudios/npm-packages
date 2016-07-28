function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import YoutubePlayer from './players/YoutubePlayer';
import BasicPlayer from './players/BasicPlayer';
import InlinePlayer from './players/InlinePlayer';

var VideoPlayer = function VideoPlayer() {
	var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	_classCallCheck(this, VideoPlayer);

	var _options$forceInline = options.forceInline;
	var forceInline = _options$forceInline === undefined ? false : _options$forceInline;


	if (options.youtubeId) {
		this._player = new YoutubePlayer(options);
		this._player._addToDom();
	} else {
		if (forceInline) {
			if (options.forceNativePlayer) {
				this._player = new BasicPlayer(options);
			} else {
				this._player = new InlinePlayer(options);
			}
		} else {
			this._player = new BasicPlayer(options);
		}
	}
	return this._player;
};

export default VideoPlayer;