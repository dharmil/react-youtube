import * as type from '../constants/actionTypes';
import {COMMENTS_API_URL, API_KEY} from '../constants/api';
import {queryString} from './../utils';

const constantParams = () => {return {key: API_KEY, part: 'snippet', maxResults: 25}};

export const commentsSet = (data) => {
    return {
        type: type.COMMENTS_SET,
        payload: data.items
    }
}

export const commentsAppend = (data) => {
    return {
        type: type.COMMENTS_APPEND,
        payload: data.items
    }
}

export const commentsUpdateInfo = (data) => {
    return {
        type: type.COMMENTS_UPDATE_INFO,
        payload: {
            nextPageToken: data.nextPageToken,
        }
    }
}

export const commentsIntialSearchSuccess = (data) => (dispatch) => {
    dispatch(commentsSet(data));
    dispatch(commentsUpdateInfo(data));
}

export const commentsConsequentSearchSuccess = (data) => (dispatch) => {
    dispatch(commentsAppend(data));
    dispatch(commentsUpdateInfo(data));
}

export const getComments = (videoId, pageToken = '') => {
    return {
        type: type.API,
        payload: {
            url: `${COMMENTS_API_URL}` + queryString({videoId, pageToken, ...constantParams()}),
            success: (pageToken === '') ? commentsIntialSearchSuccess : commentsConsequentSearchSuccess
        }
    };
}