import * as type from '../constants/actionTypes';

const comments = (state = [], action) => {
    switch(action.type) {
        case type.COMMENTS_SET:
            return [...action.payload];
            
        case type.COMMENTS_APPEND:
            return [...state, ...action.payload];

        default: 
            return state;
    }
};

export default comments;