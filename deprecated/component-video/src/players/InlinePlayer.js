// InlinePlayer.js

import BasicPlayer from './BasicPlayer';

export default class InlinePlayer extends BasicPlayer {
	constructor(mOptions = {}) {
		super(mOptions);

		const { audioSrc, loop = false, volume = 1 } = this._options;

		this.framerate = 24;
		this.loadHAudio(audioSrc, loop, volume);
		this._player.load();
	}

	set audioSrc(value) {
		this._sound.src = value;
	}

	loadHAudio(src, loop, volume) {
		this._sound = document.createElement('audio');
		document.body.appendChild(this._sound);
		this._sound.src = src;
		this._sound.loop = loop;
		this._sound.volume = volume;
		this._addAudioListeners();
		this._sound.load();
	}

	_onAudioReady = () => {
		this.audioReady = true;
		if (this.autoplay) this.play();
	};

	_onAudioPlay = e => {
		this.playing = true;
		this.paused = false;
		this.autoPaused = false;
		this._onVideoPlay(e);
		if (!this._animateFrame) this._render();
	};

	_onAudioPause = e => {
		this.playing = false;
		this.paused = true;
		this._onVideoPause(e);
		this._cancelAnimateFrame();
	};

	_onAudioEnded = () => {
		this._onVideoEnd(null);
		this._cancelAnimateFrame();
	};

	_onAudioError = e => {
		this._onVideoError(e);
	};

	set audioReady(value) {
		this._audioReady = value;
	}

	get audioReady() {
		return this._audioReady;
	}

	set framerate(value) {
		this._framerate = value;
	}

	get framerate() {
		return this._framerate;
	}

	set currentFrame(value) {
		this._currentFrame = value;
	}

	get currentFrame() {
		return this._currentFrame;
	}

	play() {
		if (!this._sound) return;
		if (!this._sound.paused) return;
		this._sound.play();
	}

	pause(autoPaused = false) {
		if (!this._sound) return;
		if (this._sound.paused) return;
		this.autoPaused = autoPaused;
		this._sound.pause();
	}

	seek(time) {
		if (!this.videoReady || !this._sound) return;
		this._sound.currentTime = time;
	}

	_addAudioListeners() {
		this._sound.addEventListener('canplaythrough', this._onAudioReady);
		this._sound.addEventListener('play', this._onAudioPlay);
		this._sound.addEventListener('pause', this._onAudioPause);
		this._sound.addEventListener('ended', this._onAudioEnded);
		this._sound.addEventListener('error', this._onAudioError);
	}

	_removeAudioListeners() {
		this._sound.removeEventListener('canplaythrough', this._onAudioReady);
		this._sound.removeEventListener('play', this._onAudioPlay);
		this._sound.removeEventListener('pause', this._onAudioPause);
		this._sound.removeEventListener('ended', this._onAudioEnded);
		this._sound.removeEventListener('error', this._onAudioError);
	}

	_replace(newsrc) {
		if (!this._player) return;
		if (this.src && this.src !== newsrc) {
			this._removeListeners();
			this._player.pause();
			this._sound.pause();
		}
	}

	_render = () => {
		const videoFrame = 0 || this.framerate * this._sound.currentTime;
		if (videoFrame !== this.currentFrame || videoFrame === 0) {
			this.currentFrame = videoFrame;
			this.currentTime = (videoFrame / this.framerate).toFixed(6);
		}
		this._animateFrame = requestAnimationFrame(this._render);
	};

	_cancelAnimateFrame() {
		if (this._animateFrame) {
			cancelAnimationFrame(this._animateFrame);
			this._animateFrame = null;
		}
	}

	destroy() {
		super.destroy();
		this._cancelAnimateFrame();
		if (!this._sound) return;
		this._removeAudioListeners();
		this._sound.pause();
		this._sound.src = '';
		try {
			if (
				this._sound.parentNode &&
				this.isDescendant(this._sound.parentNode, this._sound)
			) {
				this._sound.parentNode.removeChild(this._sound);
			}
		} catch (e) {
			if (this.error)
				throw new Error('Error remove inline player audio elment ', e);
		}
		this._sound = null;
	}
}
