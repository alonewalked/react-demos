import React from 'react';
import $q from 'q';
import _ from 'lodash';

import Item from './item';

export default React.createClass({
    idx: 0,
    getInitialState() {
        return {
            lists:this.initlist()
        }
    },
    componentDidMount() {
        this.add().then(this.truble);
    },
    shouldComponentUpdate(np, ns){
        return ns!=this.state;
    },
    render() {
        this.ping();
        let items = [];
        this.state.lists.forEach((item)=>{
            items.push(<Item text={item.text} key={item.id}/>)
        });
        return (
            <div className="container">{items}</div>
        )
    },
    initlist() {
        let _lists = [];
        for(let i = 0;i<10;i++){
            ((_i)=>{
                _lists.push({
                    text: 'item' +this.idx,
                    id: this.idx
                });
                this.idx++;
            })(i)
        }
        return _lists;
    },
    add() {
        var _def = $q.defer();
        function inner(){
            setTimeout(()=>{
                var _items = this.state.lists;
                _items.push({
                    text:'item'+this.idx,
                    id: this.idx
                });
                this.setState({
                    lists: _items
                });
                this.idx++;
                if(this.idx>=100){
                    return _def.resolve();
                }
                else{
                    inner.call(this);
                }
            },100);
        }
        inner.call(this);
        return _def.promise;
    },
    truble() {
        setTimeout(()=>{
            this.setState({
                lists: _.shuffle(this.state.lists)
            });
            this.truble();
        },200)
    },
    ping() {
        if(this.props.rate){
            this.props.rate.renderRate.ping();
        }
    }
});