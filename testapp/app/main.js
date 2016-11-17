

import '../build/styles.min.css';
import React from 'react';
import ReactDOM from 'react-dom';


window.idx = 1;

import App from './app';

const AppComponent = React.createFactory(App);

ReactDOM.render(AppComponent(), document.getElementById("app"));
