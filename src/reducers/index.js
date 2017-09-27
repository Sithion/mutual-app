import * as _ from 'lodash';
import { keys, colors } from '../actions';

const initialState = {
  lastColor: 'no-color',
  blueCount: 0,
  greenCount: 0,
};
const getNewCount = (color, expectedColor, count) => {
  const newCount = color === expectedColor ? count + 1 : count - 1;
  return newCount > 0 ? newCount : 0;
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case keys.REGISTER_CLICK:
      return _.defaultsDeep({}, {
        lastColor: payload.color,
        blueCount: getNewCount(payload.color, colors.BLUE, state.blueCount),
        greenCount: getNewCount(payload.color, colors.GREEN, state.greenCount),
      }, state);
    default:
      return state;
  }
};
export default reducer;
