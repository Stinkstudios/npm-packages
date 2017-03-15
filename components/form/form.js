import React, { Component } from 'react';

import Input from '../input/input';
import './form.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { formData: {} };

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		const { fields } = this.props;
		const formData = {};
		fields.map((field) => {
			formData[field.uid] = '';
			return formData;
		});

		this.setState({ formData });
	}

	handleFieldChange = (value, name) => {
		const newData = (JSON.parse(JSON.stringify(this.state.formData)));
		newData[name] = value;
		this.setState({ formData: newData });
	}

	handleSubmit(e) {
		const { onSubmit } = this.props;
		e.preventDefault();
		onSubmit(this.state.formData);
	}

	render() {
		const { fields } = this.props;

		return (
			<form
				className="o-form"
				role="form"
				autoComplete
				onSubmit={this.handleSubmit}
			>
				<p className="form__description">This is the description for the form .... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				{fields.map((field) => (

          // TODO: refactor this to pass the whole field onject through.
					<Input
						key={field.name}
						id={field.uid}
						inputType={field.inputType}
						inputMode={field.inputMode}
						title={field.title}
						name={field.name}
						content={field.content}
						placeholder={field.placeholder}
						label={field.label}
						updateValue={(value, name) => { this.handleFieldChange(value, name); }}
						text={field.text}
					/>
				))}
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

Form.propTypes = {
	fields: React.PropTypes.array.isRequired,
	onSubmit: React.PropTypes.func.isRequired,
};

export default Form;
