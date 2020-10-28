import React, { useState } from 'react';
import Styles from './ManageVehicles.module.scss';
import vehiclesArr from '../../../data/vehicles';
import useModal from '../../../components/Modal/useModal';
import CreateVehicleForm from './CreateVehicleForm';



const getVehicleItemJsx = (vehicle) => {
    return (
        <li key={vehicle.plantID} className={Styles.vehicleItem}>
            <p>{vehicle.plantID}</p>
            <p>{vehicle.plantType}</p>
            <p>{vehicle.goStatus}</p>
            <p>{vehicle.currentTeam}</p>
            <p>{vehicle.currentUser}</p>
            <p>{vehicle.lastChecked}</p>
            <button>Edit...</button>
        </li>
    )
};

const ManageVehicles = () => {
    const {isShowing, toggle} = useModal();
    
    return (
        <section className={Styles.vehiclesListSection}>
            <header>
                <h3>Vehicles</h3>
                <button onClick={toggle}>Create New Vehicle</button>
                {/* <CreateVehicleForm isShowing={isShowing} hide={toggle} /> */}
            </header>                    
            <ul className={Styles.vehiclesList}>
                <li className={Styles.columnTitles}>
                    <h4>Plant ID</h4>
                    <h4>Plant Type</h4>
                    <h4>Go Status</h4>
                    <h4>Current Team</h4>
                    <h4>Current User</h4>
                    <h4>last Checked</h4>
                </li>
                {vehiclesArr.map(getVehicleItemJsx)}
                </ul>
        </section>    )
}

export default ManageVehicles;
