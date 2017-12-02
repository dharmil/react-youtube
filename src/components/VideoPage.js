import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getVideoById} from '../actions/video';
import {getComments} from '../actions/comments';
import YouTube from 'react-youtube';

class VideoPage extends Component
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

    render() {
        console.log(this.props);
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 0
            }
          };

        return <div>
            Video page for {this.props.id}<br />
            <YouTube videoId={this.props.id} opts={opts} />
            </div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.video,
        comments: state.comments.filter((comment) => comment.snippet.videoId === ownProps.videoId),
        id: ownProps.videoId,
        ui: state.ui,
    }
};

const VideoPageContainer = connect(
    mapStateToProps,
)(VideoPage)

export default VideoPageContainer;