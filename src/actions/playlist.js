import * as type from '../constants/actionTypes';

export const playlistAppend = (video) => {
    var obj = {};
    obj[video.id.videoId] = video;

    return {
        type: type.PLAYLIST_APPEND,
        payload: obj,
    }
}