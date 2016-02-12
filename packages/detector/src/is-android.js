var UA = require('./ua');

var IS_ANDROID = !!UA.match(/Android/i);

module.exports = IS_ANDROID;
