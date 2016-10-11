
import React, {
    DOM
} from 'react';
const {
    div
} = DOM;

import { DropTarget } from 'react-dnd';
import cx from 'classnames';
import emitter from '../myevent';

import renderItem from '../render-item';

var BoxTarget = {
  drop(props, monitor, component) {
    let droppedOnChild = !monitor.isOver({ shallow: true });
    if (!droppedOnChild) {
        component.handleBlockDrop(monitor.getItem().item.name);
    }
  }
};

function collect(connect, monitor) {
    return {
        highlighted: monitor.canDrop(),
        hovered: monitor.isOver(),
        connectDropTarget: connect.dropTarget()
    };
}

const styles = {
	position: 'relative',
	border: '1px solid #e5e5e5',
    padding: '5px 5px 5px 5px',
    width: 100,
    height: 100
};

class BoxComp extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
			draged: null
		}
    }
	handleBlockDrop(type) {
        this.setState({
            draged: renderItem(type)
        });
        emitter.emit('_evnet_increased', window.idx);
    }
    render() {
		var { draged } = this.state;
		var {
        	isOverCurrent,
        	connectDropTarget
		} = this.props;
        var classes = cx({
            'survey': true,
            'dragging': isOverCurrent,
            'hovering': isOverCurrent
        });
        let _style = {

        }
        _style = Object.assign({}, styles, _style);
		return connectDropTarget(
			<div style={_style}>
				{draged?draged:null}
			</div>
		);
	}
};
BoxComp = DropTarget((props)=>{
    const name = 'Box-' + (++window.idx);
    return name;
}, BoxTarget, collect)(BoxComp);

export const Box = React.createFactory(BoxComp);
