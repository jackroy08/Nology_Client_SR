import React, { useState, useEffect } from 'react';
import Styles from './ManageVehicles.module.scss';
import useModal from '../../../components/Modal/useModal';
import Modal from '../../../components/Modal';
import CreateVehicleForm from './CreateVehicleForm';
import VehicleItem from './VehicleItem';
import { firestore } from '../../../firebase'
import { getVehicles, subscribeToVehicles } from '../../../services/VehiclesService';

const ManageVehicles = () => {
    const {isShowing, toggle} = useModal();
    const [vehiclesArr, setVehiclesArr] = useState([]);
    const [vehicleTypesArr, setVehicleTypesArr] = useState([
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
    ]);
    const [filteredVehiclesArr, setFilteredVehiclesArr] = useState([]);
        
    useEffect(() => {
        getVehicles().then(response => {
            console.log(response)
            // setFilteredVehiclesArr(response);
            // setVehiclesArr(response);
            // setVehicleTypesArr([...new Set(response.map(vehicle => vehicle.vehicleType))]);
        });
        subscribeToVehicles(setVehiclesArr);
    }, [])

    useEffect(() => {
        if (vehiclesArr) {
            setFilteredVehiclesArr(vehiclesArr);
            // setVehicleTypesArr([...new Set(vehiclesArr.map(vehicle => vehicle.vehicleType))])
        }
    }, [vehiclesArr])

    const filterVehicles = (vehicleType) => {
        if (vehicleType) {
        setFilteredVehiclesArr(vehiclesArr.filter((vehicle) => vehicle.vehicleType === vehicleType))
        } else {
        setFilteredVehiclesArr(vehiclesArr)
        }
    };

    return (
        <section className={Styles.vehiclesListSection}>
            <header>
                <h3>Vehicles</h3>
                <button onClick={toggle}>Create New Vehicle</button>
                <Modal innerComponent={<CreateVehicleForm hide={toggle}/>} isShowing={isShowing} hide={toggle} />
                <select onChange={(event) => filterVehicles(event.target.value)}>
                        <option value="">All Vehicle Types</option>
                        {vehicleTypesArr.map((vehicle) => <option key={vehicle}>{vehicle}</option>)}
                    </select>
            </header>                    
            <ul className={Styles.vehiclesList}>
                <li className={Styles.columnTitles}>
                    <h4>Vehicle ID</h4>
                    <h4>Vehicle Type</h4>
                    <h4>Go Status</h4>
                    <h4>Current Team</h4>
                    <h4>Current User</h4>
                    <h4>last Checked</h4>
                    <h4>Action</h4>
                </li>
                {filteredVehiclesArr.map((vehicle) => <VehicleItem key={vehicle.vehicleID} vehicle={vehicle} />)}
                </ul>
        </section>    )
}

export default ManageVehicles;

//         <section className={Styles.vehiclesListSection}>
//             <header>
//                 <h3>Vehicles</h3>
//                 <button onClick={toggle}>Create New Vehicle</button>
//                 <select onChange={(event) => filterVehicleTypes(event.target.value)}>
//                         <option value="">All Vehicle Types</option>
//                         {vehicleTypesArr ? vehicleTypesArr.map((vehicleType) => <option key={vehicleType} value={vehicleType}>{vehicleType}</option>) : null}
//                     </select>
//                 {/* <CreateVehicleForm isShowing={isShowing} hide={toggle} /> */}
//             </header>                    
//             <ul className={Styles.vehiclesList}>
//                 <li className={Styles.columnTitles}>
//                     <h4>Vehicle ID</h4>
//                     <h4>Vehicle Type</h4>
//                     <h4>Go Status</h4>
//                     <h4>Current Vehicle</h4>
//                     <h4>Current User</h4>
//                     <h4>last Checked</h4>
//                 </li>
//                 {vehiclesArr.map(getVehicleItemJsx)}
//                 </ul>
//         </section>    )
// }




















































// import React, { useState } from 'react';
// import Styles from './ManageVehicles.module.scss';
// import useModal from '../../../components/Modal/useModal';
// import CreateVehicleForm from './CreateVehicleForm';

// const getVehicleItemJsx = (vehicle) => {
//     return (
//         <li key={vehicle.vehicleID} className={Styles.vehicleItem}>
//             <p>{vehicle.vehicleID}</p>
//             <p>{vehicle.vehicleType}</p>
//             <p>{vehicle.goStatus}</p>
//             <p>{vehicle.currentVehicle}</p>
//             <p>{vehicle.currentUser}</p>
//             <p>{vehicle.lastChecked}</p>
//             <button>Edit...</button>
//         </li>
//     )
// };


// const ManageVehicles = () => {
//     const {isShowing, toggle} = useModal();
//     const [vehiclesArr, setVehiclesArr] = useState([]);
//     const [vehicleTypesArr, setVehicleTypesArr] = useState([null]);
//     const [filteredVehicleTypesArr, setFilteredVehicleTypesArr] = useState([]);
    
//     const filterVehicleTypes = (vehicleType) => {
//         if (vehicleType) {
//         setFilteredVehicleTypesArr(vehicleTypesArr.filter((each) => each.vehicleType === vehicleType))
//         } else {
//         setFilteredVehicleTypesArr(vehicleTypesArr)
//         }
//     };

//     return (
//         <section className={Styles.vehiclesListSection}>
//             <header>
//                 <h3>Vehicles</h3>
//                 <button onClick={toggle}>Create New Vehicle</button>
//                 <select onChange={(event) => filterVehicleTypes(event.target.value)}>
//                         <option value="">All Vehicle Types</option>
//                         {vehicleTypesArr ? vehicleTypesArr.map((vehicleType) => <option key={vehicleType} value={vehicleType}>{vehicleType}</option>) : null}
//                     </select>
//                 {/* <CreateVehicleForm isShowing={isShowing} hide={toggle} /> */}
//             </header>                    
//             <ul className={Styles.vehiclesList}>
//                 <li className={Styles.columnTitles}>
//                     <h4>Vehicle ID</h4>
//                     <h4>Vehicle Type</h4>
//                     <h4>Go Status</h4>
//                     <h4>Current Vehicle</h4>
//                     <h4>Current User</h4>
//                     <h4>last Checked</h4>
//                 </li>
//                 {vehiclesArr.map(getVehicleItemJsx)}
//                 </ul>
//         </section>    )
// }

// export default ManageVehicles;
