import React, { useState } from 'react';
import Styles from './UserItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserItem = (props) => {
    const { 
        profileImg,
        fullNameStr ,
        dateOfBirth,
        userID,
        currentTeam,
        isOnShift,
        assignedVehicle,
        userType
    } = props.user
    
    return (
        <li className={Styles.userItem}>
            <img src={profileImg} alt="H"/>
            <p>{fullNameStr}</p>
            <p>{dateOfBirth}</p>
            <p>{userID}</p>
            <p>{isOnShift ? "Yes" : "No"}</p>
            <p>{currentTeam ? currentTeam : "No team"}</p>
            <button>Edit...</button>
            
        </li>
    )
}

export default UserItem;
