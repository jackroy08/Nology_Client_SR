import React from "react";
import MaintenanceList from "./MaintenanceList";
import MaintenanceAside from "./MaintenanceAside";
import Styles from "./Maintenance.module.scss";

const Maintenance = () => {
    return (
        <div>
            <section>
                <MaintenanceList />
            </section>
            <MaintenanceAside />   
        </div>
    )
}

export default Maintenance;