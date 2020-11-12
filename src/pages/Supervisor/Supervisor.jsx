import React, { useState, useEffect, useContext } from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignVehicles from './AssignVehicles';
import { DailyReport } from './DailyReport/DailyReport';
import { getVehicles, subscribeToVehicles } from './../../services/VehiclesService';
import { getNewsItems, subscribeToNewsItems, createNewsItem } from "../../services/newsItemsService";
import { getTeams } from "../../services/TeamsService";
import { getUsers } from "../../services/UsersService";
import SideNav from "../../components/SideNav";
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
    //
    const [ vehicleChecksArray, setVehicleChecksArray ] = useState([])
    const [ filteredVehicleChecksArray, setFilteredVehicleChecksArray ] = useState([])
    const [ checkItemsArr, setCheckItemsArr ] = useState([]);
    //

    //page load effects
    useEffect(() => {
        let mounted = true;
        //get vehicles
        getVehicles().then(dataArr => setVehiclesArr(dataArr));
        getUsers().then(dataArr => setUsersArr(dataArr));
        //get news items
        getNewsItems(teamToView).then(dataArr => setNewsItemsArr(dataArr));
        //set teams that can be selected
        getTeams().then(res => {if(mounted){setTeamsAvailableToView((getUniqueTeams(res)))}});
        //subscribing to all vehicles as this doesnt have a teams filter on the service
        let unsubscribeVehicles = subscribeToVehicles(setVehiclesArr, teamToView);
        const unsubscribeVehicleChecks = subscribeToVehicles(setVehicleChecksArray);
        //
        //Need to do same for users
        return () => {
            mounted = false;
            unsubscribeVehicles();
            unsubscribeVehicleChecks();
            //
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

    // toDo refactor useState and useEffect so more tidy (e.g. setting state to vehicles twice)
    useEffect(() => {
        setFilteredVehicleChecksArray(vehicleChecksArray.filter(vehicle => vehicle.currentTeam === user.currentTeam));
    }, [vehicleChecksArray])
    
        useEffect(() => {
        let newCheckItemsArr=[];
        filteredVehicleChecksArray.forEach(vehicle =>{
            if(vehicle.checkItems){
            vehicle.checkItems.forEach(checkItem => {
                if(checkItem.maintenanceSignoff && !checkItem.supervisorSignoff){
                newCheckItemsArr.push({...checkItem, vehicleType: vehicle.vehicleType, team: vehicle.currentTeam})
                }
            })
            }
        })
        setCheckItemsArr(newCheckItemsArr)  
    }, [filteredVehicleChecksArray])
    //

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
            <div className={Styles.pageContainer}> 

                <SideNav>
                    <h2>Supervisor</h2>
                    <button className={Styles.btnNav} onClick={() => { toggle(); setModalContent(<Load users={filteredUsersArr}/>) }}>
                        Add Load</button>
                    <button className={Styles.btnNav} onClick={() => { toggle(); setModalContent(<AssignVehicles usersArr={filteredUsersArr} vehiclesArr={filteredVehiclesArr} />) }}>
                        Reassign Vehicles</button>
                    <button className={Styles.btnNav} onClick={() => { toggle(); setModalContent(<SignOffMaintenance checkItemsArr={checkItemsArr} />)}}>
                        Approve Maintenance
                        <div className={`${Styles.notification} ${showNotification}`}>
                            <p>{checkItemsArr.length}</p>
                        </div>
                    </button>
                    <button className={Styles.btnNav} onClick={handleCheckOutVehicle}>
                        Check Out Vehicle</button>
                    <button className={Styles.btnNav} onClick={() => { toggle(); setModalContent(<SupervisorIncidentForm user={user}/>) }}>
                        Report an Incident</button>
                    <button className={Styles.btnNav} onClick={() => { toggle(); setModalContent(<DailyReport />) }}>
                        Handover Report</button>
                </SideNav>

                <main className={Styles.mainContent}>
                    <article className={Styles.newsTicker}>
                        {<NewsTicker newsItems={newsItemsArr} setModalContent={setModalContent} toggle={toggle}>
                            <select className={`${Styles.selectTeam} ${Styles.selectPrimary}`} name="team" onChange={handleTeamChange}>
                            {teamsAvailableToView.map(team => <option key={team} value={team}>{team}</option>)}
                            </select>
                        </NewsTicker>}
                    </article>
                    <article className={Styles.dataTable}>
                        <VehicleTable filteredVehiclesArr={filteredVehiclesArr} />
                    </article>
                    <article className={Styles.dataTable}>
                        <UserTable filteredUsersArr={filteredUsersArr}/>
                    </article>
                </main>

                <Modal innerComponent={modalContent} isShowing={isShowing} hide={toggle}/>

            </div>
        </>
    )
}

export default Supervisor;
