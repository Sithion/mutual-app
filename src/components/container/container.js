/* eslint-disable react/require-default-props */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

/**
 * the app container
 */
class Container extends React.Component {
  render() {
    return (
      <View style={style.container}>
        {this.props.children}
      </View>
    );
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default Container;
