import React from 'react';
import Fullbleed from '../fullbleed';
import renderer from 'react-test-renderer';

// Content needs to be deterministic for the test to make sense,
// so make this a pure function with inline data-uri
it('renders correctly', () => {
	const tree = renderer.create(
		<Fullbleed
			width={100}
			height={100}
			ratio="1:1"
			addClass="home-page__bg"
		>
			<img
				src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
				alt="black square"
			/>
		</Fullbleed>
	).toJSON();

	expect(tree).toMatchSnapshot();
});
