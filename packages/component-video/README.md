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
 - `el: dom element` ( dom element to attach player to )
 - `src: string`
 - `audioSrc: string`  ( Only works on mobile devices where use Inline player )
 - `youtubeId: string`  ( If have this parameter it will ignore the other sources and play the youtube video )
 - `loop : boolean` (false)
 - `autoplay : boolean` (false)
 - `preload : string` ('auto')
 - `crossOrigin : null`
 - `volume : int` (1)
 - `muted : boolean` (false)
 - `controls : boolean` (true)
 - `playsinline : boolean` (true)
 - `forceInline : boolean` (false) ( Enables the iOS hack to play video inline )
 - `resize : boolean` (false) (disabled if youtubeId is present)
 - `pageVisibility : boolean` (false) ( Will pause and play the video on pageVisibility change )
 - `width : string` ('100%')
 - `height : string` ('100%')
 - `error : boolean` (true) ( Will throw a new Error on error. Set to false to stop this)


 ### Event Callbacks
 - `onMetadata`
 - `onCanPlay`
 - `onEnd`
 - `onError`
 - `onPause`
 - `onPlay`
 - `onProgress`
 - `onTimeUpdate`
 - `forceNativePlayer` ( Force the mobile device to use native player instead of Inline player)


### API
 - `play()`
 - `pause()`
 - `seek(time)`
 - `getPlayer()` (get the video element or youtube player)
 - `destroy()`
 - `loop : boolean`
 - `playing : boolean` (returns if video is playing boolean)
 - `paused : boolean` (returns if video is paused boolean)
 - `currentTime`
 - `duration` (returns video total duration)
 - `volume : int` (0 - 1) (can set or get the video volume)
 - `videoReady : boolean` (returns if video is in ready state boolean)
 - `setSize(width:string, height:string)`

### Note
Compiled into ES5 and ES6. See `package.json`

	"main": "lib/index.js",
	"jsnext:main": "es/index.js",
	"module": "es/index.js",

For autoplay on iOS 10 safari mobile you need to set `muted` to true.
If you need audio you still have to use the hack of providing an audio file.

## Development
```
npm run dev
```

## Build
```
npm install
npm build
```
