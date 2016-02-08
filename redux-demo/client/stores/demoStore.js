var redux = require('redux');
var thunk = require('redux-thunk');

var {
    createStore,
    applyMiddleware
} = redux;

var deomReducer = require('../reducers/demos');

function configureStore(initialState) {
    const store = createStore(
        deomReducer,
        initialState,
        applyMiddleware(thunk));
    return store;
}

module.exports = configureStore;