import {apiStart, apiDone} from '../actions/api';
import {BASE_URL} from '../constants/api';

const apiMiddleware = ({dispatch}) => (next) => (action) => {

    if(action.type !== 'API') {
        return next(action);
    }

    const { payload } = action;

    const handleError = error => dispatch({type: payload.error, error});

    dispatch(apiStart());

    fetch(BASE_URL + payload.url)
        .then(response => {
            dispatch(apiDone());
        })
        .then(response => {
            if (response.status >= 300) {
                handleError(response.status);
            } else {
                response.json()
                .then(data => dispatch({ type: payload.next, data }));
            }
        })
        .catch(error => {
            dispatch(apiDone()); 
            handleError(error)
        });
};

export default apiMiddleware;