import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Styles from './CreateUserForm.module.scss';
import usersArr from '../../../../data/users';

// ------ CLASSES ----- //

class User {
    constructor(userType, fullName, userID, dateOfBirth, password, profileImage) {
    this.userType = userType;
    this.fullName = fullName;
    this.dateOfBirth = dateOfBirth;
    this.userID = userID;
    this.password = password;
    this.profileImage = profileImage;
    }
}
class Supervisor extends User {
    constructor(userType, fullName, userID, dateOfBirth, password, profileImage, currentTeam) {
    super(userType, fullName, userID, dateOfBirth, password, profileImage);
    this.currentTeam = currentTeam;
    this.isOnShift = false;
    }
}
class Operator extends Supervisor {
    constructor(userType, fullName, userID, dateOfBirth, password, profileImage, currentTeam) {
        super(userType, fullName, userID, dateOfBirth, password, profileImage, currentTeam);
        this.assignedVehicle = "";
    }
}

// ------ JSX ----- //
const CreateUserForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const createNewUser = (data) => {
        switch (data.userType) {
            case "management" : usersArr.push(new User(data.userType, data.fullName, data.dateOfBirth, data.userID, data.password, data.profileImg)); break;
            case "maintenance" : usersArr.push(new User(data.userType, data.fullName, data.dateOfBirth, data.userID, data.password, data.profileImg)); break;
            case "supervisor" : usersArr.push(new Supervisor(data.userType, data.fullName, data.dateOfBirth, data.userID, data.password, data.profileImg, data.currentTeam)); break;
            case "operator" : usersArr.push(new Operator(data.userType, data.fullName, data.dateOfBirth, data.userID, data.password, data.profileImg, data.currentTeam)); break;
        }
    }
    
    return (
        <form className={Styles.userForm} onSubmit={handleSubmit(createNewUser)}>
            <label htmlFor="userID">Employee number :</label>
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
                <option value="teamA">Team A</option>
                <option value="teamB">Team B</option>
                <option value="teamC">Team C</option>
                <option value="teamD">Team D</option>
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
            
            
            <label htmlFor="profileImage">Profile Image :</label>
            <input
                type="file"
                id="profileImage"
                name="profileImage"
                placeholder="enter user's full name"
                ref={register}/>
            
            <button className={Styles.btn} type="submit">Create New User</button>
        </form>
    )
}

export default CreateUserForm;
