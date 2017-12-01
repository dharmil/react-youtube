import React from 'react';
import "../grid.css";

const Video = props => {
    const video = props.video.snippet;
    return <div className = "col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div>{video.title}</div>
        <br />
        <img src={video.thumbnails.medium.url} alt={video.title} />
    </div>;
};

export default Video;