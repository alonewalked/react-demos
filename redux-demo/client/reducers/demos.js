var initialState = [];
var {
    FETCH_DEMOS
} = require('../actions/actions');

function demosReducer(state = initialState, action) {
  switch(action.type) {
  case FETCH_DEMOS: return [...action.payload];
  default: return state;
  }
}

module.exports = demosReducer;