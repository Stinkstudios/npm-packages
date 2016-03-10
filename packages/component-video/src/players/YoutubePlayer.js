import loadScript from 'load-script';
import AbstractPlayer from './AbstractPlayer';

const SDK_URL = '//www.youtube.com/iframe_api';
const SDK_GLOBAL = 'YT';
const SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';

const DEFAULT_PLAYER_VARS = {
	autoplay: 0,
	playsinline: 1,
	showinfo: 0,
	rel: 0,
	iv_load_policy: 3,
};

class YoutubePlayer extends AbstractPlayer {
	constructor(mYoutubeID, mContainer, mOptions = {}) {
		super(mOptions);
		this._container = mContainer;
		this._el = document.createElement('div');
		this._el.setAttribute('id', 'youtube-player');
		this._container.appendChild(this._el);
		this._isReady = false;
		this._loadingSDK = false;
		this._loadOnReady = '';
		this._withControls = mOptions.controls ? 1 : 0;
		this.load(mYoutubeID);
	}


	_getSDK() {
		if (window[SDK_GLOBAL]) {
			return Promise.resolve(window[SDK_GLOBAL]);
		}

		return new Promise((resolve, reject) => {
			const previousOnReady = window[SDK_GLOBAL_READY];
			window[SDK_GLOBAL_READY] = function sdkReady() {
				if (previousOnReady) { previousOnReady(); }
				resolve(window[SDK_GLOBAL]);
			};
			loadScript(SDK_URL, (err) => {
				if (err) { reject(err); }
			});
		});
	}


	load(mUrl) {
		if (this._isReady) {
			this.player.cueVideoById({
				videoId: mUrl,
			});
			this.play();
			return;
		}

		if (this._loadingSDK) {
			this._loadOnReady = mUrl;

			return;
		}


		this._getSDK().then((YT) => {
			this.player = new YT.Player('youtube-player', {
				width: '100%',
				height: '100%',
				videoId: mUrl,
				playerVars: {
					...DEFAULT_PLAYER_VARS,
					controls: this._withControls,
					origin: window.location.origin,
				},
				events: {
					onReady: () => {
						this._loadingSDK = false;
						this._onReady();
					},
					onStateChange: this._onStateChange.bind(this),
					onError: (event) => this.props.onError(event.data),
				},
			});
		});
	}


	//	IMPLEMENT INTERFACE

	play() {
		if (!this._isReady) {	return;	}
		this.player.playVideo();
	}


	pause() {
		if (!this._isReady) {	return;	}
		this.player.pauseVideo();
	}


	stop() {
		if (!this._isReady) {	return;	}
		this.player.stopVideo();
	}


	seek(time) {
		if (!this._isReady || !this.player.seekTo) {	return;	}
		this.player.seekTo(time);
	}


	getDuration() {
		if (!this._isReady || !this.player.getDuration()) { return null; }
		return this.player.getDuration();
	}


	getCurrentTime() {
		if (!this._isReady || !this.player.getCurrentTime()) return null;
		return this.player.getCurrentTime();
	}


	getVolume() {
		if (!this._isReady || !this.player.setVolume) { return null; }
		return this.player.getVolume();
	}


	setVolume(volume) {
		if (!this._isReady || !this.player.setVolume) { return; }

		this.player.setVolume(volume * 100);
	}


	_onStateChange(e) {
		if (e.data === 0) {
			this._onVideoEnd(e);
			if (this._looping) {
				this.play();
			}
		} else if (e.data === 1) {
			this._onVideoPlay(e);
		} else if (e.data === 2) {
			this._onVideoPaused(e);
		}
	}


	_onReady() {
		this._isReady = true;
		if (this._loadOnReady) {
			this.load(this._loadOnReady);
			this._loadOnReady = null;
		} else {
			this.play();
		}
	}

}


export default YoutubePlayer;
