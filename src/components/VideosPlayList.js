import React from 'react';
import VideoPage from './VideoPage';
import {getNextVideo} from '../actions/playlist';

export default class VideosPlayList extends VideoPage
{
    onLoadMoreVideos = null;

    onStateChangeHandler = (e) => {
        if(e.data === 0) {//the video has ended 
            this.props.dispatch(getNextVideo(this.props.ui.playlist.index, this.props.videos.length));
        }
    }

    getYoutubeOptions() {
        return {...super.getYoutubeOptions(), ...{playerVars: {autoplay: 1}}};
    }

    render() {
        const {videos} = this.props;

        if(Object(videos).length === 0) {
            return <center><h1>Add some videos to the playlist first!</h1></center>;
        }

        return super.render();
    }
}