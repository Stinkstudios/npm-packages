'use strict';

exports.__esModule = true;

var _VideoPlayer = require('./VideoPlayer');

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _VideoPlayer2.default;


if (window !== undefined) {
	window.VideoPlayer = _VideoPlayer2.default;
}
module.exports = exports['default'];