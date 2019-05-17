import React, { Component } from "react"


class Contact extends Component {
  state = {
    class: 'hidden'
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window || {}

    if (scrollY > 1300) {
      this.setState({ class: 'contact' })
    }
  }
  render() {
    return (
        <div className={this.state.class} id="contact">
                <h2>You can reach me here!</h2>
        <div className="linkimg">
        <a href="https://www.linkedin.com/in/erik-calleberg-610106159/">
  <img src="http://www.logospng.com/images/133/linkedin-icon-for-email-signature-ndash-free-icons-133532.png" alt="LinkedIn"></img>
</a> 
<a href="https://github.com/CalleErikberg">
<img src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1-300x300.png" alt="GitHub"></img>
</a> 
<a href="mailto:erik.calleberg@gmail.com">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/180px-Gmail_Icon.svg.png" alt="Mail"></img>
</a> 
        </div>
      </div>
    )
  }
}
export default Contact