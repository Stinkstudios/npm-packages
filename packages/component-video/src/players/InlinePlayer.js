// InlinePlayer.js

import AbstractPlayer from './AbstractPlayer';
import BasicPlayer from './BasicPlayer';
import sono from '@stinkdigital/sono';

class InlinePlayer extends AbstractPlayer {

	constructor(mSrc, mContainer, mOptions = {}) {
		super(mOptions);
		this._basicPlayer = new BasicPlayer(mSrc, null, mOptions);

		this._canvas = document.createElement('canvas');
		this._ctx = this._canvas.getContext('2d');
		this._time = 0;

		this._container = mContainer;
		this._container.appendChild(this._canvas);
		this._hasSetSize = false;
		this._loop();
		this._isPlaying = false;


		if (mOptions.audioSrc) {
			this._sound = sono.createSound({
				src: mOptions.audioSrc,
				loop: false,
				volume: 1,
			});
		}
	}


	load(mSrc) {
		this._basicPlayer.load(mSrc);
		this.play();
	}


	play() {
		if (!this._basicPlayer) { return;	}
		this._basicPlayer.getPlayer().load();
		this._isPlaying = true;
		if (this._sound) {
			this._sound.play();
		}
	}


	pause() {
		if (!this._basicPlayer) { return;	}
		this._isPlaying = false;

		if (this._sound) {
			this._sound.pause();
		}
	}


	seek(time) {
		if (!this._basicPlayer) { return;	}
		this._time = time;
	}


	getCurrentTime() {
		if (!this._basicPlayer) { return null;	}
		return this._basicPlayer.getCurrentTime();
	}


	getDuration() {
		if (!this._basicPlayer) { return null;	}
		return this._basicPlayer.getDuration();
	}


	getVolume() {
		if (!this._basicPlayer || !this._sound) { return null;	}
		if (this._sound) {
			return this._sound.volume;
		}

		return null;
	}


	setVolume(volume) {
		if (!this._basicPlayer || !this._sound) { return;	}
		this._sound.volume = volume;
	}


	_loop() {
		const player = this._basicPlayer.getPlayer();

		if (this._isPlaying) {
			this._time += 1 / 60;
		}

		if (this._time > this.getDuration()) {
			this._time = this.getDuration();

			this._isPlaying = false;
			this._onVideoEnd();

			if (this._looping) {
				this.play();
			}
		}

		player.currentTime = this._time;
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
		this._ctx.drawImage(this._basicPlayer.getPlayer(), 0, 0);

		if (!this._hasSetSize && this._basicPlayer && this._basicPlayer.getPlayer().videoWidth > 0) {
			this._setCanvasSize();
		}
		window.requestAnimationFrame(() => this._loop());
	}


	_setCanvasSize() {
		this._canvas.width = this._basicPlayer.getPlayer().videoWidth;
		this._canvas.height = this._basicPlayer.getPlayer().videoHeight;
		const strPx = 'px';
		this._canvas.style.width = this._canvas.width + strPx;
		this._canvas.style.height = this._canvas.height + strPx;

		this._hasSetSize = true;
	}
}


export default InlinePlayer;
