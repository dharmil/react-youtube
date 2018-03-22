import React from 'react';
import {Link} from 'react-router-dom';

const VideoItem = props => {
    const video = props.video.snippet;
    const videoLink = `/video/${props.video.id.videoId}`;

    const onClick = (e) => props.onAddToPlayList(props.index);

    return <div>
        <div>{video.title}</div>
        <div className = "img_container">
        <Link to={videoLink}><img src={video.thumbnails.medium.url} alt={video.title} /></Link>
        {!props.ifAddedToPlaylist && <span onClick={onClick}><i className="fa fa-plus-square"></i></span>}
        </div>
    </div>;
};

export default VideoItem;