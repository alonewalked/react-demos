import React, {
    PropTypes
}
from 'react';
import ReactDOM from 'react-dom';
import {
    on, off, isFunction, isNumeric, position, closest, get,
    assign
}
from '../utils';
import DragableItemMixin from './DragableItemMixin';

/*
 * class dragable
*/

const Dragable = React.createClass({
    propTypes: {
        onDrag: PropTypes.func,
        className: PropTypes.string,
        containment: PropTypes.bool
    },
    getInitialState() {
        this._dimensionArr = this.props.children ?
            (Array.isArray(this.props.children) ? this.props.children.map(() => {
                return {};
            }) : [{}]) : [];
        this._orderArr = [];
        let i=0;
        while(i<this._dimensionArr.length){
            this._orderArr.push(i++);
        }
        return {
            isDragging: false,
            placeHolderIndex: null,
            left: null,
            top: null
        };
    },
    componentDidUpdate() {
        const container = ReactDOM.findDOMNode(this);
        const rect = container.getBoundingClientRect();

        this._top = rect.top + document.body.scrollTop;
        this._left = rect.left + document.body.scrollLeft;
        this._bottom = this._top + rect.height;
        this._right = this._left + rect.width;
    },
    componentWillUnmount() {
        this.unbindEvent();
    },
    bindEvent() {
        this.__mouseMoveHandler = (e)=> {
            /* no change */
            if(((e.pageX || e.clientX) === this._prevX && (e.pageY || e.clientY) === this._prevY) ||
                (this._prevX === null && this._prevY === null)){
                return false;
            }
            this.handleMouseMove.call(this, e);
        };
        this.__mouseUpHandler = (e)=> {
            this.handleMouseUp.call(this, e);
        };
        this.__touchMoveHandler = (e)=> {
            this.handleMouseMove.call(this, {
                target: e.target,
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY,
                pageX: e.touches[0].pageX,
                pageY: e.touches[0].pageY
            });
        };
        this.__touchEndOrCancelHandler = (e)=> {
            this.handleMouseUp.call(this, e);
        };

        if(!!('ontouchstart' in window)){
            on(document,'touchmove', this.__touchMoveHandler);
            on(document, 'touchend', this.__touchEndOrCancelHandler);
            on(document, 'touchcancel', this.__touchEndOrCancelHandler);
        }
        else{
            on(document, 'mousemove', this.__mouseMoveHandler);
            on(document, 'mouseup', this.__mouseUpHandler);
        }
    },
    unbindEvent() {
        if(!!('ontouchstart' in window)){
            off(document, 'touchmove', this.__touchMoveHandler);
            off(document, 'touchend', this.__touchEndOrCancelHandler);
            off(document, 'touchcancel', this.__touchEndOrCancelHandler);
        }
        else{
            off(document, 'mousemove', this.__mouseMoveHandler);
            off(document, 'mouseup', this.__mouseUpHandler);
        }

        this.__mouseMoveHandler = null;
        this.__mouseUpHandler = null;
        this.__touchMoveHandler = null;
        this.__touchEndOrCancelHandler = null;
    },
    handleMouseDown(e, index){
        this._draggingIndex = index;
        this._prevX = (e.pageX || e.clientX);
        this._prevY = (e.pageY || e.clientY);
        this._initOffset = e.offset;
        this._isReadyForDragging = true;
        this._hasInitDragging = false;
        // bind event
        this.bindEvent();
    },
    handleMouseMove(e) {
        this._isMouseMoving = true;

        if (!this._isReadyForDragging) {
           return false;
        }

        if (!this._hasInitDragging) {
            this._dimensionArr[this._draggingIndex].isPlaceHolder = true;
            this._hasInitDragging = true;
         }

        if (this.props.containment) {
            const x = e.pageX || e.clientX;
            const y = e.pageY || e.clientY;

            if (x < this._left || x > this._right || y < this._top || y > this._bottom) {
                return false;
            }
        }

        const newOffset = this.calculateNewOffset(e);
        const newIndex = this.calculateNewIndex(e);

        this._draggingIndex = newIndex;

        this.setState({
            isDragging: true,
            top: newOffset.top,
            left: newOffset.left,
            placeHolderIndex: newIndex
        });

        this._prevX = (e.pageX || e.clientX);
        this._prevY = (e.pageY || e.clientY);
    },
    handleMouseUp() {
        const _hasMouseMoved = this._isMouseMoving;
        this.unbindEvent();

        // reset
        this._draggingIndex = null;
        this._isReadyForDragging = false;
        this._isMouseMoving = false;
        this._initOffset = null;
        this._prevX = null;
        this._prevY = null;

        if(this.state.isDragging){
            this._dimensionArr[this.state.placeHolderIndex].isPlaceHolder = false;

            // callback
            if(isFunction(this.props.onDrag)){
                this.props.onDrag(this.getDragData());
            }
        }

        if(this.isMounted() && _hasMouseMoved){
            this.setState({
                isDragging: false,
                placeHolderIndex: null,
                left: null,
                top: null
            });
        }
    },
    handleChildUpdate(offset, width, height, fullWidth, fullHeight, index){
        assign(this._dimensionArr[index],{
            top: offset.top,
            left: offset.left,
            width: width,
            height: height,
            fullHeight: fullHeight,
            fullWidth: fullWidth
        })
    },
    getIndexByOffset(offset, direction){
        // no offset
        if(!offset || !isNumeric(offset.top) || !isNumeric(offset.left)){
            return 0;
        }
        const _dimensionArr = this._dimensionArr;
        const offsetX = offset.left;
        const offsetY = offset.top;
        const prevIndex = this.state.placeHolderIndex !== null?this.state.placeHolderIndex:this._draggingIndex;
        let newIndex;
        _dimensionArr.every((item, index)=>{
            const relativeLeft = offsetX - item.left;
            const relativeTop = offsetY - item.top;
            if (relativeLeft < item.fullWidth && relativeTop < item.fullHeight) {
                if (relativeLeft < item.fullWidth / 2 && direction === 'left') {
                    newIndex = index;
                }
                else if(relativeLeft > item.fullWidth / 2 && direction === 'right'){
                    newIndex = Math.min(index + 1, _dimensionArr.length - 1);
                }
                else if (relativeTop < item.fullHeight / 2 && direction === 'up') {
                    newIndex = index;
                }
                else if (relativeTop > item.fullHeight / 2 && direction === 'down') {
                    newIndex = index;
                }
                else {
                    return true;
                }
                return false;
            }
            return true;
        });

        return newIndex!==undefined?newIndex:prevIndex;
    },
    swapArrayItemPosition(arr, src, to){
        if(!arr || !isNumeric(src) || !isNumeric(to)){
            return arr;
        }
        const srcEl = arr.splice(src,1)[0];
        arr.splice(to, 0, srcEl);
        return arr;
    },
    calculateNewOffset(e) {
        const deltaX = this._prevX - (e.pageX || e.clientX);
        const deltaY = this._prevY - (e.pageY || e.clientY);
        const prevLeft = this.state.left !== null?this.state.left : this._initOffset.left;
        const prevTop = this.state.top !== null?this.state.top:this._initOffset.top;
        const newLeft = prevLeft - deltaX;
        const newTop = prevTop - deltaY;

        return {
            left: newLeft,
            top: newTop
        };
    },
    calculateNewIndex(e){
        let placeHolderIndex = this.state.placeHolderIndex !== null? this.state.placeHolderIndex:this._draggingIndex;

        const target = get('.ui-dragable-dragging') || closest((e.target || e.srcElement), '.ui-dragable-item');
        const offset = position(target);

        const deltaX = Math.abs(this._prevX - (e.pageX || e.clientX));
        const deltaY = Math.abs(this._prevY - (e.pageY || e.clientY));

        let direction;
        if(deltaX>deltaY){
            direction = this._prevX > (e.pageX || e.clientX) ? 'left':'right';
        }
        else{
            direction = this._pageY > (e.pageY || e.clientY) ? 'up':'down';
        }
        const newIndex = this.getIndexByOffset(offset, direction);
        if(newIndex !== placeHolderIndex){
            this._dimensionArr = this.swapArrayItemPosition(this._dimensionArr, placeHolderIndex, newIndex);
            this._orderArr = this.swapArrayItemPosition(this._orderArr, placeHolderIndex, newIndex);
        }
        return newIndex;
    },
    getDragData(){
        return this._orderArr.map((itemidx,index)=>{
            const item = Array.isArray(this.props.children)?this.props.children[itemidx]:this.props.children;
            if(!item){
                return undefined;
            }
            return item.props.dragData;
        });
    },
    renderItems(){
        const {
            _dimensionArr, _orderArr
        } = this;
        let draggingItem;

        const items = _orderArr.map((itemIndex, index) => {
            let item = Array.isArray(this.props.children) ? this.props.children[itemIndex] : this.props.children;
            if (!item) {
                return undefined;
            }
            if (index === this._draggingIndex) {
                draggingItem = this.renderDraggingItem(item);
            }

            const isPlaceHolder = _dimensionArr[index].isPlaceHolder;
            const itemClassName = `ui-dragable-item ${isPlaceHolder && 'ui-dragable-placeholder'} ${this.state.isDragging && isPlaceHolder && 'visible'}`;

            return React.cloneElement(item, {
                key: index,
                dragableClassName: `${item.props.className} ${itemClassName}`,
                dragableIndex: index,
                onDragableItemReadyToMove: isPlaceHolder ? undefined : (e) => {
                    this.handleMouseDown.call(this, e, index);
                },
                onDragableItemMount: this.handleChildUpdate
            });
        });

        return items.concat([draggingItem]);
    },
    renderDraggingItem(item) {
        if (!item) {
            return;
        }

        const style = {
            top: this.state.top,
            left: this.state.left,
            width: this._dimensionArr[this._draggingIndex].width,
            height: this._dimensionArr[this._draggingIndex].height
        };
        return React.cloneElement(item, {
            dragableClassName: `${item.props.className} ui-dragable-item ui-dragable-dragging`,
            key: this._dimensionArr.length,
            dragableStyle: style,
            isDragging: true
        });
    },

    render() {
        const className = 'ui-dragable ' + (this.props.className || '');

        return ( < div className = {
            className
        } > {
            this.renderItems()
        } < /div>);
    }
});

Dragable.DragableItemMixin = DragableItemMixin();
Dragable.dragable = DragableItemMixin;

export default Dragable;