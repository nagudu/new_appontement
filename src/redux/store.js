import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
// require('dotenv').config()

const createStoreWithMiddleware =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(thunk, logger)(createStore)
    : applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;