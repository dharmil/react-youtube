import VideosPlayList from '../components/VideosPlayList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const videos = Object.values(state.playlist);
    const id =  (state.ui.playlist.index in videos) ? videos[state.ui.playlist.index].id.videoId : '';

    return {
        video: (state.video.id === id) ? state.video : {},
        comments: state.comments.filter((comment) => comment.snippet.videoId === id),
        videos,
        playlist: state.playlist,
        id,
        ui: state.ui,
    };
};

const VideosPlayListContainer = connect(
    mapStateToProps,
)(VideosPlayList)

export default VideosPlayListContainer;