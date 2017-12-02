import videos from './videos';
import ui from './ui';
import comments from './comments';
import video from './video';

import { combineReducers } from 'redux';

const root = combineReducers({
    ui,
    videos, 
    comments,
    video,
});

export default root;