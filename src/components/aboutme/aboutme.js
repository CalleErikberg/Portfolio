import React, { Component } from "react"
import me from "../../videos/meyo.png"

class AboutMe extends Component {
  state = {
    class: "hidden",
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window || {}

    if (scrollY > 1000) {
      this.setState({ class: "about" })
    }
  }
  render() {
    return (
      <div className={this.state.class} id="about">
        <div className="columnA">
          <img src={me} alt="" />
        </div>
        <div className="columnA2">
          <ul class="stats">
            <h1>Distribution of skills</h1>
            <h3>UX/UI Design</h3>
            <li class="skill1">
              <p>⭐⭐⭐⭐</p>
            </li>
            <h3>Design Thinking</h3>
            <li class="skill2">
              <p>⭐⭐⭐⭐⭐</p>
            </li>
            <h3>Adobe Illustrator</h3>
            <li class="skill3">
              <p>⭐⭐⭐</p>
            </li>
            <h3>Adobe Experience Design</h3>
            <li class="skill4">
              <p>⭐⭐⭐</p>
            </li>
            <h3>Front-End Development</h3>
            <li class="skill4">
              <p>⭐⭐⭐</p>
            </li>
          </ul>
        </div>
        <div className="columnA3">
          <h2>An UX-Designer and Front-End developer!</h2>
          <p>
            I am 22 years old, raised in Stockholm where I currently live. My
            interests are computer games, orienteering, memes and an active
            outdoor lifestyle.
            <br />
            <br />
            As for my experience with Design, the best part of design for me is
            the journey from just an idea to a fully-fledged prototype to
            deliver. Especially interesting are the UX/UI aspects of a project,
            seeing the small details of e.g where a “Accept”-button goes and
            why. Although my primary experience is Design I tend to return to
            coding project. Like this website I made from scratch with Gatsby.js
            and React.js.
          </p>
        </div>
      </div>
    )
  }
}
export default AboutMe
