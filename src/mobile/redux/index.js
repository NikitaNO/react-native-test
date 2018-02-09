import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers'


export default () => {
  let store = createStore(rootReducer, applyMiddleware(logger, promiseMiddleware()));

  return { store };
}