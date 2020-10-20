import React from "react";
import MaintenanceList from "./MaintenanceList";
import MaintenanceAside from "./MaintenanceAside";
import Styles from "./Maintenance.module.scss";

const Maintenance = () => {

    return (
        <main className={Styles.pageGrid}>
            <MaintenanceAside />   
            <MaintenanceList />
        </main>
    )
}

export default Maintenance;