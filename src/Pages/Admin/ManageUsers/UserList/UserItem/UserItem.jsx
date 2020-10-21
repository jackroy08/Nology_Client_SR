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
            <FontAwesomeIcon icon="user-circle"/>
            {/* <img src="" alt=""/> The Font awesome icon above is only temporary until we get actualy profile pictures next to names.*/}

            <p>{fullNameStr}</p>
            <p>{dateOfBirth}</p>
            <p>{userID}</p>
            <p>{isOnShift}</p>
            <p>{currentTeam}</p>
            <button>Edit...</button>
            
        </li>
    )
}

export default UserItem;
