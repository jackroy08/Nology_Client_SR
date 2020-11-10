import React from "react";
import MaintenanceList from "./MaintenanceList";
import Styles from "./Maintenance.module.scss";

const Maintenance = () => {

    return (
        <main className={Styles.main}>
            <h1 className={Styles.title}>Maintenance</h1>
                <MaintenanceList />
        </main>
    )
}

export default Maintenance;