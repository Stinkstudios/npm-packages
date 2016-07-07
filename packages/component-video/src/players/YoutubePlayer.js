import loadScript from 'load-script';
import AbstractPlayer from './AbstractPlayer';

const SDK_URL = '//www.youtube.com/iframe_api';
const SDK_GLOBAL = 'YT';
const SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';

const DEFAULT_PLAYER_VARS = {
	playsinline: 1,
	showinfo: 0,
	rel: 0,
	iv_load_policy: 3,
	modestbranding: 1,
};

export default class YoutubePlayer extends AbstractPlayer {
	constructor(mOptions = {}) {
		super(mOptions);
		if (!document || !window) {
			throw new Error('YoutubePlayer no document or window to createElement video');
		}
		this._el = document.createElement('div');
		this._el.setAttribute('id', 'youtube-player');
		this._loadPlayer();
	}

	get width() {
		return this.el.getBoundingClientRect().width;
	}

	get height() {
		return this.el.getBoundingClientRect().height;
	}

	get el() {
		if (this._player && this._player.getIframe) return this._player.getIframe();
		return this._el;
	}

	set volume(value) {
		this._player.setVolume(value * 100);
	}
	get volume() {
		return this._player.getVolume() / 100;
	}

	set currentTime(time) {
		this.seek(time);
	}
	get currentTime() {
		return this._player.getCurrentTime();
	}

	get duration() {
		return this._player.getDuration();
	}

	setSize(width, height) {
		this._player.setSize(width, height);
	}

	play() {
		super.play();
		this._player.playVideo();
	}

	pause(autoPaused) {
		super.pause(autoPaused);
		this._player.pauseVideo();
	}

	seek(time) {
		if (!this.videoReady || !this._player.seekTo) return;
		this._player.seekTo(time);
	}


	_getSDK() {
		if (window[SDK_GLOBAL]) {
			return Promise.resolve(window[SDK_GLOBAL]);
		}

		return new Promise((resolve, reject) => {
			const previous = window[SDK_GLOBAL_READY];
			window[SDK_GLOBAL_READY] = () => {
				if (previous) previous();
				resolve(window[SDK_GLOBAL]);
			};
			loadScript(SDK_URL, (err) => {
				if (err) { reject(err); }
			});
		});
	}

	_loadPlayer() {
		const {
			controls = true,
			volume = 1,
		} = this._options;
		this._getSDK()
			.then((YT) => {
				this._player = new YT.Player(this._el, {
					width: this._options.width,
					height: this._options.height,
					videoId: this._options.youtubeId,
					playerVars: {
						...DEFAULT_PLAYER_VARS,
						controls,
						origin: window ? window.location.origin : '',
						autoplay: this.autoplay,
					},
					events: {
						onReady: (e) => {
							this.videoReady = true;
							this.volume = volume;
							if (this._callbackCanPlay) this._callbackCanPlay(e);
						},
						onStateChange: this._onStateChange,
						onError: this._onVideoError,
					},
				});
			})
			.catch((e) => {
				if (this.error) throw new Error('Error - YouTubePlayer - loadPlayer ', e);
			});
	}

	_onStateChange = (e) => {
		switch (e.data) {
			case -1:
				/* unstarted */
				break;
			case 0:
				/* ended */
				this._onVideoEnd(e.target);
				break;
			case 1:
				this._onVideoPlay(e.target);
				break;
			case 2:
				this._onVideoPause(e.target);
				break;
			case 3:
				/* buffering */
				break;
			case 5:
				/* video cued */
				break;
			default:
				break;
		}
	}

	destroy() {
		if (!this._player) {
			return;
		}
		this.pause();
		this._player.destroy();
		this._player = null;
	}
}
