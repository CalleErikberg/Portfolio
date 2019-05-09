import React, { Component } from "react"

class BackToTop extends Component {
  scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  render() {
    return (
      <div className="fixedButton" onClick={() => this.scrollTop()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
          <path fill="none" d="M0 0h24v24H0V0z" />
          <defs>
          <filter id="id-of-your-filter">
          <feDropShadow dx="4" dy="8" stdDeviation="4"/>
      <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values="1.00 0   0   0   0
                        0   0.60  0   0   0
                        0   0   0.00  0   0
                        0   0   0   1   0 "/>
                                
    </filter>
    </defs>
        </svg>
      </div>
    )
  }
}
export default BackToTop
