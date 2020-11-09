import React, { useState, useEffect } from "react";
import Styles from "./TeamFeed.module.scss";
import { getTeams } from "../../../services/TeamsService";
import { getUsers } from "../../../services/UsersService";
import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";
import { Bar } from 'react-chartjs-2';

const TeamFeed = () => {
    const [loads, setLoads] = useState([]);
    const [teamsArr, setTeamsArr] = useState([]);
    const [usersArr, setUsersArr] = useState([]);
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [wholeTeamsArr, setWholeTeamsArr] = useState([]);

    const getSubTeamJsx = (team) => {

        const subTeamData = {
            datasets: [{
                // data: [10, 10, 10],
                data: [],
                borderWidth: 1
            }],
            labels: [
                // "1",
                // "2",
                // "3"
            ]
        }

        const subTeamUsers = [];
        usersArr.map((user) => {
            if(user.currentTeam == team.teamName && user.currentSubTeam == team.subTeamName) subTeamUsers.push(user);
        });
        subTeamData.datasets[0].data.push(subTeamUsers.length);
        subTeamData.labels.push(`${team.teamName} ${team.subTeamName}`);
        if(!wholeTeamsArr.includes(team.teamName)) setWholeTeamsArr(prevArr => prevArr.concat([team.teamName]));

        return (
            <Bar
                    data={subTeamData}
                    // width={100}
                    // height={50}
                    // options={{ maintainAspectRatio: false }}
                />
        )
    }


    const getTeamJsx = (team) => {

        const teamVehicles = {
            datasets: [{
                data: [],
                borderWidth: 1
            }],
            labels: [
            ]
        }
        const teamLoads = {
            datasets: [{
                data: [],
                borderWidth: 1
            }],
            labels: [
            ]
        }

        // team vehicles
        const teamVehicleList = [];
        vehiclesArr.map((vehicle) => {
            if(vehicle.currentTeam == team) teamVehicleList.push(vehicle);
        })
        teamVehicles.datasets[0].data.push(teamVehicleList.length);
        teamVehicles.labels.push(team);

        // team loads
        const loadList = loads[0];
        const teamLoadArr = []
        if (loadList !== undefined) {
            if(loadList.recentLoads !== undefined) {
                loadList.recentLoads.map((load) => {
                    if(load.team == team) teamLoadArr.push(load);
                })
            }
        }
        teamLoads.datasets[0].data.push(teamLoadArr.length);
        teamLoads.labels.push(team);

        return (
            <>
                <Bar
                    data={teamVehicles}
                    // width={100}
                    // height={50}
                    // options={{ maintainAspectRatio: false }}
                />
                <Bar
                    data={teamLoads}
                    // width={100}
                    // height={50}
                    // options={{ maintainAspectRatio: false }}
                />
            </>
        )
    };

    useEffect(() => {
        getTeams().then((response) => setTeamsArr(response));
        getUsers().then((response) => setUsersArr(response));
        getVehicles().then((response) => setVehiclesArr(response));
        getLoads().then((response) => setLoads(response));
    }, []);

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for teams</h1>
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{teamsArr.length}</span> teams on this site.</h2>
            <section className={Styles.feedList}>
                {teamsArr.map(getSubTeamJsx)}
                {wholeTeamsArr.map(getTeamJsx)}
            </section>
        </article>
    )
}

export default TeamFeed;