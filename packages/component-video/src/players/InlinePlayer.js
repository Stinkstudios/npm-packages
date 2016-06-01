// InlinePlayer.js

import BasicPlayer from './BasicPlayer';

export default class InlinePlayer extends BasicPlayer {

	constructor(mOptions = {}) {
		super(mOptions);

		const {
			audioSrc,
			loop = false,
			volume = 1,
		} = this._options;

		this.framerate = 24;
		this.startOffset = 0;
		this.hasSound = audioSrc !== undefined;
		if (this.hasSound) {
			this.loadHAudio(audioSrc, loop, volume);
		} else {
			this._onAudioPlay();
			this._onAudioReady();
		}
		this._player.load();
	}

	loadHAudio(src, loop, volume) {
		this._sound = document.createElement('audio');
		document.body.appendChild(this._sound);
		window._sound = this._sound;
		this._sound.src = src;
		this._sound.loop = loop;
		this._sound.volume = volume;
		this._addAudioListeners();
		this._sound.load();
	}

	_onAudioReady = () => {
		this.audioReady = true;
		if (this.autoplay) this.play();
	}
	_onAudioPlay = () => {
		this.playing = true;
		this.paused = false;
		this.autoPaused = false;
		if (!this._animateFrame) this._render();
	}
	_onAudioPause = () => {
		this.playing = false;
		this.paused = true;
		this._cancelAnimateFrame();
	}
	_onAudioEnded = () => {
		this._cancelAnimateFrame();
	}

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
		if (!this._player) return;
		if (this._player.playing) return;
	}

	pause(autoPaused = false) {
		if (!this._player) return;
		this.autoPaused = autoPaused;
		if (this._player.paused) return;
	}

	_addAudioListeners() {
		this._sound.addEventListener('canplaythrough', this._onAudioReady);
		this._sound.addEventListener('play', this._onAudioPlay);
		this._sound.addEventListener('pause', this._onAudioPause);
		this._sound.addEventListener('ended', this._onAudioEnded);
	}

	_removeAudioListeners() {
		this._sound.removeEventListener('canplaythrough', this._onAudioReady);
		this._sound.removeEventListener('play', this._onAudioPlay);
		this._sound.removeEventListener('pause', this._onAudioPause);
		this._sound.removeEventListener('ended', this._onAudioEnded);
	}

	_render = () => {
		if (this.playing) {
			let videoFrame = this.framerate * ((performance.now() - this.startOffset) / 1000);

			if (this.hasSound) {
				videoFrame = 0 | this.framerate * (this._sound.currentTime);
			}

			if ((videoFrame !== this.currentFrame) || videoFrame === 0) {
				this.currentFrame = videoFrame;
				this.currentTime = (videoFrame / this.framerate).toFixed(6);
			}

			if (this.currentTime >= this._player.duration && !this.hasSound) {
				this.startOffset = performance.now();
			}
		}

		this._animateFrame = requestAnimationFrame(this._render);
	}

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
		this.sound.pause();
		try {
			this._sound.parentNode.removeChild(this._sound);
		} catch (e) {
			throw new Error('Error remove inline player audio elment ', e);
		}
		this._sound = null;
	}

}
