import { compose, createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from '../reducers';

// creating app redux store
const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(logger),
    autoRehydrate(),
  ),
);

// applying the store's persistence
persistStore(store, { storage: AsyncStorage });

export default store;
