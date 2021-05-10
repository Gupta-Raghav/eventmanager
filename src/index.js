import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
