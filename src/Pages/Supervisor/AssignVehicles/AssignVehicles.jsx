import React from 'react';
import {useForm} from "react-hook-form";
export const AssignVehicles = (props) => {

    const { setIsOverlayShown, setOverlayContent, operatorUsersArr, vehicleData } = props;

    const { register, handleSubmit} = useForm();

    // console.log(vehicleData);

    const onSubmit = (data) => {

        //go to database
        vehicleData.forEach(vehicle =>{
            if(vehicle.plantID === data.vehicle){
                vehicle.currentUser = data.driver;
            }
        });

        console.log(vehicleData);
    
    }

    return (
        <section>
            <h1>Assign Vehicles</h1>
            <div>
                <h2>Driver</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    
                    <select name="driver" ref={register({required: true})}>
                        {operatorUsersArr.map(employee => <option key={employee.userID} value={`${employee.userID}`}>{`${employee.userID}-${employee.fullNameStr}`}</option>)}
                    </select>

                    <h2>Vehicle</h2>

                    <select name="vehicle" ref={register({required: true})}>
                        {vehicleData.map(vehicle => <option key={vehicle.plantID} value={vehicle.plantID}>{`${vehicle.plantType}-${vehicle.plantID}`}</option>)}
                    </select>
                    
                    <input type="submit"/>
                    <button onClick={() => { setIsOverlayShown(false); setOverlayContent(null) }}>Cancel</button>
                </form>
                </div>
        </section>
    )
}

export default AssignVehicles;