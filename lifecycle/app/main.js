import React from 'react';
import ReactDOM from 'react-dom';
import HelloWord from './hello';

let App = React.createClass({
    getInitialState() {
        return {
            stop: false,
            buttonName:'暂停'
        }
    },
    render() {
        return (
            <div>
                <span>life cycle demo</span>
                <HelloWord name="1" delay="300" stop={this.state.stop}/>
                <button onClick = {this._doclick}>{this.state.buttonName}</button>
                {/*<HelloWord name="2" delay="1000"/>
                <HelloWord name="3" delay="5000"/>*/}
            </div>
        );
    },
    _doclick() {
        this.state.stop?
        this.setState({
            stop: false,
            buttonName: '暂停'
        }):
        this.setState({
            stop: true,
            buttonName: '开始'
        });
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

