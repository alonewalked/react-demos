import { createStore, applyMiddleware, bindActionCreators, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as reducersall from '../reducers';

let reducers = combineReducers(reducersall);

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk)
    );
    return store;
}
