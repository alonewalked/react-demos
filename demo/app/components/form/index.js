import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToPropsForm } from '../../stores';

let styles = {
    btn: {
        color: '#3B41B0',
        cursor: "pointer"
    }
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return(
            <span style={styles.btn} onClick={this.handleClick}>add</span>
        )
    }
    handleClick() {
        let { config, actions } = this.props;
        let { add } = actions;
        let { fieldname } = config['lists'];
        let val = {};
        val[fieldname] = +new Date
        add(val);
    }
};
Form = connect(null, mapDispatchToPropsForm)(Form);

export default Form;