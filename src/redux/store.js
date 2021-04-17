import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {fetchMiddleware} from './middlewares'
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, fetchMiddleware, logger)
);

export default store