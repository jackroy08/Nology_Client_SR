import React, { useState } from "react";
import {Link} from "@reach/router";
import MaintenanceDropdown from "../MaintenanceDropdown";
import Styles from "./MaintenanceListItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateVehicle } from "../../../services/VehiclesService";

const MaintenanceListItem = (props) => {
    const {
        additionalDetails,
        classType,
        dateCreated,
        issue,
        operator,
        supervisor,
        maintenance,
        vehicleID } = props.job

        const [isOpen, setIsOpen] = useState(false);
        const toggleStyles = isOpen ? Styles.confirmOpen : "";
    
    // const [isFixed, setIsFixed] = useState(false);
    // const checkBox = isFixed ? "Fixed" : "Not fixed";

    let colorClass = classType === 'classA' ? Styles.classA 
                    : classType === 'classB' ? Styles.classB
                    : classType === 'classC' ? Styles.classC
                    : Styles.classError;

    const claimJob = () => updateVehicle();

    return (
        <li key={vehicleID} className={Styles.jobItem}>
            <p>{vehicleID}</p>
            <p className={colorClass}><FontAwesomeIcon  icon="exclamation-triangle"/></p>
            <p>{issue}</p>
            <p>{operator}</p>
            <p>{supervisor}</p>
            <p>{maintenance ? maintenance : <button className={Styles.btnJobClaim} onClick={() => claimJob(vehicleID)}>Claim Job</button>}</p>
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
                                // Insert here a function to mark the job as complete
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