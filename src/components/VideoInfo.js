import React from 'react';

const VideoInfo = (props) => {
    const {video} = props;
    
    if (Object.keys(video).length === 0) {
        return null;
    }
    
    return <div className = "video_metadata_container">
            <span className = "video_title">{video.snippet.title}</span>
            <span className = "video_views">{video.statistics.viewCount} views</span>
        </div>;
            // <div className = "video_desc_container">
            //     <span className = "video_publisher">T-Series</span>
            //     <span className = "video_description">lameloa</span>
            // </div>;
}

export default VideoInfo;