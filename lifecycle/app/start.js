var React = require('react');
var ReactDOM = require('react-dom');
var _style = {
    "top":"12px"
}
var App = React.createClass({
    getInitialState: function(){
        return {};
    },
    render: function(){
        this.print('render___');
        return (
            <div className="container" style={{top:'100px',position:'absolute'}}>
                <h1> hello react </h1>
            </div>
        );
    }, 
    print: function(str){
        console.log(str);
    }
});

ReactDOM.render(<App/>, document.getElementById('app'));