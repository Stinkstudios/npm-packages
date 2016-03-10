// VideoPlayer.js

import YoutubePlayer from './players/YoutubePlayer';
import BasicPlayer from './players/BasicPlayer';
import InlinePlayer from './players/InlinePlayer';
import Detector from '@stinkdigital/detector';

class VideoPlayer {

	constructor(mOptions = {}) {
		this.isMobile = Detector.IS_MOBILE;

		if (mOptions.domElement) {
			this._container = mOptions.domElement;
		} else {
			this._container = document.createElement('div');
		}


		if (mOptions.youtubeId) {
			this._player = new YoutubePlayer(mOptions.youtubeId, this._container, mOptions);
		} else {
			const forceNativePlayer = !!mOptions.forceNativePlayer;

			if (this.isMobile) {
				if (forceNativePlayer) {
					this._player = new BasicPlayer(mOptions.src, this._container, mOptions);
				} else {
					this._player = new InlinePlayer(mOptions.src, this._container, mOptions);
				}
			} else {
				this._player = new BasicPlayer(mOptions.src, this._container, mOptions);
			}
		}
	}


	//	PUBLIC METHODS

	load(mSrc) {
		if (!this._player) { return;	}
		this._player.load(mSrc);
	}

	play() {
		if (!this._player) { return;	}
		this._player.play();
	}


	pause() {
		if (!this._player) { return;	}
		this._player.pause();
	}


	seek(time) {
		if (!this._player) { return;	}
		this._player.seek(time);
	}


	getCurrentTime() {
		if (!this._player) { return null;	}
		return this._player.getCurrentTime();
	}


	getDuration() {
		if (!this._player) { return null;	}
		return this._player.getDuration();
	}


	getVolume() {
		if (!this._player) { return null;	}
		return this._player.getVolume();
	}


	setVolume(volume) {
		if (!this._player) { return;	}

		this._player.setVolume(volume);
	}


	isPlaying() {

	}


	setLoop(value) {
		if (!this._player) { return; }
		this._player.setLoop(value);
	}


	//	GET DOM ELEMENT

	get domElement() {
		return this._container;
	}

	get el() {
		return this._container;
	}
}

export default VideoPlayer;
