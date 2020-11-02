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
    
    useEffect(() => {
        
    },[])

    // end of dummy data

    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [filteredVehiclesArr, setFilteredVehiclesArr] = useState([]);

    const [usersArr, setUsersArr] = useState([]);
    const [filteredUsersArr, setFilteredUsersArr] = useState([]);
    
    const [newsItemsArr, setNewsItemsArr] = useState([]);
    const [teamToView, setTeamView] = useState(user.currentTeam);
    const [teamsAvailableToView, setTeamsAvailableToView] = useState([]);

    const [ unsubscribeVehicle, setUnsubscribeVehicle] = useState(null)
    const [ unsubscribeNews, setUnsubscribeNews] = useState(null)

    //page load effects
    useEffect(() => {
        //get vehicles
        getVehicles().then(dataArr => setVehiclesArr(dataArr));

        //get news items
        getNewsItems(teamToView).then(dataArr => setNewsItemsArr(dataArr));

        //set teams that can be selected
        setTeamsAvailableToView(getUniqueTeams(teamsArr));

        // subscribe to collections
        setUnsubscribeNews(subscribeToNewsItems(setNewsItemsArr,teamToView));

    }, [])

    //change teamToView or vehicles effects
    useEffect(() => {
        //unsubscribe from news with old team
        if(unsubscribeNews){unsubscribeNews()};
        //get newteam news
        getNewsItems(teamToView).then(dataArr => setNewsItemsArr(dataArr));
        //subscribe to news with new team
        setUnsubscribeNews(subscribeToNewsItems(setNewsItemsArr,teamToView));

        //set filters users array
        setFilteredVehiclesArr(vehiclesArr.filter(teamToView==="All" ? () => true : v => v.currentTeam===teamToView));
        //set filtered vehicels array;

    },[teamToView])

    useEffect(() => {
        setFilteredVehiclesArr(vehiclesArr.filter(teamToView==="All" ? () => true : v => v.currentTeam===teamToView));
    },[vehiclesArr])


    //handle change team dropdown
    const handleTeamChange = e => {
        setTeamView(e.target.value)
    }

    // modal
    const { isShowing, toggle } = useModal();
    const [modalContent, setModalContent] = useState(null);

    // show notification ternary statement
    const showNotification = maintenanceIssues.filter(i=> i.status).length ? Styles.showNotification : "";

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
                    {<NewsTicker newsItems={newsItemsArr}/>}
                </section>
                <section className={Styles.dataTable}>
                    <VehicleTable filteredVehiclesArr={filteredVehiclesArr}/>
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