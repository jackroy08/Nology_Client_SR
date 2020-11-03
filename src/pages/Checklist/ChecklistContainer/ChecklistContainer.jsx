import { Link } from '@reach/router';
import React, { useState } from 'react'
import ClassAChecks from '../ClassAChecks';
import ClassBChecks from '../ClassBChecks';
import ClassCChecks from '../ClassCChecks';
import Confirmation from '../Confirmation';

const ChecklistContainer = (props) => {
    
    const {checklistData, user} = props;
    const [step, setStep] = useState(1);
    const [vehicleType, setVehicleType] = useState("ADT");
    const [failedElements, setFailedElements] = useState({classA: {}, classB: {}, classC: {}});
    const vehicleKeys = Object.keys(checklistData);

    const failObject = (vehicleType, classType) => {
        return Object.keys(checklistData[vehicleType][classType]).reduce((acc, val) => {
                if (!document.getElementById(val).checked) {
                    acc[classType][val] = {
                        classType: classType, 
                        issue: val,
                        vehicleID: vehicleType,
                        operator: "2002",
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

    const vehicleChangeHandler = e => {
        setVehicleType(e.target.value);
    }

    const getVehicleTypes = thisVehicle => {
        return <option key={thisVehicle} value={thisVehicle}>{thisVehicle}</option> 
    };

    const propsMethods = {
                            setFailedElements: setFailedElements,
                            failedElements: failedElements,
                            failObject: failObject, 
                            checklistData: checklistData, 
                            vehicleType: vehicleType, 
                            nextHandler: nextHandler, 
                            backHandler: backHandler
                        }

    let navigation = () => {
        switch (step) {
                case 1: return (
                    <section>
                        <select onChange={vehicleChangeHandler} name="vehicle" id="vehicle"> 
                            {vehicleKeys.map(getVehicleTypes)}
                        </select> 
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
            {console.log(failedElements)}
            {navigation()}
        </div>
    )
}

export default ChecklistContainer;
