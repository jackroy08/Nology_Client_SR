import React from "react";
import {Link} from "@reach/router";

import MaintenanceList from "./MaintenanceList";
import Styles from "./Maintenance.module.scss";
import SideNav from "../../components/SideNav";

const Maintenance = () => {

    return (
        <div className={Styles.pageContainer}>
            <SideNav>
                <h2>Maintenance</h2>
                <Link to="../maintenance-report"><button className={Styles.btnNav}>Repair Report</button></Link>
            </SideNav>
            <main className={Styles.mainContent}>
                <MaintenanceList />
            </main>
        </div>
    )
}

export default Maintenance;