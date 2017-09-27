import 'react-native';
import reducers from '../reducers';
import actions, { colors } from '../actions';

test('must increase the blue color', () => {
  const state = reducers(undefined, actions.increaseBlue());
  expect(state).toEqual({ lastColor: colors.BLUE, blueCount: 1, greenCount: 0 });
});

test('must increase the green color', () => {
  const state = reducers(undefined, actions.increaseGreen());
  expect(state).toEqual({ lastColor: colors.GREEN, blueCount: 0, greenCount: 1 });
});

test('must change the value correctly', () => {
  const state = reducers(
    { lastColor: colors.GREEN, blueCount: -1, greenCount: 1 },
    actions.increaseGreen());
  expect(state).toEqual({ lastColor: colors.GREEN, blueCount: 0, greenCount: 2 });
});
