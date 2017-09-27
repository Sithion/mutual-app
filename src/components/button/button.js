import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

class Button extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  render() {
    const count = this.props.count > 0 ? this.props.count : 0;
    return (
      <View style={style.container}>
        <TouchableOpacity onPress={this.onPress}>
          <View style={style.button(this.props.backgroundColor)}>
            <Text style={style.text(this.props.color)}>
              {count}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Button;
