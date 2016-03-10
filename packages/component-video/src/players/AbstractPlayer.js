// AbstractPlayer.js

class AbstractPlayer {

	constructor(mOptions = {}) {
		this._looping = false;
		this._options = mOptions;

		this._init();
	}


	_init() {
		this._endedBind = this._onVideoEnd.bind(this);
		this._errorBind = this._onVideoError.bind(this);
		this._playBind = this._onVideoPlay.bind(this);
		this._pauseBind = this._onVideoPause.bind(this);
		this._progressBind = this._onVideoProgress.bind(this);

		this._callbackEnd = this._options.onEnd;
		this._callbackError = this._options.onError;
		this._callbackPlay = this._options.onPlay;
		this._callbackPause = this._options.onPause;
		this._callbackProgress = this._options.onProgress;
	}


	_onVideoEnd(e) {
		if (this._callbackEnd) {	this._callbackEnd(e);	}
	}

	_onVideoError(e) {
		if (this._callbackError) {	this._callbackError(e);	}
	}

	_onVideoPlay(e) {
		if (this._callbackPlay) {	this._callbackPlay(e);	}
	}

	_onVideoPause(e) {
		if (this._callbackPause) {	this._callbackPause(e);	}
	}

	_onVideoProgress(e) {
		if (this._callbackProgress) {	this._callbackProgress(e);	}
	}


	setLoop(value) {
		this._looping = value;
	}

	destroy() {
		this._removeListeners();
	}
}


export default AbstractPlayer;
