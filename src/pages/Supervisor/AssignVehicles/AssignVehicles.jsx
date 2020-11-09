import React from 'react';
import {useForm} from "react-hook-form";
import { updateUser } from "../../../services/UsersService";
import { updateVehicle } from "../../../services/VehiclesService";

export const AssignVehicles = (props) => {

    const { usersArr, vehiclesArr } = props;

    const { register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        let updatedUser = usersArr.filter(user => user.userID === data.driver)[0];
        let updatedVehicle = vehiclesArr.filter(vehicle => vehicle.vehicleID === data.vehicle)[0];
        updateUser({
            ...updatedUser, 
            assignedVehicle: data.vehicle
            }
        );
        updateVehicle({
            ...updatedVehicle,
            currentUser: data.driver
        });
    }

    return (
        <section>
            <h1>Assign Vehicles</h1>
            <div>
                <h2>Driver</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    
                    <select name="driver" ref={register({required: true})}>
                        {usersArr.filter((user) => user.userType === "operator").map(employee => <option key={employee.userID} value={employee.userID}>{`${employee.userID}-${employee.fullNameStr}`}</option>)}
                    </select>

                    <h2>Vehicle</h2>

                    <select name="vehicle" ref={register({required: true})}>
                        {vehiclesArr.map(vehicle => <option key={vehicle.vehicleID} value={vehicle.vehicleID}>{`${vehicle.vehicleType}-${vehicle.vehicleID}`}</option>)}
                    </select>
                    
                    <input type="submit"/>
                </form>
                </div>
        </section>
    )
}

export default AssignVehicles;