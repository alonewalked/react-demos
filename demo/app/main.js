import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components'
import { configureStore } from './stores'; 

let store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App></App>
  </Provider>
), document.getElementById('app'));