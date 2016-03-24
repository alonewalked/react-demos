import React from 'react';
import Counter from './counter';

let Order = React.createClass({
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
                <Counter name="1" delay="300" stop={this.state.stop}/>
                <button onClick = {this._doclick}>{this.state.buttonName}</button>
                <Counter name="2" delay="1000" stop={this.state.stop}/>
                <Counter name="3" delay="5000" stop={this.state.stop}/>
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

export default Order;