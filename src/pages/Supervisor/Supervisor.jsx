import React, { useState, useEffect } from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignVehicles from './AssignVehicles';
import { DailyReport } from './DailyReport/DailyReport';
import { getVehicles, createVehicle, subscribeToVehicles } from './../../services/VehiclesService';

import usersArr from "../../data/users";

import VehicleTable from "./VehicleTable";
import UserTable from "./UserTable";
import NewsTicker from "./NewsTicker";
import Modal from "./../../components/Modal";
import useModal from "./../../components/Modal/useModal";
import {firestore} from "../../firebase"

export const Supervisor = () => {

    //get issues API i guess
    const newsItems = [{
        time: "18:34",
        title: "Maintenance",
        message: "Truck 005 Broken Light reported",
        important: false
    },
    {
        time: "18:37",
        title: "Load",
        message: "Truck 041 Loaded",
        important: false
    },
    {
        time: "18:39",
        title: "Load",
        message: "Truck 068 Loaded",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 056 Flat Tyre reported",
        important: true
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired",
        important: false
    }];

    const maintenanceIssues = [{status: false},{status: true},{status: false},{status: false},{status: false},{status: false},{status: false},{status: false}]

    // end of dummy data


    //get vehicle data
    const [vehiclesArr, setVehiclesArr] = useState();


    //grab data on page load
    useEffect(() => {
        getVehicles().then(dataArr => setVehiclesArr(dataArr))
        subscribeToVehicles(setVehiclesArr)
    }, [])

    //grab data each time 
    


    // overlay
    const [isOverlayShown, setIsOverlayShown] = useState(false);

    const [overlayContent, setOverlayContent] = useState(null);

    let overlayStyle = isOverlayShown ? Styles.shown : "";

    // modal
    const { isShowing, toggle } = useModal();

    // show notification ternary statement
    const showNotification = maintenanceIssues.filter(i=> i.status).length ? Styles.showNotification : "";

    return (
        <>
            <main className={Styles.pageGrid}>

                <section className={Styles.buttonGrid}>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setOverlayContent(<Load />) }}>Add Load</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setOverlayContent(<AssignVehicles usersArr={usersArr} vehiclesArr={vehiclesArr} />) }}>Reassign Vehicles</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Sign off Maintenance
                    <div className={`${Styles.notification} ${showNotification}`}>
                        <p>{maintenanceIssues.filter(issue => issue.status).length}</p>
                    </div>
                    </button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Check Out Vehicle</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { toggle(); setOverlayContent(<DailyReport />) }}>Supervisor Reports</button></div>
                </section>
                <section className={Styles.newsTicker}>
                    {<NewsTicker newsItems={newsItems}/>}
                </section>
                <section className={Styles.vehicleTable}>
                    <VehicleTable />
                </section>
                <section className={Styles.vehicleTable}>
                    <UserTable />
                </section>

                <Modal innerComponent={overlayContent} isShowing={isShowing} hide={toggle}/>
            </main>
        </>
    )
}

export default Supervisor;