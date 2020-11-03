import React from "react";
import Styles from "./MaintenanceDropdown.module.scss";

const MaintenanceDropdown = () => {
    return (
        <section className={Styles.dropdownContainer}>
            <article className={Styles.dropdownInfo}></article>
            <p>Problem: Broken tail light</p>
            <p>Hazard Class: B</p>
            <p>Time reported: 07:00, 19/10/20</p>
            <p>Fix by: 07:00, 20/10/20 </p>
            <p>Suggested fix: N/A</p>
            <p>Driver ID: 0001</p>
            <p>Supervisor ID: 000S1</p>
        </section>
        )
}

export default MaintenanceDropdown;