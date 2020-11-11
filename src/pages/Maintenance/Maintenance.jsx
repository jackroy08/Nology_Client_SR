import React from "react";
import MaintenanceList from "./MaintenanceList";
import Styles from "./Maintenance.module.scss";
import SideNav from "../../components/SideNav";

const Maintenance = () => {

    return (
        <div className={Styles.pageContainer}>
            <SideNav>
                <h2>Maintenance</h2>
            </SideNav>
            <main className={Styles.mainContent}>
                <MaintenanceList />
            </main>
        </div>
    )
}

export default Maintenance;