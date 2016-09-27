import React, {
    DOM
} from 'react';
var {
    input
} = DOM;
export class MyForm extends React.Component {
	constructor(props) {
        super(props);
        this.displayName = 'Form'
    }
	render() {
        return (
          <form >
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Say something..." />
            <input type="submit" value="Post" />
          </form>
        );
	}
};
