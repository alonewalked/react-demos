import React, { Component } from 'react';
import Container from './Container';
import ReactDOM from 'react-dom';

class NestingDragSources extends Component {
	render() {
		return (
			<div>
				<Container />
			</div>
		);
	}
}

ReactDOM.render(<NestingDragSources />, document.getElementById('app'));
