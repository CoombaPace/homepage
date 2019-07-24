import React from 'react'; 
import './footer.css'  

export default function SimpleContainer() {
    return (
    <React.Fragment>
      <div className="footer-container">
        <div className='footer-icons'>
          <i className="fab fa-github"></i><i className="fab fa-linkedin"></i><i className="fas fa-envelope-square"></i>
        </div>
      </div>
    </React.Fragment>
  );
}
