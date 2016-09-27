import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { TableFactory as Table } from './components';
const maps = {Table};

// config
import CONFIG from './config';

const getComponent = () => CONFIG.component[0];
const getValue = key => getComponent()[key];

export default ()=>ReactDOMServer.renderToString(maps[getValue('type')]({datas:getValue('datas')}));
