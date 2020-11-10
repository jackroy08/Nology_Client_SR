import { Link } from '@reach/router';
import React, { useState, useContext, useEffect } from 'react'
import { getChecklists } from "../../../services/ChecklistsService";
import ClassAChecks from '../ClassAChecks';
import ClassBChecks from '../ClassBChecks';
import ClassCChecks from '../ClassCChecks';
import Confirmation from '../Confirmation';
import { UserContext } from "../../../context/userContext";

const ChecklistContainer = (props) => {
    const { user, vehicle, supervisor } = useContext(UserContext);
    const [checklistData, setChecklistData] = useState({});
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
        console.log(failedElements);
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
                        <Link to="/Operator">
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

        useEffect(() => {
            console.log(vehicle);
            getChecklists(vehicle.vehicleType)
                .then(response => setChecklistData(response))
            
        }, [])

    return (
        <div>
            {navigation()}
        </div>
    )
}

export default ChecklistContainer;
