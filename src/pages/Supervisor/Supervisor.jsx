import React, {useState} from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignVehicles from './AssignVehicles';
import NewsItem from "./NewsItem";
import { DailyReport } from './DailyReport/DailyReport';
import vehiclesArr from "../../data/vehicles";
import usersArr from "../../data/users";

export const Supervisor = () => {

    //get issues API i guess
    const newsItem = [{
        time: "18:34",
        title: "Maintenance",
        message: "Truck 005 Broken Light reported"
    },
    {
        time: "18:37",
        title: "Load",
        message: "Truck 041 Loaded"
    },
    {
        time: "18:39",
        title: "Load",
        message: "Truck 068 Loaded"
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 056 Flat Tyre reported"
    },
    {
        time: "18:42",
        title: "Maintenance",
        message: "Truck 005 Broken Light marked repaired"
    }];

    const [isOverlayShown, setIsOverlayShown] = useState(false);

    const [overlayContent, setOverlayContent] = useState(null);

    let overlayStyle = isOverlayShown ? Styles.shown : "";

    return (
    <main className={Styles.pageGrid}>
        
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
    )
}

export default Supervisor;
