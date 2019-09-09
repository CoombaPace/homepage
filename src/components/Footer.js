import React from 'react'; 
import './footer.scss'  


class Footer extends React.Component {
  
  render() {
    
    return (
      <div className="footer-container">
        <div className='footer-icons'>
          <a href={'https://github.com/CoombaPace'}> <i className="fab fa-github" id='github-icon'> </i></a>
          <a href={'https://www.linkedin.com/in/mattia-pace/'}> <i className="fab fa-linkedin"> </i></a>
          <a href={'https://medium.com/@coombapace'}> <i class="fab fa-medium"> </i></a>
          <a href={'https://twitter.com/coombapace'}> <i class="fab fa-twitter-square"> </i></a> 
          {/* <i className="fas fa-envelope-square" id='email-icon'></i> */}
        </div>
      </div>
    )
  }
}

export default Footer;
