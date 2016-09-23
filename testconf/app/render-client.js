import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Table } from './components/table';

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

const table = React.createFactory(Table);

export default ()=>ReactDOMServer.renderToString(table({datas}));