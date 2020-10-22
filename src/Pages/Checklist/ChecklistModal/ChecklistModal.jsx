import React, { useState } from 'react'
import ClassAChecks from '../ClassAChecks';

const ChecklistModal = (props) => {
    const {checklistData} = props;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [vehicleType, setVehicleType] = useState("adt");

    const submitHandler = ()  => {
        setIsSubmitted(true);
    }

    const changeHandler = e => {
        setVehicleType(e.target.value);
    }

    const getVehicleTypes = thisVehicle => {
        return <option value={thisVehicle}>{thisVehicle}</option> 
    };
    const vehicleKeys = Object.keys(checklistData)

    return (
        <>
            {isSubmitted ? <ClassAChecks checklistData={checklistData} vehicleType={vehicleType}  /> :
            <section>
                <select onChange={changeHandler} name="vehicle" id="vehicle"> 
                    {vehicleKeys.map(getVehicleTypes)}
                </select> 
                <button onClick={submitHandler}>Next</button>
            </section> }
        </>
    )
}

export default ChecklistModal;
