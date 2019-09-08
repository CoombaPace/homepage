import React from 'react'; 
import './header.css'  

  class Header extends React.Component {
  
    render() {
      
      return (
        <div className='header-bg'>
            <header>
                <h1>mattia pace</h1>
            </header>

            <section className='about'>
              <header>
                <h1 id='about-header'>
                  is an atlanta based developer specializing in leveraging 
                  <br />
                  <span id='line2'>coding + design + economics</span> 
                  <br />
                  <span id='line3'>to create value, solve problems, and uplift humanity.</span>
                </h1>
              </header>
            </section>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;