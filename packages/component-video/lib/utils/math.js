"use strict";

exports.__esModule = true;
exports.clamp = clamp;
function clamp(t, a, b) {
	// eslint-disable-line import/prefer-default-export
	return Math.max(Math.min(t, b), a);
}