import React from 'react'
import Styles from './TeamItem.module.scss';
import EditTeamForm  from '../EditTeamForm';
import Modal from '../../../../components/Modal';
import useModal from '../../../../components/Modal/useModal';

const TeamItem = (props) => {
    const {isShowing, toggle} = useModal();
    const team = props.team;

    return (
        
        <li key={team.team} className={Styles.teamItem}>
            <p>{team.site}</p>
            <p>{team.team}</p>
            <p>{team.subTeam}</p>
            <button onClick={toggle}>Edit...</button>
            <Modal innerComponent={<EditTeamForm team={team} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
        </li>

    )
}

export default TeamItem;
