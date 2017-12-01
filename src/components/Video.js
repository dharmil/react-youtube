import "../grid.css";
import React from 'react';

const Video = props => {
    const video = props.video.snippet;
    return <div className="col-md-3">
        <div>{video.title}</div>
        <br />
        <img src={video.thumbnails.medium.url} />
    </div>;
};

export default Video;