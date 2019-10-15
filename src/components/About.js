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
                </span>
                {/* a former trAde AnAlyst turned sAlumist, i found coding At the intersection of
                technology + food + beer. <br/><br/> */}
                {/* the fun of coding, like entrepreneurship and fermenting beer and sausage, is all in the creative problem solving/opportunity creation. */}
                <br/><br/>
                {/* stArting with an iot solution for my homebrewing setup. using python And A RAspberry-pi, i sought to AutomAte my home brewery And AnAlyze its dAtA.<br/>
                
                i hAve worked with international marketing and design teams contributing digital assets, layouts, mockups, concept art, and custom coded elements and features.<br/><br/>
                i Am adept at wearing All the hAts and navigating in uncertain circumstances, two things all entepreneurs must excel at. <br/><br/>
                in my free-time, you'll find me illustrAting, coding games, tinkering, and gardening. <br/><br/>
                my homebrew is good enough to be of some use in A MAd MAxiAn dystopiA situAion. <br/><br/> */}
              </h1>

            </section>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;