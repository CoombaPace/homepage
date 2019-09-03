import React from 'react'; 
import './footer.scss'  


class Footer extends React.Component {
  
  render() {
    
    return (
      <div className="footer-container">
        <div className='footer-icons'>
          <i className="fab fa-github" id='github-icon'></i><i className="fab fa-linkedin"></i><i className="fas fa-envelope-square" id='email-icon'></i>
        </div>
      </div>
    )
  }
}

export default Footer;
