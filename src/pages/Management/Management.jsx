import React from 'react'
import Styles from './Management.module.scss';
import { Link } from "@reach/router";
import LiveFeed from "./LiveFeed";

const Management = () => {
    
    //////////////////////////////////////////////////////////////////////
    // REMINDER: MOVE WHAT IS IN THE FEED INTO MODAL ONCE ITS ON MASTER //
    //////////////////////////////////////////////////////////////////////

    const vehicleFeed = {
        feedType: "Vehicles",
        feedArr : [
            ["Vehicle number", "Time reported", "Urgency level", "Problem"],
            ["Vehicle number", "Time fixed", "Urgency level", "Problem"],
            ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
            ["Vehicle number", "Time reported", "Urgency level", "Problem"],
            ["Vehicle number", "Time fixed", "Urgency level", "Problem"],
            ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
            ["Vehicle number", "Time reported", "Urgency level", "Problem"],
            ["Vehicle number", "Time fixed", "Urgency level", "Problem"],
            ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
            ["Vehicle number", "Time added", "Vehicle type", "Team assigned to"],
        ]
    }
    const teamFeed = {
        feedType: "Teams",
        feedArr : [
            ["Team Name","Time Reported","User ID","Shift Start/End"],
            ["Team Name","Time Reported","Load Weight","Load Type"],
            ["Team Name","Time created","# of Vehicles Assigned","# of Team Members"],
            ["Team Name","Time Reported","User ID","Shift Start/End"],
            ["Team Name","Time Reported","Load Weight","Load Type"],
            ["Team Name","Time created","# of Vehicles Assigned","# of Team Members"],
            ["Team Name","Time Reported","User ID","Shift Start/End"],
            ["Team Name","Time Reported","Load Weight","Load Type"],
            ["Team Name","Time created","# of Vehicles Assigned","# of Team Members"]
        ]
    }

    return (
        <>
            <main className={Styles.managementMain}>
                <h1 className={Styles.managementTitle}>Management</h1>
                <section className={Styles.buttonContainer}>
                    <Link to="../Admin"><button className={Styles.btn}>Go to admin page</button></Link>
                </section>
                <section className={Styles.liveFeedContainer}>
                    <LiveFeed feedType={vehicleFeed}/>
                    <LiveFeed feedType={teamFeed}/>
                </section>
            </main>
        </>
    )
}

export default Management;