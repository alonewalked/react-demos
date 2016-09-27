import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { MyModal as Modal } from './components';
const maps = { Modal };

// config
import CONFIG from './config';

const getComponent = () => CONFIG.component[1];
const getValue = key => getComponent()[key];

export default (props)=>React.createElement(maps[getValue('type')], {...props});
