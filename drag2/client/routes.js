import React, { PropTypes, createClass } from 'react';
import {
    Router, Route, IndexRoute,
    Link, withRouter
} from 'react-router';
import Index from './views/home/components';

const App = withRouter(
    createClass({
        render() {
            return <div>{this.props.children}</div>
        }
    })
);

const onEnter = (nextState, replace) => {
    replace('/home');
};

const routes = [{
    path: '/',
    component: App,
    indexRoute: { onEnter },
    childRoutes: [{
        path:'home',
        component: Index
    }]
}];

const Routes = ({ history }) =>
  <Router history={history} routes={routes}>
  </Router>

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
