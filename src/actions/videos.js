import * as type from '../constants/actionTypes';
import {VIDEOS_SEARCH_API_URL, API_KEY} from '../constants/api';
import {queryString} from './../utils';

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
        dispatch({type: type.VIDEOS_UPDATE_INFO, payload: {query, resultType: 'search'}});

    dispatch({
        type: type.API,
        payload: {
            url: `${VIDEOS_SEARCH_API_URL}` + queryString({q: query, pageToken, ...constantParams()}),
            success: (pageToken === '') ? videosIntialSearchSuccess : videosConsequentSearchSuccess
        }
    });
}

export const getRelatedVideos = (videoId, pageToken = '')  => (dispatch) => {
    dispatch({type: type.VIDEOS_UPDATE_INFO, payload: {resultType: 'relatedVideos'}});

    dispatch({
        type: type.API,
        payload: {
            url: `${VIDEOS_SEARCH_API_URL}` + queryString({relatedToVideoId: videoId, pageToken, ...constantParams()}),
            success: (pageToken === '') ? videosIntialSearchSuccess : videosConsequentSearchSuccess
        }
    });
}