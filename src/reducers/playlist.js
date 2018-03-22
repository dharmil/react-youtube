import * as type from '../constants/actionTypes';

const playlist = (state = {}, action) => {
    switch(action.type) {
        case type.PLAYLIST_APPEND:
            return {...state, ...action.payload};

        default: 
            return state;
    }
};

export default playlist;