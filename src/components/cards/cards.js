import React, { Component } from "react"
import Card from "./card"

class Cards extends Component {
  render() {
    return (
      <div className="content" id="portfolio">
        <h1>Portfolio</h1>
        <p className="intro-portfolio">
          Below are my design projects, sorted into thumbnails. Click on them to
          get the full specification.
        </p>
        <div id="content">
          <Card
            pic="https://media-eu.jobylon.com/CACHE/companies/company-logo/demo-sverige/coop_logo_sweden_green.9d2a1c4e/1849c21895bf81009bb55e97d2bfb751.jpg"
            title="COOP - Service Design"
            firstText="The work has been carried out for the food company Coop Sverige AB. The group started the project by participating in two teacher-led workshops to prepare the group members for the real work. The first major step towards creating a current situation analysis of Coop by going to the store and conducting a Customer Safari, Customer Interviews and staff interviews. The insights of these methods were then used as the basis for the continued work of a workshop, brainstorming for solutions, a value map and service map that demonstrates the entire omni channel for Coop."
            secondText="The result of the work was a new experience trip for both customers and staff, where the digital service contributes to highlighting the value of an ecological and sustainable lifestyle."
          />
          <Card
            pic="https://i0.wp.com/comintelli.com/wp-content/uploads/2015/07/Comintelli_Large-Box.png?fit=700%2C679&ssl=1"
            title="Internship - Comintelli AB "
            firstText="My internship at Comintelli AB consisted of a UX project where
          me and my colleague worked on trying to find a solution to
          improve the workflow for their customers on their
          Intelligence2day-software based service."
            secondText="The interface was rebuilt with a focus on smooth workflows
          between the different parts of the page using the personas. The
          result was a hi-fi prototype for the company."
          />
          <Card
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
          <Card
            pic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png"
            title="Graphical Productions"
            firstText=" Here are some graphic productions such as logotypes,
             illustrations, sketches, prototypes, style documents and ideas."
            secondText=""
          />
        </div>
      </div>
    )
  }
}
export default Cards
