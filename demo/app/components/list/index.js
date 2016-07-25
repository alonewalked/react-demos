import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsList, mapDispatchToPropsList } from '../../stores';

class List extends React.Component {
    render() {
        let { lists, config} = this.props;
        let { fieldname } = config['lists'];
        let rows = [];
        lists.forEach((item, idx)=>{
            rows.push(<div key={idx}>{item[fieldname]}</div>)
        });
        return(
            <div>
                {rows}
            </div>
        )
    }
}
List = connect(mapStateToPropsList, mapDispatchToPropsList)(List);
export default List;