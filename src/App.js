import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import VideosList from './components/VideosList';
import VideoPageContainer from './components/VideoPage';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Header />
        <Search />
        <VideoPageContainer videoId='_VOXxKDNCuM' />
        <VideosList />
      </div>
    );
  }
}

export default App;
