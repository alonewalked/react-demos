import fetch from 'isomorphic-fetch';
import querystring from 'qs';
import React, {
    DOM
} from 'react';
import ReactDOM from 'react-dom';

var {
    input,
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
        // return (
        //   <form >
        //     <input type="text" placeholder="Your name" />
        //     <input type="text" placeholder="Say something..." />
        //     <input type="submit" value="Post" />
        //   </form>
        // );
        var { childrens, action, name } = this.props;
        return form({
            ref:name,
            action,
            children: childrens.map((chd)=> this.getChild(chd))
        });
	}
    getChild(chd) {
        return p({
            children:(()=>{
                var _tmp = [];
                if(chd.label) {
                    _tmp.push(span(null, chd.label));
                }
                _tmp.push(DOM[chd['type']]({
                    type: chd['inputType'],
                    value:chd['value'],
                    name: chd['bindfield'],
                    onClick: chd['onClick']?chd['onClick'].bind(this):null
                }));
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
