import React from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// component
import Scenes from './scenes';
import DraggableItem from './draggableItem';

class Stage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changeid: 0
        }
    }
    componentDidMount() {}
    render() {
        const { changeid } = this.state;
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
            </div> );
	}
}
Stage = DragDropContext(HTML5Backend)(Stage);
export default Stage;
