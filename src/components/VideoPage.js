import React, {Component} from 'react';
import "../grid.css";
import "../App.css";
import {getVideoById} from '../actions/video';
import {getComments} from '../actions/comments';
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
        
        return <div className="primary_info" style = {{fontSize: '10px'}}>
        <div className = "video_title">{video.snippet.title}</div>
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

        return <div className = "video_page">
            Video page for {this.props.id}<br />
            {this.renderPrimaryInfo(this.props.video)}
            <YouTube videoId={this.props.id} opts={opts} />
            <Comments comments={this.props.comments} loadMoreComments={this.onLoadMoreComments} />
            </div>;
    }
}