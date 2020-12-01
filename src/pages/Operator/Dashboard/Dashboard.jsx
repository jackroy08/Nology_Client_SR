import React, { useState, useContext } from "react";
import styles from "./Dashboard.module.scss";
import { UserContext } from "../../../context/userContext";
const Dashboard = () => {
    const { user, supervisor, vehicle } = useContext(UserContext);

    return (
        <>
            <section className={styles.shiftSection}>
                <header>
                    <h3>Shift</h3>
                </header>
                <p>Status:</p>
                <p>{user && user.isOnShift ? "You are currently On Shift" : "You have not yet started your shift"}</p>
            </section>

            <section className={styles.vehicleSection}>
                <header>
                <h3>Vehicle</h3>
                </header>
                <h4>Your currently assigned Vehicle is:</h4>
                <p>{vehicle && vehicle.vehicleID ? `${vehicle.vehicleID}-${vehicle.vehicleType}` : "You currently have no assigned Vehicle"}</p>
                <h4>Status: </h4>
                <p>{vehicle ? vehicle.goStatus : "n/a"}</p>
            </section>

            <section className={styles.teamSection}>
                <header>
                    <h3>Team</h3>
                </header>

                <h4>Your team:</h4>
                <p>{user ? user.currentTeam ? user.currentTeam : "You are not assigned to a team" : null}</p>
                <p>{user ? user.currentSubTeamName ? user.currentSubTeamName : "You are not assigned to a sub team" : null}</p>
            </section>
            
            <section className={styles.supervisorSection}>
                <header>
                    <h3>Supervisor</h3>
                </header>
                <h4>Your supervisor is:</h4>
                <p>{supervisor&&supervisor.userID ? supervisor.userID : "You currently have no assigned Supervisor"}</p>
            </section>
            
            
        </>
    )
}

export default Dashboard;