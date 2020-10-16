import React, { useState } from "react";
import Styles from "./MaintenanceListItem.module.scss";

const MaintenanceListItem = (props) => {

const [isFixed, setIsFixed] = useState(false);
// [variable you want to set, function that changes that variable] = set the starting value of the variable(value of the variable)

const checkBox = isFixed ? "Fixed" : "Not fixed";
    return (
        <div>
            <p>{props.problem.vehicleName}</p>
            <p>{props.problem.vehicleIssue}</p>
            <p>{props.problem.issueClass}</p>
            <input type="checkbox" onClick={() => setIsFixed(!isFixed)}/>
            <p>{checkBox}</p>
        </div>
    )
}

export default MaintenanceListItem;