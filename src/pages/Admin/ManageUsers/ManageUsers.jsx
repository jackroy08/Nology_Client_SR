import React, { useState, useEffect } from 'react'
import Styles from './ManageUsers.module.scss';
import usersArr from '../../../data/users';
import UserItem  from './UserItem';
import CreateUserForm from './CreateUserForm';
import Modal from '../../../components/Modal';
import useModal from '../../../components/Modal/useModal';

const ManageUsers = () => {
    const {isShowing, toggle} = useModal();
    
    //filter the users by the dropdown box
    const [filteredUsersArr, setFilteredUsersArr] = useState(usersArr);
    const filterUsers = (userType) => {
        if (userType) {
        setFilteredUsersArr(usersArr.filter((user) => user.userType === userType))
        } else {
        setFilteredUsersArr(usersArr)
        }
    };

    return (
        <main className={Styles.pageGrid}>
            {/* <EditUser user={usersArr[0]}/> */}
            <section className={Styles.userListSection}>
                <header>
                    <h3>Users</h3>
                    <button onClick={toggle}>Create New User</button>
                    <Modal innerComponent={<CreateUserForm hide={toggle}/>} isShowing={isShowing} hide={toggle} />
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
                        <h4>Sub Team</h4>
                        <h4>Action</h4>
                    </li>
                    {filteredUsersArr.map((user) => <UserItem key={user.userID} user={user} />)}
                </ul>
            </section>    
        </main>
    )
}

export default ManageUsers;
