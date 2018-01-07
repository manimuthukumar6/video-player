import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'video.js/dist/video-js.min.css';
import VideoPlayer from "./VideoPlayer";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          autoplay: true,
          controls: true,
          sources: [{
              src: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4',
              type: 'video/mp4'
          }]
      };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Video Player</h2>
        </div>
        <div className="App-intro">
            <VideoPlayer { ...this.state } />
        </div>
      </div>
    );
  }
}

export default App;