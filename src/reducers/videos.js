import * as type from '../constants/actionTypes';

const videos = (state = [], action) => {
    switch(action.type) {
        case type.VIDEOS_SET:
            return [...action.payload];
            
        case type.VIDEOS_APPEND:
            return [...state, ...action.payload];

        default: 
            return state;
    }
};

export default videos;