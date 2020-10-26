import React from 'react';
import ReactDOM from 'react-dom';

import { useForm } from "react-hook-form";
import Styles from './CreateTeamForm.module.scss';
import teamsArr from '../../../../data/teams';
import sitesArr from '../../../../data/sites';


// ------ CLASSES ----- //

class Team {
    constructor( teamName, rotationGroup, currentSite) {
    this.teamName = teamName;
    this.rotationGroup = rotationGroup;
    this.currentSite = currentSite;
    }
}

// ------ JSX ----- //

const CreateTeamForm = ({ isShowing, hide }) => {
    const { register, handleSubmit, errors } = useForm();
    // const createNewTeam = (data) => {
    //     teamsArr.push(new Team(data.teamName, data.rotationGroup, data.currentSite));
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
                    <form className={Styles.teamForm} onSubmit={handleSubmit(/*createNewTeam*/)}>
                        <label htmlFor="teamName">Team Name :</label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            placeholder="enter the team name"
                            ref={register({ required: true })} />
                            {errors.teamName && <p>Team name is required. Minimum length of 2 characters.</p>}
                        
                        <label htmlFor="rotationGroup">Rotation Group :</label>
                        <input
                            type="text"
                            id="rotationGroup"
                            name="rotationGroup"
                            placeholder="enter the rotation group"
                            ref={register({ required: true })} />
                            {errors.rotationGroup && <p>Rotation group is required. Minimum length of 2 characters.</p>}
                        
                        <label htmlFor="currentSite">Select site :</label>
                        <select
                            name="currentSite"
                            id="currentSite"
                            ref={register({ required: true })}>
                            <option value="">Select site :</option>
                            {sitesArr.map((site) => <option key={site}>{site}</option>)}
                        </select>
                            {errors.currentSite && <p>User Type is required.</p>}
                        <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={hide}>Cancel</button>
                        <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Create</button>
                    </form>
                </div>
                </div>
            </React.Fragment>, document.body
        ) : null
    );
}

export default CreateTeamForm;

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