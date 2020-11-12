import { Link } from '@reach/router';
import React, { useState, useContext } from 'react'
import ClassAChecks from '../ClassAChecks';
import ClassBChecks from '../ClassBChecks';
import ClassCChecks from '../ClassCChecks';
import Confirmation from '../Confirmation';
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../../context/userContext";

const ChecklistContainer = (props) => {
    const { user, vehicle, supervisor, checklistData } = useContext(UserContext);
    const [step, setStep] = useState(1);
    const [failedElements, setFailedElements] = useState({classA: {}, classB: {}, classC: {}});
    const supervisorProperty = supervisor ? supervisor.userID ? supervisor.userID : null : null;

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
                    assignedMaintenance: "",
                    maintenanceSignoff: false,
                    supervisorSignoff: false,
                    issueID: uuidv4()
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
                    <section>
                        <p>
                            Vehicle type: {vehicle.vehicleType}
                        </p> 
                        <button onClick={nextHandler}>Next</button>
                        <Link to={`/${user.userType}`}>
                            <button>Back</button>
                        </Link>
                    </section>
                    )
                case 2: return <ClassAChecks propsMethods={propsMethods} />
                case 3: return <ClassBChecks propsMethods={propsMethods} />
                case 4: return <ClassCChecks propsMethods={propsMethods} />
                case 5: return <Confirmation vehicle={vehicle} backHandler={backHandler} failedElements={failedElements} />
                default: return "error page"
            }
        }

    return (
        <div>
            {navigation()}
        </div>
    )
}

export default ChecklistContainer;
