import React, {Component} from 'react';
import "../App.css";
import {getVideoById} from '../actions/video';
import {getComments} from '../actions/comments';
import {getRelatedVideos} from '../actions/videos';
import YouTube from 'react-youtube';
import Comments from './Comments';

export default class VideoPage extends Component
{
    constructor(props) {
        super(props)
        this.state = { width: 0, height: 0 };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        const {ui, dispatch} = this.props;

        if(ui.global.requests === 0) {
            if(Object.keys(this.props.video).length === 0) {
                dispatch(getVideoById(this.props.id));
            }

            if(this.props.comments.length === 0) { 
                dispatch(getComments(this.props.id));
            }

            if(this.props.videos.length === 0) {
                dispatch(getRelatedVideos(this.props.id, (this.props.ui.videos.resultType === 'relatedVideos') ? this.props.ui.videos.nextPageToken : ''));
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
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

    renderPrimaryInfo = (video) => {
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

    renderRecommendedVideos = (videos) => {
        if (Object.keys(videos).length === 0) {
            return <div className = "right_split" />;
        }

        return <div className = "right_split">
        {videos.map((video, index) => {
            return <div key = {index} className = "image_row">
                <img alt = "preview" className = "image_pic" src = {video.snippet.thumbnails.high.url} />
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
        })};
        <center><input onClick = {this.onLoadMoreVideos} type = "button" value = "Load More" /></center>
        </div>;
    }

    render() {
        const opts = {
            height: '720',
            width: this.state.width - 600,
            playerVars: {
              autoplay: 0
            }
          };

        return  <div className = "content_container">
                    {this.renderRecommendedVideos(this.props.videos)}
                    <div className = "left_split">
                        <div className = "video_container">
                            <YouTube videoId={this.props.id} opts={opts} />
                        </div>
                        {this.renderPrimaryInfo(this.props.video)}
                        <Comments comments={this.props.comments} loadMoreComments={this.onLoadMoreComments} />
                    </div>
                </div>;
    }
}