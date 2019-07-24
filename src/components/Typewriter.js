import React from 'react';
import TypeWriter from 'react-typewriter';
import './typewriter.css'
class Typewriter extends React.Component {

  render() {
    return (
      <div>
      <TypeWriter typing={1}>
        
     {/*<section class="animation-box">
          div class="first-text">This is an example text</div>
          <div class="second-text">This is another example text</div>
          <div class="third-text">This is an example of vertical text</div>
          <div class="fourth-text">I will not move, just fade</div>
          <div class="fifth-text">Final text, now I am done</div> 
        </section>*/}
      </TypeWriter>
      </div>
    )
  }
}

export default Typewriter;