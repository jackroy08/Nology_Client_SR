import React from 'react';
import {useForm} from "react-hook-form";
import { updateUser } from "../../../services/UsersService";
import { updateVehicle } from "../../../services/VehiclesService";
import Styles from "./AssignVehicles.module.scss";
import showToast from "../../../services/toastService";
import {createNewsItem} from "../../../services/newsItemsService";

export const AssignVehicles = (props) => {

    const { usersArr, vehiclesArr } = props;

    const { register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const updatedUser = usersArr.filter(user => user.userID === data.driver)[0];
        const updatedVehicle = vehiclesArr.filter(vehicle => vehicle.vehicleID === data.vehicle)[0];

        //should remove vehicles and users previous links
        //should proabbly have a service function that does this?
        
        
        updateUser({
            ...updatedUser, 
            assignedVehicle: data.vehicle
            }
        );
        updateVehicle({
            ...updatedVehicle,
            currentUser: data.driver
        });
        showToast(`${updatedUser.fullNameStr} assigned to ${updatedVehicle.vehicleType}-${updatedVehicle.vehicleID}`,2000);
        createNewsItem({
            dateCreated: new Date(),
            title: `Vehicle Assigned`,
            message: `User ${data.driver} assigned to vehicle ${data.vehicle}`,
            team: usersArr[0].currentTeam,
            type: "vehicleAssigned",
            info: {},
            seenBy: [],
            isImportant: false
        })
    
        
    }

    return (
        <section>
            <h3 className={Styles.assignVehicleTitle}>Assign Vehicles</h3>
            <div>
                <form className={Styles.assignVehicleForm} action="" onSubmit={handleSubmit(onSubmit)}>
                    
                    <label>Driver</label>
                    <select className={Styles.selectPrimary} name="driver" ref={register({required: true})}>
                        {usersArr.map(employee => <option key={employee.userID} value={employee.userID}>{`${employee.userID}-${employee.fullNameStr}`}</option>)}
                    </select>

                    <label>Vehicle</label>
                    <select className={Styles.selectPrimary} name="vehicle" ref={register({required: true})}>
                        {vehiclesArr.map(vehicle => <option key={vehicle.vehicleID} value={vehicle.vehicleID}>{`${vehicle.vehicleType}-${vehicle.vehicleID}`}</option>)}
                    </select>
                    
                    <button className={Styles.btnPrimary} type="submit">Submit</button>
                </form>
                </div>
        </section>
    )
}

export default AssignVehicles;