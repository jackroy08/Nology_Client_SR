import React from "react";
import Styles from "./MaintenanceAside.module.scss";

const MaintenanceAside = () => {
    return (
        <form className={Styles.maintenanceAside}>
            <input placeholder="input"></input>
            <input placeholder="input"></input>
            <input placeholder="input"></input>
            <input placeholder="input"></input>
            <textarea placeholder="Textbox"></textarea>
            <button className={`${Styles.btn} ${Styles.btnPrimary}`} type="submit">Submit</button>
        </form>
    )
}

export default MaintenanceAside;