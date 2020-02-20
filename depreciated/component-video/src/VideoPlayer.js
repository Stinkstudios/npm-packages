import YoutubePlayer from './players/YoutubePlayer';
import BasicPlayer from './players/BasicPlayer';
import InlinePlayer from './players/InlinePlayer';

export default class VideoPlayer {
	constructor(options = {}) {
		const { forceInline = false } = options;

		if (options.youtubeId) {
			this._player = new YoutubePlayer(options);
			this._player._addToDom();
			return this._player;
		}
		if (forceInline) {
			if (options.forceNativePlayer) {
				return new BasicPlayer(options);
			}
			return new InlinePlayer(options);
		}
		return new BasicPlayer(options);
	}
}
