import React from 'react'
import Styles from './ManageUsers.module.scss';
import UserList from "./UserList"
import usersArr from '../../../data/users';
import EditUser  from './EditUser/EditUser';
import CreateUserForm from './CreateUserForm'

const ManageUsers = () => {

    return (
        <main className={Styles.pageGrid}>
            <CreateUserForm/>  
            {/* <EditUser user={usersArr[0]}/> */}
            <UserList />    
        </main>
    )
}

export default ManageUsers;
