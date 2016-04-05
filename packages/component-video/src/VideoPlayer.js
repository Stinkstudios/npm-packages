import {
	IS_IOS,
	IOS_VERSION,
	VISIBILITY_CHANGE_EVENT_NAME,
	HIDDEN_PROPERTY_NAME,
} from '@stinkdigital/detector';
import YoutubePlayer from './players/YoutubePlayer';
import BasicPlayer from './players/BasicPlayer';
import InlinePlayer from './players/InlinePlayer';

export default class VideoPlayer {

	constructor(options = {}) {
		const forceInline = (IS_IOS && IOS_VERSION >= 8);

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

		this._handlePageVisiblity();
		if (this.resize) this._handlePageResize();
		return this._player;
	}

	_handlePageVisiblity(remove = false) {
		this._hidden = HIDDEN_PROPERTY_NAME;
		this._pageVisiblity = VISIBILITY_CHANGE_EVENT_NAME;
		if (this._hidden === undefined && this._pageVisiblity === undefined) return;

		if (remove) {
			document.removeEventListener(this._pageVisiblity, this._onPageVisiblityChange, false);
			return;
		}
		document.addEventListener(this._pageVisiblity, this._onPageVisiblityChange, false);
	}

	_onPageVisiblityChange = () => {
		if (document[this._hidden]) {
			/*
				to catch if the user has already paused video via any controls
				passing through the paused state to set autoPaused
			 */
			if (!this._player.paused) this._player.pause(!this._player.paused);
		} else {
			/*
				if video auto paused by visibilitychange then auto play video
			 */
			if (this._player.autoPaused) this._player.play();
		}
	}

	_handlePageResize(remove = false) {
		if (!window) return;
		if (remove) {
			window.removeEventListener('resize', this._player._onVideoResize);
			return;
		}
		window.addEventListener('resize', this._player._onVideoResize);
	}

	destroy() {
		this._handlePageVisiblity(true);
		if (this._options.resize) this._handlePageResize(true);
		this._player.destroy();
	}

}
