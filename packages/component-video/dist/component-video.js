!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="http://localhost:8080/example",t(0)}([function(e,t,n){e.exports=n(47)},function(e,t){var n=navigator.userAgent||navigator.vendor||window.opera;e.exports=n},function(e,t,n){var o=n(1),i=n(3),r=!!o.match(/iP[ao]d|iPhone/i)&&!i;e.exports=r},function(e,t,n){var o=n(1),i=/Windows Phone/i.test(o);e.exports=i},function(e,t,n){var o=n(1),i=n(3),r=!!o.match(/Android/i)&&!i;e.exports=r},function(e,t,n){var o=n(2),i=n(6),r=function(){if(o&&i<8)return!1;try{if(!window.WebGLRenderingContext)return!1;var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)}catch(n){return!1}return!0}();e.exports=r},function(e,t,n){var o=n(1),i=function(){if(/iP[ao]d|iPhone/i.test(o)){var e=o.match(/OS (\d+)_(\d+)/i);if(e&&e.length>2)return parseFloat(e[1]+"."+e[2])}return-1}();e.exports=i},function(e,t,n){var o=n(8),i=n(9),r=!o&&!i;e.exports=r},function(e,t,n){var o=n(1),i=n(4),r=n(2),a=n(3),s=(i||r||a)&&/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(o.toLowerCase());e.exports=s},function(e,t,n){var o=n(1),i=n(4),r=n(2),a=n(3),s=(i||r||a)&&/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(o.toLowerCase());e.exports=s},function(e,t,n){var o=n(16),i=n(15),r=function(){var e=document.createElement("video"),t=!!e.canPlayType;return t&&!(o||i)}();e.exports=r},function(e,t,n){var o=n(1),i=function(){var e=-1;return/MSIE (\d+\.\d+);/.test(o)?e=parseInt(RegExp.$1,10):/Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(o)&&(e=parseInt(RegExp.$3,10)),e}();e.exports=i},function(e,t,n){var o=n(1),i=function(){var e=o.match(/Android.*AppleWebKit\/([\d.]+)/);return!!e&&e[1]<537}();e.exports=i},function(e,t,n){var o=n(1),i=/Chrome/.test(o);e.exports=i},function(e,t,n){var o=n(1),i=/Firefox/.test(o);e.exports=i},function(e,t,n){var o=n(1),i=!!o.match(/iPhone/i);e.exports=i},function(e,t,n){var o=n(1),i=!!o.match(/iPod/i);e.exports=i},function(e,t,n){var o=n(7),i=!o;e.exports=i},function(e,t){var n=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI||1;e.exports=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n(this,e),r.call(this),this._options=t;var o=this._options,i=o.autoplay,a=void 0!==i&&i,s=o.loop,u=void 0!==s&&s,l=o.resize,d=void 0!==l&&l,c=o.width,p=void 0===c?"100%":c,h=o.height,f=void 0===h?"100%":h,_=o.pageVisibility,y=void 0!==_&&_,v=o.error,m=void 0===v||v;this._options.resize=!this._options.youtubeId&&d,this._options.pageVisibility=y,this._options.width=p,this._options.height=f,this.autoplay=a,this.looping=u,this.playing=!1,this.paused=!0,this.autoPaused=!1,this.videoReady=!1,this.error=m,this._callbackMetadata=this._options.onMetadata,this._callbackCanPlay=this._options.onCanPlay,this._callbackEnd=this._options.onEnd,this._callbackError=this._options.onError,this._callbackPlay=this._options.onPlay,this._callbackPause=this._options.onPause,this._callbackProgress=this._options.onProgress,this._callbackTimeUpdate=this._options.onTimeUpdate}return e.prototype.getPlayer=function(){return this._player},e.prototype.play=function(){this._player&&this._player.playing},e.prototype.pause=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];this._player&&(this.autoPaused=e,this._player.paused)},e.prototype.seek=function(e){this.currentTime=e},e.prototype.setSize=function(e,t){this.width=e,this.height=t},e.prototype._addToDom=function(){this._options.el?this._options.el.appendChild(this.el):document.body.appendChild(this.el)},o(e,[{key:"autoplay",set:function(e){this._autoplay=e},get:function(){return this._autoplay}},{key:"videoReady",set:function(e){this._videoReady=e},get:function(){return this._videoReady}},{key:"resize",set:function(e){this._resize=e},get:function(){return this._resize}},{key:"looping",set:function(e){this._looping=e},get:function(){return this._looping}},{key:"playing",set:function(e){this._playing=e},get:function(){return this._playing}},{key:"paused",set:function(e){this._paused=e},get:function(){return this._paused}},{key:"autoPaused",set:function(e){this._autoPaused=e},get:function(){return this._autoPaused}},{key:"el",get:function(){if(!this._player&&this.error)throw new Error("Error - no el to get");return this._player}},{key:"width",set:function(e){this.el.style.width=e},get:function(){return this.el.videoWidth}},{key:"height",set:function(e){this.el.style.height=e},get:function(){return this.el.videoHeight}}]),e}(),r=function(){var e=this;this._onVideoMetadata=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];e._options.resize||e.setSize(e._options.width,e._options.height),e._addToDom(),e._options.resize&&e._onVideoResize(),e._callbackMetadata&&e._callbackMetadata(t)},this._onVideoCanPlayThrough=function(t){e._player.removeEventListener("canplaythrough",e._onVideoCanPlayThrough),e.videoReady=!0,e.autoplay&&e.play(),e._callbackCanPlay&&e._callbackCanPlay(t)},this._onVideoEnd=function(t){e.playing=!1,e.paused=!0,!e._player.loop&&e.looping&&e.play(),e._callbackEnd&&e._callbackEnd(t)},this._onVideoError=function(t){if(e._callbackError&&e._callbackError(t),e.error)throw new Error("Error - component-video - ",t)},this._onVideoPlay=function(t){e.playing=!0,e.paused=!1,e.autoPaused=!1,e._callbackPlay&&e._callbackPlay(t)},this._onVideoPause=function(t){e.playing=!1,e.paused=!0,e._callbackPause&&e._callbackPause(t)},this._onVideoProgress=function(t){e._callbackProgress&&e._callbackProgress(t)},this._onVideoResize=function(){var t=e.el;if((!t||!window)&&e.error)throw new Error("player isnt in dom. So cant resize");var n=e.width,o=e.height,i=e._options.el?e._options.el.offsetWidth:window.innerWidth,r=e._options.el?e._options.el.offsetHeight:window.innerHeight,a=Math.max(i/n,r/o);t.style.cssText="width:"+Math.ceil(n*a)+"px; height:"+Math.ceil(o*a)+"px; position:absolute; top:"+Math.ceil((r-o*a)/2)+"px; left:"+Math.ceil((i-n*a)/2)+"px;"},this._onTimeUpdate=function(t){e._callbackTimeUpdate&&e._callbackTimeUpdate(t)}};t["default"]=i,e.exports=t["default"]},function(e,t,n){(function(o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(19),d=i(l),c=o.browser?n(32):null,p=function(e){function t(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,t);var o=a(this,e.call(this,n));if(o._onPageVisibilityChange=function(){document&&(document[o._hidden]?o.paused||o.pause(!o.paused):o.autoPaused&&o.play())},!document||!window)throw new Error("BasicPlayer no document or window to createElement video");o._player=document.createElement("video");var i=o._options,s=i.src,u=i.loop,l=void 0!==u&&u,d=i.controls,c=void 0===d||d,p=i.volume,h=void 0===p?1:p,f=i.preload,_=void 0===f?"auto":f,y=i.crossOrigin,v=void 0===y?null:y;return o.loop=l,o.controls=c,o.volume=h,o.preload=_,v&&(o.crossOrigin=v),o._player.autoplay=o.autoplay,o.src=s,o}return s(t,e),t.prototype.play=function(){e.prototype.play.call(this),this._player.play()},t.prototype.pause=function(t){e.prototype.pause.call(this,t),this._player.pause()},t.prototype.seek=function(e){this.videoReady&&(this.currentTime=e)},t.prototype._addListeners=function(){this._removeListeners(),this._options.pageVisibility&&this._handlePageVisibility(),this._options.resize&&this._handlePageResize(),this._player.addEventListener("loadedmetadata",this._onVideoMetadata),this._player.addEventListener("canplaythrough",this._onVideoCanPlayThrough),this._player.addEventListener("ended",this._onVideoEnd),this._player.addEventListener("error",this._onVideoError),this._player.addEventListener("play",this._onVideoPlay),this._player.addEventListener("pause",this._onVideoPause),this._player.addEventListener("progress",this._onVideoProgress),this._player.addEventListener("timeupdate",this._onTimeUpdate)},t.prototype._removeListeners=function(){this._options.pageVisibility&&this._handlePageVisibility(!0),this._options.resize&&this._handlePageResize(!0),this._player.removeEventListener("loadedmetadata",this._onVideoMetadata),this._player.removeEventListener("canplaythrough",this._onVideoCanPlayThrough),this._player.removeEventListener("ended",this._onVideoEnd),this._player.removeEventListener("error",this._onVideoError),this._player.removeEventListener("play",this._onVideoPlay),this._player.removeEventListener("pause",this._onVideoPause),this._player.removeEventListener("progress",this._onVideoProgress),this._player.removeEventListener("timeupdate",this._onTimeUpdate)},t.prototype._replace=function(e){this._player&&this.src&&this.src!==e&&(this._removeListeners(),this._player.pause())},t.prototype._handlePageVisibility=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];if(c){this._hidden=c.HIDDEN_PROPERTY_NAME;var t=c.VISIBILITY_CHANGE_EVENT_NAME;if(void 0!==this._hidden||void 0!==t)return e?void document.removeEventListener(t,this._onPageVisibilityChange,!1):void document.addEventListener(t,this._onPageVisibilityChange,!1)}},t.prototype._handlePageResize=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];if(window)return e?void window.removeEventListener("resize",this._onVideoResize):void window.addEventListener("resize",this._onVideoResize)},t.prototype.destroy=function(){if(this._player){this._removeListeners(),this._player.pause();try{this._player.parentNode.removeChild(this._player)}catch(e){if(this.error)throw new Error("Error remove player element : ",e)}this._player=null}},u(t,[{key:"src",set:function(e){this._replace(e),this._player.src=e,this._addListeners()},get:function(){return this._player.src}},{key:"volume",set:function(e){this._player.volume=e},get:function(){return this._player.volume}},{key:"loop",set:function(e){this.looping=e,this._player.loop=e}},{key:"controls",set:function(e){this._player.controls=e}},{key:"preload",set:function(e){this._player.preload=e}},{key:"crossOrigin",set:function(e){this._player.crossOrigin=e}},{key:"currentTime",set:function(e){this._player.currentTime=e},get:function(){return this._player.currentTime}},{key:"duration",get:function(){return this._player.duration}}]),t}(d["default"]);t["default"]=p,e.exports=t["default"]}).call(t,n(51))},function(e,t,n){var o=n(1),i=n(4),r=i?parseFloat(o.slice(o.indexOf("Android")+8)):-1;e.exports=r},function(e,t,n){var o=n(8),i=n(9),r=function(){return o?"phone":i?"tablet":"desktop"}();e.exports=r},function(e,t,n){var o=n(1),i=n(14),r=function(){return i?parseFloat(o.slice(o.indexOf("Firefox")+8)):-1}();e.exports=r},function(e,t){var n=!!window.CanvasRenderingContext2D;e.exports=n},function(e,t){var n=function(){var e=document.body;return!!(e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen)}();e.exports=n},function(e,t,n){var o=n(17),i=o;e.exports=i},function(e,t){var n=!(!history||!history.pushState);e.exports=n},function(e,t,n){var o=n(10),i=n(5),r=n(6),a=!o&&i&&r>=8;e.exports=a},function(e,t,n){var o=n(7),i=o;e.exports=i},function(e,t){var n=!!("ontouchstart"in window||"onmsgesturechange"in window||window.DocumentTouch&&document instanceof window.DocumentTouch);e.exports=n},function(e,t){var n=function(){var e=void 0,t={hidden:"hidden",mozHidden:"mozHidden",msHidden:"msHidden",webkitHidden:"webkitHidden"};for(var n in t)if("undefined"!=typeof document[n]){e=t[n];break}return e}();e.exports=n},function(e,t,n){var o={ANDROID_VERSION:n(21),DEVICE_TYPE:n(22),FIREFOX_VERSION:n(23),HAS_CANVAS:n(24),HAS_FULLSCREEN:n(25),HAS_GYRO:n(26),HAS_HISTORY:n(27),HAS_INLINE_VIDEO_FORCED:n(28),HAS_INLINE_VIDEO:n(10),HAS_MOUSE_MOVE:n(29),HAS_TOUCH:n(30),HAS_WEBGL:n(5),HIDDEN_PROPERTY_NAME:n(31),IE_VERSION:n(11),IOS_VERSION:n(6),IS_ANDROID_BROWSER:n(12),IS_ANDROID:n(4),IS_CHROME_IOS:n(33),IS_CHROME:n(13),IS_DESKTOP:n(7),IS_FIREFOX:n(14),IS_IE:n(34),IS_IOS:n(2),IS_IPAD:n(35),IS_IPHONE:n(15),IS_IPOD:n(16),IS_LINUX:n(36),IS_MOBILE:n(17),IS_OPERA:n(37),IS_OSX:n(38),IS_PHONE:n(8),IS_RETINA:n(39),IS_SAFARI_IOS:n(40),IS_SAFARI:n(41),IS_TABLET:n(9),IS_WINDOWS_PHONE:n(3),IS_WINDOWS:n(42),MAX_CUBE_TEXTURE_SIZE:n(43),PIXEL_RATIO:n(18),TRANSITION_END_EVENT_NAME:n(44),UA:n(1),VISIBILITY_CHANGE_EVENT_NAME:n(45)};window.Detector=o,e.exports=o},function(e,t,n){var o=n(1),i=n(2),r=i&&/CriOS/.test(o);e.exports=r},function(e,t,n){var o=n(11),i=o>-1;e.exports=i},function(e,t,n){var o=n(1),i=!!o.match(/iPad/i);e.exports=i},function(e,t,n){var o=n(1),i=/Linux/.test(o);e.exports=i},function(e,t,n){var o=n(1),i=/Opera/.test(o);e.exports=i},function(e,t,n){var o=n(1),i=n(2),r=!i&&/Mac OS/.test(o);e.exports=r},function(e,t,n){var o=n(18),i=o>1;e.exports=i},function(e,t,n){var o=n(1),i=n(2),r=i&&/AppleWebKit/.test(o);e.exports=r},function(e,t,n){var o=n(1),i=n(12),r=n(13),a=!i&&!r&&/Safari/.test(o);e.exports=a},function(e,t,n){var o=n(1),i=n(3),r=!i&&/Windows/.test(o);e.exports=r},function(e,t,n){var o=n(5),i=function(){if(o)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)}catch(n){return}}();e.exports=i},function(e,t){var n=function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var o in n)if(void 0!==t.style[o]){e=n[o];break}return e}();e.exports=n},function(e,t){var n=function(){var e=void 0,t={hidden:"visibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange",webkitHidden:"webkitvisibilitychange"};for(var n in t)if("undefined"!=typeof document[n]){e=t[n];break}return e}();e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var r=n(49),a=o(r),s=n(20),u=o(s),l=n(48),d=o(l),c=function p(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,p);var t=e.forceInline,n=void 0!==t&&t;return e.youtubeId?(this._player=new a["default"](e),this._player._addToDom()):n?e.forceNativePlayer?this._player=new u["default"](e):this._player=new d["default"](e):this._player=new u["default"](e),this._player};t["default"]=c,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(46),r=o(i);t["default"]=r["default"],void 0!==window&&(window.VideoPlayer=r["default"]),e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(20),l=o(u),d=function(e){function t(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t);var o=r(this,e.call(this,n));o._onAudioReady=function(){o.audioReady=!0,o.autoplay&&o.play()},o._onAudioPlay=function(){o.playing=!0,o.paused=!1,o.autoPaused=!1,o._animateFrame||o._render()},o._onAudioPause=function(){o.playing=!1,o.paused=!0,o._cancelAnimateFrame()},o._onAudioEnded=function(){o._cancelAnimateFrame()},o._render=function(){var e=0|o.framerate*o._sound.currentTime;e===o.currentFrame&&0!==e||(o.currentFrame=e,o.currentTime=(e/o.framerate).toFixed(6)),o._animateFrame=requestAnimationFrame(o._render)};var a=o._options,s=a.audioSrc,u=a.loop,l=void 0!==u&&u,d=a.volume,c=void 0===d?1:d;return o.framerate=24,o.loadHAudio(s,l,c),o._player.load(),o}return a(t,e),t.prototype.loadHAudio=function(e,t,n){this._sound=document.createElement("audio"),document.body.appendChild(this._sound),window._sound=this._sound,this._sound.src=e,this._sound.loop=t,this._sound.volume=n,this._addAudioListeners(),this._sound.load()},t.prototype.play=function(){this._player&&(this._player.playing||this._sound.play())},t.prototype.pause=function(){var e=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];this._player&&(this._player.paused||(this.autoPaused=e,this._sound.pause()))},t.prototype._addAudioListeners=function(){this._sound.addEventListener("canplaythrough",this._onAudioReady),this._sound.addEventListener("play",this._onAudioPlay),this._sound.addEventListener("pause",this._onAudioPause),this._sound.addEventListener("ended",this._onAudioEnded)},t.prototype._removeAudioListeners=function(){this._sound.removeEventListener("canplaythrough",this._onAudioReady),this._sound.removeEventListener("play",this._onAudioPlay),this._sound.removeEventListener("pause",this._onAudioPause),this._sound.removeEventListener("ended",this._onAudioEnded)},t.prototype._cancelAnimateFrame=function(){this._animateFrame&&(cancelAnimationFrame(this._animateFrame),this._animateFrame=null)},t.prototype.destroy=function(){if(e.prototype.destroy.call(this),this._cancelAnimateFrame(),this._sound){this._removeAudioListeners(),this.sound.pause();try{this._sound.parentNode.removeChild(this._sound)}catch(t){if(this.error)throw new Error("Error remove inline player audio elment ",t)}this._sound=null}},s(t,[{key:"audioReady",set:function(e){this._audioReady=e},get:function(){return this._audioReady}},{key:"framerate",set:function(e){this._framerate=e},get:function(){return this._framerate}},{key:"currentFrame",set:function(e){this._currentFrame=e},get:function(){return this._currentFrame}}]),t}(l["default"]);t["default"]=d,e.exports=t["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(50),d=o(l),c=n(19),p=o(c),h="//www.youtube.com/iframe_api",f="YT",_="onYouTubeIframeAPIReady",y={playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},v=function(e){function t(){var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,t);var o=r(this,e.call(this,n));if(o._onStateChange=function(e){switch(e.data){case-1:break;case 0:o._onVideoEnd(e.target);break;case 1:o._onVideoPlay(e.target);break;case 2:o._onVideoPause(e.target);break;case 3:break;case 5:}},!document||!window)throw new Error("YoutubePlayer no document or window to createElement video");return o._el=document.createElement("div"),o._el.setAttribute("id","youtube-player"),o._loadPlayer(),o}return a(t,e),t.prototype.setSize=function(e,t){this._player.setSize(e,t)},t.prototype.play=function(){e.prototype.play.call(this),this._player.playVideo()},t.prototype.pause=function(t){e.prototype.pause.call(this,t),this._player.pauseVideo()},t.prototype.seek=function(e){this.videoReady&&this._player.seekTo&&this._player.seekTo(e)},t.prototype._getSDK=function(){return window[f]?Promise.resolve(window[f]):new Promise(function(e,t){var n=window[_];window[_]=function(){n&&n(),e(window[f])},(0,d["default"])(h,function(e){e&&t(e)})})},t.prototype._loadPlayer=function(){var e=this,t=this._options,n=t.controls,o=void 0===n||n,i=t.volume,r=void 0===i?1:i;this._getSDK().then(function(t){e._player=new t.Player(e._el,{width:e._options.width,height:e._options.height,videoId:e._options.youtubeId,playerVars:s({},y,{controls:o,origin:window?window.location.origin:"",autoplay:e.autoplay}),events:{onReady:function(t){e.videoReady=!0,e.volume=r,e._callbackCanPlay&&e._callbackCanPlay(t)},onStateChange:e._onStateChange,onError:e._onVideoError}})})["catch"](function(t){if(e.error)throw new Error("Error - YouTubePlayer - loadPlayer ",t)})},t.prototype.destroy=function(){this._player&&(this.pause(),this._player.destroy(),this._player=null)},u(t,[{key:"width",get:function(){return this.el.getBoundingClientRect().width}},{key:"height",get:function(){return this.el.getBoundingClientRect().height}},{key:"el",get:function(){return this._player&&this._player.getIframe?this._player.getIframe():this._el}},{key:"volume",set:function(e){this._player.setVolume(100*e)},get:function(){return this._player.getVolume()/100}},{key:"currentTime",set:function(e){this.seek(e)},get:function(){return this._player.getCurrentTime()}},{key:"duration",get:function(){return this._player.getDuration()}}]),t}(p["default"]);t["default"]=v,e.exports=t["default"]},function(e,t){function n(e,t){for(var n in t)e.setAttribute(n,t[n])}function o(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function i(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t&&!t.async),s.src=e,t.attrs&&n(s,t.attrs),t.text&&(s.text=""+t.text);var u="onload"in s?o:i;u(s,r),s.onload||o(s,r),a.appendChild(s)}},function(e,t){function n(){l&&a&&(l=!1,a.length?u=a.concat(u):d=-1,u.length&&o())}function o(){if(!l){var e=setTimeout(n);l=!0;for(var t=u.length;t;){for(a=u,u=[];++d<t;)a&&a[d].run();d=-1,t=u.length}a=null,l=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function r(){}var a,s=e.exports={},u=[],l=!1,d=-1;s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new i(e,t)),1!==u.length||l||setTimeout(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=r,s.addListener=r,s.once=r,s.off=r,s.removeListener=r,s.removeAllListeners=r,s.emit=r,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}}]);