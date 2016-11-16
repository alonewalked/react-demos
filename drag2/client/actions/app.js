export const LOADING = "APP_LOADING";

export const changeLoading = state => dispatch => {
    state = !!state;
    dispatch({
        "type":LOADING,
        state
    });
};

export const addItem = (id, item) => dispatch => {
    state = !!state;
    dispatch({
        "type":LOADING,
        state
    });
};
