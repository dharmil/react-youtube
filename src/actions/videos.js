import * as type from '../constants/actionTypes';
import {VIDEOS_API_URL, API_KEY} from '../constants/api';

const queryString = (obj) => Object.keys(obj).map(k => `${k}=${encodeURIComponent(obj[k])}`).join('&');

const constantParams = () => {return {key: API_KEY, part: 'snippet', maxResults: 25, type: 'video'}};

export const videosSet = (data) => {
    return {
        type: type.VIDEOS_SET,
        payload: data.items
    }
}

export const videosAppend = (data) => {
    return {
        type: type.VIDEOS_APPEND,
        payload: data.items
    }
}

export const videosUpdateInfo = (data) => {
    return {
        type: type.VIDEOS_UPDATE_INFO,
        payload: {
            nextPageToken: data.nextPageToken,
            totalResults: data.pageInfo.totalResults
        }
    }
}

export const videosIntialSearchSuccess = (data) => (dispatch) => {
    dispatch(videosSet(data));
    dispatch(videosUpdateInfo(data));
}

export const videosConsequentSearchSuccess = (data) => (dispatch) => {
    dispatch(videosAppend(data));
    dispatch(videosUpdateInfo(data));
}

export const searchYoutube = (query, pageToken = '') => (dispatch) => {
    if(pageToken === '') 
        dispatch({type: type.VIDEOS_UPDATE_INFO, payload: {query}});

    dispatch({
        type: type.API,
        payload: {
            url: `${VIDEOS_API_URL}` + queryString({q: query, pageToken, ...constantParams()}),
            success: (pageToken === '') ? videosIntialSearchSuccess : videosConsequentSearchSuccess
        }
    });
}