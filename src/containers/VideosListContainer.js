import VideosList from '../components/VideosList';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        videos: (state.ui.videos.resultType === 'search') ? state.videos : [],
        ui: state.ui.videos
    }
};

const VideosListContainer = connect(
    mapStateToProps,
)(VideosList)

export default VideosListContainer;