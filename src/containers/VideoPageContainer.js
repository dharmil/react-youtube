import VideoPage from '../components/VideoPage';
import {connect} from 'react-redux';

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