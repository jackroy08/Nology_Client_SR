import React from 'react';
import Styles from "./Maintenance.module.scss";
import MaintenanceList from "../../Components/MaintenanceList";
import MaintenanceAside from "../../Components/MaintenanceAside";

const Maintenance = () => {
    return (
        <>
            <MaintenanceList />
            <MaintenanceAside />
        </>
    )
}

export default Maintenance; //always exporting name of the function.