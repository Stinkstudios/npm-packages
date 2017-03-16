import React from 'react';
import Fullbleed from '../fullbleed';
import renderer from 'react-test-renderer';

import { mount } from 'enzyme';

const component =
	<Fullbleed
		width={100}
		height={100}
		ratio="1:1"
		addClass="home-page__bg"
	>
		<img
			className="home-page__image"
			src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
			alt="black square"
		/>
	</Fullbleed>;

// Content needs to be deterministic for the test to make sense,
// so make this a pure function with inline data-uri
it('renders correctly', () => {
	const tree = renderer.create(component).toJSON();

	expect(tree).toMatchSnapshot();
});

it('renders the media correctly', () => {
	const tree = mount(component);

	expect(tree.find('img').length).toBe(1);
});
