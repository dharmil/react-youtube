import React from 'react';
import VideoItem from "./VideoItem";
import {searchYoutube} from '../actions/videos';
import {playlistAppend} from '../actions/playlist';
// import {chunk} from './../utils';

const VideosList = (props) => {
    // const videos = chunk(props.videos, 4);
    const {videos, ui, playlist, dispatch} = props;

    const onLoadMore = (e) => {
        e.preventDefault();
        dispatch(searchYoutube(ui.query, ((ui.resultType === 'search') ? ui.nextPageToken : '')));
    };

    const onAddToPlayList = (index) => {
        dispatch(playlistAppend(videos[index]));
    }

    return <div><div className="videos_grid">
        {videos.length >= 0 && videos.map((video, index) => {
            const ifAddedToPlaylist = video.id.videoId in playlist;
            return <div className="video_grid" key={index}>
                        <VideoItem key = {index} index={index} video={video} onAddToPlayList={onAddToPlayList} ifAddedToPlaylist={ifAddedToPlaylist} />
                    </div>;
        })}<br />
    </div>
    {ui.nextPageToken !== '' && <center><input type = "button" value = "Load More" onClick={onLoadMore} /></center>}
    </div>;
};

export default VideosList;