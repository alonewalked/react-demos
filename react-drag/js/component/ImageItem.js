//ImageItem
'use strict';

import React from 'react';
import { DragableItemMixin } from '../dragable/index.js';

export default React.createClass({
  mixins: [DragableItemMixin],
  getDefaultProps () {
    return {
      className: 'img-item'
    };
  },

  render () {
    return this.renderWithDragable(
      <img draggable={false} src={this.props.src} className={this.props.className} />
    );
  }
});