import React from 'react'
import Styles from './TeamItem.module.scss';
import EditTeamForm  from '../EditTeamForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const TeamItem = (props) => {
    const {isShowing, toggle} = useModal();
    const team = props.team;

    return (
        
        <li key={team.teamID} className={Styles.teamItem}>
            <p>{team.site}</p>
            <p>{team.teamName}</p>
            <p>{team.subTeamName}</p>
            <button onClick={toggle}><FontAwesomeIcon icon="pencil-alt"/></button>
            <button onClick={toggle}><FontAwesomeIcon icon="trash-alt"/></button>
            <Modal innerComponent={<EditTeamForm team={team} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>

    )
}

export default TeamItem;
