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

    const getGraphData = () => {
        const teamsList = [];

        // sub team checks
        teamsArr.map((team) => {
            const subTeamUsers = [];
            usersArr.map((user) => {
                if(user.currentTeam == team.teamName && user.currentSubTeam == team.subTeamName) subTeamUsers.push(user);
            });
            subTeamData.datasets.data.push(subTeamUsers.length);
            subTeamData.labels.push(`${team.teamName} ${team.subTeamName}`);

            if(!teamsList.includes(team.teamName)) teamsList.push(team.teamName);
        });

        // overall team checks
        teamsList.map((team) => {

            // team vehicles
            const teamVehicleList = [];
            vehiclesArr.map((vehicle) => {
                if(vehicle.currentTeam == team) teamVehicleList.push(vehicle);
            })
            teamVehicles.datasets.data.push(teamVehicleList.length);
            teamVehicles.labels.push(team);

            // team loads
            const loadList = loads[0];
            const teamLoadArr = []

            if (loadList !== undefined) {
                loadList.recentLoads.map((load) => {
                    if(load.team == team) teamLoadArr.push(load);
                })
            }
            teamLoads.datasets.data.push(teamLoadArr.length);
            teamLoads.labels.push(team);
        });

        console.log(teamsArr);
        console.log(usersArr);
        console.log(loads);
        console.log(vehiclesArr);
    }

    useEffect(() => {
        getTeams().then((response) => setTeamsArr(response));
        getUsers().then((response) => setUsersArr(response));
        getVehicles().then((response) => setVehiclesArr(response));
        getLoads().then((response) => setLoads(response));

        getGraphData();
    }, []);

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for teams</h1>
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{teamsArr.length}</span> teams on this site.</h2>
            <section className={Styles.feedList}>
                <Bar
                    data={subTeamData}
                    // width={100}
                    // height={50}
                    // options={{ maintainAspectRatio: false }}
                />
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
            </section>
        </article>
    )
}

export default TeamFeed;