import React, { Component } from "react"

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
            <h3>UI-design</h3>
            <h3 className="skill1" />
            <h3>CMS</h3>
            <li className="skill2" />
            <h3>Adobe Suite</h3>
            <li className="skill3" />
            <h3>UX-design</h3>
            <li className="skill4" />
            <h3>Front-End Development</h3>
            <li className="skill4" />
          </ul>
        </div>
        <div className="columnA3">
          <h2>
            An aspiring UX/UI-Designer, Copywriter and junior Front-End
            Developer
          </h2>
          <p>
            I am 24 years old, raised in Stockholm where I currently live. My
            interests are computer games, history, memes and an active outdoor
            lifestyle.
          </p>
        </div>
      </div>
    )
  }
}
export default AboutMe
