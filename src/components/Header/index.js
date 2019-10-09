import React from 'react'; 
import './header.css'  

  class Header extends React.Component {
  
    render() {
      
      return (
        <div className='header-bg'>
            <header>
                <h1> Hey! I'm <br/> Mattia Pace</h1>
            </header>
        </div>
      )
    }
  }
  
  
  // ReactDOM.render(<Slider heading="Example Slider" slides={slideData} />, document.getElementById('app'));
  export default Header;