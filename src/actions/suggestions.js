import * as type from '../constants/actionTypes';
import {SUGGESTIONS_API_URL} from '../constants/api';
import {queryString} from './../utils';
import jsonp from 'jsonp-es6';

const constantParams = () => {return {client: 'youtube', ds: 'yt'}};

export const suggestionsSet = (data) => {
    return {
        type: type.SUGGESTIONS_SET,
        payload: data[1].map(el => el[0])
    };
}

export const getSuggestions = (query) => (dispatch) => {
    const url = `${SUGGESTIONS_API_URL}` + queryString({q: query, ...constantParams()});

    jsonp(url).then(result => {
        dispatch(suggestionsSet(result));
    });
}