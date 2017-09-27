import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import MutualApp from './src/app';

/**
 * Main component of app
 * @class App
 */

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MutualApp />
      </Provider>
    );
  }
}

export default App;
