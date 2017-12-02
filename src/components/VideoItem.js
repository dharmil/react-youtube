import React from 'react';
import "../grid.css";
import {Link} from 'react-router-dom';

const VideoItem = props => {
    const video = props.video.snippet;
    const videoLink = `/video/${props.video.id.videoId}`;
    return <div className = "col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div>{video.title}</div>
        <br />
        <Link to={videoLink}><img src={video.thumbnails.medium.url} alt={video.title} /></Link>
    </div>;
};

export default VideoItem;