import React from "react";
import MaintenanceListItem from "../MaintenanceListItem";
import Styles from "./MaintenanceList.module.scss";

const MaintenanceList = () => {

    // Fix list: array of unnamed objects to use in MaintenanceListItem.
    const fixList = [{
        // Each object has a property 'vehicleName'
        vehicleName: "Truck 001",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        vehicleName: "Truck 002",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        vehicleName: "Truck 003",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        vehicleName: "Truck 004",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        vehicleName: "Truck 005",
        vehicleIssue: "Broken Light",
        issueClass:"B" 
    }];

    return (
        // Each Object is called whatever was put in the brackets (in this case, vechicleProblem) for the time it is being used
        <section className={Styles.maintenanceList}>
            {fixList.map((vehicleProblem) => {
                return <MaintenanceListItem key={vehicleProblem.vehicleName} problem={vehicleProblem}/>
                })}
        </section>
    )
}

export default MaintenanceList;