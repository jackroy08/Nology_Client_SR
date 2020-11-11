import React, { useState, useEffect, useContext } from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignVehicles from './AssignVehicles';
import { DailyReport } from './DailyReport/DailyReport';
import { getVehicles, createVehicle, subscribeToVehicles } from './../../services/VehiclesService';
import { getNewsItems, subscribeToNewsItems, createNewsItem } from "../../services/newsItemsService";
import { getTeams } from "../../services/TeamsService";
import { getUsers } from "../../services/UsersService";
import { UserContext } from "../../context/userContext";

import VehicleTable from "./VehicleTable";
import UserTable from "./UserTable";
import NewsTicker from "./NewsTicker";
import Modal from "./../../components/Modal";
import useModal from "./../../components/Modal/useModal";
import SupervisorIncidentForm from './SupervisorIncidentForm/SupervisorIncidentForm';
import SignOffMaintenance from "./SignOffMaintenance"
import { navigate } from '@reach/router';

///// BUGS /////
// 1. When you click back on checkout vehicle, it takes you to an empty page (doesn't take you back to supervisor)
// 2. When you close the add load modal, page goes blank 
// 3. When you approve a load, the load does not dissapear on users screen (but does update on firestore)
////////////////

export const Supervisor = () => {
    //dummy data
    const maintenanceIssues = [{status: false},{status: true},{status: false},{status: false},{status: false},{status: false},{status: false},{status: false}]

    const { user } = useContext(UserContext)

    const getUniqueTeams = teamsArr => [...teamsArr.map(teamObj => teamObj.teamName).filter((team,i,teams) => teams.slice(i+1).includes(team) ? false : true),"All"];

    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [filteredVehiclesArr, setFilteredVehiclesArr] = useState([]);

    const [usersArr, setUsersArr] = useState([]);
    const [filteredUsersArr, setFilteredUsersArr] = useState([]);
    
    const [newsItemsArr, setNewsItemsArr] = useState([]);
    const [teamToView, setTeamView] = useState(user.currentTeam ? user.currentTeam : "All");
    const [teamsAvailableToView, setTeamsAvailableToView] = useState([]);

    //page load effects
    useEffect(() => {
        let mounted = true;
        //get vehicles
        getVehicles().then(dataArr => setVehiclesArr(dataArr));
        getUsers().then(dataArr => setUsersArr(dataArr));
        //get news items
        getNewsItems(teamToView).then(dataArr => setNewsItemsArr(dataArr));
        //set teams that can be selected
        // setTeamsAvailableToView(getUniqueTeams([]));
        getTeams().then(res => {if(mounted){setTeamsAvailableToView((getUniqueTeams(res)))}});
        //subscribing to all vehicles as this doesnt have a teams filter on the service
        let unsubscribeVehicles = subscribeToVehicles(setVehiclesArr,teamToView);
        //Need to do same for users
        return () => {
            mounted = false;
            unsubscribeVehicles();
        }
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

    const handleCheckOutVehicle = () => {
        if(user.assignedVehicle){
            navigate("/Checklist")
        }else{
            alert("No vehicle assigned, click Reassign Vehicles to assign yourself a vehicle")
        }
    }

    return (
        <>
            <main className={Styles.pageFlex}> 

                <section className={Styles.asideContainer}>
                    <div className={Styles.selectTeam}>
                        <select name="team" onChange={handleTeamChange} value={teamToView}>
                            {teamsAvailableToView.map(team => <option key={team} value={team}>{team}</option>)}
                        </select>
                    </div>
                    <article className={Styles.buttonGrid}>
                        <div>
                            <button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<Load users={filteredUsersArr}/>) }}>
                                Add Load
                            </button>
                        </div>
                        <div>
                            <button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<AssignVehicles usersArr={filteredUsersArr} vehiclesArr={filteredVehiclesArr} />) }}>
                                Reassign Vehicles
                            </button>
                        </div>
                        <div>
                            <button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<SignOffMaintenance />)}}>
                                Approve Maintenance
                                <article className={`${Styles.notification} ${showNotification}`}>
                                    <p>{maintenanceIssues.filter(issue => issue.status).length}</p>
                                </article>
                            </button>
                        </div>
                        <div>
                            <button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={handleCheckOutVehicle}>
                                Check Out Vehicle
                            </button>
                        </div>
                        <div>
                            <button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<DailyReport />) }}>
                                Supervisor Report
                            </button>
                        </div>
                        <div>
                            <button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setModalContent(<SupervisorIncidentForm user={user}/>) }}>
                                Report an Incident
                            </button>
                        </div>
                    </article>
                </section>

                <section className={Styles.newsFeed}>
                    <article className={Styles.newsTicker}>
                        {<NewsTicker newsItems={newsItemsArr} setModalContent={setModalContent} toggle={toggle} />}
                    </article>
                    <article className={Styles.dataTable}>
                        <VehicleTable filteredVehiclesArr={filteredVehiclesArr} />
                    </article>
                    <article className={Styles.dataTable}>
                        <UserTable filteredUsersArr={filteredUsersArr}/>
                    </article>
                </section>

                <Modal innerComponent={modalContent} isShowing={isShowing} hide={toggle}/>

            </main>
        </>
    )
}

export default Supervisor;