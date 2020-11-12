import React, { useState, useEffect } from "react";
import Styles from "./MaintenanceReport.module.scss";
import { getVehicles, updateVehicleIssue } from "../../../services/VehiclesService";

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
        const reportProblem = reportVehicle[0].checkItems.filter((report) => report.issue == vehicleIssue && report.maintenanceSignoff == false);
        reportProblem[0].maintenanceSignoff = reportObj;
        console.log(reportProblem[0]);
        updateVehicleIssue(reportProblem[0]);
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