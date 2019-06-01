import React, { Component } from "react"
import MyVideo from "../../videos/skyrimSmile.mp4"
import MyVideoPoster from "../../videos/fallbackskyrim.png"
import EC from "../../videos/ec.png"
const axios = require("axios")

class Intro extends Component {
  state = {
    name: "",
  }
  async getBeer() {
    let result = await axios({
      method: "get",
      url:
        "https://sandbox-api.brewerydb.com/v2/beer/random/?key=ce5768dc362b14bc994b602492784bf5",
    })
    this.setState({ name: result.data.data.name })
  }
  componentDidMount() {
    this.getBeer()
  }
  render() {
    return (
      <div className="row" id="home">
        <video className="videoBack" poster={MyVideoPoster} autoPlay loop muted>
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="column1">
          <img src={EC} />
          <h1> by Erik Calleberg</h1>
        </div>

        <div className="column2">
          <h1>Hello there!</h1>

          <p>
            Welcome to this handcrafted webpage, built in <b>Gatsby.js</b> and
            <b> React.js</b>, created by <b>Erik Calleberg</b>. This webpage
            will act as my portfolio showcasing my skills in UX, UI, Design
            Thinking, Customer Journey maps, design projects, personality
            traits, interests and experiences.
          </p>
          <h4>Here is an API that generates random beers!</h4>
          <p>{this.state.name}</p>
        </div>
      </div>
    )
  }
}
export default Intro
