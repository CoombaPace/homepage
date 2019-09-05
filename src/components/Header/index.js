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
              <header>
                <h5>
                <span style={{letterSpacing: '0.65vh'}}>is an atlanta based developer specializing in leveraging</span> 
                  <br />
                  <span style={{letterSpacing: '3.35vh'}}>coding + design + economics</span> 
                  <br />
                  <span style={{letterSpacing: '0.75vh'}}>to create value, solve problems, and uplift humanity.</span>
                </h5>
              </header>
            </section>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;