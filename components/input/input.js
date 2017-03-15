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
			halfSize,
			name,
			inputType,
			inputAutoComplete,
			ariaRequired,
			text,
		} = this.props;

		return (
			<label htmlFor={name}>
				<input
					className={`form__input ${halfSize ? 'form__input--half' : ''}`}
					name={name}
					type={inputType}
					autoComplete={inputAutoComplete}
					aria-required={ariaRequired}
					onChange={this.updateInput}
				/>
				<span>{text}</span>
			</label>
		);
	}

	render() {
		const { inputType } = this.props;
		if (inputType === 'radio') return this.renderRadioField();
		if (inputType === 'checkbox') return this.renderRadioField();

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
};


Input.defaultProps = {
	placeholder: 'text',
	halfSize: false,
	inputAutoComplete: '',
	ariaRequired: 'true',
	text: '',
};


export default Input;
