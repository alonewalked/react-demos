const initialState = {
    lists: []
};
import { ADD, FETCH } from '../actions';

export function listReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH:
            return Object.assign({}, state);
        case ADD: 
            state.lists = [...state.lists.slice(0), action.item];
            return Object.assign({}, state);
        default: 
            return state;
    }
}
