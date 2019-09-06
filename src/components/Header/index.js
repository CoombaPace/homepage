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
                <h1 style={{fontFamily: 'Major Mono Display, monospace', fontSize: '2.8vw', lineHeight: '6vw', marginTop: '3vw', letterSpacing: '-0.34vw'}}>
                  is an atlanta based developer specializing in leveraging 
                  <br />
                  <span style={{letterSpacing: '1.52vw'}}>coding + design + economics</span> 
                  <br />
                  <span style={{letterSpacing: '-0.23vw'}}>to create value, solve problems, and uplift humanity.</span>
                </h1>
              </header>
            </section>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;