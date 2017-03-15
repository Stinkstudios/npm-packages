import React, { Component } from 'react';
import './radio-button.css';

class RadioButton extends Component {
	updateInput = (e) => {
		this.props.updateValue(e.target.value, e.target.name);
	}

	render() {
		// const {
			// name,
			// inputType,
			// ariaRequired,
			// text,
		// } = this.props;

		return (
			<div className="container">
				<input type="radio" name="group1" id="radio-1" />
				<label htmlFor="radio-1"><span className="radio">Coffee</span></label>
			</div>
		);
	}
}

RadioButton.propTypes = {
	// inputType: React.PropTypes.string.isRequired,
	// name: React.PropTypes.string.isRequired,
	// ariaRequired: React.PropTypes.string,
	updateValue: React.PropTypes.func.isRequired,
	// text: React.PropTypes.string,
};


RadioButton.defaultProps = {
	ariaRequired: 'true',
	text: '',
};


export default RadioButton;
