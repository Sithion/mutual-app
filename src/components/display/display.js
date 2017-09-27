import React from 'react';
import { View, Text } from 'react-native';
import PropsTypes from 'prop-types';
import style from './style';

class Display extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}
Display.propTypes = {
  value: PropsTypes.string.isRequired,
};

export default Display;
