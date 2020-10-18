import React, { useState } from "react";
import MaintenanceDropdown from "../MaintenanceDropdown";
import Styles from "./MaintenanceListItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MaintenanceListItem = (props) => {

    const [isFixed, setIsFixed] = useState(false);
    const checkBox = isFixed ? "Fixed" : "Not fixed";
    // [variable you want to set, function that changes that variable] = set the starting value of the variable(value of the variable)

    // useState for dropdown menu
    const [open, setOpen] = useState(false);
    const openDropdown = open ? Styles.dropdownOpen : "";


    return (
        <div className={Styles.listItem}>
            <FontAwesomeIcon className={openDropdown} onClick={() => setOpen(!open)} icon="arrow-down"/>
            <p>{props.problem.vehicleName}</p>
            <p>{props.problem.vehicleIssue}</p>
            <p>{props.problem.issueClass}</p>
            <input type="checkbox" onClick={() => setIsFixed(!isFixed)}/>
            <p>{checkBox}</p>
            {open && <MaintenanceDropdown />}
        </div>
    )
}

export default MaintenanceListItem;