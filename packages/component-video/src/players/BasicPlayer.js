import AbstractPlayer from './AbstractPlayer';

export default class BasicPlayer extends AbstractPlayer {

	constructor(mOptions = {}) {
		super(mOptions);
		if (!document || !window) {
			throw new Error('BasicPlayer no document or window to createElement video');
		}
		this._player = document.createElement('video');

		const {
			src,
			loop = false,
			controls = true,
			volume = 1,
			preload = 'auto',
			crossOrigin = null,
		} = this._options;

		this.loop = loop;
		this.controls = controls;
		this.volume = volume;
		this.preload = preload;
		if (crossOrigin) this.crossOrigin = crossOrigin;
		this._player.autoplay = this.autoplay;
		this.src = src;
	}

	set src(value) {
		this._replace(value);
		this._player.src = value;
		this._addListeners();
	}

	set volume(value) {
		this._player.volume = value;
	}
	set loop(value) {
		this.looping = value;
		this._player.loop = value;
	}
	set controls(value) {
		this._player.controls = value;
	}
	set preload(value) {
		this._player.preload = value;
	}
	set crossOrigin(value) {
		this._player.crossOrigin = value;
	}
	set currentTime(time) {
		/* TODO add check for time format */
		this._player.currentTime = time;
	}

	get src() {
		return this._player.src;
	}
	get currentTime() {
		return this._player.currentTime;
	}
	get duration() {
		return this._player.duration;
	}
	get volume() {
		return this._player.volume;
	}

	play() {
		super.play();
		this._player.play();
	}

	pause(autoPaused) {
		super.pause(autoPaused);
		this._player.pause();
	}

	seek(time) {
		if (!this.videoReady) return;
		this.currentTime = time;
	}

	_addListeners() {
		this._removeListeners();

		this._player.addEventListener('loadedmetadata', this._onVideoMetadata);
		this._player.addEventListener('canplaythrough', this._onVideoCanPlayThrough);
		this._player.addEventListener('ended', this._onVideoEnd);
		this._player.addEventListener('error', this._onVideoError);
		this._player.addEventListener('play', this._onVideoPlay);
		this._player.addEventListener('pause', this._onVideoPause);
		this._player.addEventListener('progress', this._onVideoProgress);
		this._player.addEventListener('timeupdate', this._onTimeUpdate);
	}

	_removeListeners() {
		this._player.removeEventListener('loadedmetadata', this._onVideoMetadata);
		this._player.removeEventListener('canplaythrough', this._onVideoCanPlayThrough);
		this._player.removeEventListener('ended', this._onVideoEnd);
		this._player.removeEventListener('error', this._onVideoError);
		this._player.removeEventListener('play', this._onVideoPlay);
		this._player.removeEventListener('pause', this._onVideoPause);
		this._player.removeEventListener('progress', this._onVideoProgress);
		this._player.removeEventListener('timeupdate', this._onTimeUpdate);
	}

	_replace(newsrc) {
		if (!this._player) return;
		if (this.src && this.src !== newsrc) {
			this._removeListeners();
			this._player.pause();
		}
	}
	//	Destroy

	destroy() {
		if (!this._player) {
			return;
		}
		this._removeListeners();

		this._player.pause();
		try {
			this._player.parentNode.removeChild(this._player);
		} catch (e) {
			throw new Error('Error remove player element : ', e);
		}
		this._player = null;
	}
}
