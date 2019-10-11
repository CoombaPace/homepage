import React from 'react'; 
import './about.css'; 
import Typewriter from './Typewriter' 

  class Header extends React.Component {
  
    render() {
      
      return (
        <div className='about-section'>
            <section className='about'>
              <header>
                <h1 id='about-header'>
                     
                </h1>

              </header>

              <h1 class='about-me'>
                <span className='intro'>
                a full-stack web developer & designer based in Atlanta. <br/><br/>
                <span>working in: <Typewriter></Typewriter></span>
                <br/>
                </span>
                a former trAde AnAlyst turned sAlumist, i found coding At the intersection of technology + food + beer.
                <br/><br/>
                i stArted coding by teaching myself python And working with a RAspberry-pi to AutomAte my home brewery And AnAlyze its dAtA.<br/>
                i chose to pursue it further in order to solve recurring problems thAt i encountered As i consulted firms As A trAde AnAlyst.<br/><br/>
                studied economics At georgiA stAte university's Andrew school of policy studies. <br/><br/>
                i wear All the hAts. <br/><br/>
                illustrAte / Animate / tinker / gArden in my free time. <br/><br/>
                {/* interested in design, motion, blockchain, games, economics, and zymology. <br/><br/> */}
                
                my homebrew is good enough to be of some use in A MAd MAxiAn dystopiA situAion. <br/><br/>
              </h1>

            </section>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;