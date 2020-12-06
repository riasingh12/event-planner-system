import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';// keep track of store that can acess component from anywhere
import { createStore, applyMiddleware, compose } from 'redux';// 
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk))); // to set redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
