import React from 'react';
import './input.css';

const Input = (props) => (
	<input
		className={`form__input ${props.halfSize ? 'form__input--half' : ''}`}
		name={props.name}
		type={props.inputType}
		placeholder={props.placeholder}
		autoComplete={props.inputAutoComplete}
		aria-required={props.ariaRequired}
	/>
);

Input.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url']).isRequired,
	inputAutoComplete: React.PropTypes.oneOf(['', 'honorific-prefix', 'name', 'given-name', 'family-name', 'email', 'username', 'street-address', 'address-line1', 'address-line2', 'country', 'postal-code', 'bday', 'sex', 'tel', 'url']),
	name: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string,
	halfSize: React.PropTypes.bool,
	ariaRequired: React.PropTypes.string,
};


Input.defaultProps = {
	placeholder: 'text',
	halfSize: false,
	inputAutoComplete: '',
	ariaRequired: 'true',
};


export default Input;
