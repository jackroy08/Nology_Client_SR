import React, { useState } from 'react';
import Styles from './UserList.module.scss';
import usersArr from '../../../../data/users';

import CreateUserForm from '../CreateUserForm'
import useModal from '../../../../components/Modal/useModal';


const UserList = (props) => {
    const {isShowing, toggle} = useModal();
    const [filteredUsersArr, setFilteredUsersArr] = useState(usersArr);

    const getUserItemJsx = (user) => {
        return (
            <li key={user.userID} className={Styles.userItem}>
                <p>{user.fullNameStr}</p>
                <p>{user.dateOfBirth}</p>
                <p>{user.userID}</p>
                <p>{user.isOnShift ? "Yes" : "No"}</p>
                <p>{user.currentTeam ? user.currentTeam : "No team"}</p>
                <button>Edit...</button>
            </li>
        )
    };

    const filterUsers = (userType) => {
        if (userType) {
        setFilteredUsersArr(usersArr.filter((user) => user.userType === userType))
        } else {
        setFilteredUsersArr(usersArr)
        }
    };


    return (
        <section className={Styles.userListSection}>
            <header>
                <h3>Users</h3>
                <button onClick={toggle}>Create New User</button>
                <CreateUserForm isShowing={isShowing} hide={toggle} />
                <select onChange={(event) => filterUsers(event.target.value)}>
                    <option value="">All Users</option>
                    <option value="operator">Operator</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="management">Management</option>
                </select>
            </header>                    
            <ul className={Styles.userList}>
                <li className={Styles.columnTitles}>
                    <h4>Full Name</h4>
                    <h4>Date of Birth</h4>
                    <h4>User ID</h4>
                    <h4>On Shift?</h4>
                    <h4>Team</h4>
                    <h4>Action</h4>
                </li>
                {filteredUsersArr.map(getUserItemJsx)}
                </ul>
        </section>
        
    )
}

export default UserList;
