import React from "react";
import Styles from "./CreateVehicleForm.module.scss";
import Vehicle from "../../../../data/Vehicle";
import vehiclesArr from "../../../../data/vehicles";
import { useForm } from "react-hook-form";

const CreateVehicleForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const createNewVehicle = (vehicle) => {
        vehiclesArr.push(new Vehicle(vehicle.plantID, vehicle.plantType, vehicle.goStatus));
        console.log(vehiclesArr);
    }
    return (
        <form className={Styles.userForm} onSubmit={handleSubmit(createNewVehicle)}>
            <label htmlFor="plantID">Enter the Vehicle's Plant ID  :</label>
            <input 
                type="text"
                id="plantID"
                name="plantID"
                placeholder="eg: MINE123456"
                ref={register({ required: true })} />
                {errors.plantID && <p>plantID is required.</p>}
    
            <label htmlFor="plantType">Select the Vehicle Type:</label>
            <select 
                name="plantType" 
                id="plantType"
                ref={register({ required: true })}>
                {errors.plantType && <p>vehicle type is required.</p>}
                
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
                <option value="lightingPlant">Lighting Plant</option>
                <option value="loader">Loader</option>
                <option value="rdt">RDT</option>
                <option value="srvWaterBowser">SRV Water Bowser</option>
                <option value="tlb">TLB</option>
                <option value="trackDozer">Track Dozer</option>
                <option value="truckMountedCrane">Truck Mounted Crane</option>
            </select>
            <label htmlFor="goStatus">Vehicle Available for use:</label>
            <select 
                name="goStatus" 
                id="goStatus"
                ref={register({ required: true })}>
                {errors.goStatus && <p>please indicate if the vehicle is ready for use.</p>}
                
                <option value="">Please select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button className={Styles.btn} type="submit">Submit</button>
        </form>
    )
}

export default CreateVehicleForm;