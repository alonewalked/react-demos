// suggestBar comp
import React from 'react';

let SuggestBar = React.createClass({
	render: function(){
		var bar = {width: '20%'}
		return (
			<div>
				<input style={bar} onBlur={this.props.lostFocus} onChange={this.handleChange} />
			</div>
		)
	},
	handleChange: function(e){
		this.props.refreshData(e.target.value);
		if(e.target.value == ''){
            this.props.getFocus(false);
        }
		else{
            this.props.getFocus(true);
        }
	}
});

export default SuggestBar;