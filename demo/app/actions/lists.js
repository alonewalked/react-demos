export const ADD = 'ADD';
export const FETCH = 'FETCH';

export function add (item) {
    // you can dispatch action
    return(dispatch, getState)=>{
        dispatch({
            "type":ADD,
            item
        });
    }
};

export function fetch(){
    return (dispatch, getState) => {
        dispatch({
            type: FETCH
        });
    };
}