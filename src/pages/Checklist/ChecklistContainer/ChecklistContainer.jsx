import { Link } from '@reach/router';
import React, { useState, useContext } from 'react'
import ClassAChecks from '../ClassAChecks';
import ClassBChecks from '../ClassBChecks';
import ClassCChecks from '../ClassCChecks';
import Confirmation from '../Confirmation';
import { UserContext } from "../../../context/userContext";

const ChecklistContainer = (props) => {
    const { user, vehicle } = useContext(UserContext);
    const { checklistData } = props;
    const [step, setStep] = useState(1);
    const [failedElements, setFailedElements] = useState({classA: {}, classB: {}, classC: {}});

    const failObject = (vehicleType, classType) => {
        return Object.keys(checklistData[vehicleType][classType]).reduce((acc, val) => {
                if (!document.getElementById(val).checked) {
                    acc[classType][val] = {
                        classType: classType, 
                        issue: val,
                        vehicleID: vehicle.plantID, //THIS NEEDS TO CHANGE TO WHATEVER NICK CHANGED IT TO
                        operator: user.userID,
                        supervisor: "supervisor1",
                        additionalDetails: document.getElementById("additional-details").value,
                        dateCreated: new Date().toUTCString()
                        //NEED TO CHANGE THESE VALUES BASED ON USER LOGGED IN
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

    const getVehicleTypes = thisVehicle => {
        return <option key={thisVehicle} value={thisVehicle}>{thisVehicle}</option> 
    };

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
                case 5: return <Confirmation backHandler={backHandler} failedElements={failedElements} />
                default: return "error page"
            }
        }

    return (
        <div>
            {console.log(vehicle)}
            {navigation()}
        </div>
    )
}

export default ChecklistContainer;
