import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import VideosListContainer from './containers/VideosListContainer';
import VideoPageContainer from './containers/VideoPageContainer';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <Search />
        <VideoPageContainer videoId='_VOXxKDNCuM' />
        <VideosListContainer />
      </div>
    );
  }
}

export default App;
