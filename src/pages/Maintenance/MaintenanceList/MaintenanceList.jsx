import React from "react";
import MaintenanceListItem from "../MaintenanceListItem";
import Styles from "./MaintenanceList.module.scss";

const MaintenanceList = () => {

    const fixList = [{
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
        <section className={Styles.maintenanceList}>
            {fixList.map((vehicleProblem) => {
                return <MaintenanceListItem key={vehicleProblem.vehicleName} problem={vehicleProblem}/>
                })}
        </section>
    )
}

export default MaintenanceList;