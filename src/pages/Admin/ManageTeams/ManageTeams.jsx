import React, { useState, useEffect } from 'react';
import Styles from './ManageTeams.module.scss';
import useModal from '../../../components/Modal/useModal';
import Modal from '../../../components/Modal';
import CreateTeamForm from './CreateTeamForm';
import TeamItem from './TeamItem';
import { firestore } from '../../../firebase'
import { getTeams } from '../../../services/TeamsService';

const ManageTeams = () => {
    const {isShowing, toggle} = useModal();
    const [teamsArr, setTeamsArr] = useState([]);
    const [filteredTeamsArr, setFilteredTeamsArr] = useState([]);
    
    useEffect(() => {
        getTeams().then(response => {setFilteredTeamsArr(response); setTeamsArr(response)})
    }, [])

    const filterTeams = (team) => {
        if (team) {
        setFilteredTeamsArr(teamsArr.filter((each) => each.team === team))
        } else {
        setFilteredTeamsArr(teamsArr)
        }
    };

    return (
        <section className={Styles.teamsListSection}>
            <header>
                <h3>Teams</h3>
                <button onClick={toggle}>Create New Team</button>
                <Modal innerComponent={<CreateTeamForm hide={toggle}/>} isShowing={isShowing} hide={toggle} />
                <select onChange={(event) => filterTeams(event.target.value)}>
                        <option value="">All Teams</option>
                        <option value="Team A">Team A</option>
                        <option value="Team B">Team B</option>
                        <option value="Team C">Team C</option>
                    </select>
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
