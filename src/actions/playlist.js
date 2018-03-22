import * as type from '../constants/actionTypes';

export const playlistAppend = (video) => {
    var obj = {};
    obj[video.id.videoId] = video;

    return {
        type: type.PLAYLIST_APPEND,
        payload: obj,
    }
}

export const playlistUpdateInfo = (index) => {
    return {
        type: type.PLAYLIST_UPDATE_INFO,
        payload: {
            index
        }
    }
}

export const getNextVideo = (currentIndex, size) => (dispatch) => {
    const index = (currentIndex + 1 >= size) ? 0 : currentIndex + 1; //round it out 
    dispatch(playlistUpdateInfo(index));
}