const TRANSITION_END_EVENT_NAME = (() => {
	const el = document.createElement('fakeelement');
	const transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd',
	};
	let transitionend;
	for (const t in transitions) {
		if (el.style[t] !== undefined) {
			transitionend = transitions[t];
			break;
		}
	}
	return transitionend;
})();

export default TRANSITION_END_EVENT_NAME;
