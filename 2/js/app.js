// app
import React from 'react';
import SuggestHandler from './components/suggest.js';
 
let App = React.createClass({
	getInitialState: function() {
		return {
		  data: []
		};
	},
	componentDidMount: function() {
		var me = this;
		$.get(this.props.source, function(result) {
			me.setState({
				data: result
			});
		});
	},
	render:function(){
		return(
			<div>
				<SuggestHandler data={this.state.data} />
			</div>
		);
	},
	
});
React.render(
    <App source="data.json"/>,
    document.getElementById('main')
)
