import React from "react";
import Styles from "./Confirmation.module.scss";

const Confirmation = (props) => {
    const {backHandler, failedElements} = props;
    const getFailedElementJsx = (element) => {
        return (
            <li key={element.issue} className= {Styles.userItem}>
                <p>{element.classType}</p>
                <p>{element.issue}</p>
                <p>{element.vehicleID}</p>
                <p>{element.supervisor}</p>
                <p>Operator name</p>
            </li>
        )
    };
    return (
        <section className={Styles.userListSection}>
            <ul className= {Styles.userList}>
                <li className= {Styles.columnTitles}>
                    <h4>Class of issue</h4>
                    <h4>Issue</h4>
                    <h4>Vehicle id</h4>
                    <h4>Supervisor</h4>
                    <h4>Operator</h4>
                </li>
                {failedElements.map(getFailedElementJsx)}
            </ul>
            <section className={Styles.navigation}>
                <button onClick={backHandler} className={Styles.btn}>Back</button>
                <button className={Styles.btn}>Confirm checklist</button>
            </section>
        </section>
    )
}

export default Confirmation;