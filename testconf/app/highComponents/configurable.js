import React from 'react';
import { Link } from 'react-router';

import CONFIG from '../config';

export let Configurable = ComponsedComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: CONFIG.routes.map((item,idx)=><Link key={idx} to={item.to}>{item.name}</Link>)
        }
    }
    render() {
        return (
            <ComponsedComponent {...this.props} {...this.state} />
        );
    }
};