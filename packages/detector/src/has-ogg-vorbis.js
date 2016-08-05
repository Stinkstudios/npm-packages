// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/audio.js
var HAS_OGG_VORBIS = (function () {
  var elem = document.createElement('audio');
  elem.canPlayType('audio/ogg; codec="vorbis"').replace(/^no$/, '');
})();

module.exports = HAS_OGG_VORBIS;


