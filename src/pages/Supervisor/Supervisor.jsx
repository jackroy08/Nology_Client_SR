import React, { useState, useEffect } from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignVehicles from './AssignVehicles';
import { DailyReport } from './DailyReport/DailyReport';
import { getVehicles, createVehicle, subscribeToVehicles } from './../../services/VehiclesService';
import { getNewsItems, subscribeToNewsItems, createNewsItem } from "../../services/newsItemsService";

import usersArr from "../../data/users";
import teamsArr from "../../data/teams";

import VehicleTable from "./VehicleTable";
import UserTable from "./UserTable";
import NewsTicker from "./NewsTicker";
import Modal from "./../../components/Modal";
import useModal from "./../../components/Modal/useModal";
import {firestore} from "../../firebase"
import SupervisorIncidentForm from './SupervisorIncidentForm/SupervisorIncidentForm';

export const Supervisor = () => {


    //dummy data
    const maintenanceIssues = [{status: false},{status: true},{status: false},{status: false},{status: false},{status: false},{status: false},{status: false}]



    //Update when we actually get the user/// OPnAuthStateChange ting
    const user = {
        userID: "1001",
        currentTeam: "teamA",
        currentSubTeam: "Morning",
        fullNameStr: "Edward Supervisor"
    }

    //get teams
    const getUniqueTeams = teamsArr => [...teamsArr.map(teamObj => teamObj.team).filter((team,i,teams) => teams.slice(i+1).includes(team) ? false : true),"All"];
    
    // end of dummy data

    const [resizeVehicleTable, setResizevehicleTable] = useState(true)

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
        //get news items
        getNewsItems(teamToView).then(dataArr => setNewsItemsArr(dataArr));
        //set teams that can be selected
        setTeamsAvailableToView(getUniqueTeams(teamsArr));
        //subscribing to all vehicles as this doesnt have a teams filter on the service
        let unsubscribeVehicles = subscribeToVehicles(setVehiclesArr,teamToView);
        //Need to do same for users
        return () => {unsubscribeVehicles()}
    }, [])

    useEffect(()=>{
        console.log(`Subscribing To ${teamToView}`)

        //refilter when teamToView Changes
        setFilteredVehiclesArr(vehiclesArr.filter(teamToView==="All" ? () => true : vehicle => vehicle.currentTeam===teamToView));
        setResizevehicleTable(!resizeVehicleTable)

        // subscribe to collections
        let unsubscribeNews = subscribeToNewsItems(setNewsItemsArr,teamToView);
        return () => {
            console.log(`Unsubscribing From ${teamToView}`);
            unsubscribeNews();
        }
    },[teamToView])

    //need to do the same same for users
    useEffect(() => {
        setFilteredVehiclesArr(vehiclesArr.filter(teamToView==="All" ? () => true : vehicle => vehicle.currentTeam===teamToView));
        setResizevehicleTable(!resizeVehicleTable)
    },[vehiclesArr])

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
                        {teamsAvailableToView.map(team => <option key={team} value={team.replace(" ","").replace(/^Team/,"team")}>{team}</option>)}
                    </select></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<Load />) }}>Add Load</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<AssignVehicles usersArr={usersArr} vehiclesArr={vehiclesArr} />) }}>Reassign Vehicles</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Sign off Maintenance
                    <div className={`${Styles.notification} ${showNotification}`}>
                        <p>{maintenanceIssues.filter(issue => issue.status).length}</p>
                    </div>
                    </button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Check Out Vehicle</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<DailyReport />) }}>Supervisor Reports</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<SupervisorIncidentForm user={user}/>) }}>Report Incident To Managment</button></div>
                </section>
                <section className={Styles.newsTicker}>
                    {<NewsTicker newsItems={newsItemsArr} setModalContent={setModalContent} toggle={toggle} />}
                </section>
                <section className={Styles.dataTable}>
                    <VehicleTable filteredVehiclesArr={filteredVehiclesArr} resizeVehicleTable={resizeVehicleTable}/>
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