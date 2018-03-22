import React, { Component } from 'react';
import Header from './components/Header';
import VideosListContainer from './containers/VideosListContainer';
import VideoPageContainer from './containers/VideoPageContainer';
import VideosPlayListContainer from './containers/VideosPlayListContainer';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "App_container">
            <Header />
            <Switch>
              <Route exact path = '/' component = {VideosListContainer} />
              <Route exact path = '/video/:videoId' component = {VideoPageContainer} />
              <Route exact path = '/playlist/' component = {VideosPlayListContainer} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
