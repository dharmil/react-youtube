import React, {Component} from 'react';
import "../App.css";
import {getVideoById} from '../actions/video';
import {getComments} from '../actions/comments';
import {getRelatedVideos} from '../actions/videos';
import YouTube from 'react-youtube';
import Comments from './Comments';
import RecommendedVideos from './RecommendedVideos';
import VideoInfo from './VideoInfo';

export default class VideoPage extends Component
{
    constructor(props) {
        super(props)
        this.state = { width: 0, height: 0 };
        this.getYoutubeOptions = this.getYoutubeOptions.bind(this);
    }

    fetchData = (props) => {
        const {ui, dispatch} = props;
        
        if(ui.global.requests === 0) {
            if(Object.keys(props.video).length === 0) {
                dispatch(getVideoById(props.id));
            }

            if(props.comments.length === 0) { 
                dispatch(getComments(props.id));
            }

            if(props.videos.length === 0) {
                dispatch(getRelatedVideos(props.id, (props.ui.videos.resultType === 'relatedVideos') ? props.ui.videos.nextPageToken : ''));
            }
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.fetchData(this.props);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.id !== nextProps.id) {
            this.fetchData(nextProps);
        }
    }
      
    updateWindowDimensions = (e) => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    onLoadMoreComments = (e) => {
        e.preventDefault();
        this.props.dispatch(getComments(this.props.id, this.props.ui.comments.nextPageToken));
    }

    onLoadMoreVideos = (e) => {
        e.preventDefault();
        this.props.dispatch(getRelatedVideos(this.props.id, this.props.ui.videos.nextPageToken));
    }

    getYoutubeOptions() {
        return {
            height: 720,
            width: this.state.width - 600,
            playerVars: {
              autoplay: 0
            }
          };
    }

    onStateChangeHandler = (e) => {}

    render() {
        return  <div className = "content_container">
                    <RecommendedVideos videos={this.props.videos} onLoadMoreVideos={this.onLoadMoreVideos} />
                    <div className = "left_split">
                        <div className = "video_container">
                            <YouTube videoId={this.props.id} opts={this.getYoutubeOptions()} onStateChange={this.onStateChangeHandler} />
                        </div>
                        <VideoInfo video={this.props.video} />
                        <Comments comments={this.props.comments} loadMoreComments={this.onLoadMoreComments} />
                    </div>
                </div>;
    }
}