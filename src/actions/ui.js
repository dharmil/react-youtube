import * as type from '../constants/actionTypes';

export const apiStart = () => {
    return {
        type: type.API_START,
    };
};

export const apiDone = () => {
    return {
        type: type.API_DONE,
    };
};
