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
                a full-stack web developer & designer based in Atlanta. <br/><br/>
                <span>working in: <Typewriter></Typewriter></span>
                <br/>
                former trAde AnAlyst turned sAlumist, i plAyed At the intersection of technology And food <br/><br/>
                stArted coding As A wAy AutomAte my home brewery And AnAlyze its dAtA.<br/><br/>
                studied economics At georgiA stAte university's Andrew school of policy studies. <br/><br/>
                illustrAte / Animate / tinker / gArden in my free time. <br/><br/>
                {/* interested in design, motion, blockchain, games, economics, and zymology. <br/><br/> */}
                
                cAn ferment A bAtch of beer good enough to be of some use in A MAd MAxiAn dystopiA situAion. <br/><br/>
              </h1>

            </section>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;