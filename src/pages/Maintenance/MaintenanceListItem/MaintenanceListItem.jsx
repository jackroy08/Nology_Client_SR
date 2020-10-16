import React from "react";
import Styles from "./MaintenanceListItem.module.scss";

const MaintenanceListItem = () => {
    return (
        <div>
            <p>Vehicle ID</p>
            <p>Problem</p>
            <p>Hazard Class</p>
            <input type="checkbox"/>
            <p> Problem Status</p>
        </div>
    )
}

export default MaintenanceListItem;