import React from 'react';

export default React.createClass({
    render() {
        return (
            <div className="item item-transition">
                <span>{this.props.text}</span>
            </div>
        )
    }
});