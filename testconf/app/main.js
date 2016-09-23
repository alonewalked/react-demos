// // app
// import React from 'react';
// import ReactDOM from 'react-dom';

// import Router from './router';

// const renderId = document.getElementById('app');
// class App extends React.Component {  
// 	constructor(props) {
//         super(props);
//     }
//     render() {
//     	return (
//             <Router />
//         )
//     }
// }

// ReactDOM.render(<App />, renderId);

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

var ChildComponent = React.createClass({
  render: function() {
    return (
      <div>
          <p>type: {this.props.type} >> {this.props.number}</p>
          <a onClick={this.props.onClickHandler}>self click</a>
          <hr/>
      </div>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
        return {
            number: 0
        };
  },
  _renderToString: function() {
    return ReactDOMServer.renderToString(
      <ChildComponent 
          type={'renderToString'}
          number={this.state.number} 
          onClickHandler={this._clickHandler} />
      );
  },
  _renderToStaticMarkup : function() {
    return ReactDOMServer.renderToStaticMarkup(
      <ChildComponent 
          type={'renderToStaticMarkup'}
          number={this.state.number} 
          onClickHandler={this._clickHandler} />
      );
  },
  _clickHandler: function() {
      var num = this.state.number;
      this.setState({number: num+1});
  },
  render: function() {
    return (
      <div>
         <ChildComponent 
            type={'render'}
            number={this.state.number} 
            onClickHandler={this._clickHandler} />
         <div dangerouslySetInnerHTML={{__html: this._renderToString()}} />
         <div dangerouslySetInnerHTML={{__html: this._renderToStaticMarkup()}} />
         <div><a onClick={this._clickHandler}>click</a></div>
      </div>
    )
  }

});
ReactDOM.render(<App />, document.getElementById('app'));