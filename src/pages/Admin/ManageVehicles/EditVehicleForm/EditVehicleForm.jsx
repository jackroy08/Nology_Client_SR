import React from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditVehicleForm.module.scss';
import sitesArr from '../../../../data/sites';
import { updateVehicle } from '../../../../services/VehiclesService'

const vehicleTypesArr = [
    "Articulated Water Truck",
    "Diesel Bowser",
    "Drills",
    "Excavator",
    "Fel",
    "Forklift",
    "Grader",
    "Ldv",
    "Srv Water Bowser",
    "Track Dozer",
    "Rdt",
    "Truck Mounted Crane",
    "Tlb",
    "Lighting Vehicle",
    "Hydraulic Rig Operator",
    "Loader",
    "Haul Truck",
    "Bus"
];

const EditVehicleForm = (props) => {
    const {
        vehicleID,
        vehicleType,
        goStatus,
    } = props.vehicle

    const { register, handleSubmit, errors } = useForm();

    const updateCurrentVehicle = (data) => {
        const updatedVehicle = {
            vehicleType : data.vehicleType,
            goStatus : data.goStatus,
            vehicleID : vehicleID
        }
        {props.hide()}
        return updateVehicle(updatedVehicle);
    }
    
    return (
        <form className={Styles.vehicleForm} onSubmit={handleSubmit(updateCurrentVehicle)}>
            <label htmlFor="vehicleType">Select Vehicle Type :</label>
            <select
                defaultValue={vehicleType}
                name="vehicleType"
                id="vehicleType"
                ref={register({ required: true })}>
                <option value="">Select Vehicle Type :</option>
                {vehicleTypesArr.map((vehicle) => <option key={vehicle}>{vehicle}</option>)}
            </select>
            {errors.vehicleType && <p>Vehicle Type is required.</p>}

            <label htmlFor="goStatus">Select Go Status :</label>
            <select
                defaultValue={goStatus}
                name="goStatus" 
                id="goStatus"
                ref={register({ required: true })}>
                {errors.goStatus && <p>please indicate if the vehicle's current status.</p>}
                
                <option value="go">Go</option>
                <option value="noGo">Go But</option>
                <option value="goBut">No Go</option>
            </select>
            
            <button className={`${Styles.btn} ${Styles.btnDanger}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSuccess}`} type="submit">Update</button>
        </form>
    )
}

export default EditVehicleForm;
