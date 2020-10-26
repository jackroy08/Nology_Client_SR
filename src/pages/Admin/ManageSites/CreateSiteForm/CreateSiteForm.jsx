import React from 'react';
import ReactDOM from 'react-dom';

import { useForm } from "react-hook-form";
import Styles from './CreateSiteForm.module.scss';
import sitesArr from '../../../../data/sites';


// ------ JSX ----- //

const CreateSiteForm = ({ isShowing, hide }) => {
    const { register, handleSubmit, errors } = useForm();
    // const createNewSite = (data) => {
    //     sitesArr.push(data);
    //     }
    //     hide();
    
    return (
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <div className={Styles.modalOverlay}/>
                <div className={Styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className={Styles.modal}>
                    <div className={Styles.modalHeader}>
                    </div>
                    <form className={Styles.siteForm} onSubmit={handleSubmit(/*createNewSite*/)}>
                        <label htmlFor="siteName">Site Name :</label>
                        <input
                            type="text"
                            id="siteName"
                            name="siteName"
                            placeholder="enter the site name"
                            ref={register({ required: true })} />
                            {errors.siteName && <p>Site name is required. Minimum length of 2 characters.</p>}

                        <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={hide}>Cancel</button>
                        <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Create</button>
                    </form>
                </div>
                </div>
            </React.Fragment>, document.body
        ) : null
    );
}

export default CreateSiteForm;

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