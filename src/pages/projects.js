import React, { Component } from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import BackToTop from "../components/backToTop/backToTop"
import customersafari from "../videos/Kundsafari.png"
import comic from "../videos/sketch.png"
import FW from "../videos/appfw.mp4"
import fallbackfw from "../videos/appfw.png"
import frostis from "../videos/frostis.png"
import skramyran from "../videos/SKRAMYRANBLACK.png"
import EC from "../videos/ec.png"
import Comintelli from "../videos/comintelly.png"
import Comintelli2 from "../videos/lo_fi.png"
import coopsketch from "../videos/coop_sketch.png"
import fondbergs from "../videos/fondberg_sketch.png"

class Projects extends React.Component {
  state = {
    class: "hidden",
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window || {}

    if (scrollY > 1300) {
      this.setState({ class: "projects" })
    }
  }
  render() {
    return (
      <div className={this.state.class} id="projects">
        <div className="allp">
        <title>Erik Calleberg - Portfolio</title>
        <Link className="back" to="/">
          Back
        </Link>
        <BackToTop />
        <div className="project1">
        <div className="colB">
            <h1>COOP - Service Design</h1>
            <p>
              The work has been carried out for the food company Coop Sverige
              AB. The group started the project by participating in two
              teacher-led workshops to prepare the group members for the real
              work. The first major step towards creating a current situation
             was an analysis of Coop by going to the store and conducting a Customer
              Safari, Customer Interviews and Staff Interviews. The insights of
              these methods were then used as the basis for the continued work
              of a workshop, brainstorming for solutions, a value map and
              service map that demonstrates the entire omni channel for Coop.
              The result of the work was a new experience trip for both
              customers and staff, where the digital service contributes to
              highlighting the value of an ecological and sustainable lifestyle.  
              {" "}
               <a
                className="protLink"
                href="https://xd.adobe.com/view/11c62f85-f3df-4608-9d60-2cd91c3dcbc4/"
                target="_blank"
              > 
                 <b>Click here to see the final prototype.</b>
                </a>
            </p>
          </div>
          <div className="colA">
            <img src={coopsketch} alt="sketch" />
            <img src={customersafari} alt="customer safari map" />
            <img src={comic} alt="sketch" />
          </div>
          
        </div>
        <div className="project1">
          <div className="colB">
            <h1>Internship - Comintelli AB</h1>
            <p>
              My internship at Comintelli AB consisted of a UX project where I
              and my colleague worked on trying to find a solution to improve
              the workflow for their customers on their
              Intelligence2day-software based service. The project started with
              learning Comintelli's product and from there starting workshops and
              brainstorming solutions for making the site more linear for
              customers. Sketches on paper went through several iterations of
              discussions and workshops.
              <br />
              <br />
              Later we built lo-fi prototypes to better illustrate our
              ideas for those working with product to get their very valuable
              insights. The last two weeks the lo-fi prototypes were analyzed and put
              together to form a hi-fi prototype made to look like the real site.
              {" "}
              <a
                className="protLink"
                href="https://xd.adobe.com/view/531e798e-575b-4647-5bdf-e0f52a881b9d-252f/"
                target="_blank"
              >
                <b>Click here to see the final prototype.</b>
              </a>
            </p>
          </div>
          <div className="colA">
            <img src={Comintelli} alt="sketch" id="ComintelliSketch" />
            <img src={Comintelli2} alt="lo-fi" />
          </div>
        </div>
        <div className="project1">
          
          <div className="colB">
            <h1>Sharp Design Project - Fondberg & Wincent</h1>
            <p>
              The project was about finding a basis for and creating a prototype
              application for questionnaire surveys on digital stress and screen
              usage for the company Fondberg & Wincent. The prototypes have
              undergone several iterations with user tests where feedback from
              each iteration has been implemented in the next prototype, from a
              paper prototype to a digital prototype. The project ended in a
              branded hi-fi prototype with graphic elements and UX-based design
              choices that should motivate the users to answer the questionnaire
              questions. This prototype served as research in how questionnaires
              can be made interactive, less stressful to do and not feel like a
              tedious task. 
            </p>
          </div>
          <div className="colA">
            <img src={fondbergs} alt="sketch fondberg" />
            <video className="app" poster={fallbackfw} autoPlay loop muted>
              <source src={FW} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="project1G">
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
            <img src={EC} alt="logo3" />
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Projects
