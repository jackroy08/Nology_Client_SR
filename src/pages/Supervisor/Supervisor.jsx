import React, {useState} from 'react';
import Styles from './Supervisor.module.scss'
import Load from './Load';
import AssignDriver from './AssignDriver';
import Issue from "./Issue"
import { DailyReport } from './DailyReport/DailyReport';

export const Supervisor = (props) => {

    //get issues API i guess
    let issues = [
            {vehicle: 'digger1', issue: 'truck broke down'},
            {vehicle: 'tmm5', issue: 'broken windscreen'},
            {vehicle: 'bakkie08', issue: 'flat tyre'},
    ]

    const {vehicleArr,employeeArr}=props

    const [isOverlayShown, setIsOverlayShown] = useState(false);

    const [overlayContent, setOverlayContent] = useState(null);

    let overlayStyle = isOverlayShown ? Styles.shown : "";

    return (
    <>
        <article>
            <ul>
                {/* math random probably isnt the best tool for this */}
                {Array.isArray(issues) ? issues.map(issue => <li key={Math.random()}>{<Issue issue={issue}/>}</li>) : <p>Incorrect Data Format</p>}
            </ul>
        </article>
        <section>
            <div><button onClick={()=>{setIsOverlayShown(true); setOverlayContent(<Load setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} />)}}>Add Load</button></div>
            <div><button onClick={()=>{setIsOverlayShown(true); setOverlayContent(<AssignDriver setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent} employeeArr={employeeArr} vehicleArr={vehicleArr}/>)}}>Assign Drivers</button></div>
            <div><button>Sign off Maintenance</button></div>
            <div><button>Check Out Vehicle</button></div>
            <div><button onClick={()=>{setIsOverlayShown(true); setOverlayContent(<DailyReport setIsOverlayShown={setIsOverlayShown} setOverlayContent={setOverlayContent}/>)}}>Supervisor Reports</button></div>
        </section>
        <div className={`${Styles.overlay} ${overlayStyle}`}>
            {overlayContent}
        </div>
    </>
    )
}
