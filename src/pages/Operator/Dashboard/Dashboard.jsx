import React, { useState, useContext } from "react";
import styles from "./Dashboard.module.scss";
import { UserContext } from "../../../context/userContext";
const Dashboard = (props) => {
    const { user} = useContext(UserContext);
    const isOnShift = () => {
         const result = user.isOnshift ? <p>"You are currently On Shift"</p> : <p>"You have not yet started your shift"</p>;
         return (result);
         console.log(result);
    }

    
    return (
        <>
            <section className={styles.shiftSection}>
                <header>
                    <h3>Shift</h3>
                </header>
                <p>Status:</p>
                {/* <p>{result}</p> */}
                <p>You are currently On Shift / You have not yet started your shift</p>
            </section>

            <section className={styles.vehicleSection}>
                <header>
                    <h3>Vehicle</h3>
                </header>
                <p>Your currently assigned Vehicle is</p>
                <p>"Vehicle Name"</p>
                <p>Status: </p><p>Awaiting Pre-start Checklist / Checklist Compelted Awaiting Supervisor</p>
            </section>

            <section className={styles.teamSection}>
                <header>
                    <h3>Team</h3>
                </header>
                <p>Your team:</p>
                <p> "teamName", "SubteamName</p>
            </section>
            
            <section className={styles.supervisorSection}>
                <header>
                    <h3>Supervisor</h3>
                </header>
                <p>Your supervisor is</p>
                <p>"Supervisor Name</p>
            </section>
            
            
        </>
    )
}

export default Dashboard;