import * as type from '../constants/actionTypes';

const video = (state = {}, action) => {
    switch(action.type) {
        case type.VIDEO_SET:
            return action.payload;

        default: 
            return state;
    }
};

export default video;