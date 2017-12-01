import React from 'react';
import {connect} from 'react-redux';
import "../grid.css";
import Video from "./Video";

const chunk = (arr, size) => {
    let rows = [];
    for(let i = 0; i < arr.length; i = i + size) {
        let row = [];

        for(let j = 0; j < size; j++) {
            if (i + j < arr.length)
            row.push(arr[i + j]);
        }

        rows.push(row);
    }

    return rows;
};

const InnerVideosList = (props) => {
    const videos = chunk(props.videos, 3);
    return <div className="videoslist">
        {props.videos.length >= 0 && videos.map((row, index) => {
            return <div className="row" key={index}>
                    {row.map((video, i) => {
                        return <Video key = {i} video={video} />;
                    })}
                </div>;
        })}
    </div>;
};

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}

const VideosList = connect(
    mapStateToProps,
)(InnerVideosList)

export default VideosList;