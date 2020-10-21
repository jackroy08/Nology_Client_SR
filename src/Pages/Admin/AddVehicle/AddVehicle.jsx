import React from "react";
import Styles from "./AddVehicle.module.scss";
import Vehicle from "../../../data/Vehicle";
import vehicleData from "../../../data/plantequipment";

const createVehicleData = () => {
    // const formPlantID;
    // const formPlantType;
    // const formGoStatus;
    // const formVehicleData = new Vehicle();

    // Make new vehicle object from form information.
    // Stop page refreshing (for now).

    console.log("Working");
}

const AddVehicle = () => {
    return (
        <form className={Styles.userForm} onSubmit={createVehicleData}>
            <label htmlFor="plantID">Enter the Vehicle's Plant ID:</label>
            <input placeholder="enter the plant ID" name="plantID" id="plantID"></input>
            <label htmlFor="plantType">Select the Vehicle Type:</label>
            <select name="plantType" id="plantType">
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
            <select name="canUse" id="canUse">
                <option value="default">Please select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button className={Styles.btn} type="submit">Submit</button>
        </form>
    )
}

export default AddVehicle;