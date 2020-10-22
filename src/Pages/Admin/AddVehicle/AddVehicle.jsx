import React from "react";
import Styles from "./AddVehicle.module.scss";
import Vehicle from "../../../data/Vehicle";
import vehicleData from "../../../data/plantequipment";
import { useForm } from "react-hook-form";


const AddVehicle = () => {
    const { register, handleSubmit, errors } = useForm();
    const createNewVehicle = (vehicle) => {
            vehicleData.push(new Vehicle(vehicle.plantID, vehicle.plantType, vehicle.goStatus));
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
                
                
                >
                <option value="default">Please Select an option</option>
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
            <label htmlFor="canUSe">Vehicle Available for use:</label>
            <select 
                name="canUse" 
                id="canUse"
                
                
                >
                <option value="default">Please select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button className={Styles.btn} type="submit">Submit</button>
        </form>
    )
}}

export default AddVehicle;