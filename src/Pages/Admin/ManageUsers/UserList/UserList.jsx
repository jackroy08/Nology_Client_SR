import React, { useState } from 'react';
import Styles from './UserList.module.scss';
import UserItem from './UserItem'
import usersArr from '../../../../data/users';



const UserList = (props) => {
    const { userType, users} = props
    const [isOpen, setOpen] = useState("false");
    const [userDropdown, setUserDropdown] = useState("operator")

    const [filteredUsersArr, setFilteredUsersArr] = useState(usersArr);

    const getUserItemJsx = (user) => {
        return <UserItem key={user.userID} user={user} />
    };

    const getFilteredUsersArr = (event) => {
        console.log(event.target.value)
        return usersArr.filter(event.target.value)
    };

    return (
        <section className={Styles.userListSection}>
            <header>
                <select onChange={(event) => setUserDropdown(event.target.value)}>
                    <option value="operator">Operator</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="management">Management</option>
                </select>
                <button>Create New User</button>
            </header>
            <ul className={Styles.userList}>
                <li className={Styles.userItem}>
                    <p></p>
                    <p>Full Name</p>
                    <p>Date of Birth</p>
                    <p>User ID</p>
                    <p>On Shift?</p>
                    <p>Team</p>
                    <p>Action</p>
                </li>
                {usersArr.map(getUserItemJsx)}
                
        
                </ul>
        </section>
        
    )
}

export default UserList;
