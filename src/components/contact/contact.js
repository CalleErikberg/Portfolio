import React, { Component } from "react"


class Contact extends Component {
  state = {
    class: "hidden",
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window || {}

    if (scrollY > 2000) {
      this.setState({ class: "contact" })
    }
  }
  render() {
    return (
      <div className={this.state.class} id="contact">
        <h1 id="textme">Contact me!</h1>
        <div className="linkimg">
          <a href="https://www.linkedin.com/in/erik-calleberg-610106159/">
            <img
              src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/CalleErikberg">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    )
  }
}
export default Contact
