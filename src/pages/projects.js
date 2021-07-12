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
import ecb from "../videos/ecblack.png"
//import Comintelli from "../videos/comintelly.png"
//import Comintelli2 from "../videos/lo_fi.png"
import coopsketch from "../videos/coop_sketch.png"
import fondbergs from "../videos/fondberg_sketch.png"
//import digilar from "../videos/next.png"
import mvp from "../videos/engelskaV2.mp4"
import fback from "../videos/2scrren.png"
import select1 from "../videos/Select1.png"
import startlogin from "../videos/StartLogin.png"

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
          <h1 id="porttitle">Portfolio</h1>
            <h1>Moonshot</h1>
            <p>
              Moonshot is an app that I designed that is going to be published
              in late summer (hopefully) and it serves as a tool for project owners
              and collaborators to find each other. It is inspired by the legendary
              swiping function to gamify the user experience, making it more interactive
              and clear for both project owners and collaborators. The design was made
              in Adobe XD, and after many iterations came to look like this! The design
              has been delivered to a programmer and is currently being coded.  
              {" "}
            </p>
          </div>
          <div className="colA">
            <img src={select1} alt="app1" />
            <img src={startlogin} alt="app2" />
            {/* <img src={swipe} alt="app3" /> */}
          </div>
          
        </div>
        <div className="project1">
        <div className="colB">
            <h1>Sharp Design Project - COOP</h1>
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
              tedious task. <a
                className="protLink"
                href="https://xd.adobe.com/view/aeb4a364-6433-4626-6f5f-0809d3e52350-d885/?fbclid=IwAR1fnd-H95kxd-Egt1EgpvWYHqdMXqHKdjIYIEjKfsGWXgmF_ya2BrmpjPg"
                target="_blank"
              >
                <b>Click here to see the final prototype.</b>
              </a>
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
        <div className="project1">
          
          <div className="colB">
            <h1>Sharp design project - Digilär</h1>
            <p>
            The purpose of this practical design project was to create a digital platform for Digilär. Digilär is a part of Natur & Kultur and is 
            currently working to digitize teaching and learning. 
            The purpose of the digital platform was to explore how it is possible to attract university students to use a 
            digital supplement for learning. The aim of the project was to create a design concept that
             Digilär could use to create a digital platform for universities and colleges. 
             The project resulted in a data collection with students and teachers and a high-fi prototype that met defined needs. 
             The prototype was developed through various phases and iterations with users and clients. 
             The project was carried out similar to a design thinking process where different phases deal with different 
             parts in the creation of a good design.

            </p>
          </div>
          <div className="colA">
            <video className="app" poster={fback} autoPlay loop muted>
              <source src={mvp} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="project1G">
          <div className="colBG">
            <h1>Logos</h1>
            <p>
              Here are some logotypes I have created.
            </p>
          </div>
          <div className="colAG">
            <img src={frostis} alt="logo1" />
            <img src={skramyran} alt="logo2" />
            <img src={ecb} alt="logo3" />
          </div>
        </div>
        <div className="project1G">
          <div className="colBG">
            <h1>Copywriter Examples</h1>
            <p>
              Here are some pieces of text that I have written to either shorten something down 
              or write a selling statement of a project. With more to come!
            </p>
          </div>
          <div className="colAG">
          <h1>POV Statement - Sharp Design Projekt: Digilär</h1>
            <p>
            To conclude the analyzation a POV-statement was written for the group to know the focus of the project in a short sentence: <br></br>
</p>
<p><i>“Highschool/University students <b>need</b> to feel that buying course literature is beneficial, 
reliable and affordable <b>to support</b> their learning meanwhile the publishers can produce high 
quality course literature.”</i>

            </p>
            <h1>Project - Probe Pics: Slogan</h1>
            <p>
            Probe Pics was a concept for a webb plug-in that would allow the user to quickly do a reverse image search 
            to confirm the validity of news and social media posts </p><br></br>

<p><i>“Be sure - probe it!”</i></p>

            
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Projects
