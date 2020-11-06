import React, { useState, useEffect } from 'react';
import Styles from './ManageUsers.module.scss';
import useModal from '../../../components/Modal/useModal';
import Modal from '../../../components/Modal';
import CreateUserForm from './CreateUserForm';
import UserItem from './UserItem';
import { firestore } from '../../../firebase'
import { getUsers, subscribeToUsers } from '../../../services/UsersService';

const ManageUsers = () => {
    const {isShowing, toggle} = useModal();
    const [usersArr, setUsersArr] = useState([]);
    const [userNamesArr, setUserNamesArr] = useState([null]);
    const [filteredUsersArr, setFilteredUsersArr] = useState([]);
        
    useEffect(() => {
        getUsers().then(response => {
            setFilteredUsersArr(response);
            setUsersArr(response);
            setUserNamesArr([...new Set(response.map(user => user.userName))]);
        });
        const unsubscribe = subscribeToUsers(setUsersArr);
        return unsubscribe;
    }, [])

    useEffect(() => {
        if (usersArr) {
            setFilteredUsersArr(usersArr);
            setUserNamesArr([...new Set(usersArr.map(user => user.userName))])
        }
    }, [usersArr])

    const filterUsers = (userType) => {
        if (userType) {
        setFilteredUsersArr(usersArr.filter((each) => each.userType === userType))
        } else {
        setFilteredUsersArr(usersArr)
        }
    };

    return (
        <section className={Styles.usersListSection}>
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
            <ul className={Styles.usersList}>
                <li className={Styles.columnTitles}>
                    <h4>User ID</h4>
                    <h4>Full Name</h4>
                    <h4>Date of Birth</h4>
                    <h4>On Shift?</h4>
                    <h4>Team</h4>
                    <h4>Sub Team</h4>
                    <h4>Action</h4><h4>Site</h4>
                </li>
                {filteredUsersArr.map((user) => <UserItem key={user.userID} user={user} />)}
                </ul>
        </section>    )
}

export default ManageUsers;