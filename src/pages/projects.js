import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import MyVideo from "../videos/skyrimSmile.mp4"
import MyVideoPoster from "../videos/fallbackskyrim.png"
import BackToTop from "../components/backToTop/backToTop"
import customersafari from "../videos/Kundsafari.png"
import comic from "../videos/sketch.png"
import FW from "../videos/appfw.mp4"
import fallbackfw from "../videos/appfw.png"
import frostis from "../videos/frostis.png"
import skramyran from "../videos/SKRAMYRANBLACK.png"

class Projects extends React.Component {
  render() {
    return (
      <div className="allp">
        <Link className="back" to="/">
          Back
        </Link>
        <BackToTop />
        <video className="videoBack" poster={MyVideoPoster} autoPlay loop muted>
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="project1">
          <div className="colA">
            <img src={customersafari} alt="customer safari map" />
            <img src={comic} alt="sketch" />
          </div>
          <div className="colB">
            <h1>COOP - Service Design</h1>
            <p>
              The work has been carried out for the food company Coop Sverige
              AB. The group started the project by participating in two
              teacher-led workshops to prepare the group members for the real
              work. The first major step towards creating a current situation
              analysis of Coop by going to the store and conducting a Customer
              Safari, Customer Interviews and staff interviews. The insights of
              these methods were then used as the basis for the continued work
              of a workshop, brainstorming for solutions, a value map and
              service map that demonstrates the entire omni channel for Coop.
              The result of the work was a new experience trip for both
              customers and staff, where the digital service contributes to
              highlighting the value of an ecological and sustainable lifestyle.
            </p>
          </div>
        </div>
        <div className="project1">
          <div className="colB">
            <h1>Internship - Comintelli AB</h1>
            <p>
              My internship at Comintelli AB consisted of a UX project where me
              and my colleague worked on trying to find a solution to improve
              the workflow for their customers on their
              Intelligence2day-software based service. The interface was rebuilt
              with a focus on smooth workflows between the different parts of
              the page using the personas. The result was a hi-fi prototype for
              the company.
            </p>
          </div>
          <div className="colA">
            <img src="https://i0.wp.com/comintelli.com/wp-content/uploads/2015/07/Comintelli_Large-Box.png?fit=700%2C679&ssl=1" />
          </div>
        </div>
        <div className="project1">
          <div className="colA">
            {/*<img src="https://yt3.ggpht.com/a-/AAuE7mA7nIjc5Y1hBa81uHc_wNi7foC5M6QpxzTeXw=s900-mo-c-c0xffffffff-rj-k-no" /> */}
            <video className="app" poster={fallbackfw} autoPlay loop muted>
              <source src={FW} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="colB">
            <h1>Sharp Design Project - Fondberg & Wincent</h1>
            <p>
              The project was about finding a basis for and creating a prototype
              application for questionnaire surveys on digital stress and screen
              usage. The prototypes have undergone several iterations with user
              tests where feedback from each iteration has been implemented in
              the next prototype, from a paper prototype to a digital prototype.
              The project ended in a branded hi-fi prototype with graphic
              elements and UX-based design choices that should motivate the
              users to answer the questionnaire questions.
            </p>
          </div>
        </div>
        <div className="project1">
          <div className="colBG">
            <h1>Graphical Productions</h1>
            <p>
              Here are some graphic productions such as logotypes,
              illustrations, sketches, prototypes, style documents and ideas.
            </p>
          </div>
          <div className="colAG">
            <img src={frostis} alt="logo1" />
            <img src={skramyran} alt="logo2" />
          </div>
        </div>
      </div>
    )
  }
}
export default Projects
