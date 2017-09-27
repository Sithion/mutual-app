import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Display from './display';

test('render "Display" correctly', () => {
  const container = renderer.create(
    <Display value="teste" />).toJSON();
  expect(container).toMatchSnapshot();
});
