import * as type from '../constants/actionTypes';
import {VIDEOS_API_URL, API_KEY} from '../constants/api';
import {queryString} from './../utils';

const constantParams = () => {return {key: API_KEY, part: 'snippet,statistics'}};

export const videoSet = (data) => {
    return {
        type: type.VIDEO_SET,
        payload: data.items[0]
    }
}

export const getVideoById = (videoId) => {
    return {
        type: type.API,
        payload: {
            url: `${VIDEOS_API_URL}` + queryString({id: videoId, ...constantParams()}),
            success: videoSet
        }
    };
}