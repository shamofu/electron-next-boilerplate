import * as React from 'react';
import * as Renderer from 'react-test-renderer';

import Caution from '../pages/caution';

test('page Caution', () => {
  const component = Renderer.create(
    <Caution />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
