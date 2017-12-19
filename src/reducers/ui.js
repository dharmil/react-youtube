import * as type from '../constants/actionTypes';

const initialState = {
    global: {
        requests: 0,
    },
    videos: {
        nextPageToken: '', 
        totalResults: 0,
        query: '',
        resultType: 'search',
    },
    comments: {
        nextPageToken: '',
    },
    suggestions: [],
};

const globalReducer = (state = initialState.global, action) => {
    switch(action.type) {
        case type.API_START:
            return {...state, requests: state.requests + 1};

        case type.API_DONE:
            return {...state, requests: (state.requests - 1 >= 0) ? state.requests - 1 : 0};

        default:
            return state;
    }
};

const videosReducer = (state = initialState.videos, action) => {
    switch(action.type) {
        case type.VIDEOS_UPDATE_INFO:
            return {...state, ...action.payload};

        default:
            return state;
    }
}

const commentsReducer = (state = initialState.comments, action) => {
    switch(action.type) {
        case type.COMMENTS_UPDATE_INFO:
            return {...state, ...action.payload};

        default:
            return state;
    }
}

const suggestionsReducer = (state = initialState.suggestions, action) => {
    switch(action.type) {
        case type.SUGGESTIONS_SET:
            return [...action.payload];

        default:
            return state;
    }
}

const ui = (state = initialState, action) => {
    return {
        global: globalReducer(state.global, action),
        videos: videosReducer(state.videos, action),
        comments: commentsReducer(state.comments, action),
        suggestions: suggestionsReducer(state.suggestions, action),
    }
}

export default ui;