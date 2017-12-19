import React, {Component} from 'react';
import "../grid.css";
import "../App.css";
import {getVideoById} from '../actions/video';
import {getComments} from '../actions/comments';
import {getRelatedVideos} from '../actions/videos';
import YouTube from 'react-youtube';
import Comments from './Comments';

export default class VideoPage extends Component
{
    componentDidMount() {
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

    onLoadMoreComments = (e) => {
        e.preventDefault();
        this.props.dispatch(getComments(this.props.id, this.props.ui.comments.nextPageToken));
    }

    renderPrimaryInfo = (video) => {
        if (Object.keys(video).length === 0) {
            return null;
        }
        
        return <div className="primary_info">
            <div className = "video_title">{video.snippet.title}</div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className = "view_counter">{video.statistics.viewCount} views</div>
                <div className = "like_menu">LIKE/DISLIKE</div>
            </div>
        </div>;
    }

    render() {
        const opts = {
            height: '720',
            width: '1280',
            playerVars: {
              autoplay: 0
            }
          };

        return <div className="content_wrapper">
                    <div className = "main_content">
                        <div className = "video_page">
                            Video page for {this.props.id}<br />
                            <YouTube videoId={this.props.id} opts={opts} />
                            {this.renderPrimaryInfo(this.props.video)}
                            <Comments comments={this.props.comments} loadMoreComments={this.onLoadMoreComments} />
                        </div>
                    </div>
                    <div className = "related_videos">
                        <div>X</div>
                        <div>X</div>
                        <div>X</div>
                        <div>X</div>
                        <div>X</div>
                        <div>X</div>
                    </div>
            </div>;
    }
}