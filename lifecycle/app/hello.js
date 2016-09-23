import React from 'react';
import HelloContent from './helloContent';

let Hello = React.createClass({
    getDefaultProps() {
        console.log('getDefaultProps____1');
    },
    getInitialState() {
        console.log('getDefaultProps____2');
        return {
            name: 'react'
        }
    },
    componentWillMount(){
        /*let _input = document.getElementsByTagName('input');
        console.log(_input);*/
        console.log('componentWillMount____3');
    },
    render(){
        console.log('render_____4')
        return (
            <div>
                <p>
                    <input type="text" onChange={this._onchange} value={this.state.name} />
                </p>
                {/*<div> Hi: {this.state.name} </div>*/}
                <HelloContent text={this.state.name} />}
            </div>
        )
    },
    _onchange(ev) {
        this.setState({
            "name": ev.target.value
        });
    },
    componentDidMount() {
        /*let _input = document.getElementsByTagName('input');
        console.log(_input);*/
        console.log('componentDidMount____5');
    },
    componentWillReceiveProps() {
        console.log('father_componentDidMount____');
    },
    shouldComponentUpdate(newprops, newstate) {
        console.log('shouldComponentUpdate___7');
        return true;
    },
    componentWillUpdate() {
        /*this.setState({
            "name":'test'
        });*/
        console.log('componentWillUpdate___8');
    },
    componentDidUpdate() {
        console.log('componentDidUpdate___9');
    }
});
export default Hello;