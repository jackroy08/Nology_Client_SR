import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './Modal.module.scss';

const Modal = (props) => {
  const isShowing = props.isShowing;
  const hide = props.hide;

  return (
    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <div className={Styles.modalOverlay}/>
        <div className={Styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={Styles.modal}>
            <div className={Styles.modalHeader}>
              <button type="button" className={Styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {props.innerComponent}
          </div>
        </div>
      </React.Fragment>, document.body
    ) : null
  )
}
export default Modal;

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
//   <React.Fragment>
//     <div className="modal-overlay"/>
//     <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
//       <div className="modal">
//         <div className="modal-header">
//           <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <p>
//           Hello, I'm a modal.
//         </p>
//       </div>
//     </div>
//   </React.Fragment>, document.body
// ) : null;

// export default Modal;