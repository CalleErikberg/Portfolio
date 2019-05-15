import React from "react"
import { Link } from "react-scroll"
import Nav from "../components/nav/nav"
import Intro from "../components/intro/intro"
import Cards from "../components/cards/cards"
import AboutMe from "../components/aboutme/aboutme"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import BackToTop from "../components/backToTop/backToTop"


class IndexPage extends React.Component {
  render() {
    return (
      <div>
        
      <BackToTop />
        <Nav />
        <Intro />
        <Cards />
        <AboutMe />
        <Contact />
        <Footer />
      </div>

    )
  }
}

export default IndexPage
