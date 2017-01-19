!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="http://localhost:8080/example",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),r.call(this),this._options=t;var o=this._options,i=o.autoplay,a=void 0!==i&&i,s=o.loop,u=void 0!==s&&s,l=o.resize,d=void 0!==l&&l,c=o.width,h=void 0===c?"100%":c,p=o.height,y=void 0===p?"100%":p,_=o.pageVisibility,f=void 0!==_&&_,v=o.error,m=void 0===v||v;this._options.resize=!this._options.youtubeId&&d,this._options.pageVisibility=f,this._options.width=h,this._options.height=y,this.autoplay=a,this.looping=u,this.playing=!1,this.paused=!0,this.autoPaused=!1,this.videoReady=!1,this.error=m,this._callbackMetadata=this._options.onMetadata,this._callbackCanPlay=this._options.onCanPlay,this._callbackEnd=this._options.onEnd,this._callbackError=this._options.onError,this._callbackPlay=this._options.onPlay,this._callbackPause=this._options.onPause,this._callbackProgress=this._options.onProgress,this._callbackTimeUpdate=this._options.onTimeUpdate}return e.prototype.getPlayer=function(){return this._player},e.prototype.play=function(){this._player&&this._player.playing},e.prototype.pause=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._player&&(this.autoPaused=e,this._player.paused)},e.prototype.seek=function(e){this.currentTime=e},e.prototype.setSize=function(e,t){this.width=e,this.height=t},e.prototype._addToDom=function(){this._options.el&&this._options.el.appendChild(this.el)},o(e,[{key:"autoplay",set:function(e){this._autoplay=e},get:function(){return this._autoplay}},{key:"videoReady",set:function(e){this._videoReady=e},get:function(){return this._videoReady}},{key:"resize",set:function(e){this._resize=e},get:function(){return this._resize}},{key:"looping",set:function(e){this._looping=e},get:function(){return this._looping}},{key:"playing",set:function(e){this._playing=e},get:function(){return this._playing}},{key:"paused",set:function(e){this._paused=e},get:function(){return this._paused}},{key:"autoPaused",set:function(e){this._autoPaused=e},get:function(){return this._autoPaused}},{key:"el",get:function(){if(!this._player&&this.error)throw new Error("Error - no el to get");return this._player}},{key:"width",set:function(e){this.el&&(this.el.style.width=e)},get:function(){return this.el?this.el.videoWidth:null}},{key:"height",set:function(e){this.el&&(this.el.style.height=e)},get:function(){return this.el?this.el.videoHeight:null}}]),e}(),r=function(){var e=this;this._onVideoMetadata=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e._options.resize||e.setSize(e._options.width,e._options.height),e._addToDom(),e._options.resize&&e._onVideoResize(),e._callbackMetadata&&e._callbackMetadata(t)},this._onVideoCanPlayThrough=function(t){e._player.removeEventListener("canplaythrough",e._onVideoCanPlayThrough),e.videoReady=!0,e.autoplay&&e.play(),e._callbackCanPlay&&e._callbackCanPlay(t)},this._onVideoEnd=function(t){e.playing=!1,e.paused=!0,!e._player.loop&&e.looping&&e.play(),e._callbackEnd&&e._callbackEnd(t)},this._onVideoError=function(t){if(e._callbackError&&e._callbackError(t),e.error)throw new Error("Error - component-video - ",t)},this._onVideoPlay=function(t){e.playing=!0,e.paused=!1,e.autoPaused=!1,e._callbackPlay&&e._callbackPlay(t)},this._onVideoPause=function(t){e.playing=!1,e.paused=!0,e._callbackPause&&e._callbackPause(t)},this._onVideoProgress=function(t){e._callbackProgress&&e._callbackProgress(t)},this._onVideoResize=function(){var t=e.el;if((!t||!window)&&e.error)throw new Error("player isnt in dom. So cant resize");var n=e.width,o=e.height,i=e._options.el?e._options.el.offsetWidth:window.innerWidth,r=e._options.el?e._options.el.offsetHeight:window.innerHeight,a=Math.max(i/n,r/o);t.style.cssText="width:"+Math.ceil(n*a)+"px; height:"+Math.ceil(o*a)+"px; position:absolute; top:"+Math.ceil((r-o*a)/2)+"px; left:"+Math.ceil((i-n*a)/2)+"px;"},this._onTimeUpdate=function(t){e._callbackTimeUpdate&&e._callbackTimeUpdate(t)}};t.default=i,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),l=o(u),d=n(9),c=o(d),h=n(7),p=o(h),y=n(8),_=function(e){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var o=r(this,e.call(this,n));if(o._onPageVisibilityChange=function(){"undefined"!=typeof document&&(document[o._hidden]?o.paused||o.pause(!o.paused):o.autoPaused&&o.play())},!document||!window)throw new Error("BasicPlayer no document or window to createElement video");o._player=document.createElement("video");var a=o._options,s=a.src,u=a.poster,l=a.loop,d=void 0!==l&&l,c=a.controls,h=void 0===c||c,p=a.volume,y=void 0===p?1:p,_=a.preload,f=void 0===_?"auto":_,v=a.crossOrigin,m=void 0===v?null:v;return o.loop=d,o.controls=h,o.volume=y,o.preload=f,m&&(o.crossOrigin=m),o._player.autoplay=o.autoplay,"undefined"!==u&&"string"==typeof u&&u.length>0&&(o.poster=u),o.src=s,o}return a(t,e),t.prototype.play=function(){e.prototype.play.call(this),this._player.play()},t.prototype.pause=function(t){e.prototype.pause.call(this,t),this._player.pause()},t.prototype.seek=function(e){this.videoReady&&(this.currentTime=e)},t.prototype.fade=function(e,t,n){var o=this,i=0,r=this.volume,a=function a(s){var u=1e3*t;if(0===i&&(i=s),s-i>u)return o.volume=(0,y.clamp)(e,0,1),cancelAnimationFrame(o.fadeAnimId),void(n&&n());var l=(s-i)/u,d=(1-l)*r+l*e;o.volume=(0,y.clamp)(d,0,1),o.fadeAnimId=requestAnimationFrame(a)};this.fadeAnimId&&cancelAnimationFrame(this.fadeAnimId),this.fadeAnimId=requestAnimationFrame(a)},t.prototype._addListeners=function(){this._removeListeners(),this._options.pageVisibility&&this._handlePageVisibility(),this._options.resize&&this._handlePageResize(),this._player.addEventListener("loadedmetadata",this._onVideoMetadata),this._player.addEventListener("canplaythrough",this._onVideoCanPlayThrough),this._player.addEventListener("ended",this._onVideoEnd),this._player.addEventListener("error",this._onVideoError),this._player.addEventListener("play",this._onVideoPlay),this._player.addEventListener("pause",this._onVideoPause),this._player.addEventListener("progress",this._onVideoProgress),this._player.addEventListener("timeupdate",this._onTimeUpdate)},t.prototype._removeListeners=function(){this._options.pageVisibility&&this._handlePageVisibility(!0),this._options.resize&&this._handlePageResize(!0),this._player.removeEventListener("loadedmetadata",this._onVideoMetadata),this._player.removeEventListener("canplaythrough",this._onVideoCanPlayThrough),this._player.removeEventListener("ended",this._onVideoEnd),this._player.removeEventListener("error",this._onVideoError),this._player.removeEventListener("play",this._onVideoPlay),this._player.removeEventListener("pause",this._onVideoPause),this._player.removeEventListener("progress",this._onVideoProgress),this._player.removeEventListener("timeupdate",this._onTimeUpdate)},t.prototype._replace=function(e){this._player&&this.src&&this.src!==e&&(this._removeListeners(),this._player.pause())},t.prototype._handlePageVisibility=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("undefined"!=typeof document){this._hidden=p.default;var t=c.default;if(void 0!==this._hidden||void 0!==t)return e?void document.removeEventListener(t,this._onPageVisibilityChange,!1):void document.addEventListener(t,this._onPageVisibilityChange,!1)}},t.prototype._handlePageResize=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("undefined"!=typeof window)return e?void window.removeEventListener("resize",this._onVideoResize):void window.addEventListener("resize",this._onVideoResize)},t.prototype.destroy=function(){if(this._player){this._removeListeners(),this._player.pause(),this._player.src="";try{this._player.parentNode&&this.isDescendant(this._player.parentNode,this._player)&&this._player.parentNode.removeChild(this._player)}catch(e){if(this.error)throw new Error("Error remove player element : ",e)}this._player=null}},t.prototype.isDescendant=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},s(t,[{key:"src",set:function(e){this._replace(e),this._player.src=e,e&&this._addListeners()},get:function(){return this._player.src}},{key:"volume",set:function(e){this._player.volume=e},get:function(){return this._player.volume}},{key:"poster",set:function(e){this._player.poster=e}},{key:"loop",set:function(e){this.looping=e,this._player.loop=e}},{key:"controls",set:function(e){this._player.controls=e}},{key:"preload",set:function(e){this._player.preload=e}},{key:"crossOrigin",set:function(e){this._player.crossOrigin=e}},{key:"currentTime",set:function(e){this._player.currentTime=e},get:function(){return this._player.currentTime}},{key:"duration",get:function(){return this._player.duration}}]),t}(l.default);t.default=_,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n(6),a=o(r),s=n(2),u=o(s),l=n(5),d=o(l),c=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e);var n=t.forceInline,o=void 0!==n&&n;return t.youtubeId?(this._player=new a.default(t),this._player._addToDom()):o?t.forceNativePlayer?this._player=new u.default(t):this._player=new d.default(t):this._player=new u.default(t),this._player};t.default=c,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(3),r=o(i);"undefined"!=typeof window&&(window.VideoPlayer=r.default),t.default=r.default,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),l=o(u),d=function(e){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var o=r(this,e.call(this,n));o._onAudioReady=function(){o.audioReady=!0,o.autoplay&&o.play()},o._onAudioPlay=function(e){o.playing=!0,o.paused=!1,o.autoPaused=!1,o._onVideoPlay(e),o._animateFrame||o._render()},o._onAudioPause=function(e){o.playing=!1,o.paused=!0,o._onVideoPause(e),o._cancelAnimateFrame()},o._onAudioEnded=function(){o._onVideoEnd(null),o._cancelAnimateFrame()},o._onAudioError=function(e){o._onVideoError(e)},o._render=function(){var e=o.framerate*o._sound.currentTime;e===o.currentFrame&&0!==e||(o.currentFrame=e,o.currentTime=(e/o.framerate).toFixed(6)),o._animateFrame=requestAnimationFrame(o._render)};var a=o._options,s=a.audioSrc,u=a.loop,l=void 0!==u&&u,d=a.volume,c=void 0===d?1:d;return o.framerate=24,o.loadHAudio(s,l,c),o._player.load(),o}return a(t,e),t.prototype.loadHAudio=function(e,t,n){this._sound=document.createElement("audio"),document.body.appendChild(this._sound),this._sound.src=e,this._sound.loop=t,this._sound.volume=n,this._addAudioListeners(),this._sound.load()},t.prototype.play=function(){this._sound&&this._sound.paused&&this._sound.play()},t.prototype.pause=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._sound&&(this._sound.paused||(this.autoPaused=e,this._sound.pause()))},t.prototype.seek=function(e){this.videoReady&&this._sound&&(this._sound.currentTime=e)},t.prototype._addAudioListeners=function(){this._sound.addEventListener("canplaythrough",this._onAudioReady),this._sound.addEventListener("play",this._onAudioPlay),this._sound.addEventListener("pause",this._onAudioPause),this._sound.addEventListener("ended",this._onAudioEnded),this._sound.addEventListener("error",this._onAudioError)},t.prototype._removeAudioListeners=function(){this._sound.removeEventListener("canplaythrough",this._onAudioReady),this._sound.removeEventListener("play",this._onAudioPlay),this._sound.removeEventListener("pause",this._onAudioPause),this._sound.removeEventListener("ended",this._onAudioEnded),this._sound.removeEventListener("error",this._onAudioError)},t.prototype._replace=function(e){this._player&&this.src&&this.src!==e&&(this._removeListeners(),this._player.pause(),this._sound.pause())},t.prototype._cancelAnimateFrame=function(){this._animateFrame&&(cancelAnimationFrame(this._animateFrame),this._animateFrame=null)},t.prototype.destroy=function(){if(e.prototype.destroy.call(this),this._cancelAnimateFrame(),this._sound){this._removeAudioListeners(),this._sound.pause(),this._sound.src="";try{this._sound.parentNode&&this.isDescendant(this._sound.parentNode,this._sound)&&this._sound.parentNode.removeChild(this._sound)}catch(e){if(this.error)throw new Error("Error remove inline player audio elment ",e)}this._sound=null}},s(t,[{key:"audioSrc",set:function(e){this._sound.src=e}},{key:"audioReady",set:function(e){this._audioReady=e},get:function(){return this._audioReady}},{key:"framerate",set:function(e){this._framerate=e},get:function(){return this._framerate}},{key:"currentFrame",set:function(e){this._currentFrame=e},get:function(){return this._currentFrame}}]),t}(l.default);t.default=d,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(10),d=o(l),c=n(1),h=o(c),p="//www.youtube.com/iframe_api",y="YT",_="onYouTubeIframeAPIReady",f={playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},v=function(e){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var o=r(this,e.call(this,n));if(o._onStateChange=function(e){switch(e.data){case-1:break;case 0:o._onVideoEnd(e.target);break;case 1:o._onVideoPlay(e.target);break;case 2:o._onVideoPause(e.target);break;case 3:break;case 5:}},!document||!window)throw new Error("YoutubePlayer no document or window to createElement video");return o._el=document.createElement("div"),o._el.setAttribute("id","youtube-player"),o._loadPlayer(),o}return a(t,e),t.prototype.setSize=function(e,t){this._player.setSize(e,t)},t.prototype.play=function(){e.prototype.play.call(this),this._player&&this._player.playVideo&&this._player.playVideo()},t.prototype.pause=function(t){e.prototype.pause.call(this,t),this._player&&this._player.pauseVideo&&this._player.pauseVideo()},t.prototype.seek=function(e){this.videoReady&&this._player.seekTo&&this._player.seekTo(e)},t.prototype._getSDK=function(){return window[y]?Promise.resolve(window[y]):new Promise(function(e,t){var n=window[_];window[_]=function(){n&&n(),e(window[y])},(0,d.default)(p,function(e){e&&t(e)})})},t.prototype._loadPlayer=function(){var e=this,t=this._options,n=t.controls,o=void 0===n||n,i=t.volume,r=void 0===i?1:i;this._getSDK().then(function(t){e._player=new t.Player(e._el,{width:e._options.width,height:e._options.height,videoId:e._options.youtubeId,playerVars:s({},f,{controls:o,origin:window?window.location.origin:"",autoplay:e.autoplay}),events:{onReady:function(t){e.videoReady=!0,e.volume=r,e._callbackCanPlay&&e._callbackCanPlay(t)},onStateChange:e._onStateChange,onError:e._onVideoError}})}).catch(function(t){if(e.error)throw new Error("Error - YouTubePlayer - loadPlayer ",t)})},t.prototype.destroy=function(){this._player&&(this.pause(),this._player.destroy(),this._player=null)},u(t,[{key:"width",get:function(){return this.el.getBoundingClientRect().width}},{key:"height",get:function(){return this.el.getBoundingClientRect().height}},{key:"el",get:function(){return this._player&&this._player.getIframe?this._player.getIframe():this._el}},{key:"volume",set:function(e){this._player.setVolume(100*e)},get:function(){return this._player.getVolume()/100}},{key:"currentTime",set:function(e){this.seek(e)},get:function(){return this._player.getCurrentTime()}},{key:"duration",get:function(){return this._player.getDuration()}}]),t}(h.default);t.default=v,e.exports=t.default},function(e,t){"use strict";t.__esModule=!0;var n=function(){var e={hidden:"hidden",mozHidden:"mozHidden",msHidden:"msHidden",webkitHidden:"webkitHidden"},t=void 0;if("undefined"==typeof document)return t;for(var n in e)if("undefined"!=typeof document[n]){t=e[n];break}return t}();t.default=n,e.exports=t.default},function(e,t){"use strict";function n(e,t,n){return Math.max(Math.min(e,n),t)}t.__esModule=!0,t.clamp=n},function(e,t){"use strict";t.__esModule=!0;var n=function(){var e={hidden:"visibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange",webkitHidden:"webkitvisibilitychange"},t=void 0;if("undefined"==typeof document)return t;for(var n in e)if("undefined"!=typeof document[n]){t=e[n];break}return t}();t.default=n,e.exports=t.default},function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function o(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function i(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t&&!t.async),s.src=e,t.attrs&&n(s,t.attrs),t.text&&(s.text=""+t.text);var u="onload"in s?o:i;u(s,r),s.onload||o(s,r),a.appendChild(s)}}]);