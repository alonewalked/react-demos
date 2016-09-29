import fetch from 'isomorphic-fetch';
import React, {
    DOM
} from 'react';
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
        var { childrens, action } = this.props;
        return form({
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
                    onClick: chd['onClick']?chd['onClick'].bind(this):null
                }));
                return _tmp;
            })()
        });
    },
    doSubmit() {

    }
};
