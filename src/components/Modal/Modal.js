import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {

    render() {
      return ReactDOM.createPortal(
        <div style={{maxHeight: '200px'}}>
          <div
            style={{
              position: 'relative',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}
            onClick={this.props.onClose}
          >
            <div
              style={{
                padding: 10,
                background: '#4B0082',
                borderRadius: '2px',
                display: 'inline-block',
                margin: '1rem',
                maxWidth: '800px',
                position: 'relative',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                justifySelf: 'center',
                textAlign: 'center'
              }}
            >
              {this.props.children}
              
              {/* <hr />
              <button onClick={this.props.onClose}>Close</button> */}

            </div>
          </div>
        </div>,
          modalRoot,
      )
    }
  }
  
export default Modal;