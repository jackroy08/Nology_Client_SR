import React from 'react'
import Styles from './ManageUsers.module.scss';
import {Link} from '@reach/router';
import users from '../../../data/users'

// ------ CLASSES ----- //

class User {
    constructor(fullName, userID, dateOfBirth, password, profileImage) {
    this.fullName = fullName;
    this.userID = userID;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.profileImage = profileImage;

    }
}

class Supervisor extends User {
    constructor(fullName, userID, dateOfBirth, password, profileImage, currentTeam) {
    super(fullName, userID, dateOfBirth, password, profileImage);
    this.currentTeam = currentTeam;
    this.isOnShift = false;

    }
}

class Operator extends Supervisor {
    constructor(fullName, userID, dateOfBirth, password, profileImage, currentTeam, isOnShift) {
        super(fullName, userID, dateOfBirth, password, profileImage, currentTeam, isOnShift);
        this.assignedVehicle = "";
    }
}

// ------ FUNCTIONS ----- //

const createNewUser = (userType) => {

}

// ------ JSX ----- //

const ManageUsers = () => {
    return (
        <form className={Styles.userForm} onSubmit={createNewUser}>
            <label htmlFor="userType">Select User Type</label>
            <select name="userType" id="userType">
                <option value="operator">Operator</option>
                <option value="supervisor">Supervisor</option>
                <option value="maintenance">Maintenance</option>
                <option value="management">Management</option>
            </select>

            <label htmlFor="currentTeam">Select Team</label>
            <select name="currentTeam" id="currentTeam">
                <option value="teamA">Team A</option>
                <option value="teamB">Team B</option>
                <option value="teamC">Team C</option>
                <option value="teamD">Team D</option>
            </select>
            
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="enter user's full name"/>
            
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" placeholder="enter user's Date of Birth"/>
            
            <label htmlFor="userID">Unique employee number</label>
            <input type="text" id="userID" name="userID" placeholder="enter user's unique ID number"/>
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="enter a password"/>
            
            <label htmlFor="profileImage">Profile Image</label>
            <input type="file" id="profileImage" name="profileImage" placeholder="enter user's full name"/>
            
            <button className={Styles.btn} type="submit">Create New User</button>
        </form>
    )
}

export default ManageUsers;
