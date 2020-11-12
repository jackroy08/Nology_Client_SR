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

    useEffect(() => {
        const promises = [getUsers(), getTeams(), getVehicles(), getLoads()];

        Promise.all(promises).then(response => {

            const [users, teams, vehicles, loads] = response;
            setTeamsArr(teams);

            teams.forEach((team) => {
                const subTeamUsers = users.filter(u => u.currentTeam == team.teamName && u.currentSubTeam == team.subTeamName);
                if (!parentTeams.includes(team.teamName)) parentTeams.push(team.teamName);

                setSubTeamData(prevData => {
                    return {
                        datasets: [{
                            data: prevData.datasets[0].data.concat([subTeamUsers.length]),
                            borderWidth: 1,
                            backgroundColor: "#2DA488"
                        }],
                        labels: prevData.labels.concat([`${team.teamName} ${team.subTeamName}`])
                    }
                });
            });
            parentTeams.forEach((team) => {
                const teamVehicles = vehicles.filter(v => v.currentTeam == team);

                setVehicleTeamData(prevData => {
                    return {
                        datasets: [{
                            data: prevData.datasets[0].data.concat([teamVehicles.length]),
                            borderWidth: 1,
                            backgroundColor: "#FFA500"
                        }],
                        labels: prevData.labels.concat([team])
                    }
                });
            });
            parentTeams.forEach((team) => {
                const teamLoads = [];
                for (const [key] of Object.entries(loads)) {
                    if (loads[key].team == team) {
                        teamLoads.push("load");
                    };
                    console.log(loads);
                }

                setTeamLoadData(prevData => {
                    return {
                        datasets: [{
                            data: prevData.datasets[0].data.concat([teamLoads.length]),
                            borderWidth: 1,
                            backgroundColor: "#396AFF"
                        }],
                        labels: prevData.labels.concat([team])
                    }
                });
            });
        });
    }, []);

    const [subTeamData, setSubTeamData] = useState({
        datasets: [{ data: [], }],
    });
    const [teamVehicleData, setVehicleTeamData] = useState({
        datasets: [{ data: [], }],
    });
    const [teamLoadData, setTeamLoadData] = useState({
        datasets: [{ data: [], }],
    });

    return (
        
        <article className={Styles.dataFeed}>
            <section className={Styles.feedList}>
                <div className={Styles.chartContainer}>
                    <p className={Styles.chartContainerTitle}>Amount of users per sub-team</p>
                    <Bar
                        data={subTeamData}
                        legend={{display: false}}
                        options={{maintainAspectRatio: true, responsive: true}}
                    />
                </div>
                <div className={Styles.chartContainer}>
                    <p className={Styles.chartContainerTitle}>Amount of team vehicles</p>
                    <Bar
                        data={teamVehicleData}
                        legend={{ display: false }}
                        options={{ maintainAspectRatio: true, responsive: true }}
                    />
                </div>
                <div className={Styles.chartContainer}>
                    <p className={Styles.chartContainerTitle}>Amount of loads per team</p>
                    <Bar
                        data={teamLoadData}
                        legend={{ display: false }}
                        options={{ maintainAspectRatio: true, responsive: true }}
                    />
                </div>
            </section>
        </article>
    )
}

export default TeamFeed;