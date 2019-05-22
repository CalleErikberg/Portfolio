import React, { Component } from "react"

class BackToTop extends Component {
  scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  render() {
    return (
      <div className="fixedButton" onClick={() => this.scrollTop()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path fill="none" stroke="#000" stroke-width="23.5" stroke-opacity="null" fill-opacity="null" d="m321.2757,195.57556l-210.28156,-210.50329l138.48833,0l210.28194,210.50329l-210.28194,210.49667l-138.48833,0l210.28156,-210.49667z" id="svg_1" transform="rotate(-90, 285.381, 195.57)"/>
  <path transform="rotate(-90, 11.9372, 11.9368)" d="m13.78179,11.93668l-10.80541,-10.81645l7.11624,0l10.80539,10.81645l-10.80539,10.8168l-7.11624,0l10.80541,-10.8168z"/>
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
