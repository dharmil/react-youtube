import React from 'react';
import "../grid.css";
import VideoItem from "./VideoItem";
import {searchYoutube} from '../actions/videos';
import {chunk} from './../utils';

const VideosList = (props) => {
    const videos = chunk(props.videos, 4);
    const {ui, dispatch} = props;

    const onLoadMore = (e) => {
        e.preventDefault();
        dispatch(searchYoutube(ui.query, ((ui.resultType === 'search') ? ui.nextPageToken : '')));
    };

    return <div className="videoslist">
        {props.videos.length >= 0 && videos.map((row, index) => {
            return <div className="row" key={index}>
                        {row.map((video, i) => <VideoItem key = {i} video={video} />)}
                    </div>;
        })}
        <br />
        {ui.nextPageToken !== '' && <div className = "row center-xs"><input type = "button" value = "Load More" onClick={onLoadMore} /></div>}
    </div>;
};

export default VideosList;