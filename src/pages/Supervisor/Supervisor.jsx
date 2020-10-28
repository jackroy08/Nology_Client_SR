import React, { useState, useEffect } from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignVehicles from './AssignVehicles';
import { DailyReport } from './DailyReport/DailyReport';
import vehiclesArr from "../../data/vehicles";
import usersArr from "../../data/users";
import VehicleTable from "./VehicleTable";
import UserTable from "./UserTable";
import NewsTicker from "./NewsTicker";

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

    const maintenanceIssues = [{status: true},{status: true},{status: false},{status: true},{status: true},{status: false},{status: false},{status: false}]

    const [isOverlayShown, setIsOverlayShown] = useState(false);

    const [overlayContent, setOverlayContent] = useState(null);

    let overlayStyle = isOverlayShown ? Styles.shown : "";

    return (
        <>
            <main className={Styles.pageGrid}>

                <section className={Styles.buttonGrid}>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { setIsOverlayShown(true); setOverlayContent(<Load setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} />) }}>Add Load</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { setIsOverlayShown(true); setOverlayContent(<AssignVehicles setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} usersArr={usersArr} vehicleData={vehicleData} />) }}>Reassign Vehicles</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Sign off Maintenance
                    <div className={Styles.notification}>
                        <p>{maintenanceIssues.filter(i=> i.status).length}</p>
                    </div>
                    </button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Check Out Vehicle</button></div>
                    <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={() => { setIsOverlayShown(true); setOverlayContent(<DailyReport setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} />) }}>Supervisor Reports</button></div>
                </section>
                {/* <ul className={Styles.newsList}>
                    {Array.isArray(newsItems) ? newsItem.map(item => <NewsItem key={Math.random()} item={item} />) : <p>Incorrect Data Format</p>}
                </ul>  */}
                <section className={Styles.newsTicker}>
                    {<NewsTicker newsItems={newsItems}/>}
                </section>
                <section className={Styles.vehicleTable}>
                    <VehicleTable />
                </section>
                <section className={Styles.vehicleTable}>
                    <UserTable />
                </section>

            </main>

            <div className={`${Styles.overlay} ${overlayStyle}`}>
                {overlayContent}
            </div>
        </>
        
<<<<<<< HEAD
=======
        <section className={Styles.buttonGrid}>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={()=>{setIsOverlayShown(true); setOverlayContent(<Load setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} />)}}>Add Load</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={()=>{setIsOverlayShown(true); setOverlayContent(<AssignVehicles setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} usersArr={usersArr} vehiclesArr={vehiclesArr}/>)}}>Reassign Vehicles</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Sign off Maintenance</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Check Out Vehicle</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={()=>{setIsOverlayShown(true); setOverlayContent(<DailyReport setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent}/>)}}>Supervisor Reports</button></div>
        </section>
            <ul className={Styles.newsList}>
                {/* math random probably isnt the best tool for this */}
                {Array.isArray(newsItem) ? newsItem.map(item => <NewsItem key={Math.random()} item={item}/>) : <p>Incorrect Data Format</p>}
            </ul>
        <div className={`${Styles.overlay} ${overlayStyle}`}>
            {overlayContent}
        </div>
    </main>
>>>>>>> 31bba1b1cbbb4265a94f5af4fea8b80d3f4553ed
    )
}

export default Supervisor;
