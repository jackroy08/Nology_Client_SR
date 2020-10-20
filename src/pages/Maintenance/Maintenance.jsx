import React from "react";
import MaintenanceList from "./MaintenanceList";
import MaintenanceAside from "./MaintenanceAside";
import Styles from "./Maintenance.module.scss";
import vehicleData from "../../data/plantequipment";


const Maintenance = () => {

    console.log(vehicleData);

    return (
        <main className={Styles.pageGrid}>
            <MaintenanceAside />   
            <MaintenanceList />
        </main>
    )
}

export default Maintenance;