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
        <div className="linkimg">
          <a href="mailto:erik.calleberg@gmail.com">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/180px-Gmail_Icon.svg.png"
              alt="Mail"
            />
          </a>
          <a href="https://www.linkedin.com/in/erik-calleberg-610106159/">
            <img
              src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://github.com/CalleErikberg">
            <img
              src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1-300x300.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    )
  }
}
export default Contact
