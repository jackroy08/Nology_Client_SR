import React, { useState } from 'react';
import Styles from './TeamItem.module.scss';
import EditTeamForm  from '../EditVehicleForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTeam } from '../../../../services/TeamsService';


const TeamItem = (props) => {
    const {isShowing, toggle} = useModal();
    const team = props.team;

    const [isOpen, setIsOpen] = useState(false);
    const toggleStyles = isOpen ? Styles.confirmOpen : "";
    

    return (
        
        <li key={team.teamID} className={Styles.teamItem}>
            <p>{team.teamID}</p>
            <p>{team.site}</p>
            <p>{team.teamName}</p>
            <p>{team.subTeamName}</p>
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
                                deleteTeam(team);
                                setIsOpen(!isOpen);
                            }}
                        >Confirm
                        </button>
            </div>
            <Modal innerComponent={<EditTeamForm team={team} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>

    )
}

export default TeamItem;
