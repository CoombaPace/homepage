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
          <p className='header'>Project Gallery</p>
        </div>
      </div>
    </React.Fragment>
  );
}
