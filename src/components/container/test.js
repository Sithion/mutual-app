import { View } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Container from './container';

test('render "Container" correctly', () => {
  const container = renderer.create(
    <Container>
      <View />
    </Container>).toJSON();
  expect(container).toMatchSnapshot();
});
