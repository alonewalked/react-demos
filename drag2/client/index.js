import 'index.html';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Router from './routes';

// init store
import { configureStore } from  './stores';
const store = configureStore();

let root = document.getElementById('app');
render (
    <Provider store={store}>
        <Router history={ browserHistory }/>
    </Provider>, root );
