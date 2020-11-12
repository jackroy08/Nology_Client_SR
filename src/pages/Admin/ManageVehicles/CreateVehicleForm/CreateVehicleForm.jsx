import React from 'react';
import { useForm } from "react-hook-form";
import Styles from './CreateVehicleForm.module.scss';
import { createVehicle } from '../../../../services/VehiclesService'
import { getVehicles } from '../../../../services/VehiclesService'
import { getTeams} from '../../../../services/TeamsService';


// ------ CLASSES ----- //

class Vehicle {
    constructor(vehicleID, vehicleType, goStatus, currentTeam)
    {
        this.vehicleID = vehicleID;
        this.vehicleType = vehicleType;
        this.goStatus = goStatus;
        this.currentTeam = currentTeam;
        this.currentUser = null;
        this.checkItems = null;
        this.lastChecked = new Date();
        this.checkedLog = null;
    }
}

// ------ JSX ----- //

const CreateVehicleForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { vehicleTypesArr } =  props;
    
    const createNewVehicle = (data) => {
        {props.hide()}
        return createVehicle(new Vehicle(data.vehicleID, data.vehicleType, data.goStatus, data.currentTeam));
    }
    
    const [teamNamesArr, setTeamNamesArr] = useState([null]);
    const [subTeamNamesArr, setSubTeamNamesArr] = useState([null]);
    
    useEffect(() => {
        getTeams().then(response => {
            setTeamNamesArr([...new Set(response.map(team => team.teamName))]);
            setSubTeamNamesArr([...new Set(response.map(team => team.subTeamName))]);
        });
    }, [])


    return (
        <form className={Styles.vehicleForm} onSubmit={handleSubmit(createNewVehicle)}>
            <label htmlFor="vehicleID">Enter the Vehicle's Vehicle ID  :</label>
            <input className={Styles.inputPrimary}
                type="text"
                id="vehicleID"
                name="vehicleID"
                placeholder="eg: 001"
                ref={register({ required: true })} />
                {errors.vehicleID && <p>vehicleID is required.</p>}
            
            <label htmlFor="vehicleType">Select the Vehicle Type:</label>
            <select className={Styles.selectPrimary}
                name="vehicleType" 
                id="vehicleType"
                ref={register({ required: true })}>
                {errors.vehicleType && <p>vehicle type is required.</p>}
                
                <option value="">Please Select option</option>
                {vehicleTypesArr.map((vehicle) => <option key={vehicle}>{vehicle}</option>)}
            </select>
            
            <label htmlFor="currentTeam">Select Team :</label>
            <select
                className={Styles.selectPrimary}
                name="currentTeam"
                id="currentTeam" 
                ref={register()}>
                <option value="">Select Team</option>
                {teamNamesArr.map((teamName) => <option key={teamName}>{teamName}</option>)}

            </select>

            <label htmlFor="goStatus">Vehicle's current Status:</label>
            <select className={Styles.selectPrimary}
                name="goStatus" 
                id="goStatus"
                ref={register({ required: true })}>
                {errors.goStatus && <p>please indicate if the vehicle's current status.</p>}

                <option value="go">Go</option>
                <option value="noGo">Go But</option>
                <option value="goBut">No Go</option>
            </select>

            <button
                className={`${Styles.btn} ${Styles.btnPrimary}`}
                data-dismiss="modal"
                aria-label="Close"
                onClick={props.hide}
                >Cancel
                </button>
            <button 
                className={`${Styles.btn} ${Styles.btnSecondary}`}
                type="submit"
                >Create</button>

        </form>
    )
}

export default CreateVehicleForm;