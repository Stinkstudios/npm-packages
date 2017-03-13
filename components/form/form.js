import React, { Component } from 'react';

import Input from '../input/input';
import './form.css';

class Form extends Component {
	componentWillMount() {
	}

	render() {
		const { fields, onSubmit } = this.props;

		return (
			<form
				className="o-form"
				role="form"
				autoComplete
			>
				<div className="form__description">This is the descriptio for the form .... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				{fields.map((field) => (
					<Input
						key={field.name}
						inputType={field.inputType}
						inputMode={field.inputMode}
						title={field.title}
						name={field.name}
						content={field.content}
						placeholder={field.placeholder}
					/>
				))}
				<button
					className="form__submit"
					onClick={() => onSubmit()}
				>
					Submit
				</button>
			</form>
		);
	}
}

Form.propTypes = {
	fields: React.PropTypes.array.isRequired,
	onSubmit: React.PropTypes.func.isRequired,
};

export default Form;
