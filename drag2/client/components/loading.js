import React, { Component } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <img
        src={require("../../static/images/loading.gif")} />
    }
}
export default Loading;
