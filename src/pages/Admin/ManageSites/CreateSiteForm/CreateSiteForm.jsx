import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreateSiteForm.module.scss';
import { createSite } from '../../../../services/SitesService'


// ------ CLASSES ----- //

class Site {
    constructor( siteID, siteName) {
    this.siteID = siteID;
    this.siteName = siteName;
    }
}

// ------ JSX ----- //

const CreateSiteForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    const createNewSite = (data) => {
        {props.hide()}
        return createSite(new Site(data.siteID, data.siteName));
    }
    
    return (
        <form className={Styles.siteForm} onSubmit={handleSubmit(createNewSite)}>
            <label htmlFor="siteID">Site ID :</label>
            <input
                type="text"
                id="siteID"
                name="siteID"
                placeholder="enter the site ID"
                ref={register({ required: true })} />
                {errors.siteID && <p>Site ID is required. Must be unique.</p>}
                
            <label htmlFor="siteName">Site Name :</label>
            <input
                type="text"
                id="siteName"
                name="siteName"
                placeholder="enter the site name"
                ref={register({ required: true })} />
                {errors.siteName && <p>Site name is required. Minimum length of 2 characters.</p>}

                <button
                className={`${Styles.btn} ${Styles.btnDanger}`}
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.hide}
                >Cancel
                </button>
            <button 
                className={`${Styles.btn} ${Styles.btnSuccess}`}
                type="submit"
                >Create</button>
        </form>
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