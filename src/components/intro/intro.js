import React, { Component } from "react"
import MyVideo from "../../videos/skyrimSmile.mp4"
import MyVideoPoster from "../../videos/fallbackskyrim.png"
import EC from "../../videos/ec.png"

class Intro extends Component {
  render() {
    return (
      <div className="row" id="home">
        <video className="videoBack" poster={MyVideoPoster} autoPlay loop muted>
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="column1">
          <img src={EC}></img>
          <h1> by Erik Calleberg</h1>
        </div>

        <div className="column2">
          <h1>Hello there!</h1>

          <p>
            Welcome to this handcrafted webpage, built in <b>Gatsby.js</b> and 

                      <b> React.js</b>, created by <b>Erik Calleberg</b>. This webpage will act as my
            portfolio showcasing my skils in UX, UI, Design Thinking, Customer
            Journey maps, design projects, personality traits, interests and
            experiences.
          </p>
        </div>
      </div>
    )
  }
}
export default Intro
