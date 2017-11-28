import * as type from '../constants/actionTypes';

export const apiStart = () => {
    return {
        type: type.API_START,
        payload: {}
    }
}

export const apiDone = () => {
    return {
        type: type.API_DONE,
        payload: {}
    }
}