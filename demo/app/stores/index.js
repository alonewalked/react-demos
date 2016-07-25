import { createStore, applyMiddleware, bindActionCreators, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { listReducer, aReducer } from '../reducers';

import { add, fetch } from '../actions';

import config from "../config";

let reducers = combineReducers({listReducer,aReducer});


export function mapStateToProps(state) {
    return {
        config
    }
}
export function mapStateToPropsList(state) {
    return {
        "lists": state.listReducer.lists
    }
}

export function mapDispatchToPropsForm(dispatch){
    return{
        actions : bindActionCreators({ add },dispatch)
    }
}

export function mapDispatchToPropsList(dispatch){
    return{
        actions : bindActionCreators({ fetch },dispatch)
    }
}

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState
        //applyMiddleware(thunk));
    return store;
}