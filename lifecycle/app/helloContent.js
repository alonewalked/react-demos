import React from 'react';

let HelloContent = React.createClass({
    getDefaultProps() {
        return {
            text: ''
        }
    },
    componentWillReceiveProps(nextprops) {
        console.log('child__componentWillReceiveProps_____'+ JSON.stringify(nextprops));
    },
    render(){
        return (<span>{this.props.text}</span>);
    }
});

export default HelloContent;