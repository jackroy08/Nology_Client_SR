import React, { useState } from 'react'
import Styles from './ManageUsers.module.scss';
import {Link} from '@reach/router';
import CreateUserForm from './CreateUserForm'
import UserList from "./UserList"
import usersArr from '../../../data/users';


const ManageUsers = () => {

    return (
        <main className={Styles.pageGrid}>
            <CreateUserForm/>   
            <UserList />    
        </main>
        
        /* <UserList userType="Operators" users={usersArr.filter((user) => user.userType === "operator")}/>
        <UserList userType="Supervisors" users={usersArr.filter((user) => user.userType === "supervisor")}/>
        <UserList userType="Maintenance" users={usersArr.filter((user) => user.userType === "maintenance")}/>
        <UserList userType="Management" users={usersArr.filter((user) => user.userType === "management")}/> */
    )
}

export default ManageUsers;
