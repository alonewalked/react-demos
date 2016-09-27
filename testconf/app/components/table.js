import React, {
    DOM
} from 'react';
var {
    table,
    tr,
    td
} = DOM;

class Tabel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return table({
            children: this.props.datas.map(function(data) {
                return tr(null,
                    td(null, data.name),
                    td(null, data.age),
                    td(null, data.gender)
                );
            })
        });
    }
};

export const TableFactory = React.createFactory(Tabel);
