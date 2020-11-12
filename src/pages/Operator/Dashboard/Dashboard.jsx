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
                <p>{user.isOnShift ? "You are currently On Shift" : "You have not yet started your shift"}</p>
            </section>

            <section className={styles.vehicleSection}>
                <header>
                <h3>Vehicle</h3>
                </header>
                <p>Your currently assigned Vehicle is:</p>
                <p>{vehicle ? `${vehicle.vehicleID}-${vehicle.vehicleType}` : "You currently have no assigned Vehicle"}</p>
                <p>Status: </p>
                <p>{vehicle ? vehicle.goStatus : "n/a"}</p>
            </section>

            <section className={styles.teamSection}>
                <header>
                    <h3>Team</h3>
                </header>
                <p>Your team:</p>
                <p>{`${user.currentTeam} - ${user.currentSubTeamName} shift`}</p>
            </section>
            
            <section className={styles.supervisorSection}>
                <header>
                    <h3>Supervisor</h3>
                </header>
                <p>Your supervisor is:</p>
                <p>
                </p>
                <p>{supervisor&&supervisor.userID ? supervisor.userID : "You currently have no assigned Supervisor"}</p>
            </section>
            
            
        </>
    )
}

export default Dashboard;