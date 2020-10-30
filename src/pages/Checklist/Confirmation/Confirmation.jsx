import { Link } from "@reach/router";
import React from "react";
import Styles from "./Confirmation.module.scss";

const Confirmation = (props) => {
    const {backHandler, failedElements} = props;
    const getFailedElementJsx = (classType) => {
        return Object.keys(failedElements[classType]).map(elem => {
            if (failedElements[classType][elem].issue) {
                return (
                    <li key={failedElements[classType][elem].issue} className= {Styles.userItem}>
                        <p>{failedElements[classType][elem].classType}</p>
                        <p>{failedElements[classType][elem].issue}</p>
                        <p>{failedElements[classType][elem].vehicleID}</p>
                        <p>{failedElements[classType][elem].supervisor}</p>
                        <p>Operator name</p>
                    </li>
                )
            }
        });
    }

        const submitHandler = () => {
            console.log(failedElements);
        }

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
                {Object.keys(failedElements).map(getFailedElementJsx)}
            </ul>
            <section className={Styles.navigation}>
                <button onClick={backHandler} className={Styles.btn}>Back</button>
                <Link to="/Operator">
                    <button onClick={submitHandler} className={Styles.btn}>Confirm checklist</button>
                </Link>
            </section>
        </section>
    )
}

export default Confirmation;