var UA = require('./ua');

var IS_IOS = !!UA.match(/iP[ao]d|iPhone/i);

module.exports = IS_IOS;
