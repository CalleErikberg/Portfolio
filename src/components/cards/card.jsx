import React, { Component } from "react"

class Card extends Component {
openModal() {
var modal = document.getElementById('myModal'); // Get the button that opens the modal
var img = document.getElementsByClassName("open-modal"); // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]; // When the user clicks the button, open the modal 
// When the user clicks on the button, open the modal
for(var i = 0; i < img.length; i++) {
  img[i].onclick = function () {
      modal.style.display = "block";
  }
}
/*
img.onclick = function () {
  modal.style.display = "block";
}; 
*/
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}; 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
  }
  render() {
    return (
      <div className="container">
        <img className="open-modal" onClick={() => this.openModal()} src={this.props.pic} />
          <div id="myModal" class="modal">
            <div class="modal-content">
              <h3 className="caption">{this.props.title}</h3>
              <span class="close">&times;</span>
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
