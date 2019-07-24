import React, { Component } from 'react';


class Image extends Component {
    
    render() {
        var linkStyle;
        if (this.props.hover) {
          linkStyle = {color: '#ed1212', cursor: 'pointer'}
          console.log("this is linkStyle: ", linkStyle)
        } else {
          linkStyle = {color: '#000'}
          console.log("this is linkStyle: ", linkStyle)
     
        }
             return(
                 <div>
                 <p style={linkStyle} onMouseEnter={() => this.props.toggleHover} 
                 onMouseLeave={() =>  this.props.toggleHover}>Test</p>
             </div>
             )
        }
       
    
}


export default Image;