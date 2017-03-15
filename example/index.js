import React from 'react';
import ReactDOM from 'react-dom';
// import Fullbleed from '../components/fullbleed/fullbleed';
import Form from '../components/form/form';

const formFields = [
	{
		uid: 'email',
		inputType: 'text',
		title: 'email',
		name: 'email',
		content: 'email',
		placeholder: 'email',
		inputAutoComplete: 'email',
		ariaRequired: 'true',
	},
	{
		uid: 'name',
		inputType: 'text',
		title: 'name',
		name: 'name',
		content: 'name',
		placeholder: 'name',
		inputAutoComplete: 'name',
		ariaRequired: 'true',
	},
	{
		uid: 'attending',
		inputType: 'radio',
		title: 'option',
		name: 'attending',
		content: 'option',
		placeholder: 'option',
		inputAutoComplete: '',
		ariaRequired: 'true',
		text: 'Attending',
	},
];

const onSubmit = () => {
	// console.log('submit');
};

// inputType: React.PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url']).isRequired,
// inputMode: React.PropTypes.string.isRequired,
// title: React.PropTypes.string.isRequired,
// name: React.PropTypes.string.isRequired,
// content: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
// placeholder: React.PropTypes.string,
// halfSize: React.PropTypes.bool,

ReactDOM.render(
	<div>
		{/* <Fullbleed addClass="home-page__bg" width={200} height={300} ratio={'1:1'}>
			<img src="https://placekitten.com/300/201" alt="" />
		</Fullbleed> */}
		<Form
			fields={formFields}
			onSubmit={onSubmit}
		/>
	</div>, document.getElementById('container'));
