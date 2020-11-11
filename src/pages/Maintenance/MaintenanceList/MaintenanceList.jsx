import React, { useState, useEffect } from "react";
import MaintenanceListItem from "../MaintenanceListItem";
import Styles from "./MaintenanceList.module.scss";
import { getVehicles } from '../../../services/VehiclesService'

const MaintenanceList = () => {

    const [outstandingJobs, setOutstandingJobs] = useState([]);
    const [filteredJobsArr, setFilteredJobsArr] = useState([]);
    const [vehicleIDArr, setVehicleIDArr] = useState([null]);

    const filterJobs = (vehicleID) => {
        if (vehicleID) {
        setFilteredJobsArr(outstandingJobs.filter((job) => job.vehicleID === vehicleID))
        } else {
        setFilteredJobsArr(outstandingJobs)
        }
    };

    useEffect(() => {
        getVehicles().then(vehicles => {
            let vehicleList = vehicles
            let jobsArr = []
            vehicleList.map(vehicle => {
                if (vehicle.checkItems) {
                    vehicle.checkItems.map(checkItem => jobsArr.push(checkItem))
                }
            })
            setOutstandingJobs(jobsArr)
            setFilteredJobsArr(jobsArr);
        });
    }, [])

    useEffect(() => {
        if (outstandingJobs) {
            setVehicleIDArr([...new Set(outstandingJobs.map(job => job.vehicleID))])
        }
    }, [outstandingJobs])

    return (
        <section className={Styles.jobsListSection}>
            <header>
                <h3>Outstanding Jobs</h3>
                <select className={Styles.selectPrimary} onChange={(event) => filterJobs(event.target.value)}>
                        <option value="">All Vehicles</option>
                        {vehicleIDArr ? vehicleIDArr.map((vehicleID) => <option key={vehicleID} value={vehicleID}>{vehicleID}</option>) : null}

                </select>
            </header>                    
            <ul className={Styles.jobsList}>
                <li className={Styles.columnTitles}>
                    <h4>Vehicle ID</h4>
                    <h4>Class</h4>
                    <h4>Issue</h4>
                    <h4>Operator</h4>
                    <h4>Supervisor</h4>
                    <h4>Assigned to</h4>
                    <h4>✔</h4>
                </li>
                {filteredJobsArr.map((job) => <MaintenanceListItem key={job.vehicleID} job={job}/>)} 
            </ul>
        </section>
    )
}

export default MaintenanceList;