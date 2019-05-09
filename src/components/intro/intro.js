import React, { Component } from "react"
import Helmet from 'react-helmet'
import YouTube from 'react-youtube';

class Intro extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }
  _onEnd(event) {
    event.target.playVideo();
  }
  render() {
  
    const opts = {
      height: '1080',
      width: '1920',
      loop: '1',
      playlist: '7ZWgBbKItEw',
      rel: 0,
        controls: 0,
        playsinline: 1,
        frameborder: 0,
        allowfullscreen: 1,
        autobuffer: 1,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        enablejsapi: 1,
        autoplay: 1,
        loop: 1,
        playlist: '7ZWgBbKItEw',
        rel: 0,
        controls: 0,
        playsinline: 1,
        frameborder: 0,
        allowfullscreen: 1,
        autobuffer: 1
      }
    };
    return (
      <div className="row">
      <YouTube className="YouTube"
        videoId="i_mcY2DsIjA"
        opts={opts}
        onReady={this._onReady}
      />
        <div className="column1">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 13C13.441 13 1 16.441 1 24c0 6.688 9.746 10.152 20 10.86v6.187L32.629 32 21 22.953v5.895C11.8 28.14 7 25.133 7 24c0-1.285 6.188-5 18-5 11.813 0 18 3.715 18 5 0 .555-1.578 2.21-6.273 3.54l-.727.202v6.176l1.238-.309C44.824 31.734 49 28.32 49 24c0-7.559-12.441-11-24-11z" />
          </svg>
        </div>

        <div className="column2">
          <h1>Hello there!</h1>

          <p>
            Welcome to this handcrafted webpage, created by Erik Calleberg. This
            webpage will show you why Erik could be a valuable asset to your
            company and team! <br />
            <br />
            This webpage will act as a portfolio, showcasing Erik’s skills in
            UX, UI, Design Thinking, Customer Journey maps, design projects,
            personality traits, interests and experiences.
            <br />
            <br />
            Thank you for taking your time and checking out this page, have a
            wonderful day!
          </p>
        </div>
      </div>
    )
  }
}
export default Intro
