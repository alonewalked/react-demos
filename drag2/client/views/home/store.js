import { bindActionCreators } from 'redux';
import { changeLoading } from '../../actions';

export function propsList(state) {
    return { ...state.appReducer }
}

export function actionsList(dispatch) {
    return {
        actions: bindActionCreators({
            changeLoading
        }, dispatch)
    };
}
