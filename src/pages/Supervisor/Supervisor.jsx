import React, { useState, useEffect } from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignVehicles from './AssignVehicles';
import { DailyReport } from './DailyReport/DailyReport';
import { getVehicles, createVehicle, subscribeToVehicles } from './../../services/VehiclesService';
import { getNewsItems, subscribeToNewsItems, createNewsItem } from "../../services/newsItemsService";
import { getTeams } from "../../services/TeamsService";
import { getUsers } from "../../services/UsersService";

// import usersArr from "../../data/users";

import VehicleTable from "./VehicleTable";
import UserTable from "./UserTable";
import NewsTicker from "./NewsTicker";
import Modal from "./../../components/Modal";
import useModal from "./../../components/Modal/useModal";
import SupervisorIncidentForm from './SupervisorIncidentForm/SupervisorIncidentForm';

export const Supervisor = () => {
    //dummy data
    const maintenanceIssues = [{status: false},{status: true},{status: false},{status: false},{status: false},{status: false},{status: false},{status: false}]

    //Update when we actually get the user/// OPnAuthStateChange ting
    const user = {
        userID: "1001",
        currentTeam: "Team A",
        currentSubTeam: "Morning",
        fullNameStr: "Edward Supervisor"
    }
    //get teams
    const getUniqueTeams = teamsArr => [...teamsArr.map(teamObj => teamObj.teamName).filter((team,i,teams) => teams.slice(i+1).includes(team) ? false : true),"All"];
    // end of dummy data

    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [filteredVehiclesArr, setFilteredVehiclesArr] = useState([]);

    const [usersArr, setUsersArr] = useState([]);
    const [filteredUsersArr, setFilteredUsersArr] = useState([]);
    
    const [newsItemsArr, setNewsItemsArr] = useState([]);
    const [teamToView, setTeamView] = useState(user.currentTeam);
    const [teamsAvailableToView, setTeamsAvailableToView] = useState([]);

    //page load effects
    useEffect(() => {
        //get vehicles
        getVehicles().then(dataArr => setVehiclesArr(dataArr));
        getUsers().then(dataArr => setUsersArr(dataArr));
        //get news items
        getNewsItems(teamToView).then(dataArr => setNewsItemsArr(dataArr));
        //set teams that can be selected
        // setTeamsAvailableToView(getUniqueTeams([]));
        getTeams().then((res) => {setTeamsAvailableToView((getUniqueTeams(res)))});
        //subscribing to all vehicles as this doesnt have a teams filter on the service
        let unsubscribeVehicles = subscribeToVehicles(setVehiclesArr,teamToView);
        //Need to do same for users
        return () => {unsubscribeVehicles()}
    }, [])

    useEffect(()=>{
        //refilter when teamToView Changes
        setFilteredVehiclesArr(vehiclesArr.filter(teamToView==="All" ? () => true : vehicle => vehicle.currentTeam===teamToView));
        setFilteredUsersArr(usersArr.filter(teamToView==="All" ? () => true : user => user.currentTeam===teamToView));

        // subscribe to collections
        let unsubscribeNews = subscribeToNewsItems(setNewsItemsArr,teamToView);
        return () => {
            unsubscribeNews();
        }
    },[teamToView])

    useEffect(()=>{
        setFilteredVehiclesArr(vehiclesArr.filter(teamToView==="All" ? () => true : vehicle => vehicle.currentTeam===teamToView));
    },[vehiclesArr])

    useEffect(()=>{
        setFilteredUsersArr(usersArr.filter(teamToView==="All" ? () => true : user => user.currentTeam===teamToView));
    },[usersArr])

    //handle change team dropdown
    const handleTeamChange = e => {
        setTeamView(e.target.value)
    }

    // modal
    const { isShowing, toggle } = useModal();
    const [modalContent, setModalContent] = useState(null);

    // show notification ternary statement
    const showNotification = maintenanceIssues.filter(issue => issue.status).length ? Styles.showNotification : "";

    return (
        <>
            <main className={Styles.pageGrid}> 

                <section className={Styles.buttonGrid}>
                    <div><select name="team" onChange={handleTeamChange}>
                        {teamsAvailableToView.map(team => <option key={team} value={team}>{team}</option>)}
                    </select></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<Load users={filteredUsersArr}/>) }}>Add Load</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<AssignVehicles usersArr={filteredUsersArr} vehiclesArr={filteredVehiclesArr} />) }}>Reassign Vehicles</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Sign off Maintenance
                    <div className={`${Styles.notification} ${showNotification}`}>
                        <p>{maintenanceIssues.filter(issue => issue.status).length}</p>
                    </div>
                    </button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Check Out Vehicle</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<DailyReport />) }}>Handover Notes</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<SupervisorIncidentForm user={user}/>) }}>Report Incident To Managment</button></div>
                </section>
                <section className={Styles.newsTicker}>
                    {<NewsTicker newsItems={newsItemsArr} setModalContent={setModalContent} toggle={toggle} />}
                </section>
                <section className={Styles.dataTable}>
                    <VehicleTable filteredVehiclesArr={filteredVehiclesArr} />
                </section>
                <section className={Styles.dataTable}>
                    <UserTable filteredUsersArr={filteredUsersArr}/>
                </section>

                <Modal innerComponent={modalContent} isShowing={isShowing} hide={toggle}/>

            </main>
        </>
    )
}

export default Supervisor;