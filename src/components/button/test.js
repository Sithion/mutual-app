import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from './button';

test('render "Button" correctly', () => {
  const container = renderer.create(
    <Button backgroundColor="black" color="white" onPress={() => null} count={1} />).toJSON();
  expect(container).toMatchSnapshot();
});
