import React from "react";
import Modal from "../Modal/Modal"
import './projectCards.css'



function ProjectCards(props) {
  

  return (
      
      <div className='card-group'>
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
      </div>

  );
}

export default ProjectCards;