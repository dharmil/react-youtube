import React, {Component} from 'react';
import "../grid.css";
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

    render() {
        console.log(this.props);
        const opts = {
            height: '720',
            width: '1280',
            playerVars: {
              autoplay: 0
            }
          };

        return <div>
            Video page for {this.props.id}<br />
            <YouTube videoId={this.props.id} opts={opts} />
            <Comments comments={this.props.comments} loadMoreComments={this.onLoadMoreComments} />
            </div>;
    }
}