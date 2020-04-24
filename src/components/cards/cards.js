import React, { Component } from "react"
import Card from "./card"
import { Link } from "gatsby"

class Cards extends Component {
  render() {
    return (
      <div className="content" id="portfolio">
        <h1>Portfolio</h1>
        <p className="intro-portfolio">
          Click on one of the thumbnails to go the portfolio page for informations about the projects!
        </p>
        <div id="content">
        <Link to="/projects/">
          <Card
            index={0}
            pic="https://media-eu.jobylon.com/CACHE/companies/company-logo/demo-sverige/coop_logo_sweden_green.9d2a1c4e/1849c21895bf81009bb55e97d2bfb751.jpg"
            title="COOP - Service Design"
            firstText="The work has been carried out for the food company Coop Sverige AB. The group started the project by participating in two teacher-led workshops to prepare the group members for the real work. The first major step towards creating a current situation analysis of Coop by going to the store and conducting a Customer Safari, Customer Interviews and staff interviews. The insights of these methods were then used as the basis for the continued work of a workshop, brainstorming for solutions, a value map and service map that demonstrates the entire omni channel for Coop."
            secondText="The result of the work was a new experience trip for both customers and staff, where the digital service contributes to highlighting the value of an ecological and sustainable lifestyle."
          />
          </Link>
          <Link to="/projects/">
          <Card
          index={1}
            pic="https://i0.wp.com/comintelli.com/wp-content/uploads/2015/07/Comintelli_Large-Box.png?fit=700%2C679&ssl=1"
            title="Internship - Comintelli AB"
            firstText="My internship at Comintelli AB consisted of a UX project where
          me and my colleague worked on trying to find a solution to
          improve the workflow for their customers on their
          Intelligence2day-software based service."
            secondText="The interface was rebuilt with a focus on smooth workflows
          between the different parts of the page using the personas. The
          result was a hi-fi prototype for the company."
          />
          </Link>
          <Link to="/projects/">
          <Card
          index={2}
            pic="https://yt3.ggpht.com/a-/AAuE7mA7nIjc5Y1hBa81uHc_wNi7foC5M6QpxzTeXw=s900-mo-c-c0xffffffff-rj-k-no"
            title="Sharp Design Project - Fondberg & Wincent"
            firstText="The project was about finding a basis for and creating a
          prototype application for questionnaire surveys on digital
          stress and screen usage. The prototypes have undergone several
          iterations with user tests where feedback from each iteration
          has been implemented in the next prototype, from a paper
          prototype to a digital prototype."
            secondText=" The project ended in a branded hi-fi prototype with graphic
          elements and UX-based design choices that should motivate the
          users to answer the questionnaire questions."
          />
          </Link>
          <Link to="/projects/">
          <Card
          index={3}
            pic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png"
            title="Graphical Productions"
            firstText=" Here are some graphic productions such as logotypes,
             illustrations, sketches, prototypes, style documents and ideas."
            secondText=""
          />
          </Link>
          <Link to="/projects/">
          <Card
            index={4}
            pic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png"
            title="GG.BUDDY"
            firstText="This was a project requested by a friend to improve the layout of their idea to match people with random players on with each other for fast connections and a local voice chat." 
            secondText="The project itself was cancelled but I got to work on web layouts which I think is really fun."
          />
          </Link>
          <Link to="/projects/">
          <Card
            index={5}
            pic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png"
            title="Interactive Dance Floor - Rave Cave"
            firstText="This was a project in my Master's programme in which the project group had as a task to create a interactive exhibition on the theme green enviroment and citizens. 
            It ended up in as an interactive dance floor, and using Wizard of Oz (illusions) we tricked the user into thinking that they where actually generating power by dancing "
            secondText="The result of the work was a new experience trip for the users and for us students to experiment with illusion techniques and Micro:bit+light programming."
          />
          </Link>
          <Link to="/projects/">
          <Card
            index={6}
            pic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png"
            title="COOP - Service Design"
            firstText="The work has been carried out for the food company Coop Sverige AB. The group started the project by participating in two teacher-led workshops to prepare the group members for the real work. The first major step towards creating a current situation analysis of Coop by going to the store and conducting a Customer Safari, Customer Interviews and staff interviews. The insights of these methods were then used as the basis for the continued work of a workshop, brainstorming for solutions, a value map and service map that demonstrates the entire omni channel for Coop."
            secondText="The result of the work was a new experience trip for both customers and staff, where the digital service contributes to highlighting the value of an ecological and sustainable lifestyle."
          />
          </Link>
          <Link to="/projects/">
          <Card
            index={7}
            pic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png"
            title="COOP - Service Design"
            firstText="The work has been carried out for the food company Coop Sverige AB. The group started the project by participating in two teacher-led workshops to prepare the group members for the real work. The first major step towards creating a current situation analysis of Coop by going to the store and conducting a Customer Safari, Customer Interviews and staff interviews. The insights of these methods were then used as the basis for the continued work of a workshop, brainstorming for solutions, a value map and service map that demonstrates the entire omni channel for Coop."
            secondText="The result of the work was a new experience trip for both customers and staff, where the digital service contributes to highlighting the value of an ecological and sustainable lifestyle."
          />
          </Link>
          <Link to="/projects/">
          <Card
            index={8}
            pic="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/1024px-Solid_white.svg.png"
            title="COOP - Service Design"
            firstText="The work has been carried out for the food company Coop Sverige AB. The group started the project by participating in two teacher-led workshops to prepare the group members for the real work. The first major step towards creating a current situation analysis of Coop by going to the store and conducting a Customer Safari, Customer Interviews and staff interviews. The insights of these methods were then used as the basis for the continued work of a workshop, brainstorming for solutions, a value map and service map that demonstrates the entire omni channel for Coop."
            secondText="The result of the work was a new experience trip for both customers and staff, where the digital service contributes to highlighting the value of an ecological and sustainable lifestyle."
          />
          </Link>
        </div>
      </div>
    )
  }
}
export default Cards
