# @stinkstudios/component-video

**DEPRECATED PACKAGE - FOR OLDER PROJECTS AT [STINK STUDIOS]**

A simple video component for videos and youtube videos.

## Installation

### Yarn

```bash
$ yarn add @stinkstudios/component-video
```

### NPM

```bash
$ npm install @stinkstudios/component-video
```

## Legacy

Previously this package was used as a git url instead of using the npm registry. To convert from this you will need to update any references to `@stinkdigital/component-video` to `@stinkstudios/component-video` and remove the git url and replace with a semantic version.

### Example

```
"@stinkstudios/component-video": "git+ssh://git@github.com/stinkstudios/component-video.git#v0.3.6",
```

to

```
"@stinkstudios/component-video": "^0.3.6",
```

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
- `audioSrc: string` ( Only works on mobile devices where use Inline player )
- `youtubeId: string` ( If have this parameter it will ignore the other sources and play the youtube video )
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
- `onVolumeChange`
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
If you need audio you still have to use the hack of providing an audio file

The Youtube player requires a Promise polyfill for older browsers such as IE11. Make sure you include one in your project before importing VideoPlayer.

## Development

```
yarn dev
```

## Build

```
yarn
yarn build
```

## [Changelog](https://github.com/Stinkstudios/npm-packages/blob/master/packages/component-video/CHANGELOG.md)

## [License](https://github.com/Stinkstudios/npm-packages/blob/master/packages/component-video/LICENSE)

[downloads-img]: https://img.shields.io/npm/dm/@stinkstudios/component-video.svg?style=flat-square
[npm-img]: https://img.shields.io/npm/v/@stinkstudios/component-video.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@stinkstudios/component-video
[travis-img]: https://travis-ci.com/Stinkstudios/npm-packages.svg?style=flat-square
[travis-url]: https://travis-ci.com/Stinkstudios/npm-packages
[snyk-img]: https://snyk.io/test/github/Stinkstudios/npm-packages/badge.svg?targetFile=packages%2Fcomponent-video%2Fpackage.json
[snyk-url]: https://snyk.io/test/github/Stinkstudios/npm-packages?targetFile=packages%2Fcomponent-video%2Fpackage.json
[mit-img]: http://img.shields.io/badge/license-MIT-brightgreen.svg
[mit-url]: http://opensource.org/licenses/MIT
[stink studios]: https://stinkstudios.com
