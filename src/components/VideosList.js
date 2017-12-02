import React from 'react';
import {connect} from 'react-redux';
import "../grid.css";
import VideoItem from "./VideoItem";
import {searchYoutube} from '../actions/videos';
import {chunk} from './../utils';

const InnerVideosList = (props) => {
    const videos = chunk(props.videos, 4);
    const {ui, dispatch} = props;

    const onLoadMore = (e) => {
        e.preventDefault();
        dispatch(searchYoutube(ui.query, ui.nextPageToken));
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

const mapStateToProps = (state) => {
    return {
        videos: state.videos,
        ui: state.ui.videos
    }
};

const VideosList = connect(
    mapStateToProps,
)(InnerVideosList)

export default VideosList;