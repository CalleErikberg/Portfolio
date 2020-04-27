import React, { Component } from "react"
import me from "../../videos/meme.png"

class AboutMe extends Component {
  state = {
    class: "hidden",
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window || {}

    if (scrollY > 100) {
      this.setState({ class: "about" })
    }
  }
  render() {
    return (
      <div className={this.state.class} id="about">
        <div className="columnA2">
          <ul class="stats">
            <h1>Competences</h1>
            <h3>UI Design</h3>
            <li className="skill1">
            </li>
            <h3>Design Thinking</h3>
            <li className="skill2">
            </li>
            <h3>Adobe Suite</h3>
            <li className="skill3">
            </li>
            <h3>Interaction Design</h3>
            <li className="skill4">
            </li>
            <h3>Front-End Development</h3>
            <li className="skill4">
            </li>
          </ul>
        </div>
        <div className="columnA3">
          <h2>An UX/UI Designer!</h2>
          <p>
            I am 22 years old, raised in Stockholm where I currently live. My
            interests are computer games, orienteering, memes and an active
            outdoor lifestyle. I am currently a student at Södertörns Högskola studying 
            their Master's programme "User Experience and  Interactive Media Design"!
            <br />
            <br />
            As for my experience with Design, the best part of design for me is
            the journey from just an idea to a fully-fledged prototype to
            deliver. Especially interesting are the UX/UI aspects of a project,
            seeing the small details of e.g where a “Accept”-button goes and
            why. Although my primary experience is Design I tend to return to
            coding projects such as this website I made from scratch with Gatsby.js
            and React.js.
          </p>
        </div>
      </div>
    )
  }
}
export default AboutMe
