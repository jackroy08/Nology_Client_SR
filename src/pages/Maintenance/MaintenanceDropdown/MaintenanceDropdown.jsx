import React from "react";
import Styles from "./MaintenanceDropdown.module.scss";

const MaintenanceDropdown = () => {
    return <div className={Styles.dropdownContainer}>
        <p>Problem: Flat tire</p>
        <p>Hazard Class: A</p>
        <p>Time reported: 07:00, 19/10/20</p>
        <p>Fix by: 07:00, 20/10/20 </p>
        <p>Suggested fix: N/A</p>

    </div>
}

export default MaintenanceDropdown;