import React, { Component, PropTypes } from 'react';
import { validateClassNames } from '../../utils/validate-class';

import './fullbleed.css';

class Fullbleed extends Component {
	componentWillMount() {
		const { ratio } = this.props;
		const ratioValues = ratio.split(':');
		this.childRatio = ratioValues[0] / ratioValues[1];
	}

	renderChildren(blockName) {
		const { children } = this.props;
		return React.Children.map(children, (child) =>
			React.cloneElement(child, {
				className: `${blockName}__item o-media__${child.type}`,
			}),
		);
	}

	render() {
		const { addClass, width, height } = this.props;

		const blockName = 'fullbleed';
		const classes = [blockName];
		if (addClass) classes.push(addClass);
		const browserRatio = width / height;
		if (browserRatio < this.childRatio) classes.push('is-below-ratio');
		classes.push('o-media');

		return (
			<div className={classes.join(' ')}>
				{this.renderChildren(blockName)}
			</div>
		);
	}
}

Fullbleed.propTypes = {
	addClass: validateClassNames,
	children: PropTypes.node.isRequired,
	ratio: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

Fullbleed.defaultProps = {
	addClass: null,
};

export default Fullbleed;
