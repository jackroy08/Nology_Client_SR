import { Link } from '@reach/router';
import React, { useState } from 'react'
import ClassAChecks from '../ClassAChecks';
import ClassBChecks from '../ClassBChecks';
import ClassCChecks from '../ClassCChecks';
import Confirmation from '../Confirmation';

const ChecklistContainer = (props) => {
    
    const {checklistData, user} = props;
    console.log(user);
    const [step, setStep] = useState(1);
    const [vehicleType, setVehicleType] = useState("adt");
    const [failedElements, setFailedElements] = useState([]);
    const vehicleKeys = Object.keys(checklistData);

    const failObject = (vehicleType, classType) => {
        return Object.keys(checklistData[vehicleType][classType]).reduce((acc, val) => {
                if (!document.getElementById(val).checked) {
                    acc.push({"classType": classType, "issue": val ,
                            "vehicleID": vehicleType,
                            "operator": user,
                            "supervisor": "supervisor1"});
                    }
                return acc;
        }, failedElements);
    }
    //NEED TO CREATE A FUNCTION TO CHECK IF ELEMENTS ALREADY EXIST IN ARRAY
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

    const getChecklist = item => (
        <React.Fragment key={item}>
            <label htmlFor={item}>{item}
                <input type="checkbox" id={item} name={item} value={item}/>
            </label>
        </React.Fragment>
    );

    const propsMethods = {  getChecklist: getChecklist, 
                            setFailedElements: setFailedElements, 
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
            {navigation()}
        </div>
    )
}

export default ChecklistContainer;
