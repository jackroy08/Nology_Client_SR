import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import Styles from './CreateVehicleForm.module.scss';
import { createVehicle } from '../../../../services/VehiclesService'
import { getVehicles, subscribeToVehicles } from '../../../../services/VehiclesService'

// ------ CLASSES ----- //

class Vehicle {
    constructor(vehicleID, vehicleType, goStatus)
    {
        this.vehicleID = vehicleID;
        this.vehicleType = vehicleType;
        this.goStatus = goStatus;
        this.currentTeam = null;
        this.currentUser = null;
        this.checkItems = null;
        this.lastChecked = new Date();
        this.checkedLog = null;
    }
}

// ------ JSX ----- //

const CreateVehicleForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [vehicleTypesArr, setVehicleTypesArr] = useState([]);
    
    const createNewVehicle = (data) => {
        {props.hide()}
        return createVehicle(new Vehicle(data.vehicleID, data.vehicleType, data.goStatus));
    }
    
    useEffect(() => {
        getVehicles().then(response => {
            setVehicleTypesArr(response.map(vehicle => vehicle.vehicleType));
        });
    }, [])
    
    return (
        <form className={Styles.userForm} onSubmit={handleSubmit(createNewVehicle)}>
            <label htmlFor="vehicleID">Enter the Vehicle's Vehicle ID  :</label>
            <input 
                type="text"
                id="vehicleID"
                name="vehicleID"
                placeholder="eg: MINE123456"
                ref={register({ required: true })} />
                {errors.vehicleID && <p>vehicleID is required.</p>}
    
            <label htmlFor="vehicleType">Select the Vehicle Type:</label>
            <select 
                name="vehicleType" 
                id="vehicleType"
                ref={register({ required: true })}>
                {errors.vehicleType && <p>vehicle type is required.</p>}
                
                <option value="">Please Select an option</option>
                <option value="articulatedWaterTruck">Articulated Water Truck</option>
                <option value="bus">Bus</option>
                <option value="dieselBowser">Diesel Bowser</option>
                <option value="drills">Drills</option>
                <option value="excavator">Excavator</option>
                <option value="fel">FEL</option>
                <option value="forklift">Forklift</option>
                <option value="grader">Grader</option>
                <option value="haulTruck">Haul Truck</option>
                <option value="hydraulicRigOperator">Hydraulic Rig Operator</option>
                <option value="ldv">LDV</option>
                <option value="lightingVehicle">Lighting Vehicle</option>
                <option value="loader">Loader</option>
                <option value="rdt">RDT</option>
                <option value="srvWaterBowser">SRV Water Bowser</option>
                <option value="tlb">TLB</option>
                <option value="trackDozer">Track Dozer</option>
                <option value="truckMountedCrane">Truck Mounted Crane</option>
            </select>
            
            <label htmlFor="goStatus">Vehicle's current Status:</label>
            <select 
                name="goStatus" 
                id="goStatus"
                ref={register({ required: true })}>
                {errors.goStatus && <p>please indicate if the vehicle's current status.</p>}
                <option value="go">Go</option>
                <option value="noGo">Go But</option>
                <option value="goBut">No Go</option>
            </select>

            <button
                className={`${Styles.btn} ${Styles.btnDanger}`}
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.hide}
                >Cancel
                </button>
            <button 
                className={`${Styles.btn} ${Styles.btnSuccess}`}
                type="submit"
                >Create</button>

        </form>
    )
}

export default CreateVehicleForm;