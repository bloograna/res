/* eslint-disable no-underscore-dangle */
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => action.type !== false
});

export function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}

let instance;

export class StoreFactory {
  static getStore(clear = false) {
    if (!clear && instance) {
      return instance;
    }

    instance = configureStore();
    return instance;
  }
}
