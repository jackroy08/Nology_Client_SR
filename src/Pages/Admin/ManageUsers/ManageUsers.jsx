import React, { useState } from 'react'
import Styles from './ManageUsers.module.scss';
import {Link} from '@reach/router';
import CreateUserForm from './CreateUserForm'
import UserList from "./UserList"
import usersArr from '../../../data/users';
import EditUser  from './EditUser/EditUser';


const ManageUsers = () => {

    return (
        <main className={Styles.pageGrid}>
            <CreateUserForm/>  
            <EditUser user={usersArr[0]}/>
            <UserList />    
        </main>
    )
}

export default ManageUsers;
