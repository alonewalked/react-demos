import React from 'react';

let HelloWord = React.createClass({
    st: +new Date,
    getDefaultProps() {
        console.log('getDefaultProps__'+ (+new Date));
        return {
            name: ''
        };
    },
    getInitialState() {
        console.log('getInitialState__'+ (+new Date-this.st));
        return {
            times: 1,
            continue: true
        };

    },
    componentWillMount() {/*
        var _con = document.getElementById('content');
        console.log(_con);*/
        console.log('componentWillMount__' + (+new Date-this.st) );
    },
    componentDidMount() {/*
        var _con = document.getElementById('content');
        console.log(_con)*/
        console.log('componentDidMount__' + (+new Date-this.st) );
        this.add(this.state.continue);
    }/*,
    shouldComponentUpdate(newprops, newstate) {
        console.log(this.props.name +'__shouldComponentUpdate__'+ (+new Date-this.st) )
        return this.state != newstate;
    }*/,
    componentWillReceiveProps(nextProps) {
        this.setState({
            continue: !nextProps.stop
        });
        if(!nextProps.stop){
            this.add(true);
        }
        else{
            if(this.timer){
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    },
    componentWillUpdate() {
        console.log(this.props.name +'__componentWillUpdate__' + (+new Date-this.st) + '__' + this.state.times );
    },
    componentDidUpdate() {
        console.log(this.props.name + '__componentDidUpdate__' + (+new Date-this.st)  + '__' + this.state.times);
    },
    render() {
        console.log('render__'+ (+new Date-this.st))
        return(
            <p>
                <span>hello {this.props.name} </span>
                <span>{this.state.times}</span>
            </p>
        )
    },
    add(isContinue) {
        if(!isContinue){
            return;
        }
        this.timer = setTimeout(()=>{
            let _time = this.state.times;
            this.setState({
                times: ++_time
            });
            if(this.state.times < 100){
                this.add(this.state.continue);
            }
        }, this.props.delay);
    }
});

export default HelloWord;