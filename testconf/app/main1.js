// app
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

const renderId = document.getElementById('app');
class App extends React.Component {
	constructor(props) {
        super(props);
    }
    render() {
    	return (
            <Router />
        )
    }
}

ReactDOM.render(<App />, renderId);
