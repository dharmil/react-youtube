import React, { Component } from 'react';
import Search from './components/Search';
import VideosList from './components/VideosList';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "header">My YT app</div>
        <Search />
        <VideosList />
      </div>
    );
  }
}

export default App;
