import React, { Component } from "react"
import { Link } from "react-scroll";

class Nav extends Component {
  render() {
    return (
      <div className="flexnav">
        <div className="logga">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M25 13C13.441 13 1 16.441 1 24c0 6.688 9.746 10.152 20 10.86v6.187L32.629 32 21 22.953v5.895C11.8 28.14 7 25.133 7 24c0-1.285 6.188-5 18-5 11.813 0 18 3.715 18 5 0 .555-1.578 2.21-6.273 3.54l-.727.202v6.176l1.238-.309C44.824 31.734 49 28.32 49 24c0-7.559-12.441-11-24-11z" />
          </svg>
        </div>
        <div className="topnav">
        <Link  activeClass="active"
    to="portfolio"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {400}>
   Portfolio
    </Link>
    <Link  activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {400}>
   About
    </Link>
    <Link  activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {400}>
   Contact
    </Link>
           
         
        </div>
      </div>
    )
  }
}
export default Nav
