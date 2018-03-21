import React from 'react';
import "../grid.css";
import VideoItem from "./VideoItem";
import {searchYoutube} from '../actions/videos';
// import {chunk} from './../utils';

const VideosList = (props) => {
    // const videos = chunk(props.videos, 4);
    const {videos, ui, dispatch} = props;

    const onLoadMore = (e) => {
        e.preventDefault();
        dispatch(searchYoutube(ui.query, ((ui.resultType === 'search') ? ui.nextPageToken : '')));
    };

    return <div><div className="videos_grid">
        {videos.length >= 0 && videos.map((video, index) => {
            return <div className="video_grid" key={index}>
                        <VideoItem key = {index} video={video} />
                    </div>;
        })}<br />
    </div>
    {ui.nextPageToken !== '' && <center><input type = "button" value = "Load More" onClick={onLoadMore} /></center>}
    </div>;
};

export default VideosList;