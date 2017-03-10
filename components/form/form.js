import React, { Component } from 'react';

import Input from '../input/input';
import './form.css';

class Form extends Component {
	componentWillMount() {
	}

	render() {
		const { fields } = this.props;

		return (
			<div className="o-form">
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
			</div>
		);
	}
}

Form.propTypes = {
	fields: React.PropTypes.array.isRequired,
};

export default Form;
