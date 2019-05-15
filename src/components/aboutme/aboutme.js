import React, { Component } from "react"

class AboutMe extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="columnA">
          <img src="https://www.yugiohcardmaker.net/ycmaker/createcard.php?name=Erik+Calleberg&cardtype=Monster&subtype=effect&attribute=Earth&level=4&rarity=Ultimate+Rare&picture=tempimages%2F268595861.jpg&circulation=UX-Kit&set1=5&set2=19&type=UX-Designer&carddescription=At+the+start+of+a+Design+Project%2C+if+this+card+is+face-up%2C+this+card+makes+sure+as+many+details+of+the+project+is+accounted+for.+During+the+main+stage+this+card+gains+motivation+to+brainstorm+and+figure+out+new+solutions+after+iterations+and+workshops.&atk=1400&def=2200&creator=EC&year=2019&serial=85474475" />
          <ul class="stats">
            <h1>Distribution of skills</h1>
            <li class="skill1">
              <p>Knowledge of UX/UI rules</p>
            </li>
            <li class="skill2">
              <p>Creativity and fantasy</p>
            </li>
            <li class="skill3">
              <p>Design Processes</p>
            </li>
            <li class="skill4">
              <p>Front-End</p>
            </li>
          </ul>
        </div>

        <div className="columnA2">
          <h2>An UX-Designer and Front-End developer!</h2>
          <p>
            I am Erik Calleberg and you are probably seeing this page because
            you want to know what kind of person I am and what my interests are.
            Considering this page’s theme I’m kind of nerd. My interests involve
            PC-gaming and to balance that with some outdoors I practise
            orienteering together with some variety exercise. Also memes are
            fun.
            <br /> <br />
            As for my experience with Design, the best part of design is the
            process from an idea to a fully-fledged prototype to deliver and
            especially the UX/UI aspects of a project. Although my primary focus
            is the Design-world I did manage to code this website from scratch
            with Gatsby.js built with React.js and Node.js if you specialize
            more in Front-end development. You won't be dissatisfied if you add
            me to your deck!
          </p>
        </div>
      </div>
    )
  }
}
export default AboutMe
