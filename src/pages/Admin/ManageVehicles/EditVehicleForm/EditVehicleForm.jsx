import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import Styles from './EditVehicleForm.module.scss';
import sitesArr from '../../../../data/sites';
import { updateVehicle } from '../../../../services/VehiclesService'
import { getTeams} from '../../../../services/TeamsService';

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
        currentTeam
    } = props.vehicle

    const { register, handleSubmit, errors } = useForm();
    const [teamNamesArr, setTeamNamesArr] = useState([null]);
    const [subTeamNamesArr, setSubTeamNamesArr] = useState([null]);

    const updateCurrentVehicle = (data) => {
        const updatedVehicle = {
            vehicleType : data.vehicleType,
            goStatus : data.goStatus,
            currentTeam : data.currentTeam,
            vehicleID : vehicleID
        }
        {props.hide()}
        return updateVehicle(updatedVehicle);
    }

    useEffect(() => {
        getTeams().then(response => {
            setTeamNamesArr([...new Set(response.map(team => team.teamName))]);
            setSubTeamNamesArr([...new Set(response.map(team => team.subTeamName))]);
        });
    }, [])
    
    return (
        <form className={Styles.vehicleForm} onSubmit={handleSubmit(updateCurrentVehicle)}>
            <label htmlFor="vehicleType">Select Vehicle Type :</label>
            <select className={Styles.selectPrimary}
                defaultValue={vehicleType}
                name="vehicleType"
                id="vehicleType"
                ref={register({ required: true })}>
                <option value="">Select Vehicle Type :</option>
                {vehicleTypesArr.map((vehicle) => <option key={vehicle}>{vehicle}</option>)}
            </select>
            {errors.vehicleType && <p>Vehicle Type is required.</p>}


            <label htmlFor="goStatus">Select Go Status :</label>
            <select className={Styles.selectPrimary}
                defaultValue={goStatus}
                name="goStatus" 
                id="goStatus"
                ref={register({ required: true })}>
                {errors.goStatus && <p>please indicate if the vehicle's current status.</p>}
                
                <option value="go">Go</option>
                <option value="noGo">Go But</option>
                <option value="goBut">No Go</option>
            </select>
            
            <label htmlFor="currentTeam">Select Team :</label>
            <select
                defaultValue={currentTeam}
                className={Styles.selectPrimary}
                name="currentTeam"
                id="currentTeam" 
                ref={register()}>
                <option value="">Select Team</option>
                {teamNamesArr.map((teamName) => <option key={teamName}>{teamName}</option>)}

            </select>

            <button className={`${Styles.btn} ${Styles.btnPrimary}`} data-dismiss="modal" aria-label="Close" onClick={props.hide}>Cancel</button>
            <button className={`${Styles.btn} ${Styles.btnSecondary}`} type="submit">Update</button>
        </form>
    )
}

export default EditVehicleForm;
