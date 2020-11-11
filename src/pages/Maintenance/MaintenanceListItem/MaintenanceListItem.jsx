import React, { useState, useContext } from "react";
import {Link} from "@reach/router";
import MaintenanceDropdown from "../MaintenanceDropdown";
import Styles from "./MaintenanceListItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getVehicleByID, updateVehicle } from "../../../services/VehiclesService";
import { UserContext } from "../../../context/userContext";

const MaintenanceListItem = (props) => {
    const { user } = useContext(UserContext);
    const {
        classType,
        issue,
        operator,
        supervisor,
        vehicleID } = props.job

        const [isOpen, setIsOpen] = useState(false);
        const toggleStyles = isOpen ? Styles.confirmOpen : "";
    // const [isFixed, setIsFixed] = useState(false);
    // const checkBox = isFixed ? "Fixed" : "Not fixed";
    let colorClass = classType === 'classA' ? Styles.classA 
                    : classType === 'classB' ? Styles.classB
                    : classType === 'classC' ? Styles.classC
                    : Styles.classError;

    const handleClaimJob = () => {
        getVehicleByID(vehicleID)
            .then(res => {
                props.job.assignedMaintenance = user.userID;
                res.checkItems.map(item => {
                    if (item.issueID === props.job.issueID) {
                        item.assignedMaintenance = user.userID
                    }
                });
                updateVehicle(res);
            })
    }

    const handleCompleteJob = () => {
        getVehicleByID(vehicleID)
            .then(res => {
                props.job.maintenanceSignoff = true;
                res.checkItems.map(item => {
                    if (item.issueID === props.job.issueID) {
                        item.maintenanceSignoff = true;
                    }
                })
                updateVehicle(res);
            })
    }

    return (
        <li key={vehicleID} className={Styles.jobItem}>
            <p>{vehicleID}</p>
            <p className={colorClass}><FontAwesomeIcon  icon="exclamation-triangle"/></p>
            <p>{issue}</p>
            <p>{operator}</p>
            <p>{supervisor}</p>
            <p>{props.job.assignedMaintenance ? props.job.assignedMaintenance : <button className={Styles.btnJobClaim} onClick={() => handleClaimJob(vehicleID)}>Claim Job</button>}</p>
            {/* <p>{additionalDetails}</p> */}
             {/* <p>{dateCreated}</p> */}
            <span className={Styles.faIcon} onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon  icon="check-circle"/></span>
            <div className={`${Styles.confirmDelete} ${toggleStyles}`}>
                        <button
                            className={Styles.btnPrimary}
                            onClick={() => setIsOpen(!isOpen)}
                            >Cancel
                        </button>
                        <button
                            className={Styles.btnDanger}
                            onClick={() => {
                                handleCompleteJob()
                                setIsOpen(!isOpen);
                            }}
                        >Confirm
                        </button>
            </div>
            {/* The Model below can be the Maintenance Complete job form. */}
            {/* <Modal innerComponent={<^^ComponantName^^ job={props.job} hide={toggle}/>} isShowing={isShowing} hide={toggle} /> */}
        </li>
    )
}
export default MaintenanceListItem;