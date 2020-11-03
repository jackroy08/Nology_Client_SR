import React, { useState, useEffect } from 'react';
import Styles from './ManageTeams.module.scss';
import useModal from '../../../components/Modal/useModal';
import Modal from '../../../components/Modal';
import CreateTeamForm from './CreateTeamForm';
import TeamItem from './TeamItem';
import { firestore } from '../../../firebase'
import { getTeams, subscribeToTeams } from '../../../services/TeamsService';

const ManageTeams = () => {
    const {isShowing, toggle} = useModal();
    const [teamsArr, setTeamsArr] = useState([]);
    const [teamNamesArr, setTeamNamesArr] = useState([null]);
    const [filteredTeamsArr, setFilteredTeamsArr] = useState([]);
        
    useEffect(() => {
        getTeams().then(response => {
            setFilteredTeamsArr(response);
            setTeamsArr(response);
            setTeamNamesArr([...new Set(response.map(team => team.teamName))]);
        });
        subscribeToTeams(setTeamsArr);
    }, [])

    useEffect(() => {
        if (teamsArr) {
            setFilteredTeamsArr(teamsArr);
            setTeamNamesArr([...new Set(teamsArr.map(team => team.teamName))])
        }
    }, [teamsArr])

    const filterTeams = (teamName) => {
        if (teamName) {
        setFilteredTeamsArr(teamsArr.filter((each) => each.teamName === teamName))
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
                        {teamNamesArr ? teamNamesArr.map((team) => <option key={team} value={team}>{team}</option>) : null}
                    </select>
            </header>                    
            <ul className={Styles.teamsList}>
                <li className={Styles.columnTitles}>
                    <h4>Site</h4>
                    <h4>Team Name</h4>
                    <h4>Sub Team Name</h4>
                    <h4>Action</h4>
                </li>
                {filteredTeamsArr.map((team) => <TeamItem key={team.teamID} team={team} />)}
                </ul>
        </section>    )
}

export default ManageTeams;
