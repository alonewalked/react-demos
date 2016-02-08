var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var { Router, Route, Link } = ReactRouter;

var Demos = require('./components/demos');

var App = React.createClass({
    render() {
        return (<div>
            <h1>App</h1>
            <ul>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/demos">Demos</Link></li>
            </ul>
            {this.props.children}
        </div>);
    },
});
var Articles = React.createClass({
    render() {
        return (
            <div>111</div>
            );
    }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="articles" component={Articles} />
      <Route path="demos" component={Demos} />
    </Route>
  </Router>
), document.getElementById('app'));