var UA = require('./ua');
var IS_ANDROID = require('./is-android');
var IS_IOS = require('./is-ios');

var IS_PHONE = (IS_ANDROID || IS_IOS) && (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(UA.toLowerCase())); // eslint-disable-line max-len

module.exports = IS_PHONE;
