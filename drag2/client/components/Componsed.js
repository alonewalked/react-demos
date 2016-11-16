import React from 'react';

export const Configurable =
ComponsedComponent => class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ComponsedComponent {...this.props} {...this.state} />
        );
    }
};
