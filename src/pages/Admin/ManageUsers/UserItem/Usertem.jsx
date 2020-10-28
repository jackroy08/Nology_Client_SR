import React from 'react'
import Styles from './UserItem.module.scss';
import EditUserForm  from '../EditUserForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';

const UserItem = (props) => {
    const {isShowing, toggle} = useModal();
    const user = props.user;

    return (
        <li key={user.userID} className={Styles.userItem}>
            <p>{user.fullNameStr}</p>
            <p>{user.dateOfBirth}</p>
            <p>{user.userID}</p>
            <p>{user.isOnShift ? "Yes" : "No"}</p>
            <p>{user.currentTeam ? user.currentTeam : "-"}</p>
            <p>{user.currentSubTeam ? user.currentSubTeam : "-"}</p>
            <button onClick={toggle}>Edit...</button>
            <Modal innerComponent={<EditUserForm user={user} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>
    )
}

export default UserItem;
