# Stink digital Video Component
A simple video component for videos and youtube videos.


## Installation
npm install @stinkdigital/component-video

## Usage
```
let parameters = {
	src:"assets/test.mp4",
	onEnd:onVideoEnd,
	onPlay:onVideoPlay,
	onPause:onVideoPause,
	onProgress:onVideoProgress
}

let videoPlayer = new VideoPlayer(parameters);

document.body.appendChild(videoPlayer.el);
```

### Parameters for VideoPlayer 
 - youtubeId  ( If have this parameter it will ignore the other sources and play the youtube video)
 - src 
 - audioSrc  ( Only works on mobile devices where use Inline player)
 - onError
 - onPlay
 - onPause
 - onEnd
 - forceNativePlayer ( Force the mobile device to use native player instead of Inline player)


## API
 - play()
 - pause()
 - seek(time)
 - getCurrentTime()
 - getDuration()
 - setVolume()
 - getVolume()
 - setLoop(value)
 - getPlayer() (get the video element or youtube player)
 - destroy()


## Build
```
npm install
npm build
```
