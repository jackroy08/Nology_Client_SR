import { Link } from "@reach/router";
import React from "react";
import Styles from "./Confirmation.module.scss";
import { setVehicleIssues } from "../../../services/VehiclesService";

const Confirmation = (props) => {
    const {backHandler, failedElements} = props;
    const getFailedElementJsx = (classType) => {
        return Object.keys(failedElements[classType]).map(elem => {
            if (failedElements[classType][elem]["Issue"]) {

                return (
                    <li key={failedElements[classType][elem]["Issue"]} className= {Styles.userItem}>
                        <p>{failedElements[classType][elem]["Class type"]}</p>
                        <p>{failedElements[classType][elem]["Issue"]}</p>
                        <p>{failedElements[classType][elem]["Vehicle ID"]}</p>
                        <p>{failedElements[classType][elem]["Supervisor"]}</p>
                        <p>{failedElements[classType][elem]["Operator"]}</p>
                    </li>
                )
            }
        });
    }

    const submitHandler = () => {
        const issuesArr = [];
        Object.keys(failedElements).forEach(classType => {
            Object.keys(failedElements[classType]).forEach(elem => {
                if (failedElements[classType][elem]["Issue"]) {
                    issuesArr.push(failedElements[classType][elem])
                }
            });
        });
        setVehicleIssues("001", issuesArr);
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