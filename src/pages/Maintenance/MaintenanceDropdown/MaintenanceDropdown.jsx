import React from "react";
import Styles from "./MaintenanceDropdown.module.scss";

const MaintenanceDropdown = () => {
    return <div className={Styles.dropdownContainer}>
        <p>Problem</p>
        <p>Hazard Class</p>
        <p>Time reported</p>
        <p>Fix by </p>
        <p>Suggested fix</p>

    </div>
}

export default MaintenanceDropdown;