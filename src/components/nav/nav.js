import React, { Component } from "react"
import { Link } from "react-scroll"
import { Link as blub} from "gatsby"

class Nav extends Component {
  render() {
    return (
      <div className="topnav">
      <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          Contact
        </Link>
        <blub
          activeClass="active"
          to="/projects/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          Portfolio ↗
        </blub>
      </div>
    )
  }
}
export default Nav
