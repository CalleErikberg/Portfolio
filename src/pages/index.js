import React from "react"
import { Link } from "react-scroll"
import Nav from "../components/nav/nav"
import Intro from "../components/intro/intro"
import Cards from "../components/cards/cards"
import AboutMe from "../components/aboutme/aboutme"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import BackToTop from "../components/backToTop/backToTop"
import Projects from "./projects"
import favicon from "../videos/favicon.png"

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <title>Erik Calleberg - Portfolio</title>
        <head><link rel="shortcut icon" type="image/png" href={favicon}/></head>
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
