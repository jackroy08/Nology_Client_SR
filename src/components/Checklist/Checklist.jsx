import { Link } from '@reach/router';
import styles from './Checklist.module.scss';
import React, { useState, useContext } from 'react'
import ClassAChecks from './ClassAChecks';
import ClassBChecks from './ClassBChecks';
import ClassCChecks from './ClassCChecks';
import Confirmation from './Confirmation';
import { UserContext } from "../../context/userContext";

const Checklist = (props) => {
    const { user, vehicle, supervisor, checklistData } = useContext(UserContext);
    const [step, setStep] = useState(1);
    const [failedElements, setFailedElements] = useState({classA: {}, classB: {}, classC: {}});
    const supervisorProperty = supervisor ? supervisor.userID : null;

    const failObject = (vehicleType, classType) => {
        return Object.keys(checklistData[classType]).reduce((acc, val) => {
            if (!document.getElementById(val).checked) {
                acc[classType][val] = {
                    classType: classType, 
                    issue: val,
                    vehicleID: vehicle.vehicleID,
                    operator: user.userID,
                    supervisor: supervisorProperty,
                    additionalDetails: document.getElementById("additional-details").value,
                    dateCreated: new Date().toUTCString(),
                    maintenanceSignoff: false,
                    supervisorSignoff: false
                };
                } else acc[classType][val] = {};
            return acc;
        }, failedElements);
    }

    const nextHandler = ()  => {
        setStep(step + 1);
    }

    const backHandler = ()  => {
        setStep(step - 1);
    }

    const propsMethods = {
        setFailedElements: setFailedElements,
        failedElements: failedElements,
        failObject: failObject, 
        checklistData: checklistData, 
        vehicleType: vehicle.vehicleType,
        nextHandler: nextHandler, 
        backHandler: backHandler
    }

    let navigation = () => {
        switch (step) {
                case 1: return (
                    <>
                        <div className={styles.vehicleDisplay}>
                            <p>Vehicle type:</p>
                            <p>{vehicle.vehicleType}</p>
                        </div>
                        <div className={styles.navigation}>
                            <button className={styles.btnSecondary} onClick={ () => window.history.back()}>Back</button>
                            <button className={styles.btnPrimary} onClick={nextHandler}>Next</button>
                        </div>
                    </>
                    )
                case 2: return <ClassAChecks propsMethods={propsMethods} />
                case 3: return <ClassBChecks propsMethods={propsMethods} />
                case 4: return <ClassCChecks propsMethods={propsMethods} />
                case 5: return <Confirmation vehicle={vehicle} backHandler={backHandler} failedElements={failedElements} />
                default: return "error page"
            }
        }

    return (
        <section className={styles.confirmVehicleSection}>
            <header>
                <h3>Prestart Checklist</h3>
            </header>      
            {navigation()}
        </section>
    )
}

export default Checklist;