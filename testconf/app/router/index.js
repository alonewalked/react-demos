import { Router, Route, Link } from 'react-router';
import React, { Component } from 'react';

import { Configurable } from '../highComponents/configurable';

class App extends Component {
    render() {
        let { children, links } = this.props;
        return (
            <div>
                { links } 
                { children }
            </div>
        );
    }
};
App = Configurable(App);

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<h1>Home</h1>);
    }
};

class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<h1>Product</h1>);
    }
};

export default class MyRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                
                <Router >
                    <Route path="/" component={App}>
                        <Route path="home" component={Home} />
                        <Route path="product" component={Product} />
                    </Route>
                </Router>
            </div>
        )
    }
}
