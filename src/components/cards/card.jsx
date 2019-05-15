import React, { Component } from "react"

class Card extends Component {
  state = {
    class: 'hidden'
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { scrollY } = window || {}

    if (scrollY > 1000) {
      this.setState({ class: 'container' })
    }
  }

  openModal() {
    var modal = document.getElementsByClassName("myModal") // Get the button that opens the modal
    var img = document.getElementsByClassName("open-modal") // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0] // When the user clicks the button, open the modal

    const i = this.props.index
    // When the user clicks on the button, open the modal
      img[i].onclick = function() {
        console.log(modal)
        modal[i].style.display = "block"
    }
    /*
img.onclick = function () {
  modal.style.display = "block";
}; 
*/
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal[i].style.display = "none"
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal[i].style.display = "none"
      }
    }
  }
  render() {
    console.log(this.state.class);
    return (
      <div className={this.state.class}>
        <img
          className="open-modal"
          onClick={() => this.openModal()}
          src={this.props.pic}
        />
        <div className="myModal modal">
          <div className="modal-content">
            <h3 className="caption">{this.props.title}</h3>
            <span className="close">&times;</span>
            <p className="info">
              {this.props.firstText}
              <br />
              <br />
              {this.props.secondText}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
