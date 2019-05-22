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
          <img src={me} alt=""/>
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
            I am Erik Calleberg and you are probably seeing this page because
            you want to know what kind of person I am and what my interests are.
            Considering this page’s theme I’m kind of nerd. My interests involve
            PC-gaming and to balance that with some outdoors I practise
            orienteering together with some variety exercise. Also memes are
            fun.
            <br /> <br />
            As for my experience with Design, the best part of design is the
            process from an idea to a fully-fledged prototype to deliver and
            especially the UX/UI aspects of a project. Although my primary focus
            is the Design-world I did manage to code this website from scratch
            with Gatsby.js built with React.js and Node.js if you specialize
            more in Front-end development. You won't be dissatisfied if you add
            me to your deck!
          </p>
        </div>
      </div>
    )
  }
}
export default AboutMe
