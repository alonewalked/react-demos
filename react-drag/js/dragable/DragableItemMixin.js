// DragableItemMixin
import React from 'react';
import ReactDOM from 'react-dom';
var {
    on, position, closest, width, height, isFunction,outerWidthWithMargin, outerHeightWithMargin
} = require('../utils');

function handleDragableItemReadyToMove(e) {
    const target = closest((e.target || e.srcElement), '.ui-dragable-item');
    const evt = {
        pageX: (e.pageX || e.clientX || e.touches && e.touches[0].pageX),
        pageY: (e.pageY || e.clientY || e.touches && e.touches[0].pageY),
        offset: position(target)
    };
    if(this.props.onDragableItemReadyToMove){
        this.props.onDragableItemReadyToMove(evt, this.props.dragableIndex);
    }
}

function handleComponentDidMount(){
    const node = ReactDOM.findDOMNode(this);
    on(node, 'selectstart', (e)=>{
        if(e.preventDefault){
            e.preventDefault();
        }
        else{
            e.returnValue = false;
        }
    });

    if(isFunction(this.props.onDragableItemMount)){
        this.props.onDragableItemMount(position(node),
            width(node),
            height(node),
            outerWidthWithMargin(node),
            outerHeightWithMargin(node),
            this.props.dragableIndex);
    }
}

function handleComponentDidUpdate(){
    const node = ReactDOM.findDOMNode(this);
    if(isFunction(this.props.onDragableItemMount)){
        this.props.onDragableItemMount(position(node),
            width(node),
            height(node),
            outerWidthWithMargin(node),
            outerHeightWithMargin(node),
            this.props.dragableIndex);
    }
}

const _defaultProps = {
    dragableClassName: '',
    dragableStyle: {},
    onDragableItemMount: ()=>{},
    onDragableItemReadyToMove: ()=>{}
};

export default (Component) => {
  if (Component) {
    return class DragableItem extends React.Component {
      static defaultProps:_defaultProps

      handleDragableItemReadyToMove(e) {
        handleDragableItemReadyToMove.call(this, e);
      }

      componentDidMount() {
        handleComponentDidMount.call(this);
      }

      componentDidUpdate() {
        handleComponentDidUpdate.call(this);
      }

      render() {
        const { dragableClassName, dragableStyle, dragableIndex, ...rest } = this.props;
        return (
          <Component {...rest} className={dragableClassName} style={dragableStyle} key={dragableIndex}
                     onMouseDown={this.handleDragableItemReadyToMove.bind(this)}
                     onTouchStart={this.handleDragableItemReadyToMove.bind(this)} />
        );
      }
    }
  }

  return {
    getDefaultProps() {
      return _defaultProps;
    },

    handleDragableItemReadyToMove: handleDragableItemReadyToMove,

    componentDidMount: handleComponentDidMount,

    componentDidUpdate: handleComponentDidUpdate,

    renderWithDragable(item) {
      return React.cloneElement(item, {
        className: this.props.dragableClassName,
        style: this.props.dragableStyle,
        key: this.props.dragableIndex,
        onMouseDown: this.handleDragableItemReadyToMove,
        onTouchStart: this.handleDragableItemReadyToMove
      });
    }
  }
};