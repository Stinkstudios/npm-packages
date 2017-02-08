// BasicPlayer
import AbstractPlayer from './AbstractPlayer';
import VISIBILITY_CHANGE_EVENT_NAME from '../utils/visibility-change-event';
import HIDDEN_PROPERTY_NAME from '../utils/hidden-property-name';
import { clamp } from '../utils/math';

export default class BasicPlayer extends AbstractPlayer {

	constructor(mOptions = {}) {
		super(mOptions);
		if (!document || !window) {
			throw new Error('BasicPlayer no document or window to createElement video');
		}
		this._player = document.createElement('video');

		this._player.setAttribute('playsinline', 'playsinline');
		this._player.setAttribute('webkitplaysinline', 'webkitplaysinline');

		const {
			src,
			poster,
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
		if (poster !== 'undefined' && typeof poster === 'string' && poster.length > 0) this.poster = poster;
		this.src = src;
	}

	set src(value) {
		this._replace(value);
		this._player.src = value;
		if (!value) return;
		this._addListeners();
	}

	set volume(value) {
		this._player.volume = value;
	}
	set poster(value) {
		this._player.poster = value;
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

	fade(volume, duration, fn) {
		let t0 = 0;
		const v0 = this.volume;

		const ramp = (t) => {
			// Duration is in seconds, t in milliseconds
			const d = duration * 1000;
			// Init time reference
			if (t0 === 0) t0 = t;
			// End of fading
			if (t - t0 > d) {
				// Make sure the correct volume is set
				this.volume = clamp(volume, 0, 1);
				cancelAnimationFrame(this.fadeAnimId);
				if (fn) fn();
				return;
			}
			// Fading param
			const x = (t - t0) / d;
			// Volume lerp
			const v = (1 - x) * v0 + x * volume;
			this.volume = clamp(v, 0, 1);
			this.fadeAnimId = requestAnimationFrame(ramp);
		};

		if (this.fadeAnimId) cancelAnimationFrame(this.fadeAnimId);
		this.fadeAnimId = requestAnimationFrame(ramp);
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
		if (typeof document === 'undefined') return;
		if (document[this._hidden]) {
			/*
				to catch if the user has already paused video via any controls
				passing through the paused state to set autoPaused
			 */
			if (!this.paused) this.pause(!this.paused);
		} else if (this.autoPaused) {
			/*
				if video auto paused by visibilitychange then auto play video
			 */
			this.play();
		}
	}

	_handlePageVisibility(remove = false) {
		if (typeof document === 'undefined') return;
		this._hidden = HIDDEN_PROPERTY_NAME;
		const _pageVisibility = VISIBILITY_CHANGE_EVENT_NAME;
		if (this._hidden === undefined && _pageVisibility === undefined) return;

		if (remove) {
			document.removeEventListener(_pageVisibility, this._onPageVisibilityChange, false);
			return;
		}
		document.addEventListener(_pageVisibility, this._onPageVisibilityChange, false);
	}

	_handlePageResize(remove = false) {
		if (typeof window === 'undefined') return;
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
		this._player.src = '';
		try {
			if (this._player.parentNode && this.isDescendant(this._player.parentNode, this._player)) {
				this._player.parentNode.removeChild(this._player);
			}
		} catch (e) {
			if (this.error) throw new Error('Error remove player element : ', e);
		}
		this._player = null;
	}

	isDescendant(parent, child) { // eslint-disable-line class-methods-use-this
		let node = child.parentNode;
		while (node !== null) {
			if (node === parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	}
}
