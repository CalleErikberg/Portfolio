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
        <div className="column2">
          <h1>Hello there!</h1>

          <p>
            Welcome to my <b>portfolio!</b>    
            <br></br>Contact me, I'm currently itching for 
            work. <b>#frontend #UI-design #Copywriting #UX-design #Mastersdegree</b>
          </p>
          <h4>Below is an API that generates random beers!</h4> (just to show off that I made an API work)
          <p>{this.state.name} 🍺</p>
        </div>
      </div>
    )
  }
}
export default Intro
