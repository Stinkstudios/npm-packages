!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="http://localhost:8080/example",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),r.call(this),this._options=t;var n=this._options,i=n.autoplay,a=void 0!==i&&i,s=n.loop,u=void 0!==s&&s,l=n.resize,d=void 0!==l&&l,c=n.width,h=void 0===c?"100%":c,p=n.height,y=void 0===p?"100%":p,_=n.pageVisibility,f=void 0!==_&&_,v=n.error,m=void 0===v||v;this._options.resize=!this._options.youtubeId&&d,this._options.pageVisibility=f,this._options.width=h,this._options.height=y,this.autoplay=a,this.looping=u,this.playing=!1,this.paused=!0,this.autoPaused=!1,this.videoReady=!1,this.error=m,this._callbackMetadata=this._options.onMetadata,this._callbackCanPlay=this._options.onCanPlay,this._callbackEnd=this._options.onEnd,this._callbackError=this._options.onError,this._callbackPlay=this._options.onPlay,this._callbackPause=this._options.onPause,this._callbackProgress=this._options.onProgress,this._callbackTimeUpdate=this._options.onTimeUpdate}return e.prototype.getPlayer=function(){return this._player},e.prototype.play=function(){this._player&&this._player.playing},e.prototype.pause=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];this._player&&(this.autoPaused=e,this._player.paused)},e.prototype.seek=function(e){this.currentTime=e},e.prototype.setSize=function(e,t){this.width=e,this.height=t},e.prototype._addToDom=function(){this._options.el?this._options.el.appendChild(this.el):document.body.appendChild(this.el)},n(e,[{key:"autoplay",set:function(e){this._autoplay=e},get:function(){return this._autoplay}},{key:"videoReady",set:function(e){this._videoReady=e},get:function(){return this._videoReady}},{key:"resize",set:function(e){this._resize=e},get:function(){return this._resize}},{key:"looping",set:function(e){this._looping=e},get:function(){return this._looping}},{key:"playing",set:function(e){this._playing=e},get:function(){return this._playing}},{key:"paused",set:function(e){this._paused=e},get:function(){return this._paused}},{key:"autoPaused",set:function(e){this._autoPaused=e},get:function(){return this._autoPaused}},{key:"el",get:function(){if(!this._player&&this.error)throw new Error("Error - no el to get");return this._player}},{key:"width",set:function(e){this.el.style.width=e},get:function(){return this.el.videoWidth}},{key:"height",set:function(e){this.el.style.height=e},get:function(){return this.el.videoHeight}}]),e}(),r=function(){var e=this;this._onVideoMetadata=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];e._options.resize||e.setSize(e._options.width,e._options.height),e._addToDom(),e._options.resize&&e._onVideoResize(),e._callbackMetadata&&e._callbackMetadata(t)},this._onVideoCanPlayThrough=function(t){e._player.removeEventListener("canplaythrough",e._onVideoCanPlayThrough),e.videoReady=!0,e.autoplay&&e.play(),e._callbackCanPlay&&e._callbackCanPlay(t)},this._onVideoEnd=function(t){e.playing=!1,e.paused=!0,!e._player.loop&&e.looping&&e.play(),e._callbackEnd&&e._callbackEnd(t)},this._onVideoError=function(t){if(e._callbackError&&e._callbackError(t),e.error)throw new Error("Error - component-video - ",t)},this._onVideoPlay=function(t){e.playing=!0,e.paused=!1,e.autoPaused=!1,e._callbackPlay&&e._callbackPlay(t)},this._onVideoPause=function(t){e.playing=!1,e.paused=!0,e._callbackPause&&e._callbackPause(t)},this._onVideoProgress=function(t){e._callbackProgress&&e._callbackProgress(t)},this._onVideoResize=function(){var t=e.el;if((!t||!window)&&e.error)throw new Error("player isnt in dom. So cant resize");var o=e.width,n=e.height,i=e._options.el?e._options.el.offsetWidth:window.innerWidth,r=e._options.el?e._options.el.offsetHeight:window.innerHeight,a=Math.max(i/o,r/n);t.style.cssText="width:"+Math.ceil(o*a)+"px; height:"+Math.ceil(n*a)+"px; position:absolute; top:"+Math.ceil((r-n*a)/2)+"px; left:"+Math.ceil((i-o*a)/2)+"px;"},this._onTimeUpdate=function(t){e._callbackTimeUpdate&&e._callbackTimeUpdate(t)}};t["default"]=i,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(1),l=n(u),d=o(8),c=n(d),h=o(7),p=n(h),y=function(e){function t(){var o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t);var n=r(this,e.call(this,o));if(n._onPageVisibilityChange=function(){document&&(document[n._hidden]?n.paused||n.pause(!n.paused):n.autoPaused&&n.play())},!document||!window)throw new Error("BasicPlayer no document or window to createElement video");n._player=document.createElement("video");var a=n._options,s=a.src,u=a.loop,l=void 0!==u&&u,d=a.controls,c=void 0===d||d,h=a.volume,p=void 0===h?1:h,y=a.preload,_=void 0===y?"auto":y,f=a.crossOrigin,v=void 0===f?null:f;return n.loop=l,n.controls=c,n.volume=p,n.preload=_,v&&(n.crossOrigin=v),n._player.autoplay=n.autoplay,n.src=s,n}return a(t,e),t.prototype.play=function(){e.prototype.play.call(this),this._player.play()},t.prototype.pause=function(t){e.prototype.pause.call(this,t),this._player.pause()},t.prototype.seek=function(e){this.videoReady&&(this.currentTime=e)},t.prototype._addListeners=function(){this._removeListeners(),this._options.pageVisibility&&this._handlePageVisibility(),this._options.resize&&this._handlePageResize(),this._player.addEventListener("loadedmetadata",this._onVideoMetadata),this._player.addEventListener("canplaythrough",this._onVideoCanPlayThrough),this._player.addEventListener("ended",this._onVideoEnd),this._player.addEventListener("error",this._onVideoError),this._player.addEventListener("play",this._onVideoPlay),this._player.addEventListener("pause",this._onVideoPause),this._player.addEventListener("progress",this._onVideoProgress),this._player.addEventListener("timeupdate",this._onTimeUpdate)},t.prototype._removeListeners=function(){this._options.pageVisibility&&this._handlePageVisibility(!0),this._options.resize&&this._handlePageResize(!0),this._player.removeEventListener("loadedmetadata",this._onVideoMetadata),this._player.removeEventListener("canplaythrough",this._onVideoCanPlayThrough),this._player.removeEventListener("ended",this._onVideoEnd),this._player.removeEventListener("error",this._onVideoError),this._player.removeEventListener("play",this._onVideoPlay),this._player.removeEventListener("pause",this._onVideoPause),this._player.removeEventListener("progress",this._onVideoProgress),this._player.removeEventListener("timeupdate",this._onTimeUpdate)},t.prototype._replace=function(e){this._player&&this.src&&this.src!==e&&(this._removeListeners(),this._player.pause())},t.prototype._handlePageVisibility=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];if(document){this._hidden=p["default"];var t=c["default"];if(void 0!==this._hidden||void 0!==t)return e?void document.removeEventListener(t,this._onPageVisibilityChange,!1):void document.addEventListener(t,this._onPageVisibilityChange,!1)}},t.prototype._handlePageResize=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];if(window)return e?void window.removeEventListener("resize",this._onVideoResize):void window.addEventListener("resize",this._onVideoResize)},t.prototype.destroy=function(){if(this._player){this._removeListeners(),this._player.pause(),this._player.src="";try{this._player.parentNode&&this.isDescendant(this._player.parentNode,this._player)&&this._player.parentNode.removeChild(this._player)}catch(e){if(this.error)throw new Error("Error remove player element : ",e)}this._player=null}},t.prototype.isDescendant=function(e,t){for(var o=t.parentNode;null!==o;){if(o===e)return!0;o=o.parentNode}return!1},s(t,[{key:"src",set:function(e){this._replace(e),this._player.src=e,e&&this._addListeners()},get:function(){return this._player.src}},{key:"volume",set:function(e){this._player.volume=e},get:function(){return this._player.volume}},{key:"loop",set:function(e){this.looping=e,this._player.loop=e}},{key:"controls",set:function(e){this._player.controls=e}},{key:"preload",set:function(e){this._player.preload=e}},{key:"crossOrigin",set:function(e){this._player.crossOrigin=e}},{key:"currentTime",set:function(e){this._player.currentTime=e},get:function(){return this._player.currentTime}},{key:"duration",get:function(){return this._player.duration}}]),t}(l["default"]);t["default"]=y,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=o(6),a=n(r),s=o(2),u=n(s),l=o(5),d=n(l),c=function h(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,h);var t=e.forceInline,o=void 0!==t&&t;return e.youtubeId?(this._player=new a["default"](e),this._player._addToDom()):o?e.forceNativePlayer?this._player=new u["default"](e):this._player=new d["default"](e):this._player=new u["default"](e),this._player};t["default"]=c,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=o(3),r=n(i);t["default"]=r["default"],void 0!==window&&(window.VideoPlayer=r["default"]),e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(2),l=n(u),d=function(e){function t(){var o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t);var n=r(this,e.call(this,o));n._onAudioReady=function(){n.audioReady=!0,n.autoplay&&n.play()},n._onAudioPlay=function(){n.playing=!0,n.paused=!1,n.autoPaused=!1,n._animateFrame||n._render()},n._onAudioPause=function(){n.playing=!1,n.paused=!0,n._cancelAnimateFrame()},n._onAudioEnded=function(){n._onVideoEnd(null),n._cancelAnimateFrame()},n._render=function(){var e=0|n.framerate*n._sound.currentTime;e===n.currentFrame&&0!==e||(n.currentFrame=e,n.currentTime=(e/n.framerate).toFixed(6)),n._animateFrame=requestAnimationFrame(n._render)};var a=n._options,s=a.audioSrc,u=a.loop,l=void 0!==u&&u,d=a.volume,c=void 0===d?1:d;return n.framerate=24,n.loadHAudio(s,l,c),n._player.load(),n}return a(t,e),t.prototype.loadHAudio=function(e,t,o){this._sound=document.createElement("audio"),document.body.appendChild(this._sound),this._sound.src=e,this._sound.loop=t,this._sound.volume=o,this._addAudioListeners(),this._sound.load()},t.prototype.play=function(){this._sound&&this._sound.paused&&this._sound.play()},t.prototype.pause=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];this._sound&&(this._sound.paused||(this.autoPaused=e,this._sound.pause()))},t.prototype._addAudioListeners=function(){this._sound.addEventListener("canplaythrough",this._onAudioReady),this._sound.addEventListener("play",this._onAudioPlay),this._sound.addEventListener("pause",this._onAudioPause),this._sound.addEventListener("ended",this._onAudioEnded)},t.prototype._removeAudioListeners=function(){this._sound.removeEventListener("canplaythrough",this._onAudioReady),this._sound.removeEventListener("play",this._onAudioPlay),this._sound.removeEventListener("pause",this._onAudioPause),this._sound.removeEventListener("ended",this._onAudioEnded)},t.prototype._replace=function(e){this._player&&this.src&&this.src!==e&&(this._removeListeners(),this._player.pause(),this._sound.pause())},t.prototype._cancelAnimateFrame=function(){this._animateFrame&&(cancelAnimationFrame(this._animateFrame),this._animateFrame=null)},t.prototype.destroy=function(){if(e.prototype.destroy.call(this),this._cancelAnimateFrame(),this._sound){this._removeAudioListeners(),this._sound.pause(),this._sound.src="";try{this._sound.parentNode&&this.isDescendant(this._sound.parentNode,this._sound)&&this._sound.parentNode.removeChild(this._sound)}catch(t){if(this.error)throw new Error("Error remove inline player audio elment ",t)}this._sound=null}},s(t,[{key:"audioSrc",set:function(e){this._sound.src=e}},{key:"audioReady",set:function(e){this._audioReady=e},get:function(){return this._audioReady}},{key:"framerate",set:function(e){this._framerate=e},get:function(){return this._framerate}},{key:"currentFrame",set:function(e){this._currentFrame=e},get:function(){return this._currentFrame}}]),t}(l["default"]);t["default"]=d,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(9),d=n(l),c=o(1),h=n(c),p="//www.youtube.com/iframe_api",y="YT",_="onYouTubeIframeAPIReady",f={playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},v=function(e){function t(){var o=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t);var n=r(this,e.call(this,o));if(n._onStateChange=function(e){switch(e.data){case-1:break;case 0:n._onVideoEnd(e.target);break;case 1:n._onVideoPlay(e.target);break;case 2:n._onVideoPause(e.target);break;case 3:break;case 5:}},!document||!window)throw new Error("YoutubePlayer no document or window to createElement video");return n._el=document.createElement("div"),n._el.setAttribute("id","youtube-player"),n._loadPlayer(),n}return a(t,e),t.prototype.setSize=function(e,t){this._player.setSize(e,t)},t.prototype.play=function(){e.prototype.play.call(this),this._player&&this._player.playVideo&&this._player.playVideo()},t.prototype.pause=function(t){e.prototype.pause.call(this,t),this._player&&this._player.pauseVideo&&this._player.pauseVideo()},t.prototype.seek=function(e){this.videoReady&&this._player.seekTo&&this._player.seekTo(e)},t.prototype._getSDK=function(){return window[y]?Promise.resolve(window[y]):new Promise(function(e,t){var o=window[_];window[_]=function(){o&&o(),e(window[y])},(0,d["default"])(p,function(e){e&&t(e)})})},t.prototype._loadPlayer=function(){var e=this,t=this._options,o=t.controls,n=void 0===o||o,i=t.volume,r=void 0===i?1:i;this._getSDK().then(function(t){e._player=new t.Player(e._el,{width:e._options.width,height:e._options.height,videoId:e._options.youtubeId,playerVars:s({},f,{controls:n,origin:window?window.location.origin:"",autoplay:e.autoplay}),events:{onReady:function(t){e.videoReady=!0,e.volume=r,e._callbackCanPlay&&e._callbackCanPlay(t)},onStateChange:e._onStateChange,onError:e._onVideoError}})})["catch"](function(t){if(e.error)throw new Error("Error - YouTubePlayer - loadPlayer ",t)})},t.prototype.destroy=function(){this._player&&(this.pause(),this._player.destroy(),this._player=null)},u(t,[{key:"width",get:function(){return this.el.getBoundingClientRect().width}},{key:"height",get:function(){return this.el.getBoundingClientRect().height}},{key:"el",get:function(){return this._player&&this._player.getIframe?this._player.getIframe():this._el}},{key:"volume",set:function(e){this._player.setVolume(100*e)},get:function(){return this._player.getVolume()/100}},{key:"currentTime",set:function(e){this.seek(e)},get:function(){return this._player.getCurrentTime()}},{key:"duration",get:function(){return this._player.getDuration()}}]),t}(h["default"]);t["default"]=v,e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0;var o=function(){var e={hidden:"hidden",mozHidden:"mozHidden",msHidden:"msHidden",webkitHidden:"webkitHidden"},t=void 0;if(!document)return t;for(var o in e)if("undefined"!=typeof document[o]){t=e[o];break}return t}();t["default"]=o,e.exports=t["default"]},function(e,t){"use strict";t.__esModule=!0;var o=function(){var e={hidden:"visibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange",webkitHidden:"webkitvisibilitychange"},t=void 0;if(!document)return t;for(var o in e)if("undefined"!=typeof document[o]){t=e[o];break}return t}();t["default"]=o,e.exports=t["default"]},function(e,t){function o(e,t){for(var o in t)e.setAttribute(o,t[o])}function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function i(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t&&!t.async),s.src=e,t.attrs&&o(s,t.attrs),t.text&&(s.text=""+t.text);var u="onload"in s?n:i;u(s,r),s.onload||n(s,r),a.appendChild(s)}}]);