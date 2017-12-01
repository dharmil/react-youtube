import { createStore, applyMiddleware } from 'redux';
import root from  '../reducers/root';
import apiMiddleware from '../middleware/api';
import thunk from 'redux-thunk';

export default() => {
    return createStore(
        root,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk, apiMiddleware)
    );
};
