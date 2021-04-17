import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk  from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import Main from './containers/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
