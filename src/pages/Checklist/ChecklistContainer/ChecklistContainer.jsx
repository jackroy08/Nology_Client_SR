import { Link } from '@reach/router';
import React, { useState } from 'react'
import ClassAChecks from '../ClassAChecks';
import ClassBChecks from '../ClassBChecks';
import ClassCChecks from '../ClassCChecks';
import Confirmation from '../Confirmation';

const ChecklistContainer = (props) => {
    const {checklistData} = props;
    const [step, setStep] = useState(1);
    const [vehicleType, setVehicleType] = useState("adt");
    const [failedElements, setFailedElements] = useState({});

    const failObject = (vehicleType, classType) => {
        return Object.keys(checklistData[vehicleType][classType]).reduce((acc, val) => {
            acc[classType][val] = false;
            return acc;
        }, {classA: {}, classB: {}, classC:{}});
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
        return <option value={thisVehicle}>{thisVehicle}</option> 
    };
    const vehicleKeys = Object.keys(checklistData);

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
                case 2: return <ClassAChecks setFailedElements={setFailedElements} failObject={failObject} nextHandler={nextHandler} backHandler={backHandler} checklistData={checklistData} vehicleType={vehicleType} />
                case 3: return <ClassBChecks setFailedElements={setFailedElements} failObject={failObject} nextHandler={nextHandler} backHandler={backHandler} checklistData={checklistData} vehicleType={vehicleType} />
                case 4: return <ClassCChecks setFailedElements={setFailedElements} failObject={failObject} nextHandler={nextHandler} backHandler={backHandler} checklistData={checklistData} vehicleType={vehicleType} />
                case 5: return <Confirmation setFailedElements={setFailedElements} failObject={failObject} nextHandler={nextHandler} backHandler={backHandler} checklistData={checklistData} vehicleType={vehicleType} />
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
