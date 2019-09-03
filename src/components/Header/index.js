import React from 'react'; 
import './header.css'  

  class Header extends React.Component {
  
    render() {
      
      return (
        <div className='header-bg'>
            <header>
                <h1>mattia pace</h1>
            </header>
            <div className='bar'></div>
            <section className='about'>
              <p>
              <span style={{letterSpacing: '7px'}}>is an atlanta based developer specializing in leveraging</span> 
                <br />
                <span style={{letterSpacing: '32px'}}>economics + coding + design</span> 
                <br />
                <span style={{letterSpacing: '8px'}}>to create value, solve problems, and uplift humanity.</span>
              </p>
            </section>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;