import { createStore } from 'redux';
import root from  '../reducers/root';

export default() => {
    return createStore(root,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}