import { LOADING } from '../actions';

const defaultState = {
    loading: true
};
export function appReducer(state=defaultState, action) {
    switch(action.type){
        case LOADING:
            return { ...state, loading:action.state }
        default:
            return state;
    }
}
