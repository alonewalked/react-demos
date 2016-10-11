import React, { PropTypes } from 'react';

export default class Input extends React.Component {
	static propTypes = {
	    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
	};
	static defaultProps = {
	    Component: 'input'
	};
	constructor(props) {
	    super(props);
	    this.state = {value: props.value};
	}
	render() {
		let { Component, value, ...props } = this.props;
		<Component
        {...props}
        value={value} />
	}
};
