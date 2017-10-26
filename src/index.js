import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import AppWithData from './containers/AppWithData';
import reducer from './reducer';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AppWithData />
  </Provider>,
  document.getElementById('root')
);
