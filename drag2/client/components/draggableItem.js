import React from 'react'
import { DragSource } from 'react-dnd';

const blockSource = {
    beginDrag(props) {
        return {
            item: {
                name:props?props.dropTarget.name:''
            }
        };
    }
};

// the collecting function that injects relevant props to the component
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class DraggableItem extends React.Component {
    render() {
        let { isDragging, connectDragSource } = this.props;
        return connectDragSource(
            <div style={{opacity: isDragging ? 0.4 : 1 }} className="draggable">
                <i className="ion-arrow-move"></i>
                {this.props.dropTarget.name}
            </div>
        );
	}
};

DraggableItem = DragSource((props) => {
    let name = props.dropTarget.type;
    name = props.dropTarget.idx?name+'-'+window.idx:name;
    return name;
}, blockSource, collect)(DraggableItem);

export default DraggableItem;
