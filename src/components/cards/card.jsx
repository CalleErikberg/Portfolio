import React, { Component } from "react"

class Card extends Component {
  animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'container'
          );
        }
      }
    }
    return {
      init: init
    };
  };

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
      <div className="container" onLoad={() => this.animateHTML().init()}>
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
