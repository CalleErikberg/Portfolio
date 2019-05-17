import React, { Component } from "react"
import MyVideo from "../../videos/skyrimL.mp4"
import MyVideoPoster from "../../videos/fallbackskyrim.jpg"

class Intro extends Component {

  render() {    
    return (
      <div className="row" id="home">
               <video poster={MyVideoPoster} autoPlay loop muted>
      <source src={MyVideo} type="video/mp4"></source>
      Your browser does not support the video tag.
    </video>
        <div className="column1">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="723" height="508">
            <g fill="#fff">
              <path d="M298.44 385.784H70.107l.07-4.41h5.579c15.435 0 27.96-12.37 28.25-27.73V107.781c-1.001-14.702-13.225-26.323-28.188-26.323h-5.579l-.07-4.383h169.068c19.01-.172 44.444-4.569 52.642-8.022v77.104l-4.45-.066v-5.182c.052-26.539-16.63-43.88-43.077-44.986h-74.201V224.23h58.462c21.657-.41 37.458-16.313 37.397-37.794v-3.819l4.308-.057V284.48l-4.308-.053v-3.818c.057-21.296-15.488-37.11-36.841-37.776h-59.023v124.1h57.894c44.05 0 72.645-27.372 86.316-71.137h4.41l-20.326 89.99zM653.57 257.076l4.264 75.908c-19.762 32.633-57.334 58.988-123.929 58.988-108.29-.442-178.91-60.29-178.91-160.964 0-98.641 68.15-160.08 180.163-160.08 46.966 0 84.652 10.914 109.657 23.888l.865 75.67h-3.67c-16.073-57.906-53.938-80.962-102.429-80.993-69.955 0-112.696 53.881-112.696 140.523 0 87.3 41.343 141.625 107.011 143.385 67.856-.075 102.258-29.617 115.99-116.33l3.683.005zM347 430h286v8H347zM267 430h5v8h-5zM69 430h198v8H69zM397 405h236v8H397zM69 405h247v8H69z" />
              <path d="M722 509H2V0h720v509zM32 479h660V30H32v449z" />
            </g>
          </svg>
        </div>

        <div className="column2">
          <h1>Hello there!</h1>

          <p>
            Welcome to this handcrafted webpage, built in Gatsby.js and React.js, created by Erik Calleberg. This
            webpage will act as my portfolio showcasing my skils in
            UX, UI, Design Thinking, Customer Journey maps, design projects,
            personality traits, interests and experiences.          
            <br />
            <br />
            Thank you for taking your time and checking out this page, have a
            wonderful day!
          </p>
        </div>
      </div>
    )
  }
}
export default Intro
