import videos from './videos';
import ui from './ui';
import { combineReducers } from 'redux';

const root = combineReducers({
    videos, 
    ui
});

export default root;