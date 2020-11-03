import React, { useState, useEffect } from "react";
import Styles from "./TeamFeed.module.scss";
import Modal from "../../../components/Modal";
import useModal from "../../../components/Modal/useModal";
import Report from "../Report";
import { getUsers } from "../../../services/UsersService";
import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";

const TeamFeed = () => {
    const [loads, setLoads] = useState([]);
    const [teamsArr, setTeamsArr] = useState([]);
    const [usersArr, setUsersArr] = useState([]);
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const {isShowing, toggle} = useModal();

    const teamUpdates = [];

    const getTeamJsx = (team) => {

        const teamVehicleCountArr = [];
        const teamActiveVehicleCountArr = [];
        const classAArr = [];
        const userTeamArr = [];
        const userActiveTeamArr = [];
        const teamLoadsArr = [];

        vehiclesArr.map(vehicle => {
            if(vehicle.currentTeam == team) teamVehicleCountArr.push(vehicle) 
        });
        teamVehicleCountArr.map(vehicle => {
            if(vehicle.currentUser !== null) teamActiveVehicleCountArr.push(vehicle);
        });
        teamActiveVehicleCountArr.map(vehicle => {
            if(vehicle.checkItems.classA !== undefined) classAArr.push(vehicle.checkItems.classA);
        });
        usersArr.map(user => {
            if(user.currentTeam == team) userTeamArr.push(user);
        });
        userTeamArr.map(user => {
            if(user.isOnShift == true) userActiveTeamArr.push(user);
        });
        loads.forEach((load) => {
            if(load.team === team) teamLoadsArr.push(load);
        });

        return (
            <article className={Styles.teamReport}>
                <h3>{team}:</h3>
                <p>There are {teamVehicleCountArr.length} vehicles in the team.</p>
                <p>There are {teamActiveVehicleCountArr.length} active vehicles in the team</p>
                <p>There are {userTeamArr.length} team members</p>
                <p>There are currently {userActiveTeamArr.length} team members on shift</p>
                <p>There have been {teamLoadsArr.length} loads during this shift.</p>
                <p>There have been {classAArr.length} class A vehicle issues.</p>
            </article>
        )
    }

    const fetchUsersArr = () => {
        getUsers().then((response) => {
            setUsersArr(response);
        })
    }
    const fetchVehiclesArr = () => {
        getVehicles().then((response) => {
            setVehiclesArr(response);
        })
    }
    const fetchTeamsArr = () => {
        usersArr.forEach((user) => {
            if(!teamsArr.includes(user.currentTeam) && user.currentTeam !== undefined ) {
                teamsArr.push(user.currentTeam);
            }
        });
    }
    const fetchLoads = () => {
        getLoads().then((response) => setLoads(response));
    }

    useEffect(() => {
        fetchUsersArr();
        fetchVehiclesArr();
        fetchLoads();
    }, []);
    fetchTeamsArr();

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for teams</h1>
            <button className={Styles.btn} onClick={toggle}>Report</button>
            <Modal innerComponent={<Report item={teamUpdates} hide={toggle}/>} isShowing={isShowing} hide={toggle} />
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{teamsArr.length}</span> teams on this site.</h2>
            <section className={Styles.feedList}>
                {teamsArr.map(getTeamJsx)}
            </section>
        </article>
    )
}

export default TeamFeed;