import React, {useState} from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignDriver from './AssignDriver';
import Issue from "./Issue"
import { DailyReport } from './DailyReport/DailyReport';

export const Supervisor = () => {

    //get issues API i guess
    let issues = [
            {vehicle: 'digger1', issue: 'truck broke down'},
            {vehicle: 'tmm5', issue: 'broken windscreen'},
            {vehicle: 'bakkie08', issue: 'flat tyre'},
    ]

    //get vehicles and employees from SPI - dummy data here
    const vehicleArr = [];

    const employeeArr = ["Ben Tennant", "Jack Roy","Steve Shackelton","Nick Truby","Matt Church"];

    for(let i; i<20; i++){
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
            <div><button className={Styles.btn} onClick={()=>{setIsOverlayShown(true); setOverlayContent(<Load setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} />)}}>Add Load</button></div>
            <div><button className={Styles.btn}  onClick={()=>{setIsOverlayShown(true); setOverlayContent(<AssignDriver setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} employeeArr={employeeArr} vehicleArr={vehicleArr}/>)}}>Assign Drivers</button></div>
            <div><button className={Styles.btn} >Sign off Maintenance</button></div>
            <div><button className={Styles.btn} >Check Out Vehicle</button></div>
            <div><button className={Styles.btn}  onClick={()=>{setIsOverlayShown(true); setOverlayContent(<DailyReport setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent}/>)}}>Supervisor Reports</button></div>
        </section>
        <article>
            <ul>
                {/* math random probably isnt the best tool for this */}
                {Array.isArray(issues) ? issues.map(issue => <li key={Math.random()}>{<Issue issue={issue}/>}</li>) : <p>Incorrect Data Format</p>}
            </ul>
        </article>
        <div className={`${Styles.overlay} ${overlayStyle}`}>
            {overlayContent}
        </div>
    </main>
    )
}

export default Supervisor;
