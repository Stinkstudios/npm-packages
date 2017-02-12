function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import YoutubePlayer from './players/YoutubePlayer';
import BasicPlayer from './players/BasicPlayer';
import InlinePlayer from './players/InlinePlayer';

var VideoPlayer = function VideoPlayer() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	_classCallCheck(this, VideoPlayer);

	var _options$forceInline = options.forceInline,
	    forceInline = _options$forceInline === undefined ? false : _options$forceInline;


	if (options.youtubeId) {
		this._player = new YoutubePlayer(options);
		this._player._addToDom();
		return this._player;
	} else if (forceInline) {
		if (options.forceNativePlayer) {
			return new BasicPlayer(options);
		}
		return new InlinePlayer(options);
	}
	return new BasicPlayer(options);
};

export default VideoPlayer;