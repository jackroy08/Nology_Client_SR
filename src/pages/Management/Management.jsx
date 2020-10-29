import React from 'react'
import {Router} from "@reach/router"
import Styles from './Management.module.scss';
import { Link } from "@reach/router";
import VehicleFeed from "./VehicleFeed";
import TeamFeed from "./TeamFeed";
import VehicleFeedReports from './VehicleFeed/VehicleFeedReports';

const Management = () => {

    return (
        <>
        <Router>
            <main path="./" className={Styles.managementMain}>
                <section className={Styles.headingContainer}>
                    <h1 className={Styles.managementTitle}>Management</h1>
                    <Link to="../Admin"><button className={Styles.btn}>Go to admin page</button></Link>
                </section>
                {/* Green/red circle to signify site running/any errors */}
                <div className={Styles.trafficLightSignal}></div>
                <section className={Styles.liveFeedContainer}>
                    <VehicleFeed />
                    <TeamFeed />
                </section>
            </main>
            
                <VehicleFeedReports path="VehicleFeedReports" />
            </Router>
        </>
    )
}

export default Management;