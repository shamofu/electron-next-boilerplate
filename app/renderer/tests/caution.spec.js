/* eslint-env jest */

import React from 'react';
import Renderer from 'react-test-renderer';

import Caution from '../pages/caution';

test('page Caution', () => {
  const component = Renderer.create(
    <Caution />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});