import React from "react";
import Styles from "./MaintenanceAside.module.scss";

const MaintenanceAside = () => {
    return (
        <div className={Styles.asideDiv}>
            <input placeholder="input"></input>
            <input placeholder="input"></input>
            <input placeholder="input"></input>
            <input placeholder="input"></input>
            <textarea placeholder="Textbox"></textarea>
            <button>Submit</button>
        </div>
    )
}

export default MaintenanceAside;