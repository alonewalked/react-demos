import React, {
    DOM
} from 'react';
const {
    table,
    tr,
    td
} = DOM;

const datas = [{
    'name': 'foo',
    'age': 23,
    'gender': 'male'
},{
    'name':"bar",
    'age': 25,
    'gender': 'female'
},
{
    'name': 'alice',
    'age': 34,
    'gender': 'male'
}];

class Tabel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return table({
            children: datas.map((data)=>{
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
