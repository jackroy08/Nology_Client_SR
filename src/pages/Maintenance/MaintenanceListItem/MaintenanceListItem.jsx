import React, { useState } from "react";
import {Link} from "@reach/router";
import MaintenanceDropdown from "../MaintenanceDropdown";
import Styles from "./MaintenanceListItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MaintenanceListItem = (props) => {

    const [isFixed, setIsFixed] = useState(false);
    const checkBox = isFixed ? "Fixed" : "Not fixed";
    const [open, setOpen] = useState(false);
    const openDropdown = open ? Styles.dropdownOpen : Styles.dropdownClosed;
    const changeBorderEffect = open ? Styles.borderChange : "";

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
            <Link to="../MaintenanceAside"><button>Send Report</button></Link>
            {open && <MaintenanceDropdown />}
        </div>
    )
}

export default MaintenanceListItem;