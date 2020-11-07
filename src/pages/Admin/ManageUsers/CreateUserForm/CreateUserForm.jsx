import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Styles from './CreateUserForm.module.scss';
import usersArr from '../../../../data/users';
import { createUser } from '../../../../services/UsersService'
import { getTeams, subscribeToTeams } from '../../../../services/TeamsService';

// ------ CLASSES ----- //

class User {
    constructor(userID, userType, fullName, dateOfBirth) {
    this.userID = userID;
    this.userType = userType;
    this.fullNameStr = fullName;
    this.dateOfBirth = dateOfBirth;
    }
}
class Supervisor extends User {
    constructor(userID, userType, fullName, dateOfBirth, currentTeam, currentsubTeamName) {
    super(userID, userType, fullName, dateOfBirth);
    this.currentTeam = currentTeam;
    this.currentsubTeamName = currentsubTeamName;
    this.isOnShift = false;
    }
}
class Operator extends Supervisor {
    constructor(userID, userType, fullName, dateOfBirth, currentTeam, currentsubTeamName, isOnShift) {
        super(userID, userType, fullName, dateOfBirth, currentTeam, currentsubTeamName, isOnShift);
        this.assignedVehicle = "";
    }
}

// ------ JSX ----- //

const CreateUserForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    
    const [teamNamesArr, setTeamNamesArr] = useState([null]);
    const [subTeamNamesArr, setSubTeamNamesArr] = useState([null]);
    
    useEffect(() => {
        getTeams().then(response => {
            setTeamNamesArr([...new Set(response.map(team => team.teamName))]);
            setSubTeamNamesArr([...new Set(response.map(team => team.subTeamName))]);
        });
    }, [])

const createNewUser = (data) => {
    switch (data.userType) {
        case "operator" : createUser(new Operator(data.userID, data.userType, data.fullName, data.dateOfBirth, data.currentTeam, data.currentsubTeamName));
        case "supervisor" : createUser(new Supervisor(data.userID, data.userType, data.fullName, data.dateOfBirth, data.currentTeam, data.currentsubTeamName)); break;
        case "maintenance" : createUser(new User(data.userID, data.userType, data.fullName, data.dateOfBirth)); break;
        case "management" : createUser(new User(data.userID, data.userType, data.fullName, data.dateOfBirth)); break;
        default: /* do nothing; */; break;
    }
    {props.hide()}
}   
    
    return ( 
        <form className={Styles.userForm} onSubmit={handleSubmit(createNewUser)}>
            <label htmlFor="userID">User ID# :</label>
            <input
                type="text"
                id="userID"
                name="userID"
                placeholder="eg: MINE123456"
                ref={register({ required: true })} />
                {errors.userID && <p>UserID is required.</p>}
            
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
                ref={register()}>
                <option value="">Select Team</option>
                {teamNamesArr.map((teamName) => <option key={teamName}>{teamName}</option>)}

            </select>
            
            
            <label htmlFor="currentsubTeamName">Select Sub Team :</label>
            <select
                name="currentsubTeamName"
                id="currentsubTeamName" 
                ref={register()}>
                <option value="">Select Sub Team</option>
                {subTeamNamesArr.map((subTeamName) => <option key={subTeamName}>{subTeamName}</option>)}

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