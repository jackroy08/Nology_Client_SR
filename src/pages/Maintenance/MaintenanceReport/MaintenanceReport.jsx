import React, { useState, useEffect } from "react";
import Styles from "./MaintenanceReport.module.scss";
import { getVehicles, updateVehicleIssue } from "../../../services/VehiclesService";
import { createNewsItem } from "../../../services/newsItemsService";

const MaintenanceReport = () => {

    const [vehicleList, setVehicleList] = useState([]);
    const [vehicleID, setVehicleID] = useState("");
    const [vehicleIssue, setVehicleIssue] = useState("");
    const [fixTime, setFixTime] = useState("");
    const [partsUsed, setPartsUsed] = useState("");
    const [rootCause, setRootCause] = useState("");
    const [otherInfo, setOtherInfo] = useState("");

    useEffect(() => {
        getVehicles()
            .then(res => setVehicleList(res))
    }, []);

    const handleSubmit = () => {
        const reportObj = {
            "vehicleID": vehicleID,
            "vehicleIssue": vehicleIssue,
            "fixTime": fixTime,
            "partsUse": partsUsed,
            "rootCause": rootCause,
            "otherInfo": otherInfo
        }
        const reportVehicle = vehicleList.filter((vehicle) => vehicle.vehicleID == vehicleID);
        if(reportVehicle.length !== 0) {
            const reportProblem = reportVehicle[0].checkItems.filter((report) => report.issue == vehicleIssue && report.maintenanceSignoff == false);
            if(reportProblem.length !== 0) {
                createNewsItem({                
                    title: "Maintenance Completed",
                    message: `${vehicleIssue} on ${reportVehicle[0].vehicleID} by ${reportProblem[0].assignedMaintenance}`,
                    team: reportVehicle[0].currentTeam,
                    type: "maintenanceComplete",
                    isImportant: false,
                    seenBy: [],
                    info: {
                        vehicle: reportVehicle[0].vehicleID,
                        faultClass: reportProblem[0].classType,
                        faultName: reportProblem[0].issue,
                        completedBy: reportProblem[0].assignedMaintenance
                    },
                    dateCreated: new Date()
                })
                reportProblem[0].maintenanceSignoff = reportObj;
                console.log(reportProblem[0]);
                updateVehicleIssue(reportProblem[0]);
            } else alert("Please enter a valid, active issue for the vehicle you have chosen.");
        } else alert("Please enter in a vehicle ID of a valid vehicle.");
    }

    return (
        <>
        <h1 className={Styles.asideHeader}>Maintenance Solution Audit</h1>
        <form className={Styles.maintenancReport} onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                }}>
            <input placeholder="Vehicle ID"  onChange={(e) => setVehicleID(e.target.value)} />
            <input placeholder="Vehicle Issue" onChange={(e) => setVehicleIssue(e.target.value)} />
            <input placeholder="Time taken to fix" onChange={(e) => setFixTime(e.target.value)} />
            <input placeholder="Parts used" onChange={(e) => setPartsUsed(e.target.value)} />
            <input placeholder="Root cause" onChange={(e) => setRootCause(e.target.value)} />
            <textarea cols="30" rows="15" placeholder="Vehicle Fix and other information"  onChange={(e) => setOtherInfo(e.target.value)}/>
            <button className={`${Styles.btn} ${Styles.btnPrimary}`} type="submit">Submit</button>
        </form>
        </>
    )
}

export default MaintenanceReport;