/* listview item */

import React from 'react';
import ReactCanvas, { Group, Image, Text} from 'react-canvas';

let Item =  React.createClass({
    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        imageUrl: React.PropTypes.string,
        title: React.PropTypes.string,
        itemIndex: React.PropTypes.number,
    },
    statics: {
        getItemHeight(){
            return 80;
        }
    },
    render() {
        return (
          <Group style={this.getStyle()}>
            <Image style={this.getImageStyle()} src={this.props.imageUrl} />
            <Text style={this.getTitleStyle()}>{this.props.title}</Text>
          </Group>
        );
    },
    getStyle() {
        return {
            width: this.props.width,
            height: Item.getItemHeight(),
            backgroundColor: (this.props.itemIndex % 2) ? '#eee' : '#a5d2ee'
        }
    },
    getImageStyle() {
        return {
            top: 10,
            left: 10,
            width: 60,
            height: 60,
            backgroundColor: '#ddd',
            borderColor: '#999'
        };
    },
    getTitleStyle() {
        return {
            top: 32,
            left: 80,
            width: this.props.width - 90,
            height: 18,
            fontSize: 14,
            lineHeight: 18
        }
    }

});

export default Item;