import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditUserForm.module.scss';
import { updateUser } from '../../../../services/UsersService';
import { getTeams } from '../../../../services/TeamsService'


const EditUserForm = (props) => {
    const {
        userID,
        userType, 
        currentTeam, 
        currentSubTeamName,
        fullNameStr,
        dateOfBirth 
    } = props.user

    const { register, handleSubmit, errors } = useForm();

    const updateCurrentUser = (data) => {
        const updatedTeam = {
            userID : userID,
            userType : data.userType, 
            currentTeam : data.currentTeam, 
            currentSubTeam: data.currentSubTeamName,
            fullNameStr : data.fullNameStr,
            dateOfBirth : data.dateOfBirth
        }
        {props.hide()}
        return updateUser(updatedTeam);
    }
    
    const [teamNamesArr, setTeamNamesArr] = useState([null]);
    const [subTeamNamesArr, setSubTeamNamesArr] = useState([null]);
    
    useEffect(() => {
        getTeams().then(response => {
            setTeamNamesArr([...new Set(response.map(team => team.teamName))]);
            setSubTeamNamesArr([...new Set(response.map(team => team.subTeamName))]);
        });
    }, [])

    return (
        <form className={Styles.userForm} onSubmit={handleSubmit(updateCurrentUser)}>
                        
            <label htmlFor="userType">Select User Type :</label>
            <select
                className={Styles.selectPrimary}
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
                className={Styles.selectPrimary}
                defaultValue={currentTeam}
                name="currentTeam"
                id="currentTeam" 
                ref={register()}>
                <option value="">Select Team</option>
                {teamNamesArr.map((teamName) => <option key={teamName}>{teamName}</option>)}
            </select>
            
            <label htmlFor="currentSubTeamName">Select Sub Team :</label>
            <select
                className={Styles.selectPrimary}
                defaultValue={currentSubTeamName}
                name="currentSubTeamName"
                id="currentSubTeamName" 
                ref={register()}>
                <option value="">Select Sub Team</option>
                {subTeamNamesArr.map((subTeamName) => <option key={subTeamName}>{subTeamName}</option>)}
            </select>
            

            <label htmlFor="fullName">Full Name :</label>
            <input
                className={Styles.inputPrimary}
                defaultValue={fullNameStr}                
                type="text"
                id="fullNameStr"
                name="fullNameStr"
                placeholder="enter user's full name"
                ref={register({ required: true, minLength: 2 })} />
                {errors.fullName && <p>FullName is required. Minimum length of 2 characters.</p>}
            
            <label htmlFor="dateOfBirth">Date of Birth :</label>
            <input
                className={Styles.inputPrimary}
                defaultValue={dateOfBirth}
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="enter user's Date of Birth"
                ref={register} />
                {errors.dateOfBirth && <p>Date of birth is required.</p>}
            
            <button className={Styles.btnSecondary} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={Styles.btnPrimary} type="submit">Update</button>
        </form>
    )
}

export default EditUserForm;
