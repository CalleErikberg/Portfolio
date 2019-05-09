import React, { Component } from "react"


class AboutMe extends Component {
  render() {
    return (
        <div className="about" id="about">
        <div className="row">
          <div className="columnA">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M25 13C13.441 13 1 16.441 1 24c0 6.688 9.746 10.152 20 10.86v6.187L32.629 32 21 22.953v5.895C11.8 28.14 7 25.133 7 24c0-1.285 6.188-5 18-5 11.813 0 18 3.715 18 5 0 .555-1.578 2.21-6.273 3.54l-.727.202v6.176l1.238-.309C44.824 31.734 49 28.32 49 24c0-7.559-12.441-11-24-11z" />
            </svg>
          </div>
          <div className="columnA2">
            <h2>About me!</h2>
            <p>
              My name is Erik Calleberg, I am 22 years old and I grew up in
              Stockholm, Sweden loving playing video games, the outdoors and the
              feeling of accomplishment. I play mostly multiplayer games and they
              are much about competing with other players, because I like to get
              better at the things I like to do. The same goes for competing in
              orienteering, it’s a very individual sport and the only one you can
              rely on during a race is yourself. What I strive for in life is
              accomplishing my tasks and improving off of them.
              <br /> <br />
              My experiences with learning Design and UX/UI have been very
              insightful and interesting. The courses have made me realize the
              importance of Design Processes through many projects and processes.
              I resently finished a three-year program in IT, media and design.
              What I have found most interesting during my studies is UX, UI,
              design methods (design thinking) and design theories (like what
              makes a design work and why). The projects have all been about
              empathy with customers, define the problem that needs to be solved,
              start brainstorming ideas on how to solve them, create prototypes
              and test the solutions (Design Thinking). During these projects, the
              prototypes can range from everything from sketching on paper to
              creating prototypes in Adobe XD or Adobe Illustrator. I have basic
              skills in Adobe Illustrator, Sony Vegas Pro 13, Java, PHP, SQL and
              HTML + CSS.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutMe