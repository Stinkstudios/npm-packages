import React from 'react';
import './input.css';

const Input = (props) => (
	<input
		className={`form__input ${props.halfSize ? 'form__input--half' : ''}`}
		name={props.name}
		type={props.inputType}
		placeholder={props.placeholder}
		autoComplete={props.inputType}
		inputMode={props.inputMode}
	/>
);

Input.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url']).isRequired,
	inputMode: React.PropTypes.oneOf(['latin', 'verbatim', 'numeric', 'tel', 'email', 'url']),
	// title: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string,
	halfSize: React.PropTypes.bool,
};


Input.defaultProps = {
	inputMode: '',
	placeholder: 'text',
	halfSize: false,
};


export default Input;
