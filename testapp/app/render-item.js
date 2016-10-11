import React from 'react';

import { TableFactory as Tabel } from './components/tabel';
import { Box } from './components/box';
const maps = { Tabel, Box };

// config
//import CONFIG from './config';

const getComponent = () => CONFIG.component[1];
const getValue = key => getComponent()[key];

export default (type, props)=>React.createElement(maps[type], {...props});
