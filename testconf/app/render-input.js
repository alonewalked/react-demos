import React from 'react';

import Input from './components';
const maps = { Input };

// config
import CONFIG from './config';

const getComponent = () => CONFIG.component[3]
const getValue = key => getComponent()[key];

export default (props)=>React.createElement(getValue('type'), {...props});
