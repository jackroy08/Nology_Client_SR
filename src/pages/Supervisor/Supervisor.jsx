import React, {useState} from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignDriver from './AssignDriver';
import NewsItem from "./NewsItem";
import { DailyReport } from './DailyReport/DailyReport';

export const Supervisor = () => {

    //get issues API i guess
    const newsItem = [{
        type: "Maintenance",
        vehicleName: "Truck 001",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        type: "Maintenance",
        vehicleName: "Truck 002",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        type: "Maintenance",
        vehicleName: "Truck 003",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        type: "Maintenance",
        vehicleName: "Truck 004",
        vehicleIssue: "Broken Light",
        issueClass:"B"
    },
    {
        type: "Maintenance",
        vehicleName: "Truck 005",
        vehicleIssue: "Broken Light",
        issueClass:"B" 
    }];

    //get vehicles and employees from SPI - dummy data here
    const vehicleArr = [];

    const employeeArr = ["Ben Tennant", "Jack Roy","Steve Shackelton","Nick Truby","Matt Church"];

    for(let i=0; i<20; i++){
        vehicleArr.push(`TMM_${i}`);
        vehicleArr.push(`Digger_${i}`);
    };
    /////// END OF DUMMY DATA

    const [isOverlayShown, setIsOverlayShown] = useState(false);

    const [overlayContent, setOverlayContent] = useState(null);

    let overlayStyle = isOverlayShown ? Styles.shown : "";

    return (
    <main className={Styles.pageGrid}>
        
        <section className={Styles.buttonGrid}>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={()=>{setIsOverlayShown(true); setOverlayContent(<Load setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} />)}}>Add Load</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={()=>{setIsOverlayShown(true); setOverlayContent(<AssignDriver setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} employeeArr={employeeArr} vehicleArr={vehicleArr}/>)}}>Assign Drivers</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Sign off Maintenance</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`}>Check Out Vehicle</button></div>
            <div><button className={`${Styles.btnPrimary} ${Styles.btn}`} onClick={()=>{setIsOverlayShown(true); setOverlayContent(<DailyReport setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent}/>)}}>Supervisor Reports</button></div>
        </section>
            <ul className={Styles.newsList}>
                {/* math random probably isnt the best tool for this */}
                {Array.isArray(newsItem) ? newsItem.map(item => <NewsItem item={item}/>) : <p>Incorrect Data Format</p>}
            </ul>
        <div className={`${Styles.overlay} ${overlayStyle}`}>
            {overlayContent}
        </div>
    </main>
    )
}

export default Supervisor;
