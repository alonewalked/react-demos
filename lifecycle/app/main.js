import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
//import Order from './order';

let App = React.createClass({
    render() {
        return(
            <Hello></Hello>
        );
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

