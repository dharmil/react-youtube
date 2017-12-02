import VideosList from '../components/VideosList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        videos: state.videos,
        ui: state.ui.videos
    }
};

const VideosListContainer = connect(
    mapStateToProps,
)(VideosList)

export default VideosListContainer;