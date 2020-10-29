import React, { useState, useEffect } from 'react';
import Styles from './ManageTeams.module.scss';
import teamsArr from '../../../data/teams';
import useModal from '../../../components/Modal/useModal';
import Modal from '../../../components/Modal';
import CreateTeamForm from './CreateTeamForm';
import TeamItem from './TeamItem';
import { firestore } from '../../../firebase'

const ManageTeams = () => {
    const {isShowing, toggle} = useModal();
    
    const [filteredTeamsArr, setFilteredTeamsArr] = useState(teamsArr);

    return (
        <section className={Styles.teamsListSection}>
            <header>
                <h3>Teams</h3>
                <button onClick={toggle}>Create New Team</button>
                <Modal innerComponent={<CreateTeamForm hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            </header>                    
            <ul className={Styles.teamsList}>
                <li className={Styles.columnTitles}>
                    <h4>Site</h4>
                    <h4>Team</h4>
                    <h4>Sub Team</h4>
                </li>
                {filteredTeamsArr.map((team) => <TeamItem key={team.teamID} team={team} />)}
                </ul>
        </section>    )
}

export default ManageTeams;
