import React from 'react';
import {Link} from 'react-router-dom';

const RecommendedVideos = (props) => {
    const {videos, onLoadMoreVideos} = props;

    if (Object.keys(videos).length === 0) {
        return <div className = "right_split" />;
    }

    return <div className = "right_split">
    {videos.map((video, index) => {
        const videoLink = `/video/${video.id.videoId}`;
        return <div key = {index} className = "image_row">
            <Link to={videoLink}><img alt = "preview" className = "image_pic" src = {video.snippet.thumbnails.high.url} /></Link>
            <div className = "image_description">
                <span className = "image_desc_title">
                    {video.snippet.title}
                </span>
                <span className = "image_publisher_title">
                    {video.snippet.channelTitle}
                </span>
                {/* <span className = "image_num_views">
                    97M views
                </span>
                <span className = "video_duration">
                    3:31
                </span> */}
            </div>
        </div>;
    })}
    {onLoadMoreVideos != null && <center><input onClick = {onLoadMoreVideos} type = "button" value = "Load More" /></center>}
    </div>;
}

export default RecommendedVideos;