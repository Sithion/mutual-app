export const keys = {
  REGISTER_CLICK: 'register-click',
};

export const colors = {
  BLUE: 'Azul',
  GREEN: 'Verde',
};

/**
 * the action that will increase the 'blue' Count
 */
const increaseBlue = () => ({
  type: keys.REGISTER_CLICK,
  payload: { color: colors.BLUE },
});

/**
 * the action that will increase the 'green' Count
 */
const increaseGreen = () => ({
  type: keys.REGISTER_CLICK,
  payload: { color: colors.GREEN },
});

export default {
  increaseBlue,
  increaseGreen,
};
