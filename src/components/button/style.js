import { Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const container = {
  flex: 1,
  width: screen.width,
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonSize = 100;
const button = color => ({
  width: buttonSize,
  height: buttonSize,
  borderRadius: buttonSize * 0.5,
  flex: 0,
  backgroundColor: color,
  justifyContent: 'center',
  alignItems: 'center',
});

const text = color => ({
  color,
  fontSize: 30,
});

export default {
  container,
  button,
  text,
};
