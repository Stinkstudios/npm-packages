// AbstractPlayer.js

export default class AbstractPlayer {

	constructor(mOptions = {}) {
		this._options = mOptions;

		const {
			autoplay = false,
			loop = false,
			resize = false,
			width = '100%',
			height = '100%',
			pageVisibility = false,
		} = this._options;

		this._options.resize = this._options.youtubeId ? false : resize;
		this._options.pageVisibility = pageVisibility;
		this._options.width = width;
		this._options.height = height;

		this.autoplay = autoplay;
		this.looping = loop;
		this.playing = false;
		this.paused = true;
		this.autoPaused = false;
		this.videoReady = false;

		this._callbackMetadata = this._options.onMetadata;
		this._callbackCanPlay = this._options.onCanPlay;
		this._callbackEnd = this._options.onEnd;
		this._callbackError = this._options.onError;
		this._callbackPlay = this._options.onPlay;
		this._callbackPause = this._options.onPause;
		this._callbackProgress = this._options.onProgress;
		this._callbackTimeUpdate = this._options.onTimeUpdate;
	}

	set autoplay(value) {
		this._autoplay = value;
	}
	get autoplay() {
		return this._autoplay;
	}
	set videoReady(value) {
		this._videoReady = value;
	}
	get videoReady() {
		return this._videoReady;
	}

	set resize(value) {
		this._resize = value;
	}
	get resize() {
		return this._resize;
	}

	set looping(value) {
		this._looping = value;
	}
	get looping() {
		return this._looping;
	}

	set playing(value) {
		this._playing = value;
	}
	get playing() {
		return this._playing;
	}

	set paused(value) {
		this._paused = value;
	}
	get paused() {
		return this._paused;
	}

	set autoPaused(value) {
		this._autoPaused = value;
	}
	get autoPaused() {
		return this._autoPaused;
	}

	getPlayer() {
		return this._player;
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

	seek(time) {
		this.currentTime = time;
	}

	get el() {
		if (!this._player) {
			throw new Error('Error - no el to get');
		}
		return this._player;
	}

	set width(value) {
		this.el.style.width = value;
	}

	get width() {
		return this.el.videoWidth;
	}

	set height(value) {
		this.el.style.height = value;
	}

	get height() {
		return this.el.videoHeight;
	}

	setSize(width, height) {
		this.width = width;
		this.height = height;
	}

	_addToDom() {
		if (!this._options.el) document.body.appendChild(this.el);
		else this._options.el.appendChild(this.el);
	}

	_onVideoMetadata = (e = {}) => {
		if (!this._options.resize) {
			this.setSize(this._options.width, this._options.height);
		}
		this._addToDom();
		if (this._options.resize) this._onVideoResize();
		if (this._callbackMetadata) this._callbackMetadata(e);
	}

	_onVideoCanPlayThrough = (e) => {
		this._player.removeEventListener('canplaythrough', this._onVideoCanPlayThrough);
		this.videoReady = true;
		if (this.autoplay) this.play();
		if (this._callbackCanPlay) this._callbackCanPlay(e);
	}

	_onVideoEnd = (e) => {
		this.playing = false;
		this.paused = true;
		/* to loop a youtube video check if loop exist */
		if (!this._player.loop && this.looping) this.play();
		if (this._callbackEnd) this._callbackEnd(e);
	}

	_onVideoError = (e) => {
		if (this._callbackError) this._callbackError(e);
		throw new Error('Error - component-video - ', e);
	}

	_onVideoPlay = (e) => {
		this.playing = true;
		this.paused = false;
		this.autoPaused = false;
		if (this._callbackPlay) this._callbackPlay(e);
	}

	_onVideoPause = (e) => {
		this.playing = false;
		this.paused = true;
		if (this._callbackPause) this._callbackPause(e);
	}

	_onVideoProgress = (e) => {
		if (this._callbackProgress) this._callbackProgress(e);
	}

	_onVideoResize = () => {
		const el = this.el;
		if (!el || !window) {
			throw new Error('player isnt in dom. So cant resize');
		}
		const width = this.width;
		const height = this.height;
		const areaWidth = this._options.el ? this._options.el.offsetWidth : window.innerWidth;
		const areaHeight = this._options.el ? this._options.el.offsetHeight : window.innerHeight;
		const scale = Math.max(areaWidth / width, areaHeight / height);
		el.style.cssText = `width:${Math.ceil(width * scale)}px; height:${Math.ceil(height * scale)}px; position:absolute; top:${Math.ceil((areaHeight - height * scale) / 2)}px; left:${Math.ceil((areaWidth - width * scale) / 2)}px;`; // eslint-disable-line max-len
	}

	_onTimeUpdate = (e) => {
		if (this._callbackTimeUpdate) this._callbackTimeUpdate(e);
	}

}
