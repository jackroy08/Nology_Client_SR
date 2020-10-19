import React from "react";
import Styles from "./MaintenanceAside.module.scss";

const MaintenanceAside = () => {
    return (
        <form className={Styles.maintenanceAside}>
            <input placeholder="Vehicle Issue"></input>
            <input placeholder="Parts used"></input>
            <input placeholder="Root cause"></input>
            <input placeholder="Time taken to fix"></input>
            <textarea placeholder="Vehicle Fix and other information"></textarea>
            <button className={`${Styles.btn} ${Styles.btnPrimary}`} type="submit">Submit</button>
        </form>
    )
}

export default MaintenanceAside;