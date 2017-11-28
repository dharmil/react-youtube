import * as type from '../constants/actionTypes';

export function searchYoutube(query) {
    return {
        type: 'SEARCH_YOUTUBE',
        payload: {
            query
        }
    }
}