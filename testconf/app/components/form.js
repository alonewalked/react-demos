import fetch from 'isomorphic-fetch';
import querystring from 'qs';
import React, {
    DOM
} from 'react';
import ReactDOM from 'react-dom';

import { Input } from 'antd';

const antDom = {
    aInput: React.createFactory(Input)
};

var {
    form,
    p,
    span
} = DOM;

export class MyForm extends React.Component {
	constructor(props) {
        super(props);
        this.displayName = 'Form'
    }
	render() {
        var { childrens, action, name } = this.props;
        return form({
            ref:name,
            action,
            children: childrens.map((chd)=> this.getChild(chd))
        });
	}
    getChild(chd) {
        return p({
            children:(()=> {
                var _tmp = [];
                if(chd.label) {
                    _tmp.push(span(null, chd.label));
                }
                let _props = {
                    type: chd['inputType'],
                    name: chd['bindfield'],
                    onClick: chd['onClick']?chd['onClick'].bind(this):null
                };
                _props = Object.assign({}, _props, chd['props']);
                _tmp.push(antDom[chd['type']](_props));
                return _tmp;
            })()
        });
    }
    doSubmit(...arg) {
        var body = new FormData(ReactDOM.findDOMNode(this.refs['testform']));
        return fetch(arg[0], {
            method: 'POST',
            mode: "cors",
            body
        });
    }
};
