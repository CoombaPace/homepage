import React, { Component } from "react";
import "./style.css";
import ProjectCards from "../ProjectCards"

class ProjectCardHolder extends Component {
  
  render() {
    
    return (
      <div className='project-cards'>

      <ProjectCards
            data={this.props.data}
            handleShowMessageClick={this.props.handleShowMessageClick}
            />
      </div>
    );
  }
}

export default ProjectCardHolder;
