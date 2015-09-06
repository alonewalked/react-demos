// SuggestTip
import React from 'react';

let SuggestTip = React.createClass({
	render:function(){
		var enable = {
			border: '1px solid #000',
			width: '20%',
			display: 'block'
		};
		var disable = {
			display:'none'
		};
		var tips = [];
		this.props.data.forEach(function(i){
			tips.push(<option>{i}</option>)
		});
		
		return (
			<div style={this.props.appear?enable:disable} onMouseDown={this.selectRow} onMouseLeave={this.props.handleMouseLeave}>
                {tips}
            </div>
		)
	},
	selectRow:function(e){
		alert('select: ' + $(e.target).html());
    }
});

export default SuggestTip;