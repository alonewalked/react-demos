import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// component
import Scenes from './components/scenes';
import DraggableItem from './components/draggableItem';

import emitter from './myevent';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			changeid: 0
		}
		//this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	componentDidMount() {
		var me = this;
		emitter.on('_evnet_increased',function(idx){
			if(idx) {
				me.setState({
					changeid: +new Date
				})
			}
		});
	}
	render() {
		var { changeid } = this.state;
		return (
			<div  className="col-md-12">
				<div className="col-md-8">
		            <Scenes />
		        </div>
				<div className="col-md-4">
		            <DraggableItem
					dropTarget={{type:'Box', name:'Tabel', idx: true}}/>
					{changeid==0?
					<DraggableItem
					dropTarget={{type:'Container', name:'Box'}}/>:
					<DraggableItem
					dropTarget={{type:'Box', name:'Box', idx: true}}/>}
		        </div>
			</div>
		);
	}
}
App = DragDropContext(HTML5Backend)(App);
export default App;
