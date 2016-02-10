const HAS_FULLSCREEN = (() => {
	const element = document.body;
	return !!(
		element.requestFullScreen ||
		element.webkitRequestFullScreen ||
		element.mozRequestFullScreen ||
		element.msRequestFullscreen
	);
})();

export default HAS_FULLSCREEN;
