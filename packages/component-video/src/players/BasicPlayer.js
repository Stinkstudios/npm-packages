// BasicPlayer.js
import AbstractPlayer from './AbstractPlayer';

class BasicPlayer extends AbstractPlayer {

	constructor(mSrc, mContainer, mOptions = {}) {
		super(mOptions);

		this._player = document.createElement('video');

		if (mContainer) {
			this._container = mContainer;
			this._container.appendChild(this._player);
		}


		this._player.src = mSrc;
		this._addListeners();
		this.play();


		if (mOptions.muted) {
			this.setVolume(0);
		}

		if (mOptions.loop) {
			this.setLoop(true);
		}

		if (mOptions.controls) {
			this._player.setAttribute('controls', true);
		}
	}

	load(mSrc) {
		this._player.src = mSrc;
		this.play();
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
		this._player.currentTime = time;
	}


	getCurrentTime() {
		if (!this._player) { return null;	}
		return this._player.currentTime;
	}


	getDuration() {
		if (!this._player) { return null;	}
		return this._player.duration;
	}


	getVolume() {
		if (!this._player) { return null;	}
		return this._player.volume;
	}


	setVolume(volume) {
		if (!this._player) { return;	}

		this._player.volume = volume;
	}


	setLoop(value) {
		if (!this._player) { return; }
		this._player.loop = value;
		super.setLoop(value);
	}


	getPlayer() {
		return this._player;
	}


	//	EVENT LISTENERS

	_addListeners() {
		this._removeListeners();

		this._player.addEventListener('ended', this._endedBind);
		this._player.addEventListener('error', this._errorBind);
		this._player.addEventListener('play', this._playBind);
		this._player.addEventListener('pause', this._pauseBind);
		this._player.addEventListener('progress', this._progressBind);
	}


	_removeListeners() {
		this._player.removeEventListener('ended', this._endedBind);
		this._player.removeEventListener('error', this._errorBind);
		this._player.removeEventListener('play', this._playBind);
		this._player.removeEventListener('pause', this._pauseBind);
		this._player.removeEventListener('progress', this._progressBind);
	}

	//	Destroy

	destroy() {
		if (!this._player) {
			return;
		}

		super.destroy();

		this._player.pause();
		try {
			this._player.parentNode.removeChild(this._player);
		} catch (e) {
			// console.log('Error remove player element : ', this._player, this._player.parentNode);
		}
		this._player = null;
	}
}

export default BasicPlayer;
