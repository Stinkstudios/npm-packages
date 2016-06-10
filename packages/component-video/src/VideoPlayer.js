import YoutubePlayer from './players/YoutubePlayer';
import BasicPlayer from './players/BasicPlayer';
import InlinePlayer from './players/InlinePlayer';

export default class VideoPlayer {

	constructor(options = {}) {
		const {
			forceInline = false,
		} = options;

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
	}

}
