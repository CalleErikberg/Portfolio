import React, { Component } from "react"

class Card extends Component {
  state = {
    class: 'hidden'
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window || {}

    if (scrollY > 900) {
      this.setState({ class: 'container' })
    }
  }

  render() {
    console.log(this.state.class);
    return (
      <div className={this.state.class}>
        <img
          className="open-modal"
          src={this.props.pic}
        />
        <div className="myModal modal">
          <div className="modal-content">
            <h3 className="caption">{this.props.title}</h3>
            <span className="close">&times;</span>
            <p className="info">
              {this.props.firstText}
              <br />
              <br />
              {this.props.secondText}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
