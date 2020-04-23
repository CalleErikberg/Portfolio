import React, { Component } from "react"
import EC from "../../videos/ec.png"
const axios = require("axios")

class Intro extends Component {
  state = {
    name: "",
  }
  async getBeer() {
    let result = await axios.get(
      `${'https://cors-anywhere.herokuapp.com/'}https://sandbox-api.brewerydb.com/v2/beer/random/?key=ce5768dc362b14bc994b602492784bf5`
    )
    this.setState({ name: result.data.data.name })
  }
  componentDidMount() {
    this.getBeer()
    //const ass=Math.random()
  }
  render() {
    return (
      <div className="row" id="home">
        <div className="column1">
          <img src={EC} />
          <h1> by Erik Calleberg</h1>
        </div>

        <div className="column2">
          <h1>Hello there!</h1>

          <p>
            Welcome to my <b>portfolio!</b> Are you looking for
            someone to take a look at your company's graphical look?
            Someone to create new layouts for <b>your websites</b>, <b>app</b>, <b> logo</b>
            and/or <b>the design of your products</b>? Contact me, I'm currently itching for 
            work. <b>#frontend #UI-design #masterstudent</b>
          </p>
          <h4>Below is an API that generates random beers!</h4> (just to show off that I made an API work)
          <p>{this.state.name} 🍺</p>
        </div>
      </div>
    )
  }
}
export default Intro
