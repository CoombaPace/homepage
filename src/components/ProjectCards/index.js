import React from "react";
import Modal from "../Modal/Modal"


function ProjectCards(props) {
  

  return (
      
      
        <div className="card"
            //  cardBG={props.cardBG}
            data={props.data}
            onClick={props.handleShowMessageClick}
            >
          
            {props.showModal ? (
                <Modal 
                onClose={props.handleCloseModal}>
                </Modal>
              ) : null}
                
                <img id='cardImg' src={props.data.img} alt={'project sample'}/>

        </div>
  );
}

export default ProjectCards;