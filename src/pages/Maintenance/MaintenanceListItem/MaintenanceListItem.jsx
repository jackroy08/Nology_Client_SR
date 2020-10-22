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
    // opens dropdown 
    const openDropdown = open ? Styles.dropdownOpen : Styles.dropdownClosed;
    // changes border effect using same state
    const changeBorderEffect = open ? Styles.borderChange : "";

    // sets color for issue class 
    const issueClass = props.problem.issueClass;
    let colorClass = issueClass === 'A' ? Styles.issueAClass : issueClass === 'B' ? Styles.issueBClass : issueClass === 'C' ? Styles.issueCClass : Styles.error;

    return (
        <div className={Styles.listItem}>
            <div className={`${Styles.arrowIcon} ${changeBorderEffect}`}><FontAwesomeIcon className={openDropdown} onClick={() => setOpen(!open)} icon="arrow-down"/></div>
            <p className={`${Styles.issueClass} ${colorClass}`}>{props.problem.issueClass}</p>
            <p>{props.problem.vehicleName}</p>
            <p>{props.problem.vehicleIssue}</p>
            <input type="checkbox" onClick={() => setIsFixed(!isFixed)}/>
            <p>{checkBox}</p>
            {open && <MaintenanceDropdown />}
        </div>
    )
}

export default MaintenanceListItem;