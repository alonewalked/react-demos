import React from 'react';
import ReactDOM from 'react-dom';
import ReactCanvas, { Surface,ListView } from 'react-canvas';

import Item from './components/item';

import { shops } from './store';
let App = React.createClass({
    getInitialState() {
        this.init();
        return {
            lists:[]
        }
    },
    init() {
        shops.getshoplist().then(data=>{
            this.setState({
                lists: data
            });
        });
    },
    shouldComponentUpdate(newpops, newstate){
        return newstate.lists.length!==this.state.lists.length;
    },
    render() {
        let size = this.getSize();
        return(
        <Surface top={0} left={0} width={size.width} height={size.height}>
            <ListView
              style={this.getListViewStyle()}
              numberOfItemsGetter={this.getNumberOfItems}
              itemHeightGetter={Item.getItemHeight}
              itemGetter={this.renderItem} />
        </Surface>);
    },
    getSize() {
        return document.getElementById('main').getBoundingClientRect();
    },
    getListViewStyle() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
    },
    getNumberOfItems() {
        //return this.state.lists.length;
        return 10;
    },
    renderItem(itemIndex, scrollTop) {
        var _item = this.state.lists[itemIndex % this.getNumberOfItems()];
          return (
          <Item
            width={this.getSize().width}
            height={Item.getItemHeight()}
            imageUrl={_item?_item.imageUrl||'':''}
            title={_item?_item.name||'':''}
            itemIndex={itemIndex} />
        );
    }
});

//run
ReactDOM.render(<App/>, document.getElementById('main'),()=>{
    console.log('render start___'+new Date().getTime());
  });
