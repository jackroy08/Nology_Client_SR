import React, { useState } from 'react';
import Styles from './UserItem.module.scss';
import EditUserForm  from '../EditUserForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteUser } from '../../../../services/UsersService';


const UserItem = (props) => {
    const {isShowing, toggle} = useModal();
    const user = props.user;

    const [isOpen, setIsOpen] = useState(false);
    const toggleStyles = isOpen ? Styles.confirmOpen : "";
    
    return (
        
        <li key={user.userID} className={Styles.userItem}>
            <p>{user.userID}</p>
            <p>{user.fullNameStr}</p>
            <p>{user.dateOfBirth}</p>
            <p>{user.isOnShift}</p>
            <p>{user.currentTeam}</p>
            <p>{user.currentSubTeam}</p>
            <span className={Styles.faIcon} onClick={toggle}><FontAwesomeIcon  icon="pencil-alt"/></span>
            <span className={Styles.faIcon} onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon  icon="trash-alt"/></span>
            <div className={`${Styles.confirmDelete} ${toggleStyles}`}>
                        <button
                            className={Styles.btnPrimary}
                            onClick={() => setIsOpen(!isOpen)}
                            >Cancel
                        </button>
                        <button
                            className={Styles.btnDanger}
                            onClick={() => {
                                deleteUser(user);
                                setIsOpen(!isOpen);
                            }}
                        >Confirm
                        </button>
            </div>
            <Modal innerComponent={<EditUserForm user={user} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>

    )
}

export default UserItem;