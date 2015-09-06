// suggest components
import React from 'react';
import SuggestBar from './suggestBar.js';
import SuggestTip from './suggestTip.js';

let Suggest = React.createClass({
	render: function(){
		return (
			<div>
				<SuggestBar lostFocus={this.lostFocus} getFocus={this.getFocus} refreshData={this.refreshData}/>
				<SuggestTip data={this.state.data} appear={this.state.appear} handleMouseLeave={this.handleMouseLeave}/>
			</div>
		);
	},
	getInitialState: function(){
		return {
			appear: false,
			data: []
		};
	},
	lostFocus: function(){
		this.setState({appear:false});
	},
	getFocus: function(haveWord){
		this.setState({appear:haveWord});
	},
	refreshData: function(w){
		var _d;
		w = w || '';
		w = w.trim();
		if(w===''){
			this.setState({data:[].concat(this.props.data)});
		}
		else{
			_d = this.props.data.filter(function(k){
				return (k.indexOf(w)>-1);
			});
			this.setState({data:_d});
		}
	},
	handleMouseLeave: function(){
		this.setState({appear:false});
	}
});
export default Suggest;