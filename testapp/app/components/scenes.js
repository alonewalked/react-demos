import React from 'react';
import { DropTarget } from 'react-dnd';
import cx from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import renderItem from '../render-item';
import emitter from '../myevent';

var ScenesTarget = {
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

class Scenes extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            draged: false
        }
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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

		return connectDropTarget(
			<div className="survey-area">
				<div className="survey">
                    <div className={classes}>
                        {!draged?'content':draged}
                    </div>
                </div>
			</div>
		);
	}
};

Scenes = DropTarget('Container', ScenesTarget, collect)(Scenes);

export default Scenes;
