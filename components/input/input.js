import React, { Component } from 'react';
import './input.css';

import RadioButton from '../radio-button/radio-button';

class Input extends Component {
	updateInput = (e) => {
		this.props.updateValue(e.target.value, e.target.name);
	}

	renderTextField() {
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

	renderRadioField() {
		const {
			name,
			inputType,
			ariaRequired,
			text,
			updateValue,
		} = this.props;

		return (
			<div>
				<RadioButton
					key={name}
					inputType={inputType}
					name={name}
					text={text}
					ariaRequired={ariaRequired}
					updateValue={updateValue}
				/>
				<RadioButton
					key={text}
					inputType={inputType}
					name={name}
					text={text}
					ariaRequired={ariaRequired}
					updateValue={updateValue}
				/>
			</div>
		);
	}

	renderCheckboxField() {
		const {
			name,
			label,
			value,
			inputType,
			ariaRequired,
			halfSize,
		} = this.props;

		return (
			<div className="checkbox__wrapper">
				<input
					className={`form__input ${halfSize ? 'form__input--half' : ''}`}
					name={name}
					type={inputType}
					aria-required={ariaRequired}
					onChange={this.updateInput}
					value={value}
				/>
				<label htmlFor={name}>{label}</label>
			</div>
		);
	}

	render() {
		const { inputType } = this.props;
		if (inputType === 'radio') return this.renderRadioField();
		if (inputType === 'checkbox') return this.renderCheckbox();

		return this.renderTextField();
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
	text: React.PropTypes.string,
	label: React.PropTypes.string,
	value: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
		React.PropTypes.bool,
	]),
};


Input.defaultProps = {
	placeholder: 'text',
	halfSize: false,
	inputAutoComplete: '',
	ariaRequired: 'true',
	text: '',
	value: 'default',
	label: 'default',
};


export default Input;
