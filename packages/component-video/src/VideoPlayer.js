import YoutubePlayer from './players/YoutubePlayer';
import BasicPlayer from './players/BasicPlayer';
import InlinePlayer from './players/InlinePlayer';

const Detector = process.browser ? require('@stinkdigital/detector') : null;

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

		if (this._player._options.pageVisibility) this._handlePageVisibility();
		if (this._player._options.resize) this._handlePageResize();
		return this._player;
	}

	_handlePageVisibility(remove = false) {
		if (!Detector) return;
		this._hidden = Detector.HIDDEN_PROPERTY_NAME;
		const _pageVisibility = Detector.VISIBILITY_CHANGE_EVENT_NAME;
		if (this._hidden === undefined && _pageVisibility === undefined) return;

		if (remove) {
			document.removeEventListener(_pageVisibility, this._onPageVisibilityChange, false);
			return;
		}
		document.addEventListener(_pageVisibility, this._onPageVisibilityChange, false);
	}

	_onPageVisibilityChange = () => {
		if (!document) return;
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
		if (this._player._options.pageVisibility) this._handlePageVisibility(true);
		if (this._player._options.resize) this._handlePageResize(true);
		this._player.destroy();
	}

}
