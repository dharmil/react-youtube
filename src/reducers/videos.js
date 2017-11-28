import * as type from '../constants/actionTypes';

const videos = (state = [], action) => {
    switch(action.type) {
        case type.APPEND_VIDEOS:
            return [...state, ...action.payload];

        default: 
            return state;
    }
};

export default videos;