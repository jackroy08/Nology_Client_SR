import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreateUserForm.module.scss';
import usersArr from '../../../../data/users';

// ------ CLASSES ----- //

class User {
    constructor(userType, fullName, userID, dateOfBirth, password) {
    this.userType = userType;
    this.fullNameStr = fullName;
    this.userID = userID;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    }
}
class Supervisor extends User {
    constructor(userType, fullName, userID, dateOfBirth, password, currentTeam, currentSubTeam) {
    super(userType, fullName, userID, dateOfBirth, password);
    this.currentTeam = currentTeam;
    this.currentSubTeam = currentSubTeam;
    this.isOnShift = false;
    }
}
class Operator extends Supervisor {
    constructor(userType, fullName, userID, dateOfBirth, password, currentTeam, currentSubTeam, isOnShift) {
        super(userType, fullName, userID, dateOfBirth, password, currentTeam, currentSubTeam, isOnShift);
        this.assignedVehicle = "";
    }
}

// ------ JSX ----- //

const CreateUserForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const createNewUser = (data) => {
        switch (data.userType) {
            case "management" : usersArr.push(new User(data.userType, data.fullName, data.userID, data.dateOfBirth, data.password)); break;
            case "maintenance" : usersArr.push(new User(data.userType, data.fullName, data.userID, data.dateOfBirth, data.password)); break;
            case "supervisor" : usersArr.push(new Supervisor(data.userType, data.fullName, data.userID, data.dateOfBirth, data.password, data.currentTeam, data.currentSubTeam)); break;
            case "operator" : usersArr.push(new Operator(data.userType, data.fullName, data.userID, data.dateOfBirth, data.password, data.currentTeam, data.currentSubTeam)); break;
        }
    }
    
    return ( 
        <form className={Styles.userForm} onSubmit={handleSubmit(createNewUser)}>
            <label htmlFor="userID">Employee No# :</label>
            <input
                type="text"
                id="userID"
                name="userID"
                placeholder="eg: MINE123456"
                ref={register({ required: true })} />
                {errors.userID && <p>userID is required.</p>}
            
            <label htmlFor="password">Password :</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="P@ssw0rd!"
                ref={register({ required: true, minLength: 8 })} />
                {errors.password && <p>Password is required. Minimin Length of 8 characters</p>}
            
            <label htmlFor="userType">Select User Type :</label>
            <select
                name="userType"
                id="userType"
                ref={register({ required: true })}>
                <option value="">Select User Type :</option>
                <option value="operator">Operator</option>
                <option value="supervisor">Supervisor</option>
                <option value="maintenance">Maintenance</option>
                <option value="management">Management</option>
            </select>
                {errors.userType && <p>User Type is required.</p>}

            <label htmlFor="currentTeam">Select Team :</label>
            <select
                name="currentTeam"
                id="currentTeam" 
                ref={register({ required: true })}>
                <option value="">Select Team</option>
                <option value="TeamA">Team A</option>
                <option value="TeamB">Team B</option>
                <option value="TeamC">Team C</option>
                <option value="TeamD">Team D</option>
            </select>
            
            
            <label htmlFor="currentSubTeam">Select Sub Team :</label>
            <select
                name="currentSubTeam"
                id="currentSubTeam" 
                ref={register({ required: true })}>
                <option value="">Select Sub Team</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
            </select>
            
            <label htmlFor="fullName">Full Name :</label>
            <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="enter user's full name"
                ref={register({ required: true, minLength: 2 })} />
                {errors.fullName && <p>FullName is required. Minimum length of 2 characters.</p>}
            
            <label htmlFor="dateOfBirth">Date of Birth :</label>
            <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="enter user's Date of Birth"
                ref={register} />
                {errors.dateOfBirth && <p>Date of birth is required.</p>}
                
            <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Create</button>
        </form>
    );
}

export default CreateUserForm;



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