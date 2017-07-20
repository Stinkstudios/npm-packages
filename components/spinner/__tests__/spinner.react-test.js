import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Spinner from '../spinner';

const component = () => <Spinner size={50} />;

it('renders DOM output correctly', () => {
  const tree = renderer.create(component()).toJSON();

  expect(tree).toMatchSnapshot();
});

it("changes component's size when using 'size' prop", () => {
  const tree = mount(<Spinner size={150} />);

  const topLevel = tree.first();

  expect(topLevel.props().size).toBe(150);
  expect(topLevel.find('.spinner__inner').get(0).style._values.width).toBe(
    '150px'
  );
  expect(topLevel.find('.spinner__inner').get(0).style._values.height).toBe(
    '150px'
  );
});
