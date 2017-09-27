import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../src/actions';
import Container from './components/container';
import Button from './components/button';
import Display from './components/display';

/**
 * Main component of mutual app
 * @class App
 */
class MutualApp extends React.Component {
  render() {
    const blueColor = '#1010CA';
    const greenColor = '#10CA10';
    const { greenCount, blueCount, increaseGreen, increaseBlue } = this.props;
    return (
      <Container>
        <Button
          color="black"
          backgroundColor={greenColor}
          count={greenCount}
          onPress={increaseGreen}
        />
        <Display value={this.props.lastColor} />
        <Button
          color="white"
          backgroundColor={blueColor}
          count={blueCount}
          onPress={increaseBlue}
        />
      </Container>
    );
  }
}

MutualApp.propTypes = {
  lastColor: PropTypes.string.isRequired,
  blueCount: PropTypes.number.isRequired,
  greenCount: PropTypes.number.isRequired,
  increaseBlue: PropTypes.func.isRequired,
  increaseGreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lastColor: state.lastColor,
  blueCount: state.blueCount,
  greenCount: state.greenCount,
});

const mapDispatchToProps = {
  increaseBlue: actions.increaseBlue,
  increaseGreen: actions.increaseGreen,
};

// registering root component
export default connect(mapStateToProps, mapDispatchToProps)(MutualApp);
