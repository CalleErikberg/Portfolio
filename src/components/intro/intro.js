import React, { Component } from "react"
//const axios = require("axios")

class Intro extends Component {
  /* state = {
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
  }*/
  render() {
    return (
      <div className="row" id="home">
        <div className="column2">
          <h1>Hello there!</h1>
          <p>
            Welcome to my <b>portfolio!</b>
            <br />
            Contact me, I recently completed a short position as a Front-end
            Developer at IC Control Media and Sport AB. I am now looking, with
            fire in my eyes, toward the UX/UI-industry!
            <b>#juniorfrontend #UI #UX #Mastersdegree</b>
          </p>
        </div>
      </div>
    )
  }
}
export default Intro
