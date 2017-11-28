import {apiStart, apiDone} from '../actions/ui';
import * as type from '../constants/actionTypes';

const apiMiddleware = ({dispatch}) => (next) => (action) => {

    if(action.type !== type.API) {
        return next(action);
    }

    const { payload } = action;

    const handleError = error => {
        if(error in payload) {
            dispatch({type: payload.error, error});
        } else {
            console.log(error);
        }
    }

    dispatch(apiStart());

    fetch(payload.url)
        .then(response => {
            if (response.status >= 300) {
                handleError(response.status);
            } else {
                response.json()
                .then(data => {
                    if(typeof payload.success === 'function') {
                        dispatch(payload.success(data));
                    } else {
                        dispatch({ type: payload.success, payload: data });
                    }
                });
            }
        })
        .then(response => {
            dispatch(apiDone());
        })
        .catch(error => {
            dispatch(apiDone()); 
            handleError(error)
        });
};

export default apiMiddleware;