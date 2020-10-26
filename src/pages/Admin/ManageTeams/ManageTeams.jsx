import React, { useState } from 'react';
import Styles from './ManageTeams.module.scss';
import teamsArr from '../../../data/teams';
import useModal from '../../../components/Modal/useModal';
import CreateTeamForm from './CreateTeamForm';



const getTeamItemJsx = (team) => {
    return (
        <li key={team.teamName} className={Styles.teamItem}>
            <p>{team.teamName}</p>
            <p>{team.rotationGroup}</p>
            <p>{team.currentSite}</p>
            <button>Edit...</button>
        </li>
    )
};

const ManageTeams = () => {
    const {isShowing, toggle} = useModal();
    const [filteredTeamsArr, setFilteredTeamsArr] = useState(teamsArr);
    
    return (
        <section className={Styles.teamsListSection}>
            <header>
                <h3>Teams</h3>
                <button onClick={toggle}>Create New Team</button>
                <CreateTeamForm isShowing={isShowing} hide={toggle} />
            </header>                    
            <ul className={Styles.teamsList}>
                <li className={Styles.columnTitles}>
                    <h4>Team Name</h4>
                    <h4>Rotation Group</h4>
                    <h4>Current Site</h4>
                </li>
                {filteredTeamsArr.map(getTeamItemJsx)}
                </ul>
        </section>    )
}

export default ManageTeams;
