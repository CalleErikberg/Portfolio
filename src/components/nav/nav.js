import React, { Component } from "react"
import aids from "react-scroll"

class Nav extends Component {
  render() {
    return (
      <div className="topnav">
      <aids.Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          Home
        </aids.Link>
        <aids.Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          About
        </aids.Link>
        
        <aids.Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          Portfolio
          </aids.Link>

          <aids.Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          Contact
        </aids.Link>
      </div>
    )
  }
}
export default Nav
