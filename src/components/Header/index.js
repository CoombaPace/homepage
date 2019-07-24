import React from 'react'; 
import './header.css'  
import AnimatedText from '../AnimatedText/AnimatedText' 

export default function SimpleContainer() {
    return (
    <React.Fragment>
      <div className="container">
        <div className="typography">
          <AnimatedText/> 
        </div>
        <div className='icons'>
          <i className="fab fa-github"></i><i className="fab fa-linkedin"></i><i className="fas fa-envelope-square"></i>
        </div>
      </div>
    </React.Fragment>
  );
}
