import React, { Component } from "react"

class Card extends Component { 
    render() {
      return (
        <div className="container">
        <div className="front">
          <img src={this.props.pic}/>
          <h3 className="caption">{this.props.title}</h3>
          <p className="info">{this.props.firstText}<br/><br/>{this.props.secondText}</p>
        </div>
      </div>
      )
    }
  }
  export default Card