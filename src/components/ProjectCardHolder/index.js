import React, { Component } from "react";
import "./style.css";
import ProjectCards from "../ProjectCards"

class ProjectCardHolder extends Component {
  
  // componentDidUpdate(prevProps, prevState) {
  //   // Typical usage (don't forget to compare props):
    
  //   if (this.props.stocksInfo_keys !== prevProps.stocksInfo_keys) {
  //     this.props.getdbstockdata();
  //   }
  // }

  
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
