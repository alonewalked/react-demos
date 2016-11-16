import React from 'react';

// import { TableFactory as Tabel } from './modules/tabel';
// import { Box } from './modules/box';
// const maps = { Tabel, Box };

export default
(type, props) => React.createElement(maps[type], {...props});
