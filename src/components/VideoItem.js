import React from 'react';
import "../grid.css";
import {Link} from 'react-router-dom';

const VideoItem = props => {
    const video = props.video.snippet;
    const videoLink = `/video/${props.video.id.videoId}`;
    return <div>
        <div>{video.title}</div>
        <Link to={videoLink}><img src={video.thumbnails.medium.url} alt={video.title} /></Link>
    </div>;
};

export default VideoItem;