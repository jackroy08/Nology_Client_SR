import React, { useState, useEffect } from "react";
import Styles from "./TeamFeed.module.scss";
import { getTeams } from "../../../services/TeamsService";
import { getUsers } from "../../../services/UsersService";
import { getVehicles } from "../../../services/VehiclesService";
import { getLoads } from "../../../services/LoadsService";
import { Bar } from 'react-chartjs-2';

const TeamFeed = () => {
    const [teamsArr, setTeamsArr] = useState([]);
    const parentTeams = [];

    const subTeamData = {
        datasets: [{
            data: [],
            borderWidth: 1,
            backgroundColor: "yellow"
        }],
        labels: []
    }
    const teamVehicleData = {
        datasets: [{
            data: [],
            borderWidth: 1,
            backgroundColor: "orange"
        }],
        labels: [
        ]
    }
    const teamLoadData = {
        datasets: [{
            data: [],
            borderWidth: 1,
            backgroundColor: "cyan"
        }],
        labels: [
        ]
    }

    const updateUserGraph = (teams, users) => {

        teams.forEach((team) => {
            const subTeamUsers = users.filter(u => u.currentTeam == team.teamName && u.currentSubTeam == team.subTeamName);
            subTeamData.labels.push(`${team.teamName} ${team.subTeamName}`);
            subTeamData.datasets[0].data.push(subTeamUsers.length);
            if(!parentTeams.includes(team.teamName)) parentTeams.push(team.teamName);
        });
    }

    const updateVehiclesGraph = (parentTeams, vehicles) => {

        parentTeams.forEach((team) => {
            const teamVehicles = vehicles.filter(v => v.currentTeam == team);
            teamVehicleData.labels.push(team);
            teamVehicleData.datasets[0].data.push(teamVehicles.length);
        })
    }

    const updateLoadsGraph = (parentTeams, loads) => {

        parentTeams.forEach((team) => {
            const teamLoads = [];
            for (const [key] of Object.entries(loads)) {
                if(loads[key].team == team) {
                    teamLoads.push("load");
                };
                console.log(loads);
            }
            teamLoadData.labels.push(team);
            teamLoadData.datasets[0].data.push(teamLoads.length);
        })
    }

    useEffect(() => {
        const promises = [getUsers(), getTeams(), getVehicles(), getLoads()];

        Promise.all(promises).then(response => {

            const [users, teams, vehicles, loads] = response;
            setTeamsArr(teams);

            updateUserGraph(teams, users);
            updateVehiclesGraph(parentTeams, vehicles);
            updateLoadsGraph(parentTeams, loads);
        }) 
    }, []);

    return (
        <article className={Styles.dataFeed}>
            <h1 className={Styles.feedTitle}>Live feed for teams</h1>
            <h2 className={Styles.subHeading}>There are <span className={Styles.data}>{teamsArr.length}</span> teams on this site.</h2>
            <section className={Styles.feedList}>
                <p>Graph of Sub-Team Users</p>
                <Bar
                    data={subTeamData}
                    legend={{display: false}}
                />
                <p>Graph of Team Vehicles</p>
                <Bar
                    data={teamVehicleData}
                    legend={{display: false}}
                />
                <p>Graph of Team loads</p>
                <Bar
                    data={teamLoadData}
                    legend={{display: false}}
                />
            </section>
        </article>
    )
}

export default TeamFeed;