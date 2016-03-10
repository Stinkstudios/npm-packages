// main.js

console.log('test class');

import VideoPlayer from '../src/index';


let options={
	// youtubeId:"POH9qQhB_GU",
	src:"assets/intro.mp4",
	// audioSrc:"assets/interview.mp3",
	onEnd:onVideoEnd,
	onPlay:onVideoPlay,
	onPause:onVideoPause,
	onProgress:onVideoProgress,
	controls:true
}
let videoPlayer = new VideoPlayer(options);

console.log("Element :", videoPlayer.domElement);
document.body.appendChild(videoPlayer.el);

videoPlayer.el.style.width = '1280px';
videoPlayer.el.style.height = '720px';
videoPlayer.el.style.position = 'absolute';
videoPlayer.setLoop(true);

window.addEventListener("touchend", ()=> {
	videoPlayer.play();
});

window.addEventListener("click", ()=> {
	videoPlayer.play();
});


window.addEventListener('keydown', (e)=> {
	console.log('Key Code : ', e.keyCode);

	if(e.keyCode == 89) {
		console.log('Load new youtube Video');

		videoPlayer.load('9aQ3qRqEXJU');
	} else if(e.keyCode == 78) {
		console.log('Load new video');

		videoPlayer.load('assets/test.mp4');
	}
});



setTimeout( ()=> {
	videoPlayer.setVolume(0);
	// videoPlayer.seek(5);
}, 1000);

setTimeout( ()=> {
	console.log('Volume : ', videoPlayer.getVolume());
}, 1000);


loop();

function loop() {
	// if(Math.random() > .9) console.log(videoPlayer.getCurrentTime() , videoPlayer.getDuration() );

	window.requestAnimationFrame( loop );
}


function onVideoEnd(e) {
	console.debug('Video Ended', e);
}

function onVideoPlay(e) {
	console.debug('Video Play', e);
}

function onVideoPause(e) {
	console.debug('Video Pause', e);
}

function onVideoProgress(e) {
	if(Math.random() > .9) console.debug('Video Progress', e);
}