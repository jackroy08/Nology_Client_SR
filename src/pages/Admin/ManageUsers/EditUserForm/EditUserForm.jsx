import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditUserForm.module.scss';
import { updateUser } from '../../../../services/UsersService';


const EditUserForm = (props) => {
    const {
        userID,
        userType, 
        currentTeam, 
        currentsubTeamName,
        fullNameStr,
        dateOfBirth 
    } = props.user

    const { register, handleSubmit, errors } = useForm();

    const updateCurrentUser = (data) => {
        const updatedTeam = {
            userID : userID,
            userType : data.userType, 
            currentTeam : data.currentTeam, 
            currentsubTeam: data.currentsubTeamName,
            fullNameStr : data.fullNameStr,
            dateOfBirth : data.dateOfBirth
        }
        {props.hide()}
        return updateUser(updatedTeam);
    }
    
    return (
        <form className={Styles.userForm} onSubmit={handleSubmit(updateCurrentUser)}>
                        
            <label htmlFor="userType">Select User Type :</label>
            <select
                defaultValue={userType}
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
                defaultValue={currentTeam}
                name="currentTeam"
                id="currentTeam" 
                ref={register()}>
                <option value="">Select Team</option>
                <option value="teamA">Team A</option>
                <option value="teamB">Team B</option>
                <option value="teamC">Team C</option>
                <option value="teamD">Team D</option>
            </select>
            
            <label htmlFor="currentsubTeamName">Select Sub Team :</label>
            <select
                defaultValue={currentsubTeamName}
                name="currentsubTeamName"
                id="currentsubTeamName" 
                ref={register()}>
                <option value="">Select Sub Team</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Night">Night</option>
            </select>
            

            <label htmlFor="fullName">Full Name :</label>
            <input
                defaultValue={fullNameStr}                
                type="text"
                id="fullNameStr"
                name="fullNameStr"
                placeholder="enter user's full name"
                ref={register({ required: true, minLength: 2 })} />
                {errors.fullName && <p>FullName is required. Minimum length of 2 characters.</p>}
            
            <label htmlFor="dateOfBirth">Date of Birth :</label>
            <input
                defaultValue={dateOfBirth}
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="enter user's Date of Birth"
                ref={register} />
                {errors.dateOfBirth && <p>Date of birth is required.</p>}
            
            <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Update</button>
        </form>
    )
}

export default EditUserForm;
