import AbstractPlayer from './AbstractPlayer';
const Detector = process.browser ? require('@stinkdigital/detector') : null;

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
		if (this._options.pageVisibility) this._handlePageVisibility();
		if (this._options.resize) this._handlePageResize();
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
		if (this._options.pageVisibility) this._handlePageVisibility(true);
		if (this._options.resize) this._handlePageResize(true);
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

	_onPageVisibilityChange = () => {
		if (!document) return;
		if (document[this._hidden]) {
			/*
				to catch if the user has already paused video via any controls
				passing through the paused state to set autoPaused
			 */
			if (!this.paused) this.pause(!this.paused);
		} else {
			/*
				if video auto paused by visibilitychange then auto play video
			 */
			if (this.autoPaused) this.play();
		}
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

	_handlePageResize(remove = false) {
		if (!window) return;
		if (remove) {
			window.removeEventListener('resize', this._onVideoResize);
			return;
		}
		window.addEventListener('resize', this._onVideoResize);
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
