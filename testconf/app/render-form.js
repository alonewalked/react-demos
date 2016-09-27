import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { MyForm as Form } from './components';
const maps = { Form };

// config
import CONFIG from './config';

const getComponent = () => CONFIG.component[2];
const getValue = key => getComponent()[key];

export default (props)=>React.createElement(maps[getValue('type')], {...props});
