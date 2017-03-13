import React, { Component } from 'react';
import './input.css';

class Input extends Component {
	updateInput = (e) => {
		this.props.updateValue(e.target.value, e.target.name);
	}

	render() {
		const {
			halfSize,
			name,
			inputType,
			placeholder,
			inputAutoComplete,
			ariaRequired,
		} = this.props;
		return (
			<input
				className={`form__input ${halfSize ? 'form__input--half' : ''}`}
				name={name}
				type={inputType}
				placeholder={placeholder}
				autoComplete={inputAutoComplete}
				aria-required={ariaRequired}
				onChange={this.updateInput}
			/>
		);
	}
}

Input.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'checkbox', 'radio']).isRequired,
	inputAutoComplete: React.PropTypes.oneOf(['', 'honorific-prefix', 'name', 'given-name', 'family-name', 'email', 'username', 'street-address', 'address-line1', 'address-line2', 'country', 'postal-code', 'bday', 'sex', 'tel', 'url']),
	name: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string,
	halfSize: React.PropTypes.bool,
	ariaRequired: React.PropTypes.string,
	updateValue: React.PropTypes.func.isRequired,
};


Input.defaultProps = {
	placeholder: 'text',
	halfSize: false,
	inputAutoComplete: '',
	ariaRequired: 'true',
};


export default Input;
