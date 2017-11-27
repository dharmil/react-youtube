import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "header">My YT app</div>
        <Search />
      </div>
    );
  }
}

export default App;
